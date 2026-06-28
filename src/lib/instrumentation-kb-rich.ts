export interface RichLocalizedText {
  en: string;
  zh: string;
}

export interface DistilledMatcherBoost {
  terms: string[];
  weight: number;
}

export interface DistilledFamilyPlaybook {
  profileId: string;
  headline: RichLocalizedText;
  keywordBoosts: DistilledMatcherBoost[];
  diagnosisCues: RichLocalizedText[];
  principleChoices: RichLocalizedText[];
  winningBackbone: RichLocalizedText[];
  mustHaveDeliverables: RichLocalizedText[];
  defenseFocus: RichLocalizedText[];
  commonFailureModes: RichLocalizedText[];
  stretchGoals: RichLocalizedText[];
}

export interface HistoricalProblemSupplement {
  id: string;
  familyId: string;
  difficulty: "medium" | "high";
  tierFit: Array<"baseline" | "provincial" | "national">;
  coreChain: RichLocalizedText[];
  mustHaveDeliverables: RichLocalizedText[];
  commonPitfalls: RichLocalizedText[];
  scoringFocus: RichLocalizedText[];
  similarProblemIds: string[];
}

export interface HistoricalWinningPattern {
  id: string;
  recommendedHardware: RichLocalizedText[];
  softwareBackbone: RichLocalizedText[];
  calibrationFocus: RichLocalizedText[];
  defenseAngles: RichLocalizedText[];
}

export interface HistoricalExecutionNote {
  id: string;
  stabilizeFirst: RichLocalizedText[];
  abnormalChecklist: RichLocalizedText[];
  defenseScript: RichLocalizedText[];
}

export interface HistoricalSolutionBlueprint {
  id: string;
  principleRoute: RichLocalizedText[];
  frontEndFocus: RichLocalizedText[];
  algorithmBackbone: RichLocalizedText[];
  calibrationBench: RichLocalizedText[];
  demoSequence: RichLocalizedText[];
}

export interface HistoricalTieredBuildPlan {
  id: string;
  tiers: Array<{
    tier: "baseline" | "provincial" | "national";
    hardwareStack: RichLocalizedText[];
    softwareScope: RichLocalizedText[];
    metricPriority: RichLocalizedText[];
    avoidOverbuild: RichLocalizedText[];
  }>;
}

export interface HistoricalValidationPack {
  id: string;
  calibrationFixtures: RichLocalizedText[];
  acceptanceChecklist: RichLocalizedText[];
  edgeCases: RichLocalizedText[];
  defenseCheckpoints: RichLocalizedText[];
}

export interface HistoricalTroubleshootingPack {
  id: string;
  failureSymptoms: RichLocalizedText[];
  firstChecks: RichLocalizedText[];
  likelyRootCauses: RichLocalizedText[];
  fastRecoveryActions: RichLocalizedText[];
}

export interface HistoricalDefensePack {
  id: string;
  judgeQuestions: RichLocalizedText[];
  recommendedAnswers: RichLocalizedText[];
  demoScoringMoves: RichLocalizedText[];
  phrasesToAvoid: RichLocalizedText[];
}

export interface HistoricalBenchmarkPack {
  id: string;
  recommendedReferences: RichLocalizedText[];
  minimumAcceptanceNumbers: RichLocalizedText[];
  competitionDayQuickChecks: RichLocalizedText[];
  overnightBurnInChecks: RichLocalizedText[];
}

export interface HistoricalDisambiguationPack {
  id: string;
  easyToConfuseWith: RichLocalizedText[];
  separatingSignals: RichLocalizedText[];
  preferredStoryline: RichLocalizedText[];
  overclaimBoundaries: RichLocalizedText[];
}

export interface HistoricalTransferPack {
  id: string;
  bestBorrowedFrom: RichLocalizedText[];
  reusableModules: RichLocalizedText[];
  nonReusableHabits: RichLocalizedText[];
  fastestCarryOverChecks: RichLocalizedText[];
}

export interface DistilledFamilyKnowledgePack {
  profileId: string;
  sharedHardwareStack: RichLocalizedText[];
  sharedErrorSources: RichLocalizedText[];
  sharedDefenseQuestions: RichLocalizedText[];
  provincialToNationalUpgrades: RichLocalizedText[];
}

export interface DistilledFamilyObjectiveMap {
  profileId: string;
  measurementObjects: RichLocalizedText[];
  requiredOutputs: RichLocalizedText[];
  observabilityAnchors: RichLocalizedText[];
  successFloor: RichLocalizedText[];
}

export interface DistilledFamilyBuildPack {
  profileId: string;
  coreBom: RichLocalizedText[];
  optionalUpgrades: RichLocalizedText[];
  benchSetup: RichLocalizedText[];
  calibrationWorkflow: RichLocalizedText[];
  preContestQuickPack: RichLocalizedText[];
}

export interface DistilledFamilyFailureAtlas {
  profileId: string;
  recurringSymptoms: RichLocalizedText[];
  firstChecks: RichLocalizedText[];
  commonRootCauses: RichLocalizedText[];
  fastRecoveryMoves: RichLocalizedText[];
}

export interface DistilledFamilyAnswerTemplate {
  profileId: string;
  thirtySecondPitch: RichLocalizedText[];
  twoMinuteDefense: RichLocalizedText[];
  errorClosureStory: RichLocalizedText[];
  demoNarrative: RichLocalizedText[];
}

export interface DistilledFamilyMetricLadder {
  profileId: string;
  submissionFloor: RichLocalizedText[];
  provincialReadySignals: RichLocalizedText[];
  nationalStretchSignals: RichLocalizedText[];
}

export interface DistilledFamilyTrainingSequence {
  profileId: string;
  foundationPhase: RichLocalizedText[];
  measurementPhase: RichLocalizedText[];
  specializationPhase: RichLocalizedText[];
  mockContestPhase: RichLocalizedText[];
}

export interface DistilledFamilyReferenceGraph {
  profileId: string;
  anchorProblems: RichLocalizedText[];
  transferPatterns: RichLocalizedText[];
  escalationEdges: RichLocalizedText[];
  antiPatterns: RichLocalizedText[];
}

export interface DistilledFamilyDecisionTree {
  profileId: string;
  entryChecks: RichLocalizedText[];
  preferredRoutes: RichLocalizedText[];
  routeKillers: RichLocalizedText[];
  fallbackRules: RichLocalizedText[];
}

export interface DistilledFamilyTriggerPack {
  profileId: string;
  strongPositiveCues: RichLocalizedText[];
  weakPositiveCues: RichLocalizedText[];
  disambiguators: RichLocalizedText[];
  routeRejectionCues: RichLocalizedText[];
}

export interface DistilledFamilyCorrectionPack {
  profileId: string;
  commonConfusions: RichLocalizedText[];
  recoveryChecks: RichLocalizedText[];
  safeFallbackClaims: RichLocalizedText[];
  escalationWarnings: RichLocalizedText[];
}

export interface DistilledFamilyHandoffPack {
  profileId: string;
  pivotTargets: Array<{
    targetProfileId: string;
    triggerToPivot: RichLocalizedText[];
    fastestPivotCheck: RichLocalizedText[];
    reusableAssets: RichLocalizedText[];
    stopReusingFirst: RichLocalizedText[];
  }>;
}

export interface DistilledFamilyStatementPatternPack {
  profileId: string;
  goalPhrases: RichLocalizedText[];
  metricPhrases: RichLocalizedText[];
  constraintPhrases: RichLocalizedText[];
  deliverablePhrases: RichLocalizedText[];
}

export interface DistilledFamilyLexiconPack {
  profileId: string;
  goalTerms: string[];
  metricTerms: string[];
  constraintTerms: string[];
  deliverableTerms: string[];
}

export interface DistilledFamilyNegativeExamplePack {
  profileId: string;
  examples: Array<{
    nearMissPrompt: RichLocalizedText;
    whyItLooksLikeThisFamily: RichLocalizedText[];
    whyItActuallyBelongsElsewhere: RichLocalizedText[];
    redirectProfileId: string;
    fastestDisambiguationQuestion: RichLocalizedText[];
    reuseWhat: RichLocalizedText[];
    dropWhat: RichLocalizedText[];
    triggerTerms: string[];
    redirectTerms: string[];
  }>;
}

export interface DistilledFamilyPairDisambiguationPack {
  primaryProfileId: string;
  competingProfileId: string;
  title: RichLocalizedText;
  decidingQuestion: RichLocalizedText;
  primaryWinsWhen: RichLocalizedText[];
  competingWinsWhen: RichLocalizedText[];
  primaryCueTerms: string[];
  competingCueTerms: string[];
  reusableAssets: RichLocalizedText[];
  wrongTurnCost: RichLocalizedText[];
}

export interface DistilledSignalHygienePack {
  lowSignalTerms: string[];
  protectedShortTerms: string[];
  weakStandaloneTerms: string[];
  trimPrefixes: string[];
  canonicalRewrites: Array<{
    from: string;
    to: string;
  }>;
}

export interface FamilyRouteVariant {
  id: string;
  profileId: string;
  name: RichLocalizedText;
  cueBoosts?: DistilledMatcherBoost[];
  bestFor: RichLocalizedText;
  principle: RichLocalizedText;
  hardwareGate: RichLocalizedText;
  measurementTargets: RichLocalizedText[];
  hardwareFocus: RichLocalizedText[];
  softwareFocus: RichLocalizedText[];
  validationChecklist: RichLocalizedText[];
  avoidWhen: RichLocalizedText[];
  tradeoffs: RichLocalizedText[];
  typicalReferences: string[];
}

export interface DistilledRouteEvidencePack {
  routeId: string;
  provincialProof: RichLocalizedText[];
  stretchSignals: RichLocalizedText[];
  collapseSignals: RichLocalizedText[];
}

export interface DistilledModuleNode {
  id: string;
  profileIds: string[];
  name: RichLocalizedText;
  role: RichLocalizedText;
  whenToUse: RichLocalizedText[];
  requiredSignals: RichLocalizedText[];
  failureAlerts: RichLocalizedText[];
  quickestBench: RichLocalizedText[];
  linkedProblems: string[];
}

export interface DistilledModuleAssemblyRule {
  moduleId: string;
  prerequisites: RichLocalizedText[];
  unlocks: RichLocalizedText[];
  avoidParallelWith: RichLocalizedText[];
  minimumAssemblyOrder: RichLocalizedText[];
}

export interface DistilledModuleMetricRule {
  moduleId: string;
  provincialFloor: RichLocalizedText[];
  stretchSignals: RichLocalizedText[];
  fallbackTriggers: RichLocalizedText[];
}

const zhTextOverrides: Record<string, string> = {
  "The final answer is an electrical quantity, not only a stable waveform.": "最终答案应是电学参数，不只是一个看起来稳定的波形。",
  "Phase and amplitude ratio usually matter more than visual smoothness.": "相位和幅值比通常比波形看起来是否顺滑更重要。",
  "Lock one trusted frequency point before adding wide sweep behavior.": "先锁定一个可信频点，再扩展扫频能力。",
  "Treat calibration as part of the measurement chain, not as a late patch.": "把标定当成测量链路的一部分，而不是最后再补的修饰。",
  "Stimulus source -> dual-channel capture -> amplitude and phase extraction -> parameter solver.": "激励源 -> 双通道采集 -> 幅相提取 -> 参数求解。",
  "Range integrity and reference integrity must stay visible during the demo.": "演示时必须让量程状态和参考基准都保持可见、可解释。",
  "A stable parameter readout with at least one known reference sample.": "至少要给出一个已知参考样件下稳定可复现的参数读数。",
  "A clear explanation of range switching or solver limits.": "要能清楚说明量程切换逻辑或求解器边界条件。",
  "Explain which observables enter the solver and why they are sufficient.": "说明哪些可观测量进入了求解器，以及它们为什么足够。",
  "Explain how gain, offset, and phase bias are calibrated out.": "说明增益、零点偏置和相位偏差是如何被标定消除的。",
  "Hardware front-end drift is hidden under software fitting.": "硬件前端漂移被软件拟合掩盖，答辩时很容易被问穿。",
  "The team shows a number but cannot close the phase error budget.": "队伍虽然能报数，但无法闭环解释相位误差预算。",
  "Add sweep-based validation or consistency checks across multiple reference parts.": "进一步加分可以做扫频一致性验证，或增加多个参考件的交叉校验。",
  "A stable clock, known reference path, and observable front-end states are mandatory.": "稳定时钟、已知参考路径、可观测前端状态，这三项是仪表题共性底座。",
  "Keep debug outputs visible enough that the team can explain the chain live.": "调试输出要保留到能现场解释整条测量链路为止。",
  "Reference drift, front-end saturation, timing skew, and untracked range changes are common score killers.": "参考漂移、前端饱和、时序偏斜、量程切换失控，都是典型失分点。",
  "If the physical observable is unstable, software polish cannot rescue the answer.": "如果物理可观测量本身不稳定，软件再精致也救不回来。",
  "What raw observable is trusted before the final solver or classifier runs?": "在最终求解或分类之前，最可信的原始可观测量是什么？",
  "Which calibration step most reduces the final error?": "哪一步标定对最终误差下降最关键？",
  "Add more edge cases only after the baseline route is stable.": "先把基线路线做稳，再去补更多边界情况。",
  "National-level polish usually comes from error closure and robustness, not from a brand-new architecture.": "国奖级提升通常来自误差闭环和鲁棒性，而不是推倒重来换架构。",
  "Cross-channel skew can dominate the final result.": "双通道偏斜可能直接主导最终误差。",
  "Feed the same signal into both channels and measure residual mismatch.": "把同一信号同时送入两路，直接测残差失配。",
  "Stable source or reference path": "稳定的信号源或参考通道",
  "Phase extraction": "相位提取",
  "Reference-informed suppression metrics": "基于参考通道的抑制指标",
  "Auto-ranging before channel skew is measured": "在双通道偏斜未测清前不要先做自动量程",
  "Immediately after source bring-up": "信号源打通后立刻搭建",
  "Repeatable phase and amplitude comparisons": "相位与幅值对比结果可重复",
  "Per-range calibration remains stable over time": "各量程标定结果随时间保持稳定",
  "If skew is unstable, freeze to one trusted range and one trusted frequency": "若通道偏斜不稳定，就先冻结到一个可信量程和一个可信频点",
  "Stable inversion": "稳定反演",
  "Reference comparisons": "参考对比能力",
  "Timing-valid capture": "时序有效采集",
  "Dense algorithm tuning before the source is stable": "信号源未稳定前不要先做密集算法调参",
  "Bring up first": "优先最先打通",
  "Multiple ranges remain consistent after calibration.": "完成标定后，多量程结果仍保持一致。",
  "The same capture chain preserves parameter consistency across moderate sweep expansion or range switching.": "在适度扩展扫频范围或切换量程后，同一采集链路仍能保持参数一致性。",
  "A drifting reference breaks downstream interpretation.": "参考通道一旦漂移，后续解释都会失真。",
  "Probe the source and compare it against the timing reference.": "先直接测信号源，并和时序参考进行对比。",
  "Keep the object of measurement explicit instead of drifting into generic signal processing.": "始终把测量对象讲清楚，不要漂成泛泛的信号处理题。",
  "Final output must match the problem's scored quantity rather than a proxy plot.": "最终输出必须对应题目真正评分的量，而不是替代性的示意图。",
  "Expose at least one intermediate observable that explains the final result.": "至少暴露一个能解释最终结果的中间可观测量。",
  "One stable bench case is the anchor for all tuning and defense.": "一个稳定台架样例应作为调参和答辩的共同锚点。",
  "The raw-to-final chain should remain inspectable during the demo.": "演示时应能看清从原始量到最终结果的整条链路。",
  "One repeatable main metric on a known sample.": "在已知样件上至少拿到一个可复现的主指标。",
  "One honest boundary statement about unsupported or unstable cases.": "对暂不支持或不稳定的情况要有明确边界说明。",
  "Reference path": "参考通道",
  "Range switching integrity": "量程切换完整性",
  "Amplitude ratio": "幅值比",
  "Phase shift": "相位差",
  "Repeatability by range": "分量程重复性",
  "Known resistor": "已知电阻样件",
  "Known capacitor": "已知电容样件",
  "Known inductor": "已知电感样件",
  "Do not force dense sweep fitting before one stable point works.": "在单个稳定工作点没跑通前，不要强行上复杂扫频拟合。",
  "Safer than dense sweep, but less expressive than a validated sweep route.": "比大范围扫频拟合更稳，但表达能力不如验证充分的扫频路线。",
  "Fast provincial-ready parameter tasks.": "适合快速冲省奖的参数测量题。",
  "Use one stable excitation point and solve from amplitude ratio plus phase shift.": "先锁定一个稳定激励点，再由幅值比和相位差反推出参数。",
  "Requires a trustworthy reference path and dual-channel capture.": "要求参考通道可信，并具备双通道采集能力。",
  "Parameter tasks that must defend consistency across frequency or range instead of only one trusted point.": "适用于不仅要守住单点结果，还要证明跨频率或跨量程一致性的参数题。",
  "Lock one calibrated anchor point first, then reuse the same capture chain to show that the parameter story stays consistent across a modest sweep.": "先锁定一个已标定锚点，再复用同一采集链路证明参数结论在有限扫频范围内仍保持一致。",
  "Needs a repeatable sweep source and a capture chain whose gain and phase stay stable across the defended span.": "需要可重复的扫频源，以及在目标频段内增益和相位都稳定的采集链路。",
  "Anchor-point truth": "锚点结果可信",
  "Sweep consistency": "扫频一致性",
  "Range-to-range agreement": "跨量程一致性",
  "Sweep repeatability": "扫频重复性",
  "Per-range phase integrity": "各量程相位完整性",
  "Stable sweep logging": "稳定的扫频记录",
  "Consistency checks before any heavier fitting": "做复杂拟合前先完成一致性检查",
  "Known part at anchor point": "锚点处已知样件验证",
  "Known part across sweep span": "扫频范围内已知样件验证",
  "Range-boundary replay": "量程边界回放验证",
  "Do not use this route when even one anchor point is still unstable.": "如果连一个锚点都还不稳定，就不要走这条路线。",
  "Broader than a single-point inversion route, but only worthwhile after one calibrated point already closes cleanly.": "它比单点反演覆盖更广，但前提是至少已有一个已标定工作点完全跑稳。",
};

const zhFamilyLabelMap: Array<[string, string]> = [
  ["Electrical parameter testing", "电路参数测试"],
  ["Distortion and spectrum measurement", "失真与频谱测量"],
  ["Distortion and spectral measurement", "失真与频谱测量"],
  ["Cable and transmission-line detection", "线缆与传输线检测"],
  ["Cable and transmission-line diagnostics", "线缆与传输线检测"],
  ["Adaptive filtering and noise suppression", "自适应滤波与噪声抑制"],
  ["Adaptive filtering and active compensation", "自适应滤波与主动补偿"],
  ["Receiver synchronization and lock proof", "接收同步与锁定证明"],
  ["Signal reception and synchronization", "接收与同步"],
  ["Localization by timing or geometry", "基于时序或几何的定位"],
  ["Localization and ranging", "定位与测距"],
  ["Vision-assisted measurement", "视觉辅助测量"],
  ["Vision-based measurement", "视觉测量"],
  ["Networked measurement integrity", "联网测量完整性"],
  ["Networked measurement and remote truth", "联网测量与远端真值"],
  ["Modulation recognition and parameter estimation", "调制识别与参数估计"],
  ["Power-load analysis and feature identification", "负载分析与特征识别"],
  ["Load analysis and classification", "负载分析与分类"],
  ["Signal separation and component recovery", "信号分离与分量恢复"],
  ["Compact model identification and replay validation", "紧凑模型辨识与回放验证"],
  ["Model identification and replay", "模型辨识与回放验证"],
];

function localizeRichZh(text: string): string {
  let result = zhTextOverrides[text] ?? text;

  for (const [en, zh] of zhFamilyLabelMap) {
    result = result.replaceAll(en, zh);
  }

  result = result
    .replace(/^Primary object:\s*(.+)\.$/g, "主要测量对象：$1。")
    .replace(/^Keep the object of measurement explicit instead of drifting into generic signal processing\.$/g, "始终把测量对象讲清楚，不要漂成泛泛的信号处理题。")
    .replace(/^We treat this as a (.+) problem first, not as a generic coding problem\.$/g, "我们先把这题当作$1来处理，而不是泛泛的编程题。")
    .replace(/^Prefer a single stable route for (.+)\.$/g, "优先选择一条针对$1的稳定路线。")
    .replace(/^Treat the problem as (.+) first\.$/g, "先把这道题按$1来理解。")
    .replace(/^Strong cue:\s*(.+)\.$/g, "强触发词：$1。")
    .replace(/^Weak cue:\s*(.+)\.$/g, "弱触发词：$1。")
    .replace(/^One (.+) benchmark\.$/g, "一组$1基准样例。")
    .replace(/^Known (.+) benchmark\.$/g, "已知$1基准样例。")
    .replace(/^Known (.+) source\.$/g, "已知$1信号源。")
    .replace(/^Known (.+) set\.$/g, "已知$1样例集合。")
    .replace(/^Known (.+) table\.$/g, "已知$1对照表。")
    .replace(/^Show (.+) first, then (.+)\.$/g, "先展示$1，再展示$2。")
    .replace(/^Replay (.+) first\.$/g, "先回放$1。")
    .replace(/^Rebuild (.+) first\.$/g, "先重建$1。")
    .replace(/^Reconfirm (.+) first\.$/g, "先重新确认$1。")
    .replace(/^Re-run (.+) first\.$/g, "先重跑$1。")
    .replace(/^Check (.+) first\.$/g, "先检查$1。")
    .replace(/^Lock (.+) first\.$/g, "先锁定$1。")
    .replace(/^Start with (.+)\.$/g, "先从$1开始。")
    .replace(/^Keep (.+) visible\.$/g, "让$1保持可见。")
    .replace(/^Explain (.+)\.$/g, "说明$1。")
    .replace(/^Avoid (.+)\.$/g, "避免$1。")
    .replace(/^Only add (.+) when (.+)\.$/g, "只有在$2之后，才增加$1。")
    .replace(/^Do not add (.+) before (.+)\.$/g, "在$2之前，不要增加$1。")
    .replace(/^Do not let (.+) hide (.+)\.$/g, "不要让$1掩盖$2。")
    .replace(/^If (.+), keep (.+)\.$/g, "如果$1，就保留$2。")
    .replace(/^Then add (.+)\.$/g, "然后再增加$1。");

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
      .replace(/\banchor\b/gi, "锚点")
      .replace(/\bhardware\b/gi, "硬件")
      .replace(/\bsoftware\b/gi, "软件")
      .replace(/\bknown\b/gi, "已知")
      .replace(/\bstable\b/gi, "稳定")
      .replace(/\bproof\b/gi, "证明")
      .replace(/\banalysis\b/gi, "分析")
      .replace(/\bfront end\b/gi, "前端")
      .replace(/\bfront-end\b/gi, "前端")
      .replace(/\block\b/gi, "锁定")
      .replace(/\bunlock\b/gi, "失锁")
      .replace(/\brelock\b/gi, "重锁")
      .replace(/\bline\b/gi, "线缆")
      .replace(/\bload\b/gi, "负载")
      .replace(/\bcarrier\b/gi, "载波")
      .replace(/\benvelope\b/gi, "包络")
      .replace(/\bmixed\b/gi, "混合")
      .replace(/\bcomponent\b/gi, "分量")
      .replace(/\bcoordinate\b/gi, "坐标")
      .replace(/\bposition\b/gi, "位置")
      .replace(/\branging\b/gi, "测距")
      .replace(/\bvisible\b/gi, "可见")
      .replace(/\bdisplay\b/gi, "显示")
      .replace(/\bdrift\b/gi, "漂移")
      .replace(/\brepeatable\b/gi, "可重复")
      .replace(/\btrusted\b/gi, "可信")
      .replace(/\bknown-good\b/gi, "已知正常")
      .replace(/\bknown-bad\b/gi, "已知极限")
      .replace(/\bscore\b/gi, "评分")
      .replace(/\boutput\b/gi, "输出")
      .replace(/\brecommended\b/gi, "推荐")
      .replace(/\bminimum\b/gi, "最低")
      .replace(/\bacceptance\b/gi, "验收")
      .replace(/\bcompetition day\b/gi, "比赛当天")
      .replace(/\bovernight\b/gi, "过夜")
      .replace(/\bburn[- ]in\b/gi, "老化")
      .replace(/\bquick checks\b/gi, "快速检查")
      .replace(/\bfixtures\b/gi, "夹具")
      .replace(/\bfixture\b/gi, "夹具")
      .replace(/\bchecklist\b/gi, "检查清单")
      .replace(/\bpitfalls\b/gi, "易错点")
      .replace(/\bhighlights\b/gi, "重点")
      .replace(/\bwinning\b/gi, "获奖")
      .replace(/\bsolution\b/gi, "方案")
      .replace(/\bblueprint\b/gi, "蓝图")
      .replace(/\btransfer\b/gi, "迁移")
      .replace(/\bdisambiguation\b/gi, "区分")
      .replace(/\btroubleshooting\b/gi, "排障")
      .replace(/\bdefense\b/gi, "答辩")
      .replace(/\bjudge\b/gi, "评委")
      .replace(/\baccept\b/gi, "接受")
      .replace(/\bday\b/gi, "当天")
      .replace(/\bscript\b/gi, "脚本")
      .replace(/\bstoryline\b/gi, "叙事线")
      .replace(/\bfamily\b/gi, "题族")
      .replace(/\btransfer graph\b/gi, "迁移图谱")
      .replace(/\bproblem\b/gi, "题目")
      .replace(/\bplain\b/gi, "基础")
      .replace(/\blayered\b/gi, "分层")
      .replace(/\bauxiliary\b/gi, "辅助")
      .replace(/\bdiagnosis\b/gi, "诊断")
      .replace(/\bfault\b/gi, "故障")
      .replace(/\bopen\b/gi, "开路")
      .replace(/\bshort\b/gi, "短路")
      .replace(/\bmatched\b/gi, "匹配")
      .replace(/\bcoax\b/gi, "同轴")
      .replace(/\bcable\b/gi, "线缆")
      .replace(/\btarget\b/gi, "目标")
      .replace(/\bpose\b/gi, "姿态")
      .replace(/\bvisual\b/gi, "视觉")
      .replace(/\boptical\b/gi, "光学")
      .replace(/\bacoustic\b/gi, "声学")
      .replace(/\bwireless\b/gi, "无线")
      .replace(/\bspeech\b/gi, "语音")
      .replace(/\bcurrent\b/gi, "电流")
      .replace(/\bvoltage\b/gi, "电压")
      .replace(/\bharmonic\b/gi, "谐波")
      .replace(/\bwindow\b/gi, "窗函数")
      .replace(/\bspan\b/gi, "频谱跨度")
      .replace(/\btrigger\b/gi, "触发")
      .replace(/\bthreshold\b/gi, "阈值")
      .replace(/\bstorage\b/gi, "存储")
      .replace(/\bplayback\b/gi, "回放输出")
      .replace(/\bidentity\b/gi, "身份")
      .replace(/\bfreshness\b/gi, "新鲜度")
      .replace(/\bdelay\b/gi, "延迟")
      .replace(/\bpacket\b/gi, "数据包")
      .replace(/\bnode\b/gi, "节点")
      .replace(/\bmodest\b/gi, "适度")
      .replace(/\bbroader\b/gi, "更宽")
      .replace(/\bfrozen\b/gi, "冻结")
      .replace(/\bguarded\b/gi, "受控")
      .replace(/\bstress\b/gi, "压力")
      .replace(/\bhealthy\b/gi, "正常")
      .replace(/\bunsupported\b/gi, "不支持")
      .replace(/\bboundary\b/gi, "边界")
      .replace(/\bautomatic\b/gi, "自动")
      .replace(/\bexplicit\b/gi, "显式")
      .replace(/\bcompact\b/gi, "紧凑")
      .replace(/\bmeaningful\b/gi, "有意义的")
      .replace(/\bresidual\b/gi, "残差")
      .replace(/\bconvergence\b/gi, "收敛")
      .replace(/\bsuppression\b/gi, "抑制")
      .replace(/\brecovered\b/gi, "恢复出的")
      .replace(/\bintermediate\b/gi, "中间")
      .replace(/\bcue\b/gi, "线索")
      .replace(/\bcarrier-family\b/gi, "载波家族")
      .replace(/\bsymbol\b/gi, "符号")
      .replace(/\bpayload\b/gi, "载荷")
      .replace(/\bhybrid\b/gi, "混合型");
  }

  return result;
}

const t = (en: string, zh = zhTextOverrides[en] ?? localizeRichZh(en)): RichLocalizedText => {
  const localized = zhTextOverrides[en] ?? localizeRichZh(en);
  return { en: localized, zh: zh || localized };
};
const tl = (...items: string[]) => items.map((item) => t(item));
const profileHeadlineZh: Record<string, string> = {
  parameter: "先用已知激励驱动被测对象，稳定提取幅值和相位，再反推出电参数。",
  distortion: "先锁定周期与采样关系，再用一条稳定 FFT 链路证明谐波和 THD 结果可信。",
  cable: "先选定一条线缆判别路线，再从稳定特征中估计长度和终端状态。",
  "adaptive-filtering": "用参考驱动的自适应闭环，展示收敛、抑制效果和工况变化后的恢复能力。",
  receiver: "先把真正的锁定条件定义清楚，再演示受扰下的失锁与重锁。",
  localization: "先稳定一个测距观测量，再结合标定后的几何关系解出位置。",
  "vision-measurement": "先完成视觉几何标定，再把图像特征转换为物理量测量结果。",
  "networked-measurement": "在网络传输链路中保持本地测量真值可追踪，并把时序与完整性显式展示出来。",
  modulation: "先识别波形所属调制家族，再估计载波、符号率或调制度等关键参数。",
  "load-analysis": "把同步采集到的电特征映射成负载类别，并能解释类别边界为什么成立。",
  separation: "从混合信号中恢复有意义的分量，并证明每一路输出到底代表什么。",
  model: "从实测响应中恢复紧凑模型，再用留出样本回放验证模型是否站得住。",
};

const profileFamilies: Record<string, string> = {
  parameter: "Electrical parameter testing",
  distortion: "Distortion and spectrum measurement",
  cable: "Cable and transmission-line detection",
  "adaptive-filtering": "Adaptive filtering and noise suppression",
  receiver: "Receiver synchronization and lock proof",
  localization: "Localization by timing or geometry",
  "vision-measurement": "Vision-assisted measurement",
  "networked-measurement": "Networked measurement integrity",
  modulation: "Modulation recognition and parameter estimation",
  "load-analysis": "Power-load analysis and feature identification",
  separation: "Signal separation and component recovery",
  model: "Compact model identification and replay validation",
};

const profileKeywords: Record<string, string[]> = {
  parameter: ["impedance", "rlc", "inductance", "capacitance", "phase difference", "resonance", "frequency sweep", "anchor point", "consistency", "response curve", "waveform recognition", "duty cycle", "frequency counter", "oscilloscope", "resistance", "reference resistor", "auto-range", "ohmmeter", "transfer characteristic"],
  distortion: ["thd", "harmonic", "distortion", "fft", "window", "spectrum", "spectrum analyzer", "audio analysis", "spur", "harmonic floor", "rf spectrum", "audio analyzer"],
  cable: ["cable", "open", "short", "matched", "reflection", "length", "termination", "twisted pair", "pair state", "bad contact", "mismatch", "line fault", "pair integrity", "fault state", "pair diagnosis", "electrical cues", "explicit electrical cues", "passive line"],
  "adaptive-filtering": ["adaptive", "convergence", "reference", "step size", "suppression", "lms", "nlms", "compensation", "recovery", "active filter", "before and after", "benchmark", "harmonic truth", "fft benchmark"],
  receiver: ["receiver", "lock", "relock", "weak signal", "tracking", "reacquisition", "false lock", "lock state", "state machine", "carrier recovery"],
  localization: ["localization", "ranging", "position", "coordinate", "triangulation", "time of flight", "known point", "anchor", "anchor coordinates", "beacon"],
  "vision-measurement": ["vision", "camera", "image", "calibration", "size measurement", "shape measurement", "marker", "pose", "pixel", "monocular"],
  "networked-measurement": [
    "network",
    "remote",
    "packet",
    "latency",
    "upload",
    "timestamp",
    "stale-data",
    "freshness",
    "distributed",
    "remote consistency",
    "data acquisition",
    "transmission",
    "sampling node",
    "transport",
    "local sample",
    "local truth",
    "sample truth",
    "preserve local truth",
    "remote sample",
    "sequence id",
    "frame identity",
    "remote reconstruction",
  ],
  modulation: ["modulation", "ask", "fsk", "psk", "carrier", "symbol", "baud", "family", "envelope"],
  "load-analysis": ["load", "appliance", "classification", "signature", "feature table", "current", "voltage", "monitoring", "identification", "automatic decision", "line-state diagnosis", "electrical cues", "automatic diagnosis"],
  separation: ["separation", "mixture", "component", "recover", "interference", "residual", "decoupling", "unmix", "mixed signal"],
  model: ["model", "fit", "identification", "replay", "held-out", "structure", "physically interpretable", "stimulus variation", "compact model", "frequency response", "transfer characteristic", "response fitting", "sweep replay", "channel replay"],
};

const familyConfig = [
  {
    profileId: "parameter",
    headline: "Drive the DUT with known excitation, recover amplitude and phase, then solve the electrical parameters.",
    diagnosis: [
      "The final answer is an electrical quantity, not only a stable waveform.",
      "Phase and amplitude ratio usually matter more than visual smoothness.",
    ],
    principles: [
      "Lock one trusted frequency point before adding wide sweep behavior.",
      "Treat calibration as part of the measurement chain, not as a late patch.",
    ],
    backbone: [
      "Stimulus source -> dual-channel capture -> amplitude and phase extraction -> parameter solver.",
      "Range integrity and reference integrity must stay visible during the demo.",
    ],
    deliverables: [
      "A stable parameter readout with at least one known reference sample.",
      "A clear explanation of range switching or solver limits.",
    ],
    defense: [
      "Explain which observables enter the solver and why they are sufficient.",
      "Explain how gain, offset, and phase bias are calibrated out.",
    ],
    failures: [
      "Hardware front-end drift is hidden under software fitting.",
      "The team shows a number but cannot close the phase error budget.",
    ],
    stretch: ["Add sweep-based validation or consistency checks across multiple reference parts."],
  },
  {
    profileId: "distortion",
    headline: "Lock period first, then prove harmonic truth and THD with one stable FFT route.",
    diagnosis: [
      "Judges care about credible harmonic metrics, not about a generic spectral picture.",
      "Windowing, clipping, and leakage can dominate the score.",
    ],
    principles: [
      "Fix one sampling and FFT configuration before chasing convenience features.",
      "Protect analog headroom so the harmonics belong to the DUT rather than the instrument.",
    ],
    backbone: [
      "Conditioned capture -> period alignment -> FFT -> harmonic indexing -> THD output.",
      "Keep one known harmonic injection case as the benchmark.",
    ],
    deliverables: [
      "A repeatable THD or harmonic table under at least one controlled source condition.",
      "A clean explanation of leakage control and fundamental detection.",
    ],
    defense: [
      "Explain why your FFT configuration does not move during the demo.",
      "Explain how you separate DUT distortion from front-end clipping.",
    ],
    failures: [
      "Changing windows or sample counts late makes every result incomparable.",
      "The team reports THD without proving the fundamental bin is trustworthy.",
    ],
    stretch: ["Add multi-drive-level comparison and trend reporting."],
  },
  {
    profileId: "cable",
    headline: "Choose one line-state route, then estimate length and terminal state from stable signatures.",
    diagnosis: [
      "The object being measured is the line state, not only the waveform itself.",
      "Return signature repeatability matters more than a complicated classifier.",
    ],
    principles: [
      "Pick pulse echo or multi-frequency phase and finish it cleanly.",
      "Protect the launch path so the diagnostic feature is not erased by coupling or protection.",
    ],
    backbone: [
      "Launch network -> line response capture -> state template or solver -> length and state decision.",
      "Keep open, short, and matched side by side during validation.",
    ],
    deliverables: [
      "A stable state decision for open, short, and matched cases.",
      "A length estimate with one known cable as the calibration anchor.",
    ],
    defense: [
      "Explain what physical feature separates the terminal states.",
      "Explain how cable velocity factor or propagation model was obtained.",
    ],
    failures: [
      "The team mixes line-state diagnosis with an unrelated receiver narrative.",
      "Length solving is claimed before the basic state templates are stable.",
    ],
    stretch: ["Add bad-contact or partial-fault cases with clear boundaries."],
  },
  {
    profileId: "adaptive-filtering",
    headline: "Use a reference-driven adaptive loop to show convergence, residual suppression, and recovery after change.",
    diagnosis: [
      "The score comes from adaptive behavior, not only from a cleaner output waveform.",
      "Reference quality is part of the measurement chain and must be defended.",
    ],
    principles: [
      "Show one stable adaptive law first, such as LMS or NLMS.",
      "Quantify convergence and suppression before polishing visual effects.",
    ],
    backbone: [
      "Reference path -> adaptive core -> residual monitor -> convergence metrics -> change-of-condition replay.",
      "Keep step size, stability, and residual suppression linked in one story.",
    ],
    deliverables: [
      "Before/after suppression evidence and a visible convergence trace.",
      "A repeatable recovery case after the operating point changes.",
    ],
    defense: [
      "Explain why the reference contains enough information for adaptation.",
      "Explain how step size trades off speed and stability.",
    ],
    failures: [
      "The output looks cleaner but no convergence evidence is shown.",
      "The reference leaks the answer and makes suppression look unrealistically good.",
    ],
    stretch: ["Add confidence or mode-switch logic for multiple interference regimes."],
  },
  {
    profileId: "receiver",
    headline: "Define true lock explicitly, then demonstrate unlock and relock under controlled disturbances.",
    diagnosis: [
      "A receiver answer is judged by lock truth, not only by a recovered-looking waveform.",
      "Weak-signal behavior and false-lock rejection usually matter in defense.",
    ],
    principles: [
      "Build the lock criterion before beautifying any recovered output.",
      "Log state transitions early so relock timing can be measured honestly.",
    ],
    backbone: [
      "Signal path -> synchronization path -> lock-state machine -> recovered output -> state-transition evidence.",
      "Keep true lock, false lock, and loss of lock distinguishable.",
    ],
    deliverables: [
      "A repeatable lock / unlock / relock demonstration.",
      "A clear lock indicator and timing record under disturbance.",
    ],
    defense: [
      "Explain what event truly declares lock.",
      "Explain which disturbances trigger relock and how the timing was measured.",
    ],
    failures: [
      "A cleaned waveform is treated as full proof of lock.",
      "The state indicator lags the actual signal condition.",
    ],
    stretch: ["Add weak-signal telemetry and explicit false-lock rejection."],
  },
  {
    profileId: "localization",
    headline: "Stabilize one ranging observable first, then convert it into coordinates with calibrated geometry.",
    diagnosis: [
      "The answer is about where something is, not just whether something exists.",
      "Raw ranging credibility must come before final coordinates.",
    ],
    principles: [
      "Validate one known point or known distance before full solving.",
      "Prefer deterministic geometry or propagation models before heavier fitting.",
    ],
    backbone: [
      "Baseline calibration -> ranging observable -> synchronized capture -> coordinate solver -> position verification.",
      "Keep raw ranging and final coordinates separately inspectable.",
    ],
    deliverables: [
      "At least one repeatable known-point validation.",
      "A coordinate or distance output traceable to the raw observable.",
    ],
    defense: [
      "Explain which physical quantity is measured before solving coordinates.",
      "Explain how synchronization and geometry calibration close the error loop.",
    ],
    failures: [
      "Coordinates are shown before raw ranging is trustworthy.",
      "Poor anchor geometry or reflections are ignored in the story.",
    ],
    stretch: ["Add outlier rejection for tougher anchor layouts or reflections."],
  },
  {
    profileId: "vision-measurement",
    headline: "Use calibrated image geometry to convert visual features into physical measurements.",
    diagnosis: [
      "The score is not just target detection; it is pixel-to-physical conversion.",
      "Calibration repeatability matters more than a flashy demo overlay.",
    ],
    principles: [
      "Lock camera geometry and lighting first.",
      "Prefer deterministic geometry before black-box image models.",
    ],
    backbone: [
      "Imaging setup -> calibration -> feature localization -> geometry solving -> ground-truth comparison.",
      "Keep one debug overlay to explain why the measurement is trusted.",
    ],
    deliverables: [
      "One calibration path and one known-size comparison.",
      "A repeatable measurement under changed pose or distance.",
    ],
    defense: [
      "Explain how image features map to the physical quantity.",
      "Explain the accuracy limits under pose or lighting drift.",
    ],
    failures: [
      "A detector demo is mistaken for a completed measurement chain.",
      "Camera geometry changes between runs without being acknowledged.",
    ],
    stretch: ["Add robustness under broader angle and lighting variation."],
  },
  {
    profileId: "networked-measurement",
    headline: "Preserve local measurement truth across a network path with visible timing and integrity.",
    diagnosis: [
      "The hard part is remote measurement honesty, not only local sensing.",
      "Remote UI is valuable only if delay and loss are explicit.",
    ],
    principles: [
      "Validate local truth first, then add the simplest transport path.",
      "Separate sensing timing from transport timing.",
    ],
    backbone: [
      "Local measurement -> timestamped framing -> transport -> remote reconstruction -> integrity display.",
      "Keep local-vs-remote consistency as a first-class test loop.",
    ],
    deliverables: [
      "A remote output that can be matched back to local truth.",
      "Visible delay, loss, or stale-data indicators.",
    ],
    defense: [
      "Explain how a remote point is proven to correspond to the right local sample.",
      "Explain how your design behaves under jitter or packet loss.",
    ],
    failures: [
      "A smooth remote page hides stale or dropped data.",
      "Transport features are added before sequence identity is stable.",
    ],
    stretch: ["Add graceful degradation under disturbed links."],
  },
  {
    profileId: "modulation",
    headline: "Identify the waveform family first, then estimate carrier, symbol, or depth parameters.",
    diagnosis: [
      "The answer must label the family, not only show a nice spectrum.",
      "Carrier and symbol structure are first-class outputs.",
    ],
    principles: [
      "Separate carrier evidence from symbol or envelope evidence.",
      "Keep the class set explicit before adding heavier models.",
    ],
    backbone: [
      "Conditioned input -> carrier analysis -> envelope or symbol analysis -> family decision -> parameter estimation.",
    ],
    deliverables: [
      "A supported family list and one visible decision path.",
      "Carrier, symbol, or depth parameters for the claimed family.",
    ],
    defense: [
      "Explain which feature separates the supported families.",
      "Explain how ambiguous boundary cases are handled.",
    ],
    failures: [
      "Channel distortion evidence is confused with modulation evidence.",
      "The family label is guessed without a transparent decision path.",
    ],
    stretch: ["Add confidence-aware rejection for unsupported or ambiguous cases."],
  },
  {
    profileId: "load-analysis",
    headline: "Map synchronized electrical features to a load family and defend the class boundary.",
    diagnosis: [
      "The answer needs a class or identity decision, not only filtering quality.",
      "Feature explainability is usually judged directly.",
    ],
    principles: [
      "Lock a compact feature table before expanding the class list.",
      "Keep unsupported classes and confusion pairs honest.",
    ],
    backbone: [
      "Voltage/current capture -> feature extraction -> class decision -> confusion-case explanation.",
    ],
    deliverables: [
      "A supported class list and one defensible feature table.",
      "At least one confusion-pair explanation.",
    ],
    defense: [
      "Explain why each feature is useful for separation.",
      "Explain what happens when an unseen load appears.",
    ],
    failures: [
      "Too many classes are claimed with too little feature margin.",
      "A filtered waveform is shown but no final class decision is produced.",
    ],
    stretch: ["Add confidence-aware rejection of unsupported loads."],
  },
  {
    profileId: "separation",
    headline: "Recover useful components from a mixture and prove what each output channel represents.",
    diagnosis: [
      "The target is multi-component recovery, not necessarily adaptation or classification.",
      "A good answer states what cannot be separated reliably.",
    ],
    principles: [
      "Define the mixture model and observability first.",
      "Do not confuse residual reduction with full component recovery.",
    ],
    backbone: [
      "Mixed input -> conditioning -> separation core -> recovered component validation.",
      "Keep one repeatable mixed benchmark for debugging.",
    ],
    deliverables: [
      "At least one mixed case with clear input-output correspondence.",
      "A statement of the reliable and unreliable component boundaries.",
    ],
    defense: [
      "Explain the assumed mixture model.",
      "Explain how you know a recovered component is not an artifact.",
    ],
    failures: [
      "The team suppresses something but cannot name the recovered component.",
      "A residual plot is treated as a full separation proof.",
    ],
    stretch: ["Add ambiguity warnings or component-confidence scoring."],
  },
  {
    profileId: "model",
    headline: "Recover a compact model from measured response and validate it by replay on held-out cases.",
    diagnosis: [
      "The score comes from the model story, not from one lucky fit.",
      "Replay agreement matters more than raw coefficient count.",
    ],
    principles: [
      "Prefer the smallest model that still replays the response.",
      "Keep held-out validation separate from the fitting set.",
    ],
    backbone: [
      "Stimulus plan -> response capture -> model structure -> fitting -> replay validation.",
    ],
    deliverables: [
      "Replay evidence and at least one held-out validation case.",
      "A clear statement of the accepted structure assumptions.",
    ],
    defense: [
      "Explain why the chosen model is the minimum useful structure.",
      "Explain where the replay begins to break down.",
    ],
    failures: [
      "One operating point fits well but the broader response family does not.",
      "The model has too many free parameters to defend in front of judges.",
    ],
    stretch: ["Add sensitivity or confidence analysis for the fitted parameters."],
  },
] as const;

export const instrumentationFamilyPlaybooks: DistilledFamilyPlaybook[] = familyConfig.map((item) => ({
  profileId: item.profileId,
  headline: t(item.headline, profileHeadlineZh[item.profileId] ?? item.headline),
  keywordBoosts: [{ terms: profileKeywords[item.profileId], weight: item.profileId === "adaptive-filtering" ? 6 : 5 }],
  diagnosisCues: tl(...item.diagnosis),
  principleChoices: tl(...item.principles),
  winningBackbone: tl(...item.backbone),
  mustHaveDeliverables: tl(...item.deliverables),
  defenseFocus: tl(...item.defense),
  commonFailureModes: tl(...item.failures),
  stretchGoals: tl(...item.stretch),
}));

export const distilledFamilyKnowledgePacks: DistilledFamilyKnowledgePack[] = familyConfig.map((item) => ({
  profileId: item.profileId,
  sharedHardwareStack: tl(
    "A stable clock, known reference path, and observable front-end states are mandatory.",
    "Keep debug outputs visible enough that the team can explain the chain live.",
  ),
  sharedErrorSources: tl(
    "Reference drift, front-end saturation, timing skew, and untracked range changes are common score killers.",
    "If the physical observable is unstable, software polish cannot rescue the answer."
  ),
  sharedDefenseQuestions: tl(
    "What raw observable is trusted before the final solver or classifier runs?",
    "Which calibration step most reduces the final error?"
  ),
  provincialToNationalUpgrades: tl(
    "Add more edge cases only after the baseline route is stable.",
    "National-level polish usually comes from error closure and robustness, not from a brand-new architecture."
  ),
}));

export const distilledFamilyObjectiveMaps: DistilledFamilyObjectiveMap[] = familyConfig.map((item) => ({
  profileId: item.profileId,
  measurementObjects: tl(
    `Primary object: ${profileFamilies[item.profileId]}.`,
    "Keep the object of measurement explicit instead of drifting into generic signal processing."
  ),
  requiredOutputs: tl(
    "Final output must match the problem's scored quantity rather than a proxy plot.",
    "Expose at least one intermediate observable that explains the final result."
  ),
  observabilityAnchors: tl(
    "One stable bench case is the anchor for all tuning and defense.",
    "The raw-to-final chain should remain inspectable during the demo."
  ),
  successFloor: tl(
    "One repeatable main metric on a known sample.",
    "One honest boundary statement about unsupported or unstable cases."
  ),
}));

export const distilledFamilyBuildPacks: DistilledFamilyBuildPack[] = familyConfig.map((item) => ({
  profileId: item.profileId,
  coreBom: tl(
    "MCU or DSP with deterministic sampling and enough RAM for capture buffers.",
    "Stable analog front-end with protection, scaling, and debug access."
  ),
  optionalUpgrades: tl(
    "Add a cleaner reference source or better clock before adding complex algorithms.",
    "Use external ADC or comparator support only if the baseline route proves bandwidth-limited."
  ),
  benchSetup: tl(
    "Prepare at least one known-good reference source and one known-bad stress case.",
    "Keep scope and serial logging available during every integration step."
  ),
  calibrationWorkflow: tl(
    "Zero or offset first, gain second, timing or phase third, and algorithm correction last.",
    "Re-run a small fixed checklist after every front-end change."
  ),
  preContestQuickPack: tl(
    "Save one short calibration table and one short failure checklist.",
    "Keep one frozen demo route that can survive time pressure."
  ),
}));

export const distilledFamilyFailureAtlases: DistilledFamilyFailureAtlas[] = familyConfig.map((item) => ({
  profileId: item.profileId,
  recurringSymptoms: tl(
    "Main metric jumps when the operating point changes slightly.",
    "A good-looking plot does not match the final scored number."
  ),
  firstChecks: tl(
    "Confirm reference integrity, timing integrity, and front-end range selection.",
    "Compare current behavior against the last known-good benchmark capture."
  ),
  commonRootCauses: tl(
    "Untracked calibration drift, timing skew, saturation, or wrong physical assumptions.",
    "Late-stage algorithm changes without restoring baseline measurements."
  ),
  fastRecoveryMoves: tl(
    "Freeze to one trusted range and one trusted test case.",
    "Reduce the claim to the part of the chain that is still repeatable and defendable."
  ),
}));

export const distilledFamilyAnswerTemplates: DistilledFamilyAnswerTemplate[] = familyConfig.map((item) => ({
  profileId: item.profileId,
  thirtySecondPitch: tl(
    `We treat this as a ${profileFamilies[item.profileId].toLowerCase()} problem first, not as a generic coding problem.`,
    "Our design locks the raw observable before solving the final scored output."
  ),
  twoMinuteDefense: tl(
    "First we define the physical observable, then we show how the front end preserves it, then how the algorithm converts it into the final answer.",
    "Finally we close the error loop with calibration, boundary cases, and repeatability checks."
  ),
  errorClosureStory: tl(
    "We separate hardware error, timing error, and algorithm error instead of blending them together.",
    "The biggest gain came from stabilizing the measurement chain before expanding the feature set."
  ),
  demoNarrative: tl(
    "Start from a known bench case, show the raw observable, then show the final result.",
    "End with one edge case that proves the route is not overfit to a single example."
  ),
}));

export const distilledFamilyMetricLadders: DistilledFamilyMetricLadder[] = familyConfig.map((item) => ({
  profileId: item.profileId,
  submissionFloor: tl(
    "One stable route with a truthful final metric.",
    "No hidden resets, silent saturation, or unexplained range changes."
  ),
  provincialReadySignals: tl(
    "Repeatability survives multiple runs and a small operating-point change.",
    "The defense story is consistent with the observed data."
  ),
  nationalStretchSignals: tl(
    "Robustness holds under broader cases and tighter error budgets.",
    "The team can explain both success cases and failure boundaries cleanly."
  ),
}));

export const distilledFamilyTrainingSequences: DistilledFamilyTrainingSequence[] = familyConfig.map((item) => ({
  profileId: item.profileId,
  foundationPhase: tl(
    "Bring up excitation, sampling, display, and logging as early as possible.",
    "Record one known benchmark capture before writing advanced logic."
  ),
  measurementPhase: tl(
    "Stabilize the family's raw observable and its calibration flow.",
    "Write the smallest useful solver or classifier around that observable."
  ),
  specializationPhase: tl(
    "Add family-specific edge cases and one defense-oriented benchmark.",
    "Keep architecture changes smaller than the validation loop."
  ),
  mockContestPhase: tl(
    "Run a frozen architecture with only bug fixes allowed.",
    "Practice one concise measurement-chain story and one concise error-budget story."
  ),
}));

export const distilledFamilyReferenceGraphs: DistilledFamilyReferenceGraph[] = [
  {
    profileId: "parameter",
    anchorProblems: tl("2019 D Simple circuit characteristic tester.", "2023 C Inductance and capacitance measurement device.", "2025 G Circuit model exploration device."),
    transferPatterns: tl("Dual-channel amplitude and phase extraction.", "Known excitation with parameter inversion."),
    escalationEdges: tl("Move from one-point solving to calibrated sweep checks."),
    antiPatterns: tl("Do not start with dense fitting before one stable point works."),
  },
  {
    profileId: "distortion",
    anchorProblems: tl("2020 E Amplifier nonlinear distortion research device.", "2021 A Signal distortion measurement device.", "2024 B Single-phase active power-filter experimental device."),
    transferPatterns: tl("Period-locked FFT and harmonic indexing.", "Single stable spectral configuration."),
    escalationEdges: tl("Add drive-level trend comparison after THD is stable."),
    antiPatterns: tl("Do not change windows or sample length during the demo."),
  },
  {
    profileId: "cable",
    anchorProblems: tl("2019 C Line load and fault detection device.", "2023 B Coaxial cable length and terminal-load detector.", "2023 J Automatic line fault detection system.", "2025 D Simple Ethernet twisted-pair tester."),
    transferPatterns: tl("Reflection template comparison.", "Length solving from propagation evidence."),
    escalationEdges: tl("Add bad-contact discrimination after open/short/matched is stable."),
    antiPatterns: tl("Do not mix half-finished receiver logic into a line-state story."),
  },
  {
    profileId: "adaptive-filtering",
    anchorProblems: tl("2017 E Adaptive filter.", "2023 H Signal separation device.", "2024 B Single-phase active power-filter experimental device."),
    transferPatterns: tl("Reference-driven convergence plots.", "Residual suppression as a scored metric."),
    escalationEdges: tl("Add condition-change recovery after baseline convergence is clean."),
    antiPatterns: tl("Do not claim adaptation success without a meaningful reference path."),
  },
  {
    profileId: "receiver",
    anchorProblems: tl("2021 E Mixed digital-analog transmission transceiver.", "2025 F Simple automatic receiver."),
    transferPatterns: tl("Lock-state telemetry and weak-signal tests."),
    escalationEdges: tl("Add false-lock rejection once basic relock is proven."),
    antiPatterns: tl("Do not treat a clean waveform as sufficient proof of lock."),
  },
  {
    profileId: "localization",
    anchorProblems: tl("2017 I Visible-light indoor positioning.", "2023 F Intelligent positioning system based on sound propagation.", "2025 C Monocular visual target measurement device."),
    transferPatterns: tl("Known-point calibration before coordinate solving."),
    escalationEdges: tl("Add outlier handling after one geometry baseline is trustworthy."),
    antiPatterns: tl("Do not show coordinates before raw ranging is stable."),
  },
  {
    profileId: "vision-measurement",
    anchorProblems: tl("2020 G Non-contact object size and shape measurement device.", "2021 D Internet-based camera measurement system.", "2025 C Monocular visual target measurement device."),
    transferPatterns: tl("Camera calibration and deterministic geometry solving."),
    escalationEdges: tl("Add wider pose variation after one operating pose is repeatable."),
    antiPatterns: tl("Do not confuse target detection with physical measurement."),
  },
  {
    profileId: "networked-measurement",
    anchorProblems: tl("2017 H Remote amplitude-frequency characteristic tester.", "2019 E Internet-based signal transmission system.", "2021 D Internet-based camera measurement system."),
    transferPatterns: tl("Timestamped transport and local-vs-remote consistency."),
    escalationEdges: tl("Add disturbed-link testing after a basic reliable transport loop."),
    antiPatterns: tl("Do not hide stale remote data behind a smooth UI."),
  },
  {
    profileId: "modulation",
    anchorProblems: tl("2017 F AM signal processing experimental circuit.", "2021 E Mixed digital-analog transmission transceiver.", "2023 D Modulation recognition and parameter estimation device."),
    transferPatterns: tl("Carrier-family cues plus symbol or envelope cues."),
    escalationEdges: tl("Add more families only after the first family boundaries are solid."),
    antiPatterns: tl("Do not report a family label without a visible decision path."),
  },
  {
    profileId: "load-analysis",
    anchorProblems: tl("2017 K Single-phase appliance analysis and monitoring.", "2021 H Appliance analysis and identification device."),
    transferPatterns: tl("Synchronized electrical signatures and compact feature tables."),
    escalationEdges: tl("Add unsupported-load rejection after the main classes are stable."),
    antiPatterns: tl("Do not overclaim the class list without feature margin."),
  },
  {
    profileId: "separation",
    anchorProblems: tl("2021 E Mixed digital-analog transmission transceiver.", "2023 H Signal separation device."),
    transferPatterns: tl("Mixed-case benchmark and component-output correspondence."),
    escalationEdges: tl("Add ambiguity cues after one recovery route is stable."),
    antiPatterns: tl("Do not equate suppression with complete separation."),
  },
  {
    profileId: "model",
    anchorProblems: tl("2019 D Simple circuit characteristic tester.", "2023 C Inductance and capacitance measurement device.", "2025 G Circuit model exploration device."),
    transferPatterns: tl("Fit on measured response and replay on held-out cases."),
    escalationEdges: tl("Add sensitivity checks after replay agreement is stable."),
    antiPatterns: tl("Do not fit a model that you cannot explain physically."),
  },
];

export const distilledFamilyDecisionTrees: DistilledFamilyDecisionTree[] = familyConfig.map((item) => ({
  profileId: item.profileId,
  entryChecks: tl(
    "What is the final scored output: parameter, family label, state, position, or remote truth?",
    "What raw observable must remain trustworthy to produce that output?"
  ),
  preferredRoutes: tl(
    `Prefer a single stable route for ${profileFamilies[item.profileId].toLowerCase()}.`,
    "Choose the route that is easiest to calibrate and explain under contest time pressure."
  ),
  routeKillers: tl(
    "If the reference path is unstable, postpone advanced algorithms.",
    "If calibration cannot be repeated quickly, reduce scope before adding features."
  ),
  fallbackRules: tl(
    "Freeze to one trusted range, one trusted case, and one trusted metric.",
    "Keep the claim smaller but fully defensible rather than broad and fragile."
  ),
}));

export const distilledFamilyTriggerPacks: DistilledFamilyTriggerPack[] = familyConfig.map((item) => ({
  profileId: item.profileId,
  strongPositiveCues: tl(...profileKeywords[item.profileId].slice(0, 4).map((term) => `Strong cue: ${term}.`)),
  weakPositiveCues: tl(...profileKeywords[item.profileId].slice(4).map((term) => `Weak cue: ${term}.`)),
  disambiguators: tl(
    "Ask what the final judged output is.",
    "Ask whether the route depends on a physical reference, a geometry baseline, or a class boundary."
  ),
  routeRejectionCues: tl(
    "Reject routes that cannot explain the scored metric with a visible raw observable.",
    "Reject routes that need too many unsupported assumptions under contest time."
  ),
}));

export const distilledFamilyCorrectionPacks: DistilledFamilyCorrectionPack[] = familyConfig.map((item) => ({
  profileId: item.profileId,
  commonConfusions: tl(
    "Teams often over-focus on algorithms and under-explain the measurement chain.",
    "Plots are often mistaken for evidence even when the scored metric is elsewhere."
  ),
  recoveryChecks: tl(
    "Restate the measurement object, raw observable, and final deliverable in one sentence.",
    "Run one known-good benchmark and compare it to the last validated capture."
  ),
  safeFallbackClaims: tl(
    "Claim only the cases where the raw observable is repeatable.",
    "Prefer a narrower but repeatable operating range."
  ),
  escalationWarnings: tl(
    "Do not add a second route when the first route is not yet stable.",
    "Do not broaden the supported class or case list on the last day."
  ),
}));

export const distilledFamilyHandoffPacks: DistilledFamilyHandoffPack[] = [
  {
    profileId: "adaptive-filtering",
    pivotTargets: [
      {
        targetProfileId: "separation",
        triggerToPivot: tl("The real goal becomes recovering named components rather than proving convergence."),
        fastestPivotCheck: tl("Ask whether each output channel must correspond to a component, not only to a residual level."),
        reusableAssets: tl("Conditioning, capture, and residual display."),
        stopReusingFirst: tl("Convergence-first storytelling."),
      },
      {
        targetProfileId: "load-analysis",
        triggerToPivot: tl("The real goal becomes identifying a load family from features."),
        fastestPivotCheck: tl("Ask whether the final output needs a class label."),
        reusableAssets: tl("Synchronous acquisition and feature logging."),
        stopReusingFirst: tl("Reference-driven adaptation claims."),
      },
    ],
  },
  {
    profileId: "cable",
    pivotTargets: [
      {
        targetProfileId: "receiver",
        triggerToPivot: tl("The main score becomes proving lock and relock instead of line state."),
        fastestPivotCheck: tl("Ask whether the passive line itself is still the measured object."),
        reusableAssets: tl("Timing discipline and disturbance scripts."),
        stopReusingFirst: tl("Terminal-state-only language."),
      },
    ],
  },
  {
    profileId: "vision-measurement",
    pivotTargets: [
      {
        targetProfileId: "networked-measurement",
        triggerToPivot: tl("The network path becomes part of the judged truth."),
        fastestPivotCheck: tl("Ask whether the answer is complete without the remote path."),
        reusableAssets: tl("Camera node and basic image capture."),
        stopReusingFirst: tl("Purely local geometry story."),
      },
      {
        targetProfileId: "localization",
        triggerToPivot: tl("Multiple anchors or coordinates become the primary deliverable."),
        fastestPivotCheck: tl("Ask whether the final output is position, not only size or shape."),
        reusableAssets: tl("Calibration targets and geometry fixtures."),
        stopReusingFirst: tl("Single-view metric-only language."),
      },
      {
        targetProfileId: "networked-measurement",
        triggerToPivot: tl("The final score depends on showing that the remote result is still the same physical measurement, not just on local image geometry."),
        fastestPivotCheck: tl("Ask whether stale-data alarms, transport delay, or remote reconstruction truth are explicitly scored."),
        reusableAssets: tl("Camera calibration, feature localization, and ground-truth fixtures."),
        stopReusingFirst: tl("Overlay-only demo narratives that hide transport integrity."),
      },
    ],
  },
  {
    profileId: "distortion",
    pivotTargets: [
      {
        targetProfileId: "modulation",
        triggerToPivot: tl("The final answer becomes family labeling rather than harmonic truthfulness."),
        fastestPivotCheck: tl("Ask whether carrier or symbol parameters are final deliverables."),
        reusableAssets: tl("Spectral capture and front-end conditioning."),
        stopReusingFirst: tl("THD-first narrative."),
      },
    ],
  },
  {
    profileId: "model",
    pivotTargets: [
      {
        targetProfileId: "parameter",
        triggerToPivot: tl("The final score collapses to one electrical quantity rather than a replayable model."),
        fastestPivotCheck: tl("Ask whether a compact replay model is really required, or whether one solved parameter already completes the task."),
        reusableAssets: tl("Stimulus source, calibrated capture, and known-reference validation."),
        stopReusingFirst: tl("Held-out replay narrative."),
      },
      {
        targetProfileId: "distortion",
        triggerToPivot: tl("The measured response is judged by harmonic truthfulness rather than by compact structural replay."),
        fastestPivotCheck: tl("Ask whether the final deliverable is THD or a harmonic trend instead of a model."),
        reusableAssets: tl("Stimulus plan, stable capture, and frequency-domain evidence."),
        stopReusingFirst: tl("Structure-fitting story."),
      },
    ],
  },
  {
    profileId: "receiver",
    pivotTargets: [
      {
        targetProfileId: "modulation",
        triggerToPivot: tl("The task becomes waveform-family labeling rather than proving true lock and relock."),
        fastestPivotCheck: tl("Ask whether carrier or symbol parameters matter more than synchronization-state truth."),
        reusableAssets: tl("Front-end conditioning and carrier-aware capture."),
        stopReusingFirst: tl("Lock-state proof narrative."),
      },
      {
        targetProfileId: "separation",
        triggerToPivot: tl("The judged answer becomes recovering named components rather than maintaining synchronization."),
        fastestPivotCheck: tl("Ask whether a cleaned waveform is enough, or whether each output must represent a recovered component."),
        reusableAssets: tl("Conditioning path and staged signal visibility."),
        stopReusingFirst: tl("Lock and relock criteria."),
      },
      {
        targetProfileId: "modulation",
        triggerToPivot: tl("The judged deliverable becomes family labeling plus carrier or symbol parameters after acquisition succeeds."),
        fastestPivotCheck: tl("Ask whether the defense can still pass without naming the waveform family and its parameters."),
        reusableAssets: tl("Receiver front end, carrier-aware capture, and disturbance scripts."),
        stopReusingFirst: tl("Receiver-only lock-state storytelling."),
      },
    ],
  },
  {
    profileId: "networked-measurement",
    pivotTargets: [
      {
        targetProfileId: "vision-measurement",
        triggerToPivot: tl("Remote transport is only one part of the judged answer, and the real score still depends on calibrated visual measurement truth."),
        fastestPivotCheck: tl("Ask whether the task fails even if the network works but camera calibration or metric reconstruction is wrong."),
        reusableAssets: tl("Timestamped transport, stale-data indicators, and local-vs-remote consistency checks."),
        stopReusingFirst: tl("Network-only integrity narrative."),
      },
      {
        targetProfileId: "localization",
        triggerToPivot: tl("Anchors, ranging cues, or coordinates become the scored quantity rather than transport honesty alone."),
        fastestPivotCheck: tl("Ask whether the remote path is supporting a positioning output instead of being the final judged object."),
        reusableAssets: tl("Timestamped transport, synchronized event logging, and remote integrity monitors."),
        stopReusingFirst: tl("Generic remote dashboard storytelling."),
      },
    ],
  },
  {
    profileId: "localization",
    pivotTargets: [
      {
        targetProfileId: "vision-measurement",
        triggerToPivot: tl("Image-space calibration and visual markers dominate the ranging story instead of propagation delay alone."),
        fastestPivotCheck: tl("Ask whether the final coordinates depend more on calibrated visual features than on a pure timing pickoff."),
        reusableAssets: tl("Geometry solver, known-point fixtures, and coordinate validation workflow."),
        stopReusingFirst: tl("Propagation-only localization narrative."),
      },
      {
        targetProfileId: "networked-measurement",
        triggerToPivot: tl("The task is judged by whether localization truth survives transport to a remote observer or controller."),
        fastestPivotCheck: tl("Ask whether stale-data visibility and remote consistency are part of the acceptance path."),
        reusableAssets: tl("Known-point checks, synchronized anchor events, and timing validation."),
        stopReusingFirst: tl("Local-only positioning demo flow."),
      },
    ],
  },
  {
    profileId: "modulation",
    pivotTargets: [
      {
        targetProfileId: "receiver",
        triggerToPivot: tl("Family recognition is no longer enough and the score now depends on true acquisition, lock maintenance, and relock behavior."),
        fastestPivotCheck: tl("Ask whether a correct label without trustworthy synchronization could still pass."),
        reusableAssets: tl("Carrier-aware capture, envelope or symbol cues, and disturbance cases."),
        stopReusingFirst: tl("Classifier-first narratives that ignore lock truth."),
      },
      {
        targetProfileId: "separation",
        triggerToPivot: tl("The received observation contains multiple overlapping components and the real score is recovering them before labeling."),
        fastestPivotCheck: tl("Ask whether the answer needs multiple named outputs rather than one family label."),
        reusableAssets: tl("Spectral evidence, carrier estimates, and benchmark waveform library."),
        stopReusingFirst: tl("Single-family classification framing."),
      },
    ],
  },
  {
    profileId: "separation",
    pivotTargets: [
      {
        targetProfileId: "adaptive-filtering",
        triggerToPivot: tl("The score is dominated by convergence and suppression behavior under change."),
        fastestPivotCheck: tl("Ask whether the system is judged by reference-driven adaptation rather than by component interpretation."),
        reusableAssets: tl("Capture, residual display, and disturbance scripts."),
        stopReusingFirst: tl("Named-component output claims."),
      },
      {
        targetProfileId: "modulation",
        triggerToPivot: tl("The true deliverable becomes waveform-family identification from the recovered observation."),
        fastestPivotCheck: tl("Ask whether the answer needs a family label after separation, not only a cleaner channel."),
        reusableAssets: tl("Spectral conditioning and intermediate signal visibility."),
        stopReusingFirst: tl("Multi-component recovery framing."),
      },
    ],
  },
];

export const distilledFamilyStatementPatternPacks: DistilledFamilyStatementPatternPack[] = familyConfig.map((item) => ({
  profileId: item.profileId,
  goalPhrases: tl(
    `Treat the problem as ${profileFamilies[item.profileId].toLowerCase()} first.`,
    "Make the final deliverable explicit before discussing the algorithm."
  ),
  metricPhrases: tl(
    "Report one raw observable and one final metric together.",
    "Separate repeatability from peak performance."
  ),
  constraintPhrases: tl(
    "State the trusted operating range and the unsupported boundary case.",
    "Note any dependence on reference quality, geometry, or synchronization."
  ),
  deliverablePhrases: tl(
    "Provide a stable main demo path and one edge-case replay.",
    "Keep the final answer visible on screen and explainable from the capture."
  ),
}));

export const distilledFamilyLexiconPacks: DistilledFamilyLexiconPack[] = familyConfig.map((item) => ({
  profileId: item.profileId,
  goalTerms: profileKeywords[item.profileId].slice(0, 3),
  metricTerms: profileKeywords[item.profileId].slice(3, 6),
  constraintTerms: ["calibration", "repeatability", "stability", "range", "reference"],
  deliverableTerms: ["demo", "proof", "result", "classification", "estimation", "validation"],
}));

export const distilledFamilyNegativeExamplePacks: DistilledFamilyNegativeExamplePack[] = [
  {
    profileId: "separation",
    examples: [
      {
        nearMissPrompt: t("Show online convergence and residual suppression with a meaningful reference signal."),
        whyItLooksLikeThisFamily: tl("It mentions residual plots and suppression."),
        whyItActuallyBelongsElsewhere: tl("The real target is adaptive convergence, not multi-component recovery."),
        redirectProfileId: "adaptive-filtering",
        fastestDisambiguationQuestion: tl("Is the answer mainly judged by convergence and reference usefulness?"),
        reuseWhat: tl("Conditioning, capture, and residual display."),
        dropWhat: tl("Component-recovery narrative."),
        triggerTerms: ["residual", "suppression", "recover", "separation"],
        redirectTerms: ["adaptive", "convergence", "reference", "online", "step size"],
      },
    ],
  },
  {
    profileId: "localization",
    examples: [
      {
        nearMissPrompt: t("Calibrate camera markers and recover a coordinate output under viewpoint changes."),
        whyItLooksLikeThisFamily: tl("It still ends with a coordinate output and geometry solving."),
        whyItActuallyBelongsElsewhere: tl("The strongest physical cues come from calibrated visual markers rather than from a pure ranging chain."),
        redirectProfileId: "vision-measurement",
        fastestDisambiguationQuestion: tl("If the camera calibration collapses, does the whole answer collapse even before anchor timing is discussed?"),
        reuseWhat: tl("Geometry solver, known-point fixtures, and coordinate validation flow."),
        dropWhat: tl("Propagation-only ranging story."),
        triggerTerms: ["localization", "coordinate", "known point", "viewpoint"],
        redirectTerms: ["camera", "marker", "visual", "calibration", "pose"],
      },
      {
        nearMissPrompt: t("Transport synchronized anchors and coordinate results to a remote endpoint with stale-data visibility."),
        whyItLooksLikeThisFamily: tl("It still speaks the language of anchors and coordinate outputs."),
        whyItActuallyBelongsElsewhere: tl("The judged risk becomes whether remote transport preserves localization truth honestly."),
        redirectProfileId: "networked-measurement",
        fastestDisambiguationQuestion: tl("Would the answer still fail if local coordinates were right but the remote side hid stale data?"),
        reuseWhat: tl("Known-point validation, synchronized anchor events, and timing sanity checks."),
        dropWhat: tl("Local-only positioning narrative."),
        triggerTerms: ["anchor", "coordinate", "positioning", "synchronized"],
        redirectTerms: ["remote", "timestamp", "transport", "stale-data", "integrity"],
      },
    ],
  },
  {
    profileId: "networked-measurement",
    examples: [
      {
        nearMissPrompt: t("Remote camera-based positioning uses calibrated markers and outputs coordinates across viewpoint changes."),
        whyItLooksLikeThisFamily: tl("It still mentions remote output and transport concerns."),
        whyItActuallyBelongsElsewhere: tl("The physical truth is still dominated by calibrated visual geometry and marker stability."),
        redirectProfileId: "vision-measurement",
        fastestDisambiguationQuestion: tl("If transport stays perfect but the camera calibration drifts, does the answer still fail immediately?"),
        reuseWhat: tl("Timestamped transport, remote alarms, and local-vs-remote consistency checks."),
        dropWhat: tl("Transport-first storytelling that hides local visual measurement truth."),
        triggerTerms: ["remote", "upload", "timestamp", "transport"],
        redirectTerms: ["camera", "marker", "visual", "calibration", "viewpoint"],
      },
      {
        nearMissPrompt: t("Remote positioning depends on synchronized anchors and known-point coordinate validation."),
        whyItLooksLikeThisFamily: tl("It still talks about remote display and timestamped transport."),
        whyItActuallyBelongsElsewhere: tl("The real scored quantity is the coordinate truth from anchors and ranging cues."),
        redirectProfileId: "localization",
        fastestDisambiguationQuestion: tl("If transport is perfect but anchor geometry is wrong, does the whole answer still fail?"),
        reuseWhat: tl("Transport logging, stale-state alarms, and consistency traces."),
        dropWhat: tl("Pure remote-integrity narrative."),
        triggerTerms: ["remote", "timestamp", "stale", "integrity"],
        redirectTerms: ["anchor", "coordinate", "localization", "known point", "ranging"],
      },
    ],
  },
  {
    profileId: "load-analysis",
    examples: [
      {
        nearMissPrompt: t("Show adaptive convergence and reference usefulness rather than identify appliance families."),
        whyItLooksLikeThisFamily: tl("It still mentions appliance or load language."),
        whyItActuallyBelongsElsewhere: tl("The final answer is adaptive performance, not class identity."),
        redirectProfileId: "adaptive-filtering",
        fastestDisambiguationQuestion: tl("Does the output need a class label at all?"),
        reuseWhat: tl("Synchronous acquisition and feature logging."),
        dropWhat: tl("Class-table narrative."),
        triggerTerms: ["appliance", "load", "classify", "category"],
        redirectTerms: ["adaptive", "convergence", "reference", "residual suppression"],
      },
      {
        nearMissPrompt: t("Diagnose pair state or line fault from explicit electrical cues on a cable-like object."),
        whyItLooksLikeThisFamily: tl("It still mentions automatic diagnosis and electrical cues."),
        whyItActuallyBelongsElsewhere: tl("The measured object is the line or pair state itself, not appliance-family identity or operating-state classification."),
        redirectProfileId: "cable",
        fastestDisambiguationQuestion: tl("Is the scored object a load class, or the passive line or pair state?"),
        reuseWhat: tl("Measured electrical cue tables and explicit diagnosis logic."),
        dropWhat: tl("Appliance or monitoring storyline."),
        triggerTerms: ["automatic diagnosis", "electrical cues", "state", "monitoring"],
        redirectTerms: ["twisted pair", "pair", "cable", "line fault", "bad contact", "mismatch", "pair state"],
      },
    ],
  },
  {
    profileId: "parameter",
    examples: [
      {
        nearMissPrompt: t("Show reference usefulness and convergence while suppressing an interference component online."),
        whyItLooksLikeThisFamily: tl("It still mentions measurement, range, and explicit references."),
        whyItActuallyBelongsElsewhere: tl("The judged value is reference-driven adaptation rather than a direct electrical parameter or waveform quantity."),
        redirectProfileId: "adaptive-filtering",
        fastestDisambiguationQuestion: tl("If the reference path disappears, is the score gone because convergence mattered more than the measured quantity?"),
        reuseWhat: tl("Stable capture, calibration habits, and known-reference checks."),
        dropWhat: tl("Direct-parameter or waveform-quantity storyline."),
        triggerTerms: ["parameter", "measurement", "range", "reference"],
        redirectTerms: ["adaptive", "convergence", "online", "suppression", "reference signal"],
      },
    ],
  },
  {
    profileId: "vision-measurement",
    examples: [
      {
        nearMissPrompt: t("Internet remote camera measurement and data upload."),
        whyItLooksLikeThisFamily: tl("It mentions camera and measurement language."),
        whyItActuallyBelongsElsewhere: tl("The real scoring focus is remote transport integrity, not only local image geometry."),
        redirectProfileId: "networked-measurement",
        fastestDisambiguationQuestion: tl("Would the answer still be complete without the network path?"),
        reuseWhat: tl("Camera node and basic image capture."),
        dropWhat: tl("Purely local geometry-first story."),
        triggerTerms: ["camera", "measurement", "image"],
        redirectTerms: ["network", "remote", "upload", "timestamp", "latency"],
      },
    ],
  },
  {
    profileId: "modulation",
    examples: [
      {
        nearMissPrompt: t("Extract harmonics and report THD rather than classify a waveform family."),
        whyItLooksLikeThisFamily: tl("It mentions FFT-like waveform analysis."),
        whyItActuallyBelongsElsewhere: tl("The final output is a distortion metric, not a family label."),
        redirectProfileId: "distortion",
        fastestDisambiguationQuestion: tl("Is harmonic truthfulness the score, or family labeling?"),
        reuseWhat: tl("Spectral conditioning and capture."),
        dropWhat: tl("Carrier-family narrative."),
        triggerTerms: ["carrier", "symbol", "family", "modulation"],
        redirectTerms: ["thd", "harmonic", "distortion", "fundamental"],
      },
      {
        nearMissPrompt: t("A received mixed waveform must recover named components before the final family label can be trusted."),
        whyItLooksLikeThisFamily: tl("It still ends with a waveform family and carrier-related parameter output."),
        whyItActuallyBelongsElsewhere: tl("The judged difficulty is that multiple components overlap and must be separated before family labeling becomes meaningful."),
        redirectProfileId: "separation",
        fastestDisambiguationQuestion: tl("Does the answer need multiple interpretable outputs before it can even classify the waveform family?"),
        reuseWhat: tl("Carrier-aware capture, spectral evidence, and benchmark waveform library."),
        dropWhat: tl("Single-channel family-classification framing."),
        triggerTerms: ["modulation", "carrier", "family", "parameter estimation"],
        redirectTerms: ["mixed waveform", "separate", "component", "recover", "mixture"],
      },
    ],
  },
  {
    profileId: "receiver",
    examples: [
      {
        nearMissPrompt: t("Identify a modulation family and estimate carrier or symbol parameters from the received waveform."),
        whyItLooksLikeThisFamily: tl("It still mentions a received signal chain."),
        whyItActuallyBelongsElsewhere: tl("The final score is family recognition and parameter output, not true lock or relock behavior."),
        redirectProfileId: "modulation",
        fastestDisambiguationQuestion: tl("Must the answer prove lock-state truth, or only identify the waveform family?"),
        reuseWhat: tl("Front-end conditioning and carrier-aware capture."),
        dropWhat: tl("Lock-state proof narrative."),
        triggerTerms: ["receiver", "weak signal", "receive chain", "lock"],
        redirectTerms: ["modulation", "family", "carrier", "symbol", "parameter estimation"],
      },
      {
        nearMissPrompt: t("Recover named components from a mixed received waveform before proving lock."),
        whyItLooksLikeThisFamily: tl("It still speaks the language of a receive chain and acquired waveform."),
        whyItActuallyBelongsElsewhere: tl("The main deliverable becomes interpretable separated components rather than synchronization-state truth."),
        redirectProfileId: "separation",
        fastestDisambiguationQuestion: tl("If lock is proven but the components are still mixed together, would the answer still fail?"),
        reuseWhat: tl("Receive front end, staged capture visibility, and disturbance scripts."),
        dropWhat: tl("Lock-first narrative."),
        triggerTerms: ["receiver", "lock", "weak signal", "received waveform"],
        redirectTerms: ["separate", "component", "mixture", "recover", "mixed waveform"],
      },
    ],
  },
  {
    profileId: "model",
    examples: [
      {
        nearMissPrompt: t("Measure impedance or phase at one stable excitation point and output the passive parameter."),
        whyItLooksLikeThisFamily: tl("It still uses controlled stimulus and response measurement."),
        whyItActuallyBelongsElsewhere: tl("The final answer is a parameter value, not a replayable compact model."),
        redirectProfileId: "parameter",
        fastestDisambiguationQuestion: tl("Is a replay model required, or does one solved electrical quantity finish the task?"),
        reuseWhat: tl("Stimulus source, calibrated capture, and known-reference checks."),
        dropWhat: tl("Held-out replay and structure-fitting story."),
        triggerTerms: ["fit", "response", "model", "replay"],
        redirectTerms: ["impedance", "rlc", "capacitance", "inductance", "phase difference"],
      },
      {
        nearMissPrompt: t("Compare harmonics under different drive levels and report THD trend."),
        whyItLooksLikeThisFamily: tl("It still uses stimulus, response, and curve-like reasoning."),
        whyItActuallyBelongsElsewhere: tl("The judged output is harmonic truthfulness, not compact-structure replay."),
        redirectProfileId: "distortion",
        fastestDisambiguationQuestion: tl("Is the score about replaying a model, or about reporting distortion metrics honestly?"),
        reuseWhat: tl("Stimulus plan and stable capture."),
        dropWhat: tl("Model-structure and held-out-fit framing."),
        triggerTerms: ["response", "trend", "fit", "structure"],
        redirectTerms: ["thd", "harmonic", "distortion", "fundamental"],
      },
    ],
  },
];

export const distilledFamilyPairDisambiguationPacks: DistilledFamilyPairDisambiguationPack[] = [
  {
    primaryProfileId: "adaptive-filtering",
    competingProfileId: "separation",
    title: t("Adaptive convergence vs component recovery"),
    decidingQuestion: t("Are judges scoring convergence and suppression, or named component recovery from a mixture?"),
    primaryWinsWhen: tl(
      "Convergence, step-size choice, and residual suppression define the score.",
      "A meaningful reference path is part of the solution logic."
    ),
    competingWinsWhen: tl(
      "Each output must correspond to a recovered component.",
      "Residual reduction alone is not enough without component interpretation."
    ),
    primaryCueTerms: ["adaptive", "convergence", "reference", "step size", "suppression"],
    competingCueTerms: ["separation", "mixture", "component", "recover", "source separation"],
    reusableAssets: tl("Both can reuse conditioning and capture."),
    wrongTurnCost: tl("A separation-style answer often loses the adaptive story that judges actually score."),
  },
  {
    primaryProfileId: "cable",
    competingProfileId: "receiver",
    title: t("Cable-state diagnosis vs receiver-lock proof"),
    decidingQuestion: t("Is the passive line the measured object, or is the real score about true lock and relock?"),
    primaryWinsWhen: tl(
      "Open, short, matched, or cable length define the score.",
      "Waveforms are only evidence for terminal state."
    ),
    competingWinsWhen: tl(
      "True lock, false lock, relock, or weak-signal stability define the score.",
      "Line effects matter only because they disturb the receive chain."
    ),
    primaryCueTerms: ["cable", "open", "short", "matched", "reflection", "length"],
    competingCueTerms: ["receiver", "lock", "relock", "tracking", "weak signal"],
    reusableAssets: tl("Both can reuse timing benches and disturbance scripts."),
    wrongTurnCost: tl("A lock-only answer can miss the passive object actually being measured."),
  },
  {
    primaryProfileId: "cable",
    competingProfileId: "load-analysis",
    title: t("Passive pair-state diagnosis vs load-signature classification"),
    decidingQuestion: t("Is the scored object the passive line or pair state, or an appliance or operating-state class inferred from electrical behavior?"),
    primaryWinsWhen: tl(
      "Pair state, mismatch, bad contact, open, short, or line fault define the score.",
      "Electrical cues are only evidence for a passive line or pair diagnosis.",
      "Automatic labels still have to replay one explicit pair-sensitive cue on the passive line."
    ),
    competingWinsWhen: tl(
      "The final answer is a load class, appliance identity, or operating-state decision.",
      "Electrical features matter because they characterize a powered load rather than the passive line itself."
    ),
    primaryCueTerms: ["twisted pair", "pair", "pair state", "line fault", "bad contact", "mismatch", "cable", "termination", "fault state", "pair diagnosis", "electrical cues", "explicit electrical cues", "passive line"],
    competingCueTerms: ["load", "appliance", "monitoring", "feature table", "signature", "current", "voltage"],
    reusableAssets: tl("Both can reuse measured electrical cues, compact diagnosis logic, and repeated scripted benchmarks."),
    wrongTurnCost: tl("A load-style answer can bury the passive line object and miss the explicit pair-state evidence judges want to see."),
  },
  {
    primaryProfileId: "distortion",
    competingProfileId: "modulation",
    title: t("Harmonic truthfulness vs modulation-family identification"),
    decidingQuestion: t("Is the score about THD and harmonics, or about family labeling with carrier or symbol parameters?"),
    primaryWinsWhen: tl(
      "THD, harmonics, leakage control, or spectral accuracy define the score.",
      "A family label is at most background context."
    ),
    competingWinsWhen: tl(
      "ASK, FSK, PSK, AM, or FM family labeling defines the score.",
      "Carrier or symbol parameters are final outputs."
    ),
    primaryCueTerms: ["thd", "harmonic", "distortion", "fundamental", "leakage"],
    competingCueTerms: ["modulation", "family", "carrier", "symbol", "baud", "ask", "fsk", "psk"],
    reusableAssets: tl("Both can reuse spectral capture and front-end conditioning."),
    wrongTurnCost: tl("A modulation-style answer can look technical but still fail to prove harmonic truthfulness."),
  },
  {
    primaryProfileId: "vision-measurement",
    competingProfileId: "networked-measurement",
    title: t("Local image geometry vs remote measurement integrity"),
    decidingQuestion: t("Is the hard part image-to-physical conversion locally, or preserving measurement truth across the network path?"),
    primaryWinsWhen: tl(
      "Target size, distance, shape, or pose from calibrated images define the score.",
      "A local geometry chain is the final answer."
    ),
    competingWinsWhen: tl(
      "Remote upload integrity, delay, or distributed reconstruction define the score.",
      "Local sensing is only one part of the judged chain."
    ),
    primaryCueTerms: ["vision", "camera", "image", "calibration", "size measurement"],
    competingCueTerms: ["network", "remote", "packet", "upload", "latency", "timestamp"],
    reusableAssets: tl("Both can reuse camera nodes and calibration fixtures."),
    wrongTurnCost: tl("A local-only answer can miss the remote-integrity story completely."),
  },
  {
    primaryProfileId: "networked-measurement",
    competingProfileId: "localization",
    title: t("Transport honesty vs coordinate truth"),
    decidingQuestion: t("Is the judged challenge preserving data honestly over the remote path, or proving that the coordinates themselves are physically correct?"),
    primaryWinsWhen: tl(
      "Timestamp identity, stale-data visibility, delay, or remote reconstruction honesty define the score.",
      "Coordinates are one payload inside the transport-truth story."
    ),
    competingWinsWhen: tl(
      "Anchors, ranging cues, known-point recovery, or final coordinate error define the score.",
      "The network matters because it must preserve localization truth, not because it is the main judged object."
    ),
    primaryCueTerms: ["remote", "transport", "timestamp", "stale", "integrity", "upload"],
    competingCueTerms: ["positioning", "coordinate", "anchor", "known point", "ranging", "synchronized anchors"],
    reusableAssets: tl("Both can reuse synchronized logging, timestamps, and consistency checks."),
    wrongTurnCost: tl("A transport-only answer can miss whether the coordinates are physically correct in the first place."),
  },
  {
    primaryProfileId: "localization",
    competingProfileId: "vision-measurement",
    title: t("Coordinate solving vs single-view metric measurement"),
    decidingQuestion: t("Is the final output position from multiple references, or a physical quantity from one calibrated view?"),
    primaryWinsWhen: tl(
      "Coordinates, anchors, triangulation, or time-of-flight define the score.",
      "The solver combines references into a position estimate."
    ),
    competingWinsWhen: tl(
      "Size, shape, distance, or pose from one camera view define the score.",
      "A local geometry chain is enough by itself."
    ),
    primaryCueTerms: ["localization", "coordinate", "triangulation", "anchor", "time of flight"],
    competingCueTerms: ["camera", "image", "size measurement", "shape measurement", "pose"],
    reusableAssets: tl("Both can reuse geometry fixtures and calibration targets."),
    wrongTurnCost: tl("A single-view answer often never proves how the final position is solved."),
  },
  {
    primaryProfileId: "receiver",
    competingProfileId: "modulation",
    title: t("True-lock proof vs waveform-family identification"),
    decidingQuestion: t("Must the answer prove lock, loss, and relock, or is the main score only the waveform family and its parameters?"),
    primaryWinsWhen: tl(
      "True lock, false lock, relock timing, or weak-signal stability define the score.",
      "Synchronization-state truth is a first-class deliverable."
    ),
    competingWinsWhen: tl(
      "Carrier, symbol, family label, or modulation parameters define the score.",
      "A family decision path is more important than a lock-state narrative."
    ),
    primaryCueTerms: ["receiver", "lock", "relock", "reacquisition", "weak signal", "tracking"],
    competingCueTerms: ["modulation", "family", "carrier", "symbol", "baud", "parameter estimation"],
    reusableAssets: tl("Both can reuse conditioned capture and carrier-aware front ends."),
    wrongTurnCost: tl("If a modulation task is answered as a receiver-lock demo, the team often never proves the family or parameter outputs that are actually scored."),
  },
  {
    primaryProfileId: "model",
    competingProfileId: "parameter",
    title: t("Compact-model replay vs direct parameter inversion"),
    decidingQuestion: t("Does the answer need a replayable compact model, or only one trustworthy electrical quantity from controlled measurement?"),
    primaryWinsWhen: tl(
      "Held-out replay, structure assumptions, and compact-model explanation define the score.",
      "The same model must explain more than one operating point or response segment."
    ),
    competingWinsWhen: tl(
      "Impedance, phase, L, C, or other direct electrical parameters are the final deliverables.",
      "One calibrated measurement route already completes the answer without a replay model."
    ),
    primaryCueTerms: ["model", "fit", "replay", "held-out", "structure", "identification"],
    competingCueTerms: ["impedance", "rlc", "capacitance", "inductance", "phase difference", "parameter"],
    reusableAssets: tl("Both can reuse stable stimulus, calibrated capture, and known-reference checks."),
    wrongTurnCost: tl("If a parameter task is answered as a model-identification story, the team often spends effort on fitting while neglecting the direct calibrated quantity that judges actually want."),
  },
  {
    primaryProfileId: "separation",
    competingProfileId: "adaptive-filtering",
    title: t("Component recovery vs convergence-and-suppression proof"),
    decidingQuestion: t("Must the outputs correspond to named recovered components, or is the score mainly about reference-driven convergence and suppression?"),
    primaryWinsWhen: tl(
      "Each output channel must represent a component or interpretable recovered signal.",
      "A mixed benchmark with output correspondence is central to the answer."
    ),
    competingWinsWhen: tl(
      "Convergence, residual suppression, and recovery after condition change define the score.",
      "A meaningful reference path is part of the judged logic."
    ),
    primaryCueTerms: ["separation", "mixture", "component", "recover", "source separation"],
    competingCueTerms: ["adaptive", "convergence", "reference", "step size", "suppression"],
    reusableAssets: tl("Both can reuse conditioned capture and residual visibility."),
    wrongTurnCost: tl("If an adaptive task is answered as generic separation, the team often loses the convergence story judges actually reward; if a separation task is answered as adaptation, the outputs may never get a clear component interpretation."),
  },
];

export const distilledSignalHygienePack: DistilledSignalHygienePack = {
  lowSignalTerms: ["design", "device", "system", "measurement", "measure", "output", "result", "signal", "problem"],
  protectedShortTerms: ["thd", "fft", "ask", "fsk", "psk", "qam", "rlc", "lcr", "rms", "lms", "nlms"],
  weakStandaloneTerms: ["show", "prove", "make", "build", "need", "only", "mainly", "just", "output", "state"],
  trimPrefixes: ["show ", "prove ", "measure ", "design ", "build ", "implement ", "create ", "make ", "need to "],
  canonicalRewrites: [
    { from: "re-lock", to: "relock" },
    { from: "on-line", to: "online" },
    { from: "lock state", to: "lock" },
    { from: "receive-chain", to: "receive chain" },
    { from: "line-state", to: "line state" },
    { from: "step-size", to: "step size" },
  ],
};

export const familyRouteVariants: FamilyRouteVariant[] = [
  {
    id: "parameter-sine-dual",
    profileId: "parameter",
    name: t("Single-frequency dual-channel impedance route"),
    cueBoosts: [{ terms: ["impedance", "phase difference", "rlc", "capacitance", "inductance"], weight: 4 }],
    bestFor: t("Fast provincial-ready parameter tasks."),
    principle: t("Use one stable excitation point and solve from amplitude ratio plus phase shift."),
    hardwareGate: t("Requires a trustworthy reference path and dual-channel capture."),
    measurementTargets: tl("Amplitude ratio", "Phase shift", "Repeatability by range"),
    hardwareFocus: tl("Reference path", "Range switching integrity"),
    softwareFocus: tl("Phase extraction", "Stable inversion"),
    validationChecklist: tl("Known resistor", "Known capacitor", "Known inductor"),
    avoidWhen: tl("Do not force dense sweep fitting before one stable point works."),
    tradeoffs: tl("Safer than dense sweep, but less expressive than a validated sweep route."),
    typicalReferences: ["2019 D", "2023 C", "2025 G"],
  },
  {
    id: "parameter-sweep-consistency",
    profileId: "parameter",
    name: t("Sweep-consistency parameter route"),
    cueBoosts: [{ terms: ["sweep", "consistency", "response curve", "phase sweep", "frequency sweep", "rlc"], weight: 4 }],
    bestFor: t("Parameter tasks that must defend consistency across frequency or range instead of only one trusted point."),
    principle: t("Lock one calibrated anchor point first, then reuse the same capture chain to show that the parameter story stays consistent across a modest sweep."),
    hardwareGate: t("Needs a repeatable sweep source and a capture chain whose gain and phase stay stable across the defended span."),
    measurementTargets: tl("Anchor-point truth", "Sweep consistency", "Range-to-range agreement"),
    hardwareFocus: tl("Sweep repeatability", "Per-range phase integrity"),
    softwareFocus: tl("Stable sweep logging", "Consistency checks before any heavier fitting"),
    validationChecklist: tl("Known part at anchor point", "Known part across sweep span", "Range-boundary replay"),
    avoidWhen: tl("Do not use this route when even one anchor point is still unstable."),
    tradeoffs: tl("Broader than a single-point inversion route, but only worthwhile after one calibrated point already closes cleanly."),
    typicalReferences: ["2019 D", "2023 C", "2025 G"],
  },
  {
    id: "distortion-locked-fft",
    profileId: "distortion",
    name: t("Period-locked FFT route"),
    cueBoosts: [{ terms: ["thd", "harmonic", "fft", "window", "fundamental"], weight: 4 }],
    bestFor: t("THD and harmonic measurement tasks."),
    principle: t("Lock the period first, then keep one stable FFT configuration."),
    hardwareGate: t("Requires enough analog headroom for harmonic capture."),
    measurementTargets: tl("Period", "Fundamental bin", "THD"),
    hardwareFocus: tl("Anti-aliasing", "Headroom"),
    softwareFocus: tl("Window stability", "Harmonic indexing"),
    validationChecklist: tl("Clean sine", "Known harmonic injection"),
    avoidWhen: tl("Avoid changing the FFT window late in the project."),
    tradeoffs: tl("Simple and robust when clipping and leakage are controlled."),
    typicalReferences: ["2020 E", "2021 A", "2024 B"],
  },
  {
    id: "distortion-drive-comparison",
    profileId: "distortion",
    name: t("Drive-comparison distortion route"),
    cueBoosts: [{ terms: ["drive level", "comparison", "trend", "harmonic growth", "thd trend", "nonlinear"], weight: 4 }],
    bestFor: t("Distortion tasks that must explain how nonlinear behavior changes across operating points."),
    principle: t("Freeze one FFT route, then compare the same DUT or chain across controlled drive points so the distortion trend is more important than any single screenshot."),
    hardwareGate: t("Needs a source and front end that stay linear enough that the trend belongs to the DUT rather than the instrument."),
    measurementTargets: tl("Anchor THD point", "Harmonic-growth trend", "Operating-point repeatability"),
    hardwareFocus: tl("Source cleanliness across drive points", "Headroom under the highest defended case"),
    softwareFocus: tl("Trend logging", "Same-bin comparison across fixed FFT settings"),
    validationChecklist: tl("Clean-source anchor", "Known harmonic-growth comparison", "Repeated drive ladder replay"),
    avoidWhen: tl("Do not switch FFT settings between drive points just to make the pictures look cleaner."),
    tradeoffs: tl("Stronger for nonlinear-research style tasks, but only if the reference source remains cleaner than the measured trend."),
    typicalReferences: ["2020 E", "2021 A", "2024 B"],
  },
  {
    id: "cable-reflection",
    profileId: "cable",
    name: t("Reflection-signature route"),
    cueBoosts: [{ terms: ["open", "short", "matched", "reflection", "bad contact", "cable length"], weight: 5 }],
    bestFor: t("Cable state and length tasks with clear return signatures."),
    principle: t("Launch a controlled edge, then classify the return signature before refining the length solver."),
    hardwareGate: t("Needs a protected launch path and observable return path."),
    measurementTargets: tl("Return shape", "State class", "Length"),
    hardwareFocus: tl("Edge fidelity", "Protection and coupling"),
    softwareFocus: tl("Template comparison", "Simple length estimator"),
    validationChecklist: tl("Open", "Short", "Matched", "Known length"),
    avoidWhen: tl("Avoid mixing this route with a half-finished receiver narrative."),
    tradeoffs: tl("Excellent state explainability, but length resolution depends on edge speed."),
    typicalReferences: ["2019 C", "2023 B", "2025 D"],
  },
  {
    id: "cable-pair-diagnosis",
    profileId: "cable",
    name: t("Pair-state cable diagnosis route"),
    cueBoosts: [{ terms: ["twisted pair", "pair state", "pair integrity", "bad contact", "mismatch", "line fault", "fault state", "pair diagnosis", "electrical cues", "explicit electrical cues", "repeatable electrical cues", "automatic twisted-pair diagnosis"], weight: 7 }],
    bestFor: t("Cable tasks centered on automatic twisted-pair diagnosis, pair identity, passive fault state, and explicit electrical-cue diagnosis rather than pure length solving."),
    principle: t("Lock one pair-sensitive electrical cue path first, then map healthy, mismatch, bad-contact, or fault states with a compact state table before broadening cable claims."),
    hardwareGate: t("Needs pair-sensitive launch or probing plus one repeatable electrical signature path that survives connector and fixture changes."),
    measurementTargets: tl("Pair-state class", "Cue-table repeatability", "Bad-contact or mismatch discrimination"),
    hardwareFocus: tl("Pair mapping integrity", "State-sensitive probing repeatability"),
    softwareFocus: tl("Cue-to-label table", "Pair-state replay logging"),
    validationChecklist: tl("Healthy pair", "Bad-contact replay", "Mismatch replay", "Repeated plug-cycle check"),
    avoidWhen: tl("Do not use this route if the real score is still accurate cable length from reflection timing rather than passive pair-state diagnosis."),
    tradeoffs: tl("Stronger than a generic reflection route for pair and fault diagnosis, but only if the measured cue table remains more stable than the connector variability."),
    typicalReferences: ["2023 J", "2025 D", "2019 C"],
  },
  {
    id: "adaptive-reference-loop",
    profileId: "adaptive-filtering",
    name: t("Reference-driven adaptive loop"),
    cueBoosts: [{ terms: ["adaptive", "convergence", "reference", "step size", "online", "suppression"], weight: 5 }],
    bestFor: t("Tasks scored by convergence and residual suppression."),
    principle: t("Use one reference-informed adaptive core and judge it by convergence and suppression evidence."),
    hardwareGate: t("Requires a meaningful reference path and synchronized capture."),
    measurementTargets: tl("Convergence", "Residual suppression", "Robustness after change"),
    hardwareFocus: tl("Reference integrity"),
    softwareFocus: tl("Step-size and update stability"),
    validationChecklist: tl("Before/after suppression", "Condition-change recovery"),
    avoidWhen: tl("Avoid presenting this route as a class-identification answer."),
    tradeoffs: tl("Very strong when the task is explicitly adaptive, weak when no reference is justified."),
    typicalReferences: ["2017 E", "2023 H", "2024 B"],
  },
  {
    id: "adaptive-benchmark-compensation",
    profileId: "adaptive-filtering",
    name: t("Benchmark-compensation adaptive route"),
    cueBoosts: [{ terms: ["compensation", "before/after", "before and after", "reference", "residual", "operating point", "recovery", "benchmark", "harmonic truth", "fft benchmark", "unchanged"], weight: 5 }],
    bestFor: t("Adaptive or compensation tasks that must stay tied to one unchanged before/after benchmark."),
    principle: t("Keep one fixed uncompensated benchmark visible, then show how the same reference-driven loop compensates it and recovers after an operating-point shift."),
    hardwareGate: t("Needs trustworthy reference and residual channels plus one benchmark case that remains unchanged through tuning."),
    measurementTargets: tl("Uncompensated anchor", "Compensated residual", "Recovery after shift"),
    hardwareFocus: tl("Reference correlation", "Residual-channel honesty"),
    softwareFocus: tl("Mode or step-size stability", "Same-benchmark replay logging"),
    validationChecklist: tl("Before/after on same anchor case", "Operating-point shift replay", "Reference-weakened replay"),
    avoidWhen: tl("Do not broaden to many scenarios before one anchor benchmark still explains the compensation story clearly."),
    tradeoffs: tl("More defense-friendly for compensation-heavy tasks, but only if the same anchor benchmark survives every tuning round unchanged."),
    typicalReferences: ["2017 E", "2024 B"],
  },
  {
    id: "receiver-lock-chain",
    profileId: "receiver",
    name: t("Synchronization and lock-state route"),
    cueBoosts: [{ terms: ["receiver", "lock", "relock", "reacquisition", "weak signal"], weight: 5 }],
    bestFor: t("Tasks scored by true lock and relock behavior."),
    principle: t("Define lock explicitly, then show lock, loss, and relock transitions under controlled perturbations."),
    hardwareGate: t("Needs a trustworthy synchronization path and a visible lock indicator."),
    measurementTargets: tl("Lock truthfulness", "Reacquisition timing", "Weak-signal stability"),
    hardwareFocus: tl("Clocking", "Synchronization path"),
    softwareFocus: tl("Lock-state machine", "Logging"),
    validationChecklist: tl("True lock", "False lock", "Relock under disturbance"),
    avoidWhen: tl("Avoid using a cleaned waveform as the only proof of lock."),
    tradeoffs: tl("Compelling in defense, but only if lock is defined rigorously."),
    typicalReferences: ["2021 E", "2025 F"],
  },
  {
    id: "receiver-carrier-aided-chain",
    profileId: "receiver",
    name: t("Carrier-aided receive chain"),
    cueBoosts: [{ terms: ["receiver", "carrier", "tracking", "weak signal", "receive chain", "reacquisition"], weight: 5 }],
    bestFor: t("Receive tasks where carrier observability helps prove weak-signal stability before full relock polish."),
    principle: t("Stabilize one carrier-aware observation path first, then build lock and decision logic on top of it."),
    hardwareGate: t("Needs a visible front-end state and a carrier-aware measurement path."),
    measurementTargets: tl("Carrier visibility", "Tracking stability", "Receiver-state truth"),
    hardwareFocus: tl("Front-end gain control", "Carrier observation path"),
    softwareFocus: tl("Tracking logic", "Receiver-state logging"),
    validationChecklist: tl("Weak-signal benchmark", "Carrier drift case", "State transition replay"),
    avoidWhen: tl("Avoid using this route when the task is really a waveform-family identification problem."),
    tradeoffs: tl("Easier to debug early than a full lock-state proof, but still needs a truthful state narrative."),
    typicalReferences: ["2021 E", "2025 F"],
  },
  {
    id: "localization-delay-geometry",
    profileId: "localization",
    name: t("Propagation-delay and geometry route"),
    cueBoosts: [{ terms: ["localization", "time of flight", "propagation delay", "triangulation", "anchor"], weight: 5 }],
    bestFor: t("Acoustic or other propagation-based positioning tasks."),
    principle: t("Stabilize one ranging observable first, then solve coordinates with calibrated geometry."),
    hardwareGate: t("Needs synchronized sensing or a trustworthy geometry baseline."),
    measurementTargets: tl("Raw ranging", "Anchor consistency", "Coordinate output"),
    hardwareFocus: tl("Timing pickoff", "Anchor geometry"),
    softwareFocus: tl("Ranging estimator", "Deterministic coordinate solver"),
    validationChecklist: tl("Known point", "Known distance", "Anchor swap check"),
    avoidWhen: tl("Do not jump straight to full coordinates before one range is trusted."),
    tradeoffs: tl("Strong physical interpretability, but geometry and synchronization quality are unforgiving."),
    typicalReferences: ["2017 I", "2023 F"],
  },
  {
    id: "localization-visual-markers",
    profileId: "localization",
    name: t("Visual-marker localization route"),
    cueBoosts: [{ terms: ["visual localization", "marker", "coordinate", "viewpoint", "camera calibration", "known point"], weight: 5 }],
    bestFor: t("Localization tasks driven by calibrated visual markers or image-space geometry."),
    principle: t("Stabilize marker geometry first, then convert it into repeatable coordinate output."),
    hardwareGate: t("Needs a fixed or calibratable imaging baseline and markers that stay observable across viewpoints."),
    measurementTargets: tl("Marker geometry", "Known-point consistency", "Coordinate output"),
    hardwareFocus: tl("Camera calibration", "Marker visibility"),
    softwareFocus: tl("Feature localization", "Coordinate solving"),
    validationChecklist: tl("Known point", "Viewpoint change", "Marker occlusion or swap"),
    avoidWhen: tl("Do not use this route if the score really depends on propagation timing rather than visual geometry."),
    tradeoffs: tl("Excellent when visual anchors are explicit, but fragile if calibration or marker visibility drifts."),
    typicalReferences: ["2017 I", "2020 G", "2025 C"],
  },
  {
    id: "vision-calibrated-geometry",
    profileId: "vision-measurement",
    name: t("Calibrated camera-geometry route"),
    cueBoosts: [{ terms: ["vision", "camera", "calibration", "size", "shape", "pose"], weight: 5 }],
    bestFor: t("Non-contact size, shape, or distance measurement tasks."),
    principle: t("Calibrate the camera first, then extract one stable feature set and solve geometry deterministically."),
    hardwareGate: t("Needs a stable imaging setup and visible calibration target."),
    measurementTargets: tl("Feature repeatability", "Physical-unit output", "Pose robustness"),
    hardwareFocus: tl("Lens and fixture stability", "Lighting"),
    softwareFocus: tl("Feature localization", "Geometry solver"),
    validationChecklist: tl("Known-size target", "Known-distance target", "Pose change check"),
    avoidWhen: tl("Do not rely on detector flair before calibration repeatability is proven."),
    tradeoffs: tl("Highly explainable, but sensitive to calibration drift and lighting."),
    typicalReferences: ["2020 G", "2021 D", "2025 C"],
  },
  {
    id: "networked-local-truth",
    profileId: "networked-measurement",
    name: t("Local truth plus timestamped transport route"),
    cueBoosts: [
      {
        terms: [
          "network",
          "remote",
          "upload",
          "latency",
          "packet",
          "timestamp",
          "data acquisition",
          "transmission",
          "sampling node",
          "transport",
          "local sample",
          "local truth",
          "sample truth",
          "preserve local truth",
          "remote sample",
          "frame identity",
          "sequence id",
          "remote reconstruction",
        ],
        weight: 5,
      },
    ],
    bestFor: t("Remote sensing or internet-connected measurement tasks."),
    principle: t("Preserve local truth with timestamps or sequence IDs, then reconstruct it honestly at the remote end."),
    hardwareGate: t("Needs a validated local sensing node before transport is meaningful."),
    measurementTargets: tl("Local value", "Remote consistency", "Delay or loss visibility"),
    hardwareFocus: tl("Local node stability"),
    softwareFocus: tl("Framing", "Remote integrity checks"),
    validationChecklist: tl("Local-vs-remote match", "Packet drop injection"),
    avoidWhen: tl("Avoid building a rich remote UI before data identity is trustworthy."),
    tradeoffs: tl("Clear remote-storyline strength, but transport truth must stay explicit."),
    typicalReferences: ["2017 H", "2019 E", "2021 D"],
  },
  {
    id: "networked-positioning-integrity",
    profileId: "networked-measurement",
    name: t("Remote positioning integrity route"),
    cueBoosts: [{ terms: ["remote positioning", "timestamped transport", "stale-data", "anchor", "coordinate", "synchronized"], weight: 5 }],
    bestFor: t("Positioning or ranging systems whose truth must survive transport to a remote endpoint."),
    principle: t("Lock local positioning truth first, then prove that timestamps and stale-state logic preserve that truth remotely."),
    hardwareGate: t("Needs synchronized local events plus a remote integrity monitor that exposes stale or reordered positioning data."),
    measurementTargets: tl("Local coordinate truth", "Remote coordinate consistency", "Stale-state visibility"),
    hardwareFocus: tl("Anchor-event timing", "Remote alarm visibility"),
    softwareFocus: tl("Timestamp alignment", "Coordinate consistency checks"),
    validationChecklist: tl("Known point local-vs-remote match", "Brief disconnect", "Anchor timing drift replay"),
    avoidWhen: tl("Avoid using this route if the network is not part of the judged path."),
    tradeoffs: tl("More honest for transported positioning systems, but only works if local coordinate truth is already stable."),
    typicalReferences: ["2017 H", "2019 E", "2023 F"],
  },
  {
    id: "networked-visual-truth",
    profileId: "networked-measurement",
    name: t("Remote visual-measurement truth route"),
    cueBoosts: [{ terms: ["remote", "visual", "camera", "stale-data", "mirrored", "local target", "calibrated imaging"], weight: 5 }],
    bestFor: t("Remote or mirrored measurement tasks where a calibrated local visual chain remains the truth source."),
    principle: t("Keep one local calibrated target route fixed, then mirror it remotely with freshness and stale-state logic that never pretends the transport layer is the primary truth source."),
    hardwareGate: t("Needs a trustworthy local visual measurement chain plus a remote mirror that exposes freshness, identity, and degraded-link state."),
    measurementTargets: tl("Local target truth", "Remote mirror consistency", "Stale-state visibility"),
    hardwareFocus: tl("Local calibration stability", "Remote freshness indicator"),
    softwareFocus: tl("Identity-preserving mirroring", "Stale-data and degraded-link alarms"),
    validationChecklist: tl("Local-only target replay", "Local-vs-remote target comparison", "Brief stale-data or delayed-update case"),
    avoidWhen: tl("Do not use this route if the core judged challenge is full positioning integrity rather than remote mirroring of a local visual truth source."),
    tradeoffs: tl("More precise than a generic remote route for mirrored visual measurement, but only if the local calibrated target remains obviously primary."),
    typicalReferences: ["2021 D", "2020 G", "2025 C"],
  },
  {
    id: "modulation-carrier-family",
    profileId: "modulation",
    name: t("Carrier-first family identification route"),
    cueBoosts: [{ terms: ["modulation", "carrier", "symbol", "ask", "fsk", "psk"], weight: 5 }],
    bestFor: t("Waveform-family recognition tasks."),
    principle: t("Separate carrier evidence from symbol or envelope evidence, then classify and estimate parameters."),
    hardwareGate: t("Needs enough spectral and temporal fidelity for family cues."),
    measurementTargets: tl("Carrier estimate", "Family label", "Symbol or depth parameter"),
    hardwareFocus: tl("Bandwidth", "Dynamic range"),
    softwareFocus: tl("Feature extraction", "Decision logic"),
    validationChecklist: tl("Per-family benchmark", "Boundary-family confusion case"),
    avoidWhen: tl("Do not claim unsupported families without a transparent decision path."),
    tradeoffs: tl("Scalable when family rules are clear, fragile when classes are vague."),
    typicalReferences: ["2017 F", "2021 E", "2023 D"],
  },
  {
    id: "modulation-mixed-chain",
    profileId: "modulation",
    name: t("Mixed-input family-identification route"),
    cueBoosts: [{ terms: ["mixed waveform", "mixed input", "modulation family", "family labeling", "carrier", "component", "recover", "weak input", "intermediate cue", "interpretable"], weight: 5 }],
    bestFor: t("Waveform-family tasks where the receive or separation stage must stay explainable."),
    principle: t("Keep one explicit stage order from conditioned mixed input to interpretable intermediate evidence, then close the final family label from the same defended cues."),
    hardwareGate: t("Needs a visible capture path that preserves both the mixed observation and the intermediate family evidence."),
    measurementTargets: tl("Intermediate cue visibility", "Family-label stability", "Parameter consistency after layered processing"),
    hardwareFocus: tl("Carrier-aware capture", "Mixed-input observability"),
    softwareFocus: tl("Stage-by-stage cue preservation", "Label logic after layered processing"),
    validationChecklist: tl("Mixed benchmark with bypass comparison", "Family label before and after auxiliary stages", "Recovered-structure sanity check"),
    avoidWhen: tl("Do not use this route if the task really ends at recovered components instead of the family label."),
    tradeoffs: tl("Stronger for mixed receive-recognition problems, but only if the intermediate evidence stays visible after every added stage."),
    typicalReferences: ["2021 E", "2023 D", "2023 H", "2025 F"],
  },
  {
    id: "load-signature-table",
    profileId: "load-analysis",
    name: t("Synchronized signature-table route"),
    cueBoosts: [{ terms: ["load", "appliance", "signature", "classification", "feature table"], weight: 5 }],
    bestFor: t("Appliance or load-family identification tasks."),
    principle: t("Capture synchronized electrical features, then map them to a small, defensible class table."),
    hardwareGate: t("Needs stable synchronous voltage and current capture."),
    measurementTargets: tl("Feature repeatability", "Class margin", "Unsupported-load rejection"),
    hardwareFocus: tl("Synchronous capture"),
    softwareFocus: tl("Feature table", "Decision rule"),
    validationChecklist: tl("Known appliance family", "Confusion pair"),
    avoidWhen: tl("Do not expand class count faster than feature margin."),
    tradeoffs: tl("Great explainability, but only if the class list stays disciplined."),
    typicalReferences: ["2017 K", "2021 H"],
  },
  {
    id: "load-monitoring-diagnosis",
    profileId: "load-analysis",
    name: t("Monitoring-to-diagnosis route"),
    cueBoosts: [{ terms: ["monitoring", "automatic decision", "automatic diagnosis", "fault diagnosis", "state recognition", "signature", "trend", "appliance", "line-state diagnosis", "electrical cues"], weight: 5 }],
    bestFor: t("Monitoring or automatic-identification tasks that still need a compact electrical feature story."),
    principle: t("Lock one synchronous signature route first, then replay the same benchmark as a monitoring trace and as a deterministic automatic state decision."),
    hardwareGate: t("Needs repeatable synchronized capture plus one feature table that survives from monitoring view to final auto-decision view."),
    measurementTargets: tl("Monitoring-trace repeatability", "Automatic-label stability", "Feature-table explainability on a confusion pair"),
    hardwareFocus: tl("Synchronous current-voltage capture", "Stable load benchmark fixtures"),
    softwareFocus: tl("Feature log to decision flow", "Automatic-label logic tied to explicit cues"),
    validationChecklist: tl("Signature trace and final label on the same benchmark", "Confusion-pair replay", "Unsupported-state rejection"),
    avoidWhen: tl("Do not use this route if the final judged output is adaptive convergence or pure cable-state probing with no defended load-side electrical feature story."),
    tradeoffs: tl("Bridges monitoring and diagnosis naturally, but only if the automatic decision can still be replayed from visible electrical features."),
    typicalReferences: ["2017 K", "2021 H", "2023 J"],
  },
  {
    id: "separation-component-recovery",
    profileId: "separation",
    name: t("Component-recovery route"),
    cueBoosts: [{ terms: ["separation", "mixture", "component", "recover", "interference"], weight: 5 }],
    bestFor: t("Mixed-signal recovery tasks."),
    principle: t("Keep one explicit mixture model and validate recovered components against known clean references."),
    hardwareGate: t("Needs an observable mixture and at least one credible benchmark case."),
    measurementTargets: tl("Recovered component quality", "Residual interference", "Ambiguity boundary"),
    hardwareFocus: tl("Front-end linearity"),
    softwareFocus: tl("Separation core", "Benchmark comparison"),
    validationChecklist: tl("Known mixed case", "Recovered-vs-clean comparison"),
    avoidWhen: tl("Do not call residual reduction a full recovery result."),
    tradeoffs: tl("Convincing when the benchmark is explicit, weak when outputs are hard to interpret."),
    typicalReferences: ["2021 E", "2023 H"],
  },
  {
    id: "separation-synchronous-decoupling",
    profileId: "separation",
    name: t("Synchronous decoupling route"),
    cueBoosts: [{ terms: ["synchronous", "mixed signal", "recover", "component", "demodulation", "interference"], weight: 5 }],
    bestFor: t("Mixtures where one component can be isolated through synchronous or structure-aware decoupling."),
    principle: t("Use one structure-aware observable first, then decouple and validate each recovered channel against a benchmark."),
    hardwareGate: t("Needs enough observability to distinguish the useful component path from the interference path."),
    measurementTargets: tl("Channel correspondence", "Residual suppression", "Recovered-signal explainability"),
    hardwareFocus: tl("Observable intermediate path", "Front-end linearity"),
    softwareFocus: tl("Synchronous or structure-aware decoupling", "Benchmark comparison"),
    validationChecklist: tl("Mixed-case benchmark", "Intermediate-path visibility", "Recovered-channel comparison"),
    avoidWhen: tl("Avoid this route when the score is actually about adaptive convergence under a reference signal."),
    tradeoffs: tl("Stronger when the mixture has exploitable structure, weaker when outputs cannot be named clearly."),
    typicalReferences: ["2021 E", "2023 H"],
  },
  {
    id: "model-replay-fit",
    profileId: "model",
    name: t("Compact-model replay route"),
    cueBoosts: [{ terms: ["model", "fit", "replay", "held-out", "structure", "compact model", "physically interpretable"], weight: 5 }],
    bestFor: t("Model-identification tasks with replay validation."),
    principle: t("Fit the smallest model that can replay observed response on held-out data."),
    hardwareGate: t("Needs a stimulus plan and enough response fidelity for identification."),
    measurementTargets: tl("Fit quality", "Replay agreement", "Held-out consistency"),
    hardwareFocus: tl("Stimulus repeatability"),
    softwareFocus: tl("Model structure", "Fitting stability"),
    validationChecklist: tl("Training case", "Held-out case", "Replay error"),
    avoidWhen: tl("Do not choose a model you cannot defend physically."),
    tradeoffs: tl("Very strong in defense when compact, very weak when over-parameterized."),
    typicalReferences: ["2019 D", "2023 C", "2025 G"],
  },
  {
    id: "model-sweep-structure",
    profileId: "model",
    name: t("Sweep-to-structure route"),
    cueBoosts: [{ terms: ["model", "structure", "sweep", "response", "fit", "replay", "stimulus variation", "response variation"], weight: 5 }],
    bestFor: t("Model tasks where response structure across a stimulus sweep is easier to defend than a purely black-box fit."),
    principle: t("Use a stimulus sweep to expose structural response features first, then fit the smallest model that preserves those features on replay."),
    hardwareGate: t("Needs a repeatable sweep source and enough response fidelity to reveal structure changes."),
    measurementTargets: tl("Response-shape consistency", "Structure-preserving fit", "Held-out replay"),
    hardwareFocus: tl("Sweep repeatability", "Response capture fidelity"),
    softwareFocus: tl("Structure-aware fitting", "Replay comparison"),
    validationChecklist: tl("Known sweep benchmark", "Held-out sweep segment", "Replay residual table"),
    avoidWhen: tl("Avoid inflating the model order just because the sweep exposes more detail."),
    tradeoffs: tl("More explainable than a pure black-box fit, but depends heavily on sweep repeatability and honest structural assumptions."),
    typicalReferences: ["2019 D", "2023 C", "2025 G"],
  },
];

export const distilledRouteEvidencePacks: DistilledRouteEvidencePack[] = [
  {
    routeId: "parameter-sine-dual",
    provincialProof: tl("Known passive parts return stable values across repeated runs."),
    stretchSignals: tl("Multiple ranges remain consistent after calibration."),
    collapseSignals: tl("Phase bias drifts enough to move the final parameter visibly."),
  },
  {
    routeId: "parameter-sweep-consistency",
    provincialProof: tl("One known part stays trustworthy at the anchor point and remains self-consistent over the defended sweep span."),
    stretchSignals: tl("The same capture chain preserves parameter consistency across moderate sweep expansion or range switching."),
    collapseSignals: tl("The sweep shape looks rich, but the same known part no longer yields a consistent parameter story away from the anchor point."),
  },
  {
    routeId: "distortion-locked-fft",
    provincialProof: tl("Harmonic order and THD remain stable under one fixed configuration."),
    stretchSignals: tl("Drive-level changes do not break the metric story."),
    collapseSignals: tl("Leakage or clipping moves the harmonic conclusion more than the DUT does."),
  },
  {
    routeId: "distortion-drive-comparison",
    provincialProof: tl("A controlled drive ladder produces a repeatable distortion trend while the same FFT route stays frozen."),
    stretchSignals: tl("The same harmonic-growth story remains believable after warm-up or modest drive reordering."),
    collapseSignals: tl("The trend changes more because the instrument path moved than because the DUT actually entered a different nonlinear regime."),
  },
  {
    routeId: "cable-reflection",
    provincialProof: tl("Open, short, and matched remain separable on every run."),
    stretchSignals: tl("Length estimate remains repeatable across representative cables."),
    collapseSignals: tl("The return signature changes more with the fixture than with the cable state."),
  },
  {
    routeId: "cable-pair-diagnosis",
    provincialProof: tl("Healthy, mismatch, and bad-contact pair states can be replayed from the same explicit cue table without hiding the passive line evidence."),
    stretchSignals: tl("Pair-state labels remain stable after repeated plug cycles, modest fixture variation, or a slightly broader anomaly set."),
    collapseSignals: tl("The labels still look plausible, but the pair-sensitive cue table changes more with connector handling than with the actual pair state."),
  },
  {
    routeId: "adaptive-reference-loop",
    provincialProof: tl("Convergence and suppression are visible and repeatable."),
    stretchSignals: tl("The loop recovers after operating-point changes."),
    collapseSignals: tl("The reference signal no longer defends why suppression should work."),
  },
  {
    routeId: "adaptive-benchmark-compensation",
    provincialProof: tl("The same uncompensated anchor case and compensated replay remain comparable and truthful on every run."),
    stretchSignals: tl("Recovery after an operating-point change stays visible without replacing the original benchmark story."),
    collapseSignals: tl("Compensation still looks effective, but only because the anchor benchmark or residual metric quietly changed underneath it."),
  },
  {
    routeId: "receiver-lock-chain",
    provincialProof: tl("True lock is distinguishable from unlock on demand."),
    stretchSignals: tl("Relock timing stays repeatable under controlled disturbance."),
    collapseSignals: tl("The lock indicator disagrees with the actual synchronization state."),
  },
  {
    routeId: "receiver-carrier-aided-chain",
    provincialProof: tl("Carrier-aware observables and receiver-state logs agree on the same weak-signal benchmark and remain visible through disturbance and recovery."),
    stretchSignals: tl("Tracking stability survives weaker input, modest carrier drift, and repeated lock-loss events."),
    collapseSignals: tl("The carrier trace looks stable, but the claimed receiver state or relock behavior can no longer be defended from the same benchmark."),
  },
  {
    routeId: "localization-delay-geometry",
    provincialProof: tl("Known-point or known-distance checks repeat within the claimed range."),
    stretchSignals: tl("Mild geometry changes do not break the coordinate solver."),
    collapseSignals: tl("Raw ranging shifts more than the claimed final coordinates."),
  },
  {
    routeId: "localization-visual-markers",
    provincialProof: tl("Known-point coordinates remain repeatable while the same visual markers stay calibrated across viewpoint changes."),
    stretchSignals: tl("Marker-based coordinates remain stable under modest pose variation or partial marker occlusion."),
    collapseSignals: tl("Marker geometry or camera calibration drifts enough that the same known point no longer maps to a defendable coordinate."),
  },
  {
    routeId: "vision-calibrated-geometry",
    provincialProof: tl("Known-size or known-distance checks remain stable across representative poses."),
    stretchSignals: tl("Calibration remains useful under broader lighting or angle variation."),
    collapseSignals: tl("Feature repeatability changes more than the claimed physical accuracy."),
  },
  {
    routeId: "networked-local-truth",
    provincialProof: tl("Remote output visibly matches local truth while exposing delay and loss."),
    stretchSignals: tl("The system degrades gracefully when jitter or packet loss is injected."),
    collapseSignals: tl("Remote reconstruction hides stale or dropped data and can no longer be trusted."),
  },
  {
    routeId: "networked-positioning-integrity",
    provincialProof: tl("A known local position stays consistent after transport, and stale or delayed remote coordinates become visibly invalid instead of silently remaining on screen."),
    stretchSignals: tl("Remote coordinate truth survives brief disconnects, reordered updates, or anchor-event jitter without hiding degraded integrity."),
    collapseSignals: tl("The remote side keeps showing plausible coordinates even after local truth is stale, reordered, or temporarily unavailable."),
  },
  {
    routeId: "modulation-carrier-family",
    provincialProof: tl("Supported families can be labeled consistently on benchmark cases."),
    stretchSignals: tl("Boundary-family cases are rejected or labeled honestly."),
    collapseSignals: tl("The label changes when only capture gain or timing changes."),
  },
  {
    routeId: "modulation-mixed-chain",
    provincialProof: tl("A mixed-input benchmark still preserves an interpretable intermediate cue path and yields the same supported family label with and without the auxiliary stage."),
    stretchSignals: tl("Layered receive or separation stages remain explainable as input conditions get weaker or more mixed."),
    collapseSignals: tl("The final family label survives only because the auxiliary stage is opaque, and the intermediate family evidence can no longer be defended."),
  },
  {
    routeId: "load-signature-table",
    provincialProof: tl("The main class list remains stable across repeated captures."),
    stretchSignals: tl("Confusion pairs are still explained honestly on edge cases."),
    collapseSignals: tl("Small front-end drift changes the class label unpredictably."),
  },
  {
    routeId: "load-monitoring-diagnosis",
    provincialProof: tl("The same supported load benchmark can be shown first as a signature trace and then as a stable automatic decision without changing the underlying feature story."),
    stretchSignals: tl("Automatic labels remain aligned with explicit feature margins under repeated monitoring cycles and supported state changes."),
    collapseSignals: tl("The dashboard or automatic label still looks plausible, but the same benchmark can no longer be explained from the visible electrical feature table."),
  },
  {
    routeId: "separation-component-recovery",
    provincialProof: tl("Recovered outputs match known clean references on at least one mixed case."),
    stretchSignals: tl("Multiple mixture conditions still preserve output meaning."),
    collapseSignals: tl("The team can no longer explain what each output channel represents."),
  },
  {
    routeId: "separation-synchronous-decoupling",
    provincialProof: tl("A structure-aware decoupling path produces a recovered channel that remains interpretable on a benchmark mixture."),
    stretchSignals: tl("Intermediate-path visibility still supports the recovery story as the mixture condition changes."),
    collapseSignals: tl("The intermediate path no longer explains why the recovered channel should be trusted."),
  },
  {
    routeId: "model-replay-fit",
    provincialProof: tl("Replay agrees on both fit and held-out cases within a defended tolerance."),
    stretchSignals: tl("The model keeps working under moderate stimulus variation."),
    collapseSignals: tl("A single fit point looks good but replay fails on nearby cases."),
  },
  {
    routeId: "model-sweep-structure",
    provincialProof: tl("A repeatable sweep reveals stable structure cues that the compact model can replay."),
    stretchSignals: tl("Held-out sweep segments preserve the same structural fit story."),
    collapseSignals: tl("The sweep shape is no longer repeatable enough to defend the fitted structure."),
  },
];

export const distilledModuleNodes: DistilledModuleNode[] = [
  {
    id: "stimulus-source",
    profileIds: ["parameter", "distortion", "cable", "model"],
    name: t("Stimulus source"),
    role: t("Creates controllable excitation that anchors the measurement chain."),
    whenToUse: tl("Known excitation is part of the answer.", "Frequency or timing must be controlled explicitly."),
    requiredSignals: tl("Stable frequency", "Repeatable amplitude or edge"),
    failureAlerts: tl("A drifting reference breaks downstream interpretation."),
    quickestBench: tl("Probe the source and compare it against the timing reference."),
    linkedProblems: ["2019-d", "2021-a", "2023-b", "2023-c", "2025-g"],
  },
  {
    id: "dual-channel-capture",
    profileIds: ["parameter", "distortion", "adaptive-filtering"],
    name: t("Dual-channel capture"),
    role: t("Makes reference-vs-measurement comparisons explicit."),
    whenToUse: tl("Phase, amplitude ratio, or reference-informed suppression matters."),
    requiredSignals: tl("Time alignment", "Range consistency"),
    failureAlerts: tl("Cross-channel skew can dominate the final result."),
    quickestBench: tl("Feed the same signal into both channels and measure residual mismatch."),
    linkedProblems: ["2019-d", "2021-a", "2023-c", "2024-b"],
  },
  {
    id: "fft-core",
    profileIds: ["distortion", "modulation", "separation"],
    name: t("FFT analysis core"),
    role: t("Converts stable sampled records into frequency-domain evidence."),
    whenToUse: tl("Harmonics, carrier features, or frequency-domain separation evidence matter."),
    requiredSignals: tl("Period alignment", "Stable window choice"),
    failureAlerts: tl("Leakage or clipping produces misleading spectral conclusions."),
    quickestBench: tl("Run one clean sine and verify the expected bin structure."),
    linkedProblems: ["2020-e", "2021-a", "2023-d", "2023-h"],
  },
  {
    id: "adaptive-core",
    profileIds: ["adaptive-filtering"],
    name: t("Adaptive filter core"),
    role: t("Implements the update law that creates convergence and suppression evidence."),
    whenToUse: tl("A meaningful reference signal exists.", "The task is scored by online suppression behavior."),
    requiredSignals: tl("Reference correlation", "Stable step-size behavior"),
    failureAlerts: tl("A pretty output without convergence evidence is not enough."),
    quickestBench: tl("Show suppression before and after adaptation on a repeatable case."),
    linkedProblems: ["2017-e", "2024-b"],
  },
  {
    id: "line-state-front-end",
    profileIds: ["cable"],
    name: t("Line-state front end"),
    role: t("Launches and captures signatures without destroying line-state evidence."),
    whenToUse: tl("Open, short, matched, or bad-contact language is central."),
    requiredSignals: tl("Protected launch", "Observable return signature"),
    failureAlerts: tl("Protection or coupling erases the feature the algorithm needs."),
    quickestBench: tl("Compare open, short, and matched captures side by side."),
    linkedProblems: ["2019-c", "2023-b", "2025-d"],
  },
  {
    id: "lock-state-machine",
    profileIds: ["receiver"],
    name: t("Lock-state machine"),
    role: t("Turns synchronization evidence into a truthful lock, unlock, or relock decision."),
    whenToUse: tl("The answer must prove lock behavior rather than only signal cleanliness."),
    requiredSignals: tl("Explicit lock criterion", "State-transition logging"),
    failureAlerts: tl("A vague lock definition makes every demo fragile."),
    quickestBench: tl("Induce loss of lock and measure relock timing."),
    linkedProblems: ["2025-f"],
  },
  {
    id: "geometry-solver",
    profileIds: ["localization", "vision-measurement"],
    name: t("Geometry solver"),
    role: t("Turns calibrated observables into distance, pose, or coordinates with explicit assumptions."),
    whenToUse: tl("The task depends on geometry, anchors, or calibrated image relationships."),
    requiredSignals: tl("Calibrated baseline", "Repeatable observables"),
    failureAlerts: tl("A good-looking output may still be wrong if geometry assumptions drift."),
    quickestBench: tl("Check one known point or one known-size target against ground truth."),
    linkedProblems: ["2017-i", "2020-g", "2023-f", "2025-c"],
  },
  {
    id: "ranging-pickoff",
    profileIds: ["localization"],
    name: t("Ranging pickoff"),
    role: t("Extracts the earliest trustworthy propagation or timing cue before any coordinate solving starts."),
    whenToUse: tl("Distance, anchor delay, or time-of-flight evidence is the physical basis of the answer."),
    requiredSignals: tl("Stable trigger reference", "Repeatable first-arrival or timing marker"),
    failureAlerts: tl("If the first usable cue moves around, every coordinate result becomes cosmetic."),
    quickestBench: tl("Repeat one known-distance case and overlay the picked timing point across multiple runs."),
    linkedProblems: ["2017-i", "2023-f"],
  },
  {
    id: "camera-calibration-rig",
    profileIds: ["vision-measurement"],
    name: t("Camera calibration rig"),
    role: t("Locks focal geometry, pose reference, and scale conversion before feature-level measurement begins."),
    whenToUse: tl("Physical size or shape must be recovered from image coordinates."),
    requiredSignals: tl("Known-size calibration target", "Fixed imaging pose or recoverable pose reference"),
    failureAlerts: tl("If calibration drifts silently, the overlay can still look right while the metric output is wrong."),
    quickestBench: tl("Re-run the same known-size target after removing and restoring the camera fixture."),
    linkedProblems: ["2020-g", "2021-d", "2025-c"],
  },
  {
    id: "feature-localizer",
    profileIds: ["vision-measurement"],
    name: t("Feature localizer"),
    role: t("Turns the calibrated image into explicit edge, corner, contour, or marker coordinates that the solver can defend."),
    whenToUse: tl("The measurement result depends on stable image features instead of raw bounding boxes."),
    requiredSignals: tl("Visible target contrast", "Feature coordinates that can be overlaid and inspected"),
    failureAlerts: tl("Detection confidence without feature coordinates is too weak for a measurement defense."),
    quickestBench: tl("Freeze one frame and verify that the reported feature points match the visible target geometry."),
    linkedProblems: ["2020-g", "2021-d", "2025-c"],
  },
  {
    id: "timestamped-transport",
    profileIds: ["networked-measurement"],
    name: t("Timestamped transport"),
    role: t("Preserves measurement identity across a remote link and exposes delay or loss explicitly."),
    whenToUse: tl("Remote upload, transport, or distributed reconstruction is part of the score."),
    requiredSignals: tl("Timestamp or sequence identity", "Remote integrity visibility"),
    failureAlerts: tl("A smooth remote UI can hide stale or missing measurements."),
    quickestBench: tl("Compare one local reading against the remote log under a disturbed link."),
    linkedProblems: ["2019-e", "2021-d"],
  },
  {
    id: "remote-integrity-monitor",
    profileIds: ["networked-measurement"],
    name: t("Remote integrity monitor"),
    role: t("Makes stale data, dropouts, reorder events, and local-vs-remote mismatch visible enough to defend network honesty."),
    whenToUse: tl("The judging risk is that the remote page hides timing or validity problems."),
    requiredSignals: tl("Freshness indicator", "One local-vs-remote consistency counter or alarm"),
    failureAlerts: tl("A remote dashboard that never declares stale state can fail even when the transport basically works."),
    quickestBench: tl("Disconnect or delay the link briefly and verify the remote side enters a visible degraded state."),
    linkedProblems: ["2017-h", "2019-e", "2021-d"],
  },
  {
    id: "receiver-front-end",
    profileIds: ["receiver"],
    name: t("Receiver front end"),
    role: t("Keeps weak or structured incoming signals inside a measurable and traceable operating range."),
    whenToUse: tl("Weak-signal gain control, filtering, or down-conversion is central to the answer."),
    requiredSignals: tl("Visible front-end state", "Stable gain or bandwidth selection"),
    failureAlerts: tl("A black-box front end makes lock behavior impossible to defend."),
    quickestBench: tl("Inject one known weak-signal case and verify the front-end state stays observable."),
    linkedProblems: ["2021-e", "2025-f"],
  },
  {
    id: "carrier-envelope-observer",
    profileIds: ["modulation", "receiver"],
    name: t("Carrier-envelope observer"),
    role: t("Separates carrier-level evidence from envelope or slow-varying evidence so the family label is tied to measured cues."),
    whenToUse: tl("AM-like, ASK-like, or carrier-dominant waveform families must be identified transparently."),
    requiredSignals: tl("Stable carrier estimate", "Envelope or amplitude-variation trace that can be compared against the input"),
    failureAlerts: tl("If carrier and envelope evidence are mixed together, family labels become guesswork."),
    quickestBench: tl("Show the raw waveform, carrier estimate, and extracted envelope on one supported benchmark case."),
    linkedProblems: ["2017-f", "2021-e", "2023-d", "2025-f"],
  },
  {
    id: "symbol-timing-prober",
    profileIds: ["modulation", "receiver"],
    name: t("Symbol timing prober"),
    role: t("Extracts symbol-rate or transition-structure evidence that separates digital waveform families from analog-looking cases."),
    whenToUse: tl("The answer depends on baud, symbol spacing, or timing-structure clues rather than only spectral shape."),
    requiredSignals: tl("Repeatable transition markers", "One defended symbol-rate or timing hypothesis"),
    failureAlerts: tl("Without stable symbol-timing evidence, nearby digital families can collapse into the same guess."),
    quickestBench: tl("Replay one supported digital-family case and verify that the inferred timing stays aligned over repeated captures."),
    linkedProblems: ["2021-e", "2023-d", "2025-f"],
  },
  {
    id: "mixture-observer",
    profileIds: ["separation"],
    name: t("Mixture observer"),
    role: t("Makes the mixed input, intermediate channels, and recovered outputs comparable enough to defend component meaning."),
    whenToUse: tl("The task is judged by what each recovered channel represents after separation."),
    requiredSignals: tl("Observable mixed case", "Inspectable intermediate path"),
    failureAlerts: tl("If the intermediate path is invisible, the recovered outputs can become impossible to explain."),
    quickestBench: tl("Show one known mixed benchmark with mixed, intermediate, and recovered channels side by side."),
    linkedProblems: ["2021-e", "2023-h"],
  },
  {
    id: "model-fit-core",
    profileIds: ["model"],
    name: t("Model fit core"),
    role: t("Turns measured response data into a compact, replayable structure with explicit held-out checks."),
    whenToUse: tl("The final answer must explain behavior across more than one operating point or sweep segment."),
    requiredSignals: tl("Repeatable stimulus-response pairs", "Held-out validation split"),
    failureAlerts: tl("A fit that only works on training data is not a defendable model story."),
    quickestBench: tl("Fit one compact structure, then replay it on a held-out benchmark segment."),
    linkedProblems: ["2019-d", "2023-c", "2025-g"],
  },
  {
    id: "power-signature-capture",
    profileIds: ["load-analysis"],
    name: t("Power-signature capture"),
    role: t("Captures synchronized voltage-current behavior and preserves the operating-state waveform traits behind the class decision."),
    whenToUse: tl("Load identity or operating state is inferred from electrical behavior rather than from a direct label input."),
    requiredSignals: tl("Synchronous voltage-current sampling", "Stable cycle alignment across repeated captures"),
    failureAlerts: tl("If current and voltage are not phase-consistent, every downstream feature table becomes fragile."),
    quickestBench: tl("Repeat the same appliance or load state several times and compare cycle-aligned voltage-current signatures."),
    linkedProblems: ["2017-k", "2021-h"],
  },
  {
    id: "load-feature-table",
    profileIds: ["load-analysis"],
    name: t("Load feature table"),
    role: t("Turns synchronized electrical signatures into a compact, explainable feature set and class boundary story."),
    whenToUse: tl("The judges need to see why one load family differs from another instead of trusting a black-box label."),
    requiredSignals: tl("A compact feature list with class margins", "At least one confusion pair explained by measured features"),
    failureAlerts: tl("If the feature table grows faster than the defended margins, the class list becomes impossible to trust."),
    quickestBench: tl("Compare two easy-to-confuse load states and highlight which features actually separate them."),
    linkedProblems: ["2017-k", "2021-h", "2023-j"],
  },
];

export const distilledModuleAssemblyRules: DistilledModuleAssemblyRule[] = [
  {
    moduleId: "stimulus-source",
    prerequisites: [],
    unlocks: tl("Reference comparisons", "Timing-valid capture"),
    avoidParallelWith: tl("Dense algorithm tuning before the source is stable"),
    minimumAssemblyOrder: tl("Bring up first"),
  },
  {
    moduleId: "dual-channel-capture",
    prerequisites: tl("Stable source or reference path"),
    unlocks: tl("Phase extraction", "Reference-informed suppression metrics"),
    avoidParallelWith: tl("Auto-ranging before channel skew is measured"),
    minimumAssemblyOrder: tl("Immediately after source bring-up"),
  },
  {
    moduleId: "adaptive-core",
    prerequisites: tl("Meaningful reference path", "Repeatable baseline capture"),
    unlocks: tl("Convergence metrics", "Residual suppression evidence"),
    avoidParallelWith: tl("Visualization polish before convergence is visible"),
    minimumAssemblyOrder: tl("After baseline capture is stable"),
  },
  {
    moduleId: "line-state-front-end",
    prerequisites: tl("Known launch source"),
    unlocks: tl("State templates", "Length estimation"),
    avoidParallelWith: tl("Receiver-style lock narratives"),
    minimumAssemblyOrder: tl("Build before any line-state algorithm"),
  },
  {
    moduleId: "lock-state-machine",
    prerequisites: tl("Synchronization evidence path"),
    unlocks: tl("True lock proof", "Relock demo"),
    avoidParallelWith: tl("UI polishing before a trustworthy lock definition exists"),
    minimumAssemblyOrder: tl("After basic acquisition works"),
  },
  {
    moduleId: "geometry-solver",
    prerequisites: tl("Calibrated baseline or reference geometry"),
    unlocks: tl("Coordinate or physical-unit outputs"),
    avoidParallelWith: tl("Visual polish before one ground-truth check passes"),
    minimumAssemblyOrder: tl("After repeatable observables are measured"),
  },
  {
    moduleId: "ranging-pickoff",
    prerequisites: tl("Stable excitation or emission timing reference", "Known-distance or known-point benchmark"),
    unlocks: tl("Defendable ranging cue", "Geometry solving that starts from a physical timing measurement"),
    avoidParallelWith: tl("Coordinate display polish before the first-arrival cue is stable"),
    minimumAssemblyOrder: tl("Before full localization solving"),
  },
  {
    moduleId: "camera-calibration-rig",
    prerequisites: tl("Fixed camera path or repeatable mounting reference"),
    unlocks: tl("Stable pixel-to-physical scale", "Feature localization that can be trusted across runs"),
    avoidParallelWith: tl("Expanding target cases before the calibration target repeats cleanly"),
    minimumAssemblyOrder: tl("Before feature-level measurement logic"),
  },
  {
    moduleId: "feature-localizer",
    prerequisites: tl("Calibrated imaging setup", "One visible target class with enough contrast"),
    unlocks: tl("Geometry solving inputs", "Explainable image-to-measurement trace"),
    avoidParallelWith: tl("High-level measurement claims before feature coordinates are inspectable"),
    minimumAssemblyOrder: tl("After calibration and before metric reconstruction"),
  },
  {
    moduleId: "timestamped-transport",
    prerequisites: tl("Validated local sensing node"),
    unlocks: tl("Remote consistency checks", "Visible integrity telemetry"),
    avoidParallelWith: tl("Fancy protocol features before basic ordering and validity are visible"),
    minimumAssemblyOrder: tl("After local-only truth is established"),
  },
  {
    moduleId: "remote-integrity-monitor",
    prerequisites: tl("Timestamped or sequence-traceable transport path"),
    unlocks: tl("Stale-data alarms", "Defendable degraded-link behavior"),
    avoidParallelWith: tl("UI beautification before stale and loss states are explicit"),
    minimumAssemblyOrder: tl("Immediately after basic remote transport works"),
  },
  {
    moduleId: "receiver-front-end",
    prerequisites: tl("Known benchmark input or controllable receive stimulus"),
    unlocks: tl("Trackable weak-signal behavior", "Defendable synchronization path"),
    avoidParallelWith: tl("Demodulation polish before front-end state is observable"),
    minimumAssemblyOrder: tl("Before lock-state tuning"),
  },
  {
    moduleId: "carrier-envelope-observer",
    prerequisites: tl("Conditioned input capture", "One supported benchmark waveform family"),
    unlocks: tl("Transparent family cues", "Carrier or depth parameter extraction"),
    avoidParallelWith: tl("Classifier expansion before carrier and envelope traces are stable"),
    minimumAssemblyOrder: tl("After basic capture and before the final family decision"),
  },
  {
    moduleId: "symbol-timing-prober",
    prerequisites: tl("Repeatable receive capture", "A supported digital-family benchmark"),
    unlocks: tl("Baud or symbol-spacing evidence", "Digital-family separation beyond spectrum-only cues"),
    avoidParallelWith: tl("Adding many digital families before one timing hypothesis is defended"),
    minimumAssemblyOrder: tl("After carrier-level conditioning and before final parameter labeling"),
  },
  {
    moduleId: "mixture-observer",
    prerequisites: tl("Known mixed benchmark"),
    unlocks: tl("Intermediate-path debugging", "Recovered-channel interpretation"),
    avoidParallelWith: tl("Heavy separation tuning before one benchmark path is visible"),
    minimumAssemblyOrder: tl("Before polishing the final recovered output"),
  },
  {
    moduleId: "model-fit-core",
    prerequisites: tl("Repeatable stimulus source", "Stable response capture"),
    unlocks: tl("Compact fit story", "Held-out replay validation"),
    avoidParallelWith: tl("Large model exploration before one compact structure replays correctly"),
    minimumAssemblyOrder: tl("After one trusted stimulus-response benchmark is recorded"),
  },
  {
    moduleId: "power-signature-capture",
    prerequisites: tl("Known mains or load-side reference", "Safe synchronized voltage-current front end"),
    unlocks: tl("Repeatable electrical state signatures", "Feature extraction with defensible phase relationships"),
    avoidParallelWith: tl("Class-list expansion before synchronized captures repeat cleanly"),
    minimumAssemblyOrder: tl("Before building the feature table"),
  },
  {
    moduleId: "load-feature-table",
    prerequisites: tl("Synchronized voltage-current signature library", "A compact supported class list"),
    unlocks: tl("Explainable class decisions", "Confusion-pair defense"),
    avoidParallelWith: tl("Black-box classification before feature margins are visible"),
    minimumAssemblyOrder: tl("After signature capture is stable and before unsupported classes are added"),
  },
];

export const distilledModuleMetricRules: DistilledModuleMetricRule[] = [
  {
    moduleId: "dual-channel-capture",
    provincialFloor: tl("Repeatable phase and amplitude comparisons"),
    stretchSignals: tl("Per-range calibration remains stable over time"),
    fallbackTriggers: tl("If skew is unstable, freeze to one trusted range and one trusted frequency"),
  },
  {
    moduleId: "fft-core",
    provincialFloor: tl("Correct harmonic order under one stable FFT configuration"),
    stretchSignals: tl("Mild frequency drift does not destroy the metric"),
    fallbackTriggers: tl("If leakage is uncontrolled, reduce to one validated frequency band"),
  },
  {
    moduleId: "adaptive-core",
    provincialFloor: tl("Visible convergence and repeatable suppression"),
    stretchSignals: tl("Recovery after condition changes"),
    fallbackTriggers: tl("If the reference is weak, narrow the claim to defended correlation cases"),
  },
  {
    moduleId: "line-state-front-end",
    provincialFloor: tl("Open, short, and matched remain separable"),
    stretchSignals: tl("Length estimate remains repeatable"),
    fallbackTriggers: tl("If length is unstable, keep state discrimination as the main claim"),
  },
  {
    moduleId: "lock-state-machine",
    provincialFloor: tl("True lock is distinguishable from unlock"),
    stretchSignals: tl("Relock timing is measured and repeatable"),
    fallbackTriggers: tl("If full relock is not stable, show truthful partial synchronization states"),
  },
  {
    moduleId: "geometry-solver",
    provincialFloor: tl("One calibrated geometry result matches ground truth repeatably"),
    stretchSignals: tl("The solver remains stable when pose or anchor layout changes modestly"),
    fallbackTriggers: tl("If full solving is unstable, freeze to one trusted point or pose range"),
  },
  {
    moduleId: "ranging-pickoff",
    provincialFloor: tl("The first usable ranging cue repeats on one known-distance benchmark"),
    stretchSignals: tl("The picked cue remains stable under moderate reflection or anchor variation"),
    fallbackTriggers: tl("If the earliest cue is unstable, narrow the geometry claim before changing the full solver"),
  },
  {
    moduleId: "camera-calibration-rig",
    provincialFloor: tl("The same calibration target yields repeatable scale or pose parameters after remounting"),
    stretchSignals: tl("Calibration remains valid across modest distance or angle changes"),
    fallbackTriggers: tl("If calibration drifts, freeze the camera pose and shorten the defended use range"),
  },
  {
    moduleId: "feature-localizer",
    provincialFloor: tl("The chosen features stay visually aligned with the target on repeated frames"),
    stretchSignals: tl("Feature coordinates remain stable when lighting or pose changes modestly"),
    fallbackTriggers: tl("If feature points wander, reduce to one easier target condition before expanding cases"),
  },
  {
    moduleId: "timestamped-transport",
    provincialFloor: tl("Remote output can be matched back to local truth by timestamp or sequence ID"),
    stretchSignals: tl("Delay and loss remain visible under disturbed links"),
    fallbackTriggers: tl("If integrity is weak, simplify the transport path before scaling throughput"),
  },
  {
    moduleId: "remote-integrity-monitor",
    provincialFloor: tl("The remote side marks stale or dropped data instead of silently showing old values"),
    stretchSignals: tl("Degraded-link alarms remain truthful under reorder, jitter, or brief disconnects"),
    fallbackTriggers: tl("If stale-state logic is unreliable, show fewer remote metrics but keep validity explicit"),
  },
  {
    moduleId: "receiver-front-end",
    provincialFloor: tl("The same weak-signal benchmark stays observable through the front end"),
    stretchSignals: tl("Front-end state remains stable as the input gets weaker or drifts modestly"),
    fallbackTriggers: tl("If the front end is opaque, freeze gain and bandwidth and expose one trusted benchmark path"),
  },
  {
    moduleId: "carrier-envelope-observer",
    provincialFloor: tl("Carrier and envelope traces stay consistent on one supported benchmark family"),
    stretchSignals: tl("The same cues remain usable across more than one amplitude or depth setting"),
    fallbackTriggers: tl("If family cues overlap too much, reduce the supported family set before expanding labels"),
  },
  {
    moduleId: "symbol-timing-prober",
    provincialFloor: tl("One defended symbol-rate or timing cue repeats on the supported digital benchmark"),
    stretchSignals: tl("Timing evidence remains usable under mild noise or amplitude change"),
    fallbackTriggers: tl("If timing evidence collapses, keep family claims on analog-like cases only"),
  },
  {
    moduleId: "mixture-observer",
    provincialFloor: tl("One mixed benchmark remains interpretable from mixed input through recovered outputs"),
    stretchSignals: tl("Intermediate channels still explain the recovery story as the mixture changes"),
    fallbackTriggers: tl("If output meaning is unclear, reduce to one benchmark case and one observable intermediate path"),
  },
  {
    moduleId: "model-fit-core",
    provincialFloor: tl("A compact fit replays one held-out case within a defended tolerance"),
    stretchSignals: tl("Replay still holds on additional sweep segments or operating points"),
    fallbackTriggers: tl("If replay fails broadly, reduce model order or narrow the defended response range"),
  },
  {
    moduleId: "power-signature-capture",
    provincialFloor: tl("Voltage-current signatures stay aligned and repeatable on one supported load state"),
    stretchSignals: tl("The same load signature remains stable across repeated start-stop or state-switch cycles"),
    fallbackTriggers: tl("If synchronous capture is unstable, freeze to one load state and one trusted cycle window"),
  },
  {
    moduleId: "load-feature-table",
    provincialFloor: tl("At least one confusion pair is separated by explicit, repeatable features"),
    stretchSignals: tl("Feature margins remain explainable as more supported classes are added"),
    fallbackTriggers: tl("If feature margins collapse, shrink the class list before adding smarter classification logic"),
  },
];

const supplement = (
  id: string,
  familyId: string,
  difficulty: "medium" | "high",
  tierFit: Array<"baseline" | "provincial" | "national">,
  coreChain: string[],
  mustHaveDeliverables: string[],
  commonPitfalls: string[],
  scoringFocus: string[],
  similarProblemIds: string[],
): HistoricalProblemSupplement => ({
  id,
  familyId,
  difficulty,
  tierFit,
  coreChain: tl(...coreChain),
  mustHaveDeliverables: tl(...mustHaveDeliverables),
  commonPitfalls: tl(...commonPitfalls),
  scoringFocus: tl(...scoringFocus),
  similarProblemIds,
});

const winning = (
  id: string,
  recommendedHardware: string[],
  softwareBackbone: string[],
  calibrationFocus: string[],
  defenseAngles: string[],
): HistoricalWinningPattern => ({
  id,
  recommendedHardware: tl(...recommendedHardware),
  softwareBackbone: tl(...softwareBackbone),
  calibrationFocus: tl(...calibrationFocus),
  defenseAngles: tl(...defenseAngles),
});

const execution = (
  id: string,
  stabilizeFirst: string[],
  abnormalChecklist: string[],
  defenseScript: string[],
): HistoricalExecutionNote => ({
  id,
  stabilizeFirst: tl(...stabilizeFirst),
  abnormalChecklist: tl(...abnormalChecklist),
  defenseScript: tl(...defenseScript),
});

const blueprint = (
  id: string,
  principleRoute: string[],
  frontEndFocus: string[],
  algorithmBackbone: string[],
  calibrationBench: string[],
  demoSequence: string[],
): HistoricalSolutionBlueprint => ({
  id,
  principleRoute: tl(...principleRoute),
  frontEndFocus: tl(...frontEndFocus),
  algorithmBackbone: tl(...algorithmBackbone),
  calibrationBench: tl(...calibrationBench),
  demoSequence: tl(...demoSequence),
});

const tierPlan = (
  id: string,
  tiers: HistoricalTieredBuildPlan["tiers"],
): HistoricalTieredBuildPlan => ({ id, tiers });

const validation = (
  id: string,
  calibrationFixtures: string[],
  acceptanceChecklist: string[],
  edgeCases: string[],
  defenseCheckpoints: string[],
): HistoricalValidationPack => ({
  id,
  calibrationFixtures: tl(...calibrationFixtures),
  acceptanceChecklist: tl(...acceptanceChecklist),
  edgeCases: tl(...edgeCases),
  defenseCheckpoints: tl(...defenseCheckpoints),
});

const troubleshooting = (
  id: string,
  failureSymptoms: string[],
  firstChecks: string[],
  likelyRootCauses: string[],
  fastRecoveryActions: string[],
): HistoricalTroubleshootingPack => ({
  id,
  failureSymptoms: tl(...failureSymptoms),
  firstChecks: tl(...firstChecks),
  likelyRootCauses: tl(...likelyRootCauses),
  fastRecoveryActions: tl(...fastRecoveryActions),
});

const defense = (
  id: string,
  judgeQuestions: string[],
  recommendedAnswers: string[],
  demoScoringMoves: string[],
  phrasesToAvoid: string[],
): HistoricalDefensePack => ({
  id,
  judgeQuestions: tl(...judgeQuestions),
  recommendedAnswers: tl(...recommendedAnswers),
  demoScoringMoves: tl(...demoScoringMoves),
  phrasesToAvoid: tl(...phrasesToAvoid),
});

const benchmark = (
  id: string,
  recommendedReferences: string[],
  minimumAcceptanceNumbers: string[],
  competitionDayQuickChecks: string[],
  overnightBurnInChecks: string[],
): HistoricalBenchmarkPack => ({
  id,
  recommendedReferences: tl(...recommendedReferences),
  minimumAcceptanceNumbers: tl(...minimumAcceptanceNumbers),
  competitionDayQuickChecks: tl(...competitionDayQuickChecks),
  overnightBurnInChecks: tl(...overnightBurnInChecks),
});

const disambiguation = (
  id: string,
  easyToConfuseWith: string[],
  separatingSignals: string[],
  preferredStoryline: string[],
  overclaimBoundaries: string[],
): HistoricalDisambiguationPack => ({
  id,
  easyToConfuseWith: tl(...easyToConfuseWith),
  separatingSignals: tl(...separatingSignals),
  preferredStoryline: tl(...preferredStoryline),
  overclaimBoundaries: tl(...overclaimBoundaries),
});

const transfer = (
  id: string,
  bestBorrowedFrom: string[],
  reusableModules: string[],
  nonReusableHabits: string[],
  fastestCarryOverChecks: string[],
): HistoricalTransferPack => ({
  id,
  bestBorrowedFrom: tl(...bestBorrowedFrom),
  reusableModules: tl(...reusableModules),
  nonReusableHabits: tl(...nonReusableHabits),
  fastestCarryOverChecks: tl(...fastestCarryOverChecks),
});

const compactTiers = (
  baseline: string[],
  provincial: string[],
  national: string[],
): HistoricalTieredBuildPlan["tiers"] => [
  {
    tier: "baseline",
    hardwareStack: tl("Single stable front-end and one trusted range."),
    softwareScope: tl(...baseline),
    metricPriority: tl("Main metric must be repeatable."),
    avoidOverbuild: tl("Do not expand case count before the baseline route holds."),
  },
  {
    tier: "provincial",
    hardwareStack: tl("Add calibration fixtures and one defensive debug channel."),
    softwareScope: tl(...provincial),
    metricPriority: tl("Repeatability under representative stress cases."),
    avoidOverbuild: tl("Avoid parallel alternate routes that dilute validation time."),
  },
  {
    tier: "national",
    hardwareStack: tl("Only add hardware that closes a real error bottleneck."),
    softwareScope: tl(...national),
    metricPriority: tl("Robustness, error closure, and defense clarity."),
    avoidOverbuild: tl("Do not trade explainability for a fragile performance spike."),
  },
];

export const historicalProblemSupplements: HistoricalProblemSupplement[] = [
  supplement("1994-b", "parameter", "medium", ["baseline", "provincial"], ["Multi-channel sampling route.", "Per-channel scaling and timing stay comparable.", "One benchmark set proves channel consistency before richer logging or display is added."], ["One defended multi-channel acquisition replay.", "A benchmark where the same source table still closes across channels and scan timing changes."], ["The display shows many channels but channel-to-channel consistency is not defended.", "Scan speed grows before one benchmark source still agrees on every supported channel."], ["Multi-channel measurement honesty.", "Channel-consistency proof before richer acquisition features."], ["2001-b", "2003-d", "2021-j"]),
  supplement("1995-d", "parameter", "medium", ["baseline", "provincial"], ["One stable passive-measurement route.", "Known R/C/L anchor set.", "Compact parameter table kept repeatable."], ["One defended passive-quantity replay.", "A known-part benchmark that still closes after modest range growth."], ["The route claims too many quantities before one anchor path is stable.", "Range growth outruns calibration."], ["Basic passive-parameter honesty.", "Known-part replay before wider coverage."], ["2019-d", "2023-c", "2005-b"]),
  supplement("1997-b", "parameter", "medium", ["baseline", "provincial"], ["Clear timing or counting path.", "One known-frequency anchor.", "Range growth stays subordinate to the anchor."], ["One repeatable frequency benchmark.", "A defended timing observable that explains the readout."], ["Display speed is mistaken for measurement truth.", "The range grows before one anchor frequency is stable."], ["Timing-derived parameter truth.", "Anchor-frequency discipline."], ["2015-f", "2021-j", "2007-c"]),
  supplement("1999-b", "parameter", "medium", ["baseline", "provincial"], ["Low-frequency acquisition path.", "RMS or effective-value solve.", "One defended benchmark source kept fixed."], ["One repeatable RMS benchmark.", "A route that still points back to explicit low-frequency observables."], ["Displayed value looks smooth but the acquisition route is not defended.", "The route widens metrics before one effective-value benchmark closes."], ["Effective-value truth.", "Low-frequency observability before metric expansion."], ["2019-d", "2021-j", "2011-g"]),
  supplement("1999-c", "parameter", "medium", ["baseline", "provincial"], ["Sweep route.", "Anchor point on the response curve.", "Curve stays tied to calibrated observables."], ["One defended response-curve replay.", "An anchor point that still closes after modest sweep growth."], ["A smooth curve is shown without one trusted anchor point.", "Sweep coverage grows faster than calibration."], ["Response-curve honesty.", "Anchor-first sweep discipline."], ["2013-e", "2019-d", "2023-c"]),
  supplement("2001-b", "parameter", "medium", ["baseline", "provincial"], ["Triggered capture route.", "Defended sampling and time-base path.", "One known waveform benchmark stays visible."], ["One waveform-capture replay.", "Timing and amplitude observables that still explain the display."], ["The trace looks stable while the capture path is not defended.", "More capture modes are added before one waveform benchmark closes."], ["Waveform-capture honesty.", "Trigger and sampling discipline."], ["2007-c", "2021-j", "2011-h"]),
  supplement("2001-e", "networked-measurement", "medium", ["baseline", "provincial"], ["Local acquisition first.", "Transport with identity preserved.", "Remote reconstruction remains tied to local truth."], ["One local-vs-remote replay.", "A benchmark where the transmitted structure still matches the local sample."], ["Transport polish hides whether the local truth survived.", "The remote route is trusted before one local benchmark closes."], ["Transported measurement honesty.", "Local truth before remote convenience."], ["2019-e", "2021-d", "2009-d"]),
  supplement("2009-d", "networked-measurement", "medium", ["baseline", "provincial"], ["One local sensing node fixed first.", "Remote transport preserves node identity and freshness.", "Distributed monitoring remains tied to one defended local benchmark."], ["One local-vs-remote node replay.", "A case where delayed or missing node data is exposed visibly."], ["The remote monitor looks alive but no one proves current node truth.", "Node aggregation grows before one local benchmark closes."], ["Distributed measurement honesty.", "Local node truth before remote monitoring polish."], ["2001-e", "2019-e", "2021-d"]),
  supplement("2003-c", "parameter", "medium", ["baseline", "provincial"], ["Dual-path phase route.", "Known phase anchor or benchmark pair.", "Reported result stays tied to explicit timing or waveform difference."], ["One repeatable phase-difference benchmark.", "A known-pair replay that still closes after modest range growth."], ["A phase number is shown before the timing relation is trustworthy.", "The route adds range before one benchmark pair is stable."], ["Phase-measurement truth.", "Dual-path timing discipline."], ["2019-d", "2013-e", "2023-c"]),
  supplement("2003-d", "parameter", "medium", ["baseline", "provincial"], ["Digital capture path.", "State-transition observability.", "One known logic benchmark still closes after broader timing coverage."], ["One defended digital-waveform replay.", "A timing or state benchmark that still explains the captured result."], ["A logic trace is shown without defending sampling truth.", "More channels or states are added before one anchor route closes."], ["Digital timing honesty.", "Captured-state explainability."], ["2001-b", "2007-c", "2021-j"]),
  supplement("2005-b", "parameter", "medium", ["baseline", "provincial"], ["Trusted excitation and reference path.", "Core op-amp parameter extraction.", "One compact parameter table kept consistent across repeats."], ["One defended parameter set on a known device.", "A replay showing the same parameter route survives range or gain changes."], ["Too many derived parameters are claimed before one direct route is closed.", "The answer depends on a fragile fixture rather than calibrated observables."], ["Observable-to-parameter discipline.", "Compact parameter-table honesty."], ["2011-g", "2019-d", "2023-c", "2021-j"]),
  supplement("2005-c", "distortion", "medium", ["baseline", "provincial"], ["Stable front-end amplitude plan.", "Frequency-domain analysis path.", "One spectrum benchmark kept unchanged while measurement range grows."], ["One defended harmonic or spur display.", "A repeatable spectrum baseline on a known source."], ["Resolution and window choices keep changing during the demo.", "A pretty spectrum is shown without one stable benchmark source."], ["Frequency-domain honesty.", "Benchmark stability before richer spectral claims."], ["2015-e", "2021-a", "2020-e"]),
  supplement("2007-a", "distortion", "medium", ["baseline", "provincial"], ["Audio-band capture discipline.", "RMS or spectrum route.", "One benchmark source used to separate measurement truth from display polish."], ["One repeatable audio-spectrum or distortion case.", "A clear explanation of what metric is judged and why."], ["Audio presentation polish hides whether the metric is stable.", "The route reports multiple metrics without one defended baseline."], ["Audio-band metric truth.", "Clear linkage between source, spectrum, and reported result."], ["2005-c", "2021-a", "2020-e", "2015-e"]),
  supplement("2007-c", "parameter", "medium", ["baseline", "provincial"], ["Triggered waveform capture.", "Time-base and amplitude calibration.", "One waveform benchmark replayed through the same acquisition path."], ["One defended waveform-parameter replay.", "A capture path whose timing and amplitude remain explainable."], ["Sampling or trigger settings drift between demos.", "Waveform display is shown before one parameter route is trustworthy."], ["Capture-path honesty.", "Waveform parameter repeatability."], ["2021-j", "2015-f", "2019-d"]),
  supplement("2007-g", "parameter", "medium", ["baseline", "provincial"], ["Integration-based DC measurement route.", "Reference interval and zero offset stay explicit.", "One known-voltage benchmark proves low-drift readout before broader range claims."], ["One defended DC-voltage replay.", "A benchmark where integration timing and final voltage result still agree after modest range or averaging changes."], ["A stable number is shown without defending the integration window or zero path.", "More ranges are claimed before one anchor DC benchmark still closes with mains rejection intact."], ["Integration-route honesty.", "Zero-drift and mains-rejection proof before feature growth."], ["1999-b", "2011-g", "2019-d"]),
  supplement("2011-e", "model", "medium", ["baseline", "provincial"], ["Known input-output benchmark.", "Transmission or transfer metric extraction.", "One compact replay story kept grounded in measured channel behavior."], ["One defended transfer-performance replay.", "A compact explanation of what structure or metric is stable across repeats."], ["Performance language grows richer than the measured transfer evidence.", "A compact replay claim is made before one anchor benchmark closes."], ["Replay rooted in measured transfer behavior.", "Channel-behavior structure without overclaiming."], ["2013-e", "2025-g", "2019-d"]),
  supplement("2011-g", "parameter", "medium", ["baseline", "provincial"], ["Stable resistance stimulus path.", "Auto-range or threshold logic kept explicit.", "One known resistor table supports the final automatic result."], ["One repeatable resistance benchmark set.", "A simple route showing why the chosen range or decision is correct."], ["Auto-ranging hides whether the measured anchor is still stable.", "The team widens the range before defending one benchmark table."], ["Direct-measurement clarity.", "Auto-range honesty built on known references."], ["2005-b", "2019-d", "2023-c", "2021-j"]),
  supplement("2011-h", "parameter", "medium", ["baseline", "provincial"], ["Waveform capture path.", "Storage and playback stay tied to the same sample identity.", "One replay benchmark proves acquisition truth survived buffering and output."], ["One acquisition-to-playback benchmark replay.", "A stored waveform that still matches the defended capture route."], ["Playback polish hides whether the original capture was trustworthy.", "Storage modes expand before one benchmark waveform can be captured and replayed consistently."], ["Capture-to-replay honesty.", "Stored waveform identity before function growth."], ["2001-b", "2007-c", "2021-j"]),
  supplement("2013-e", "parameter", "high", ["provincial", "national"], ["Sweep-capable excitation.", "Amplitude-phase or gain extraction.", "Frequency-response table kept tied to calibrated observables."], ["One defended frequency-response benchmark.", "A repeatable gain or phase curve on a known object."], ["The sweep runs, but no one proves one anchor point is right.", "The curve looks smooth while calibration drift is ignored."], ["Response-curve truth.", "Sweep consistency and anchor discipline."], ["2019-d", "2023-c", "2025-g"]),
  supplement("2013-f", "receiver", "medium", ["baseline", "provincial"], ["Infrared transmit-receive chain.", "Optical alignment and receive threshold remain explainable.", "One benchmark optical link closes before longer distance or richer coding claims are added."], ["One defended infrared link replay.", "A benchmark where recovered output still points back to the same optical receive chain after modest alignment or distance changes."], ["Recovered output looks correct but the optical receive path is not defended.", "Distance or coding richness grows before one anchor optical link still closes repeatably."], ["Optical-link honesty.", "Receive-chain proof before communication polish."], ["2018-f", "2019-g", "2025-f"]),
  supplement("2013-e", "model", "medium", ["provincial", "national"], ["A trustworthy response curve is built first.", "Only then is a compact structure story attached to the measured transfer behavior.", "The same anchor sweep remains replayable after the compact explanation is added."], ["One benchmark showing what compact replay adds beyond the raw curve.", "A structure claim that still points back to calibrated frequency-response observables."], ["A transfer-shape story is treated as a model before one honest response benchmark exists.", "The compact explanation drifts away from the measured sweep anchor."], ["Response-curve-to-model discipline.", "Compact replay anchored to measured transfer behavior."], ["2025-g", "2019-d", "2023-c", "2011-e"]),
  supplement("2015-e", "distortion", "medium", ["provincial", "national"], ["RF-band spectral path.", "Stable span and resolution plan.", "One defended spur or harmonic benchmark before broader scanning."], ["One repeatable RF spectrum benchmark.", "A stable statement of what floor, spur, or harmonic evidence is being judged."], ["A wider span is shown without preserving one defended benchmark.", "The analyzer display changes more than the signal under test."], ["RF spectrum truth.", "Fixed-benchmark discipline under wider scan claims."], ["2005-c", "2021-a", "2020-e", "2007-a"]),
  supplement("2015-f", "parameter", "medium", ["baseline", "provincial"], ["Period or edge timing route.", "Counter logic kept explicit.", "One known-frequency benchmark stays visible while range expands."], ["One repeatable frequency benchmark.", "A timing route that explains the reported result directly."], ["Display updates look fast, but the timing route is not defended.", "The route claims broad range before one anchor frequency is stable."], ["Timing-derived parameter honesty.", "Range growth grounded in one known-frequency anchor."], ["2021-j", "2007-c", "2019-d"]),
  supplement("2017-m", "localization", "medium", ["baseline", "provincial"], ["One constrained-path motion cue.", "Known-position or speed replay.", "The motion story stays tied to one physical path benchmark."], ["One defended motion-position replay.", "A benchmark where the measured progression still maps back to the physical path."], ["The motion output is shown without one trusted path anchor.", "Scenario growth outruns path calibration."], ["Constrained-path localization truth.", "Physical progression tied to one benchmark path."], ["2017-i", "2023-f", "2025-j"]),
  supplement("2017-o", "parameter", "medium", ["baseline", "provincial"], ["Pulse or timing route for rotational speed.", "Known-speed benchmark.", "Readout stays tied to one defended timing observable."], ["One repeatable speed benchmark.", "A direct pulse or timing replay that explains the RPM result."], ["Displayed speed is shown before one timing route is stable.", "More operating cases are added before one anchor speed closes."], ["Timing-based speed truth.", "Anchor-speed replay before broader coverage."], ["1997-b", "2015-f", "2021-j"]),
  supplement("2013-k", "cable", "medium", ["baseline", "provincial"], ["Explicit line-probing route.", "State-sensitive cue capture.", "One line-state benchmark still explains the final label."], ["One defended line-state replay.", "A benchmark where the measured cue appears before the final diagnosis."], ["The route tells a wiring story without one measured cue anchor.", "Broader line-state claims outrun the benchmark table."], ["Line-state explainability.", "Probe-first diagnosis discipline."], ["2019-c", "2023-b", "2025-d"]),
  supplement("2025-j", "localization", "high", ["provincial", "national"], ["Beacon timing route.", "Anchor geometry or coordinates.", "One known-point benchmark held fixed while coverage grows."], ["One defended beacon-position replay.", "A known-point or anchor benchmark that still closes after broader positioning cases are added."], ["Position is shown before one timing anchor is stable.", "Anchor geometry grows more complex before the original benchmark closes."], ["Beacon-based localization truth.", "Anchor-first positioning discipline."], ["2023-f", "2017-i", "2017-m"]),
  supplement("2017-e", "adaptive-filtering", "high", ["provincial", "national"], ["Reference capture.", "Adaptive core.", "Residual suppression and convergence display."], ["Visible convergence trace.", "Repeatable suppression case."], ["Reference path is not meaningful.", "Step size is tuned only for one case."], ["Convergence and recovery.", "Suppression under changed conditions."], ["2024-b", "2023-h"]),
  supplement("2017-f", "modulation", "medium", ["baseline", "provincial"], ["AM-oriented signal preparation.", "Carrier and envelope analysis.", "Parameter extraction and class confirmation."], ["Stable carrier or envelope parameter output.", "One visible decision path for AM-like behavior."], ["Envelope extraction is noisy or biased.", "The team jumps to family labels without explicit feature evidence."], ["Carrier and envelope credibility.", "Deterministic family cues rather than black-box guessing."], ["2021-e", "2023-d"]),
  supplement("2017-h", "networked-measurement", "medium", ["baseline", "provincial"], ["Local frequency-response acquisition.", "Remote or distributed transport.", "Reconstructed amplitude-frequency output."], ["One stable local-vs-remote measurement path.", "Visible integrity of the remote reconstruction."], ["The network path is hidden behind a polished UI.", "Frequency-response truth is lost during remote transfer."], ["Remote integrity and usable remote measurement output.", "Honest transport of measurement truth."], ["2019-e", "2021-d", "2023-f"]),
  supplement("2017-h", "localization", "medium", ["baseline", "provincial"], ["A local known-point or anchor truth is fixed first.", "Transported updates keep identity and timing visible.", "The same truth source can later support remote positioning-style supervision."], ["One anchor-truth replay that survives transport.", "A delayed or stale remote case that is rejected visibly."], ["Remote freshness is shown, but the local truth source was never frozen.", "The transport layer is trusted before the anchor benchmark closes."], ["Transportable anchor truth.", "Remote supervision of local geometry events."], ["2023-f", "2019-e", "2021-d"]),
  supplement("2017-i", "localization", "high", ["provincial", "national"], ["Optical or geometric ranging cue capture.", "Calibrated baseline and anchor geometry.", "Coordinate solving and known-point validation."], ["Repeatable position output.", "One raw ranging or geometry cue traceable to the final coordinate."], ["Coordinates are shown before the ranging cue is trustworthy.", "Anchor geometry is not calibrated explicitly."], ["Coordinate truth.", "Synchronization or geometry closure."], ["2021-d", "2023-f", "2025-c"]),
  supplement("2017-k", "load-analysis", "medium", ["baseline", "provincial"], ["Synchronous single-phase voltage-current capture.", "Operating-state feature extraction.", "Load or state classification with monitoring output."], ["Stable load-family or state labels.", "One supported feature table tied to operating behavior."], ["Too many appliance states are claimed without stable margins.", "Monitoring UI is shown before the electrical features are trusted."], ["Feature-based load identity and state truth.", "Repeatable synchronous electrical signatures."], ["2021-h"]),
  supplement("2017-k", "cable", "medium", ["baseline", "provincial"], ["Line-side electrical cue capture remains explicit.", "Automatic diagnosis still points back to measured line or load-side evidence.", "One line-state-style replay remains explainable even when monitoring language is added."], ["One cue-driven automatic diagnosis case.", "A benchmark where the measured electrical cue is shown before the final label."], ["The dashboard tells a story, but the line/load cue path is hidden.", "Automatic diagnosis is claimed without a replayable measured state change."], ["Measured electrical cue traceability.", "Automatic diagnosis tied to observable line or load evidence."], ["2023-j", "2025-d", "2021-h"]),
  supplement("2019-c", "cable", "medium", ["baseline", "provincial"], ["Controlled launch.", "Line response capture.", "Fault-state template matching."], ["Open and short discrimination.", "One known cable benchmark."], ["Protection erases return signature.", "Length is claimed before state is stable."], ["Terminal-state truthfulness.", "Explainable line signatures."], ["2023-b", "2025-d"]),
  supplement("2019-d", "parameter", "high", ["provincial", "national"], ["Known excitation.", "Dual-channel sampling.", "Amplitude-phase solver."], ["Accurate passive-parameter output.", "Known-component cross-check."], ["Phase bias is ignored.", "Sweep fitting is attempted too early."], ["Parameter truth.", "Range consistency."], ["2023-c", "2025-g"]),
  supplement("2019-d", "model", "medium", ["provincial", "national"], ["One direct parameter anchor is closed first.", "Measured response can then support a compact replay story over nearby cases.", "The same observables stay traceable whether the answer stops at inversion or extends toward compact identification."], ["One benchmark showing the difference between direct inversion and replay value.", "A compact structure claim that still points back to calibrated observables."], ["A compact model is claimed before one trustworthy parameter route exists.", "The replay story drifts too far from the measured anchor observables."], ["Parameter-to-model escalation discipline.", "Replay value grounded in calibrated observables."], ["2025-g", "2023-c"]),
  supplement("2019-e", "networked-measurement", "medium", ["baseline", "provincial"], ["Local sensing.", "Timestamped framing.", "Remote reconstruction."], ["Local-vs-remote consistency.", "Visible delay or drop indicator."], ["Remote UI hides stale values.", "Local truth is not frozen first."], ["Transport integrity.", "Remote honesty."], ["2021-d"]),
  supplement("2020-e", "distortion", "high", ["provincial", "national"], ["Stable amplifier drive.", "Headroom-aware capture.", "FFT harmonic analysis."], ["Harmonic trend under drive changes.", "Repeatable distortion metric."], ["Front-end clipping contaminates the result.", "FFT settings keep changing."], ["Nonlinear trend explainability.", "THD credibility."], ["2021-a"]),
  supplement("2020-g", "vision-measurement", "high", ["provincial", "national"], ["Camera calibration.", "Feature localization.", "Physical-size or shape solving."], ["Known-size comparison.", "Pose-robust measurement case."], ["Detection is mistaken for measurement.", "Calibration silently changes between runs."], ["Pixel-to-physical conversion.", "Pose robustness."], ["2021-d", "2025-c"]),
  supplement("2021-a", "distortion", "high", ["provincial", "national"], ["Controlled source.", "Period lock.", "FFT and THD computation."], ["THD output.", "Known harmonic injection case."], ["Leakage control is weak.", "Fundamental bin is misidentified."], ["Spectral truth.", "Stable harmonic indexing."], ["2020-e"]),
  supplement("2021-a", "adaptive-filtering", "medium", ["provincial", "national"], ["One harmonic-truth benchmark is frozen first.", "Any adaptive or compensation story must preserve the same FFT route before and after action.", "The same harmonic evidence remains interpretable when control logic is layered on top."], ["One unchanged spectral benchmark.", "A clear explanation of whether the route is measuring distortion or suppressing it."], ["The compensation story quietly changes the spectral baseline.", "The team claims suppression without a stable harmonic anchor."], ["Suppression referenced to honest harmonic evidence.", "Adaptive-over-distortion boundary clarity."], ["2024-b", "2017-e", "2020-e"]),
  supplement("2021-d", "vision-measurement", "medium", ["baseline", "provincial"], ["Imaging or sensing node.", "Remote delivery.", "Visible measurement results."], ["One stable visual measurement route.", "One remote or distributed consistency case."], ["The task is misread as pure networking.", "Camera calibration is not fixed."], ["Measurement credibility.", "If networked, integrity visibility."], ["2020-g", "2019-e", "2023-f", "2025-c"]),
  supplement("2021-d", "networked-measurement", "medium", ["baseline", "provincial"], ["Local calibrated measurement path.", "Timestamped or identity-preserving remote transport.", "Freshness or stale-state logic visible to judges."], ["One local-vs-remote consistency replay.", "One remote integrity alarm or stale-data case."], ["The remote page looks smooth but does not prove data freshness.", "Transport truth is hidden behind UI polish."], ["Remote honesty.", "Measurement identity preservation."], ["2019-e", "2017-h", "2023-f"]),
  supplement("2021-d", "localization", "medium", ["baseline", "provincial"], ["A calibrated visual target or known-point truth is fixed locally first.", "Remote delivery never hides the anchor identity or freshness.", "The same target can later support a localization-style supervision story without losing the local truth route."], ["One calibrated target replay that still closes locally and remotely.", "One stale or delayed case that is rejected before the remote layer can look trustworthy."], ["The remote mirror is trusted before one local calibrated target is frozen.", "Visual transport polish replaces the need to defend one physical anchor target."], ["Anchor-first visual truth.", "Remote supervision without losing local measurement meaning."], ["2023-f", "2025-c", "2017-i"]),
  supplement("2021-e", "modulation", "high", ["provincial", "national"], ["Mixed-signal receive chain.", "Carrier and symbol or envelope cue extraction.", "Family discrimination plus parameter output."], ["A visible family decision path.", "Stable carrier or symbol-related parameter estimates."], ["The team mixes transceiver implementation detail with waveform-family evidence.", "Recovered output is shown without clear family cues."], ["Family labeling truth.", "Parameter output tied to explicit features."], ["2017-f", "2023-d", "2023-h", "2025-f"]),
  supplement("2021-e", "receiver", "high", ["provincial", "national"], ["Acquisition and synchronization path.", "Carrier-aware receive-state observation.", "Lock or relock behavior kept explicit even when recognition follows."], ["One defended lock criterion.", "A replayable receive-state transition benchmark."], ["Family recognition is shown but lock truth is never defined.", "Recovered output is mistaken for sufficient proof of acquisition."], ["Receive-state truth.", "Weak-signal lock honesty."], ["2025-f", "2023-d", "2023-h"]),
  supplement("2021-e", "separation", "medium", ["provincial", "national"], ["Mixed observation capture.", "Intermediate structure kept interpretable.", "Recovered channel remains usable for the later judged stage."], ["At least one named intermediate or recovered component.", "One mixed benchmark where the downstream stage still points back to that component."], ["The receive chain hides whether any component was really separated.", "Intermediate channels become prettier but less interpretable."], ["Recovered-channel meaning inside a mixed chain.", "Explainable stage handoff."], ["2023-h", "2025-f", "2023-d"]),
  supplement("2021-h", "load-analysis", "medium", ["baseline", "provincial"], ["Synchronous voltage-current capture.", "Compact feature table.", "Class decision."], ["Supported class list.", "Confusion-pair explanation."], ["Too many classes are claimed.", "Feature margins are not defended."], ["Feature explainability.", "Class-boundary honesty."], ["2017-k", "2023-j", "2023-h"]),
  supplement("2021-h", "cable", "medium", ["baseline", "provincial"], ["A deterministic electrical-cue path remains visible.", "Automatic diagnosis still points to measured state differences rather than opaque labels.", "One diagnosis replay stays explainable before broader class growth."], ["One measured-cue-first diagnosis case.", "A replayable fault-or-state distinction grounded in explicit electrical evidence."], ["Diagnosis labels are shown, but the measured cue path is hidden.", "Load-side classification language swallows the underlying state evidence."], ["Automatic diagnosis tied to explicit measured cues.", "State evidence before final labels."], ["2023-j", "2025-d", "2017-k"]),
  supplement("2021-j", "parameter", "high", ["provincial", "national"], ["Waveform capture and type decision.", "Frequency, amplitude, or duty-cycle extraction.", "One periodic benchmark table kept stable while recognition coverage expands."], ["One defended waveform-recognition replay.", "A parameter table that still points back to explicit time-domain observables."], ["Waveform labels are shown before one timing or amplitude route is calibrated.", "Coverage expands faster than the defended benchmark set."], ["Waveform-parameter truth.", "Recognition tied to explicit observables rather than display polish."], ["2007-c", "2015-f", "2019-d", "2023-c"]),
  supplement("2023-b", "cable", "high", ["provincial", "national"], ["Launch edge.", "Return signature.", "State and length solving."], ["Open/short/matched classification.", "Known-length validation."], ["Fixture parasitics dominate.", "Velocity factor is guessed."], ["Length and load-state accuracy.", "State explainability."], ["2019-c", "2025-d"]),
  supplement("2023-c", "parameter", "high", ["provincial", "national"], ["Stable excitation.", "Calibrated dual-channel capture.", "RLC inversion."], ["Accurate L or C measurement.", "Per-range consistency."], ["Solver is trusted before calibration.", "Weak signals sit in the wrong range."], ["Precision and repeatability.", "Range calibration."], ["2019-d", "2025-g"]),
  supplement("2023-c", "model", "medium", ["provincial", "national"], ["Sweep-capable excitation plan.", "Calibrated response capture.", "Compact structure story kept subordinate to direct parameter truth."], ["One replayable response-structure argument.", "A benchmark showing what model structure adds beyond one direct RLC readout."], ["The model layer is inflated before one calibrated parameter route is closed.", "Response richness is mistaken for a defendable structure claim."], ["Compact structure awareness.", "Replay value beyond direct inversion."], ["2025-g", "2019-d"]),
  supplement("2023-d", "modulation", "high", ["provincial", "national"], ["Conditioned waveform capture.", "Carrier-family feature extraction.", "Deterministic family and parameter solving."], ["Stable family labels across benchmark cases.", "Carrier, symbol, or depth estimates with a visible path."], ["The family boundary depends too much on one feature.", "Unsupported waveform cases are overclaimed."], ["Transparent modulation-family decision.", "Parameter estimation consistency."], ["2017-f", "2021-e", "2025-f"]),
  supplement("2023-d", "receiver", "medium", ["provincial", "national"], ["Receive conditioning path.", "Carrier or timing tracking visibility.", "Family proof kept readable after the receive layer is added."], ["One benchmark where the layered receive path still agrees with the simpler family-recognition route.", "Weak-input behavior that does not hide the decision evidence."], ["Receiver polish replaces family evidence.", "Tracking success is shown without a truthful state narrative."], ["Weak-input receive credibility.", "Layered-chain observability."], ["2025-f", "2021-e"]),
  supplement("2023-f", "localization", "high", ["provincial", "national"], ["Propagation cue capture.", "Timing or geometry calibration.", "Coordinate or distance solver."], ["Known-point or known-distance proof.", "Final localization output tied to the raw cue."], ["Reflections or anchor geometry are ignored.", "Coordinate solving runs before timing stability is proven."], ["Localization repeatability.", "Anchor consistency and ranging honesty."], ["2017-i", "2021-d", "2025-c"]),
  supplement("2023-f", "networked-measurement", "medium", ["provincial", "national"], ["Local localization truth fixed first.", "Remote or distributed transport keeps anchor identity and freshness visible.", "The same known point can be replayed locally and through the remote layer."], ["One known-point local-vs-remote comparison.", "One stale or delayed remote-case alarm."], ["Coordinates are transmitted but no one proves they are current.", "The remote layer is trusted before the local known-point benchmark closes."], ["Transported coordinate honesty.", "Freshness under remote positioning."], ["2019-e", "2017-h", "2021-d"]),
  supplement("2023-f", "vision-measurement", "medium", ["provincial", "national"], ["One visual or geometric anchor is kept interpretable beside the propagation cue.", "Known-point or target replay still supports the final coordinate story.", "Any overlay or camera-assisted explanation remains subordinate to the physical localization benchmark."], ["One target-or-anchor replay where the visual or geometric evidence and final coordinate agree.", "A benchmark showing the supportive visual layer does not hide anchor drift."], ["The coordinate output is defended, but the target or anchor evidence is no longer visible.", "A visual overlay is added without proving the same known point still closes through the base cue route."], ["Visible anchor geometry.", "Supportive visual evidence that preserves localization truth."], ["2025-c", "2021-d", "2020-g"]),
  supplement("2023-h", "separation", "high", ["provincial", "national"], ["Mixed input capture.", "Separation core.", "Recovered-component validation."], ["Named recovered outputs.", "Known mixed benchmark."], ["Residual suppression is overclaimed as separation.", "Outputs have no physical interpretation."], ["Component meaning.", "Benchmark comparison."], ["2017-e", "2021-e", "2021-h", "2024-b", "2025-f"]),
  supplement("2023-h", "receiver", "medium", ["provincial", "national"], ["Recovered channel is kept observable.", "A downstream receive or lock stage stays tied to that recovered channel.", "State or decision changes when the recovered component is deliberately weakened."], ["One receive-stage replay on the same recovered benchmark.", "One proof that lock or receive quality still depends on real separation quality."], ["The downstream receiver still works after the recovered component has lost meaning.", "Lock proof hides that the separated output is unstable."], ["Downstream dependence on real recovery quality.", "Receive-stage honesty after separation."], ["2025-f", "2021-e", "2023-d"]),
  supplement("2023-h", "adaptive-filtering", "medium", ["provincial", "national"], ["A meaningful reference or comparison path is made explicit.", "Residual reduction is compared against whether the same benchmark still supports a coherent recovery story.", "The route can show when it is suppressing versus when it is truly recovering."], ["One benchmark where convergence or suppression is visible without erasing component meaning.", "A clear boundary between adaptive residual control and named recovery."], ["Residual falls but the team cannot say whether anything meaningful was preserved.", "Adaptive language is borrowed without a real reference or convergence story."], ["Adaptive-over-separation boundary discipline.", "Reference usefulness versus component meaning."], ["2017-e", "2024-b", "2021-e"]),
  supplement("2023-j", "cable", "medium", ["baseline", "provincial"], ["Repeatable probing of the line.", "Fault-state feature capture.", "Explicit line-fault logic."], ["Stable line-fault labels.", "One repeatable automatic detection script."], ["The trigger logic is unstable across repeats.", "The team overclaims fault detail beyond the visible line cues."], ["Automatic state discrimination.", "Explainable fault logic rather than opaque classification."], ["2019-c", "2023-b", "2025-d"]),
  supplement("2024-b", "adaptive-filtering", "high", ["provincial", "national"], ["Voltage-current or disturbance reference capture.", "Adaptive compensation loop.", "Residual harmonic or interference assessment."], ["Before/after compensation proof.", "Convergence or recovery under changed operating point."], ["Compensation looks good only at one point.", "Reference correlation is not defended."], ["Adaptive suppression truth.", "Operating-point robustness."], ["2017-e", "2021-a"]),
  supplement("2024-b", "distortion", "medium", ["provincial", "national"], ["One frozen harmonic-truth route.", "Adaptive compensation is compared against the same harmonic benchmark before and after action.", "Drive or operating-point changes do not redefine the FFT story."], ["One unchanged THD or harmonic anchor.", "A before/after comparison that still points back to the same distortion metric."], ["Compensation is shown but the harmonic baseline silently changed.", "The team overexplains adaptation while underdefending distortion truth."], ["Harmonic benchmark honesty inside compensation tasks.", "Before/after metric continuity."], ["2021-a", "2020-e", "2017-e"]),
  supplement("2024-b", "load-analysis", "medium", ["provincial", "national"], ["One operating-state benchmark is frozen first.", "Compensation effect is replayed without hiding the measured electrical behavior behind a control-only story.", "The same state can still be discussed through explicit electrical cues after compensation is added."], ["One operating-state benchmark before and after compensation.", "A clear statement of whether the result is suppression, diagnosis, or both."], ["Compensation looks effective, but the electrical state evidence becomes less explainable.", "Control polish replaces the measured state story."], ["Operating-state explainability under compensation.", "Measured electrical cues preserved through adaptive action."], ["2017-k", "2021-h", "2023-j"]),
  supplement("2024-b", "separation", "medium", ["provincial", "national"], ["One mixed or structured interference benchmark remains interpretable.", "Suppression is compared against whether a useful component became more nameable, not only smaller residual energy.", "The adaptive loop can be related back to one recovered-structure story."], ["One benchmark where reduced interference also preserves or restores an interpretable component.", "A clear statement of whether the task is suppressing or recovering."], ["Residual gets smaller but no one can say what useful component was preserved.", "Suppression language is stretched into a false separation claim."], ["Suppression-vs-recovery boundary honesty.", "Interpretable component preservation under compensation."], ["2023-h", "2017-e", "2021-e"]),
  supplement("2025-c", "vision-measurement", "high", ["provincial", "national"], ["Calibrated imaging.", "Pose-aware feature extraction.", "Physical measurement output."], ["Known-target comparison.", "Robustness across view changes."], ["Image model is overbuilt.", "Calibration target is not used consistently."], ["Measurement accuracy.", "Geometry explainability."], ["2017-i", "2020-g", "2021-d", "2023-f"]),
  supplement("2025-c", "localization", "medium", ["provincial", "national"], ["Monocular geometry keeps one physical anchor or known-point route explicit.", "Distance, size, or pose claims stay tied to the same calibrated target story.", "If the task grows toward positioning, the simplest anchor benchmark is still replayable before wider scene reasoning."], ["One known-point or calibrated-target replay that still explains the final metric.", "A benchmark showing the same anchor target remains valid after pose or scene variation is added."], ["Monocular geometry is shown, but no physical anchor or known target still closes the answer.", "Scene richness grows faster than the defended anchor benchmark."], ["Anchor-grounded monocular geometry.", "Known-target truth beneath broader positioning language."], ["2017-i", "2023-f", "2021-d"]),
  supplement("2025-d", "cable", "high", ["provincial", "national"], ["Twisted-pair stimulus or launch.", "State-sensitive capture.", "Fault-state decision plus length or pair integrity."], ["Clear pair-state classification.", "Bad-contact or mismatch example."], ["Ethernet storytelling hides the measurement object.", "Pair-specific compensation is missing."], ["Pair-state explainability.", "Robust state discrimination."], ["2019-c", "2023-b"]),
  supplement("2025-d", "load-analysis", "medium", ["baseline", "provincial"], ["Line-state cues remain explicit even when automatic diagnosis is polished.", "One measurable electrical signature still explains the final pair or fault label.", "A compact decision table can be replayed on supported fault cases."], ["One measured electrical cue path before the final diagnosis label.", "A supported pair-state or fault-state table that stays explainable."], ["Ethernet or auto-test language replaces the electrical cue story.", "State labels are shown without a replayable measured signature."], ["Automatic diagnosis grounded in measured line/load cues.", "Compact cue-to-label traceability."], ["2023-j", "2021-h", "2017-k"]),
  supplement("2025-f", "receiver", "high", ["provincial", "national"], ["Synchronization path.", "Lock-state machine.", "Relock replay under disturbance."], ["True lock proof.", "Relock timing log."], ["Recovered waveform is treated as full proof.", "State transitions are not logged."], ["Lock truthfulness.", "Weak-signal behavior."], ["2021-e", "2023-d", "2023-h"]),
  supplement("2025-f", "modulation", "medium", ["provincial", "national"], ["Carrier-aware receive capture.", "Family or cue evidence preserved through the receive chain.", "Parameter or family hints remain measurable after relock logic is added."], ["One benchmark where the same signal still exposes defended family cues after the receive path is layered in.", "A bypass path showing what the receiver contributes without erasing classification evidence."], ["Lock polish hides whether any modulation evidence remains visible.", "The recovered payload is shown without the cue path that supports it."], ["Carrier-level evidence inside the receive chain.", "Mixed receive-recognition transparency."], ["2021-e", "2023-d"]),
  supplement("2025-f", "separation", "medium", ["provincial", "national"], ["Weak mixed input remains observable.", "One recovered path can be named before the final receive decision.", "Relock or receive quality stays coupled to actual recovered-component quality."], ["One mixed weak-input benchmark with a nameable recovered path.", "One replay showing the downstream receive result weakens when the recovered path is degraded."], ["The receiver succeeds even after the recovered path loses meaning.", "The mixed-input story never exposes what was separated from what."], ["Recover-then-receive linkage.", "Weak-input component visibility."], ["2023-h", "2021-e", "2023-d"]),
  supplement("2025-g", "model", "high", ["provincial", "national"], ["Stimulus plan.", "Response capture.", "Compact model fitting and replay."], ["Held-out replay proof.", "Compact-structure defense."], ["Over-parameterized fitting.", "No held-out validation."], ["Replay agreement.", "Physical interpretability."], ["2019-d", "2023-c"]),
  supplement("2025-g", "parameter", "medium", ["provincial", "national"], ["Known excitation remains calibrated.", "Direct parameter anchor is kept while broader replay logic is added.", "One compact model is compared against a simpler electrical-quantity baseline."], ["At least one direct parameter anchor case.", "A clear statement of what model replay adds beyond direct inversion."], ["The model is defended without any trustworthy anchor quantity.", "The team abandons direct calibration once fitting starts to look richer."], ["Parameter anchor beneath model replay.", "Direct-measurement fallback strength."], ["2019-d", "2023-c"]),
  supplement("2019-g", "receiver", "high", ["provincial", "national"], ["Dual receive front end.", "Carrier or envelope recovery kept observable.", "One disturbance-and-relock script that proves both channels remain identifiable."], ["One defended dual-channel receive replay.", "Recovered audio plus lock-state evidence that come from the same receive-chain observables."], ["Recovered voice sounds plausible but lock truth is undefined.", "Two-channel presentation grows richer before one repeatable weak-signal benchmark closes."], ["Receive-state honesty.", "Dual-channel lock proof before audio polish."], ["2025-f", "2021-e", "2023-d"]),
  supplement("2022-07-e", "localization", "high", ["provincial", "national"], ["Repeatable acoustic cue pickup.", "Calibrated microphone geometry or baseline.", "One known-point replay closed before continuous tracking is shown."], ["One defended sound-source localization benchmark.", "A tracking demo that still points back to the same raw acoustic cue and anchor geometry."], ["Tracking looks smooth but the raw cue is unstable.", "Scene complexity grows before one known-point localization loop closes."], ["Acoustic localization truth.", "Known-point closure before tracking polish."], ["2023-f", "2025-j", "2017-i"]),
  supplement("2022-07-f", "modulation", "medium", ["baseline", "provincial"], ["Carrier-preserving capture path.", "Envelope or sideband cue extraction.", "One defended modulation-depth benchmark table."], ["Stable modulation-index output.", "A direct cue path showing how the reported depth or index is computed."], ["A depth number is shown without defending carrier and envelope observables.", "More waveform cases are added before one benchmark modulation setting closes."], ["Parameter-estimation honesty.", "Explicit carrier-and-envelope evidence before broader family language."], ["2023-d", "2017-f", "2021-e"]),
  supplement("2022-10-e", "networked-measurement", "medium", ["baseline", "provincial"], ["Trusted local sensing node.", "Wireless transport with identity preserved.", "Remote monitoring that can visibly reject stale or missing node data."], ["One local-vs-wireless replay.", "A remote monitor whose freshness story is testable under disturbance."], ["Wireless UI looks alive while current node truth is unclear.", "Transport features grow before one local benchmark survives the remote hop honestly."], ["Wireless integrity and freshness.", "Local truth before remote convenience."], ["2021-d", "2019-e", "2009-d"]),
  supplement("2018-a", "distortion", "medium", ["baseline", "provincial"], ["Current-sensing route with defended scaling.", "Frequency and harmonic extraction remain tied to the same current benchmark.", "One known-current case closes before richer spectral claims are added."], ["One repeatable current-spectrum benchmark.", "A current amplitude and frequency result that still points back to explicit sensing and FFT observables."], ["Waveform shape looks believable but the current-scaling route is not defended.", "Harmonic claims grow faster than one known-current benchmark can close."], ["Current-spectrum honesty.", "Harmonic evidence grounded in defended current sensing."], ["2021-a", "2020-e", "2005-c"]),
  supplement("2018-f", "receiver", "medium", ["baseline", "provincial"], ["Short-range receive front end.", "Audio demodulation and gain path.", "One benchmark where recovered speech still points back to a defended lock or channel-selection cue."], ["One defended wireless-audio replay.", "A benchmark proving recovered audio and receive-state evidence belong to the same chain."], ["Audio is loud enough but the receive path is not explainable.", "The amplification story hides whether the RF-side benchmark is still stable."], ["RF-to-audio truth.", "Recovered speech tied to defendable receive evidence."], ["2019-g", "2025-f", "2021-e"]),
  supplement("2018-g", "parameter", "medium", ["baseline", "provincial"], ["Digital capture path with explicit thresholding.", "Trigger and timing route stay explainable on one known sequence.", "Multi-channel timing truth remains stronger than display richness."], ["One defended digital-sequence replay.", "A captured timing result whose state transitions still map back to the supported input sequence."], ["More channels or deeper storage are added before one anchor sequence closes.", "Timing display looks correct but the defended trigger and threshold route is unclear."], ["Digital timing truth.", "Trigger-first capture discipline."], ["2003-d", "2001-b", "2021-j"]),
  supplement("2018-h", "load-analysis", "medium", ["baseline", "provincial"], ["Synchronous voltage-current acquisition.", "Active, apparent, or effective power features remain tied to one defended load benchmark.", "AC/DC and range logic stay subordinate to the same electrical signature route."], ["One repeatable power-measurement benchmark.", "A load-state or power result that still points back to explicit voltage-current observables."], ["Power number is shown before the voltage-current relation is defended.", "More operating cases are claimed before one benchmark load still closes across range changes."], ["Voltage-current feature honesty.", "Power truth before dashboard-style narration."], ["2021-h", "2017-k", "2019-d"]),
  supplement("2024-c", "modulation", "high", ["provincial", "national"], ["Transmit-receive simulation chain.", "Carrier, envelope, or symbol cues kept observable.", "One mixed benchmark where the simulated channel still preserves the family evidence."], ["One defended wireless-signal simulation replay.", "A family or parameter result that still points back to explicit intermediate observables."], ["The simulated chain looks rich but the family cue path is opaque.", "Channel-simulation details grow faster than one benchmark family route can close."], ["Mixed transmission explainability.", "Family evidence preserved through the simulated channel."], ["2021-e", "2023-d", "2019-g"]),
  supplement("2024-g", "adaptive-filtering", "medium", ["baseline", "provincial"], ["Acoustic target and shielding path.", "Interference or masking route.", "One before-and-after benchmark that stays tied to a meaningful suppression observable."], ["One defended recording-shield benchmark.", "A clear statement of whether the route is masking, suppressing, or adaptively cancelling."], ["The target recording gets worse but no one can explain which suppression route caused it.", "Pretty masking effects replace measurable before-and-after evidence."], ["Suppression honesty.", "Before-and-after benchmark continuity."], ["2024-b", "2017-e", "2023-h"]),
  supplement("2025-a", "load-analysis", "high", ["provincial", "national"], ["Converter load-test route.", "Bidirectional power-flow observability remains explicit.", "One benchmark operating mode closes before richer energy-feedback cases are claimed."], ["One defended converter-load replay.", "A benchmark where voltage, current, and energy-flow evidence still explain the final load-test result after mode changes."], ["Power-flow direction is described but not measured honestly.", "Mode transitions and richer test cases grow before one anchor load benchmark still closes."], ["Energy-flow truth.", "Converter load evidence before broader mode narration."], ["2018-h", "2021-h", "2017-k"]),
  supplement("2025-b", "adaptive-filtering", "high", ["provincial", "national"], ["Single-phase compensation chain.", "Reference and residual observability stay tied to one harmonic benchmark.", "One uncompensated-vs-compensated replay closes before broader operating conditions are added."], ["One defended harmonic-suppression replay.", "A benchmark where the same line-side harmonic case still explains the compensation route after parameter retuning."], ["The waveform looks cleaner but the compensation evidence is not tied to one frozen benchmark.", "Operating conditions grow faster than the original uncompensated-vs-compensated case can be replayed honestly."], ["Compensation honesty.", "Before-and-after harmonic proof anchored to one benchmark."], ["2024-b", "2021-a", "2020-e"]),
];

export const historicalWinningPatterns: HistoricalWinningPattern[] = [
  winning("1994-b", ["Matched multi-channel front end.", "Stable scan or simultaneous-sampling route.", "One source table that can be replayed across all defended channels."], ["Channel-consistency truth first, richer acquisition features second.", "The same benchmark source remains stronger than data-logging or display polish."], ["One defended multi-channel replay.", "One replay where the same source still closes after scan rate or channel-count changes."], ["Explain how channel timing and scaling stay consistent.", "Keep one benchmark source table alive across every channel-expansion claim."]),
  winning("2001-e", ["Stable local acquisition node.", "Simple identity-preserving transport path.", "One frozen local sample that can be replayed after the remote side is hidden."], ["Local acquisition first, remote reconstruction second.", "Timestamp or sequence identity remains stronger than transport polish."], ["One local-vs-remote benchmark replay.", "One delayed or stale case where the remote side is visibly downgraded."], ["Explain which local sample is the truth anchor.", "Keep remote convenience subordinate to identity-preserving transport."]),
  winning("1995-d", ["Stable passive-test fixture.", "Known R, C, and L references that stay on one compact bench."], ["One passive-quantity route closed first, then cautious range expansion.", "Known-part replay stays stronger than adding more formulas or derived displays."], ["One defended R/C/L reference table.", "A replay showing the same part still closes after modest range growth."], ["Explain which observable closes resistance, capacitance, or inductance.", "Keep the passive route compact and repeatable before adding breadth."]),
  winning("1997-b", ["Stable timing reference.", "Clean counting or period-measurement front end."], ["One explicit timing route first, then broader frequency coverage.", "The displayed number stays tied to a defended timing observable."], ["One known-frequency anchor replay.", "A counter or period route that still agrees after modest range changes."], ["Explain the timing observable before the readout.", "Keep counting truth stronger than refresh speed."]),
  winning("1999-b", ["Stable low-frequency source and front end.", "One defended RMS benchmark source."], ["Low-frequency effective-value route first, richer meter behavior second.", "The same RMS benchmark remains the truth anchor for every range claim."], ["One defended RMS reference case.", "A replay where the same source still closes after range or display changes."], ["Explain how the effective value is obtained from the capture route.", "Keep the low-frequency benchmark fixed while the meter grows."]),
  winning("1999-c", ["Stable sweep source.", "One transfer object with a trusted anchor point on the curve."], ["Anchor-point truth before broader response-curve narration.", "The same sweep benchmark remains central while the curve becomes richer."], ["One defended anchor point and surrounding short curve.", "A replay showing the same object still closes after sweep growth."], ["Explain why the curve is calibrated rather than only smooth.", "Keep one anchor on the response curve visible through every expansion."]),
  winning("2001-b", ["Stable trigger path.", "One capture memory route that preserves waveform identity."], ["Acquisition truth first, storage depth second.", "Waveform replay stays tied to one defended timing and amplitude path."], ["One benchmark waveform captured and replayed under final settings.", "A trigger-aligned capture whose readout still explains the stored trace."], ["Explain the capture route before extra storage features.", "Keep waveform identity stronger than screen richness."]),
  winning("2005-b", ["Stable analog fixture.", "One defended known-device reference route."], ["Compact parameter extraction from explicit observables.", "Known-device replay stays stronger than formula-heavy storytelling."], ["One known-device replay before adding more parameters.", "A direct observable shown beside the reported parameter."], ["Explain the observable-to-parameter chain.", "Keep the route compact and replayable rather than over-derived."]),
  winning("2005-c", ["Stable benchmark source.", "One fixed spectral route with controlled span growth."], ["Anchor spectrum first, richer span second.", "The same spectral benchmark remains the truth source for every later view."], ["One defended spur or harmonic anchor.", "One replay showing the same benchmark before and after span expansion."], ["Keep one benchmark source frozen.", "Show that analyzer settings did not become the hidden story."]),
  winning("2007-a", ["Stable audio benchmark source.", "One defended audio-band metric route."], ["Audio-band metric first, extra displays second.", "The benchmark story remains stronger than screen polish."], ["One repeated baseline spectrum case.", "A direct metric replay before any richer analysis view."], ["Explain what is being measured, not only shown.", "Keep one stable audio benchmark alive through every extension."]),
  winning("2007-c", ["Calibrated trigger and time-base.", "One known periodic waveform kept available for replay."], ["Capture-path honesty before feature breadth.", "Waveform display remains subordinate to defended timing and amplitude observables."], ["One known waveform replay under the final capture settings.", "A timing or amplitude check tied to the same displayed waveform."], ["Explain the capture route before the pretty trace.", "Keep trigger and time-base discipline tighter than mode expansion."]),
  winning("2007-g", ["Stable integration front end.", "Reference timing path with defended zeroing.", "One known DC source that can be replayed before and after range or averaging changes."], ["Integration truth first, broader meter behavior second.", "The final number remains tied to one explained integration window and zero path."], ["One defended DC-voltage replay.", "One replay where the same source still closes after integration-time or range changes."], ["Explain the integration and de-integration route before the number.", "Keep one known DC source alive through every range claim."]),
  winning("2011-e", ["Repeatable transfer benchmark fixture.", "One defended response-curve anchor."], ["Measured response first, compact replay second.", "Any transfer-behavior claim stays tied to one replayable benchmark curve."], ["One anchor curve replay before broader transfer stories.", "A compact explanation that still points back to the measured benchmark."], ["Keep raw response and compact replay connected.", "Do not let a lighter-weight summary outrun measured transfer truth."]),
  winning("2011-g", ["Known resistor table.", "Range-boundary references that stay stable on the same bench."], ["Direct resistance route plus explicit auto-range reasoning.", "Range logic stays subordinate to one defended reference-resistor table."], ["Boundary-case replay before wider range claims.", "One benchmark where the same resistor and chosen range are shown together."], ["Explain why the range changed.", "Keep the measurement anchor more visible than the automation."]),
  winning("2011-h", ["Stable capture, storage, and playback chain.", "One waveform benchmark that survives all three stages."], ["Capture truth first, storage identity second, playback polish last.", "The same benchmark waveform stays explainable before and after buffering."], ["One acquisition-to-storage-to-playback replay.", "A benchmark waveform whose timing and amplitude still match after replay."], ["Explain which captured sample is the truth source.", "Keep replay convenience subordinate to capture integrity."]),
  winning("2013-e", ["Stable sweep source.", "One transfer object with a defended anchor point."], ["Anchor-point truth before broader response curve claims.", "The measured curve remains explainable rather than only smooth."], ["One anchor point replay before wider sweep narration.", "A short defended curve segment around the anchor."], ["Explain why the curve is calibrated, not just continuous.", "Keep sweep consistency anchored to one trusted point."]),
  winning("2013-f", ["Stable infrared transmit path.", "Optical receive front end with one defended threshold or alignment route.", "One benchmark link that can be replayed after modest distance or alignment changes."], ["Optical link truth first, richer communication behavior second.", "Recovered output is only trusted when it still points back to one stable optical receive chain."], ["One defended infrared link replay.", "One replay where the same optical benchmark still closes after modest alignment or distance changes."], ["Explain the optical receive chain before communication polish.", "Keep one anchor link alive across every distance or coding claim."]),
  winning("2013-k", ["Repeatable line-probing fixture.", "One benchmark set covering supported line states."], ["Measured cue first, final line-state label second.", "The diagnosis stays tied to one explicit probing observable rather than a black-box label."], ["One defended line-state replay.", "A benchmark where the measured cue is shown before the final diagnosis."], ["Explain the cue-to-label chain.", "Keep the line-probing evidence visible through every automatic step."]),
  winning("2015-e", ["Stable RF benchmark source.", "One anchor spectral component that survives span expansion."], ["Fixed-benchmark RF spectrum discipline.", "Wider scan coverage is only added after the anchor benchmark still closes unchanged."], ["One anchor spur or harmonic replay.", "A same-source before/after span expansion comparison."], ["Keep the RF anchor fixed while the analyzer view grows.", "Do not let broader scans replace one defended benchmark."]),
  winning("2015-f", ["Known-frequency references.", "One defended timing observable that remains visible through range growth."], ["Timing-first frequency measurement.", "The final number remains tied to one clear timing route."], ["One anchor frequency replay.", "A known-frequency case before broader range expansion."], ["Explain the timing observable before the readout.", "Keep one anchor reference alive across all range claims."]),
  winning("2017-e", ["Stable reference path.", "DSP-friendly MCU or DSP.", "One benchmark disturbance case that can be replayed before and after any separation- or compensation-style expansion."], ["LMS or NLMS with visible convergence logging.", "Reference-driven adaptation remains the main story even when separation or compensation language starts to overlap."], ["Reference delay alignment.", "Suppression baseline capture.", "One replay where the same benchmark is shown before adaptation, during convergence, and after a condition change."], ["Explain reference usefulness.", "Show recovery after change.", "If the route later overlaps separation or compensation tasks, keep the convergence and reference story independently visible."]),
  winning("2017-f", ["Stable AM-oriented source or benchmark waveform.", "Front end that preserves carrier and envelope fidelity.", "One benchmark path that can be replayed both as a plain family-recognition case and as a receive-assisted case when the task becomes mixed."], ["Envelope and carrier feature extraction with explicit family rules.", "One interpretable cue path kept visible even if a receiver or separation layer is added later."], ["Envelope scale and detector bias check.", "Carrier-frequency reference check.", "One benchmark replay where the explicit family cue is compared before and after the auxiliary stage is inserted."], ["Explain why the waveform is recognized through deterministic cues rather than guesswork.", "If reused inside a larger receive chain, keep the family cue visible as its own proof rather than treating the recovered payload as the answer."]),
  winning("2017-h", ["Reliable local response-measurement node.", "Simple and identity-preserving remote path.", "One fallback local-only view that can still show the measured sweep when the remote side is hidden."], ["Frequency-response acquisition plus explicit remote reconstruction.", "Remote integrity logic kept subordinate to local sweep truth, especially when this route is reused in a mixed visual or localization task."], ["Local response baseline before networking.", "Remote data identity and integrity checks.", "One replay where the remote or distributed layer is removed and the same local sweep still closes cleanly."], ["Show that the remote path preserves the measurement rather than merely forwarding numbers.", "If later mixed with visual or localization layers, keep one local response benchmark visible before discussing transport or overlay logic."]),
  winning("2017-i", ["Stable optical or ranging fixtures.", "Calibrated baseline or anchor geometry.", "One known-point fixture that can be reused even when a camera or remote-support layer is added."], ["Deterministic ranging plus coordinate solving.", "When mixed with vision or remote layers, the raw localization cue remains the primary proof and the auxiliary layer only preserves or exposes it."], ["Known-point geometry check.", "Anchor or baseline calibration.", "One replay where a supportive visual or remote layer is hidden and the same known point still closes locally."], ["Explain the physical ranging cue before discussing coordinates.", "If another family is layered in, name localization truth first and describe the extra layer as support rather than replacement."]),
  winning("2017-k", ["Synchronous single-phase sensing chain.", "Stable load fixtures or appliance benchmarks.", "One benchmark set that can be replayed both as a monitoring view and as a final state-decision view."], ["Compact feature-table monitoring and classification logic.", "Monitoring traces stay subordinate to a final class or state decision so the route can later connect naturally to automatic diagnosis tasks."], ["Per-load baseline capture.", "Current-sense and phase-reference repeatability.", "One replay where the same supported load is shown first as a signature trace and then as a deterministic state decision."], ["Explain both the monitoring observable and the final load or state decision.", "If later extended toward automatic diagnosis, keep the compact feature table visible before the automatic label logic."]),
  winning("2017-m", ["Stable constrained-path fixture.", "One known path-position or speed benchmark.", "One replay path where the same constrained motion can be observed without extra mixed-family layers."], ["Physical path progression first, richer trajectory narration second.", "The measured motion cue remains tied to one defended path benchmark."], ["One repeated path-progress replay.", "One benchmark where measured progression and final position or speed story are shown together."], ["Explain the physical path cue before derived motion summaries.", "Keep constrained-path truth stronger than scenario richness."]),
  winning("2017-o", ["Stable pulse or timing pickup.", "One known-speed reference that stays on the same fixture."], ["Timing-based speed truth first, wider speed scenarios second.", "The RPM output remains tied to one defended pulse or timing route."], ["One defended known-speed replay.", "A benchmark where the same pickup still closes after modest operating changes."], ["Explain the pulse or timing observable before the RPM value.", "Keep one anchor-speed benchmark alive across all demos."]),
  winning("2019-c", ["Protected launch network.", "Comparator or fast capture front end.", "One cable fixture and one known line reference kept unchanged while state templates are established."], ["Template matching or thresholded echo timing.", "State-first logic kept separate from any later length refinement so the cable object remains central."], ["Known open/short templates.", "Cable fixture repeatability.", "One replay where the same line is judged for state before any length estimate is shown."], ["Explain the passive state evidence.", "Keep the line object central.", "If reused in richer cable testers later, keep one benchmark where simple state truth is still shown before more advanced fault interpretation."]),
  winning("2019-d", ["DDS or stable sine source.", "Dual-channel ADC path.", "One known-part table that can later be reused when the task grows from parameter readout toward model replay."], ["Phase extraction plus closed-form inversion.", "One trusted parameter route kept stable before any broader sweep or model-fitting layer is added."], ["Gain and phase calibration by range.", "One replay where the same known part is checked before and after any expanded sweep or model layer is enabled."], ["Explain the solver from observables to parameter.", "If the task later grows toward compact model fitting, keep the parameter truth route independently defensible first."]),
  winning("2019-e", ["Stable local sensing node.", "Simple network transport module."], ["Timestamped framing and remote integrity checking."], ["Local baseline check before networking."], ["Show local-vs-remote matching honestly."]),
  winning("2009-d", ["Stable distributed sensing node.", "Simple remote node transport chain.", "One local environmental benchmark that can still be replayed when the remote side is removed."], ["Distributed sensing truth before remote dashboard polish.", "Remote monitoring remains tied to one known local acquisition benchmark."], ["One local-vs-remote environmental replay.", "One delayed or dropped-node case that is exposed visibly."], ["Explain which local sensing node closes the benchmark first.", "Keep distributed transport honest rather than merely busy-looking."]),
  winning("2020-e", ["Low-distortion drive source.", "Headroom-rich analog front end.", "One reference source path that can be replayed whenever drive level or compensation logic is extended."], ["Period-locked FFT and harmonic indexing.", "Drive-level comparison kept on one fixed FFT route so later compensation or adaptation stories never erase harmonic truth."], ["Front-end linearity check.", "Known harmonic injection.", "One replay where the same clean-source baseline is checked before and after drive-level expansion."], ["Separate DUT distortion from instrument distortion.", "If this route later supports compensation or adaptive stories, keep one plain harmonic-truth benchmark visible on its own."]),
  winning("2020-g", ["Calibrated camera rig.", "Stable lighting and fixture.", "One known target fixture that can be reused when the visual chain later supports localization or remote mirroring."], ["Deterministic feature localization and geometry solve.", "If reused in a mixed task, the visual measurement chain remains locally defensible before any remote or localization layer is discussed."], ["Known-size target.", "Lens and pose calibration.", "One replay where the same calibrated target is checked before and after the visual output is fed into a larger mixed-family chain."], ["Explain pixel-to-physical conversion.", "If the camera output later supports localization or remote display, keep the calibrated image-to-metric proof visible on its own."]),
  winning("2021-a", ["Stable clock and anti-aliasing.", "Dual-channel or single clean capture path.", "One benchmark source set that is never redefined while harmonic validation grows."], ["Fixed FFT settings with THD computation.", "One period-locked spectral route that stays unchanged even when the team later adds richer validation or compensation comparisons."], ["Window and scaling calibration.", "One known clean-sine plus injected-harmonic replay under the final fixed FFT configuration."], ["Explain leakage control and bin selection.", "If later mixed with compensation or adaptation logic, keep the base THD measurement route independent and frozen."]),
  winning("2021-d", ["Camera or remote sensing node.", "Simple transport path when needed.", "Visible freshness or stale-data indicator when remote transport is judged.", "One local calibration or known-target fixture kept available even when the demo emphasizes remote delivery."], ["Measurement-first software with remote mirror.", "Remote integrity kept subordinate to local measurement truth.", "If vision and networking are mixed, the local calibrated visual chain stays visible as the primary route and the remote layer only mirrors it."], ["Known target plus remote consistency check.", "One local-vs-remote identity check before UI polish.", "One disturbed-link case proving that the remote side refuses to look healthy when the local truth is stale or missing."], ["Do not let the network story overshadow measurement truth.", "When reused for visual-localization hybrids, keep the calibrated visual chain visible before discussing transport.", "Say explicitly which result is the local truth source and which result is only its transported copy."]),
  winning("2021-e", ["Stable mixed-signal receive chain.", "Observable carrier and baseband feature path.", "One capture path that keeps recovered components interpretable when mixtures appear.", "A benchmark fixture that can replay the same waveform through plain recognition and through the added receive or separation stage."], ["Deterministic family rules with parameter extraction.", "Feature path remains readable even when a receive or separation story is layered on top.", "If lock or separation is introduced, the software still preserves one stage-by-stage trace from raw capture to final family label."], ["Per-family feature stability check.", "Carrier-reference baseline.", "One benchmark mixed case where recovered structure still supports the family decision.", "One benchmark where the extra receive or separation layer is bypassed and the family label still agrees with the full chain."], ["Explain both the family cue and the parameter cue for the chosen waveform.", "If the task mixes receive, separation, and recognition, say clearly which stage proves lock, which stage proves separation, and which stage proves the family label.", "State which intermediate outputs are only supportive and which one actually closes the final scoring claim."]),
  winning("2021-h", ["Synchronous current-voltage sensing.", "One compact supported load set that can be replayed after the class logic is expanded."], ["Compact feature table and small class rule set.", "If the route later overlaps monitoring or automatic diagnosis, the class boundary remains explicitly benchmarked rather than hidden behind a UI."], ["Feature repeatability on reference loads.", "One replay where a confusion pair and an easy pair are both shown through the same feature table."], ["Defend the class boundary instead of overclaiming classes.", "If later mixed with monitoring or auto-flagging logic, keep one compact class benchmark independently defensible."]),
  winning("2021-j", ["Stable periodic benchmark source set.", "One capture route that keeps waveform observables explicit."], ["Waveform recognition plus parameter extraction from defended time-domain observables.", "Coverage grows only after one benchmark family table is stable."], ["One waveform-family replay with explicit frequency or duty-cycle evidence.", "A benchmark where the same capture route supports both the label and the parameter result."], ["Explain the capture observable before the final label.", "Keep benchmark-family honesty stronger than coverage count."]),
  winning("2023-b", ["Fast line front end.", "Protected coax launch path.", "One known cable set covering state and length anchors on the same fixture."], ["Reflection classification plus length estimator.", "State truth is proved before length refinement, so richer cable behavior never hides the primary line-state evidence."], ["Velocity factor table.", "State-template verification.", "One replay where the same cable is judged for state first and only then used for length validation."], ["Explain why open, short, and matched signatures differ.", "If expanded toward richer cable diagnostics, keep one benchmark where the simple state template is still explicitly shown."]),
  winning("2023-c", ["Stable sine or sweep source.", "Calibrated range switching.", "One known passive set that can also anchor later compact-model or sweep expansions."], ["Amplitude-phase recovery with RLC inversion.", "Range-by-range parameter truth is locked before any broader replay or model narrative is layered on top."], ["Per-range gain and phase table.", "One known component replayed across active ranges before any harder fitting claim is made."], ["Show one known component across multiple ranges.", "If later extended toward model identification, keep the parameter-measurement route independently benchmarked first."]),
  winning("2023-d", ["Wide-enough bandwidth front end.", "Stable capture path for carrier and symbol cues.", "One benchmark path where the same waveform can be observed before and after any supportive receive or separation stage."], ["Carrier-plus-symbol or envelope feature pipeline.", "If mixed with receive or separation logic, the explicit family-decision trace remains readable and is not replaced by prettier intermediate signals."], ["Benchmark family table.", "Per-family decision-threshold check.", "One bypass comparison between the plain cue path and the layered full chain on a supported benchmark."], ["Show why the family label follows from explicit measured cues.", "If an auxiliary stage is added, say exactly which stage still contains the evidence for the final family label."]),
  winning("2023-f", ["Synchronized sensing or calibrated anchors.", "Stable ranging baseline.", "If remotely observed, one transport path that keeps coordinate truth and freshness visible.", "If vision is layered in, one camera or marker setup that can be tied back to the same known-point localization fixture."], ["Ranging estimator plus deterministic coordinate solver.", "When mixed with visual or remote layers, the raw localization cue stays inspectable.", "The supportive remote or visual layer is added only after the base localization loop already closes on a known point."], ["Known-point and anchor-consistency checks.", "One known local-vs-remote or local-vs-visual consistency case when the task is mixed.", "One replay where the supportive layer is removed and the same point still closes through the localization core alone."], ["Explain how raw propagation or geometry evidence becomes the final location.", "If another family is layered in, keep localization truth as the anchor of the story.", "Describe the extra family as integrity or observability support, not as a replacement for localization truth."]),
  winning("2023-h", ["Linear front end.", "Repeatable mixed-signal fixture.", "One benchmark path where the recovered channel can still support downstream recognition or receive logic.", "One clean-reference capture path that lets the team compare the separated output against something physically interpretable."], ["Separation core plus output-quality comparison.", "Recovered outputs stay interpretable enough for the next judged stage.", "If modulation or receiver logic is layered on top, the software still preserves one benchmark where the same recovered output is examined before and after the downstream stage."], ["Known clean references for mixed cases.", "One benchmark where output interpretation is linked to the next scoring step.", "One bypass or ablation case showing that the downstream result becomes weaker when the recovered component loses meaning."], ["Name what each output means.", "If reused with modulation or receiver logic, say clearly what separation preserved for the next stage.", "Keep the recovered-component story independent enough that the judges can understand it even without the downstream classifier or lock result."]),
  winning("2023-j", ["Repeatable line probing front end.", "Robust threshold or state-sensing logic.", "One scripted healthy-vs-fault benchmark set that stays unchanged while automatic logic is expanded."], ["Explicit state machine or rule set for line-fault decisions.", "Automatic decision logic is layered on top of stable line-state cues so it can also borrow from monitoring or classification tasks without going opaque."], ["Known healthy and faulted line baselines.", "Trigger-threshold repeatability check.", "One replay where the same scripted case is shown as raw line-state evidence first and automatic decision second."], ["Explain the fault-state cue path and keep the automatic-detection logic visible.", "If the route later overlaps appliance or monitoring-style classification, keep the measured line cues explicit before the auto label."]),
  winning("2024-b", ["Current or voltage sensing for reference and residual channels.", "Power stage or compensation chain with safe margins.", "One unchanged disturbance benchmark kept available while compensation logic is tuned."], ["Adaptive or controlled compensation loop with residual logging.", "The compensation story remains anchored to one plain before/after harmonic or disturbance truth route."], ["Current-sense gain alignment.", "Operating-point-specific baseline capture.", "One replay where the uncompensated baseline and compensated result are both checked before extending operating range."], ["Explain convergence, compensation effect, and robustness.", "If this route is compared against plain distortion measurement, keep the compensation benchmark tied to a stable baseline rather than a moving target."]),
  winning("2025-c", ["Rigid camera rig.", "Stable target fixture.", "One benchmark target set that can be reused if the visual chain later supports localization or remote overlays."], ["Geometry-first visual measurement route.", "When reused in a mixed task, the calibrated vision chain remains independently replayable before any overlay or coordinate solver is trusted."], ["Known target pose and size table.", "One replay where the same calibrated target is checked with and without the extra mixed-family layer enabled."], ["Explain the valid operating range under pose change.", "If the visual chain later feeds a localization or remote layer, keep the base geometric measurement route independently defensible."]),
  winning("2025-d", ["Pair-sensitive launch and capture front end.", "One fixture that preserves pair mapping across healthy and faulted references."], ["State discrimination and fault interpretation.", "Pair-specific logic is layered only after one simpler state benchmark remains stable on the same fixture."], ["Per-pair or per-medium baseline templates.", "One replay where pair identity is verified before harder mismatch or bad-contact interpretation is shown."], ["Keep the story on line-state diagnosis, not generic communication.", "If reused after simpler cable-state tasks, keep one benchmark where pair mapping and state truth are still explicit."]),
  winning("2025-f", ["Trustworthy synchronization path.", "Visible lock indicator."], ["State machine and relock logging."], ["Weak-signal threshold and timing checks."], ["Define true lock rigorously."]),
  winning("2025-g", ["Repeatable stimulus source.", "Observable response path.", "One known response set that can still be solved by the simpler parameter route when the task touches parameter identification."], ["Compact fit plus replay validation.", "Model growth is kept subordinate to one compact replay story so the route can still be compared against simpler parameter truths."], ["Training-vs-held-out split.", "One replay where a compact model and a simpler parameter-oriented benchmark are both checked before widening structure complexity."], ["Defend the smallest useful model.", "If the task also smells like parameter measurement, say clearly what the model layer adds beyond the already-validated parameter route."]),
  winning("2025-a", ["Matched converter-side voltage-current front end.", "Stable load fixture and one defended energy-feedback mode.", "One benchmark operating mode that survives mode transitions or load changes."], ["Energy-flow observability first, richer load-test coverage second.", "Every mode claim remains tied to one explained voltage-current-to-power route."], ["One defended converter-load replay.", "One replay where the same benchmark still closes after one modest operating-mode change."], ["Explain energy-flow direction from measured observables first.", "Keep one benchmark converter-load case visible through every mode expansion."]),
  winning("2025-b", ["Single-phase sensing and compensation front end.", "One frozen harmonic benchmark before compensation.", "One anchor before-and-after replay that survives parameter retuning."], ["Reference-and-residual truth first, richer compensation behavior second.", "The same harmonic benchmark remains the truth source for every wider compensation claim."], ["One defended uncompensated-vs-compensated replay.", "One replay where the same harmonic benchmark still closes after compensation retuning."], ["Explain which harmonic benchmark is frozen before tuning.", "Keep the before-and-after comparison on one unchanged line-side case."]),
  winning("2025-j", ["Stable beacon timing chain.", "Calibrated anchor geometry.", "One known-point benchmark that survives after any supportive layer is removed."], ["Anchor-first beacon localization.", "Known-point truth remains stronger than richer path coverage or overlays."], ["One defended known-point replay.", "One benchmark where the same point is checked before and after broader positioning cases are added."], ["Explain the timing cue before the final coordinates.", "Keep anchor geometry closure visible through every expansion."]),
  winning("2003-c", ["Matched dual-channel front end.", "One known phase-difference benchmark pair."], ["Timing or waveform-difference truth before wider phase claims.", "The phase answer remains tied to one explicit dual-path observable."], ["One defended phase benchmark pair.", "A replay where the same pair still closes after modest range growth."], ["Explain the dual-path relation that produces phase.", "Keep benchmark phase truth stronger than curve polish."]),
  winning("2003-d", ["Stable digital capture front end.", "One known logic-state benchmark set."], ["Digital timing truth first, more channels or states second.", "The captured state transitions remain explainable from the defended acquisition path."], ["One defended digital timing replay.", "A known logic sequence whose stored transitions still match the input."], ["Explain the sampling path before the pretty trace.", "Keep logic-state truth stronger than channel count."]),
  winning("2019-g", ["Stable RF or IF receive front end.", "Two-channel channelized or sequentially verifiable receive path.", "One benchmark disturbance script that can be replayed on both channels."], ["Observable receive-state machine plus the smallest demodulation chain that recovers intelligible audio.", "Two-channel behavior is narrated from acquisition, lock, recovery, and replay instead of from audio quality alone."], ["One weak-signal lock benchmark.", "One two-channel replay where the same disturbance script still preserves channel identity and relock evidence."], ["Define lock before talking about audio quality.", "Keep one benchmark where judges can see receive-state truth and recovered result together."]),
  winning("2022-07-e", ["Repeatable acoustic pickup layout.", "Calibrated anchor geometry or microphone spacing.", "One known-point fixture that survives after the tracking layer is disabled."], ["Raw cue extraction plus deterministic geometry solver.", "Tracking is only layered on top after the same localization core already closes a known point repeatedly."], ["Known-point replay.", "Anchor-geometry check.", "One benchmark where tracking is hidden and the localization core alone still closes the same point."], ["Explain the acoustic observable before the coordinate output.", "Keep tracking subordinate to localization truth."]),
  winning("2022-07-f", ["Carrier-safe front end.", "Envelope or sideband observation path.", "One benchmark source set covering low, medium, and high defended modulation settings."], ["Deterministic carrier-and-envelope feature pipeline.", "The reported modulation index stays tied to explicit measured cues rather than a black-box estimator."], ["Known modulation-setting replay.", "Detector bias and scaling check.", "One replay where the same benchmark still closes after capture gain is changed."], ["Explain which observable produces the modulation number.", "Keep supported modulation conditions honest and benchmarked."]),
  winning("2022-10-e", ["One stable local sensing node.", "CC3200-class wireless path kept simple enough to expose identity and delay.", "One local benchmark that can still be replayed after the remote layer is hidden."], ["Measurement-first software with freshness-aware wireless mirroring.", "Remote behavior is judged by whether it preserves local truth, not by page polish."], ["One local-vs-wireless benchmark.", "One stale-data or delayed-link replay.", "One local-only replay of the same benchmark after the remote layer is disabled."], ["Explain which value is local truth and which value is its transported copy.", "Keep freshness visible whenever the wireless path is part of the score."]),
  winning("2018-a", ["Stable current sensor or shunt route.", "Front end with enough headroom to preserve waveform and harmonic truth.", "One known-current benchmark source that stays unchanged while spectral views expand."], ["Current amplitude, frequency, and harmonic extraction share one fixed analysis route.", "The same current benchmark remains stronger than any richer display or wider span story."], ["One defended current benchmark replay.", "One replay where the same source still closes after gain or span changes."], ["Explain how current is sensed before discussing harmonics.", "Keep one fixed current benchmark alive through every spectral comparison."]),
  winning("2018-f", ["Stable short-range RF receive front end.", "Audio-band output stage with one defended gain path.", "One speech benchmark that can be replayed after the RF chain is retuned."], ["Small receive chain plus audio recovery and amplification.", "Recovered audio is only trusted when the receive-side benchmark cue remains visible."], ["One wireless-speech replay.", "One replay where the same recovered audio still closes after gain or distance is changed modestly."], ["Explain RF-to-audio chain order clearly.", "Do not let loudness replace receive-chain truth."]),
  winning("2018-g", ["Stable digital capture front end.", "Repeatable trigger and threshold plan.", "One known logic sequence whose transitions can be replayed under final settings."], ["Capture-path honesty first, display richness second.", "Timing or state observability stays tied to one defended sequence rather than channel count."], ["One defended timing-sequence replay.", "One replay where the same sequence still closes after channel or depth changes."], ["Explain the trigger and threshold route before the trace.", "Keep state-transition truth stronger than analyzer polish."]),
  winning("2018-h", ["Matched voltage-current front end.", "Load fixture with one defended power benchmark.", "One operating-point table that survives range or AC/DC mode changes."], ["Synchronous feature capture plus compact power solve.", "Load or power narration remains tied to the same electrical benchmark rather than to a smooth display."], ["One defended load-power replay.", "One replay where the same benchmark still closes after range or mode changes."], ["Explain the voltage-current relation before the final power number or load conclusion.", "Keep one benchmark load fixed while expanding operating cases."]),
  winning("2024-c", ["Observable transmit-receive simulation chain.", "One benchmark signal set whose family cues survive channel simulation.", "One bypass or simplified path for comparison."], ["Family-recognition software with explicit intermediate observables.", "The simulated channel is accepted only if it preserves the measured cue path needed for the final decision."], ["One benchmark family set through both the simple and simulated path.", "One replay where intermediate observables are compared before the final label is shown."], ["Explain what the simulation adds and what evidence it must not erase.", "Keep one benchmark where the final family result is still transparent."]),
  winning("2024-g", ["Repeatable acoustic shielding setup.", "One controlled masking or suppression path.", "One benchmark recorder or pickup kept unchanged while the shielding route is tuned."], ["Before-and-after suppression chain with one meaningful metric or benchmark script.", "If adaptation is involved, the same anchor benchmark still explains why the shielding effect improved."], ["One unshielded-vs-shielded replay.", "One benchmark where the same pickup and target audio are reused after parameter changes."], ["Explain whether the route is masking, cancelling, or blocking.", "Keep the same benchmark recording path fixed while tuning."]),
];

export const historicalExecutionNotes: HistoricalExecutionNote[] = [
  execution("1994-b", ["One benchmark source table across channels.", "One defended scan or simultaneous-sampling route."], ["Channels disagree on the same source.", "Scan timing drifts when more channels are enabled.", "Display richness is hiding channel mismatch."], ["We close one benchmark source across all defended channels first, then add richer acquisition behavior only if the same source still agrees channel-to-channel."]),
  execution("2001-e", ["One local acquisition benchmark.", "One sequence-aware remote replay."], ["Remote value cannot map to the right local sample.", "Transport hides stale or reordered data.", "The local truth source is changed before the remote replay closes."], ["We freeze one local measurement first, then prove the remote side preserves its identity honestly."]),
  execution("1995-d", ["One known passive benchmark per quantity.", "One stable passive-measurement route before any range expansion."], ["Known part closes only on one range.", "R, C, and L routes drift when the fixture changes.", "The table grows faster than calibration."], ["We lock one observable-to-quantity route first, then widen supported parts without losing the benchmark table."]),
  execution("1997-b", ["One known-frequency anchor.", "One defended timing or counting path."], ["Counter input is noisy.", "Gate time or period logic drifts between runs.", "Display refresh is mistaken for measurement truth."], ["We prove frequency from one explicit timing observable, then widen the range only after the anchor remains stable."]),
  execution("1999-b", ["One fixed low-frequency RMS benchmark.", "One defended acquisition route."], ["Effective-value readout looks smooth but disagrees with the benchmark.", "Range switching changes the baseline.", "The source reference was never frozen first."], ["We defend one low-frequency effective-value route before adding broader meter behavior or extra ranges."]),
  execution("1999-c", ["One anchor point on the response curve.", "One short defended sweep segment."], ["The curve is smooth but the anchor point is wrong.", "Sweep settings drift between runs.", "Calibration changes without updating the benchmark."], ["We prove one response anchor first, then extend the sweep only if the same object still closes on that anchor."]),
  execution("2001-b", ["One benchmark waveform and trigger setting.", "One defended storage replay under final settings."], ["The trace looks stable but the trigger condition changed.", "Stored waveform no longer matches the input timing.", "Memory depth hides capture drift."], ["We close one capture-and-store benchmark first, then add more storage behavior without losing waveform identity."]),
  execution("2017-e", ["Reference delay alignment.", "Baseline fixed-filter case."], ["Reference missing.", "Step size too large.", "Residual plot frozen or stale."], ["We prove adaptation with convergence traces, not only with a cleaner waveform."]),
  execution("2017-f", ["Carrier benchmark and envelope path.", "One deterministic family cue route."], ["Envelope detector saturates.", "Carrier estimate drifts.", "Family rule boundaries are not explicit."], ["We classify from measurable carrier and envelope cues before estimating extra parameters."]),
  execution("2017-h", ["One stable local frequency-response measurement.", "Packet or frame identity."], ["Remote result cannot map to the right local sweep point.", "Delay or stale data is hidden."], ["We preserve amplitude-frequency truth across the remote path instead of trusting the display alone."]),
  execution("2017-i", ["Known-point baseline.", "Ranging cue stability."], ["Coordinate output jumps between runs.", "Anchor geometry is inconsistent."], ["We validate the ranging or geometry cue first, then solve the final position."]),
  execution("2017-k", ["One supported appliance or load-state baseline.", "Synchronous feature capture."], ["Load labels drift with operating point.", "Monitoring trends look smooth but class decisions are unstable."], ["We prove the electrical feature path first, then add the monitoring and classification story."]),
  execution("2019-c", ["Open and short templates.", "Launch edge repeatability."], ["Protection clipping.", "State templates drift.", "Fixture swap changes signatures."], ["We identify passive line state before claiming length precision."]),
  execution("2019-d", ["One known resistor or capacitor.", "Cross-channel skew."], ["Phase unwrap errors.", "Wrong range.", "Reference amplitude drift."], ["We solve from measured amplitude and phase, then verify on known parts."]),
  execution("2019-e", ["Local truth on one sensor.", "Sequence or timestamp identity."], ["Remote stale frame.", "Packet reordering.", "Hidden retry delay."], ["The remote page is only trusted when it can be mapped back to local truth."]),
  execution("2009-d", ["One known local sensing-node benchmark.", "One remote monitoring replay on the same node."], ["Node data is present but not current.", "Distributed display hides a missing or delayed node.", "The local benchmark was never frozen before transport."], ["We prove the remote monitoring chain only after one local sensing node already closes a benchmark honestly."]),
  execution("2003-c", ["One known phase benchmark pair.", "One defended dual-path timing relation."], ["Phase reading flips sign unexpectedly.", "Channel skew or threshold mismatch dominates the answer.", "The benchmark pair changed before recalibration."], ["We freeze one dual-channel benchmark first, then widen the supported phase cases only if the same pair still closes."]),
  execution("2003-d", ["One known logic sequence.", "One stable capture threshold and timing path."], ["Logic states are missing or reordered.", "Sampling truth drifts with channel count.", "The same sequence no longer replays after storage changes."], ["We prove digital timing truth on one known sequence before adding more channels, depth, or automatic decoding."]),
  execution("2020-e", ["Headroom and clipping margin.", "One fixed FFT setup."], ["Fundamental bin shift.", "Window change.", "Drive source distortion."], ["We measure the DUT nonlinearity only after validating instrument linearity."]),
  execution("2005-b", ["One known op-amp benchmark device.", "One compact parameter table route."], ["Offset and gain routes disagree across repeats.", "Fixture parasitics dominate the answer.", "Extra derived parameters hide the broken benchmark."], ["We close one direct observable-to-parameter route first, then add more entries only if the same device benchmark still agrees."]),
  execution("2005-c", ["One defended spectrum benchmark.", "One fixed span, window, and scaling route."], ["The same source shifts shape between runs.", "Resolution or span changes hide benchmark drift.", "A wider scan replaced the anchor benchmark."], ["We keep one spectral anchor frozen, then expand the analyzer view only if the benchmark still closes unchanged."]),
  execution("2007-a", ["One defended audio benchmark source.", "One explicit audio-band metric route."], ["Audio metric drifts while the display still looks smooth.", "The source chain clips or saturates quietly.", "Extra views replaced the baseline metric."], ["We lock one audio-band metric path first, then add richer displays only if the same benchmark still agrees."]),
  execution("2007-c", ["One benchmark waveform.", "One trigger and time-base setting that remains fixed through replay."], ["The waveform label is right but amplitude or timing is wrong.", "Trigger moves silently between demos.", "Capture memory masks the real timing drift."], ["We close one defended waveform replay first, then expand capture features without changing the benchmark path."]),
  execution("2007-g", ["One known DC-voltage benchmark.", "One defended integration and zeroing route."], ["The displayed voltage drifts with time or line interference.", "Range or averaging changes break the same benchmark source.", "The number looks stable but the integration path is not explainable."], ["We close one integration-based DC benchmark first, then add range or averaging options only if the same source still agrees."]),
  execution("2011-e", ["One anchor transfer benchmark.", "One compact replay route tied to measured behavior."], ["The compact explanation fits one case but not the replay benchmark.", "Measured response and replay summary diverge.", "The route widened before one anchor curve closed."], ["We measure one transfer benchmark first, then attach a compact replay story only if it still points back to the same response anchor."]),
  execution("2011-g", ["One reference-resistor table.", "One explicit range-decision path."], ["Auto-range flips at the wrong boundary.", "The measured anchor drifts while the chosen range still looks plausible.", "Boundary cases were never frozen first."], ["We defend one resistor table and one range-decision route first, then expand coverage only if those same boundaries still close."]),
  execution("2011-h", ["One benchmark waveform through capture, storage, and playback.", "One explicit sample-identity route."], ["Playback looks correct but the stored waveform is not the captured one.", "Timing shifts appear after buffering.", "Multiple storage modes were added before one replay benchmark closed."], ["We freeze one waveform benchmark first, then prove it survives storage and playback without losing identity."]),
  execution("2013-e", ["One anchor sweep point.", "One short defended response segment."], ["The anchor point closes only once.", "The response curve looks clean but changes after re-sweep.", "Calibration drift is hidden behind curve smoothness."], ["We prove one anchor point first, then expand the sweep only if the same short curve remains repeatable."]),
  execution("2013-f", ["One optical-link benchmark.", "One defended infrared receive chain."], ["Recovered output is plausible but the optical path is unstable.", "Distance or alignment changes break the same benchmark link.", "The team can show communication but cannot explain the receive-side threshold or alignment route."], ["We close one infrared optical-link benchmark first, then widen distance or coding only if the same link still points back to the defended receive chain."]),
  execution("2013-k", ["One supported line-state benchmark.", "One measured cue path that stays visible before the label."], ["Diagnosis labels flip even though the same line state is present.", "The cue-to-label mapping is not explicit.", "Fixture changes silently moved the thresholds."], ["We prove one line-state cue first, then add richer diagnosis only if the same benchmark still explains the label."]),
  execution("2015-e", ["One RF spectral anchor.", "One stable analyzer setting set."], ["A wider span broke the original anchor.", "Resolution or scaling changes dominate the story.", "The judged spur disappears when the view changes."], ["We freeze one RF benchmark first, then widen the scan only if the same anchor component still closes."]),
  execution("2015-f", ["One known-frequency benchmark.", "One explicit timing or counting route."], ["The reported frequency is fast to update but unstable to defend.", "Counter and period modes disagree.", "The benchmark source was never rechecked after range changes."], ["We close one known-frequency route first, then widen range only if the same timing benchmark still agrees."]),
  execution("2017-o", ["One known-speed benchmark.", "One defended pulse or timing pickup."], ["RPM looks smooth but the pulse route is wrong.", "Pickup geometry drifted between runs.", "A broader operating case hid the broken anchor benchmark."], ["We prove one anchor-speed route first, then add broader speed cases without losing the original timing proof."]),
  execution("2020-g", ["Camera calibration.", "Known-size fixture."], ["Lighting drift.", "Feature threshold drift.", "Camera moved silently."], ["We convert calibrated image geometry into physical size or shape."]),
  execution("2021-a", ["Sampling and FFT stability.", "Known harmonic test."], ["Spectral leakage.", "Clipping.", "Wrong harmonic indexing."], ["We keep one FFT route fixed so every THD result is comparable."]),
  execution("2021-d", ["One local metric route.", "One remote consistency check.", "One freshness indicator that turns invalid visibly under transport disturbance."], ["Sensor and network stories are mixed.", "Remote data lacks identity.", "The remote page looks right but no one can tell whether it is current."], ["We keep measurement credibility ahead of display complexity.", "If the task also smells like localization or vision, we freeze one known target and prove local truth before adding the remote mirror."]),
  execution("2021-e", ["Carrier-feature path.", "One benchmark family route.", "One mixed-case replay where the recovered structure is still explainable."], ["Recovered signal looks fine but family cues are weak.", "Parameter estimates drift between runs.", "A separation stage makes the recovered output prettier but breaks the explicit family cue path."], ["We separate family evidence from parameter polishing so the decision path stays explainable.", "If receive or separation logic is layered in, we keep one benchmark route where every stage is still nameable."]),
  execution("2021-h", ["Small feature set.", "Main confusion pair."], ["Too many classes.", "Feature drift with operating point."], ["We defend the feature table and the class boundary together."]),
  execution("2021-j", ["One waveform-family benchmark.", "One explicit time-domain cue tied to the final label."], ["Family labels flip across similar waveforms.", "Parameter estimates look plausible but the cue route is no longer visible.", "Extra waveform classes were added before one benchmark path stabilized."], ["We defend one benchmark waveform family first, then widen coverage only if the same capture cue still explains the label and parameter."]),
  execution("2023-b", ["Open, short, matched templates.", "One known cable."], ["Return threshold unstable.", "Velocity factor guessed.", "Coax fixture changed."], ["We show state truth first, then length refinement."]),
  execution("2023-c", ["Range-zero and gain calibration.", "Known passive baseline."], ["Range leakthrough.", "Weak-signal phase noise.", "Solver overfit."], ["We trust the parameter only after the capture chain is calibrated."]),
  execution("2023-d", ["Carrier estimate baseline.", "Visible family rule path."], ["Labels flip between nearby waveform families.", "Symbol or depth output depends too much on one heuristic."], ["We keep the modulation family decision tied to explicit measured cues."]),
  execution("2023-f", ["One stable ranging route.", "Known anchor geometry.", "If mixed with remote or visual layers, one benchmark where localization truth is still first-class."], ["Position output is smooth but wrong.", "Raw timing cue is not repeatable.", "Remote consistency looks fine but the local coordinate truth was never frozen first."], ["We prove the ranging observable first, then add the solver.", "If a network or camera layer exists, it is added only after one known-point localization loop is already trustworthy."]),
  execution("2023-h", ["One known mixed case.", "Output-channel meaning.", "One downstream interpretation path if the task later asks for recognition or lock proof."], ["Recovered output unlabeled.", "Residual-only win claim.", "A later modulation or receiver stage becomes prettier but less explainable."], ["We prove what was separated from what, not just that something got smaller.", "If another family is layered on top, the separated output still has to stay nameable and benchmarkable."]),
  execution("2023-j", ["Healthy-line baseline.", "One repeatable fault-state script."], ["Fault labels bounce across runs.", "Automatic trigger logic is too sensitive."], ["We keep the automatic detection route tied to stable line-state evidence."]),
  execution("2024-b", ["Reference channel quality.", "Operating-point baseline without adaptation."], ["Reference correlation collapses.", "Compensation only works at one point.", "Residual metric hides instability."], ["We show convergence and compensation effect under operating-point change."]),
  execution("2025-c", ["Camera geometry.", "Known pose benchmark."], ["Pose drift.", "Recalibration hidden.", "Feature set changes between demos."], ["We tie every visual result back to calibrated geometry."]),
  execution("2025-d", ["Pair baseline templates.", "Known termination cases."], ["Pair mapping confusion.", "State labels drift with cable changes."], ["We diagnose line state, then extend to harder pair faults only if stable."]),
  execution("2025-f", ["Lock criterion.", "One repeatable disturbance script."], ["Indicator lag.", "False lock mistaken for lock.", "Relock timing not logged."], ["We define lock first, then show loss and relock honestly."]),
  execution("2025-g", ["Held-out case reservation.", "Stimulus repeatability."], ["Model too large.", "Replay checked only on fit data."], ["We choose the smallest model that still replays held-out behavior."]),
  execution("2025-a", ["One benchmark converter-load mode.", "One synchronous voltage-current route."], ["Energy-flow narration sounds right but measured observables disagree.", "Mode transitions break the same benchmark operating point.", "The team can show a result but not the load-test evidence chain."], ["We close one converter-load benchmark first, then widen mode coverage only if the same voltage-current-to-power route still agrees."]),
  execution("2025-b", ["One frozen harmonic benchmark.", "One defended uncompensated-vs-compensated replay."], ["The waveform looks cleaner but the same benchmark no longer compares honestly.", "Retuning breaks the original before-and-after case.", "The compensation story is richer than the benchmark evidence."], ["We freeze one harmonic benchmark first, then add compensation tuning only if the same before-and-after replay still closes honestly."]),
  execution("2017-m", ["One constrained-path benchmark.", "One repeatable motion cue along that path."], ["Progress output is smooth but path mapping is wrong.", "The constrained path changed without recalibration.", "A richer trajectory story hid the original path benchmark."], ["We tie every motion or position result back to one defended physical path progression first."]),
  execution("2025-j", ["One known-point beacon benchmark.", "Anchor timing consistency."], ["Anchor timing drifts between runs.", "Known-point replay closes only once.", "Broader positioning cases were added before the anchor benchmark stabilized."], ["We close one beacon-known-point loop first, then expand coverage without losing the original anchor truth."]),
  execution("2019-g", ["One weak-signal lock benchmark.", "One explicit dual-channel identity check."], ["Audio sounds acceptable but relock is not measurable.", "One channel steals the story while the other channel is not defended.", "Recovered output stays smooth while receive-state truth has already drifted."], ["We define lock first, then show two-channel recovery and disturbance-and-relock on the same benchmark."]),
  execution("2022-07-e", ["One known-point acoustic benchmark.", "One fixed anchor geometry."], ["Tracking is smooth but the known point does not close.", "Acoustic pickup timing drifts after warm-up.", "The tracking layer hides that the raw cue is unstable."], ["We close one known point first, then add motion tracking without losing the original localization proof."]),
  execution("2022-07-f", ["One known modulation-setting benchmark.", "One explicit carrier and envelope cue path."], ["The displayed modulation number moves with gain changes.", "Envelope extraction is biased or saturating.", "More cases were added before one benchmark depth still closed repeatably."], ["We prove one carrier-and-envelope route first, then expand supported modulation settings only if the same benchmark still agrees."]),
  execution("2022-10-e", ["One frozen local node benchmark.", "One remote replay with identity visible."], ["Wireless page updates but the node truth is stale or mismatched.", "Freshness is implied but not shown.", "The local benchmark was never rechecked after transport changes."], ["We freeze one local measurement first, then prove the wireless side preserves identity and freshness honestly."]),
  execution("2018-a", ["One known-current benchmark.", "One defended current-sensing scaling route."], ["Harmonic peaks move when gain or offset changes.", "Current amplitude agrees only on one setting.", "The spectrum looks cleaner than the sensing chain can explain."], ["We close one current-sensing benchmark first, then add harmonic or richer spectral claims only if the same benchmark still agrees."]),
  execution("2018-f", ["One wireless-speech benchmark.", "One defended RF-to-audio chain order."], ["Audio is loud enough but the receive route is unstable.", "Range or gain changes break the same benchmark replay.", "The team can demo speech but cannot explain the receive-side cue path."], ["We close one RF-to-audio benchmark first, then widen distance or loudness only if the same speech replay still points back to the defended receive chain."]),
  execution("2018-g", ["One known digital-sequence benchmark.", "One defended trigger and threshold route."], ["Captured transitions shift between runs.", "Extra channels work once and then lose timing truth.", "The screen looks right while the underlying capture observable has drifted."], ["We prove one trigger-and-capture route first, then expand channels or depth only if the same benchmark sequence still closes."]),
  execution("2018-h", ["One defended load-power benchmark.", "One synchronous voltage-current route."], ["Power output looks smooth but disagrees with the benchmark.", "Range switching or AC/DC changes break the same load case.", "The team can show a number but cannot explain which electrical feature supports it."], ["We close one voltage-current-to-power route first, then widen load or mode coverage only if the same benchmark still agrees."]),
  execution("2024-c", ["One benchmark family route through the simulated link.", "One visible intermediate cue path."], ["The final label is plausible but the intermediate observables drift or disappear.", "The simulated chain and simple chain disagree on the same benchmark.", "Channel-simulation richness hides whether the family cue is still measurable."], ["We prove one simulated-link benchmark first, then add richer channel behavior only if the same family evidence remains visible."]),
  execution("2024-g", ["One unshielded-vs-shielded benchmark.", "One fixed pickup or recorder path."], ["Shielding seems effective once but the same benchmark is not repeatable.", "Suppression language grows faster than the before-and-after evidence.", "The pickup path changed while tuning, so the comparison lost meaning."], ["We freeze one benchmark recording path first, then compare unshielded and shielded cases without changing the witness of the result."]),
];

export const historicalSolutionBlueprints: HistoricalSolutionBlueprint[] = [
  blueprint("1994-b", ["Multi-channel acquisition route with defended inter-channel consistency."], ["Matched front end, stable scan timing, and one benchmark source table."], ["Per-channel scaling plus timing-consistency checks before richer data handling."], ["Known multi-channel source table."], ["Show one benchmark table first, then the multi-channel readout."]),
  blueprint("2001-e", ["Local acquisition plus identity-preserving transport route."], ["Stable local node and one frozen benchmark sample."], ["Sequence-aware remote reconstruction and freshness marking."], ["Local-vs-remote benchmark sample."], ["Show the local sample first, then the remote mirror."]),
  blueprint("1995-d", ["Passive-quantity measurement route tied to one compact benchmark table."], ["Stable passive fixture and known R/C/L references."], ["One observable-to-quantity solve per passive type before range growth."], ["Known R, C, and L samples."], ["Show the known part first, then the unknown part."]),
  blueprint("1997-b", ["Timing or counting route for frequency."], ["Clean edge shaping and one defended time base."], ["Counter or period solver kept explicit."], ["Known-frequency benchmark."], ["Show the timing observable first, then the frequency value."]),
  blueprint("1999-b", ["Low-frequency RMS route from defended acquisition."], ["Stable low-frequency front end and one fixed benchmark source."], ["Effective-value extraction before richer meter behavior."], ["Known RMS benchmark source."], ["Show the benchmark source first, then the meter result."]),
  blueprint("1999-c", ["Anchor-point sweep and response-curve route."], ["Stable sweep source and one calibrated transfer object."], ["Anchor-point truth plus short defended curve segment."], ["Known response benchmark object."], ["Show one anchor point first, then the broader curve."]),
  blueprint("2001-b", ["Triggered waveform capture and storage route."], ["Stable trigger, sampling path, and capture memory."], ["Waveform acquisition plus stored replay under one defended setting."], ["Known benchmark waveform."], ["Show live capture first, then stored replay."]),
  blueprint("2005-b", ["Known-device parameter extraction route."], ["Stable analog fixture and defended reference comparisons."], ["Compact observable-to-parameter solve."], ["Known op-amp sample."], ["Known device first, then unknown device."]),
  blueprint("2005-c", ["Fixed-benchmark spectral route."], ["Stable benchmark source and controlled span growth."], ["Anchor-component extraction in one frequency-domain path."], ["Known spur or harmonic source."], ["Anchor spectrum first, wider span second."]),
  blueprint("2007-a", ["Audio-band metric route."], ["Stable audio source and defended baseline capture."], ["Single metric path before richer audio views."], ["Known audio benchmark."], ["Metric first, extra views second."]),
  blueprint("2007-c", ["Calibrated waveform-capture route."], ["Trigger integrity and known time-base."], ["Waveform capture plus timing or amplitude readout."], ["Known periodic waveform."], ["Known waveform first, broader capture second."]),
  blueprint("2007-g", ["Integration-based DC-voltage measurement route."], ["Stable integrator front end, zeroing path, and one reference timing base."], ["Integration and de-integration solve before richer averaging or range logic."], ["Known DC-voltage benchmark."], ["Show the integration-route benchmark first, then the final voltage result."]),
  blueprint("2011-e", ["Measured transfer route with compact replay."], ["Repeatable transfer fixture and one anchor curve."], ["Response capture before any compact summary."], ["Known response-curve benchmark."], ["Measured curve first, replay summary second."]),
  blueprint("2011-g", ["Reference-resistor auto-range route."], ["Known resistor table and stable boundary cases."], ["Direct resistance solve with explicit range reasoning."], ["Boundary resistor set."], ["Reference resistor first, wider range second."]),
  blueprint("2013-e", ["Anchor-point response-curve route."], ["Stable sweep source and calibrated transfer object."], ["Anchor-point truth plus short defended curve segment."], ["Known transfer benchmark."], ["Anchor point first, wider sweep second."]),
  blueprint("2013-f", ["Infrared optical transmit-receive route."], ["Stable optical alignment, receive front end, and one benchmark link."], ["Minimal optical recovery plus receive-threshold and replay checks."], ["Known infrared-link benchmark."], ["Show the optical-link cue first, then the recovered output."]),
  blueprint("2015-e", ["RF anchor-spectrum route."], ["Stable RF benchmark source."], ["Anchor spectral component before wider-scan narration."], ["Known RF benchmark case."], ["Anchor benchmark first, span expansion second."]),
  blueprint("2015-f", ["Timing-first frequency route."], ["Known-frequency references and stable timing observable."], ["Counter or period-based readout."], ["Known-frequency set."], ["Anchor frequency first, wider range second."]),
  blueprint("2017-e", ["Reference-informed adaptive cancellation."], ["Delay-aligned reference and residual channels."], ["LMS or NLMS with convergence trace."], ["Reference correlation check."], ["Show before/after suppression, then recovery after change."]),
  blueprint("2017-f", ["AM-oriented feature route."], ["Carrier-preserving front end and envelope path."], ["Carrier estimate plus envelope-depth or time-domain feature extraction."], ["Known AM-like benchmark and detector bias check."], ["Show the family cue first, then output the estimated parameter."]),
  blueprint("2017-h", ["Local response measurement plus identity-preserving remote path."], ["Stable local sweep source and local capture integrity."], ["Compact remote framing and remote reconstruction of frequency-response points."], ["Local-vs-remote benchmark sweep."], ["Show the local response, then prove the remote side preserves it."]),
  blueprint("2017-i", ["Geometry-first localization route."], ["Stable anchors or calibrated baseline."], ["Ranging cue extraction and coordinate solving."], ["Known-point validation."], ["Show raw cue, then final location."]),
  blueprint("2017-k", ["Single-phase load-signature route."], ["Synchronous voltage-current sensing and stable monitoring baseline."], ["Compact feature extraction and deterministic state or load decision."], ["Known load benchmark table."], ["Show monitored electrical features first, then final identification."]),
  blueprint("2017-m", ["Constrained-path motion localization route."], ["Stable pipe or path fixture and one defended path benchmark."], ["Motion-cue extraction plus path-based position or speed solving."], ["Known path-position replay."], ["Show the path cue first, then motion result."]),
  blueprint("2019-c", ["Reflection or thresholded return-state diagnosis."], ["Protected line launch and return observation."], ["Simple state templates before length refinement."], ["Known open/short signatures."], ["Start with state discrimination, then add length."]),
  blueprint("2019-d", ["Known excitation with closed-form parameter inversion."], ["Dual-channel gain and phase integrity."], ["Amplitude ratio and phase shift solver."], ["Known resistor and capacitor checks."], ["Show known part, then unknown part."]),
  blueprint("2019-e", ["Local truth preserved through timestamped transport."], ["Stable local node before remote path."], ["Sequence-aware remote reconstruction."], ["Local-vs-remote table."], ["Show same event on both ends."]),
  blueprint("2020-e", ["Drive-level sweep plus harmonic truth measurement."], ["Low-distortion source and headroom."], ["Period-locked FFT and THD."], ["Known harmonic injection."], ["Show trend across drive levels."]),
  blueprint("2009-d", ["Distributed sensing plus remote monitoring route."], ["Stable local sensor node and one defended environmental benchmark."], ["Identity-preserving node transport and freshness-aware remote display."], ["Local-vs-remote node benchmark."], ["Show local node truth first, then remote monitoring consistency."]),
  blueprint("2003-c", ["Dual-channel phase-measurement route."], ["Matched front end and one known phase benchmark pair."], ["Timing or waveform-difference extraction into phase output."], ["Known phase pair."], ["Show the benchmark pair first, then the measured phase."]),
  blueprint("2003-d", ["Digital timing capture route."], ["Stable logic thresholds and one known sequence source."], ["State-transition capture and replay before richer decoding."], ["Known logic benchmark sequence."], ["Show the sequence first, then the captured trace."]),
  blueprint("2020-g", ["Calibrated camera geometry for metric reconstruction."], ["Stable fixture and lighting."], ["Feature localization and geometry solve."], ["Known-size objects."], ["Show overlay, then physical output."]),
  blueprint("2021-a", ["One stable FFT route for THD."], ["Anti-aliasing and clipping margin."], ["Windowed FFT and harmonic indexing."], ["Clean source and injected harmonic check."], ["Show spectrum and THD together."]),
  blueprint("2021-d", ["Measurement-first remote delivery chain."], ["Reliable local sensor or camera node.", "One visible local truth anchor before remote transport starts."], ["Minimal transport plus integrity markers.", "Freshness or identity indicator carried with the remote result."], ["Known local sample mirrored remotely.", "One disturbed-link case."], ["Show local result, then remote consistency.", "If reused for mixed visual-positioning tasks, show the calibrated local geometry before the remote mirror."]),
  blueprint("2021-e", ["Mixed-transceiver waveform-identification route."], ["Observable carrier and baseband feature paths.", "Receive or separation stages that do not hide the family cue source."], ["Deterministic family decision with parameter extraction.", "Optional recovered-component interpretation kept secondary to the family decision."], ["Per-family benchmark set.", "One mixed benchmark with an explainable intermediate stage."], ["Show the family cue path before the final recovered result.", "If mixed with receive or separation, narrate the stage order explicitly: acquire, separate if needed, then label and estimate."]),
  blueprint("2021-h", ["Feature-table classification route."], ["Synchronous sensing and stable loads."], ["Compact rule set or light classifier."], ["Reference appliances and confusion pair."], ["Show features, then final label."]),
  blueprint("2021-j", ["Periodic waveform recognition route."], ["Stable capture path and explicit time-domain observability."], ["Waveform-type decision plus frequency or duty-cycle extraction."], ["Known waveform-family benchmark set."], ["Waveform observable first, final label and parameter second."]),
  blueprint("2023-b", ["Reflection route plus length solve."], ["Coax launch/capture integrity."], ["Template state decision plus calibrated propagation solve."], ["Known lengths and terminations."], ["State first, length second."]),
  blueprint("2023-c", ["RLC inversion from calibrated amplitude and phase."], ["Range switching and reference integrity."], ["Phase extraction and parameter solve."], ["Known components per range."], ["Known sample first, unknown sample second."]),
  blueprint("2023-d", ["Carrier-family recognition route."], ["Bandwidth-safe capture and normalization."], ["Carrier, symbol, and envelope feature pipeline."], ["Family benchmark and threshold table."], ["Show benchmark family, then unknown-family decision."]),
  blueprint("2023-f", ["Propagation-based localization route."], ["Timing pickoff and anchor geometry.", "Optional remote or visual support layer that does not hide the localization cue."], ["Ranging estimator and deterministic coordinate solver.", "Consistency bridge to remote or visual outputs when the task is mixed."], ["Known-point and known-distance checks.", "One mixed-family consistency case."], ["Known point first, moving point second.", "If mixed with remote or visual layers, show the localization cue before the extra layer."]),
  blueprint("2023-h", ["Mixed-case separation with output interpretation."], ["Linear capture path.", "Stage visibility kept explicit if modulation or receive logic follows."], ["Component recovery and residual assessment.", "Optional family-recognition or receive proof only after recovered outputs are interpretable."], ["Known mixed and clean references.", "One benchmark linking recovered output to the next judged stage."], ["Name each recovered output in the demo.", "Then show what that output enables downstream."]),
  blueprint("2023-j", ["Automatic line-state diagnosis route."], ["Repeatable probing and fault-sensitive capture."], ["State machine or explicit decision tree for line-fault labels."], ["Healthy-vs-fault baseline set."], ["Show stable automatic detection on the same scripted cases."]),
  blueprint("2024-b", ["Reference-driven compensation route for active filtering."], ["Current or residual sensing fidelity."], ["Adaptive or controlled compensation with convergence display."], ["Baseline harmonic or interference measurement before compensation."], ["Show baseline, convergence, and changed-condition recovery."]),
  blueprint("2025-c", ["Geometry-first visual measurement route."], ["Rigid imaging fixture."], ["Feature extraction and calibrated solving."], ["Known target table."], ["Known target, then changed pose."]),
  blueprint("2025-d", ["Twisted-pair state diagnosis route."], ["Pair-selective front end and templates."], ["State discrimination with simple pair reasoning."], ["Known pair terminations."], ["Healthy pair first, fault pair second."]),
  blueprint("2025-f", ["Synchronization plus explicit lock-state route."], ["Clocking and observation path."], ["Lock-state machine and timing log."], ["Weak-signal and disturbance baselines."], ["Lock, unlock, relock in sequence."]),
  blueprint("2025-g", ["Compact model fitting and replay validation."], ["Repeatable stimulus and response chain."], ["Structured fit with held-out replay."], ["Train/held-out split and residual table."], ["Fit result, then held-out replay."]),
  blueprint("2025-j", ["Beacon timing localization route."], ["Stable beacon timing and calibrated anchors."], ["Time-of-flight pickoff plus deterministic coordinate solve."], ["Known-point beacon benchmark."], ["Show known point first, then broader positioning case."]),
  blueprint("2011-h", ["Waveform acquisition, storage, and playback route."], ["Stable capture path and explicit sample identity through memory."], ["Capture first, storage second, playback third on one unchanged benchmark waveform."], ["Known waveform benchmark."], ["Show capture, then stored trace, then playback of the same waveform."]),
  blueprint("2013-k", ["Measured line-probing route into explicit line-state decision."], ["Repeatable probing fixture and one supported line-state table."], ["Cue extraction before final diagnosis label."], ["Known line-state benchmark set."], ["Show the measured cue first, then the diagnosis."]),
  blueprint("2017-o", ["Pulse- or timing-based speed route."], ["Stable pickup and one known-speed reference."], ["Pulse timing into RPM solve."], ["Known-speed benchmark."], ["Show the pickup cue first, then the speed result."]),
  blueprint("2019-g", ["Dual-channel receiver route with explicit lock proof."], ["Stable receive front end, channel identity, and disturbance script."], ["Minimal demodulation plus lock-state logging and recovered-audio replay."], ["Weak-signal two-channel benchmark."], ["Show lock and channel identity first, then recovered audio."]),
  blueprint("2022-07-e", ["Acoustic localization route from repeatable cue to tracked coordinate."], ["Stable microphone or acoustic geometry and one known-point fixture."], ["Cue pickoff plus deterministic geometry solving before any tracking smoother."], ["Known-point and short-motion benchmark."], ["Show the known point first, then the tracked motion."]),
  blueprint("2022-07-f", ["Carrier-and-envelope modulation-depth route."], ["Carrier-safe capture and one defended detector chain."], ["Explicit feature extraction into modulation-index solve."], ["Known modulation-depth benchmark set."], ["Show the measured cue first, then the modulation number."]),
  blueprint("2022-10-e", ["Local measurement plus freshness-aware wireless mirror."], ["Stable local node and one identity-preserving wireless path."], ["Sequence-aware remote reconstruction and stale-data handling."], ["Local-vs-wireless benchmark sample."], ["Show the local reading first, then the remote mirror."]),
  blueprint("2018-a", ["Current-sensing route into frequency-domain current characterization."], ["Stable current sensor, scaling path, and one benchmark source."], ["Amplitude, frequency, and harmonic extraction on one fixed analysis route."], ["Known current and harmonic benchmark."], ["Show the sensed current cue first, then the harmonic result."]),
  blueprint("2018-f", ["Short-range wireless-audio receive route."], ["Stable receive front end, audio recovery path, and one speech benchmark."], ["Minimal demodulation plus audio amplification with benchmark replay."], ["Known wireless-speech benchmark."], ["Show receive-side cue first, then recovered speech."]),
  blueprint("2018-g", ["Digital timing-capture route from thresholded input to explicit state sequence."], ["Stable trigger, threshold, and sample timing path."], ["State-transition capture plus timing display on supported channels."], ["Known digital-sequence benchmark."], ["Show the captured transition cue first, then the timing result."]),
  blueprint("2018-h", ["Synchronous voltage-current route into defended power or load-state output."], ["Matched sensing front end and one benchmark load."], ["Electrical feature extraction plus compact power solve or load judgment."], ["Known AC/DC load benchmark."], ["Show voltage-current observables first, then the power result."]),
  blueprint("2024-c", ["Wireless-signal simulation route with explicit family evidence."], ["Observable transmit-receive chain and one benchmark signal set."], ["Intermediate cue extraction plus final family or parameter decision."], ["Known benchmark family set through the simulated link."], ["Show the intermediate cue first, then the final label or parameter."]),
  blueprint("2024-g", ["Recording-shielding route from benchmark pickup to suppression result."], ["Fixed recorder or pickup path and one repeatable acoustic target."], ["Controlled masking or suppression chain with before-and-after comparison."], ["Known unshielded-vs-shielded benchmark."], ["Show the benchmark recording first, then the shielding result."]),
  blueprint("2025-a", ["Converter load-test route from synchronous electrical observables to energy-flow conclusion."], ["Matched sensing front end and one benchmark operating mode."], ["Voltage-current feature extraction plus compact load-test solve."], ["Known converter-load benchmark."], ["Show the voltage-current benchmark first, then the load-test result."]),
  blueprint("2025-b", ["Single-phase compensation route from harmonic benchmark to before-and-after suppression result."], ["Stable sensing front end and one frozen harmonic case."], ["Reference and residual extraction plus uncompensated-vs-compensated comparison."], ["Known harmonic benchmark."], ["Show the uncompensated benchmark first, then the compensated replay."]),
];

export const historicalTieredBuildPlans: HistoricalTieredBuildPlan[] = [
  tierPlan("2001-e", [
    {
      tier: "baseline",
      hardwareStack: tl("One stable local acquisition node.", "One local sample or event that can be frozen with explicit identity."),
      softwareScope: tl("Close one local acquisition route first.", "Mirror only one benchmark sample remotely after the local truth is stable."),
      metricPriority: tl("The remote side maps back to the right local sample.", "Identity is already visible in the simplest demo."),
      avoidOverbuild: tl("Do not add richer transport behavior before one local-to-remote mapping is stable.", "Do not let remote polish hide whether the local sample was frozen first."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Add one timestamped or sequence-aware transport path.", "Add one visible stale-data or delay indicator."),
      softwareScope: tl("Keep one local-vs-remote replay under mild disturbance.", "Show one delayed or reordered case without losing sample identity."),
      metricPriority: tl("Freshness and identity remain visible under stress.", "Remote reconstruction is still subordinate to local truth."),
      avoidOverbuild: tl("Avoid multiple transport stacks before one integrity path is honest.", "Do not rely on a remote page that cannot reveal stale data."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add broader distributed behavior when the same local benchmark remains replayable.", "Keep one local-only fallback path available."),
      softwareScope: tl("Harden loss and delay handling while preserving one benchmark replay.", "If reused in a mixed task, hide the remote layer and replay the same local truth sample."),
      metricPriority: tl("Remote integrity stays secondary to local truth.", "The same benchmark still closes after the supportive layer is removed."),
      avoidOverbuild: tl("Do not let the remote layer become the only visible proof.", "Do not claim distributed robustness if the local anchor benchmark cannot be replayed."),
    },
  ]),
  tierPlan("1994-b", compactTiers(["Close one multi-channel source table.", "Keep one defended scan or simultaneous-sampling route only."], ["Expand supported channels while replaying the same source table.", "Add one guarded scan-rate change only after channel consistency still closes."], ["Broaden acquisition behavior only if the original cross-channel benchmark still closes unchanged.", "Keep one fallback same-source multi-channel replay alive for defense."])),
  tierPlan("1995-d", compactTiers(["Close one known R/C/L benchmark route.", "Freeze one quantity path before adding more passives."], ["Expand the known-part table and keep the same route repeatable.", "Add only one guarded range change after the anchor table holds."], ["Broaden the passive set only if the original benchmarks still close unchanged.", "Keep one fallback single-route benchmark alive for defense."])),
  tierPlan("1997-b", compactTiers(["Close one known-frequency timing route.", "Keep one defended gate or period path only."], ["Expand frequency coverage while replaying the same anchor.", "Add one cross-check between counting and period logic only after the anchor holds."], ["Broaden coverage only if the original timing anchor remains explicit.", "Keep one fallback benchmark that still proves the readout directly."])),
  tierPlan("1999-b", compactTiers(["Close one low-frequency RMS benchmark.", "Keep one effective-value path fixed before expanding meter behavior."], ["Add one more supported range while preserving the same benchmark source.", "Keep one defended low-frequency anchor for every replay."], ["Broaden the meter only if the original low-frequency anchor still closes unchanged.", "Keep one fallback RMS benchmark alive for defense."])),
  tierPlan("1999-c", compactTiers(["Close one response-curve anchor point.", "Keep one short defended sweep segment only."], ["Expand the curve around the anchor without changing the source-object pair.", "Add modest sweep breadth only after the anchor still closes on replay."], ["Broaden the sweep only if the original anchor segment stays repeatable.", "Keep one fallback anchor-point benchmark visible through every explanation."])),
  tierPlan("2001-b", compactTiers(["Close one capture-and-store benchmark waveform.", "Keep one trigger path and one memory route only."], ["Expand storage depth or replay features while preserving the same waveform benchmark.", "Add one secondary waveform only after the original replay stays identical."], ["Broaden capture behavior only if the first waveform still closes through capture, storage, and replay.", "Keep one fallback benchmark waveform alive for defense."])),
  tierPlan("2005-b", compactTiers(["One known-device parameter route."], ["Known-device replay plus compact parameter table."], ["Multiple defended parameters only after one anchor route stays stable."])),
  tierPlan("2005-c", compactTiers(["One anchor spectrum benchmark."], ["Same benchmark under wider span."], ["Only add richer views when the anchor component still closes unchanged."])),
  tierPlan("2007-a", compactTiers(["One defended audio metric route."], ["One benchmark audio replay plus one extra analysis view."], ["Only broaden audio analysis when the original metric path still closes unchanged."])),
  tierPlan("2007-g", compactTiers(["Close one known DC-voltage benchmark.", "Keep one defended integration and zeroing path only."], ["Add one more defended range or averaging mode while replaying the same DC source.", "Keep one anchor source that still proves mains rejection and drift control."], ["Broaden meter behavior only if the original integration benchmark still closes unchanged.", "Keep one fallback DC-source replay alive for defense."])),
  tierPlan("2007-c", compactTiers(["One known waveform and one trigger route."], ["Known waveform replay plus broader timing coverage."], ["Only add more capture modes when the original waveform benchmark still closes unchanged."])),
  tierPlan("2011-e", compactTiers(["One measured transfer benchmark."], ["Anchor curve plus compact replay story."], ["Only broaden replay or transfer claims when the original measured curve still closes unchanged."])),
  tierPlan("2011-g", compactTiers(["One known resistor table."], ["Boundary-case auto-range replay."], ["Only widen range coverage when the original reference-resistor table still closes unchanged."])),
  tierPlan("2011-h", compactTiers(["Close one capture-storage-playback waveform benchmark.", "Keep one explicit sample-identity route only."], ["Add one more storage or playback mode while preserving the same benchmark waveform.", "Show the same waveform remains consistent through all stages."], ["Broaden function count only if the original waveform still closes unchanged across capture, storage, and playback.", "Keep one fallback waveform replay alive for defense."])),
  tierPlan("2013-e", compactTiers(["One anchor point and short defended curve."], ["Anchor point plus modest sweep growth."], ["Only widen sweep behavior when the original anchor point still closes unchanged."])),
  tierPlan("2013-f", compactTiers(["Close one infrared optical-link benchmark.", "Keep one defended transmit-receive alignment and threshold path only."], ["Expand distance or alignment tolerance while replaying the same optical benchmark.", "Add one guarded coding or output mode only after the anchor link still closes."], ["Broaden communication behavior only if the original optical-link benchmark still closes unchanged.", "Keep one fallback infrared-link replay alive for defense."])),
  tierPlan("2013-k", compactTiers(["Close one supported line-state cue path.", "Keep one explicit cue-to-label table only."], ["Add one more supported state while replaying the original cue benchmark.", "Keep one defended probing fixture through every diagnosis case."], ["Broaden diagnosis only if the original state benchmark still closes unchanged.", "Keep one fallback line-state cue visible for defense."])),
  tierPlan("2015-e", compactTiers(["One RF anchor benchmark."], ["Anchor benchmark plus modest span expansion."], ["Only broaden scan coverage when the original RF anchor still closes unchanged."])),
  tierPlan("2015-f", compactTiers(["One known-frequency anchor."], ["Anchor replay plus wider timing range."], ["Only widen range when the original timing anchor still closes unchanged."])),
  tierPlan("2017-e", [
    {
      tier: "baseline",
      hardwareStack: tl("One meaningful reference path.", "One disturbance benchmark that can be replayed unchanged."),
      softwareScope: tl("Fixed residual monitor.", "Show one before/after suppression path before discussing component recovery or compensation generalization."),
      metricPriority: tl("Residual reduction remains tied to a defended reference.", "The route already proves adaptation rather than generic filtering."),
      avoidOverbuild: tl("Do not tell a separation story before convergence is visible.", "Do not add multi-mode compensation before one reference-driven benchmark closes."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Keep the same reference path while adding visible adaptation telemetry.", "Retain one unchanged disturbance case for repeated replays."),
      softwareScope: tl("Adaptive update and convergence trace.", "If the route overlaps separation or compensation tasks, keep one benchmark where reference usefulness is still the primary proof."),
      metricPriority: tl("Convergence remains measurable and causal.", "The same benchmark still explains why suppression happened."),
      avoidOverbuild: tl("Avoid multiple adaptation laws before one benchmark convergence curve is stable.", "Do not let a cleaner-looking output replace the adaptation narrative."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add operating-point recovery after the anchor benchmark still closes unchanged.", "Keep one fallback replay of the simplest reference-driven case."),
      softwareScope: tl("Operating-point recovery and tighter stability tuning.", "If later compared with separation or compensation routes, replay one anchor adaptive benchmark before trusting the broader story."),
      metricPriority: tl("Recovery remains tied to the same defended reference path.", "The adaptation story stays stronger than visual cleanliness alone."),
      avoidOverbuild: tl("Do not widen disturbance regimes faster than reference quality can be defended.", "Do not let cross-family overlap erase why this is adaptive filtering first."),
    },
  ]),
  tierPlan("2017-f", [
    {
      tier: "baseline",
      hardwareStack: tl("One stable AM-oriented benchmark source.", "One front end that keeps carrier and envelope cues trustworthy."),
      softwareScope: tl("Close one deterministic AM-like feature route.", "Show one family label that is justified directly by visible carrier and envelope evidence."),
      metricPriority: tl("The same benchmark keeps the same family label.", "The core family cue remains visually explainable."),
      avoidOverbuild: tl("Do not add receive or separation stages before one plain cue path is already defendable.", "Do not broaden the family set before the benchmark cue margins are stable."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Keep one benchmark path that can later be replayed through an auxiliary receive stage.", "Add only the minimum observability needed for mixed-case interpretation."),
      softwareScope: tl("Add carrier and envelope parameter output.", "If a supportive stage is inserted, preserve one benchmark where the explicit family cue is still visible before and after that stage."),
      metricPriority: tl("Parameters remain tied to the same explicit family cue.", "The benchmark still works both in the plain path and in the layered path."),
      avoidOverbuild: tl("Avoid letting recovered payload or lock success replace family proof.", "Do not add multiple auxiliary stages before one layered benchmark closes."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add broader family coverage when the same benchmark rig can expose the cue path clearly across cases.", "Keep one bypass route for ablation checks."),
      softwareScope: tl("Harden boundary-family rejection and wider family transfer.", "Show that the plain route and layered route agree on supported benchmark families."),
      metricPriority: tl("Mixed-case explainability remains stronger than appearance.", "Family boundaries stay honest under the auxiliary stage."),
      avoidOverbuild: tl("Do not keep any auxiliary stage that hides where the family evidence lives.", "Do not widen claims faster than the cue table and bypass checks can support."),
    },
  ]),
  tierPlan("2017-h", [
    {
      tier: "baseline",
      hardwareStack: tl("One local response-measurement node.", "One simple local output path for the measured sweep."),
      softwareScope: tl("Close one local response route.", "Prove one local sweep benchmark before any remote transport is added."),
      metricPriority: tl("Local response points remain repeatable.", "The measured object stays identifiable without networking."),
      avoidOverbuild: tl("Do not build a remote dashboard before the local sweep closes.", "Do not hide the local benchmark behind transport polish."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Add one identity-preserving remote path.", "Add one validity or freshness indicator when the remote route is active."),
      softwareScope: tl("Reconstruct the same response remotely.", "Keep one benchmark where each remote point can still be matched back to the local sweep."),
      metricPriority: tl("Remote mapping stays point-for-point honest.", "Transport integrity remains visible under modest disturbance."),
      avoidOverbuild: tl("Avoid multiple remote modes before one identity-preserving path is stable.", "Do not let the remote curve become the only visible truth source."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add broader distributed or mixed-family layers when the same local sweep benchmark remains available.", "Keep one observability path that can show both local truth and remote copy together."),
      softwareScope: tl("Harden integrity telemetry under link disturbance.", "If reused in a larger mixed task, replay one benchmark with the remote layer disabled and the local sweep still intact."),
      metricPriority: tl("The local benchmark still anchors the full story.", "Distributed behavior remains explainable rather than decorative."),
      avoidOverbuild: tl("Do not let a mixed-family overlay replace the response-measurement chain.", "Do not claim distributed robustness if the local anchor benchmark can no longer be replayed."),
    },
  ]),
  tierPlan("2017-i", [
    {
      tier: "baseline",
      hardwareStack: tl("One calibrated baseline or anchor geometry.", "One known-point or known-distance fixture without any supportive overlay."),
      softwareScope: tl("Close one known-point localization proof.", "Show one raw ranging or geometry cue before the final coordinate output."),
      metricPriority: tl("Known-point closure is repeatable.", "The coordinate can be traced back to one visible physical cue."),
      avoidOverbuild: tl("Do not add camera or remote support before one local localization loop closes.", "Do not expand the operating area while the anchor benchmark still drifts."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Add repeatable anchor calibration fixtures.", "If the task becomes mixed, add only one supportive visual or remote layer tied to the same known-point fixture."),
      softwareScope: tl("Repeatable coordinate solving and anchor calibration.", "If mixed-family, prove the supportive layer preserves the same local localization truth."),
      metricPriority: tl("The same known point remains consistent across the defended geometry.", "Local-vs-supportive-layer consistency is shown on at least one shared benchmark."),
      avoidOverbuild: tl("Avoid multiple supportive layers before one shared benchmark closes.", "Do not let an overlay hide whether the local localization loop still works."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add broader geometry robustness when the original anchor benchmark remains available.", "Keep one replay path that hides the supportive layer and leaves the localization core visible."),
      softwareScope: tl("Broaden geometry robustness and tougher positioning cases.", "Show one ablation replay where the mixed-family support is removed and the same known point still closes."),
      metricPriority: tl("The localization core remains the physical truth anchor.", "Any extra family layer stays explainable as support."),
      avoidOverbuild: tl("Do not let the auxiliary layer become the only thing that appears stable.", "Do not claim robust positioning if the local anchor benchmark cannot be replayed by itself."),
    },
  ]),
  tierPlan("2017-k", [
    {
      tier: "baseline",
      hardwareStack: tl("One synchronous sensing chain.", "One small appliance or load-state benchmark set."),
      softwareScope: tl("One supported load or appliance state.", "Show one signature trace and one final class decision on the same benchmark."),
      metricPriority: tl("The class route already closes on a supported case.", "Monitoring visuals remain subordinate to the final decision."),
      avoidOverbuild: tl("Do not add many appliance states before one benchmark closes.", "Do not turn it into a dashboard before a defensible class decision exists."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Keep the same benchmark set while adding one confusion pair.", "Retain the same feature table during monitoring expansion."),
      softwareScope: tl("Feature-table monitoring plus classification.", "If later connected to automatic diagnosis, preserve one replay where the same signature trace still explains the final label."),
      metricPriority: tl("Monitoring and classification strengthen the same feature story.", "The class boundary is still explicit under the expanded route."),
      avoidOverbuild: tl("Avoid unsupported classes before one confusion pair is honest.", "Do not let smooth trends hide weak feature margins."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add broader load-state coverage after the small benchmark set still closes unchanged.", "Keep one fallback replay of the simplest supported pair."),
      softwareScope: tl("Broader load-state coverage and stronger rejection of unsupported cases.", "If later reused in automatic diagnosis tasks, replay one compact class benchmark before trusting the bigger label set."),
      metricPriority: tl("Expanded classes remain anchored to explicit feature margins.", "Unsupported-case rejection is stronger than overclaiming coverage."),
      avoidOverbuild: tl("Do not widen the class list faster than the feature table can defend.", "Do not let monitoring richness replace classification honesty."),
    },
  ]),
  tierPlan("2017-m", [
    {
      tier: "baseline",
      hardwareStack: tl("One constrained-path fixture.", "One known path-position or speed benchmark."),
      softwareScope: tl("Close one repeatable path-progress route.", "Show one measured motion cue before any richer motion summary is added."),
      metricPriority: tl("The same path benchmark repeats.", "The motion result is traceable to one defended physical path cue."),
      avoidOverbuild: tl("Do not add broader path scenarios before one constrained path closes.", "Do not let trajectory polish replace path-benchmark truth."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Keep the same path fixture while adding one more supported path case.", "Retain one anchor path replay for every added scenario."),
      softwareScope: tl("Support one richer motion or speed case.", "Show that the same motion cue still explains the final result on the anchor path."),
      metricPriority: tl("Scenario growth remains anchored to the original path benchmark.", "Motion summaries still point back to explicit progression evidence."),
      avoidOverbuild: tl("Avoid many path cases before one anchor replay is stable.", "Do not widen narration faster than path calibration can support."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add broader constrained-path coverage when the original path benchmark still closes unchanged.", "Keep one fallback replay of the simplest path."),
      softwareScope: tl("Harden path-to-result repeatability and benchmark coverage.", "If reused with another family, replay one pure constrained-path benchmark before trusting the overlap."),
      metricPriority: tl("Broader motion coverage remains subordinate to the physical path benchmark.", "The original path cue still explains the result."),
      avoidOverbuild: tl("Do not sacrifice path explainability for richer-looking scenarios.", "Do not claim robustness if the anchor path no longer closes cleanly."),
    },
  ]),
  tierPlan("2009-d", [
    {
      tier: "baseline",
      hardwareStack: tl("One stable local sensing node.", "One defended environmental benchmark at that node."),
      softwareScope: tl("Close one local sensing route first.", "Mirror only one benchmark node remotely after the local truth is stable."),
      metricPriority: tl("The remote monitor maps back to the right local node.", "One node benchmark is already honest before the distributed view grows."),
      avoidOverbuild: tl("Do not add many nodes or a richer dashboard before one node benchmark closes.", "Do not let remote activity hide whether the local truth source is still current."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Add one freshness-aware remote path.", "Retain the same anchor node for every replay."),
      softwareScope: tl("Show one local-vs-remote node replay under mild disturbance.", "Expose one delayed or missing-node case visibly."),
      metricPriority: tl("Node identity and freshness remain visible under stress.", "Distributed monitoring still points back to one defended local benchmark."),
      avoidOverbuild: tl("Avoid many distributed features before one integrity path is honest.", "Do not let aggregation polish replace node-level truth."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add broader distributed behavior when the same anchor node still closes unchanged.", "Keep one local-only fallback replay available."),
      softwareScope: tl("Harden delay and node-loss handling while preserving one benchmark replay.", "If reused in a mixed task, hide the remote layer and replay the same anchor node locally."),
      metricPriority: tl("Remote monitoring remains subordinate to local node truth.", "The same node benchmark still closes after the supportive layer is removed."),
      avoidOverbuild: tl("Do not let the remote view become the only visible proof.", "Do not claim distributed robustness if the anchor node benchmark can no longer be replayed."),
    },
  ]),
  tierPlan("2017-o", compactTiers(["Close one known-speed benchmark.", "Keep one defended pulse or timing pickup only."], ["Add one more operating speed while replaying the original benchmark.", "Keep one anchor-speed reference through every expansion."], ["Broaden speed coverage only if the original known-speed benchmark still closes unchanged.", "Keep one fallback speed benchmark alive for defense."])),
  tierPlan("2003-c", compactTiers(["Close one known phase benchmark pair.", "Keep one dual-path timing route only."], ["Expand supported phase cases while replaying the same benchmark pair.", "Add modest range growth only after the anchor pair stays calibrated."], ["Broaden phase coverage only if the original benchmark pair still closes unchanged.", "Keep one fallback pair alive to defend the dual-channel route."])),
  tierPlan("2003-d", compactTiers(["Close one known logic-sequence capture.", "Keep one sampling route and threshold set only."], ["Expand capture depth or channels while replaying the same benchmark sequence.", "Add one more supported sequence only after the original still replays correctly."], ["Broaden digital timing coverage only if the original sequence still closes unchanged.", "Keep one fallback sequence for defense."])),
  tierPlan("2019-c", [
    {
      tier: "baseline",
      hardwareStack: tl("One protected launch/capture fixture.", "One known open and one known short reference."),
      softwareScope: tl("Open/short classification.", "Keep one state-only benchmark before any length or richer fault interpretation appears."),
      metricPriority: tl("Simple passive state truth stays repeatable.", "The line object remains central and visible."),
      avoidOverbuild: tl("Do not add length solving before open/short truth is stable.", "Do not widen fault stories while the fixture baseline still drifts."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Add matched and one known-length reference on the same fixture.", "Keep the launch path unchanged while state templates are expanded."),
      softwareScope: tl("Matched and known-length checks.", "Show that the same line is judged for state first and length second."),
      metricPriority: tl("State discrimination remains stronger than length polish.", "Known-length replay stays tied to the same state templates."),
      avoidOverbuild: tl("Avoid many cable variants before one state-plus-length table is stable.", "Do not let length estimates hide whether the line state was already wrong."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add bad-contact or partial-fault fixtures after the base references remain repeatable.", "Keep one fallback benchmark with the original simple references."),
      softwareScope: tl("Bad-contact or partial-fault handling.", "Replay one simpler state benchmark before any harder fault example is claimed."),
      metricPriority: tl("Extended cable behavior stays explainable from the same passive evidence chain.", "The original state benchmark still closes unchanged."),
      avoidOverbuild: tl("Do not trade template clarity for a more fragile fault taxonomy.", "Do not claim richer diagnostics if the base state table no longer anchors the story."),
    },
  ]),
  tierPlan("2019-d", [
    {
      tier: "baseline",
      hardwareStack: tl("One stable excitation source.", "One dual-channel path locked to a small known-part table."),
      softwareScope: tl("One stable known-part solver.", "Freeze one frequency and one range before any broader sweep or model expansion."),
      metricPriority: tl("A known passive stays repeatable.", "The parameter route is explainable directly from observables."),
      avoidOverbuild: tl("Do not start broad sweep fitting before one point solver is stable.", "Do not mix model claims into the baseline parameter route."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Add multiple passive references and guarded range switching.", "Keep the same known-part set for cross-range replay."),
      softwareScope: tl("Multiple passive references and range checks.", "Show that the same part or same family of parts stays consistent across defended ranges."),
      metricPriority: tl("Range changes preserve parameter truth.", "The expanded route still points back to the same known-part anchors."),
      avoidOverbuild: tl("Avoid dense sweep or bigger solvers before cross-range truth is stable.", "Do not widen the part set faster than calibration can support."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add sweep consistency or model-adjacent checks when the known-part table still closes.", "Keep one fallback single-point benchmark alive."),
      softwareScope: tl("Sweep consistency and richer error closure.", "If the route later supports compact models, replay one simple parameter benchmark before trusting the bigger story."),
      metricPriority: tl("Broader behavior remains anchored to simpler parameter truth.", "Calibration closure stays stronger than solver complexity."),
      avoidOverbuild: tl("Do not let broader sweep behavior replace the trusted known-part baseline.", "Do not claim model richness if the parameter route has lost clarity."),
    },
  ]),
  tierPlan("2019-e", [
    {
      tier: "baseline",
      hardwareStack: tl("One local sensing node.", "One local event or sample that can be frozen with explicit identity."),
      softwareScope: tl("One local reading mirrored remotely.", "Keep one benchmark where the local truth sample is frozen before the remote side updates."),
      metricPriority: tl("The remote sample maps back to the right local truth.", "Identity is visible even in the simplest path."),
      avoidOverbuild: tl("Do not add transport complexity before one point-to-one-point mapping is stable.", "Do not rely on remote freshness that is not yet visible."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Add one sequence-aware or timestamp-aware display path.", "Add one visible delay or stale-data indicator."),
      softwareScope: tl("Sequence-aware remote display.", "Prove one disturbed-link case without losing sample identity."),
      metricPriority: tl("Delay and identity stay explicit under stress.", "The remote side cannot look healthy while showing old data."),
      avoidOverbuild: tl("Avoid multiple transport stacks before one integrity path is honest.", "Do not let UI polish hide identity loss."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add broader distributed or mixed-family layers when the same local event benchmark remains available.", "Keep one local-only replay path for fallback validation."),
      softwareScope: tl("Delay and loss robustness under disturbed links.", "If reused in a mixed task, replay the same benchmark with the remote layer hidden and the local truth still visible."),
      metricPriority: tl("Remote integrity remains subordinate to local truth.", "Mixed-family reuse still preserves an explicit local benchmark."),
      avoidOverbuild: tl("Do not let a remote layer become the only visible proof.", "Do not claim distributed robustness if the local event mapping cannot be replayed."),
    },
  ]),
  tierPlan("2025-a", [
    {
      tier: "baseline",
      hardwareStack: tl("One synchronous voltage-current sensing chain.", "One defended converter-load benchmark mode."),
      softwareScope: tl("Close one load-test route from electrical observables to power-flow conclusion.", "Show one benchmark mode before adding broader operating cases."),
      metricPriority: tl("The same benchmark mode already closes on measured observables.", "Energy-flow narration remains subordinate to synchronous sensing truth."),
      avoidOverbuild: tl("Do not add many operating modes before one benchmark mode closes.", "Do not let UI or mode narration outrun the voltage-current evidence chain."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Keep the same benchmark fixture while adding one more defended operating mode.", "Retain one anchor mode replay for every mode-expansion claim."),
      softwareScope: tl("Expand supported load-test modes while preserving one unchanged benchmark replay.", "Show that the same electrical feature route still explains the final result across modest mode changes."),
      metricPriority: tl("Mode growth remains anchored to the original converter-load benchmark.", "Power-flow direction stays measurable rather than inferred."),
      avoidOverbuild: tl("Avoid many operating modes before one anchor replay is stable.", "Do not let richer mode transitions hide weak observability."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add broader converter behavior after the original benchmark mode still closes unchanged.", "Keep one fallback replay of the simplest energy-feedback case."),
      softwareScope: tl("Broaden operating coverage while preserving one benchmark voltage-current-to-power route.", "If another family overlaps, replay one compact converter-load benchmark before trusting the broader story."),
      metricPriority: tl("Broader load-test behavior remains anchored to synchronous electrical truth.", "The original benchmark mode still explains the final result under defense."),
      avoidOverbuild: tl("Do not trade evidence-chain clarity for mode richness.", "Do not claim robust load testing if the original benchmark replay has drifted."),
    },
  ]),
  tierPlan("2025-b", [
    {
      tier: "baseline",
      hardwareStack: tl("One single-phase sensing and compensation path.", "One frozen uncompensated harmonic benchmark."),
      softwareScope: tl("Close one before-and-after suppression route on a fixed benchmark.", "Show one defended residual metric before broader tuning."),
      metricPriority: tl("The same benchmark already proves compensation effect.", "Reference and residual observability remain stronger than cleaner-looking waveforms."),
      avoidOverbuild: tl("Do not add many operating points before one anchor benchmark closes.", "Do not let retuning outrun the frozen before-and-after replay."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Keep the same benchmark case while adding one more defended operating condition.", "Retain one unchanged before-and-after replay for every tuning claim."),
      softwareScope: tl("Expand tuning or operating coverage while preserving one frozen harmonic benchmark.", "Show that the same residual route still explains the final compensation result after modest retuning."),
      metricPriority: tl("Operating growth remains anchored to the original harmonic benchmark.", "Compensation causality stays measurable on the same case."),
      avoidOverbuild: tl("Avoid broader compensation claims before one anchor replay is stable.", "Do not let a smoother waveform replace the defended residual metric."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add broader compensation behavior after the original uncompensated-vs-compensated case still closes unchanged.", "Keep one fallback replay of the simplest harmonic benchmark."),
      softwareScope: tl("Broaden operating coverage while preserving one unchanged before-and-after comparison.", "If overlap with distortion or adaptation appears, replay one pure compensation benchmark before trusting the broader story."),
      metricPriority: tl("Broader suppression behavior remains anchored to one frozen harmonic truth case.", "The original benchmark still explains what the compensator changed."),
      avoidOverbuild: tl("Do not redefine the benchmark while tuning.", "Do not claim robust compensation if the original anchor replay has drifted."),
    },
  ]),
  tierPlan("2025-j", [
    {
      tier: "baseline",
      hardwareStack: tl("One stable beacon timing chain.", "One known-point anchor benchmark."),
      softwareScope: tl("Close one known-point localization route.", "Show one timing cue before the final coordinate output."),
      metricPriority: tl("The known point repeats reliably.", "The coordinate story is already tied to a visible timing anchor."),
      avoidOverbuild: tl("Do not add wider positioning coverage before one beacon-known-point loop closes.", "Do not hide the anchor benchmark behind broader geometry claims."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Keep the same anchors while adding one more supported benchmark point.", "Retain the original known point for replay."),
      softwareScope: tl("Expand supported points with the same timing chain.", "Show that broader coverage still points back to the original anchor benchmark."),
      metricPriority: tl("Anchor geometry remains the main truth source.", "The original known point still closes after coverage grows."),
      avoidOverbuild: tl("Avoid many added points before one anchor replay is stable.", "Do not let broader path coverage outrun timing closure."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add broader area or tougher geometry when the original known-point benchmark still closes unchanged.", "Keep one fallback replay of the simplest beacon benchmark."),
      softwareScope: tl("Harden geometry robustness while preserving one anchor replay.", "If another family is layered in, replay the original beacon-known-point case before trusting the overlap."),
      metricPriority: tl("Broader positioning remains anchored to the original beacon truth.", "The core timing route still explains the final coordinates."),
      avoidOverbuild: tl("Do not trade anchor explainability for richer but fragile coverage.", "Do not claim robust positioning if the original known-point replay has drifted."),
    },
  ]),
  tierPlan("2020-e", [
    {
      tier: "baseline",
      hardwareStack: tl("One low-distortion drive source.", "One headroom-safe capture chain."),
      softwareScope: tl("One stable THD benchmark.", "Freeze one harmonic-truth route before any trend or compensation comparison is added."),
      metricPriority: tl("The clean-source and DUT baseline remain distinguishable.", "THD truth is stable on one reference case."),
      avoidOverbuild: tl("Do not add drive sweeps before one benchmark harmonic table is trustworthy.", "Do not compare trends while the instrument floor is still drifting."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Keep the same source and front end while drive level is varied.", "Retain one clean-source anchor for every trend session."),
      softwareScope: tl("Drive-level trend comparison.", "Show that the same FFT route survives across defended drive changes."),
      metricPriority: tl("Trend behavior remains tied to one invariant harmonic-truth pipeline.", "The clean-source anchor is still available when trend claims are made."),
      avoidOverbuild: tl("Avoid widening frequency range before drive trends are honest.", "Do not let compensation-style reasoning creep in before base distortion truth is locked."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add broader frequency or operating range after the reference source benchmark still closes.", "Keep one fallback replay of the simplest THD case."),
      softwareScope: tl("Broader frequency or operating range.", "If later compared with compensation routes, preserve one plain distortion benchmark for ablation."),
      metricPriority: tl("Expanded range does not erase the defended instrument-vs-DUT distinction.", "The original harmonic-truth anchor still works unchanged."),
      avoidOverbuild: tl("Do not sacrifice comparability for wider but unstable coverage.", "Do not claim compensation or adaptation gains if the base distortion route is no longer reproducible."),
    },
  ]),
  tierPlan("2020-g", [
    {
      tier: "baseline",
      hardwareStack: tl("One calibrated camera rig.", "One known-size target fixture."),
      softwareScope: tl("Known-size measurement.", "Show one locally defended image-to-metric conversion before using the camera output anywhere else."),
      metricPriority: tl("The same target repeats within the defended tolerance.", "The visual chain is independently explainable."),
      avoidOverbuild: tl("Do not turn the task into generic detection before the metric route is stable.", "Do not feed camera output into a larger chain before the base calibration target closes."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Keep a fixed calibration target and one pose-variation fixture.", "If the task becomes mixed, add only one downstream consumer of the camera output."),
      softwareScope: tl("Pose change robustness.", "If reused in a mixed task, preserve one benchmark where the same target is checked before and after the extra layer."),
      metricPriority: tl("Pose variation does not break the metric route.", "The downstream mixed layer does not erase the local visual-measurement proof."),
      avoidOverbuild: tl("Avoid changing feature sets between benchmark and mixed demos.", "Do not let the downstream layer replace the calibrated image-to-metric story."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add broader lighting or shape detail when the anchor calibration target still works unchanged.", "Keep one replay path where the camera measurement route can be shown without the extra mixed-family layer."),
      softwareScope: tl("Shape detail or broader lighting range.", "If reused in localization or remote overlays, show one ablation replay of the base visual metric chain alone."),
      metricPriority: tl("The visual chain remains the source of metric truth.", "Mixed-family reuse stays traceable to the original calibration evidence."),
      avoidOverbuild: tl("Do not trade calibrated explainability for a more impressive but opaque visual pipeline.", "Do not broaden scenes faster than the calibration benchmark can support."),
    },
  ]),
  tierPlan("2021-a", [
    {
      tier: "baseline",
      hardwareStack: tl("One stable clocked capture chain.", "One clean sine benchmark source."),
      softwareScope: tl("One THD route.", "Freeze FFT size, window, and harmonic indexing on one defended benchmark."),
      metricPriority: tl("Fundamental and harmonic bins remain fixed and interpretable.", "The metric route is stable enough to compare later cases honestly."),
      avoidOverbuild: tl("Do not add extra spectral features before the THD route is frozen.", "Do not retune FFT settings between benchmark cases."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Add one known harmonic injection case without changing the main capture route.", "Keep the same clock and anti-aliasing path."),
      softwareScope: tl("Known harmonic injection validation.", "Use the same frozen FFT route on both clean and injected cases."),
      metricPriority: tl("Validation cases strengthen the same measurement chain rather than creating a new one.", "The harmonic-order story stays consistent across benchmarks."),
      avoidOverbuild: tl("Avoid multiple optional FFT modes before the injection benchmark is stable.", "Do not let auxiliary compensation logic redefine the spectral baseline."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add wider source conditions after the original clean and injected benchmarks still close unchanged.", "Keep one fallback replay of the simplest THD case."),
      softwareScope: tl("Wider source conditions with stable metric.", "If later compared to compensation routes, retain the original fixed THD benchmark as the anchor."),
      metricPriority: tl("Expanded conditions preserve comparability.", "The fixed FFT route remains the source of harmonic truth."),
      avoidOverbuild: tl("Do not trade metric comparability for more scenarios.", "Do not call it robust if the original benchmark must be retuned to pass."),
    },
  ]),
  tierPlan("2021-d", [
    {
      tier: "baseline",
      hardwareStack: tl("One local sensing or imaging node with a frozen known-target fixture.", "One minimal local display or serial output path before any transport layer is added."),
      softwareScope: tl("Close one trustworthy local measurement route.", "Freeze one local truth sample with explicit identity before mirroring anything remotely."),
      metricPriority: tl("The local metric remains repeatable on the same target.", "The demo can point to one undeniable local truth source."),
      avoidOverbuild: tl("Do not add dashboards, cloud-style pages, or extra remote features before the local measurement closes cleanly.", "Do not tell a networking story while the local calibration target still drifts."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Add one timestamped or sequence-aware transport path.", "Add one visible stale-data or freshness indicator on the remote side."),
      softwareScope: tl("Mirror the same local truth to the remote side with identity preserved.", "Add one disturbed-link behavior that turns the remote result invalid visibly instead of silently lagging."),
      metricPriority: tl("Remote output still maps back to the right local sample.", "Freshness and integrity remain legible during link disturbance."),
      avoidOverbuild: tl("Avoid multiple transport protocols or polished UI branches that consume validation time.", "Do not let remote convenience features hide whether the local truth source is still current."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add visual-localization or broader distributed layers if they can reuse the same calibrated local target.", "Keep one debug channel that can show local truth, remote copy, and freshness state side by side."),
      softwareScope: tl("Prove that supportive remote or visual layers preserve the same local calibrated observable.", "Show one fallback path where the extra layer is removed and the local measurement chain still answers the core question."),
      metricPriority: tl("Cross-family consistency stays explainable under disturbance.", "The team can defend which layer is primary truth and which layer is only support."),
      avoidOverbuild: tl("Do not let a mixed-family overlay replace the measurement-first chain.", "Do not claim distributed robustness that cannot be replayed on the same known local benchmark."),
    },
  ]),
  tierPlan("2021-e", [
    {
      tier: "baseline",
      hardwareStack: tl("One stable receive or capture chain for a small supported waveform set.", "One observable carrier, envelope, or timing cue path that can be shown directly."),
      softwareScope: tl("Complete one defended waveform-family route.", "Output only the parameters that are directly supported by the measured family cue."),
      metricPriority: tl("The same benchmark waveform gets the same family label repeatedly.", "The family decision path is explicit rather than inferred from a pretty recovered signal."),
      avoidOverbuild: tl("Do not add many waveform families before one cue table is stable.", "Do not add receiver or separation polish if it makes the family evidence harder to name."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Keep one benchmark fixture that can replay the same case through both the simple path and the full mixed chain.", "Add only one supportive receive or separation layer when it helps interpret a mixed case."),
      softwareScope: tl("Support multiple defended family benchmarks with parameter output.", "If a receive or separation stage exists, preserve one stage-by-stage trace from raw capture to final label."),
      metricPriority: tl("Family labels and parameter outputs stay aligned across benchmark cases.", "The intermediate stage still preserves the cue that justifies the final family label."),
      avoidOverbuild: tl("Avoid broad classifier expansion before the mixed-case benchmark is explainable.", "Do not let lock success or separation quality replace the family-evidence story."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add broader family coverage or tougher mixed cases when the same benchmark rig can expose intermediate traces clearly.", "Keep one bypass path so the auxiliary receive or separation layer can be removed for ablation checks."),
      softwareScope: tl("Harden boundary-family rejection and mixed-case explainability.", "Show that the final family decision agrees between the plain benchmark route and the layered full chain on supported cases."),
      metricPriority: tl("Cross-family boundaries remain honest.", "Each mixed-family stage still has a named role: acquire, optionally separate or lock, then identify and estimate."),
      avoidOverbuild: tl("Do not widen family claims faster than the cue table and rejection logic can support.", "Do not keep an auxiliary stage that improves appearance but weakens explainability."),
    },
  ]),
  tierPlan("2021-h", [
    {
      tier: "baseline",
      hardwareStack: tl("One synchronous capture path.", "One small reference load set."),
      softwareScope: tl("Small class table.", "Show one defended class route before any broader monitoring or auto-flagging logic is added."),
      metricPriority: tl("A compact class list is already repeatable.", "The feature table is visible enough to defend manually."),
      avoidOverbuild: tl("Do not add more classes before one compact route closes.", "Do not hide the feature table behind a polished UI."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Keep the same load set while adding one confusion pair benchmark.", "Retain one explicit feature table across all supported classes."),
      softwareScope: tl("Confusion-pair handling.", "If reused in monitoring or automatic diagnosis flows, preserve one benchmark where the same feature table still explains the decision."),
      metricPriority: tl("The confusion pair is resolved by explicit features.", "The expanded route remains tied to the same compact class logic."),
      avoidOverbuild: tl("Avoid auto-labeling logic before the confusion pair is stable.", "Do not add classes that are not separated by the current table."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add unsupported-load rejection after the supported set still closes unchanged.", "Keep one fallback replay of the easiest and hardest supported cases."),
      softwareScope: tl("Unsupported-load rejection.", "If later connected to automatic decision pipelines, replay one compact class benchmark before trusting rejection claims."),
      metricPriority: tl("Rejection remains anchored to visible feature margins.", "The route stays honest about what it does not support."),
      avoidOverbuild: tl("Do not call every uncertain case a valid class.", "Do not let automation hide that feature margins collapsed."),
    },
  ]),
  tierPlan("2021-j", compactTiers(["One waveform-family benchmark and one defended capture observable."], ["Multiple benchmark waveform families with parameter readout."], ["Only broaden coverage when the original waveform benchmark table still closes unchanged."])),
  tierPlan("2023-b", [
    {
      tier: "baseline",
      hardwareStack: tl("One protected coax launch path.", "One known state reference set."),
      softwareScope: tl("State discrimination.", "Keep open, short, and matched truth explicit before any length claim is shown."),
      metricPriority: tl("State templates remain separable.", "The line-state story is already defensible without length polish."),
      avoidOverbuild: tl("Do not start length solving while state templates still overlap.", "Do not widen cable conditions before one fixture benchmark is stable."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Add one known-length set on the same coax fixture.", "Keep the launch path unchanged during state-plus-length validation."),
      softwareScope: tl("Length solving.", "Show that the same cable state benchmark still anchors the length route."),
      metricPriority: tl("Length remains subordinate to stable state truth.", "Velocity-factor or timing calibration still points back to known cables."),
      avoidOverbuild: tl("Avoid many cable media before one known-length table closes.", "Do not let a good-looking length estimate hide a wrong state decision."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add broader fixture or fault robustness when the original reference cables still pass unchanged.", "Keep one fallback benchmark with the simplest state references."),
      softwareScope: tl("State-plus-length robustness across fixtures.", "Replay one simple cable benchmark before any tougher fixture or partial-fault claim."),
      metricPriority: tl("Extended cable behavior remains tied to the original references.", "The benchmark table survives fixture variation honestly."),
      avoidOverbuild: tl("Do not overfit one cable medium and call it robust.", "Do not widen fault claims if the anchor cable set no longer stabilizes the route."),
    },
  ]),
  tierPlan("2023-c", [
    {
      tier: "baseline",
      hardwareStack: tl("One calibrated source and capture range.", "One known passive anchor set."),
      softwareScope: tl("One calibrated range.", "Close one trusted L or C route before cross-range or model-adjacent expansion."),
      metricPriority: tl("The anchor parts repeat on the primary range.", "The inversion route is already defensible from calibrated observables."),
      avoidOverbuild: tl("Do not add more ranges before one range truth is stable.", "Do not widen the solver story into general modeling yet."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Add multi-range switching while reusing the same anchor parts.", "Keep gain and phase calibration tied to per-range checkpoints."),
      softwareScope: tl("Multi-range consistency.", "Show that the same passive family remains coherent across defended ranges."),
      metricPriority: tl("Cross-range consistency strengthens the same parameter route.", "Range calibration remains more important than solver cleverness."),
      avoidOverbuild: tl("Avoid bigger part libraries before range transitions are honest.", "Do not add model-like replay claims before cross-range truth closes."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add richer compensation across more parts after the simpler anchor set still closes on all active ranges.", "Keep one fallback primary-range benchmark."),
      softwareScope: tl("Richer compensation across more parts.", "If later connected to model-identification tasks, replay one simpler parameter benchmark before trusting the expanded route."),
      metricPriority: tl("Expanded part coverage remains anchored to calibrated range truth.", "Compensation remains secondary to observable integrity."),
      avoidOverbuild: tl("Do not trade explainability for wider but shakier coverage.", "Do not promise model richness if the base LCR route is no longer crisp."),
    },
  ]),
  tierPlan("2023-d", [
    {
      tier: "baseline",
      hardwareStack: tl("One stable capture chain for a small supported family set.", "One benchmark source library with clear carrier or symbol cues."),
      softwareScope: tl("One clear family benchmark.", "Expose one explicit feature path from raw capture to final family label."),
      metricPriority: tl("The benchmark family remains repeatable.", "The family cue is readable without auxiliary stages."),
      avoidOverbuild: tl("Do not add receive or separation complexity before one plain family route is stable.", "Do not widen the family set before one benchmark cue table is defendable."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Keep one benchmark that can be replayed through both the plain path and a layered auxiliary stage.", "Add only the observability needed to inspect intermediate cues."),
      softwareScope: tl("Multiple supported family decisions with parameter output.", "If mixed-family, preserve one bypass comparison between the plain cue path and the layered full chain."),
      metricPriority: tl("Supported families stay explicit and repeatable.", "The auxiliary stage does not erase where the family evidence lives."),
      avoidOverbuild: tl("Avoid adding many ambiguous boundary cases before one bypass benchmark agrees.", "Do not let cleaner intermediate signals replace explicit family proof."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add boundary-family stress cases when the same benchmark rig can still expose intermediate cues clearly.", "Keep one ablation path for removing the auxiliary stage."),
      softwareScope: tl("Boundary-family rejection and robustness hardening.", "Show that supported benchmark families agree between the plain and layered routes on defended cases."),
      metricPriority: tl("Boundary handling remains honest.", "Mixed-family explainability stays stronger than final-output appearance."),
      avoidOverbuild: tl("Do not keep any layered stage that breaks cue transparency.", "Do not widen claims beyond what the ablation and benchmark library can still defend."),
    },
  ]),
  tierPlan("2023-f", [
    {
      tier: "baseline",
      hardwareStack: tl("One trusted ranging or geometry fixture with fixed anchors or baseline.", "One local output path that can replay a known point or known distance without any extra overlay."),
      softwareScope: tl("Close one trusted ranging route.", "Show one known-point or known-distance proof before enabling any supportive visual or remote layer."),
      metricPriority: tl("The raw localization observable repeats on the same setup.", "The final coordinate or distance can be traced back to one visible cue chain."),
      avoidOverbuild: tl("Do not add remote mirrors or camera overlays before one local localization loop closes.", "Do not expand anchor layouts while the first known point still wanders."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Add calibrated anchors or synchronized sensing for the deterministic solver.", "If the task is mixed, add only one supportive remote or visual layer that references the same known-point fixture."),
      softwareScope: tl("Run the coordinate solver with known-point and anchor-consistency checks.", "If mixed-family, prove that the supportive layer preserves the same localization truth rather than replacing it."),
      metricPriority: tl("Known points repeat under the defended geometry.", "Local-vs-visual or local-vs-remote consistency holds on at least one shared benchmark."),
      avoidOverbuild: tl("Avoid multiple extra overlays before one supportive layer is validated.", "Do not present smooth coordinates from a layer that cannot be traced back to the ranging baseline."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add broader anchor layouts, tougher reflections, or cross-family overlays when the original known-point fixture remains available.", "Keep one observability path that can expose both the raw localization cue and the supportive layer together."),
      softwareScope: tl("Harden localization under tougher geometry or reflection conditions.", "Show one ablation replay where the supportive visual or remote layer is removed and the localization core still closes on the same point."),
      metricPriority: tl("Localization truth survives added complexity.", "The team can defend which layer owns the physical truth and which layer only improves observability or transport."),
      avoidOverbuild: tl("Do not let the supportive layer become the only visible story.", "Do not claim wide-scene robustness if the base known-point loop cannot be replayed after the extra layer is disabled."),
    },
  ]),
  tierPlan("2023-h", [
    {
      tier: "baseline",
      hardwareStack: tl("One linear capture path and one repeatable mixed benchmark fixture.", "One clean-reference path for at least one component so recovered outputs can be compared to something physical."),
      softwareScope: tl("Close one mixed benchmark from input to recovered outputs.", "Name what each recovered output is supposed to represent before any downstream logic is added."),
      metricPriority: tl("Recovered outputs are interpretable on one benchmark.", "The team can compare at least one recovered component against a known clean reference or expected behavior."),
      avoidOverbuild: tl("Do not add classifiers or receiver stages before one separated output has clear meaning.", "Do not treat residual reduction alone as a finished answer."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Keep the same mixed benchmark available while adding one downstream recognition or receive stage if the task is layered.", "Add only the minimum observability needed to inspect the recovered output before it enters the next stage."),
      softwareScope: tl("Produce named recovered outputs with repeatable interpretation.", "If a downstream stage is added, preserve one benchmark where the same recovered output is inspected before and after that stage."),
      metricPriority: tl("The recovered component remains stable as the mixture changes modestly.", "The downstream label or lock claim still points back to the same named recovered output."),
      avoidOverbuild: tl("Avoid multiple downstream branches before one benchmark path is explainable end to end.", "Do not let a later stage mask that the recovered component itself is weak."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add broader mixtures or ambiguity handling when the clean-reference comparison still works on the anchor benchmark.", "Keep one bypass path so the downstream stage can be disabled without changing the separation fixture."),
      softwareScope: tl("Handle tougher mixtures while preserving output meaning.", "Show one ablation case where weakening the recovered component also weakens the downstream result, proving the downstream stage is not hiding separation failure."),
      metricPriority: tl("Recovered-output meaning remains explicit under broader mixtures.", "Cross-family layering stays honest because the separated output remains benchmarkable by itself."),
      avoidOverbuild: tl("Do not accept a national-upgrade path that only improves the final label while obscuring the recovered component.", "Do not widen mixture claims faster than the team can still explain what each output physically means."),
    },
  ]),
  tierPlan("2023-j", [
    {
      tier: "baseline",
      hardwareStack: tl("One repeatable line probing fixture.", "One healthy-vs-fault scripted benchmark set."),
      softwareScope: tl("Healthy-vs-fault discrimination.", "Show raw line-state evidence before the automatic label logic is emphasized."),
      metricPriority: tl("The automatic route already points back to visible line cues.", "The same script remains repeatable."),
      avoidOverbuild: tl("Do not add richer automation before one healthy-vs-fault route is stable.", "Do not let the automatic label appear without the underlying line evidence."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Keep the same scripted cases while adding threshold or state-machine logic.", "Retain one explicit line-state baseline for each auto decision."),
      softwareScope: tl("Automatic scripted fault-state detection.", "If later connected to monitoring or classification families, preserve one replay where the same line cue is shown before the automatic decision."),
      metricPriority: tl("Automation remains deterministic and replayable.", "The same benchmark script still explains why the label fired."),
      avoidOverbuild: tl("Avoid adding many uncertain faults before the main scripts are stable.", "Do not let script automation replace cue explainability."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add broader fault-boundary handling after the core scripts still pass unchanged.", "Keep one fallback replay of the simplest healthy-vs-fault script."),
      softwareScope: tl("Broader fault boundary handling and repeatability hardening.", "If later reused near monitoring or appliance-identification tasks, replay one anchor auto-diagnosis benchmark before trusting the expanded label set."),
      metricPriority: tl("Expanded auto-detection remains anchored to explicit line-state evidence.", "Repeatability remains stronger than fault-taxonomy breadth."),
      avoidOverbuild: tl("Do not widen the fault set faster than the scripted benchmarks can explain.", "Do not let automation polish hide drifting thresholds."),
    },
  ]),
  tierPlan("2024-b", [
    {
      tier: "baseline",
      hardwareStack: tl("One defended disturbance benchmark.", "One reference and residual sensing path with safe margins."),
      softwareScope: tl("One compensation case.", "Show one uncompensated baseline and one compensated result before changing operating points."),
      metricPriority: tl("The compensation effect is tied to one stable benchmark.", "Residual truth is visible before and after compensation."),
      avoidOverbuild: tl("Do not add many operating points before one baseline closes.", "Do not let convergence plots replace the benchmark effect itself."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Keep the same disturbance benchmark while the operating point is perturbed modestly.", "Retain one unchanged baseline capture path."),
      softwareScope: tl("Convergence display and condition-change recovery.", "Show recovery on the same defended benchmark family rather than inventing new references each time."),
      metricPriority: tl("Recovery remains tied to the same causal benchmark.", "The compensated route still points back to an uncompensated baseline."),
      avoidOverbuild: tl("Avoid broad operating ranges before one condition-change replay is honest.", "Do not treat every residual improvement as adaptation proof."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add broader operating-point robustness when the original benchmark still closes unchanged.", "Keep one fallback uncompensated-vs-compensated replay on the anchor case."),
      softwareScope: tl("Broader operating-point robustness and cleaner residual metrics.", "If compared with plain distortion tasks later, preserve the original benchmark as the compensation anchor."),
      metricPriority: tl("Expanded robustness remains grounded in the same disturbance story.", "Residual metrics stay interpretable rather than decorative."),
      avoidOverbuild: tl("Do not widen operating space faster than causality can still be explained.", "Do not claim adaptive strength if the anchor benchmark requires retuning to pass."),
    },
  ]),
  tierPlan("2025-c", [
    {
      tier: "baseline",
      hardwareStack: tl("One rigid camera rig.", "One calibrated target set."),
      softwareScope: tl("One calibrated target.", "Close one geometry-first metric route before the visual chain is reused elsewhere."),
      metricPriority: tl("The target set repeats within the defended tolerance.", "The base geometric chain remains understandable by itself."),
      avoidOverbuild: tl("Do not add localization or remote overlays before one calibrated target route closes.", "Do not change feature definitions between runs."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Keep one pose-variation fixture and one unchanged calibration target.", "If mixed-family, add only one supportive downstream layer tied to the same target set."),
      softwareScope: tl("Pose-variation measurement.", "If reused in a mixed task, preserve one benchmark where the same target is replayed with and without the extra layer."),
      metricPriority: tl("Pose variation remains within defended bounds.", "The extra mixed layer does not obscure the base visual measurement chain."),
      avoidOverbuild: tl("Avoid multiple overlays before one shared target benchmark is stable.", "Do not let a downstream solver replace the geometric explanation."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add broader geometry and lighting robustness when the anchor target set still works unchanged.", "Keep one local-only replay path for the base vision chain."),
      softwareScope: tl("Broader geometry and lighting robustness.", "If reused in localization or remote hybrids, show one ablation replay of the base metric chain alone."),
      metricPriority: tl("The vision chain remains the local truth source.", "Mixed-family reuse stays tied to the original calibrated target set."),
      avoidOverbuild: tl("Do not widen scenes faster than the calibration benchmark can still defend.", "Do not let overlay richness replace geometric traceability."),
    },
  ]),
  tierPlan("2025-d", [
    {
      tier: "baseline",
      hardwareStack: tl("One pair-sensitive capture fixture.", "One healthy-vs-fault pair mapping reference."),
      softwareScope: tl("Main pair state discrimination.", "Show one pair mapping benchmark before any richer fault taxonomy is added."),
      metricPriority: tl("Pair identity and simple state truth remain stable.", "The line object stays central rather than turning into a protocol story."),
      avoidOverbuild: tl("Do not add advanced fault labels before pair mapping is locked.", "Do not widen cable conditions while the baseline templates still move."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Add pair fault references on the same fixture.", "Keep per-pair baselines visible while fault interpretation is expanded."),
      softwareScope: tl("Pair fault interpretation.", "Replay the same pair benchmarks with simple and harder fault conditions."),
      metricPriority: tl("Fault interpretation remains anchored to pair identity.", "The same fixture and baseline still explain the richer labels."),
      avoidOverbuild: tl("Avoid many edge faults before the main pair table is stable.", "Do not let narrative about Ethernet or communication hide passive-line truth."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add mismatch and contact anomalies when the original pair-state references still pass unchanged.", "Keep one fallback replay of the simplest healthy-vs-fault pair set."),
      softwareScope: tl("Mismatch and contact anomalies with clearer boundaries.", "Replay one base pair benchmark before each harder anomaly claim."),
      metricPriority: tl("Extended anomalies remain explainable from the same pair-sensitive evidence chain.", "The baseline pair table survives the richer fault set."),
      avoidOverbuild: tl("Do not invent a richer fault taxonomy if pair identity itself is drifting.", "Do not let harder anomalies erase the simpler benchmark that made the route credible."),
    },
  ]),
  tierPlan("2025-f", compactTiers(["Basic lock proof."], ["Relock logging under disturbance."], ["Weak-signal and false-lock stress cases."])),
  tierPlan("2025-g", [
    {
      tier: "baseline",
      hardwareStack: tl("One repeatable stimulus-response bench.", "One compact held-out replay set."),
      softwareScope: tl("One compact fit.", "Close the smallest model that already replays one defended held-out case."),
      metricPriority: tl("Compactness and replay truth are both visible.", "The model story is already stronger than a pure overfit demonstration."),
      avoidOverbuild: tl("Do not grow model order before one held-out replay closes.", "Do not mix too many parameter-like and model-like claims in the baseline."),
    },
    {
      tier: "provincial",
      hardwareStack: tl("Keep the same held-out set while adding modest replay coverage.", "Retain one simpler parameter-oriented benchmark for comparison if relevant."),
      softwareScope: tl("Held-out replay.", "Show that the compact fit survives beyond the fit set and remains explainable against simpler observables."),
      metricPriority: tl("Replay quality remains tied to defended compact structure.", "The expanded route still points back to the original held-out anchor."),
      avoidOverbuild: tl("Avoid many structures before one compact replay route is honest.", "Do not widen sensitivity studies before held-out truth is stable."),
    },
    {
      tier: "national",
      hardwareStack: tl("Only add broader replay or sensitivity analysis when the original compact benchmark still closes unchanged.", "Keep one fallback replay of the simplest held-out case."),
      softwareScope: tl("Sensitivity analysis and broader replay set.", "If this route overlaps parameter tasks, replay one simpler benchmark before trusting the broader model story."),
      metricPriority: tl("Model breadth remains subordinate to replay honesty.", "Compactness is still defended, not just performance."),
      avoidOverbuild: tl("Do not keep a larger model just because it passes more points if compact replay is lost.", "Do not let sensitivity plots replace held-out agreement as the core proof."),
    },
  ]),
  tierPlan("2019-g", compactTiers(["Close one weak-signal receive route and one lock definition.", "Keep one dual-channel benchmark only."], ["Add two-channel recovery and one disturbance-and-relock replay while preserving the same anchor benchmark.", "Keep one visible receive-state log through every demo."], ["Broaden channel conditions only if the original receive-and-relock benchmark still closes unchanged.", "Keep one fallback single-benchmark replay alive for defense."])),
  tierPlan("2022-07-e", compactTiers(["Close one known-point acoustic localization loop.", "Keep one fixed anchor geometry only."], ["Add one short tracking case while replaying the same known point first.", "Keep one visible raw cue path through every demo."], ["Broaden motion or area coverage only if the original known-point benchmark still closes unchanged.", "Keep one fallback known-point replay alive for defense."])),
  tierPlan("2022-07-f", compactTiers(["Close one known modulation-setting route.", "Keep one carrier-and-envelope cue path only."], ["Add more defended modulation settings while replaying the same anchor benchmark.", "Keep the same detector chain through every comparison."], ["Broaden supported conditions only if the original benchmark still closes unchanged.", "Keep one fallback modulation benchmark alive for defense."])),
  tierPlan("2022-10-e", compactTiers(["Close one local sensing benchmark first.", "Mirror only one benchmark remotely with visible identity."], ["Add one freshness or stale-data case while preserving the same local benchmark.", "Keep one local-only replay available throughout."], ["Broaden wireless behavior only if the original local-vs-remote benchmark still closes unchanged.", "Keep one fallback local benchmark alive for defense."])),
  tierPlan("2018-a", compactTiers(["Close one current benchmark and one defended sensing scale.", "Keep one fixed FFT or harmonic route only."], ["Add one harmonic or drive-level comparison while replaying the same current benchmark first.", "Keep one current amplitude reference visible in every demo."], ["Broaden harmonic or spectral conditions only if the original current benchmark still closes unchanged.", "Keep one fallback current-spectrum replay alive for defense."])),
  tierPlan("2018-f", compactTiers(["Close one wireless-speech receive route.", "Keep one RF-to-audio benchmark only."], ["Add one modest distance or gain change while replaying the same speech benchmark first.", "Keep one receive-side cue visible in every demo."], ["Broaden distance or loudness only if the original speech benchmark still closes unchanged.", "Keep one fallback RF-to-audio replay alive for defense."])),
  tierPlan("2018-g", compactTiers(["Close one known sequence capture route.", "Keep one trigger and threshold plan only."], ["Add one more channel or longer timing window while replaying the same sequence first.", "Keep one explicit transition cue visible in every demo."], ["Broaden channels or timing depth only if the original sequence benchmark still closes unchanged.", "Keep one fallback sequence replay alive for defense."])),
  tierPlan("2018-h", compactTiers(["Close one load-power benchmark and one sensing range.", "Keep one voltage-current route only."], ["Add one more operating mode or range while replaying the same benchmark load first.", "Keep one synchronous electrical-feature view visible in every demo."], ["Broaden load classes or AC/DC coverage only if the original benchmark still closes unchanged.", "Keep one fallback power benchmark alive for defense."])),
  tierPlan("2024-c", compactTiers(["Close one benchmark family route through the simulated link.", "Keep one intermediate cue path only."], ["Add one richer simulated-link case while replaying the same benchmark family first.", "Keep one bypass comparison available throughout."], ["Broaden the simulated channel only if the original family benchmark still closes unchanged.", "Keep one fallback benchmark through the simpler path alive for defense."])),
  tierPlan("2024-g", compactTiers(["Close one unshielded-vs-shielded benchmark.", "Keep one recorder or pickup witness only."], ["Add one more shielding condition while replaying the same anchor benchmark first.", "Keep the before-and-after comparison on the same witness path."], ["Broaden suppression conditions only if the original benchmark still closes unchanged.", "Keep one fallback anchor recording replay alive for defense."])),
];

export const historicalValidationPacks: HistoricalValidationPack[] = [
  validation("2001-e", ["One frozen local sample and its remote mirror.", "One local-only replay after the remote path is hidden."], ["Remote sample maps back to the right local truth.", "Delayed or stale state becomes visible instead of looking healthy.", "The same benchmark still closes locally after the remote layer is removed."], ["Packet delay.", "Packet reorder.", "Remote layer disabled after one benchmark replay."], ["Explain how the system preserves sample identity.", "If reused in a mixed task, keep one local truth benchmark available without the remote layer."]),
  validation("1995-d", ["Known resistor, capacitor, and inductance samples.", "One fixed passive-test fixture."], ["Each supported passive benchmark closes on the defended route.", "The same known part still agrees after modest range change."], ["Open lead.", "Shorted fixture.", "Weak signal on the smallest defended quantity."], ["Judge can trace each reported quantity back to one explicit measurement route."]),
  validation("1997-b", ["Known-frequency references.", "One fixed timing reference path."], ["The anchor frequency repeats stably.", "The same timing route still explains broader supported cases."], ["Weak edge input.", "Very low or high end of the defended range.", "Interrupted pulse train."], ["Judge can see which timing observable closes the frequency answer."]),
  validation("1999-b", ["Known low-frequency RMS source.", "One defended front-end gain setting per supported range."], ["The RMS benchmark repeats stably.", "The same source still agrees after range changes."], ["Offset on the input.", "Weak signal near the lower defended bound.", "Brief overload then recovery."], ["Judge can see how the effective value is tied to the capture route rather than only the display."]),
  validation("1999-c", ["Known transfer object.", "One fixed sweep source and anchor-point record."], ["The anchor point and short curve segment repeat stably.", "The broader curve still matches the anchor benchmark."], ["Anchor-point drift.", "Sweep restart after warm-up.", "Short interruption during sweep."], ["Judge can tell which point on the curve is the defended truth anchor."]),
  validation("2001-b", ["Known waveform source.", "One fixed trigger configuration and storage depth."], ["The same waveform still agrees through live capture and stored replay.", "Timing and amplitude remain consistent under the defended settings."], ["Trigger near the edge of stability.", "Storage replay after repeated captures.", "Short overload then re-capture."], ["Judge can see that storage and replay did not change the captured waveform truth."]),
  validation("2005-b", ["Known op-amp sample and one trusted reference configuration."], ["Core parameter readout repeats.", "The same benchmark device still closes after gain or fixture changes are introduced."], ["Gain setting changed.", "Another known op-amp added."], ["Explain which direct observable supports each reported parameter."]),
  validation("2005-c", ["Known single-tone and known spur or harmonic benchmark."], ["Main spectral components repeat.", "The same anchor spectrum still closes after span or display changes are added."], ["Span widened.", "Input amplitude changed."], ["Explain why the benchmark source stayed unchanged while the spectrum route expanded."]),
  validation("2007-a", ["Known audio benchmark source and one defended baseline spectrum case."], ["Audio-band metric repeats.", "The same anchor spectrum still validates the distortion story after extra analysis views are added."], ["Input level changed.", "Another display metric enabled."], ["Explain the difference between a prettier display and a more trustworthy metric."]),
  validation("2007-g", ["Known DC-voltage source and one defended integration window."], ["Voltage readout repeats on the same source.", "Zeroing and mains rejection remain stable.", "The same anchor source still closes after modest range or averaging changes."], ["Integration time changed.", "Range switched at the same source.", "Line interference increased slightly."], ["Explain which integration and zeroing choices make the number trustworthy.", "Keep one fixed DC source replayable whenever range or averaging behavior is discussed."]),
  validation("2007-c", ["Known periodic waveform set and one calibrated trigger setup."], ["Time-base and amplitude readout repeat.", "The same waveform benchmark still closes after more capture modes are added."], ["Trigger condition changed.", "Sampling rate changed."], ["Explain why the displayed waveform still points back to one trusted capture path."]),
  validation("2011-e", ["Known transfer benchmark and one repeatable response curve anchor."], ["The defended transfer metric repeats.", "The same anchor curve still supports the compact replay story after broader response coverage is added."], ["Sweep span changed.", "A second benchmark path added."], ["Explain what part of the response is measured directly and what part is only summarized compactly."]),
  validation("2011-g", ["Known resistor set and one fixed auto-range benchmark table."], ["Resistance readout repeats.", "The same known resistor table still explains range switches after wider coverage is enabled."], ["Range boundary resistor added.", "Lead resistance changes slightly."], ["Explain why auto-range decisions still point back to explicit reference-resistor evidence."]),
  validation("2011-h", ["Known waveform benchmark.", "One fixed capture-storage-playback path."], ["The captured waveform, stored trace, and playback all agree on the defended benchmark.", "Repeated replay does not change the sample identity."], ["Repeated store-and-playback cycles.", "Longer storage delay before replay.", "Re-capture after replay."], ["Judge can see that the waveform stayed the same through all three stages."]),
  validation("1994-b", ["Known multi-channel source table and one defended scan setup."], ["All defended channels repeat on the same source.", "Cross-channel scaling and timing remain consistent.", "The same source table still closes after modest scan-rate or channel-count changes."], ["More channels enabled.", "Scan rate increased modestly.", "One channel gain or offset nudged before replay."], ["Explain how one source table proves both per-channel scaling and inter-channel consistency.", "Keep one anchor cross-channel replay ready before richer logging or display."]),
  validation("2013-e", ["Known transfer object and one anchor point on the defended sweep."], ["Gain or phase curve repeats.", "The same anchor point still validates the broader response curve after modest sweep expansion."], ["Sweep span broadened.", "Frequency spacing changed."], ["Explain why the curve stays tied to one calibrated anchor point."]),
  validation("2013-f", ["Known infrared-link benchmark and one defended optical alignment."], ["Recovered output repeats on the same link.", "Receive threshold and alignment remain stable.", "The same anchor link still closes after modest distance or gain changes."], ["Distance increased slightly.", "Receiver gain or threshold changed modestly.", "Ambient light increased on the same benchmark."], ["Explain the optical receive chain before discussing louder or cleaner output.", "Keep one fixed infrared benchmark replayable across alignment or distance changes."]),
  validation("2013-k", ["Known line-state fixtures.", "One defended probing table."], ["Supported line-state labels repeat on the same fixtures.", "The measured cue remains visible before the final label."], ["Open-line style state.", "Shorted or abnormal state.", "Weak cue near the defended threshold."], ["Judge can see the cue-to-label mapping rather than only the automatic diagnosis."]),
  validation("2015-e", ["Known RF benchmark source and one defended spur or harmonic anchor case."], ["Anchor spectral component repeats.", "The same RF benchmark still validates the analyzer route after wider scan coverage is shown."], ["Span widened.", "Resolution or display density changed."], ["Explain why the judged spectrum still comes from one fixed benchmark route rather than changing analyzer settings."]),
  validation("2015-f", ["Known frequency benchmark set and one defended timing anchor."], ["Frequency readout repeats.", "The same anchor frequency still validates the route after broader range coverage is enabled."], ["Higher frequency enabled.", "Lower duty cycle case added."], ["Explain which timing observable is trusted before the final frequency result is reported."]),
  validation("2017-e", ["Known reference disturbance source."], ["Suppression before/after.", "Convergence trace repeats."], ["Reference weakened.", "Operating point changed."], ["Explain why the reference still carries useful information."]),
  validation("2017-f", ["Known AM-like benchmark waveform.", "One benchmark replayed both through the plain recognition route and through any added auxiliary stage."], ["Carrier cue and envelope cue stay consistent.", "Parameter output repeats.", "If layered into a larger chain, the same benchmark still preserves the explicit family cue before and after the auxiliary stage."], ["Carrier level changed.", "Envelope depth changed.", "Auxiliary receive or separation stage enabled on the same benchmark."], ["Explain the deterministic cue used for recognition.", "If mixed-family, point out exactly where the family cue remains measurable in the layered route."]),
  validation("2017-h", ["Known local response sweep and remote mirror.", "One local-only replay of the same sweep with the remote side hidden."], ["Remote response maps to the right local point.", "Delay or validity remains visible.", "The same sweep still closes locally after the remote layer is removed."], ["Packet delay.", "Partial data loss.", "Remote or distributed layer disabled after a benchmark replay."], ["Explain how the remote side preserves measurement identity.", "Be ready to replay the same local sweep without the remote path."]),
  validation("2017-i", ["Known point or known-distance localization fixture.", "One shared benchmark that can be shown both locally and through any supportive visual or remote layer."], ["Position repeats on the same benchmark.", "Raw ranging cue remains stable.", "If a supportive mixed-family layer exists, the same known point still closes after that layer is removed."], ["Anchor moved slightly.", "Known point changed.", "Supportive layer disabled after a mixed benchmark replay."], ["Explain how geometry calibration closes the error loop.", "If mixed-family, replay one known point with only the localization core visible."]),
  validation("2017-k", ["Known appliance or load-state benchmark set."], ["Class or state labels repeat.", "Synchronous features remain stable on repeated runs."], ["Operating point changes.", "Unsupported load case."], ["Explain which electrical feature separates the supported states."]),
  validation("2017-m", ["One constrained-path benchmark and one repeated motion replay."], ["Measured progression repeats on the same path.", "The final position or speed story still points back to the same path cue."], ["Path friction or speed changes slightly.", "A second supported path case is added."], ["Explain which physical cue anchors the motion result.", "If broader scenarios are added, keep one anchor-path replay first."]),
  validation("2019-g", ["One two-channel weak-signal benchmark and one disturbance script.", "One replay with one channel muted or separated for identity checking."], ["Both channels recover repeatably.", "Lock and relock remain visible.", "Channel identity stays stable during the defended disturbance-and-recovery case."], ["Signal weakened.", "One channel amplitude offset introduced.", "Relock after forced disturbance."], ["Explain how lock is judged on both channels.", "Judge should see receive-state evidence before trusting recovered audio."]),
  validation("2019-c", ["Known open/short/matched terminations.", "One line replayed for state first and length or richer diagnosis second."], ["State labels repeat.", "Launch shape stays stable.", "The same benchmark line still proves simple state truth before any richer cable claim is made."], ["Longer cable.", "Fixture swap.", "Length or harder fault interpretation enabled on the same reference line."], ["Explain passive-state evidence, not only waveform shape.", "If richer cable behavior is added later, replay one simple state benchmark first."]),
  validation("2019-d", ["Known R/C/L parts.", "One anchor part replayed before and after any sweep or model-adjacent expansion."], ["Per-range repeatability.", "Phase stays calibrated.", "The same anchor part still validates the simpler parameter route after the route is broadened."], ["Weak-signal case.", "Range boundary.", "Expanded sweep or replay logic enabled on the same anchor part."], ["Explain which calibration dominates accuracy.", "If the route later overlaps compact modeling, keep one direct parameter benchmark available."]),
  validation("2019-e", ["Local event source and remote log.", "One local-only replay of the same event after the remote layer is hidden."], ["Same event appears with matching identity.", "Delay remains visible.", "The same benchmark event is still visible locally after the remote path is removed."], ["Packet drop.", "Temporary disconnect.", "Remote layer disabled after a benchmark replay."], ["Explain how stale data is marked.", "If reused in a larger mixed task, point out the surviving local truth benchmark."]),
  validation("2009-d", ["One known local node benchmark and one remote monitor replay.", "One local-only replay after the remote layer is hidden."], ["Remote node data matches the same local benchmark.", "Missing or delayed node data is visible.", "The same node benchmark still closes locally without the remote layer."], ["Node delayed.", "Node temporarily lost.", "Remote monitor disabled after a benchmark replay."], ["Explain which node is the truth anchor first.", "If reused in a larger distributed task, keep one local-node replay visible."]),
  validation("2003-c", ["Known phase benchmark pair.", "Matched dual-channel path."], ["The phase benchmark repeats stably.", "The same pair still agrees after modest range changes."], ["Small phase difference near zero.", "Large phase difference near the defended edge.", "Amplitude imbalance between channels."], ["Judge can see the explicit dual-channel relation behind the phase result."]),
  validation("2003-d", ["Known logic sequence source.", "One fixed capture threshold set."], ["The same sequence replays with the correct transitions.", "Supported channels still agree on repeated capture."], ["Fast edge burst.", "Idle periods followed by transition clusters.", "Repeated capture after long storage."], ["Judge can see the captured state transitions before any higher-level interpretation."]),
  validation("2020-e", ["Low-distortion source and injected harmonic source.", "One clean-source anchor replayed before and after drive-level expansion."], ["Known harmonic is found correctly.", "THD trend is monotonic where expected.", "The clean-source anchor still validates the same harmonic-truth route after broader comparisons are enabled."], ["Drive increased.", "Front-end headroom reduced.", "Compensation-like comparison added on top of the same benchmark."], ["Explain instrument-vs-DUT distortion separation.", "If the route later supports compensation or adaptation comparisons, keep one plain distortion benchmark alive."]),
  validation("2020-g", ["Known-size object set.", "One target replayed before and after the visual output is consumed by any extra mixed-family layer."], ["Measured size repeats.", "Calibration can be re-run quickly.", "If mixed-family, the same target still validates the base camera-to-metric route independently."], ["Pose change.", "Lighting shift.", "Downstream localization or remote layer enabled on the same target."], ["Explain the valid pose range honestly.", "If mixed-family, keep the calibration target as an independent visual-measurement proof."]),
  validation("2021-a", ["Clean sine and harmonic injection source.", "One anchor replay under the final frozen FFT configuration."], ["THD repeats under fixed FFT setup.", "Harmonic order is correct.", "The same anchor case still validates the spectral route after broader source conditions are added."], ["Source frequency drifts slightly.", "Amplitude rises near clipping.", "Broader source-condition checks added without changing the FFT route."], ["Explain why the FFT route stayed fixed.", "If later compared with compensation tasks, replay one unchanged base THD benchmark first."]),
  validation("2021-d", ["Known local metric plus remote mirror.", "One frozen local calibration target or known sample that can be replayed after the remote path is disabled."], ["Remote result maps to the right local sample.", "Invalid or stale state becomes visible under a disturbed link.", "If a mixed visual or localization layer exists, it still points to the same local calibrated truth source."], ["Link jitter.", "Delayed refresh.", "Transport briefly disconnected.", "Local target updated while the remote side is still showing an older result."], ["Explain local truth before remote convenience.", "If the same route is reused in a visual-localization hybrid, explain which local calibrated observable is being preserved remotely.", "Be ready to remove the remote layer and replay the same benchmark locally."]),
  validation("2021-e", ["Known waveform-family benchmark set.", "One mixed or receive-stress benchmark when the task is not purely single-channel.", "One bypass case where the extra receive or separation layer can be disabled for comparison."], ["Family labels repeat.", "Parameter output remains consistent on supported cases.", "Intermediate recovered or conditioned signal still preserves the family cue path.", "The layered full chain agrees with the simpler benchmark path on supported cases."], ["Carrier changed.", "Symbol or envelope condition changed.", "Mixed-case interference increased.", "Auxiliary receive or separation stage enabled and then bypassed on the same benchmark."], ["Explain which measured cue made the family decision.", "If a separation stage exists, explain why it helps interpretation without becoming the main scoring story.", "Be ready to point out the exact stage where the final family evidence is still measurable."]),
  validation("2021-h", ["Known load family set."], ["Class labels repeat.", "Main confusion pair is explained."], ["Unsupported load.", "Neighboring class."], ["Explain unsupported-load handling."]),
  validation("2021-j", ["Known periodic waveform family set and one defended capture configuration."], ["Waveform labels repeat.", "Frequency or duty-cycle output repeats.", "The same benchmark family still closes after recognition coverage expands."], ["Waveform frequency changed.", "Duty cycle changed.", "Another waveform family added on the same capture path."], ["Explain which explicit capture observable supports the final waveform label and parameter result."]),
  validation("2022-07-e", ["Known-point and short-motion acoustic fixture.", "One benchmark replay with the tracking layer disabled after localization closes."], ["Known-point coordinates repeat.", "Tracking follows the same defended cue path.", "The localization core alone still closes the same point after the tracking layer is removed."], ["Background reflection increased.", "Anchor order changed.", "Tracking disabled after a benchmark replay."], ["Explain the raw acoustic cue and the anchor geometry.", "Be ready to replay the same point without the tracking layer."]),
  validation("2022-07-f", ["Known modulation-depth benchmark set.", "One anchor benchmark replayed before and after gain changes."], ["Modulation number repeats on defended settings.", "The explicit carrier-and-envelope path remains stable.", "The same anchor setting still closes after modest front-end gain change."], ["Low modulation depth.", "High modulation depth.", "Input amplitude changed within defended range."], ["Explain which cue dominates the estimate.", "Keep supported settings benchmarked rather than implied."]),
  validation("2022-10-e", ["Known local node benchmark and remote mirror.", "One local-only replay after the wireless path is hidden."], ["Remote value maps to the right local sample.", "Stale or delayed state becomes visible.", "The same benchmark still closes locally after the wireless layer is removed."], ["Packet delay.", "Temporary disconnect.", "Wireless layer disabled after a benchmark replay."], ["Explain freshness before UI convenience.", "Be ready to replay the same benchmark locally only."]),
  validation("2018-a", ["Known current benchmark source and one defended sensing scale.", "One anchor replay before and after gain or span changes."], ["Current amplitude, frequency, and main harmonic cue repeat on defended settings.", "The same current benchmark still closes after modest front-end or display changes."], ["Current amplitude reduced.", "Known harmonic injected or increased.", "Capture gain changed within defended headroom."], ["Explain how the current benchmark maps into both amplitude and harmonic claims.", "Keep the sensing scale and FFT route fixed while comparing cases."]),
  validation("2018-f", ["Known wireless-speech benchmark and one defended receive setup.", "One replay after modest gain or distance change."], ["Recovered speech remains intelligible and repeatable.", "The same benchmark still points back to the defended receive route after modest setup changes."], ["Distance increased slightly.", "Audio gain changed.", "RF tuning retouched before replay."], ["Explain the RF-to-audio chain before discussing loudness or range."]),
  validation("2018-g", ["Known digital sequence source and one fixed threshold set.", "One benchmark replay after channel or timing-window changes."], ["Captured state transitions remain correct and repeatable.", "The same anchor sequence still closes after modest capture-depth or channel expansion."], ["Burst edges.", "Idle-to-transition jump.", "Additional channel enabled on the same benchmark."], ["Explain which trigger and threshold path produced the stored timing result.", "Keep one anchor sequence available whenever richer timing views are shown."]),
  validation("2018-h", ["Known AC/DC load benchmark and one defended sensing range.", "One benchmark replay before and after mode or range changes."], ["Power or load result repeats on the defended benchmark.", "Voltage-current observables remain aligned with the final output.", "The same anchor load still closes after modest range or mode changes."], ["Low-power case.", "Mode switches between AC and DC.", "Range boundary load."], ["Explain how synchronous voltage-current observables support the final number or label.", "Keep one anchor load benchmark replayable across operating modes."]),
  validation("2024-c", ["Known benchmark family set through the simulated link.", "One bypass replay through the simpler path."], ["Family cue and final label stay aligned.", "The simulated-link route agrees with the simpler benchmark path on supported cases."], ["Channel condition changed.", "Intermediate cue weakened.", "Bypass path compared against the full simulated route."], ["Explain which observable survives the simulated channel and still closes the final family claim."]),
  validation("2024-g", ["Known unshielded-vs-shielded recording benchmark.", "One repeated replay on the same pickup or recorder path."], ["Before-and-after suppression effect repeats.", "The same benchmark still explains the shielding route after parameter retuning."], ["Pickup moved slightly.", "Target audio level changed modestly.", "Shielding parameters changed but the same benchmark witness is preserved."], ["Explain what the benchmark recorder or pickup is actually measuring, and keep it unchanged while comparing conditions."]),
  validation("2023-b", ["Known cable lengths and terminations.", "One cable replayed for simple state first and length second on the same fixture."], ["State templates stay separated.", "Length estimate repeats.", "The same benchmark cable still proves state truth before the length claim is shown."], ["Different cable type.", "Bad contact.", "Fixture stress added on the same anchor cable set."], ["Explain velocity factor calibration.", "If richer cable behavior is added, replay one simpler state benchmark first."]),
  validation("2023-c", ["Known inductors and capacitors per range.", "One anchor component replayed across active ranges before and after broader coverage is added."], ["Measurement repeats ten times.", "Range change does not jump unexpectedly.", "The same anchor parts still validate the base parameter route after richer compensation or model-adjacent expansion."], ["Very small component.", "Near-range-limit component.", "Broader part coverage enabled on top of the same anchor set."], ["Explain why one range was chosen.", "If the route later overlaps compact modeling, keep one direct anchor-component replay available."]),
  validation("2023-d", ["Supported modulation-family benchmark set.", "One benchmark replayed through both the plain cue path and any layered auxiliary stage."], ["Family decision path stays stable.", "Recovered parameters remain within defended bounds.", "Supported benchmark families agree between the plain path and the layered path."], ["Boundary-family case.", "Amplitude normalization changed.", "Auxiliary stage enabled and bypassed on the same benchmark."], ["Explain why the family label is still transparent and deterministic.", "If mixed-family, point to the same defended family cue in both the bypass and full-path replay."]),
  validation("2023-f", ["Known point and known-distance setup.", "One shared benchmark fixture that can be observed locally and through the supportive visual or remote layer."], ["Coordinate or distance output repeats.", "Anchor consistency holds.", "If a remote or visual layer exists, the same known point still maps consistently through that layer.", "The localization core can still close the same benchmark after the supportive layer is removed."], ["Reflection-rich case.", "Anchor swap.", "Remote or visual layer delayed.", "Supportive layer disabled after a mixed-family demo replay."], ["Explain how the raw ranging cue leads into the final localization result.", "If mixed-family, explain which extra layer is supportive rather than primary.", "Be ready to replay the same known point with only the localization core visible."]),
  validation("2023-h", ["Known mixed-signal fixture.", "One clean-reference capture for at least one recovered component.", "One benchmark where the same recovered output also feeds the downstream stage when the task is layered."], ["Recovered output matches expected component behavior.", "If reused downstream, the recovered output still supports the later family label or receive state claim.", "The downstream result weakens in a predictable way when the recovered component quality is intentionally degraded on the same benchmark."], ["Mixture ratio changes.", "Interference increases.", "Downstream stage added after separation.", "Recovered component compared directly against a clean-reference path."], ["Explain what output meaning is preserved.", "If mixed-family, explain what evidence survived separation.", "Be ready to separate the recovered-component proof from the downstream label or lock proof."]),
  validation("2023-j", ["Known healthy and faulted line cases."], ["Fault labels repeat across scripted runs.", "Automatic detection stays aligned with the visible line cue."], ["Repeated trigger cycles.", "Boundary fault case."], ["Explain how automatic detection avoids overclaiming uncertain states."]),
  validation("2024-b", ["Known disturbance or harmonic condition.", "One unchanged uncompensated-vs-compensated anchor replay."], ["Compensation reduces residual metric repeatably.", "Convergence survives a condition change.", "The same anchor case still explains the compensation story after broader operating-point checks are added."], ["Reference weakened.", "Operating point shifted.", "Additional operating-point cases added without changing the anchor benchmark."], ["Explain why compensation is still causal and meaningful.", "If compared with plain distortion tasks, keep one unchanged anchor compensation replay."]),
  validation("2025-a", ["Known converter-load benchmark mode and one defended synchronous sensing route."], ["Voltage-current observables repeat on the same mode.", "Energy-flow conclusion stays aligned with measured quantities.", "The same anchor mode still closes after modest load or operating-mode changes."], ["Load level changed modestly.", "Mode switched on the same fixture.", "Direction of power flow checked near a boundary case."], ["Explain how synchronous voltage-current observables support the final converter-load judgment.", "Keep one benchmark mode replayable whenever broader operating coverage is discussed."]),
  validation("2025-b", ["Known harmonic benchmark and one unchanged uncompensated-vs-compensated replay."], ["Residual metric repeats on the same benchmark.", "Compensation effect remains visible after retuning.", "The same anchor case still explains the final suppression story after broader operating-point checks are added."], ["Reference weakened.", "Controller or compensator retuned.", "One more operating condition added without changing the anchor benchmark."], ["Explain why the same harmonic benchmark is frozen before and after tuning.", "Keep one unchanged before-and-after replay available whenever wider suppression behavior is claimed."]),
  validation("2025-c", ["Known target geometry set.", "One target replayed with and without any added mixed-family support layer."], ["Measurement stays stable under pose change.", "If mixed-family, the same target still closes through the base vision chain after the extra layer is removed."], ["Angle changes.", "Distance changes.", "Supportive localization or remote layer disabled after a benchmark replay."], ["Explain geometry assumptions and failure range.", "If mixed-family, keep one local-only target replay ready for fallback defense."]),
  validation("2025-d", ["Known twisted-pair states.", "One pair replayed in healthy and faulted form before harder anomalies are added."], ["Pair-state labels repeat.", "Healthy-vs-fault distinction stays clear.", "The same pair benchmark still anchors the richer fault interpretation route."], ["Mismatch.", "Contact degradation.", "Broader anomaly set enabled on the same pair fixture."], ["Explain the pair-specific cue used in the decision.", "If richer pair anomalies are claimed, replay one simpler pair benchmark first."]),
  validation("2025-f", ["Known lock script and disturbance script."], ["True lock is repeatable.", "Relock time stays within defended bounds."], ["Weak signal.", "Sudden disturbance."], ["Explain how false lock is excluded."]),
  validation("2025-g", ["Training set and held-out set.", "One anchor held-out replay that is rerun before and after broader model studies are added."], ["Replay holds on held-out data.", "Model remains compact.", "The same anchor held-out case still validates the compact model after broader replay or sensitivity analysis is added."], ["Stimulus amplitude changed.", "Held-out case differs modestly.", "Broader replay or sensitivity analysis enabled on top of the same anchor set."], ["Explain why the chosen model class is sufficient.", "If the route overlaps parameter tasks, keep one simpler benchmark that shows what the compact model adds."]),
  validation("2025-j", ["One known-point beacon benchmark and one added supported point."], ["Known-point replay repeats.", "Anchor timing remains consistent.", "The original anchor benchmark still closes after broader point coverage is added."], ["Anchor shifted slightly.", "A farther supported point is added.", "One supportive mixed-family layer is removed after a benchmark replay."], ["Explain which beacon timing cue is primary.", "If mixed-family, replay one pure beacon-known-point case first."]),
  validation("2017-o", ["Known-speed reference fixture.", "One defended pickup route."], ["The same speed benchmark repeats stably.", "The RPM output still agrees after modest operating changes."], ["Low speed near pickup threshold.", "Higher speed near the defended edge.", "Brief interruption of the pickup signal."], ["Judge can see which pulse or timing cue closes the speed result."]),
];

export const historicalTroubleshootingPacks: HistoricalTroubleshootingPack[] = [
  troubleshooting("2001-e", ["Remote page updates but the wrong local sample is shown.", "Remote side looks healthy while link freshness is unclear."], ["Frozen local benchmark sample.", "Sequence or timestamp identity."], ["Identity is missing or not exposed.", "Stale remote data is being trusted as current."], ["Expose local sample identity first, then simplify transport until one benchmark replay closes honestly."]),
  troubleshooting("1995-d", ["Different passive types disagree badly.", "A known part only closes on one route or one range."], ["Check the fixture zero and one known-part replay.", "Check that the quantity route did not change silently between passive types."], ["Fixture parasitics or zeroing drift.", "Range growth outpaced the original benchmark calibration."], ["Return to one known part per passive type, relock the benchmark table, then widen back out slowly."]),
  troubleshooting("1997-b", ["The readout jitters or jumps between nearby values.", "Known-frequency references no longer agree."], ["Check edge shaping and the defended timing reference.", "Check that the same gate or period path is still active."], ["Noisy counting input.", "The route switched timing logic without revalidating the anchor."], ["Restore one known-frequency anchor and one timing path before expanding the range again."]),
  troubleshooting("1999-b", ["The effective-value result looks smooth but is wrong.", "Range switching changes the benchmark unexpectedly."], ["Check the low-frequency benchmark source and offset handling.", "Check that the same acquisition route is still used across the defended range."], ["Baseline offset or gain drift.", "Range logic changed faster than the RMS benchmark was replayed."], ["Return to one fixed benchmark source, relock the RMS route, then restore the extra range."]),
  troubleshooting("1999-c", ["The response curve shape looks plausible but anchor points are wrong.", "Repeated sweeps no longer overlap."], ["Check the anchor point first.", "Check that the sweep source and object connection are unchanged."], ["Anchor calibration drift.", "Sweep settings or wiring changed between runs."], ["Rebuild the anchor point and short curve segment first, then extend the sweep again."]),
  troubleshooting("2001-b", ["Stored waveforms do not match the captured signal.", "Timing or trigger behavior shifts after replay."], ["Check one benchmark waveform under the final trigger settings.", "Check that storage depth or replay mode did not alter the defended capture path."], ["Trigger path drift.", "Storage or replay settings changed without revalidating the benchmark."], ["Restore one known waveform benchmark, close live capture first, then confirm stored replay matches it."]),
  troubleshooting("2005-b", ["Parameter table looks plausible but known devices disagree.", "One parameter shifts a lot between reruns."], ["Known-device reference route.", "Direct observable repeatability."], ["Fixture bias dominates.", "Too many parameters were derived from one unstable observable."], ["Return to one known-device replay and defend one parameter route at a time."]),
  troubleshooting("2005-c", ["Spectrum looks different after every span change.", "Anchor spur or harmonic moves or fades unexpectedly."], ["Benchmark source stability.", "Fixed spectral-route settings."], ["Analyzer settings changed too much.", "The benchmark source is no longer the dominant truth signal."], ["Freeze one benchmark source and rebuild the anchor spectrum before widening span again."]),
  troubleshooting("2007-a", ["Audio metric changes while the source sounds unchanged.", "Different views imply different conclusions."], ["Anchor audio benchmark.", "Single defended metric path."], ["Extra displays outran the defended metric route.", "Input level or baseline was not frozen."], ["Return to one audio benchmark and close one metric path before restoring richer views."]),
  troubleshooting("2007-g", ["Displayed voltage looks stable but drifts over time.", "Range or averaging changes break a DC source that used to pass."], ["Known DC benchmark.", "Integration window and zeroing route."], ["Zero drift dominates the reading.", "Integration timing or mains rejection changed without replaying the anchor source."], ["Return to one defended DC source, relock the integration and zeroing path, then re-enable wider range behavior slowly."]),
  troubleshooting("2007-c", ["Displayed waveform looks stable but numbers drift.", "Trigger works once and then misses."], ["Trigger route.", "Time-base calibration."], ["Trigger conditions are too brittle.", "Sampling or timing anchor changed across demos."], ["Freeze one known waveform and re-close trigger plus time-base before widening capture modes."]),
  troubleshooting("2011-e", ["The replay story sounds good but the measured curve disagrees.", "Transfer performance shifts after widening the response span."], ["Anchor response curve.", "Measured transfer route."], ["Compact summary drifted away from the measured benchmark.", "The wider response story was added before one anchor curve was stable."], ["Return to one anchor curve and re-close the measured transfer path before the replay layer."]),
  troubleshooting("2011-g", ["Auto-range switches unpredictably.", "The same resistor picks different ranges between runs."], ["Reference-resistor table.", "Boundary-case range logic."], ["Boundary thresholds drifted.", "Automation now hides that the measurement anchor is unstable."], ["Rebuild the range-boundary resistor table before trusting the auto-range story again."]),
  troubleshooting("2011-h", ["Playback looks correct but no longer matches the captured waveform.", "Repeated store/replay cycles slowly drift."], ["Check one benchmark waveform through capture, storage, and playback in order.", "Check that the sample-identity route is unchanged across modes."], ["Storage or playback path altered the defended waveform.", "New modes were added before the original replay benchmark was relocked."], ["Return to one benchmark waveform and prove capture, storage, and playback again before restoring extra modes."]),
  troubleshooting("2013-e", ["The response curve is smooth but not repeatable.", "One anchor point passes while the surrounding sweep drifts."], ["Sweep anchor point.", "Short defended curve segment."], ["Sweep growth outran anchor calibration.", "Continuity was mistaken for truth."], ["Shrink back to one anchor point and a short curve segment, then rebuild the sweep outward."]),
  troubleshooting("2013-f", ["Recovered output is audible or visible but unstable across repeats.", "Distance or alignment changes make the benchmark link collapse."], ["One defended infrared-link benchmark.", "Optical alignment, threshold, and receive gain."], ["Receive threshold drifted or ambient light now dominates.", "The team widened distance or coding claims before replaying the original optical benchmark."], ["Return to one infrared-link benchmark, relock the optical receive chain, then widen distance or alignment slowly."]),
  troubleshooting("2013-k", ["Line-state labels bounce even though the fixture state did not change.", "The measured cue is hard to show before the diagnosis."], ["Check one supported line-state benchmark and its cue threshold first.", "Check that the same probing fixture is still in place."], ["Cue-to-label table drift.", "Automatic diagnosis grew faster than the defended probing benchmark."], ["Restore one explicit cue benchmark first, then add back the richer diagnosis logic."]),
  troubleshooting("2015-e", ["Wider scans look impressive but the anchor component no longer closes.", "RF benchmark seems to depend on current display settings."], ["RF anchor benchmark.", "Fixed scan settings around the judged component."], ["View settings changed faster than validation.", "The benchmark source or anchor component is no longer stable."], ["Restore one defended RF anchor benchmark before widening the scan again."]),
  troubleshooting("2015-f", ["Readout updates fast but anchor frequency is wrong.", "Range expansion broke the benchmark that used to pass."], ["Timing anchor.", "Known-frequency replay."], ["Display polish replaced timing truth.", "One anchor benchmark was not preserved through range growth."], ["Return to one known-frequency anchor and rebuild the timing route before the wider range."]),
  troubleshooting("1994-b", ["Different channels disagree on the same source.", "Adding channels or scan speed breaks a benchmark that used to pass."], ["One benchmark source table.", "Cross-channel gain, offset, and scan timing."], ["Channel scaling drifted.", "Scan sequencing or timing skew is now dominating the comparison."], ["Return to one defended source table, relock channel consistency, then re-enable extra channels or scan speed slowly."]),
  troubleshooting("2017-e", ["Suppression looks random.", "Convergence trace diverges."], ["Reference alignment.", "Step size bounds."], ["Reference not correlated.", "Residual metric is miscomputed."], ["Freeze to one benchmark case and retune delay first."]),
  troubleshooting("2017-f", ["Family label is unstable.", "Envelope parameter is biased."], ["Carrier estimate.", "Envelope detector scaling."], ["Envelope path saturates.", "Family boundaries are too vague."], ["Return to one known AM-like benchmark and re-lock the cue chain."]),
  troubleshooting("2017-h", ["Remote response shape looks wrong.", "Remote values lag behind the local sweep."], ["Frame identity.", "Local-vs-remote point mapping."], ["Transport drops or reorders points.", "Remote side hides stale points."], ["Expose point identity first, then simplify the remote path."]),
  troubleshooting("2017-i", ["Position output looks smooth but wrong.", "Known points map inconsistently."], ["Anchor geometry.", "Ranging-cue repeatability."], ["Baseline calibration drifted.", "The raw cue is noisier than the solver assumes."], ["Freeze to one known point and rebuild the geometry baseline first."]),
  troubleshooting("2017-k", ["Monitoring values look plausible but the label changes.", "Different runs disagree on the same appliance state."], ["Synchronous sensing baseline.", "Feature-table repeatability."], ["Operating-state features overlap too much.", "Current or phase reference drifted."], ["Shrink to the most separable load states and rebuild the feature table on known baselines."]),
  troubleshooting("2017-m", ["Motion output looks smooth but does not track the path correctly.", "The same path run gives different progress results."], ["Anchor path benchmark.", "Path-cue repeatability."], ["Path calibration drifted.", "A richer trajectory story hid that the base path cue was unstable."], ["Return to one constrained path and close the simplest progression replay before broader scenarios."]),
  troubleshooting("2019-c", ["Open and short look similar.", "Length jumps between runs."], ["Launch edge.", "Threshold stability."], ["Protection loading changed.", "Fixture or cable velocity factor drifted."], ["Return to state discrimination before length solving."]),
  troubleshooting("2019-d", ["Parameter output drifts.", "Known part reads wrong on one range."], ["Dual-channel zero and gain.", "Phase calibration."], ["Cross-channel skew.", "Wrong range gain table."], ["Freeze to one trusted frequency and one trusted range."]),
  troubleshooting("2019-e", ["Remote values lag silently.", "Packets appear reordered."], ["Sequence IDs.", "Transport buffering."], ["Remote UI hides stale frames.", "Clock identity is missing."], ["Expose timestamps first, then simplify transport path."]),
  troubleshooting("2009-d", ["Remote monitor looks busy but a node benchmark cannot be verified.", "Distributed view hides whether one node is stale or missing."], ["Local node benchmark.", "Freshness or identity marker."], ["Node identity is hidden.", "Remote aggregation looks healthy while current local truth is missing."], ["Collapse back to one defended sensing node and rebuild the local-vs-remote replay first."]),
  troubleshooting("2003-c", ["Phase result changes sign or magnitude unexpectedly.", "The same benchmark pair no longer agrees."], ["Check one known phase pair first.", "Check dual-channel delay, threshold, and amplitude balance."], ["Channel skew or mismatch dominates the answer.", "The benchmark pair changed before recalibration."], ["Relock one known phase pair, restore channel matching, then expand to other cases."]),
  troubleshooting("2003-d", ["Captured logic transitions are missing, reordered, or unstable.", "The same sequence replays differently between runs."], ["Check the benchmark sequence source first.", "Check thresholds and sample timing before looking at higher-level decoding."], ["Sampling integrity drift.", "Threshold changes or deeper capture modes hid the original benchmark."], ["Restore one known sequence replay first, then add channels or deeper memory back one step at a time."]),
  troubleshooting("2020-e", ["THD is unexpectedly high.", "Trend reverses between drive levels."], ["Clipping margin.", "Fundamental bin lock."], ["Source distortion dominates.", "FFT configuration changed."], ["Back off drive, re-run known clean sine, then restore the DUT test."]),
  troubleshooting("2020-g", ["Measured size shifts with the same target.", "Shape output jitters."], ["Camera fixation.", "Calibration target fit."], ["Lighting changed.", "Feature threshold drifted."], ["Re-run the known-size target before changing any algorithm."]),
  troubleshooting("2021-a", ["Harmonic order jumps.", "THD changes with no DUT change."], ["Window and sample count.", "Fundamental detection."], ["Leakage control weak.", "Front end clips on peaks."], ["Restore the fixed FFT route and test with one clean sine."]),
  troubleshooting("2021-d", ["Remote page looks fine but is wrong.", "Measurement delays vary wildly.", "The remote display stays believable even when the local truth source has changed or gone stale.", "A visual or localization overlay still looks coherent even after the underlying local target has drifted."], ["Local-vs-remote identity.", "Delay display.", "One frozen local truth case before transport is re-enabled.", "One replay where the supportive visual or remote layer is disabled and the local truth source is checked directly."], ["Stale cache or dropped packet.", "Local truth was never frozen.", "Visual or local calibration changed while the remote side kept showing an old but plausible value.", "The supportive overlay is being trusted before the local calibrated target is revalidated."], ["Trust the local reading first, then rebuild the remote mirror.", "If reused in a mixed visual-positioning route, re-lock one calibrated local target before debugging the transport path.", "Only re-enable the supportive layer after the same benchmark can be replayed locally with fresh identity markers."]),
  troubleshooting("2021-e", ["Recovered waveform is fine but the family label drifts.", "Parameter output changes too much between similar cases.", "A receive or separation stage makes the signal cleaner but the family cue chain becomes harder to explain.", "The full layered chain gives a different family answer than the simpler benchmark path on the same input."], ["Carrier cue extraction.", "Family-threshold table.", "One benchmark path where every intermediate stage is still interpretable.", "One bypass run with the auxiliary receive or separation stage disabled."], ["Decision depends on one fragile feature.", "Normalization or timing is inconsistent.", "A downstream receive or separation block is masking the explicit cue that originally supported the family decision.", "The auxiliary stage changes the signal shape enough that the original cue thresholds no longer mean the same thing."], ["Return to the clearest benchmark family and rebuild the cue table.", "Then reinsert the receive or separation stage one step at a time and verify the family cue survives each stage.", "If the bypass path and full path disagree, trust the path with the clearer explicit cue chain first and rebuild the layered stage around it."]),
  troubleshooting("2021-h", ["Class labels bounce between two families."], ["Feature repeatability.", "Load baseline."], ["Features overlap too much.", "One feature is operating-point sensitive."], ["Shrink the class table and defend one confusion pair."]),
  troubleshooting("2021-j", ["Waveform labels are right once and wrong the next time.", "Frequency or duty-cycle output drifts while the waveform looks unchanged."], ["Capture-path repeatability.", "Explicit time-domain observable for the final label."], ["Coverage outran calibration.", "The visual trace stayed stable while the measured observable did not."], ["Return to one benchmark waveform family and re-close the defended capture observable before widening coverage."]),
  troubleshooting("2023-b", ["Matched and bad-contact cases overlap.", "Length estimate jumps by cable type."], ["Template baseline.", "Velocity factor table."], ["Return signature under-resolved.", "Cable medium changed."], ["Keep state classification central while re-calibrating length."]),
  troubleshooting("2023-c", ["Capacitance looks plausible on one range only.", "Inductance becomes noisy at low values."], ["Gain table.", "Signal amplitude."], ["Weak-signal phase noise.", "Range leakthrough."], ["Increase SNR on the trusted range before broadening coverage."]),
  troubleshooting("2023-d", ["Family labels flip near boundary cases.", "Recovered parameter looks plausible but is not repeatable."], ["Carrier estimate and normalization.", "Decision-threshold stability."], ["Unsupported boundary cases are being overclaimed.", "Feature pipeline depends too much on one view of the signal."], ["Freeze to the most separable families and revalidate the explicit cue path."]),
  troubleshooting("2023-f", ["Coordinate output drifts with the same setup.", "Anchor swap changes the answer unexpectedly.", "Remote or visual overlays stay smooth while the underlying localization truth has already drifted.", "The supportive camera or remote layer still looks right while the raw ranging cue has already shifted."], ["Known-point benchmark.", "Timing or ranging pickoff stability.", "One benchmark where the extra remote or visual layer can be ignored and localization still closes.", "One replay where the same known point is observed with and without the supportive layer."], ["Anchor geometry is poorly conditioned.", "Reflections dominate the ranging cue.", "The supportive remote or visual layer is being trusted before the localization baseline is revalidated.", "The supportive layer is caching or smoothing a previously good result while the ranging baseline is already drifting."], ["Return to one trusted anchor geometry and one known point before expanding the scene.", "Then add the remote or visual layer back only after the same known point still closes locally.", "If the supportive layer and local core disagree, freeze the overlay and debug the raw cue path first."]),
  troubleshooting("2023-h", ["Recovered outputs are hard to name.", "Residual falls but components are unclear.", "The downstream recognition or receive result improves visually but the separated outputs no longer have benchmark meaning.", "The downstream stage still works after the recovered component visibly changes, suggesting the later stage is hiding separation weakness."], ["Benchmark mixed case.", "Output interpretation.", "One downstream stage fed from the same recovered output.", "One clean-reference comparison before the downstream stage is enabled."], ["Mixture model not explicit.", "Recovery metric is too indirect.", "The downstream stage is compensating for a weak separation result and hiding that the recovered component itself is not stable.", "The recovered output is no longer tied tightly enough to a physical component, so the later stage is effectively re-solving the problem."], ["Go back to one benchmark with known clean references.", "Re-state what each recovered output should mean before allowing any downstream recognition or receive logic to use it.", "Then weaken and restore the recovered component deliberately on the same benchmark to verify the downstream stage depends on real separation quality."]),
  troubleshooting("2023-j", ["Fault labels change between repeated runs.", "Automatic detection triggers too easily."], ["Healthy baseline and fault thresholds.", "Repeatability of the probing pulse or stimulus."], ["Fault cues overlap too much.", "Automation logic is more sensitive than the line signature."], ["Freeze to the most separable line states and retune the automatic threshold logic."]),
  troubleshooting("2024-b", ["Compensation works once and then degrades.", "Residual metric hides oscillation."], ["Reference correlation.", "Step size or controller gain."], ["Adaptive update too aggressive.", "Operating point changed beyond the defended range."], ["Freeze one operating point, stabilize convergence, then reintroduce change tests."]),
  troubleshooting("2025-a", ["Power-flow direction sounds right but the measured observables disagree.", "Mode or load changes break the benchmark converter case that used to pass."], ["One defended converter-load benchmark mode.", "Synchronous voltage-current scaling and sign convention."], ["Voltage and current observables are no longer aligned.", "Broader operating modes were added before the anchor load-test route was replayed."], ["Return to one converter-load benchmark, relock the voltage-current-to-power chain, then re-enable broader operating modes slowly."]),
  troubleshooting("2025-b", ["Waveform looks cleaner but the anchor benchmark no longer compares honestly.", "Retuning improves one case and breaks the original defended replay."], ["One frozen harmonic benchmark.", "Residual metric, reference route, and before-and-after replay."], ["The benchmark changed while tuning.", "Retuning outran the defended reference-and-residual story."], ["Return to one unchanged harmonic benchmark, relock the uncompensated-vs-compensated replay, then widen operating conditions slowly."]),
  troubleshooting("2025-c", ["Measurement breaks when the target angle changes.", "Distance output drifts after refocus."], ["Camera geometry.", "Feature repeatability."], ["Pose exceeds the calibrated region.", "Lens or focus changed the mapping."], ["Return to known-pose calibration before expanding the scene."]),
  troubleshooting("2025-d", ["Fault categories blur together.", "Healthy pair is misidentified under a new cable."], ["Baseline templates.", "Pair mapping."], ["Per-pair compensation missing.", "Fixture changes dominate."], ["Rebuild the per-pair baseline before interpreting harder faults."]),
  troubleshooting("2025-f", ["Lock indicator stays high after disturbance.", "Relock time is inconsistent."], ["State-transition logs.", "Lock criterion threshold."], ["False-lock path exists.", "Indicator filtered too heavily."], ["Simplify the lock criterion and re-measure relock on one disturbance script."]),
  troubleshooting("2025-g", ["Replay works on fit data only.", "Small model changes swing the result."], ["Held-out replay table.", "Stimulus consistency."], ["Overfit structure.", "Insufficiently rich stimulus plan."], ["Reduce model order and re-validate on held-out cases."]),
  troubleshooting("2025-j", ["Coordinates change but the known-point replay does not close.", "Broader positioning cases work once and then drift."], ["Known-point benchmark.", "Anchor timing consistency."], ["Anchor timing drifted.", "Coverage grew before the original beacon benchmark stabilized."], ["Return to one beacon-known-point replay and rebuild timing closure before wider coverage."]),
  troubleshooting("2017-o", ["RPM stays smooth but disagrees with the reference.", "Known-speed replay closes only once."], ["Check the pickup route on one known-speed benchmark first.", "Check whether the reference speed fixture changed."], ["Pickup geometry drift.", "Broader operating cases were tuned before the anchor-speed route stabilized."], ["Return to one known-speed benchmark, relock the pickup route, then widen the speed range again."]),
  troubleshooting("2019-g", ["Recovered audio sounds fine but one channel is mislabeled or unstable.", "Relock seems to work once but not repeatedly."], ["Check the lock criterion and one defended two-channel benchmark first.", "Check that the same disturbance script still produces the same state transitions."], ["Channel identity is not preserved through the receive chain.", "False lock or silent reacquisition is being mistaken for truthful recovery."], ["Return to one weak-signal benchmark, relock the receive-state story, then re-enable dual-channel narration."]),
  troubleshooting("2022-07-e", ["Tracking output stays smooth but the same known point moves unexpectedly.", "Localization only closes right after recalibration."], ["Check one known-point replay first.", "Check acoustic pickoff timing and anchor geometry before the tracking layer."], ["Raw acoustic cue is drifting or reflections dominate.", "Tracking or smoothing is hiding that the localization baseline is already wrong."], ["Return to one known point and one fixed geometry, then add tracking back only after the same point closes again."]),
  troubleshooting("2022-07-f", ["Displayed modulation depth changes with gain or offset.", "Low and high settings cannot share the same calibration."], ["Check the anchor modulation benchmark first.", "Check detector scaling and carrier reference before broader settings."], ["Envelope extraction is saturating or biased.", "The reported modulation number is not tied tightly enough to the defended observable."], ["Return to one known modulation setting, relock the cue chain, then widen the supported range slowly."]),
  troubleshooting("2022-10-e", ["Remote monitor looks current but does not match the node.", "Wireless link disturbance is invisible to the operator."], ["Check one frozen local benchmark and its remote identity first.", "Check that stale-state logic is visible under disturbed transport."], ["Node identity is hidden or cached.", "Remote polish is masking that the wireless path no longer preserves current truth."], ["Trust the local reading first, then rebuild the wireless mirror until one benchmark replay closes honestly."]),
  troubleshooting("2018-a", ["Current amplitude looks plausible but harmonics jump between runs.", "The same source gives a different spectral story after gain changes."], ["Check one known-current benchmark first.", "Check sensing scale, headroom, and the fixed FFT route before changing the display."], ["Current sensor scaling drifted.", "Front-end saturation or leakage is distorting the harmonic story."], ["Return to one current benchmark, relock the sensing scale, then widen the harmonic comparison again."]),
  troubleshooting("2018-f", ["Speech is audible but unstable across repeats.", "Range or gain changes make the same benchmark collapse."], ["Check one defended wireless-speech benchmark first.", "Check RF tuning and the audio recovery path before changing loudness settings."], ["Audio-stage polish is hiding receive-chain drift.", "The RF benchmark was not replayed after gain or distance changes."], ["Return to one speech benchmark, relock the RF-to-audio chain, then widen the setup slowly."]),
  troubleshooting("2018-g", ["Captured timing looks believable once and then drifts.", "One channel's transitions disappear or move unexpectedly."], ["Check the benchmark sequence source first.", "Check threshold, trigger, and timing route before adding more channels or depth."], ["Sampling or threshold integrity drifted.", "Analyzer features expanded before the original sequence benchmark was revalidated."], ["Restore one known sequence replay first, then add timing depth or channels back one step at a time."]),
  troubleshooting("2018-h", ["Power output is smooth but wrong.", "AC/DC or range changes break a benchmark load that used to pass."], ["Check one defended load benchmark first.", "Check synchronous voltage-current scaling before changing range logic or UI."], ["Voltage and current paths are mismatched.", "Mode or range logic grew faster than the anchor load benchmark was replayed."], ["Return to one known load, relock the voltage-current route, then re-enable the broader power cases."]),
  troubleshooting("2024-c", ["The simulated link gives plausible labels but intermediate observables do not agree.", "The simple path and simulated path disagree on the same benchmark."], ["Check one benchmark family through the simpler path first.", "Check the same intermediate cue before and after the simulated channel."], ["The simulated channel is erasing or distorting the cue path needed for the final decision.", "Family-evidence logic changed silently between the two routes."], ["Return to one benchmark family, relock the intermediate cue chain, then rebuild the simulated path around it."]),
  troubleshooting("2024-g", ["Shielding seemed effective once but the same benchmark no longer compares cleanly.", "Before-and-after recordings are no longer comparable."], ["Check the same benchmark witness first.", "Check that the pickup or recorder path did not move while tuning."], ["The witness path changed, so the comparison lost meaning.", "Suppression was tuned against a different benchmark than the one being defended."], ["Freeze one recorder or pickup route again, rebuild the unshielded-vs-shielded comparison, then restore extra tuning."]),
];

export const historicalDefensePacks: HistoricalDefensePack[] = [
  defense("2001-e", ["How do you know the remote result matches the right local sample?"], ["We freeze one local benchmark sample first, then preserve its identity by timestamp or sequence ID through the transport path."], ["Show the local sample, then its remote counterpart with matching identity."], ["The remote page usually updates quickly enough."]),
  defense("1995-d", ["How do you know the same route really measures R, C, or L correctly?", "What keeps the benchmark stable when you widen the part table?"], ["We defend one explicit route for each passive quantity and close it first on known samples.", "Range or part-set growth is only accepted after the same benchmark table still agrees."], ["Show one known passive first and explain the observable-to-quantity chain before switching to an unknown sample.", "If asked about coverage, replay the original benchmark table rather than listing more unsupported parts."], ["Do not imply broad precision if only one passive route was benchmarked.", "Do not replace the measurement story with formula recital."]),
  defense("1997-b", ["What timing observable actually produces the frequency?", "Why should we trust this readout over a faster-looking display?"], ["We map the final value to one explicit counting or period observable on a known-frequency benchmark.", "Refresh speed is subordinate to whether the defended timing route still closes the anchor."], ["Show the timing cue first, then the final frequency result.", "Replay the known-frequency anchor before talking about wider coverage."], ["Do not equate fast updates with measurement truth.", "Do not describe broad range that was never benchmarked."]),
  defense("1999-b", ["How is the effective value tied to the acquisition route?", "What happens when the range changes?"], ["We close one low-frequency RMS benchmark first and keep the same acquisition path visible through range changes.", "The range is only trusted if the same source still agrees after the switch."], ["Show the benchmark source and its defended RMS route before the readout.", "Replay the same source after a range change to prove continuity."], ["Do not treat a smooth display as proof of RMS truth.", "Do not claim meter breadth that outruns the benchmark source."]),
  defense("1999-c", ["Why should we trust this response curve?", "Which point on the curve is your truth anchor?"], ["We defend one anchor point and a short surrounding segment before widening the sweep.", "The broader curve is only accepted because it still matches that original anchor benchmark."], ["Show the anchor point first, then reveal the wider curve.", "Replay the same object and anchor after a repeated sweep."], ["Do not confuse smoothness with calibration.", "Do not describe a broad sweep before one anchor point closes."]),
  defense("2001-b", ["How do you prove storage and replay did not alter the waveform?", "What is your defended trigger route?"], ["We capture one benchmark waveform live, store it, and replay it under the same defended settings.", "The truth anchor is the original capture path, not the replay polish."], ["Show live capture first, then stored replay of the same waveform.", "If asked about modes, return to the original benchmark waveform and settings."], ["Do not let memory depth overshadow the capture proof.", "Do not call replay fidelity proven without the original benchmark waveform."]),
  defense("2005-b", ["Which observables directly support each op-amp parameter?"], ["We measure one direct electrical effect for each reported parameter and keep the inversion path compact and replayable on a known device."], ["Show one known device and the corresponding direct observable before reporting the parameter table."], ["The formula gave a number so we trusted it."]),
  defense("2005-c", ["How do you know the shown spectrum is trustworthy?"], ["We freeze one benchmark source and keep the same spectral route while changing only the judged signal condition or span."], ["Show the same benchmark source before and after any wider-span or richer-view demo."], ["The spectrum picture looked right."]),
  defense("2007-a", ["Why is this an audio-analysis result rather than just a display demo?"], ["We defend one stable audio-band metric path first, then show any extra views only if the same baseline still closes."], ["Show one benchmark audio case and the final reported metric before switching views."], ["The waveform and spectrum both looked clean."]),
  defense("2007-g", ["Why is your DC-voltage result trustworthy?", "What makes this an integration-based meter rather than just a filtered number?"], ["We defend one integration and zeroing route on a known DC source, then only broaden range or averaging behavior if the same source still closes.", "The number is accepted because mains rejection and drift control are tied back to one replayable anchor source."], ["Show the known DC source first, then the integration-based result, then one modest range or averaging change."], ["The number looked stable so the meter must be right.", "Averaging made it calm, so the integration route no longer matters."]),
  defense("2007-c", ["What makes the displayed waveform quantitatively believable?"], ["The capture path has one defended time-base and trigger route, so the shown waveform still points back to calibrated timing and amplitude observables."], ["Show one known periodic waveform and replay the same trigger configuration."], ["The curve looked stable on the screen."]),
  defense("2011-e", ["Why is this a transfer-behavior or compact-replay claim instead of only a curve display?"], ["We first close one measured transfer benchmark, then show how the same benchmark supports a compact replay story without hiding the raw response."], ["Show one anchor response curve, then the compact replay of that same benchmark."], ["The replay looked similar enough."]),
  defense("2011-g", ["How do you know the auto-range logic did not hide measurement error?"], ["Every range switch still points back to a known resistor table and one defended reference-resistor benchmark."], ["Show one known resistor near a range boundary and the resulting range decision."], ["The meter automatically picked a range, so it must be right."]),
  defense("2013-e", ["Why should judges trust this response curve?"], ["We defend one calibrated anchor point first, then show that the broader sweep stays consistent with that same anchor."], ["Show the anchor point and then replay the surrounding curve on the same route."], ["The curve was smooth, so it should be correct."]),
  defense("2013-f", ["How do you know this is a real infrared receive result rather than just amplified output?", "What benchmark proves the optical chain stayed stable?"], ["We first close one defended infrared-link benchmark from transmit path through optical receive chain, then only widen distance or alignment claims if that same link still closes.", "Recovered output is only accepted because the same optical benchmark still points back to the defended threshold and alignment route after modest setup changes."], ["Show the infrared-link benchmark first, then the recovered output, then one modest distance or alignment change."], ["Something came out so the communication must be right.", "The output looked clean enough, so the optical receive chain no longer needs explanation."]),
  defense("2015-e", ["How do you know the RF spectrum view is not just analyzer setting luck?"], ["We keep one fixed RF benchmark and only broaden the scan after the same anchor spur or harmonic case still closes unchanged."], ["Show the anchor RF benchmark before any wider-span display."], ["The broader span looked more professional."]),
  defense("2015-f", ["Why is the reported frequency tied to a trustworthy timing route?"], ["We count or time one defended periodic observable first, then widen frequency range only if the same anchor route remains stable."], ["Show one known-frequency benchmark and the direct timing observable."], ["The display refreshed quickly so the reading must be right."]),
  defense("1994-b", ["How do you know all channels are measuring truthfully rather than just displaying numbers together?", "What proves scan timing or sequencing did not break channel consistency?"], ["We first replay one known source table across all defended channels, then only expand channel count or scan speed if the same table still closes channel-to-channel.", "The multi-channel story is only accepted because scaling and timing consistency remain visible on the same benchmark source."], ["Show the same source table on all channels first.", "Then replay that same table after one modest scan-rate or channel-count change."], ["The screen showed many channels so the acquisition must be right.", "Once all channels look busy, consistency no longer needs proof."]),
  defense("2017-e", ["Why is the reference signal meaningful?", "How do you judge convergence?"], ["The reference is correlated with the interference path, and convergence is shown by the residual and coefficient evolution."], ["Run baseline, adapt, then change condition and recover."], ["We just tuned it until it looked clean."]),
  defense("2017-f", ["How do you know the signal is AM-like rather than another modulation family?"], ["We use explicit carrier and envelope cues, then verify the parameter output against a stable benchmark waveform."], ["Show the raw or filtered waveform, then the extracted carrier and envelope feature."], ["The classifier guessed the waveform family."]),
  defense("2017-h", ["How do you know the remote result still matches the local response measurement?"], ["Each response point keeps identity across the transport path, so the remote curve is verifiably reconstructed from the local measurement chain."], ["Show the local sweep first, then the corresponding remote curve."], ["The remote display looked smooth enough."]),
  defense("2017-i", ["What raw cue is measured before you solve the position?"], ["We first measure a repeatable optical or geometric cue, then solve coordinates on a calibrated baseline and verify against known points."], ["Show the raw ranging or geometry cue before the final coordinates."], ["The solver output looked right on screen."]),
  defense("2017-k", ["How is the appliance or load state recognized rather than guessed?"], ["We classify from synchronous electrical features whose margins are benchmarked on known single-phase loads or states."], ["Show the feature table and the final state decision together."], ["The monitoring page seemed reasonable."]),
  defense("2017-m", ["What physical cue is measured before you report motion or position?"], ["We first close one constrained-path benchmark and only then report motion progression or speed derived from that defended path cue."], ["Show the path cue or path progression first, then the final motion result."], ["The trajectory looked smooth on screen."]),
  defense("2019-c", ["What distinguishes open, short, and matched states physically?"], ["Each state changes the return signature in a repeatable way that we calibrate and compare against templates."], ["Show three terminations back to back."], ["The classifier just knows."]),
  defense("2019-d", ["Why can those observables solve the parameter?"], ["Amplitude ratio and phase shift map directly into the chosen model, and we verify that map on known components."], ["Show known sample before unknown sample."], ["The formula is complicated so we trust the code."]),
  defense("2019-e", ["How do you know the remote value matches the right local sample?"], ["Every transmitted sample keeps identity by timestamp or sequence ID, and delay is shown rather than hidden."], ["Trigger one local event and show its remote counterpart."], ["The remote page usually updates fast enough."]),
  defense("2009-d", ["How do you know the remote monitor is current rather than stale?"], ["We first freeze one local node benchmark, then prove the remote side preserves node identity and freshness instead of hiding delay or loss."], ["Show one local node result first, then its remote mirror and one stale-data case."], ["The remote dashboard kept changing, so it must have been current."]),
  defense("2020-e", ["How do you separate DUT distortion from measurement distortion?"], ["We first validate the instrument chain on a known clean source, then compare DUT-added harmonics under controlled drive."], ["Show clean-source baseline before DUT trend."], ["The FFT looked right."]),
  defense("2020-g", ["How are pixels converted to physical units?"], ["A calibrated geometry mapping turns stable image features into physical measurements, then we verify on known targets."], ["Overlay feature points on a known-size target."], ["The model guessed the shape."]),
  defense("2021-a", ["Why is your THD result trustworthy?"], ["The capture route is fixed, the period is locked, leakage is controlled, and harmonic bins are validated on known cases."], ["Show clean sine and injected harmonic cases."], ["We tried multiple FFT settings and picked the nicest one."]),
  defense("2021-d", ["Is the challenge sensing or remote integrity?", "How do you know the remote side is current rather than stale?", "If the task also looks visual or localization-heavy, what is the main truth source?", "If the supportive layer is removed, what still proves the core result locally?"], ["We first prove the local measurement chain, then we show how identity and delay are preserved remotely.", "The remote output is only trusted when freshness or identity is still visible, especially under disturbed transport.", "If visual or localization layers are involved, they remain subordinate to a frozen local truth benchmark.", "We can always disable the supportive layer and replay the same local calibrated benchmark to prove the core chain still stands."], ["Show local measurement first.", "Then trigger one disturbed-link or delayed-update case.", "If mixed-family, also show the local calibrated truth anchor that the remote side is mirroring.", "If challenged, hide the remote or overlay layer and replay the same known local sample immediately."], ["The website works so the data must be right.", "The remote page looked normal so the result must be current.", "The extra visual layer looked convincing so the remote result must still be valid.", "If the overlay is pretty enough, the local truth no longer matters."]),
  defense("2021-e", ["How is the waveform family identified rather than guessed?", "Why are the reported parameters believable?", "If there is a receive or separation stage, what part of the chain actually proves the family label?", "If the auxiliary stage is bypassed, does the same supported benchmark still lead to the same family conclusion?"], ["We expose explicit carrier and baseband cues, then estimate only the parameters that those cues can support repeatably.", "Any receive or separation stage is only accepted if the measured family cue is still visible and benchmarkable afterwards.", "Cleaner intermediate signals are not accepted as evidence unless they preserve the explicit cue chain that leads to the final family label.", "On defended benchmark cases, the simpler path and the layered path must agree on the family answer, otherwise the auxiliary stage is not yet trustworthy."], ["Show one benchmark family and one unknown test through the same cue path.", "If a mixed case exists, show the intermediate stage that preserves the final decision evidence.", "If receive or separation logic is present, point to the exact stage where the family evidence remains measurable.", "If challenged, replay one supported benchmark with the auxiliary stage bypassed and compare the decision path."], ["The transceiver recovered something so the family must be correct.", "The separated waveform looked cleaner so the family decision must be better.", "Any improved-looking intermediate signal is automatically valid evidence for the final label.", "If the full chain gives an answer, we no longer need to understand where the family evidence lives."]),
  defense("2021-h", ["Why these features and not more?", "If this grows into auto diagnosis, what still proves the label?"], ["We keep a compact table whose margins are visible and defend one confusion pair honestly.", "If automation is added later, we still replay one measured electrical-signature case before showing the final label."], ["Show the class table and one hard boundary case.", "Then show one signature-first replay before the automatic label appears."], ["More features always mean better classification.", "Once the system labels automatically, the underlying cue path no longer matters."]),
  defense("2021-j", ["How is the waveform family identified rather than guessed?", "Why are the frequency or duty-cycle values believable?"], ["We expose explicit time-domain observables first, then only report the waveform label and parameters those observables can support repeatably."], ["Show one benchmark waveform, the explicit capture observable, and then the final label plus parameter readout."], ["The waveform looked familiar, so we labeled it."]),
  defense("2023-b", ["How is cable length inferred?"], ["We use calibrated propagation evidence after terminal state templates are already stable."], ["Show known-length cables after state benchmarks."], ["The length is estimated by experience."]),
  defense("2023-c", ["Which calibration matters most?"], ["Range gain and phase calibration dominate, because the inversion depends on trustworthy amplitude and phase."], ["Switch ranges on one known sample and compare."], ["The solver will average it out."]),
  defense("2023-d", ["Why is the modulation-family decision trustworthy?"], ["We classify from explicit measured carrier, symbol, or envelope cues and keep the supported family set honest."], ["Show the feature path and final label together."], ["The label matched our expectation."]),
  defense("2023-f", ["How do you know the location is physically meaningful?", "If there is a remote or visual layer, why is localization still the main truth source?", "What proves that the supportive layer did not hide a drifting localization baseline?", "If the supportive layer is turned off now, what benchmark can the localization core still pass?"], ["We first verify the ranging or timing observable on known geometry, then solve the final position with calibrated anchors or baselines.", "Any remote or visual layer is only accepted after it preserves the already-validated localization truth.", "We can always fall back to a known-point local benchmark to show that the localization core remains valid without the extra layer.", "A supportive layer is only an observability or transport aid; it never becomes the sole witness of localization correctness."], ["Show known-point checks before unknown-point positioning.", "Then show the extra layer preserving the same known point.", "If challenged, remove the supportive layer and replay the same known point locally.", "If mixed-family, point out which raw cue remains visible even after the overlay is hidden."], ["The coordinate output looked smooth.", "The remote or visual page looked convincing so localization must be right.", "The extra layer was stable, so the localization core must also be stable.", "If the overlay still looks good, the raw localization cue no longer matters."]),
  defense("2023-h", ["How do you know the recovered output is a component and not an artifact?", "If the task also asks for recognition or receive proof, what exactly did separation preserve?", "How do you know the downstream stage is not compensating for a weak separation result?", "What happens to the downstream result if the recovered component is deliberately weakened on the same benchmark?"], ["We compare recovered outputs against known clean references on controlled mixtures.", "The separated output is only claimed useful downstream when its meaning stays benchmarkable and explicit.", "A downstream label or lock result is not trusted unless the same recovered output remains interpretable on the mixed benchmark set.", "If the recovered component is degraded on purpose and the downstream result barely changes, that is evidence the downstream stage was hiding separation weakness rather than proving it."], ["Show mixed and clean traces side by side.", "Then show the downstream stage using the same recovered output.", "Replay the same benchmark after changing only the mixture strength to show the downstream stage is not hiding the separation weakness.", "If challenged, bypass the downstream stage and re-explain the recovered output alone before turning it back on."], ["Residual reduction proves separation by itself.", "A cleaner-looking waveform automatically proves the next stage.", "The downstream classifier or receiver fixed everything so separation quality no longer matters.", "If the final label is stable, the recovered-component meaning can be ignored."]),
  defense("2023-j", ["How is the line fault detected automatically rather than by manual judgment?"], ["We map repeatable line-state cues into an explicit automatic decision rule and verify it on scripted healthy and faulted cases."], ["Run the same scripted cases repeatedly and keep the labels visible."], ["We can tell by looking at the waveform."]),
  defense("2024-b", ["Why is this an adaptive or compensation problem rather than fixed filtering?", "How do you know the compensation story did not silently change the benchmark?"], ["The disturbance condition changes, so the judged value comes from convergence and residual suppression under change.", "We keep one unchanged before-and-after benchmark so compensation, distortion truth, and any overlap story all point back to the same anchor case."], ["Show baseline, adapted result, and changed-condition recovery.", "Replay the same anchor uncompensated-vs-compensated case after broader tuning."], ["It looks better after tuning.", "The benchmark changed while we were optimizing, but the conclusion should still count."]),
  defense("2025-a", ["What measured evidence supports your converter-load conclusion?", "How do you know the energy-flow story did not outrun the observables?"], ["We first close one benchmark converter-load mode from synchronous voltage-current observables to the final energy-flow conclusion, then only widen operating coverage if the same benchmark still closes.", "Every broader mode claim is accepted only because the same electrical evidence chain still explains the result on the anchor case."], ["Show the voltage-current benchmark first, then the converter-load result, then one modest operating-mode change."], ["The operating mode looked reasonable so the load result must be right.", "Once the UI shows energy flow, the sensing route no longer matters."]),
  defense("2025-b", ["How do you know the compensation result is real rather than just a cleaner-looking waveform?", "What proves the benchmark stayed the same before and after tuning?"], ["We freeze one harmonic benchmark, show uncompensated and compensated results on that same case, and only widen conditions if the anchor replay still closes unchanged.", "The compensation story is accepted because reference, residual, and before-and-after comparison all point back to one unchanged benchmark."], ["Show the uncompensated anchor case first, then the compensated replay, then one modest retuning or operating-condition change on the same benchmark."], ["The waveform looked smoother so the compensation must be right.", "We tuned it on a different case, but the original benchmark should still count."]),
  defense("2025-c", ["What limits accuracy under pose change?"], ["The calibrated geometry and feature repeatability define the valid region, which we benchmark on known targets."], ["Show one known target across multiple poses."], ["The camera can see it so it is measured accurately."]),
  defense("2025-d", ["What cue identifies each pair state?", "How do you know this is passive line diagnosis rather than communication behavior?"], ["Each state changes a measurable pair response, and we compare it against a calibrated template or threshold rule.", "We keep the judged object on passive pair integrity and replay the same pair-sensitive cue before any richer Ethernet-style interpretation is mentioned."], ["Show healthy and faulty pairs on the same fixture.", "Then replay one repeated plug-cycle or mismatch case on the same pair."], ["It is obvious from the waveform.", "If the cable seemed to communicate differently, that already proves the diagnosis."]),
  defense("2025-f", ["What is true lock in your design?"], ["True lock means the defined synchronization conditions are satisfied and remain stable through the state machine, which we log during disturbance and recovery."], ["Show lock, loss, and relock with timing."], ["The recovered output looked okay."]),
  defense("2025-g", ["Why is the model compact enough?", "How is replay validated?", "If this also resembles a parameter task, what anchor keeps the model honest?"], ["We pick the smallest structure that still reproduces held-out response data, then show replay agreement on cases not used for fitting.", "If the route overlaps parameter measurement, we keep one simpler calibrated electrical-quantity anchor visible so the model claim adds replay value rather than replacing direct truth."], ["Show fit and held-out replay consecutively.", "Then point to one simpler anchor case that the model and parameter view can both explain."], ["The larger model fit better so we kept it.", "Once the replay looks good, a direct anchor quantity is no longer necessary."]),
  defense("2025-j", ["What raw cue is measured before you solve the position?"], ["We first lock one beacon-known-point timing benchmark, then solve broader coordinates only after the anchor timing route is stable and repeatable."], ["Show the known-point timing cue first, then the final coordinate result."], ["The final coordinates looked reasonable on screen."]),
  defense("2011-h", ["How do you know the stored and replayed waveform is really the captured one?", "Where is your sample-identity proof?"], ["We close one benchmark waveform through capture, storage, and playback in sequence and keep the capture path as the truth anchor.", "Any extra mode is accepted only if the same benchmark waveform still agrees after replay."], ["Show capture first, then stored trace, then playback of the same waveform.", "If challenged, return to the original benchmark waveform and replay it through all three stages."], ["Do not treat playback polish as proof of acquisition truth.", "Do not add storage features that cannot be benchmarked on the original waveform."]),
  defense("2013-k", ["What measured cue supports this line-state label?", "How do you know the diagnosis is not just a black-box threshold?"], ["We show one explicit probing cue before the final line-state label and defend it on supported benchmarks.", "The diagnosis is only accepted because the same cue-to-label table replays on the same fixtures."], ["Show the measured cue first, then the diagnosis.", "Replay one supported line-state benchmark if the judges ask about robustness."], ["Do not let the automatic label replace the measured cue.", "Do not overclaim unsupported fault states."]),
  defense("2017-o", ["What pulse or timing cue closes the RPM answer?", "How do you know the pickup route stayed honest as speed changed?"], ["We anchor the result on one known-speed benchmark and one explicit pulse or timing route.", "Broader speed claims are only accepted if the original pickup benchmark still agrees after replay."], ["Show the pickup cue first, then the RPM result.", "Replay the known-speed benchmark before discussing wider operating cases."], ["Do not present smooth RPM updates as proof of truth.", "Do not overclaim speed coverage without the anchor benchmark."]),
  defense("2003-c", ["What exact dual-channel evidence supports the phase result?", "How do you know channel mismatch is not dominating the answer?"], ["We defend one known phase benchmark pair first and keep the final phase result tied to one explicit timing or waveform difference.", "Channel matching is only trusted because the same benchmark pair still closes after replay."], ["Show the benchmark pair first, then the phase result.", "If asked about robustness, replay the same pair before discussing wider phase coverage."], ["Do not present phase as a black-box number.", "Do not hide channel matching behind later curve narration."]),
  defense("2003-d", ["How do you know the captured logic states are the real ones?", "What benchmark proves your sampling path?"], ["We replay one known logic sequence first and show that its state transitions are preserved through the defended capture path.", "Any broader channel or depth claim is only accepted if that same benchmark still closes."], ["Show the known sequence first, then the captured trace.", "Return to that same sequence whenever the judges ask about fidelity."], ["Do not let feature count replace timing truth.", "Do not call decoding correct if the base sequence capture is not defended."]),
  defense("2019-g", ["How do you know this is a true receiver result rather than just acceptable audio?", "What proves the two channels stayed distinct during disturbance and relock?"], ["We define lock explicitly, then show that both recovered outputs and the receive-state evidence remain consistent on the same weak-signal benchmark.", "Channel identity is defended by replaying the same disturbance-and-recovery script and showing the same state transitions and recovered outputs."], ["Show the lock indicator and receive-state log before the recovered audio replay.", "Then replay one disturbance-and-relock benchmark on both channels."], ["The audio sounded okay so the receiver must be right.", "One channel worked so the full system is proven."]),
  defense("2022-07-e", ["How do you know the tracked position is physically meaningful rather than just smooth?", "If tracking is turned off now, what still proves the localization core works?"], ["We first close one known-point localization loop from raw acoustic cue to coordinate, then add tracking only after the same core already repeats.", "We can disable the tracking layer and replay the same known point to show the localization core still closes."], ["Show the known-point cue and coordinate first.", "Then enable tracking on a short motion case."], ["The tracking path looked smooth so the localization must be right."]),
  defense("2022-07-f", ["Why is the reported modulation number trustworthy?", "Which measured cue actually determines the modulation estimate?"], ["We compute the reported modulation setting from explicit carrier and envelope or sideband observables and verify it on defended benchmark settings.", "The estimate is only claimed within the benchmarked conditions where the same cue path stays repeatable."], ["Show the measured cue path before the final number.", "Then replay one low and one high defended modulation benchmark."], ["The estimator gave a reasonable number.", "The waveform looked modulated enough."]),
  defense("2022-10-e", ["How do you know the remote monitor is current rather than stale?", "If the wireless layer is removed now, what still proves the measurement chain?"], ["We first prove the local measurement node, then show how identity and freshness are preserved wirelessly.", "We can disable the wireless layer and replay the same benchmark locally to prove the core chain still stands."], ["Show the local node first.", "Then show one delayed or disconnected wireless case where the remote side turns invalid visibly."], ["The remote page updated so the value must be current.", "Wireless connectivity itself proves measurement truth."]),
  defense("2018-a", ["How do you know the current amplitude and harmonics are trustworthy?", "What benchmark proves the sensing route stayed stable while the spectrum view expanded?"], ["We first close one known-current benchmark from sensing scale to spectral result, then only add richer harmonic narration if the same benchmark still agrees.", "The harmonic claim is accepted only because the same current benchmark still closes after modest gain or span changes."], ["Show the sensed-current benchmark first, then the harmonic result.", "Replay the same current benchmark after one modest gain or span change."], ["The spectrum looked right, so the current measurement must be right.", "Once the waveform looks current-like, the sensing scale no longer needs explanation."]),
  defense("2018-f", ["How do you know this is a receive result rather than just amplified audio?", "What benchmark proves the RF-to-audio chain stayed stable?"], ["We first close one wireless-speech receive benchmark, then show that the same recovered speech still points back to the defended receive-side chain after modest setup changes.", "Loudness is never treated as proof unless the same RF benchmark still replays honestly."], ["Show the receive-side cue and then the recovered speech.", "Replay the same speech benchmark after one modest gain or distance change."], ["The sound was loud enough, so the system is right.", "If speech comes out, the receive chain no longer needs explanation."]),
  defense("2018-g", ["How do you know the captured timing sequence is the real one?", "What benchmark proves your trigger and threshold path?"], ["We replay one known digital sequence first and keep the timing result tied to the defended trigger and threshold route.", "Broader channel or depth claims are only accepted if that same benchmark sequence still closes."], ["Show the known sequence first, then the captured timing trace.", "Replay the same sequence after one modest channel or timing-window change."], ["The trace looked right on screen.", "More channels mean the timing analyzer is already proven."]),
  defense("2018-h", ["Why should judges trust this power result?", "Which voltage-current evidence actually supports the final number or load conclusion?"], ["We first close one benchmark load from synchronous voltage-current observables to the final power output, then only widen modes or ranges if the same benchmark still agrees.", "The power or load claim is accepted because the same anchor load still replays honestly after modest range or AC/DC changes."], ["Show the voltage-current benchmark first, then the power result.", "Replay the same anchor load after one modest mode or range change."], ["The displayed power number looked reasonable.", "Once the result is stable on screen, the voltage-current route no longer matters."]),
  defense("2024-c", ["What exactly is being simulated, and how do you know the final family result is still trustworthy?", "If the simulated link is bypassed, does the benchmark still close through the simpler path?"], ["We keep one benchmark family route transparent through the simulated link and preserve the intermediate observable that supports the final label or parameter.", "We can compare the simulated path with a simpler bypass path on the same benchmark to show the simulation added complexity without erasing evidence."], ["Show the benchmark signal, the intermediate cue, and then the final label.", "If challenged, replay the same benchmark through the bypass path."], ["The simulated link looked realistic, so the result must be right.", "Once the final label looks plausible, the intermediate evidence no longer matters."]),
  defense("2024-g", ["How do you know the shielding effect is real rather than a changed recording condition?", "What benchmark witness stays fixed while you tune the shielding route?"], ["We keep the same recorder or pickup witness fixed, then compare unshielded and shielded cases on the same benchmark target.", "Any tuning is only accepted if the same witness path still closes the before-and-after comparison honestly."], ["Show the unshielded benchmark first.", "Then show the shielded replay on the same witness path."], ["The result sounded different so the shielding must have worked.", "We changed the setup while tuning, but the conclusion should still hold."]),
];

export const historicalBenchmarkPacks: HistoricalBenchmarkPack[] = [
  benchmark("2001-e", ["One frozen local sample with a known remote signature."], ["Identity and freshness should remain visible at all times."], ["Confirm the same local sample still maps to the remote side before demo."], ["Replay the same local-vs-remote sample after idle time and compare identity."]),
  benchmark("2005-b", ["Known op-amp sample and one defended parameter route."], ["Core parameter outputs should remain stable on repeated runs."], ["Check one known device before widening parameter coverage."], ["Repeat the same known-device test after warm-up."]),
  benchmark("2005-c", ["Known spectral benchmark source and one defended spur or harmonic anchor."], ["The same anchor spectrum should remain recognizable across repeated runs."], ["Check the anchor source before changing span or display options."], ["Replay the same benchmark spectrum after warm-up and compare the anchor component."]),
  benchmark("2007-a", ["Known audio benchmark source."], ["The same audio metric should remain stable on repeated captures."], ["Check baseline input level before the final demo."], ["Replay the same audio benchmark after idle time and compare the metric."]),
  benchmark("2007-g", ["Known DC-voltage source and one defended integration window."], ["The anchor DC source should remain stable on repeated runs and after modest averaging changes."], ["Check zeroing and the anchor source before demo."], ["Replay the same DC source after warm-up and compare both zero and final readout."]),
  benchmark("2007-c", ["Known periodic waveform and one defended trigger setup."], ["The displayed waveform and timing readout should remain stable on repeated captures."], ["Check trigger and time-base before demo."], ["Replay the same waveform after warm-up and compare timing."]),
  benchmark("2011-e", ["Known transfer benchmark and one anchor response curve."], ["The defended transfer metric should remain stable on the same benchmark."], ["Check the anchor benchmark before broader replay or fit claims."], ["Replay the same transfer benchmark after warm-up and compare the anchor curve."]),
  benchmark("2011-g", ["Known resistor set and one range-boundary resistor."], ["Resistance readings and range transitions should remain stable on repeated runs."], ["Check the boundary resistor before demo."], ["Replay the same resistor table after warm-up and compare range decisions."]),
  benchmark("1994-b", ["Known multi-channel source table and one defended scan setup."], ["The same source table should remain consistent across all defended channels.", "Cross-channel timing and scaling should stay stable after modest scan changes."], ["Replay the multi-channel source table before demo.", "Recheck channel agreement after one modest scan-rate or channel-count change."], ["Leave one same-source multi-channel replay running to expose drift.", "After warm-up, rerun the original source table before trusting broader acquisition behavior."]),
  benchmark("2013-e", ["Known transfer object and one defended sweep anchor."], ["The same anchor point and surrounding curve should remain stable."], ["Check the anchor point before widening sweep span."], ["Replay the same sweep after warm-up and compare the anchor region first."]),
  benchmark("2013-f", ["Known infrared-link benchmark and one defended receive alignment."], ["The same optical benchmark should remain repeatable across repeated runs.", "Recovered output should still point back to the defended receive chain after modest setup changes."], ["Replay the infrared benchmark before demo.", "Recheck alignment and threshold after one modest distance or gain change."], ["Leave one infrared benchmark link cycling to expose drift.", "After warm-up, rerun the original optical benchmark before trusting broader distance claims."]),
  benchmark("2015-e", ["Known RF benchmark source and one defended anchor spectral component."], ["The anchor spectrum should remain stable before wider-span claims."], ["Check the anchor component before broadening span."], ["Replay the same RF benchmark after warm-up and compare the anchor spur or harmonic."]),
  benchmark("2015-f", ["Known frequency benchmark source."], ["The anchor frequency should remain stable on repeated runs."], ["Check the timing anchor before demo."], ["Replay the same frequency benchmark after warm-up and compare the reading."]),
  benchmark("2017-e", ["Known correlated reference case.", "One anchor disturbance replayed before and after any separation- or compensation-style extension."], ["Residual should fall repeatably and convergence should remain bounded.", "The same anchor case still proves reference-driven adaptation after broader overlap stories are added."], ["Verify baseline residual and adapted residual are both logged.", "Verify the same anchor case after condition change or cross-family comparison is introduced."], ["Run repeated adaptation on the same benchmark case.", "If overlapping with separation or compensation stories, replay one pure adaptive benchmark first."]),
  benchmark("2017-f", ["Known AM-like benchmark waveform."], ["Carrier estimate and envelope parameter should repeat on the same input."], ["Check carrier and envelope paths before demo."], ["Replay the same benchmark waveform after warm-up."]),
  benchmark("2017-h", ["Known local response sweep mirrored remotely."], ["The remote curve should map point-for-point to local truth."], ["Check timestamp or sequence identity before demo."], ["Repeat the same sweep after long idle time and compare local vs remote traces."]),
  benchmark("2017-i", ["Known-point or known-distance localization fixture."], ["Known points should map back repeatably within the defended geometry setup."], ["Check anchor or baseline calibration before demo."], ["Repeat the same known-point sequence after warm-up."]),
  benchmark("2017-k", ["Known single-phase appliance or load-state set.", "One replay where the same supported case is shown as both a signature trace and a final class decision."], ["Feature values and labels should repeat on the same supported cases.", "The same anchor load still explains the class route after monitoring or auto-decision layers are added."], ["Check current-sense and phase reference before demo.", "Check one confusion pair before broadening the class list."], ["Replay the same appliance set after warm-up and compare labels.", "If later connected to automatic diagnosis, replay one compact feature-table benchmark first."]),
  benchmark("2017-m", ["One constrained-path anchor run."], ["The same path progression should remain repeatable across reruns."], ["Check the anchor path before adding broader motion cases."], ["Replay the same path after warm-up and compare progression."]),
  benchmark("2019-c", ["Known open, short, and matched fixtures."], ["State labels should not flip between repeated captures."], ["Check launch edge and threshold before demo."], ["Leave one known cable attached for periodic checks."]),
  benchmark("2019-d", ["Known R/C/L components."], ["One known component should stay within defended error across repeated runs."], ["Check zero, gain, and phase before demo."], ["Hold one known part for overnight drift checks."]),
  benchmark("2019-e", ["One local event with known remote signature."], ["Delay and identity should remain visible at all times."], ["Confirm remote log matches current local run."], ["Leave a low-rate monitor running overnight."]),
  benchmark("2009-d", ["One local sensing-node benchmark with known remote mirror."], ["Node identity and freshness should remain visible during the whole run."], ["Check one anchor node locally before trusting the remote monitor."], ["Replay the same anchor node after idle time and compare local vs remote state."]),
  benchmark("2020-e", ["Clean source and injected harmonic source."], ["THD on the clean source should remain below the team's instrument floor claim."], ["Check for clipping before every run."], ["Burn in the source and capture route together."]),
  benchmark("2020-g", ["Known-size objects and fixture distances."], ["Known-size repeats should stay inside the defended tolerance."], ["Re-check calibration target alignment."], ["Keep the camera and fixture untouched overnight."]),
  benchmark("2021-a", ["Clean sine plus one known harmonic mix."], ["Fundamental and harmonic bins must stay correctly identified."], ["Verify FFT settings are unchanged."], ["Run one automated clean-sine capture every few hours."]),
  benchmark("2021-d", ["Known local metric mirrored remotely.", "One disturbed-link replay case with a visible stale-data reaction.", "One local-only replay of the same calibrated benchmark with the remote or overlay layer disabled."], ["Remote value must map back to the right local sample.", "Freshness loss must become visible before the remote page can look normal again.", "The same benchmark still closes locally after the supportive layer is removed."], ["Check stale-data indicator.", "Check one frozen local truth sample before enabling remote updates.", "Check that the local calibrated benchmark can still be replayed without the remote mirror."], ["Monitor transport error counts overnight.", "Replay the same mirrored benchmark after long idle time and confirm freshness logic still trips correctly.", "After burn-in, disable the supportive layer once and confirm the local truth path still matches the defended benchmark."]),
  benchmark("2021-e", ["Known waveform-family benchmark set.", "One mixed or receive-stress benchmark if the route is layered with separation or receiver logic.", "One benchmark where the auxiliary stage can be bypassed and compared against the full path."], ["Family labels and parameter estimates should repeat on supported waveforms.", "The same benchmark should preserve the explicit family cue even after the extra stage is inserted.", "The simpler path and the layered path should agree on supported benchmark families."], ["Verify the cue-extraction path before demo.", "Verify the mixed or receive-stress benchmark still preserves the cue path.", "Verify the bypass and full-path comparison on at least one benchmark family."], ["Replay the same benchmark family set after warm-up.", "Repeat the same mixed-case benchmark after idle time and compare the intermediate cue trace.", "After burn-in, compare one benchmark through both the bypass route and the full layered route."]),
  benchmark("2021-h", ["Known appliance set.", "One confusion-pair replay on the same feature table.", "One signature-first replay that still precedes the final auto label if automation is added."], ["Main class labels should remain stable on repeated runs.", "The same anchor pair still validates the compact class route after monitoring or auto-labeling layers are added.", "The measured cue path should still be replayable before the final label appears."], ["Confirm confusion-pair behavior has not drifted.", "Confirm unsupported cases are not silently mapped into a supported class.", "Confirm the measured signature trace still supports the final label after UI or automation changes."], ["Repeat the same small appliance set after burn-in.", "If later connected to automatic decisions, replay one compact class benchmark before trusting the larger route.", "After any automation tweak, rerun one signature-first benchmark and compare it with the previous cue table."]),
  benchmark("2021-j", ["Known periodic waveform-family benchmark set and one defended capture route."], ["Waveform labels and defended parameters should remain stable on repeated runs."], ["Verify the capture route before broadening the family set."], ["Replay the same waveform benchmark set after warm-up and compare one anchor frequency or duty-cycle case first."]),
  benchmark("2023-b", ["Known cable lengths and states."], ["State discrimination should remain stable before trusting length."], ["Check the matched template first."], ["Leave one known cable for drift checks."]),
  benchmark("2023-c", ["Known passive set."], ["Per-range agreement should remain stable through repeated measurements."], ["Check the team's primary range before demo."], ["Repeat one known sample on every range after warm-up."]),
  benchmark("2023-d", ["Supported modulation-family benchmark set."], ["Family labels should remain stable across the benchmark library."], ["Check carrier and symbol cue paths before demo."], ["Repeat the same benchmark set after a long idle period."]),
  benchmark("2023-f", ["Known localization or ranging benchmark set.", "One mixed-family benchmark where the same known point is shown locally and through the supportive layer.", "One local-only replay of that same known point after the supportive layer is hidden or disconnected."], ["Known points or known distances should stay inside the defended tolerance.", "The supportive remote or visual layer should preserve the same known-point closure.", "The localization core alone should still close the same known point after the supportive layer is removed."], ["Check the primary anchor geometry before demo.", "Check that the supportive layer still maps to the same known point rather than a cached or stale output.", "Check one local-only replay of the same benchmark before the final demo."], ["Repeat the same benchmark sequence after thermal drift.", "Repeat the mixed-family benchmark after long idle time and verify the same known point still closes.", "After burn-in, disable the supportive layer once and confirm the core localization loop still passes the anchor benchmark."]),
  benchmark("2023-h", ["Known mixed and clean signals.", "One benchmark where the recovered output feeds the downstream recognition or receive stage.", "One benchmark where the recovered component is intentionally weakened while the downstream stage remains in place.", "One replay where the same benchmark is checked as separation-first rather than compensation-first."], ["Recovered output quality should remain comparable to earlier validated captures.", "The downstream stage should stay explainable on the same benchmark without hiding separation drift.", "When the recovered component is intentionally weakened, the downstream result should degrade in a way that still matches the separation story.", "If adaptation or compensation language is introduced, the same anchor mixture still proves named component recovery first."], ["Verify the benchmark mixture first.", "Verify the downstream stage on that same benchmark before adding new cases.", "Verify one weakened-component replay on the same benchmark.", "Verify that cross-family comparison did not erase the recovered-component meaning."], ["Run the same benchmark mixture after long idle periods.", "Replay the benchmark with the downstream stage enabled after warm-up and compare both the recovered output and the final downstream result.", "After burn-in, replay the weakened-component benchmark and confirm the downstream stage still reflects the separation change honestly.", "If cross-family overlap exists, replay one pure separation benchmark before the mixed story."]),
  benchmark("2023-j", ["Known healthy and faulted line states.", "One scripted replay where the same line cue is shown before the auto decision fires."], ["Automatic fault labels should repeat on the same script.", "The same anchor script still proves explicit line-state evidence after the automatic layer is expanded."], ["Verify healthy and main-fault templates before demo.", "Verify one threshold-triggered replay where the line cue is still visible."], ["Repeat the same detection script after burn-in.", "If later connected to monitoring or classification stories, replay one pure auto-diagnosis benchmark first."]),
  benchmark("2024-b", ["Known disturbance or harmonic condition.", "One anchor uncompensated-vs-compensated replay used unchanged through broader operating-point tests."], ["Suppression and recovery should remain repeatable at the defended operating point.", "The same anchor case still proves compensation effectiveness after adaptive or separation overlap stories are added."], ["Check baseline residual before enabling compensation.", "Check that the same anchor case still closes after operating-point expansion or cross-family comparison."], ["Leave the same operating point running to expose drift.", "If overlap with distortion or separation stories appears, replay one pure compensation benchmark first."]),
  benchmark("2025-a", ["Known converter-load benchmark mode and one defended synchronous sensing route."], ["The same benchmark mode should remain repeatable on repeated runs.", "The voltage-current-to-power conclusion should still agree after modest mode or load changes."], ["Check one anchor operating mode before demo.", "Recheck sign convention and synchronous sensing on that same mode before wider coverage."], ["Leave one benchmark converter-load mode running to expose drift.", "After warm-up, rerun the original anchor mode before trusting broader operating behavior."]),
  benchmark("2025-b", ["Known harmonic benchmark and one frozen uncompensated-vs-compensated replay."], ["The same anchor case should remain comparable before and after modest retuning.", "Residual reduction should remain repeatable on repeated runs."], ["Check the uncompensated anchor and compensated replay before demo.", "Recheck that the benchmark case itself has not changed while tuning."], ["Leave the same harmonic benchmark running to expose drift.", "After warm-up, rerun the original before-and-after replay before trusting broader compensation claims."]),
  benchmark("2025-c", ["Known targets across a small pose set."], ["Measurement should remain inside the defended tolerance over the core pose set."], ["Check the camera fixture and calibration markers."], ["Re-run the same pose set after warm-up."]),
  benchmark("2025-d", ["Known pair states and pair mappings.", "One repeated plug-cycle or mismatch replay on the same defended pair."], ["Healthy-vs-fault pair labels should remain stable.", "The same pair benchmark should still anchor richer mismatch or bad-contact interpretation after the anomaly set grows."], ["Verify pair mapping before interpreting faults.", "Verify the repeated plug-cycle case still closes on the same cue threshold or template."], ["Repeat the same pair-state set after thermal drift.", "If richer anomalies are added, rerun one simple healthy-vs-fault pair benchmark before trusting the larger diagnosis table."]),
  benchmark("2025-f", ["Known lock script."], ["Lock-state timing should stay within defended bounds."], ["Check the lock indicator against logged state transitions."], ["Repeat disturbance and relock runs after long operation."]),
  benchmark("2025-g", ["Training and held-out response sets.", "One simpler anchor benchmark that can still be explained by a direct parameter-style view."], ["Held-out replay should stay inside the defended tolerance.", "The same anchor case should still explain what the compact model adds beyond a simpler direct quantity."], ["Confirm the held-out set was not used in fitting.", "Confirm the anchor case still agrees with the simpler benchmark view after model changes."], ["Repeat replay checks after any solver change.", "If model complexity grows, rerun one anchor case that compares compact replay against the simpler baseline."]),
  benchmark("2025-j", ["One known-point beacon benchmark."], ["The same known point should remain repeatable under the defended anchor geometry."], ["Check the anchor timing benchmark before broader positioning coverage."], ["Replay the same known point after warm-up and compare the coordinate result."]),
  benchmark("1995-d", ["Known R, C, and L samples.", "One defended passive-test fixture."], ["Each supported passive benchmark should remain repeatable on the defended route.", "The same known sample should still agree after modest range change."], ["Replay one known sample per passive type before demo.", "Recheck the fixture zero before trusting broader part coverage."], ["Leave one passive benchmark cycling to expose drift.", "After warm-up, rerun the original known-part table before adding harder samples."]),
  benchmark("1997-b", ["Known-frequency references.", "One defended timing reference."], ["The anchor frequency should remain repeatable under the defended timing route.", "The same anchor should still explain broader supported cases."], ["Replay the known-frequency anchor before demo.", "Recheck the timing route after any range change."], ["Leave one anchor frequency running to expose drift.", "After warm-up, rerun the original frequency anchor before wider coverage."]),
  benchmark("1999-b", ["Known low-frequency RMS source.", "One defended source amplitude setting."], ["The RMS benchmark should stay repeatable on the defended acquisition route.", "The same source should still agree after range change."], ["Replay the RMS anchor source before demo.", "Recheck the defended range transition on that same source."], ["Leave the benchmark source running to expose drift.", "After warm-up, rerun the original low-frequency source before broader meter use."]),
  benchmark("1999-c", ["Known transfer object.", "One anchor point on the response curve."], ["The anchor point and short defended segment should remain repeatable.", "The broader curve should still agree with the original anchor."], ["Replay the anchor point before demo.", "Recheck the short defended segment after any sweep-setting change."], ["Repeat the same sweep after warm-up and compare the anchor.", "After burn-in, rerun the original object and anchor before trusting broader sweep output."]),
  benchmark("2001-b", ["Known waveform source.", "One fixed trigger and storage setting."], ["The same waveform should match in live capture and stored replay.", "Timing and amplitude should remain repeatable on the defended benchmark."], ["Replay the known waveform before demo.", "Recheck stored replay after repeated capture cycles."], ["Leave one benchmark waveform cycling through capture and replay.", "After warm-up, rerun the same waveform before trying harder cases."]),
  benchmark("2003-c", ["Known phase benchmark pair.", "Matched dual-channel setup."], ["The same phase pair should remain repeatable on the defended route.", "Phase agreement should survive modest amplitude or range variation."], ["Replay the known phase pair before demo.", "Recheck channel balance before trusting other phase cases."], ["Leave the phase pair running to expose drift.", "After warm-up, rerun the original pair before broader phase coverage."]),
  benchmark("2003-d", ["Known logic sequence source.", "One defended threshold and timing set."], ["The same logic sequence should replay with correct state transitions.", "The defended channels should still agree after repeated capture."], ["Replay the known sequence before demo.", "Recheck the captured transitions after changing depth or channels."], ["Keep one benchmark sequence cycling during burn-in.", "After warm-up, rerun the original sequence before harder digital cases."]),
  benchmark("2011-h", ["Known waveform benchmark.", "One defended capture-storage-playback chain."], ["The same waveform should match through capture, storage, and playback.", "Repeated replay should not alter the defended sample identity."], ["Replay one benchmark waveform through all three stages before demo.", "Recheck the same waveform after repeated store-and-playback cycles."], ["Keep one benchmark waveform cycling through all stages during burn-in.", "After warm-up, rerun the original waveform and compare capture, storage, and playback again."]),
  benchmark("2013-k", ["Known line-state fixtures.", "One explicit cue-to-label table."], ["Supported line-state labels should remain repeatable with visible cues.", "The same cue should still explain the final label after repeated probing."], ["Replay one supported line-state benchmark before demo.", "Recheck the cue threshold and label mapping after fixture changes."], ["Repeat the same line-state case during burn-in.", "After warm-up, rerun the original state benchmark before broader diagnosis claims."]),
  benchmark("2017-o", ["Known-speed reference.", "One defended pickup route."], ["The same known-speed benchmark should remain repeatable.", "The pickup cue should still explain the RPM result after modest operating changes."], ["Replay the known-speed benchmark before demo.", "Recheck the pickup signal after speed changes."], ["Keep one known-speed replay during burn-in.", "After warm-up, rerun the original speed benchmark before broader coverage."]),
  benchmark("2019-g", ["One defended dual-channel weak-signal receive benchmark.", "One repeatable disturbance-and-relock script."], ["Both channels should preserve identity and lock behavior on the same benchmark script."], ["Check lock indicators and recovered outputs before demo."], ["Replay the same disturbance script after warm-up and compare the two channels again."]),
  benchmark("2022-07-e", ["Known-point and short-motion acoustic benchmark set."], ["Known points should map back repeatably within the defended anchor geometry."], ["Check anchor geometry and acoustic pickoff before demo."], ["Repeat the same known-point sequence after warm-up and after disabling tracking once."]),
  benchmark("2022-07-f", ["Known modulation-depth benchmark set."], ["Reported modulation numbers should repeat on the supported settings."], ["Check detector scaling and carrier reference before demo."], ["Repeat one low and one high defended modulation setting after warm-up."]),
  benchmark("2022-10-e", ["Known local-node benchmark mirrored wirelessly.", "One local-only replay of the same benchmark."], ["Remote output should preserve sample identity and freshness on the benchmark case."], ["Check freshness markers before demo."], ["Replay the benchmark once with wireless enabled and once locally only after warm-up."]),
  benchmark("2018-a", ["Known current benchmark source and one defended sensing scale."], ["Current amplitude and main harmonic cues should remain stable on repeated runs."], ["Check sensing scale and headroom before demo."], ["Replay the same current benchmark after warm-up and after one modest gain change."]),
  benchmark("2018-f", ["Known wireless-speech benchmark.", "One defended RF-to-audio setup."], ["The same speech benchmark should replay repeatably under the defended setup."], ["Check RF tuning and the recovered-audio baseline before demo."], ["Replay the same speech benchmark after warm-up and after one modest range change."]),
  benchmark("2018-g", ["Known digital sequence source and one defended threshold set."], ["The same sequence should replay with correct state transitions under the defended capture route."], ["Replay the known sequence before demo."], ["Keep one benchmark sequence cycling during burn-in and rerun it after warm-up."]),
  benchmark("2018-h", ["Known AC/DC load benchmark and one defended sensing range."], ["The same anchor load should remain repeatable on the defended voltage-current route."], ["Check voltage-current scaling before demo."], ["Replay the same load benchmark after warm-up and after one modest mode or range change."]),
  benchmark("2024-c", ["Known benchmark family set through the simulated link.", "One bypass replay through the simpler path."], ["Final labels and intermediate cues should agree on supported benchmark cases."], ["Check the intermediate cue path before demo."], ["Replay the same benchmark set after warm-up through both the simulated and bypass path."]),
  benchmark("2024-g", ["Known unshielded-vs-shielded recording benchmark.", "One fixed recorder or pickup witness."], ["The before-and-after shielding comparison should remain repeatable on the same witness path."], ["Check the witness path before demo."], ["Replay the same shielding benchmark after warm-up without moving the witness path."]),
];

export const historicalDisambiguationPacks: HistoricalDisambiguationPack[] = [
  disambiguation("2001-e", ["Pure local sensing tasks.", "Generic networking demos."], ["The score depends on preserving measurement truth remotely.", "If the local sample identity is not part of the answer, the task may belong elsewhere."], ["Tell the story as local truth plus remote integrity.", "Show one frozen local sample before the remote copy."], ["Do not let transport polish replace measurement identity."]),
  disambiguation("1994-b", ["Single-channel meter tasks.", "Generic data-logging demos without defended inter-channel consistency."], ["The score is multi-channel acquisition truth, not just showing many traces.", "If the same source table cannot still close across channels, the route has drifted away from defended multi-channel measurement."], ["Tell the story as one source table replayed consistently across channels.", "Keep channel-consistency proof ahead of richer logging or display."], ["Do not let channel count replace cross-channel truth.", "Do not let logging polish hide scan-timing or scaling mismatch."]),
  disambiguation("2017-e", ["Signal separation tasks.", "Compensation tasks that only report before/after without a reference-driven convergence story."], ["Reference usefulness and convergence are central cues.", "If the same benchmark cannot explain why the reference matters, the task may have drifted toward compensation or generic filtering instead."], ["Tell the story as adaptation under change, not generic filtering.", "If overlap with compensation or separation exists, name the reference path before naming the cleaner output."], ["Do not claim component recovery if only residual suppression is shown.", "Do not call it adaptive filtering if the reference path is no longer central to the explanation."]),
  disambiguation("2017-f", ["Distortion-measurement tasks.", "Receiver tasks."], ["The score is waveform-family cue extraction and parameter estimation."], ["Tell the story as modulation-family recognition from explicit carrier and envelope evidence."], ["Do not overclaim broad communication capability when the task is feature identification."]),
  disambiguation("2017-h", ["Pure local frequency-response tasks.", "Generic networking tasks."], ["The score is still measurement truth carried over a remote path."], ["Tell the story as remote preservation of a measured frequency response."], ["Do not let network polish hide whether the measurement itself survived transport."]),
  disambiguation("2017-i", ["Vision-only measurement tasks.", "Generic geometry demos."], ["The score is position or ranging output tied to a calibrated geometry baseline."], ["Tell the story as localization from a physical cue, not only as a visual demo."], ["Do not claim localization if the raw ranging cue is not shown."]),
  disambiguation("2017-k", ["Adaptive filtering tasks.", "Generic power-monitoring dashboards.", "Automatic diagnosis tasks where the final label is shown without a compact feature boundary."], ["The score is feature-based load or state identification.", "If later monitoring or automatic labeling layers are added, the same class route must still be explainable from a compact feature table."], ["Tell the story as synchronous electrical-signature classification.", "Show the feature table before the monitoring page or the automatic label."], ["Do not overclaim if the load-state margin is not explicit.", "Do not let a dashboard or auto flag replace the underlying class-boundary proof."]),
  disambiguation("2017-m", ["Generic speed-display tasks.", "Broader localization tasks without a constrained path anchor."], ["The score is motion or position truth on one defended physical path.", "If the path benchmark is gone, the route has drifted away from this task's core truth."], ["Tell the story as constrained-path motion measurement.", "Keep one path anchor benchmark visible before richer scenarios."], ["Do not let smooth trajectory output replace the physical path cue."]),
  disambiguation("2019-c", ["Receiver synchronization tasks."], ["Open, short, matched, and length are passive-line cues."], ["Keep the line object central."], ["Do not overclaim relock or communication behavior."]),
  disambiguation("2019-d", ["Model-identification tasks."], ["Final answer is one electrical parameter rather than a full replay model."], ["Tell the story as parameter inversion from observables."], ["Do not claim broad system identification from one point."]),
  disambiguation("2019-e", ["Pure local sensing or pure networking tasks."], ["The score depends on preserving measurement truth remotely."], ["Tell the story as local truth plus remote integrity."], ["Do not hide remote delay or identity loss."]),
  disambiguation("2009-d", ["Generic monitoring dashboards.", "Local-only sensing tasks without remote integrity."], ["The judged challenge is remote or distributed measurement honesty, not only showing many numbers.", "If one local node benchmark cannot be replayed through the remote path, the route has drifted away from instrumentation truth."], ["Tell the story as local node truth plus remote integrity.", "Show one node locally before trusting the remote monitor."], ["Do not let dashboard activity replace freshness and identity proof."]),
  disambiguation("2020-e", ["Modulation recognition tasks."], ["The score is harmonic truthfulness, not family labeling."], ["Keep the story on nonlinear trend and THD."], ["Do not claim waveform-family recognition from the same evidence."]),
  disambiguation("2020-g", ["Target detection tasks.", "Localization tasks."], ["The score is physical measurement from calibrated images."], ["Tell the story as image geometry to metric output."], ["Do not claim full localization if only one view metric output exists."]),
  disambiguation("2021-a", ["Modulation or spectrum-display tasks."], ["THD and harmonic indexing are the true deliverables."], ["Keep the story on period-locked FFT truth."], ["Do not turn it into a generic FFT demo."]),
  disambiguation("2021-d", ["Vision-only tasks.", "Network-only tasks.", "Localization tasks where a remote mirror is only supportive.", "Mixed tasks where an attractive overlay risks hiding the local truth source."], ["Look at whether the remote path is part of the judged chain.", "If mixed-family, ask whether the local calibrated truth would still complete the answer without the remote layer.", "If disabling the supportive layer still leaves the core answer intact, the remote or overlay path is support rather than the main family."], ["Tell the story from local truth outward.", "If mixed-family, name the local truth source before naming the remote layer.", "Use the supportive layer only after the judges have already seen the local benchmark close."], ["Do not let the flashy page replace the measurement proof.", "Do not let a supportive remote mirror become the main story if the judged quantity is still local truth.", "Do not let overlay smoothness be mistaken for measurement correctness."]),
  disambiguation("2021-e", ["Receiver-only tasks.", "Signal-separation tasks.", "Hybrid tasks where lock or cleaned outputs tempt the team to skip explicit family evidence."], ["The score is waveform-family recognition with parameter output.", "If mixed-family, ask whether lock or separation are supportive stages or whether they replaced the explicit family cue path.", "If the final family answer cannot be defended after bypassing the auxiliary stage, the explicit recognition route is still incomplete."], ["Tell the story as explicit feature-based family discrimination.", "If mixed-family, narrate acquire, separate if needed, then identify and estimate.", "Name the exact stage where the family cue becomes measurable and keep that stage central."], ["Do not let recovered outputs replace the family-decision proof.", "Do not let lock success replace the explicit family label and parameter evidence.", "Do not claim a mixed-family win if the cue table disappears once the auxiliary stage is inserted."]),
  disambiguation("2021-h", ["Adaptive filtering tasks.", "Monitoring or auto-flagging tasks that hide the feature table."], ["Class label and feature boundary are the real outputs.", "If the same benchmark cannot still be explained by a compact feature table, the route has drifted away from identification."], ["Tell the story as classification from signatures.", "If extra monitoring or diagnosis layers are present, keep one compact class benchmark visible first."], ["Do not overclaim adaptation when the task is identification.", "Do not let automation replace the need to explain the class boundary."]),
  disambiguation("2023-b", ["Receiver or modulation tasks."], ["The object measured is the cable state."], ["Keep state discrimination ahead of algorithm complexity."], ["Do not explain the task as signal decoding."]),
  disambiguation("2023-c", ["Parameter tasks vs model tasks."], ["RLC output is the final goal, not a general system model."], ["Tell the story as calibrated measurement plus inversion."], ["Do not promise more model richness than the observables support."]),
  disambiguation("2023-d", ["Distortion-measurement tasks.", "Receiver tasks."], ["The score is modulation-family labeling and parameter estimation."], ["Tell the story as transparent feature-based family recognition."], ["Do not overclaim if the family boundary is not explicit."]),
  disambiguation("2023-f", ["Vision-only metric tasks.", "Generic synchronization demos.", "Remote-display tasks that only mirror localization.", "Mixed tasks where a camera or remote layer looks richer than the ranging core."], ["The score is localization or ranging truth from a calibrated physical cue.", "If mixed-family, the supportive remote or visual layer must still point back to the same known-point localization truth.", "If the same known point cannot be replayed locally after hiding the overlay, the localization core is not yet the true anchor of the answer."], ["Tell the story as ranging-first localization.", "Then say how the supportive layer preserves that localization truth.", "Make the judges see one local known-point closure before any extra layer starts to dominate the screen."], ["Do not show only final coordinates without the raw cue chain.", "Do not let a supportive layer hide whether the localization core still closes on a known point.", "Do not let transport or overlay polish be mistaken for physical localization accuracy."]),
  disambiguation("2023-h", ["Adaptive filtering tasks.", "Receiver or modulation tasks that only use a cleaned channel.", "Hybrid tasks where the final label is easier to explain than the separated component.", "Compensation tasks where suppression is visible but named recovered components are not."], ["Named recovered components matter more than convergence plots.", "If mixed-family, the downstream stage is only support unless the recovered outputs stay explicitly interpretable.", "If the downstream result can stay strong while the recovered component meaning is unclear, the task has drifted away from true separation proof.", "If the story can be told entirely as before/after suppression, it may belong closer to compensation than to separation."], ["Tell the story as component recovery from mixtures.", "Then explain what downstream stage the recovered component enables.", "Keep one benchmark where the recovered output is defensible even without the downstream recognizer or receiver.", "If compensation overlap exists, state explicitly what was recovered, not only what was reduced."], ["Do not overclaim if outputs have no clear meaning.", "Do not let downstream recognition or receive success hide that the recovered component was never benchmarked by itself.", "Do not treat any cleaned-looking channel as a recovered physical component.", "Do not present suppression-only evidence as full component recovery."]),
  disambiguation("2023-j", ["Receiver or protocol tasks.", "Generic automation demos.", "Monitoring or classification tasks where the line cue is hidden behind the auto label."], ["The measured object is still the line fault state.", "If the automatic decision cannot be replayed from visible line-state cues, the route has drifted toward opaque automation rather than instrumentation."], ["Tell the story as automatic line-state diagnosis from repeatable probing.", "Show one scripted line cue before the automatic label appears."], ["Do not overclaim protocol functionality when only line-fault cues are measured.", "Do not let automation polish replace line-state explainability."]),
  disambiguation("2024-b", ["Distortion-measurement tasks.", "Adaptive filtering tasks where a meaningful reference-driven convergence story dominates."], ["This task is about compensation under changing conditions, not only measuring harmonics.", "If the same benchmark can only be explained through reference-driven convergence, it may have drifted back toward adaptive filtering rather than pure compensation."], ["Tell the story as adaptive or controlled suppression with recovery.", "If overlap exists, explain the anchor uncompensated-vs-compensated benchmark before broader adaptation claims."], ["Do not present a fixed filter as if it solved adaptation.", "Do not let harmonic reduction alone hide whether compensation remains causal and benchmarked."]),
  disambiguation("2025-a", ["Generic power-monitoring dashboards.", "Load-identification tasks where the final label outruns measured energy-flow evidence."], ["The score is converter-load test truth from synchronous electrical observables.", "If the same benchmark mode can no longer explain the final result from voltage-current evidence, the route has drifted away from defended load testing."], ["Tell the story as synchronous observables into converter-load conclusion.", "Keep one benchmark operating mode visible before broader mode narration."], ["Do not let mode richness replace the voltage-current evidence chain.", "Do not let a polished energy-flow UI replace the anchor load-test replay."]),
  disambiguation("2025-b", ["Pure distortion-measurement tasks.", "Adaptive filtering tasks where the reference-convergence story is stronger than the fixed before-and-after benchmark."], ["The score is single-phase compensation truth on one frozen harmonic benchmark.", "If the same anchor case is not kept unchanged before and after tuning, the route has drifted away from defendable compensation proof."], ["Tell the story as unchanged benchmark plus before-and-after compensation evidence.", "Keep one frozen harmonic case visible before broader adaptation or spectrum narration."], ["Do not let a cleaner-looking waveform replace the unchanged benchmark replay.", "Do not redefine the anchor case while claiming better compensation."]),
  disambiguation("2025-c", ["Vision-only detection tasks.", "Localization tasks."], ["The score is still physical measurement from calibrated visuals."], ["Keep the calibrated measurement chain visible."], ["Do not let detection quality overshadow metric truth."]),
  disambiguation("2025-d", ["Communication-protocol tasks."], ["The judged object is line state and pair integrity."], ["Tell the story as passive-line diagnosis."], ["Do not overclaim full communication functionality."]),
  disambiguation("2025-f", ["General signal-cleaning tasks."], ["The score is lock-state truth and relock behavior."], ["Keep the state machine central."], ["Do not use a clean waveform as sole proof."]),
  disambiguation("2025-g", ["Parameter tasks."], ["The score is model structure and replay agreement."], ["Tell the story as compact identification with held-out replay."], ["Do not overfit one operating point and call it a model."]),
  disambiguation("2025-j", ["Generic ranging demos.", "Remote or visual overlays that hide the beacon anchor truth."], ["The score is still beacon-based localization tied to anchor timing and known-point closure.", "If the known-point replay disappears, the route has drifted away from defendable localization truth."], ["Tell the story as anchor-first beacon localization.", "Show the known-point replay before broader coverage or overlays."], ["Do not let broader positioning visuals replace the anchor benchmark."]),
  disambiguation("1995-d", ["Generic analog labs.", "Model-identification tasks."], ["The score is direct passive-parameter truth from a compact route, not a broader replay model."], ["Tell the story as defended passive-quantity measurement from known observables."], ["Do not overclaim system identification or unsupported passive coverage."]),
  disambiguation("1997-b", ["Waveform-display tasks.", "Generic timing demos."], ["The score is frequency from a defended timing route, not simply showing pulses or a fast display."], ["Tell the story as timing-derived frequency truth."], ["Do not equate refresh rate with measurement fidelity."]),
  disambiguation("1999-b", ["Generic multimeter dashboards.", "Low-frequency waveform-display tasks."], ["The score is defended effective-value truth from the acquisition chain."], ["Tell the story as low-frequency RMS measurement from explicit observables."], ["Do not let a smooth display replace the defended RMS route."]),
  disambiguation("1999-c", ["Model-identification tasks.", "Pure spectrum-display tasks."], ["The score is a defended response curve anchored by calibrated sweep observables."], ["Tell the story as anchor-first response measurement."], ["Do not treat a smooth curve as if it were already a model or a validated spectrum story."]),
  disambiguation("2001-b", ["Pretty display or replay demos.", "Logic-analyzer tasks."], ["The score is defended waveform capture and storage truth from one acquisition path."], ["Tell the story as capture-storage fidelity on a benchmark waveform."], ["Do not let storage depth or display polish replace capture integrity."]),
  disambiguation("2003-c", ["Simple timing demos.", "Broad model-identification tasks."], ["The score is defended phase measurement from explicit dual-path evidence."], ["Tell the story as dual-channel phase truth tied to one timing or waveform difference."], ["Do not present the phase result as a black-box number or as a broad system model."]),
  disambiguation("2003-d", ["Oscilloscope-style analog capture tasks.", "Protocol decoding demos."], ["The score is digital timing and logic-state truth from one defended capture route."], ["Tell the story as state-transition capture before any richer interpretation."], ["Do not let decoding or display polish replace the defended digital capture benchmark."]),
  disambiguation("2005-b", ["Generic analog-evaluation demos.", "Auto-range resistance tasks."], ["The score is compact op-amp parameter truth from calibrated observables."], ["Tell the story as observable-to-parameter extraction on a known device benchmark."], ["Do not replace the defended route with a long list of loosely derived parameters."]),
  disambiguation("2005-c", ["Generic FFT display demos.", "THD tasks where harmonic indexing is the final deliverable."], ["The score is defended spectrum observation around benchmark components."], ["Tell the story as fixed-benchmark spectrum measurement."], ["Do not let span changes or a pretty plot replace the defended spectral anchor."]),
  disambiguation("2007-a", ["Generic audio-visualization demos.", "Pure THD tasks with a stronger harmonic-deliverable focus."], ["The score is audio-band metric truth from a defended capture route."], ["Tell the story as one explicit audio metric path tied to a benchmark source."], ["Do not let multiple audio views replace the defended benchmark metric."]),
  disambiguation("2007-g", ["Generic panel-meter demos.", "Broader DC-parameter tasks where integration and zeroing are not central."], ["The score is defended DC-voltage truth from an explicit integration route.", "If the same anchor source cannot still explain the readout after range changes, the route has drifted away from honest integrating-meter behavior."], ["Tell the story as integration-based DC measurement with explicit zeroing and timing.", "Keep one known DC source visible before talking about wider meter behavior."], ["Do not let a stable number replace the defended integration route.", "Do not let averaging or auto-range hide whether the anchor source still closes."]),
  disambiguation("2007-c", ["Storage-replay tasks.", "Logic-analyzer tasks."], ["The score is calibrated waveform capture with explicit timing and amplitude observability."], ["Tell the story as defended oscilloscope-style capture truth."], ["Do not let display polish or extra modes replace the benchmark waveform proof."]),
  disambiguation("2011-e", ["Parameter-inversion tasks.", "Pure response-curve measurement tasks."], ["The score is compact replay of transfer behavior anchored to one measured benchmark."], ["Tell the story as measured transfer first, compact replay second."], ["Do not let a lighter summary outrun the measured transfer anchor."]),
  disambiguation("2011-g", ["Generic ohmmeter demos.", "Broader electrical-parameter tasks without auto-range reasoning."], ["The score is resistance truth plus explicit range-decision honesty."], ["Tell the story as direct measurement anchored by a known resistor table."], ["Do not let automation hide the measurement anchor."]),
  disambiguation("2011-h", ["Pure oscilloscope tasks.", "Signal-generator playback demos."], ["The score is defended capture-storage-playback identity on one waveform route."], ["Tell the story as waveform truth preserved through all three stages."], ["Do not let playback polish replace acquisition truth."]),
  disambiguation("2013-e", ["Model-identification tasks.", "Generic sweep demos."], ["The score is calibrated response measurement anchored by one defended sweep point or segment."], ["Tell the story as anchor-first response measurement."], ["Do not let a long curve or structure story hide that the anchor benchmark was never closed."]),
  disambiguation("2013-f", ["Generic audio-amplifier demos.", "Pure synchronization receivers where lock-state proof dominates."], ["The score is defended infrared optical-link truth from a transmit-receive chain.", "If the same optical benchmark cannot still close after modest setup changes, the route has drifted away from honest receive proof."], ["Tell the story as optical-link receive proof from infrared path to recovered output.", "Keep one benchmark link visible before wider range or coding narration."], ["Do not let loudness or a clean output replace the optical receive-chain evidence.", "Do not overclaim communication breadth if the anchor link is not stable."]),
  disambiguation("2013-k", ["Generic automatic-diagnosis demos.", "Richer cable-fault tasks with length as the main object."], ["The score is line-state explainability from explicit probing cues."], ["Tell the story as probe-first line-state diagnosis."], ["Do not let the automatic label replace the measured cue."]),
  disambiguation("2015-e", ["Generic RF display demos.", "Audio-band spectrum tasks."], ["The score is defended RF spectral evidence under fixed benchmark conditions."], ["Tell the story as fixed-benchmark RF spectrum measurement."], ["Do not let wider scan coverage replace the spectral anchor."]),
  disambiguation("2015-f", ["Generic waveform counters.", "Oscilloscope capture tasks."], ["The score is frequency truth from one explicit timing route."], ["Tell the story as timing-derived frequency measurement."], ["Do not let fast refresh or broader waveform narration replace the defended timing anchor."]),
  disambiguation("2017-o", ["Generic motor-control demos.", "Broader localization tasks."], ["The score is rotational-speed truth from one defended pulse or timing observable."], ["Tell the story as timing-based speed measurement."], ["Do not let smooth RPM output replace the anchor-speed benchmark."]),
  disambiguation("2021-j", ["Oscilloscope-style display tasks.", "Generic parameter counters."], ["The score is waveform-family and parameter truth from explicit time-domain observables."], ["Tell the story as benchmark waveform recognition tied to defended cues."], ["Do not let extra waveform classes replace the defended benchmark cue path."]),
  disambiguation("2019-g", ["Generic audio playback demos.", "Pure modulation-recognition tasks."], ["The score is receive-chain truth, lock behavior, and channel identity under weak or disturbed input."], ["Tell the story as receiver synchronization and recovery proof, not merely as audio output."], ["Do not let acceptable audio replace lock-state evidence."]),
  disambiguation("2022-07-e", ["Generic tracking demos.", "Remote or visual overlays that only mirror localization."], ["The score is localization truth from defended acoustic cues and calibrated geometry."], ["Tell the story as known-point-first acoustic localization, then tracking."], ["Do not let smooth tracking replace the raw localization benchmark."]),
  disambiguation("2022-07-f", ["Distortion-measurement tasks.", "Generic receiver tasks."], ["The score is modulation-parameter truth from explicit carrier and envelope or sideband cues."], ["Tell the story as measured modulation-index estimation."], ["Do not overclaim family breadth if only one parameter route is defended."]),
  disambiguation("2022-10-e", ["Dashboard or IoT demos.", "Localization or visual tasks where the network only mirrors the core measurement."], ["The score is whether wireless transport preserves measurement truth, freshness, and identity honestly."], ["Tell the story as local-truth-first wireless monitoring."], ["Do not let a polished remote page replace a defendable local benchmark."]),
  disambiguation("2018-a", ["Generic oscilloscope or waveform-display demos.", "Modulation-recognition tasks."], ["The score is current amplitude, frequency, and harmonic truth from a defended sensing chain."], ["Tell the story as current-spectrum measurement from explicit sensing observables."], ["Do not let a pretty spectrum replace the current-sensing benchmark."]),
  disambiguation("2018-f", ["Generic audio amplifier demos.", "Pure communication receiver tasks with a stronger lock-state requirement."], ["The score is still defendable wireless-audio reception, not only loudness or a generic amplifier story."], ["Tell the story as RF-to-audio receive proof."], ["Do not let volume replace receive-chain evidence."]),
  disambiguation("2018-g", ["Generic oscilloscope traces.", "Higher-level digital decoding demos."], ["The score is explicit digital timing and state-transition truth from a defended capture path."], ["Tell the story as trigger-first digital timing analysis."], ["Do not let channel count or display density replace the benchmark sequence proof."]),
  disambiguation("2018-h", ["Generic power-monitoring dashboards.", "Pure parameter meters without load-feature reasoning."], ["The score is defended voltage-current based power or load truth.", "If the same benchmark load cannot still explain the final output, the route has drifted away from instrumentation honesty."], ["Tell the story as synchronous electrical-feature measurement into power output.", "Keep one anchor load benchmark visible before broader monitoring or UI narration."], ["Do not let a smooth number or dashboard replace the voltage-current route."]),
  disambiguation("2024-c", ["Pure receiver-lock tasks.", "Pure separation tasks where the final score is recovered components rather than family evidence."], ["The score is transparent mixed transmission or modulation evidence preserved through a simulated wireless chain."], ["Tell the story as simulation-backed family recognition with visible intermediate cues."], ["Do not let the simulated channel become a black box."]),
  disambiguation("2024-g", ["Generic audio effects demos.", "Pure separation tasks where named recovered components matter more than suppression."], ["The score is benchmarked suppression or shielding effect on a fixed witness path."], ["Tell the story as measurable recording shielding or masking."], ["Do not let a changed recording condition replace a defendable before-and-after benchmark."]),
];

export const historicalTransferPacks: HistoricalTransferPack[] = [
  transfer("2001-e", ["Remote acquisition and transmission projects."], ["Identity-preserving framing.", "Local-vs-remote benchmark replay."], ["Adding remote UI polish before one local sample is frozen."], ["Prove one local sample on both ends first."]),
  transfer("1994-b", ["Multi-channel acquisition, scanning instrumentation, or synchronized logging projects."], ["Known source table replay.", "Per-channel scaling checks.", "Scan-timing consistency."], ["Adding more channels or logging polish before one same-source benchmark still agrees across channels."], ["Replay one defended source table on every active channel before widening scan behavior or channel count."]),
  transfer("2005-b", ["Analog-parameter measurement labs.", "Direct electrical-quantity routes that later grow toward auto calibration."], ["Known-reference comparison.", "Compact parameter table."], ["Deriving too many parameters before one anchor route is stable."], ["Reconfirm one known device on the new bench before expanding the parameter list."]),
  transfer("2005-c", ["Spectrum-display or harmonic-analysis labs."], ["Stable spectral benchmark.", "Fixed frequency-domain route."], ["Changing display or window settings before one benchmark is frozen."], ["Replay one known spectral benchmark before trusting wider-span behavior."]),
  transfer("2007-a", ["Audio analysis or low-frequency spectrum labs."], ["Audio-band benchmark source.", "Stable metric route."], ["Adding multiple views before one metric path is defended."], ["Re-run one known audio benchmark before extending analysis modes."]),
  transfer("2007-g", ["DC meter, integrating-converter, or low-noise voltage-measurement projects."], ["Known DC benchmark.", "Integration window and zeroing path."], ["Growing range or averaging behavior before one anchor source is replayed."], ["Replay one known DC source before widening meter behavior or changing integration timing."]),
  transfer("2007-c", ["Waveform-capture or timing-measurement projects."], ["Trigger discipline.", "Time-base calibration."], ["Expanding capture modes before one waveform benchmark is stable."], ["Replay one known periodic waveform before trusting wider capture coverage."]),
  transfer("2011-e", ["Transfer-behavior or compact-response-characterization tasks."], ["Anchor response curve.", "Compact replay story tied to measured behavior."], ["Letting a compact explanation drift away from one measured benchmark."], ["Re-establish one anchor response curve before broadening replay or fit claims."]),
  transfer("2011-g", ["Resistance-meter or auto-range parameter projects."], ["Known resistor table.", "Boundary-case range logic."], ["Letting auto-range decisions hide the measurement anchor."], ["Replay one reference-resistor table before widening the supported range."]),
  transfer("2013-e", ["Sweep-based parameter or response-curve tasks.", "Compact-model routes that still need one measured anchor curve."], ["Sweep anchor point.", "Response-curve repeatability."], ["Widening the sweep before one anchor point is defended."], ["Reconfirm one anchor point and the surrounding short curve before trusting the broader sweep."]),
  transfer("2013-f", ["Infrared receive, short-range optical communication, or optical-link measurement projects."], ["Optical alignment routine.", "Receive-threshold path.", "One replayable benchmark link."], ["Treating output loudness or brightness as proof of receive truth.", "Growing distance or coding richness before the anchor optical benchmark is replayed."], ["Replay one defended infrared-link benchmark before widening distance, alignment, or coding claims."]),
  transfer("2015-e", ["RF spectrum or spur-analysis labs."], ["RF anchor benchmark.", "Stable scan settings around one judged component."], ["Changing analyzer settings faster than the benchmark is replayed."], ["Replay one defended RF benchmark before trusting wider scan coverage."]),
  transfer("2015-f", ["Counter, timing, or periodic-parameter projects."], ["Timing anchor.", "Known-frequency benchmark."], ["Treating a fast display refresh as proof of timing truth."], ["Replay one known-frequency anchor before widening range or adding waveform classes."]),
  transfer("2017-e", ["Adaptive-noise-cancellation style labs.", "Compensation or mixture-suppression tasks that still need a meaningful reference story."], ["Dual-channel capture.", "Convergence plotting.", "One unchanged benchmark that proves reference usefulness."], ["Blindly scaling step size without reference checks.", "Porting suppression logic into a new task without checking whether the reference still explains the result."], ["Verify reference correlation before porting logic.", "If the new task also mentions separation or compensation, replay one pure adaptive benchmark before trusting the overlap."]),
  transfer("2017-f", ["AM or envelope-analysis labs."], ["Carrier-estimation path.", "Envelope feature extraction."], ["Guessing families without explicit cues."], ["Replay one known AM-like benchmark before adding new families."]),
  transfer("2017-h", ["Remote instrumentation or remote sweep projects."], ["Local-vs-remote comparison.", "Identity-preserving framing."], ["Prioritizing dashboard polish before measurement integrity."], ["Match one remote response curve to one local sweep first."]),
  transfer("2017-i", ["Localization or ranging labs."], ["Known-point benchmarks.", "Geometry baseline calibration."], ["Showing coordinates before validating the ranging cue."], ["Re-run a known point before expanding the operating area."]),
  transfer("2019-g", ["Receiver or weak-signal synchronization projects.", "Mixed receive-and-recognition chains that still need an honest lock story."], ["Lock criterion.", "Disturbance-and-relock script.", "Channel-identity replay."], ["Using output quality as lock proof.", "Porting richer recognition logic before the base receive benchmark still closes."], ["Replay one weak-signal receive benchmark before adding more channel logic or recognition layers."]),
  transfer("2017-k", ["Single-phase load monitoring or NILM-style labs.", "Automatic diagnosis tasks that still rely on a compact electrical feature table."], ["Synchronous feature capture.", "Compact feature-table logic.", "One replay where the same signature trace and final label appear together."], ["Adding too many appliance states too early.", "Porting a monitoring UI before the class boundary is still explainable."], ["Revalidate the smallest supported load set before extending the class table.", "If the new task adds automatic labels, replay one compact feature-table benchmark first."]),
  transfer("2017-m", ["Constrained-path motion or position tasks."], ["Physical path benchmark.", "Progression-to-result mapping."], ["Adding scenario richness before one anchor path closes."], ["Replay one defended path benchmark before widening scenarios."]),
  transfer("2019-c", ["TDR-style line tests."], ["Launch/capture fixtures.", "State templates."], ["Overcomplicating length solving before state is stable."], ["Rebuild open/short benchmarks first."]),
  transfer("2019-d", ["Impedance measurement labs."], ["Known excitation and phase extraction."], ["Dense sweep fitting before one point is stable."], ["Re-confirm a single known passive on the new hardware."]),
  transfer("2019-e", ["Remote sensor-node projects."], ["Timestamped framing.", "Local-vs-remote consistency view."], ["Adding UI complexity before identity tracking."], ["Prove one event on both ends first."]),
  transfer("2009-d", ["Distributed monitoring or remote sensor-node projects."], ["Local node truth benchmark.", "Freshness-aware remote replay."], ["Growing dashboards before one node benchmark stays honest remotely."], ["Reconfirm one local node benchmark before trusting the distributed view."]),
  transfer("2020-e", ["Spectrum-analysis or THD labs."], ["Stable FFT route.", "Harmonic indexing."], ["Changing FFT settings midstream."], ["Re-run a clean sine and a known harmonic case first."]),
  transfer("2020-g", ["Camera calibration and measurement tasks."], ["Known-size fixtures.", "Geometry solve."], ["Treating detection confidence as physical accuracy."], ["Re-run the calibration target first."]),
  transfer("2021-a", ["Audio or power spectral measurement tasks."], ["Window discipline.", "THD pipeline."], ["Late-stage window changes."], ["Restore the fixed FFT route before tuning anything else."]),
  transfer("2021-d", ["Remote measurement dashboards.", "Visual measurement mirrored over a network path.", "Localization or visual tasks that later need freshness and identity guarantees."], ["Identity-preserving transport.", "Integrity indicators.", "Local-truth-first demo ordering.", "A fallback local-only benchmark that still closes when the supportive layer is absent."], ["Optimizing page polish before truth visibility.", "Talking about networking before the local calibrated measurement is fixed.", "Porting the remote layer into a new hybrid task before re-locking the local calibrated target."], ["Match one remote point to one local sample.", "If reused in a visual-positioning hybrid, revalidate one calibrated local target before porting remote logic.", "Always keep one benchmark that can be replayed with the supportive layer removed."]),
  transfer("2021-e", ["Waveform-recognition labs and mixed-transceiver exercises.", "Receive-plus-recognition or separation-plus-recognition prototypes."], ["Carrier-feature path.", "Family-threshold table.", "One explainable intermediate stage for mixed cases.", "A bypass comparison between the simple benchmark path and the layered full chain."], ["Treating recovered payload as proof of family recognition.", "Adding lock or separation complexity before one benchmark family route is stable.", "Porting an auxiliary stage without checking whether the explicit cue thresholds still mean the same thing afterwards."], ["Replay one benchmark family set before broadening coverage.", "Then add only one mixed or receive-stress case at a time.", "Whenever a new auxiliary stage is ported in, compare one supported benchmark with and without that stage before trusting it."]),
  transfer("2021-h", ["Load-signature or NILM exercises.", "Monitoring or automatic-identification flows built on compact electrical signatures."], ["Feature tables.", "Synchronous capture.", "A confusion-pair benchmark that remains visible when automation is added.", "One signature-first replay that still explains the final label."], ["Expanding classes too early.", "Letting a dashboard or auto flag hide whether the class boundary is still explicit.", "Growing automation until the measured cue can no longer be replayed before the label."], ["Start with the most separable class pair.", "If the new task adds automation, compare one compact class replay before widening the label set.", "Keep one benchmark where the measured signature is shown before the automatic conclusion."]),
  transfer("2021-j", ["Waveform-recognition or periodic-parameter labs."], ["Capture-path discipline.", "Waveform-family benchmark table.", "Explicit time-domain observables tied to parameter readout."], ["Growing the waveform family set before one benchmark route is stable.", "Letting a visual display replace the defended capture observable."], ["Replay one benchmark waveform family before adding new labels or parameter modes.", "Keep one explicit capture observable visible before trusting the final waveform label."]),
  transfer("2022-07-e", ["Acoustic localization or tracking tasks."], ["Known-point benchmark.", "Anchor-geometry closure.", "Tracking added only after localization closes."], ["Showing motion smoothness before proving one known point.", "Porting tracking logic into a new scene before the same anchor geometry is revalidated."], ["Replay one known point before widening to tracking or broader area coverage."]),
  transfer("2022-07-f", ["Modulation-depth or envelope-analysis tasks."], ["Carrier-and-envelope cue path.", "Known modulation-setting benchmark table."], ["Growing supported settings before one anchor modulation benchmark is stable.", "Using an opaque estimator without replaying explicit cues."], ["Replay one known modulation setting before widening supported conditions."]),
  transfer("2022-10-e", ["Wireless monitoring or remote sensor-node projects."], ["Local-node benchmark.", "Freshness-aware wireless mirror.", "Local-only fallback replay."], ["Growing the remote page before one local benchmark is still honest wirelessly.", "Talking about connectivity before the measurement anchor is frozen."], ["Prove one local benchmark on both ends first, then expand wireless behavior."]),
  transfer("2018-a", ["Current sensing, harmonic analysis, or defended FFT instrumentation labs."], ["Current-sensing scale.", "One fixed spectral benchmark.", "A replay where the same current source still closes after modest front-end changes."], ["Changing gain or FFT settings before one current benchmark is frozen.", "Letting the spectrum view outrun the defended sensing path."], ["Replay one known current benchmark before widening harmonic claims or span."]),
  transfer("2018-f", ["Wireless-audio receive or short-range audio-link projects."], ["RF-to-audio chain.", "One benchmark speech replay.", "A modest setup-change replay that still preserves the same anchor benchmark."], ["Treating loudness as proof of receive truth.", "Porting extra audio-stage polish before the base receive benchmark still closes."], ["Replay one wireless-speech benchmark before widening distance, gain, or audio polish."]),
  transfer("2018-g", ["Digital timing capture or simple logic-analysis projects."], ["Known sequence replay.", "Stable trigger and threshold route.", "One benchmark timing trace that remains explainable when channels or depth are expanded."], ["Adding channels or richer decoding before one benchmark sequence is stable.", "Treating a pretty trace as proof of timing truth."], ["Replay one known digital sequence before trusting broader capture or interpretation features."]),
  transfer("2018-h", ["Load monitoring or compact power-measurement projects."], ["Synchronous voltage-current capture.", "One anchor load replay.", "A compact electrical-feature table that still explains the final output."], ["Growing dashboards or load classes before one benchmark load is stable.", "Treating a smooth power number as proof of voltage-current truth."], ["Replay one benchmark load before widening load families, AC/DC modes, or monitoring views."]),
  transfer("2024-c", ["Wireless-signal simulation or mixed modulation-chain projects."], ["Intermediate cue path.", "Benchmark family set through both the main and bypass route."], ["Adding richer simulation before one benchmark family still closes transparently.", "Letting the simulated link erase the cue needed for the final family claim."], ["Replay one benchmark family through both paths before trusting a richer simulated link."]),
  transfer("2024-g", ["Acoustic shielding, masking, or suppression projects."], ["Fixed witness path.", "One unchanged unshielded-vs-shielded benchmark."], ["Changing the witness path while tuning.", "Adding richer suppression behavior before one anchor comparison is still honest."], ["Reconfirm one fixed witness benchmark before widening shielding conditions."]),
  transfer("2023-b", ["Cable-test instruments."], ["State templates.", "Known-length references."], ["Overfitting one cable type."], ["Rebuild the known cable table on the new fixture."]),
  transfer("2023-c", ["LCR measurement exercises."], ["Range calibration.", "Amplitude-phase inversion."], ["Trusting solver output before range calibration."], ["Check one known component on every active range."]),
  transfer("2023-d", ["Modulation-classification projects."], ["Carrier and symbol cue pipeline.", "Benchmark family table."], ["Claiming support for families that were never benchmarked."], ["Re-run the benchmark family set before adding new labels."]),
  transfer("2023-f", ["Propagation or geometry localization tasks.", "Localization mirrored to remote or visual overlays.", "Mixed visual-positioning prototypes that need one physical truth anchor."], ["Known-point checks.", "Anchor-consistency workflow.", "Localization-first demo ordering.", "A local-only replay path that survives after the supportive layer is hidden."], ["Over-trusting a solver when the raw cue is weak.", "Letting a remote or visual layer become the story before localization truth is fixed.", "Porting a supportive layer without checking whether the same known point still closes through the base localization loop."], ["Revalidate one known distance or known point first.", "Then add the extra layer and confirm the same benchmark still closes.", "Before claiming the new hybrid route works, disable the supportive layer once and replay the same anchor benchmark locally."]),
  transfer("2023-h", ["Source-separation labs.", "Recognition-or-receive chains with an explicit separation stage.", "Hybrid pipelines where a recovered component feeds a later classifier or lock engine.", "Suppression or compensation tasks that want to claim recovered-component meaning."], ["Known mixed benchmarks.", "Output-quality comparison.", "Recovered-output meaning carried into the next stage.", "A weakened-component replay that checks whether the later stage still reflects separation quality honestly.", "One anchor benchmark that proves named recovery before suppression-only language is introduced."], ["Calling any suppression a recovered component.", "Letting downstream recognition hide that separation itself was never benchmarked.", "Porting a downstream stage that compensates for poor separation and makes the separation layer impossible to defend on its own.", "Borrowing compensation language without replaying a pure separation benchmark first."], ["Re-state what each output should mean.", "Then verify one downstream stage on the same benchmark before expanding scope.", "Also replay one benchmark with a deliberately weakened recovered component and confirm the later stage degrades consistently.", "If the new task also mentions compensation, replay one anchor separation benchmark before trusting the overlap."]),
  transfer("2023-j", ["Automatic line or cable test projects.", "Instrumentation tasks where automatic labels must still be tied to visible line-state cues."], ["Healthy-vs-fault templates.", "Explicit state logic.", "One scripted replay where raw line evidence and final auto label are both visible."], ["Calling the system automatic before the line-state cues are stable.", "Porting automation into a new fixture before the same anchor script still closes."], ["Revalidate the healthy and main-fault scripts before adding new fault labels.", "If the new task looks like monitoring or classification, replay one anchor auto-diagnosis script first."]),
  transfer("2024-b", ["Active filter or adaptive compensation labs.", "Distortion tasks that later need a causal compensation story."], ["Reference and residual channels.", "Convergence metrics.", "One anchor uncompensated-vs-compensated benchmark replay.", "A frozen benchmark that still means the same thing before and after broader overlap claims are added."], ["Benchmarking only one operating point.", "Porting compensation logic into a new scenario without keeping the same anchor benchmark unchanged.", "Letting a cross-family story redefine the benchmark instead of replaying it unchanged."], ["Verify baseline and compensated residual on the same case.", "If the new task also smells like adaptive filtering or separation, replay one pure compensation benchmark before trusting the overlap.", "When overlap grows, keep one unchanged anchor replay that still closes the full story."]),
  transfer("2025-a", ["Converter load testing, bidirectional power-measurement, or compact energy-flow instrumentation projects."], ["Synchronous voltage-current capture.", "Sign-consistent power or energy-flow solve.", "One benchmark operating mode."], ["Talking about operating modes before one anchor mode still closes from raw electrical observables.", "Porting a polished UI before the voltage-current evidence chain is revalidated."], ["Replay one converter-load benchmark mode before widening operating coverage or richer energy-flow narration."]),
  transfer("2025-b", ["Active compensation, harmonic-suppression, or before-and-after power-quality projects."], ["Frozen harmonic benchmark.", "Reference and residual capture.", "One unchanged uncompensated-vs-compensated replay."], ["Retuning on a different case than the one used for defense.", "Growing operating coverage before the original anchor comparison is replayed unchanged."], ["Replay one unchanged harmonic benchmark before widening compensation coverage or adaptation overlap claims."]),
  transfer("2025-c", ["Calibrated vision measurement tasks."], ["Pose benchmark table.", "Geometry solver."], ["Switching features every time pose changes."], ["Lock the feature set on one known target first."]),
  transfer("2025-d", ["Line tester projects.", "Twisted-pair diagnosis routes that expand from simple pair-state truth toward richer auto interpretation."], ["Per-pair templates.", "Fault-state explanation.", "One repeatable pair-sensitive cue path that survives plug cycles and fixture changes."], ["Confusing protocol behavior with passive-line diagnosis.", "Porting a richer diagnosis table before the original healthy-vs-fault pair benchmark still closes unchanged."], ["Re-establish healthy and faulty pair baselines.", "If the route grows richer, replay one defended pair benchmark before trusting new anomaly labels."]),
  transfer("2025-f", ["Synchronization demos."], ["State-transition logs.", "Relock scripts."], ["Using pretty outputs as lock proof."], ["Check the state machine on one disturbance loop."]),
  transfer("2025-g", ["System-identification tasks.", "Parameter-measurement routes that later want one compact replay story."], ["Held-out replay.", "Compact-structure reasoning.", "One simpler direct-measurement anchor kept visible beneath the model layer."], ["Keeping a model just because it fits better.", "Letting replay language replace the need for one calibrated anchor quantity."], ["Compare compact and large models on held-out replay.", "If the route overlaps parameter tasks, preserve one anchor case showing exactly what the model adds beyond direct inversion."]),
  transfer("2025-j", ["Beacon localization or timing-anchor positioning tasks."], ["Known-point benchmark.", "Anchor-timing closure."], ["Growing positioning coverage before one beacon-known-point replay is stable."], ["Replay one known point before widening the operating area."]),
  transfer("1995-d", ["Passive-parameter measurement labs.", "Compact RLC-style instruments that need one defended benchmark table."], ["Known-part replay.", "One explicit passive-measurement route per quantity."], ["Adding more passives before one benchmark route is stable."], ["Reconfirm one known part per passive type before expanding the table."]),
  transfer("1997-b", ["Counter and timing-measurement projects."], ["Known-frequency anchor.", "Explicit timing route."], ["Treating display speed as proof of frequency truth."], ["Replay one known-frequency anchor before widening range or adding modes."]),
  transfer("1999-b", ["Low-frequency meter and RMS projects."], ["Low-frequency benchmark source.", "Defended effective-value route."], ["Changing ranges before the RMS anchor still agrees."], ["Re-run one fixed RMS benchmark source before trusting wider meter behavior."]),
  transfer("1999-c", ["Sweep-based response or transfer-characteristic labs."], ["Anchor point on the curve.", "Short defended sweep segment."], ["Widening the sweep before one anchor point is defended."], ["Reconfirm one anchor point and short segment before trusting broader curves."]),
  transfer("2001-b", ["Waveform storage and capture projects."], ["Trigger discipline.", "Capture-to-storage replay benchmark."], ["Adding memory or replay features before one waveform benchmark is stable."], ["Replay one known waveform through capture and storage before expanding features."]),
  transfer("2003-c", ["Dual-channel phase or timing-comparison labs."], ["Known phase pair.", "Matched dual-channel timing route."], ["Broadening phase coverage before one benchmark pair is stable."], ["Replay one known phase pair before trusting additional phase cases."]),
  transfer("2003-d", ["Digital timing-capture or simple logic-analysis projects."], ["Known sequence replay.", "Stable threshold and sampling route."], ["Adding channels or decoding before one benchmark sequence is stable."], ["Replay one known digital sequence before trusting deeper capture or richer interpretation."]),
  transfer("2011-h", ["Waveform capture, storage, or replay projects."], ["Capture benchmark.", "Stored-waveform identity replay."], ["Adding more storage modes before one benchmark waveform survives the full chain."], ["Replay one known waveform through capture, storage, and playback before trusting extra features."]),
  transfer("2013-k", ["Line-probing and simple wiring-diagnosis tasks."], ["Explicit cue-to-label table.", "Repeatable probing benchmark."], ["Growing automatic diagnosis before the cue benchmark is stable."], ["Replay one supported line-state cue before adding richer diagnosis."]),
  transfer("2017-o", ["Tachometer or timing-derived speed projects."], ["Known-speed anchor.", "Pulse or timing pickup route."], ["Expanding speed coverage before one anchor-speed benchmark is stable."], ["Replay one known-speed benchmark before trusting broader operating cases."]),
];
