import { NextRequest, NextResponse } from "next/server";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { recommendPlanFromDistilledData, type RecommendedPlan } from "@/lib/instrumentation-kb";

function normalizeOpenAiBaseUrl(baseUrl: string | undefined) {
  const fallback = "https://api.openai.com/v1";
  const raw = baseUrl?.trim();

  if (!raw) {
    return fallback;
  }

  return raw.replace(/\/+$/, "");
}

const OPENAI_BASE_URL = normalizeOpenAiBaseUrl(process.env.OPENAI_BASE_URL);
const OPENAI_API_URL = `${OPENAI_BASE_URL}/responses`;
const DEFAULT_OCR_MODEL = process.env.OPENAI_OCR_MODEL || process.env.OPENAI_MODEL || "gpt-4.1-mini";
const OCR_OUTPUT_TOKEN_LIMIT = 480;
const OCR_TEXT_PRIORITY_THRESHOLD = 96;
const HARD_OCR_TOTAL_TOKEN_BUDGET_CAP = 1_000_000;
const OCR_BUDGET_FILE = path.join(process.cwd(), "data", "instrumentation-ocr-budget.json");

function parsePositiveIntegerEnv(value: string | undefined, fallback: number, cap?: number) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return fallback;
  }

  const normalized = Math.floor(parsed);
  return typeof cap === "number" ? Math.min(normalized, cap) : normalized;
}

const OCR_TOTAL_TOKEN_BUDGET = parsePositiveIntegerEnv(
  process.env.INSTRUMENTATION_OCR_TOKEN_BUDGET,
  HARD_OCR_TOTAL_TOKEN_BUDGET_CAP,
  HARD_OCR_TOTAL_TOKEN_BUDGET_CAP,
);
const OCR_REQUEST_TOKEN_RESERVE = parsePositiveIntegerEnv(
  process.env.INSTRUMENTATION_OCR_REQUEST_RESERVE,
  12_000,
  OCR_TOTAL_TOKEN_BUDGET,
);

export const runtime = "nodejs";

interface RequestBody {
  topic?: string;
  lang?: "en" | "zh";
  imageDataUrl?: string;
}

interface OcrBudgetState {
  totalBudget: number;
  totalUsed: number;
  updatedAt: string;
}

interface OcrUsage {
  inputTokens: number;
  outputTokens: number;
  totalTokens: number;
}

interface OcrExtractionResult {
  text: string;
  usage: OcrUsage;
}

interface PlanResponseMeta {
  mode: "local-kb" | "local-kb-plus-ocr";
  ocrAttempted: boolean;
  ocrUsed: boolean;
  ocrBudget: {
    totalBudget: number;
    totalUsed: number;
    remaining: number;
    requestReserve: number;
  };
  ocrUsage?: OcrUsage;
  budgetNotice?: string;
}

const zhFamilyLabelMap: Array<[string, string]> = [
  ["Electrical parameter testing", "电路参数测试"],
  ["Distortion and spectral measurement", "失真与频谱测量"],
  ["Cable and transmission-line diagnostics", "线缆与传输线检测"],
  ["Adaptive filtering and active compensation", "自适应滤波与主动补偿"],
  ["Signal reception and synchronization", "接收与同步"],
  ["Localization and ranging", "定位与测距"],
  ["Vision-based measurement", "视觉测量"],
  ["Networked measurement and remote truth", "联网测量与远端真值"],
  ["Modulation recognition and parameter estimation", "调制识别与参数估计"],
  ["Load analysis and classification", "负载分析与分类"],
  ["Signal separation and component recovery", "信号分离与分量恢复"],
  ["Model identification and replay", "模型辨识与回放验证"],
];

const zhExactPlanText = new Map<string, string>([
  ["Distilled Backbone", "蒸馏主线"],
  ["Route Focus", "路线落点"],
  ["No strong explicit cue was found, so the plan falls back to the common instrumentation chain.", "题面没有特别强的显式关键词，因此先按通用仪器仪表测量链路兜底。"],
  ["The statement appears concentrated in one family, so the recommendation keeps the main chain focused.", "当前题面更集中于单一题型，建议优先把主链路做深做稳。"],
  ["The output is driven by the local distilled instrumentation database.", "推荐结果优先来自本地蒸馏题库，而不是自由生成。"],
  ["A stable clock, known reference path, and observable front-end states are mandatory.", "稳定时钟、已知参考路径、可观测前端状态，这三项是仪表题共性底座。"],
  ["Keep debug outputs visible enough that the team can explain the chain live.", "调试输出要保留到能现场解释整条测量链路为止。"],
  ["Reference drift, front-end saturation, timing skew, and untracked range changes are common score killers.", "参考漂移、前端饱和、时序偏斜、量程切换失控，都是典型失分点。"],
  ["If the physical observable is unstable, software polish cannot rescue the answer.", "如果物理可观测量本身不稳定，软件再精致也救不回来。"],
  ["What raw observable is trusted before the final solver or classifier runs?", "在最终求解或分类之前，最可信的原始可观测量是什么？"],
  ["Which calibration step most reduces the final error?", "哪一步标定对最终误差下降最关键？"],
  ["Add more edge cases only after the baseline route is stable.", "先把基线路线做稳，再去补更多边界情况。"],
  ["National-level polish usually comes from error closure and robustness, not from a brand-new architecture.", "国奖级提升通常来自误差闭环和鲁棒性，而不是推倒重来换架构。"],
  ["Final output must match the problem's scored quantity rather than a proxy plot.", "最终输出必须对应题目真正评分的量，而不是替代性的示意图。"],
  ["Expose at least one intermediate observable that explains the final result.", "至少暴露一个能解释最终结果的中间可观测量。"],
  ["One stable bench case is the anchor for all tuning and defense.", "一个稳定台架样例应作为调参和答辩的共同锚点。"],
  ["The raw-to-final chain should remain inspectable during the demo.", "演示时应能看清从原始量到最终结果的整条链路。"],
  ["One repeatable main metric on a known sample.", "在已知样件上至少拿到一个可复现的主指标。"],
  ["One honest boundary statement about unsupported or unstable cases.", "对暂不支持或不稳定的情况要有明确边界说明。"],
  ["MCU or DSP with deterministic sampling and enough RAM for capture buffers.", "需要具备确定性采样能力且缓存充足的 MCU 或 DSP。"],
  ["Stable analog front-end with protection, scaling, and debug access.", "需要稳定的模拟前端，并具备保护、量程缩放和调试观测口。"],
  ["Add a cleaner reference source or better clock before adding complex algorithms.", "先补更干净的参考源或更好的时钟，再考虑复杂算法。"],
  ["Use external ADC or comparator support only if the baseline route proves bandwidth-limited.", "只有在基线路线明确受带宽限制时，再引入外部 ADC 或比较器。"],
  ["Prepare at least one known-good reference source and one known-bad stress case.", "至少准备一个已知正常参考源和一个已知极限压力样例。"],
  ["Keep scope and serial logging available during every integration step.", "每一步联调都保留示波器观测和串口日志。"],
  ["Zero or offset first, gain second, timing or phase third, and algorithm correction last.", "标定顺序优先是零点，其次增益，再是时序或相位，最后才是算法补偿。"],
  ["Re-run a small fixed checklist after every front-end change.", "每次改前端后都要重跑一份固定小检查单。"],
  ["Save one short calibration table and one short failure checklist.", "保留一页精简标定表和一页精简故障排查表。"],
  ["Keep one frozen demo route that can survive time pressure.", "保留一条在比赛压力下也能稳定演示的冻结路线。"],
  ["Main metric jumps when the operating point changes slightly.", "工作点轻微变化时主指标大幅跳动。"],
  ["A good-looking plot does not match the final scored number.", "图看起来不错，但和最终评分数值对不上。"],
  ["Confirm reference integrity, timing integrity, and front-end range selection.", "先确认参考完整性、时序完整性和前端量程选择是否正确。"],
  ["Compare current behavior against the last known-good benchmark capture.", "把当前表现和最近一次已知正常的基准采样对比。"],
  ["Untracked calibration drift, timing skew, saturation, or wrong physical assumptions.", "常见根因包括标定漂移失控、时序偏斜、饱和和物理假设错误。"],
  ["Late-stage algorithm changes without restoring baseline measurements.", "临近结束时改算法，却没有回到基线测量重新验证。"],
  ["Freeze to one trusted range and one trusted test case.", "先冻结到一个可信量程和一个可信测试样例。"],
  ["Reduce the claim to the part of the chain that is still repeatable and defendable.", "把结论收缩到仍然可复现、可答辩的那部分链路。"],
  ["Our design locks the raw observable before solving the final scored output.", "我们的方案先锁定原始可观测量，再去求最终评分结果。"],
  ["First we define the physical observable, then we show how the front end preserves it, then how the algorithm converts it into the final answer.", "我们先定义物理可观测量，再说明前端如何保住它，最后说明算法如何把它变成最终答案。"],
  ["Finally we close the error loop with calibration, boundary cases, and repeatability checks.", "最后再用标定、边界情况和重复性验证把误差闭环补齐。"],
  ["We separate hardware error, timing error, and algorithm error instead of blending them together.", "我们把硬件误差、时序误差和算法误差分开处理，而不是混在一起。"],
  ["The biggest gain came from stabilizing the measurement chain before expanding the feature set.", "最大的提升来自先把测量链路做稳，而不是先堆更多特征。"],
  ["Start from a known bench case, show the raw observable, then show the final result.", "演示时先从一个已知台架样例开始，先看原始可观测量，再看最终结果。"],
  ["End with one edge case that proves the route is not overfit to a single example.", "最后加一个边界样例，证明路线不是只对单一样例过拟合。"],
  ["One stable route with a truthful final metric.", "至少有一条稳定路线，并给出真实可信的最终指标。"],
  ["No hidden resets, silent saturation, or unexplained range changes.", "不能有隐藏复位、静默饱和或说不清的量程切换。"],
  ["Repeatability survives multiple runs and a small operating-point change.", "在多次重复和轻微工作点变化下仍保持重复性。"],
  ["The defense story is consistent with the observed data.", "答辩口径要和观测到的数据一致。"],
  ["Robustness holds under broader cases and tighter error budgets.", "在更宽的工况和更紧的误差预算下仍具备鲁棒性。"],
  ["The team can explain both success cases and failure boundaries cleanly.", "队伍不仅能解释成功样例，也能清楚说明失败边界。"],
  ["Bring up excitation, sampling, display, and logging as early as possible.", "尽早打通激励、采样、显示和日志。"],
  ["Record one known benchmark capture before writing advanced logic.", "在写复杂逻辑之前，先录下一份已知正确的基准采样。"],
  ["Stabilize the family's raw observable and its calibration flow.", "先把该题型的原始可观测量和标定流程做稳。"],
  ["Write the smallest useful solver or classifier around that observable.", "围绕该可观测量实现最小可用的求解器或分类器。"],
  ["Add family-specific edge cases and one defense-oriented benchmark.", "再补题型特有的边界情况和一个面向答辩的基准样例。"],
  ["Keep architecture changes smaller than the validation loop.", "架构改动的节奏不要快过验证闭环。"],
  ["Run a frozen architecture with only bug fixes allowed.", "模赛阶段只允许修 bug，不再大改架构。"],
  ["Practice one concise measurement-chain story and one concise error-budget story.", "训练一套精简的测量链路话术和一套精简的误差预算话术。"],
  ["Makes reference-vs-measurement comparisons explicit.", "让参考通道与被测通道的对比关系显式可见。"],
  ["Time alignment", "时间对齐"],
  ["Range consistency", "量程一致性"],
  ["Cross-channel skew can dominate the final result.", "双通道偏斜可能直接主导最终误差。"],
  ["Feed the same signal into both channels and measure residual mismatch.", "把同一信号同时送入两路，直接测残差失配。"],
  ["Dual-channel amplitude and phase extraction.", "双通道幅相提取。"],
  ["Known excitation with parameter inversion.", "已知激励下的参数反演。"],
  ["Move from one-point solving to calibrated sweep checks.", "从单点求解扩展到带标定的扫频校验。"],
  ["Do not start with dense fitting before one stable point works.", "在单个稳定工作点没跑通前，不要一上来就做复杂拟合。"],
  ["Ask what the final judged output is.", "先问清最终被评分的输出到底是什么。"],
  ["Ask whether the route depends on a physical reference, a geometry baseline, or a class boundary.", "判断这条路线到底依赖物理参考、几何基线，还是分类边界。"],
  ["Reject routes that cannot explain the scored metric with a visible raw observable.", "凡是无法用可见原始量解释评分指标的路线，优先排除。"],
  ["Reject routes that need too many unsupported assumptions under contest time.", "凡是在比赛时间内需要太多无法自证假设的路线，优先排除。"],
  ["Teams often over-focus on algorithms and under-explain the measurement chain.", "很多队伍容易过度关注算法，却讲不清测量链路。"],
  ["Plots are often mistaken for evidence even when the scored metric is elsewhere.", "很多时候图像展示被误当成证据，但真正评分点并不在那里。"],
  ["Restate the measurement object, raw observable, and final deliverable in one sentence.", "用一句话重新说清测量对象、原始可观测量和最终交付。"],
  ["Run one known-good benchmark and compare it to the last validated capture.", "重跑一个已知正常基准，并和上一次通过验证的采样结果对比。"],
  ["Claim only the cases where the raw observable is repeatable.", "只宣称那些原始可观测量可复现的工况。"],
  ["Prefer a narrower but repeatable operating range.", "宁可范围窄一些，也要保证可重复。"],
  ["Do not add a second route when the first route is not yet stable.", "第一条路线没稳之前，不要急着开第二条路线。"],
  ["Do not broaden the supported class or case list on the last day.", "最后一天不要再扩支持类别或场景列表。"],
  ["Creates controllable excitation that anchors the measurement chain.", "提供可控激励，作为整条测量链路的起点。"],
  ["Known excitation is part of the answer.", "题目答案本身依赖已知激励。"],
  ["Frequency or timing must be controlled explicitly.", "频率或时序必须显式受控。"],
  ["Stable frequency", "稳定频率"],
  ["Repeatable amplitude or edge", "可重复的幅值或边沿"],
  ["A drifting reference breaks downstream interpretation.", "参考源一旦漂移，后级解释都会失真。"],
  ["Probe the source and compare it against the timing reference.", "先量激励源本身，再和时序参考对比。"],
  ["Converts stable sampled records into frequency-domain evidence.", "把稳定采样记录转换成频域证据。"],
  ["Harmonics, carrier features, or frequency-domain separation evidence matter.", "当谐波、载波特征或频域分离证据是评分重点时使用。"],
  ["Period alignment", "周期对齐"],
  ["Stable window choice", "稳定的窗函数选择"],
  ["Leakage or clipping produces misleading spectral conclusions.", "泄漏和削顶会直接误导频谱结论。"],
  ["Run one clean sine and verify the expected bin structure.", "先跑一个干净正弦，确认频谱主瓣结构符合预期。"],
  ["Implements the update law that creates convergence and suppression evidence.", "实现自适应更新律，形成收敛和抑制证据。"],
  ["A meaningful reference signal exists.", "存在有意义的参考信号。"],
  ["The task is scored by online suppression behavior.", "题目按在线抑制效果评分。"],
  ["Reference correlation", "参考相关性"],
  ["Stable step-size behavior", "稳定的步长行为"],
  ["A pretty output without convergence evidence is not enough.", "只有好看的输出，没有收敛证据是不够的。"],
  ["Show suppression before and after adaptation on a repeatable case.", "在可重复样例上展示自适应前后的抑制对比。"],
  ["Launches and captures signatures without destroying line-state evidence.", "在不破坏线状态证据的前提下完成激励和回波采集。"],
  ["Open, short, matched, or bad-contact language is central.", "当题面核心是开路、短路、匹配或接触不良时使用。"],
  ["Protected launch", "受保护的发射路径"],
  ["Observable return signature", "可观测的回波特征"],
  ["Protection or coupling erases the feature the algorithm needs.", "保护或耦合设计不当会抹掉算法真正需要的特征。"],
  ["Compare open, short, and matched captures side by side.", "把开路、短路、匹配三种采样并排对比。"],
  ["Turns synchronization evidence into a truthful lock, unlock, or relock decision.", "把同步证据转成可信的锁定、失锁和重锁判定。"],
  ["The answer must prove lock behavior rather than only signal cleanliness.", "答案必须证明锁定行为，而不只是信号看起来更干净。"],
  ["Explicit lock criterion", "明确的锁定判据"],
  ["State-transition logging", "状态迁移日志"],
  ["A vague lock definition makes every demo fragile.", "锁定定义含糊，会让整场演示都站不住脚。"],
  ["Induce loss of lock and measure relock timing.", "主动制造失锁并测重锁时间。"],
  ["Turns calibrated observables into distance, pose, or coordinates with explicit assumptions.", "在明确假设下，把标定后的观测量转换成距离、姿态或坐标。"],
  ["The task depends on geometry, anchors, or calibrated image relationships.", "当题目依赖几何关系、锚点或标定图像关系时使用。"],
  ["Calibrated baseline", "已标定基线"],
  ["Repeatable observables", "可重复的观测量"],
  ["A good-looking output may still be wrong if geometry assumptions drift.", "几何假设漂移后，输出看起来正常也可能是错的。"],
  ["Check one known point or one known-size target against ground truth.", "拿一个已知点位或已知尺寸目标去对真值。"],
  ["Known excitation.", "已知激励。"],
  ["Dual-channel sampling.", "双通道采样。"],
  ["Amplitude-phase solver.", "幅相求解器。"],
  ["Accurate passive-parameter output.", "准确的无源参数输出。"],
  ["Known-component cross-check.", "已知元件交叉校验。"],
  ["Phase bias is ignored.", "忽略了相位偏差。"],
  ["Sweep fitting is attempted too early.", "过早开始做扫频拟合。"],
  ["Parameter truth.", "参数真值可信度。"],
  ["Adaptive-noise-cancellation style labs.", "自适应降噪类实验。"],
  ["Compensation or mixture-suppression tasks that still need a meaningful reference story.", "仍然需要清晰参考信号叙事的补偿或混合抑制类任务。"],
  ["Convergence plotting.", "收敛过程绘图。"],
  ["One unchanged benchmark that proves reference usefulness.", "保留一个不变基准，用来证明参考信号确实有用。"],
  ["Blindly scaling step size without reference checks.", "没有验证参考有效性就盲目调步长。"],
  ["Porting suppression logic into a new task without checking whether the reference still explains the result.", "把抑制逻辑迁到新任务时，没有先确认参考信号是否仍能解释结果。"],
  ["Verify reference correlation before porting logic.", "迁移逻辑前先验证参考相关性。"],
  ["If the new task also mentions separation or compensation, replay one pure adaptive benchmark before trusting the overlap.", "如果新题还涉及分离或补偿，先重放一个纯自适应基准，再决定是否真的能复用。"],
]);

function localizePlanStringForZh(text: string): string {
  const trimmed = text.trim();
  let result = zhExactPlanText.get(trimmed) ?? trimmed;

  for (const [en, zh] of zhFamilyLabelMap) {
    result = result.replaceAll(en, zh);
  }

  result = result
    .replace(/^Secondary family add-on:\s*/g, "次级题型补充：")
    .replace(/^\?+\s*/g, "次级题型补充：")
    .replace(/^Primary family match:\s*/g, "主判定题型：")
    .replace(/^Matched cues:\s*/g, "命中的关键词：")
    .replace(/^Preferred route:\s*/g, "优先落地路线：")
    .replace(/^Closest historical matches:\s*/g, "最接近的历年题：")
    .replace(/^Reference problems:\s*/g, "参考题目：")
    .replace(/^Distilled backbone:\s*/g, "蒸馏主线：")
    .replace(/^Secondary family overlap:\s*/g, "次级关联题型：")
    .replace(/^Preferred implementation route:\s*/g, "优先落地路线：")
    .replace(/^Hardware gate:\s*/g, "硬件前提：")
    .replace(/^Problem cues that pushed this route:\s*/g, "推动该路线的题面线索：")
    .replace(/^Stabilize these target outputs first:\s*/g, "先把这些结果测稳：")
    .replace(/^Closest distilled historical match:\s*/g, "最近的历年映射题：")
    .replace(/^Distilled family backbone:\s*/g, "蒸馏主线：")
    .replace(/^Strong cue:\s*(.+)\.$/g, "强触发词：$1。")
    .replace(/^Weak cue:\s*(.+)\.$/g, "弱触发词：$1。")
    .replace(/^Primary object:\s*(.+)\.$/g, "主要测量对象：$1。")
    .replace(/^Dual-channel capture$/g, "双通道采集")
    .replace(/^Stimulus source$/g, "激励源模块")
    .replace(/^FFT analysis core$/g, "FFT 分析核心")
    .replace(/^Adaptive filter core$/g, "自适应滤波核心")
    .replace(/^Line-state front end$/g, "线状态前端")
    .replace(/^Lock-state machine$/g, "锁定状态机")
    .replace(/^Geometry solver$/g, "几何求解模块")
    .replace(/^Stimulus source$/g, "激励源")
    .replace(/^Signal generation$/g, "信号激励")
    .replace(/^Phase extraction$/g, "相位提取")
    .replace(/^Amplitude extraction$/g, "幅值提取")
    .replace(/^Parameter solver$/g, "参数求解")
    .replace(/^Within this family, the closest implementation route is:\s*(.+)\.$/g, "在该题型里，当前最贴近的落地路线是：$1。")
    .replace(/^The recommendation starts from the default route of this family:\s*(.+)\.$/g, "当前先采用该题型的默认落地路线：$1。")
    .replace(/^This family was also reinforced by distilled trigger cues:\s*(.+)\.$/g, "蒸馏触发线索也在强化该判断：$1。")
    .replace(/^Statement-pattern matches also reinforced this family:\s*(.+)\.$/g, "题面表述模式也在支持该题型：$1。")
    .replace(/^Family lexicon matches also reinforced this family:\s*(.+)\.$/g, "题型词汇也在支持该题型：$1。")
    .replace(/^Pairwise family-boundary checks also shaped this match against:\s*(.+)\.$/g, "和以下竞争题型做过边界区分：$1。")
    .replace(/^Contrastive wording in the statement also favored this family over:\s*(.+)\.$/g, "题面中的对比式表述也更偏向该题型，而不是：$1。")
    .replace(/^The database also checked near-miss routes and kept this family after comparing against:\s*(.+)\.$/g, "数据库还比对了近似误判路线，最终没有切过去：$1。")
    .replace(/^Competing-family cues were detected and suppressed through disambiguation:\s*(.+)\.$/g, "也检测到了竞争题型线索，并通过区分条件压下：$1。")
    .replace(/^The database also surfaced route-rejection cues that should cap overclaiming:\s*(.+)\.$/g, "数据库还识别到需要控制过度宣称的否决信号：$1。")
    .replace(/^We treat this as a (.+) problem first, not as a generic coding problem\.$/g, "我们先把这题当作$1来处理，而不是泛泛的编程题。")
    .replace(/^Prefer a single stable route for (.+)\.$/g, "优先选择一条针对$1的稳定路线。")
    .replace(/^Treat the problem as (.+) first\.$/g, "先把这道题按$1来理解。")
    .replace(/^Report one raw observable and one final metric together\.$/g, "原始可观测量和最终指标要一起报告。")
    .replace(/^Separate repeatability from peak performance\.$/g, "把重复性和峰值性能分开说明。")
    .replace(/^State the trusted operating range and the unsupported boundary case\.$/g, "明确可信工作范围和不支持的边界情况。")
    .replace(/^Note any dependence on reference quality, geometry, or synchronization\.$/g, "说明是否依赖参考质量、几何基线或同步条件。")
    .replace(/^Provide a stable main demo path and one edge-case replay\.$/g, "准备一条稳定主演示路径，再补一个边界场景回放。")
    .replace(/^Keep the final answer visible on screen and explainable from the capture\.$/g, "最终答案要在界面上可见，并能从采样链路解释出来。")
    .replace(/^It mentions residual plots and suppression\.$/g, "题面提到了残差曲线和抑制效果。")
    .replace(/^The real target is adaptive convergence, not multi-component recovery\.$/g, "真正目标是自适应收敛，不是多分量恢复。")
    .replace(/^Is the answer mainly judged by convergence and reference usefulness\?$/g, "这道题主要看的是收敛过程和参考信号是否有用吗？")
    .replace(/^Conditioning, capture, and residual display\.$/g, "信号调理、采集链路和残差展示。")
    .replace(/^Component-recovery narrative\.$/g, "分量恢复这套叙事先别沿用。")
    .replace(/^It still ends with a coordinate output and geometry solving\.$/g, "它表面上仍然以坐标输出和几何求解收尾。")
    .replace(/^The strongest physical cues come from calibrated visual markers rather than from a pure ranging chain\.$/g, "最强的物理线索来自已标定视觉标记，而不是纯测距链路。")
    .replace(/^If the camera calibration collapses, does the whole answer collapse even before anchor timing is discussed\?$/g, "如果相机标定失效，是否在讨论锚点时序前整题就已经失败？")
    .replace(/^Geometry solver, known-point fixtures, and coordinate validation flow\.$/g, "几何求解器、已知点工装和坐标验证流程。")
    .replace(/^Propagation-only ranging story\.$/g, "不要继续沿用纯传播测距的话术。")
    .replace(/^It still speaks the language of anchors and coordinate outputs\.$/g, "题面仍然在讲锚点和坐标输出。")
    .replace(/^The judged risk becomes whether remote transport preserves localization truth honestly\.$/g, "真正评分风险变成远端传输是否忠实保留了定位真值。")
    .replace(/^Would the answer still fail if local coordinates were right but the remote side hid stale data\?$/g, "如果本地坐标是对的，但远端把陈旧数据藏起来，这题还会不会判失败？")
    .replace(/^Known-point validation, synchronized anchor events, and timing sanity checks\.$/g, "已知点验证、同步锚点事件和时序合理性检查。")
    .replace(/^Local-only positioning narrative\.$/g, "不要继续只讲本地定位这一套。")
    .replace(/^Replay one defended source table on every active channel before widening scan behavior or channel count\.$/g, "在扩展扫描方式或通道数量前，先让每个启用通道都能重放同一份已验证源表。")
    .replace(/^Reconfirm one known device on the new bench before expanding the parameter list\.$/g, "扩展参数表之前，先在新台架上重新确认一个已知器件。")
    .replace(/^Replay one known spectral benchmark before trusting wider-span behavior\.$/g, "先重放一个已知频谱基准，再去相信更宽频段下的表现。")
    .replace(/^Re-run one known audio benchmark before extending analysis modes\.$/g, "扩展分析模式前，先重跑一个已知音频基准。")
    .replace(/^Replay one known DC source before widening meter behavior or changing integration timing\.$/g, "在扩展量程行为或改积分时序前，先重放一个已知直流源基准。")
    .replace(/^Replay one known periodic waveform before trusting wider capture coverage\.$/g, "相信更宽采样覆盖前，先重放一个已知周期波形基准。")
    .replace(/^Re-establish one anchor response curve before broadening replay or fit claims\.$/g, "在扩展回放或拟合结论前，先重新建立一条锚点响应曲线。")
    .replace(/^Reconfirm one anchor point and the surrounding short curve before trusting the broader sweep\.$/g, "相信更宽扫频范围前，先重新确认一个锚点和它附近的短曲线。")
    .replace(/^Replay one defended infrared-link benchmark before widening distance, alignment, or coding claims\.$/g, "扩展距离、对准或编码前，先重放一个已验证的红外链路基准。")
    .replace(/^Replay one defended RF benchmark before trusting wider scan coverage\.$/g, "在相信更宽扫描范围前，先重放一个已验证的射频基准。")
    .replace(/^Replay one known-frequency anchor before widening range or adding waveform classes\.$/g, "扩展量程或增加波形类别前，先重放一个已知频率锚点。")
    .replace(/^Rebuild open\/short benchmarks first\.$/g, "先把开路/短路基准样例重新打稳。")
    .replace(/^Re-confirm a single known passive on the new hardware\.$/g, "先在新硬件上重新确认一个已知无源器件。")
    .replace(/^Prove one event on both ends first\.$/g, "先证明同一个事件在两端都能一致出现。");

  if (/^[A-Za-z0-9][A-Za-z0-9\s\-_/,:;.()]+$/.test(result) && /[A-Za-z]/.test(result)) {
    result = result
      .replace(/\bbenchmark\b/gi, "基准样例")
      .replace(/\breference\b/gi, "参考")
      .replace(/\bremote\b/gi, "远端")
      .replace(/\blocal\b/gi, "本地")
      .replace(/\bsignal\b/gi, "信号")
      .replace(/\bmeasurement\b/gi, "测量")
      .replace(/\bmodule\b/gi, "模块")
      .replace(/\bcapture\b/gi, "采集")
      .replace(/\bsolver\b/gi, "求解")
      .replace(/\bfilter\b/gi, "滤波")
      .replace(/\bgeometry\b/gi, "几何")
      .replace(/\broute\b/gi, "路线")
      .replace(/\bstate\b/gi, "状态")
      .replace(/\btruth\b/gi, "真值")
      .replace(/\bconsistency\b/gi, "一致性")
      .replace(/\bphase\b/gi, "相位")
      .replace(/\bamplitude\b/gi, "幅值")
      .replace(/\bfrequency\b/gi, "频率")
      .replace(/\btiming\b/gi, "时序")
      .replace(/\bcalibration\b/gi, "标定")
      .replace(/\bvalidation\b/gi, "验证")
      .replace(/\bclassification\b/gi, "分类")
      .replace(/\bparameter\b/gi, "参数")
      .replace(/\bdistortion\b/gi, "失真")
      .replace(/\bmodel\b/gi, "模型")
      .replace(/\breplay\b/gi, "回放")
      .replace(/\banchor\b/gi, "锚点");
  }

  return result;
}

function deepLocalizePlanForZh<T>(value: T): T {
  if (typeof value === "string") {
    return localizePlanStringForZh(value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => deepLocalizePlanForZh(item)) as T;
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, item]) => [key, deepLocalizePlanForZh(item)]),
    ) as T;
  }

  return value;
}

function finalizePlanLanguage(plan: RecommendedPlan, lang: "en" | "zh"): RecommendedPlan {
  if (lang !== "zh") {
    return plan;
  }

  return deepLocalizePlanForZh(plan);
}

function shouldRunImageOcr(topic: string | undefined, imageDataUrl: string | undefined, apiKey?: string) {
  if (!imageDataUrl || !apiKey) {
    return false;
  }

  if (!topic) {
    return true;
  }

  return topic.length < OCR_TEXT_PRIORITY_THRESHOLD;
}

function buildVisionPrompt(lang: "en" | "zh") {
  if (lang === "zh") {
    return [
      "你只负责识别图片里的电赛题目文字，不负责生成方案。",
      "尽量完整提取目标、指标、限制条件、输入输出要求和评分相关内容。",
      "如果图片里有分条、编号或表格，请保留原有结构。",
      "不要编造缺失内容，不要补建议，只输出提取后的题目文字。",
    ].join("\n");
  }

  return [
    "Only extract the contest problem text from the image.",
    "Preserve targets, metrics, constraints, inputs, outputs, and scoring-relevant details.",
    "Keep bullets, numbering, and tables when visible.",
    "Do not invent missing content and do not add advice.",
  ].join("\n");
}

function extractOutputText(data: unknown): string | null {
  if (!data || typeof data !== "object") {
    return null;
  }

  const candidate = (data as { output_text?: unknown }).output_text;
  if (typeof candidate === "string" && candidate.trim()) {
    return candidate;
  }

  const output = (data as { output?: unknown }).output;
  if (!Array.isArray(output)) {
    return null;
  }

  for (const item of output) {
    if (!item || typeof item !== "object") {
      continue;
    }

    const content = (item as { content?: unknown }).content;
    if (!Array.isArray(content)) {
      continue;
    }

    for (const contentItem of content) {
      if (!contentItem || typeof contentItem !== "object") {
        continue;
      }

      const textValue = (contentItem as { text?: unknown }).text;
      if (typeof textValue === "string" && textValue.trim()) {
        return textValue;
      }
    }
  }

  return null;
}

function readUsageValue(value: unknown): number {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

function extractUsage(data: unknown): OcrUsage {
  if (!data || typeof data !== "object") {
    return { inputTokens: 0, outputTokens: 0, totalTokens: 0 };
  }

  const usage = (data as { usage?: unknown }).usage;
  if (!usage || typeof usage !== "object") {
    return { inputTokens: 0, outputTokens: 0, totalTokens: 0 };
  }

  const inputTokens = readUsageValue((usage as { input_tokens?: unknown }).input_tokens);
  const outputTokens = readUsageValue((usage as { output_tokens?: unknown }).output_tokens);
  const totalTokens =
    readUsageValue((usage as { total_tokens?: unknown }).total_tokens) || inputTokens + outputTokens;

  return {
    inputTokens,
    outputTokens,
    totalTokens,
  };
}

async function ensureBudgetFile() {
  await mkdir(path.dirname(OCR_BUDGET_FILE), { recursive: true });
}

async function readOcrBudgetState(): Promise<OcrBudgetState> {
  try {
    const content = await readFile(OCR_BUDGET_FILE, "utf8");
    const parsed = JSON.parse(content) as Partial<OcrBudgetState>;
    const parsedBudget =
      typeof parsed.totalBudget === "number" && Number.isFinite(parsed.totalBudget)
        ? parsed.totalBudget
        : OCR_TOTAL_TOKEN_BUDGET;
    const totalBudget = Math.min(parsedBudget, OCR_TOTAL_TOKEN_BUDGET);
    const parsedUsed =
      typeof parsed.totalUsed === "number" && Number.isFinite(parsed.totalUsed) ? parsed.totalUsed : 0;
    const totalUsed = Math.min(Math.max(parsedUsed, 0), totalBudget);

    return {
      totalBudget,
      totalUsed,
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : new Date(0).toISOString(),
    };
  } catch {
    return {
      totalBudget: OCR_TOTAL_TOKEN_BUDGET,
      totalUsed: 0,
      updatedAt: new Date(0).toISOString(),
    };
  }
}

async function writeOcrBudgetState(state: OcrBudgetState) {
  await ensureBudgetFile();
  await writeFile(OCR_BUDGET_FILE, JSON.stringify(state, null, 2), "utf8");
}

function buildBudgetNotice(
  lang: "en" | "zh",
  state: OcrBudgetState,
  usage?: OcrUsage,
  forcedTextOnly?: boolean,
) {
  const remaining = Math.max(0, state.totalBudget - state.totalUsed);

  if (forcedTextOnly) {
    return `OCR 总预算受 1M 以内硬上限约束，当前已自动切换为纯本地蒸馏推荐。剩余预算约 ${remaining} 令牌。`;
  }

  if (!usage || usage.totalTokens <= 0) {
    return `本次未走模型生成方案；文本题目直接使用本地蒸馏知识库。当前 OCR 预算仍受 1M 以内硬上限约束，剩余约 ${remaining} 令牌。`;
  }

  return `本次仅在识图阶段消耗了 ${usage.totalTokens} 令牌，方案推荐仍然完全来自本地蒸馏知识库。当前 OCR 总预算保持在 1M 以内，剩余约 ${remaining} 令牌。`;
}

async function extractProblemTextFromImage(
  apiKey: string,
  imageDataUrl: string,
  lang: "en" | "zh",
  model: string,
): Promise<OcrExtractionResult> {
  const response = await fetch(OPENAI_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      max_output_tokens: OCR_OUTPUT_TOKEN_LIMIT,
      reasoning: { effort: "minimal" },
      input: [
        {
          role: "developer",
          content: [
            {
              type: "input_text",
              text: buildVisionPrompt(lang),
            },
          ],
        },
        {
          role: "user",
          content: [
            {
              type: "input_image",
              image_url: imageDataUrl,
              detail: "low",
            },
          ],
        },
      ],
    }),
  });

  const data = (await response.json()) as unknown;

  if (!response.ok) {
    const message =
      typeof data === "object" &&
      data !== null &&
      "error" in data &&
      typeof (data as { error?: { message?: unknown } }).error?.message === "string"
        ? (data as { error: { message: string } }).error.message
        : "图片识别失败。";

    throw new Error(message);
  }

  return {
    text: extractOutputText(data) ?? "",
    usage: extractUsage(data),
  };
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as RequestBody;
  const topic = body.topic?.trim();
  const lang = body.lang === "zh" ? "zh" : "en";
  const imageDataUrl = body.imageDataUrl?.trim();
  const apiKey = process.env.OPENAI_API_KEY;
  const model = DEFAULT_OCR_MODEL;

  if (!topic && !imageDataUrl) {
    return NextResponse.json(
      {
        error:
          lang === "zh"
            ? "请至少提供题目文字或题目截图。"
            : "请至少提供题目文字或题目截图。",
      },
      { status: 400 },
    );
  }

  if (imageDataUrl && !apiKey && !topic) {
    return NextResponse.json(
      {
        error:
          lang === "zh"
            ? "当前只上传图片时需要配置兼容 OpenAI 的 OCR 接口密钥，例如 OPENAI_API_KEY。"
            : "当前只上传图片时需要配置兼容 OpenAI 的 OCR 接口密钥，例如 OPENAI_API_KEY。",
      },
      { status: 500 },
    );
  }

  let mergedTopic = topic ?? "";
  let budgetState = await readOcrBudgetState();
  let ocrUsage: OcrUsage | undefined;
  let ocrAttempted = false;
  let ocrUsed = false;
  let forcedTextOnly = false;

  if (shouldRunImageOcr(topic, imageDataUrl, apiKey)) {
    const remainingBudget = Math.max(0, budgetState.totalBudget - budgetState.totalUsed);

    if (remainingBudget < OCR_REQUEST_TOKEN_RESERVE) {
      forcedTextOnly = true;
    } else {
      ocrAttempted = true;

      try {
        const extracted = await extractProblemTextFromImage(apiKey as string, imageDataUrl as string, lang, model);
        ocrUsage = extracted.usage;
        ocrUsed = extracted.usage.totalTokens > 0 || extracted.text.trim().length > 0;

        if (extracted.text.trim()) {
          mergedTopic = mergedTopic ? `${mergedTopic}\n\n${extracted.text.trim()}` : extracted.text.trim();
        }

        if (extracted.usage.totalTokens > 0) {
          budgetState = {
            totalBudget: budgetState.totalBudget,
            totalUsed: Math.min(
              budgetState.totalBudget,
              budgetState.totalUsed + extracted.usage.totalTokens,
            ),
            updatedAt: new Date().toISOString(),
          };
          await writeOcrBudgetState(budgetState);
        }
      } catch (error) {
        if (!mergedTopic) {
          return NextResponse.json(
            {
              error:
                error instanceof Error
                  ? error.message
                  : lang === "zh"
                    ? "题目图片识别失败，请稍后重试。"
                    : "题目图片识别失败，请稍后重试。",
            },
            { status: 502 },
          );
        }
      }
    }
  }

  if (!mergedTopic) {
    return NextResponse.json(
      {
        error:
          forcedTextOnly && lang === "zh"
            ? "当前 OCR 预算已受限，请补充题目文字后再生成方案。"
            : forcedTextOnly
              ? "当前 OCR 预算已受限，请补充题目文字后再生成方案。"
              : lang === "zh"
                ? "未能从图片中提取有效题目文字，请补一段文字说明后重试。"
                : "未能从图片中提取有效题目文字，请补一段文字说明后重试。",
      },
      { status: 400 },
    );
  }

  const plan = finalizePlanLanguage(recommendPlanFromDistilledData(mergedTopic, lang), lang);
  const meta: PlanResponseMeta = {
    mode: ocrUsed ? "local-kb-plus-ocr" : "local-kb",
    ocrAttempted,
    ocrUsed,
    ocrBudget: {
      totalBudget: budgetState.totalBudget,
      totalUsed: budgetState.totalUsed,
      remaining: Math.max(0, budgetState.totalBudget - budgetState.totalUsed),
      requestReserve: OCR_REQUEST_TOKEN_RESERVE,
    },
    ocrUsage,
    budgetNotice: buildBudgetNotice(lang, budgetState, ocrUsage, forcedTextOnly),
  };

  return NextResponse.json({ plan, meta });
}
