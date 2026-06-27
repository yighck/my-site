export interface LocalizedText {
  en: string;
  zh: string;
}

export interface KnowledgeSection {
  title: LocalizedText;
  items: LocalizedText[];
}

export interface Matcher {
  terms: string[];
  weight: number;
}

export interface InstrumentationProfile {
  id: string;
  family: LocalizedText;
  title: LocalizedText;
  references: string[];
  summary: LocalizedText;
  approach: LocalizedText;
  modules: KnowledgeSection[];
  tuningSteps: LocalizedText[];
  risks: LocalizedText[];
  verification: LocalizedText[];
  matchers: Matcher[];
}

export interface RecommendedPlan {
  title: string;
  summary: string;
  approach: string;
  modules: Array<{
    title: string;
    items: string[];
  }>;
  tuningSteps: string[];
  risks: string[];
  verification: string[];
  references: string[];
  detectedFamily: string;
}

const profiles: InstrumentationProfile[] = [
  {
    id: "parameter",
    family: {
      en: "Electrical parameter testing",
      zh: "电路参数测试",
    },
    title: {
      en: "Parameter-measurement recommendation",
      zh: "参数测试类推荐方案",
    },
    references: ["2019 D 简易电路特性测试仪", "2023 C 电感电容测量装置"],
    summary: {
      en: "This problem is closest to the electrical-parameter tester family: use known excitation plus amplitude/phase recovery to solve for impedance or RLC values.",
      zh: "这道题更接近电路参数测试类，核心思路是通过已知激励和幅相测量去反推出阻抗或 RLC 参数。",
    },
    approach: {
      en: "Build a sine-excitation measurement chain with dual-channel capture, a reference path, multi-range switching, and a parameter solver based on amplitude ratio plus phase difference.",
      zh: "推荐搭建正弦激励测量链路，使用双通道采样、参考通道、多量程切换，以及基于幅值比和相位差的参数反演求解器。",
    },
    modules: [
      {
        title: {
          en: "Excitation and reference",
          zh: "激励与参考链路",
        },
        items: [
          {
            en: "Stable sine excitation, preferably sweep-capable across the useful measurement band.",
            zh: "稳定正弦激励，最好支持在目标频段内扫频。",
          },
          {
            en: "Reference channel for phase alignment and range calibration.",
            zh: "保留参考通道，用于相位对齐和量程标定。",
          },
        ],
      },
      {
        title: {
          en: "Acquisition and solving",
          zh: "采样与求解",
        },
        items: [
          {
            en: "Dual-channel ADC capture to recover amplitude ratio and phase shift.",
            zh: "双通道 ADC 采样，恢复幅值比和相位差。",
          },
          {
            en: "Use closed-form inversion, lookup tables, or least-squares fitting for R, L, and C.",
            zh: "通过闭式求解、查表或最小二乘拟合得到 R、L、C 参数。",
          },
        ],
      },
      {
        title: {
          en: "Range and compensation",
          zh: "量程与补偿",
        },
        items: [
          {
            en: "Switch ranges around impedance span boundaries instead of forcing one fixed gain.",
            zh: "根据阻抗跨度切换量程，不要硬用单一固定增益。",
          },
          {
            en: "Apply zero, gain, and phase compensation per range before final solving.",
            zh: "在最终求解前按量程做零点、增益和相位补偿。",
          },
        ],
      },
    ],
    tuningSteps: [
      {
        en: "Bring up excitation frequency stability first, then verify reference-channel phase alignment.",
        zh: "先把激励频率稳定下来，再校参考通道的相位对齐。",
      },
      {
        en: "Tune the acquisition chain on known resistors before moving to capacitors and inductors.",
        zh: "先用已知电阻把采样链路调顺，再上电容和电感样件。",
      },
      {
        en: "Calibrate each range separately, then validate auto range switching at the boundaries.",
        zh: "每个量程单独标定，最后验证量程边界处的自动切换。",
      },
    ],
    risks: [
      {
        en: "Phase error between channels can dominate the final L/C estimate.",
        zh: "双通道相位误差会直接毁掉电感、电容反演结果。",
      },
      {
        en: "Gain mismatch across ranges creates discontinuous measurement jumps.",
        zh: "不同量程的增益不一致会造成测量结果跳变。",
      },
      {
        en: "Poor sweep spacing or wrong excitation frequency makes the inversion ill-conditioned.",
        zh: "扫频点设计不合理或激励频率选错，会让求解变得病态。",
      },
    ],
    verification: [
      {
        en: "Cross-check fixed resistors, capacitors, and inductors on every active range.",
        zh: "对所有启用量程分别做已知电阻、电容、电感对测。",
      },
      {
        en: "Record repeatability near the range boundaries and on low-Q samples.",
        zh: "重点记录量程边界和低 Q 样件的重复性。",
      },
      {
        en: "Verify the displayed result against at least one commercial meter or reference bridge.",
        zh: "至少拿一台商用仪表或参考电桥做结果比对。",
      },
    ],
    matchers: [
      { terms: ["电感", "电容", "rlc", "阻抗", "相位", "特性测试"], weight: 4 },
      { terms: ["capacitance", "inductance", "impedance", "phase", "amplitude ratio"], weight: 4 },
      { terms: ["量程", "扫频", "谐振", "阻抗角"], weight: 2 },
    ],
  },
  {
    id: "distortion",
    family: {
      en: "Distortion and spectrum measurement",
      zh: "失真与频谱测量",
    },
    title: {
      en: "Spectrum-measurement recommendation",
      zh: "失真频谱类推荐方案",
    },
    references: ["2021 A 信号失真度测量装置"],
    summary: {
      en: "This problem matches the distortion/spectrum family: solve period estimation first, then compute harmonics and THD through a controlled FFT path.",
      zh: "这道题属于失真与频谱测量类，关键是先稳住周期估计，再通过受控的 FFT 流程算谐波与 THD。",
    },
    approach: {
      en: "Use clean analog conditioning, a period-lock path, fixed-window FFT analysis, and harmonic indexing from the fundamental to produce stable distortion metrics.",
      zh: "推荐使用干净的模拟调理、周期锁定链路、固定窗函数 FFT 分析，以及从基波出发的谐波索引方式输出稳定的失真指标。",
    },
    modules: [
      {
        title: {
          en: "Front-end conditioning",
          zh: "前端调理",
        },
        items: [
          {
            en: "Limit clipping, suppress DC bias, and keep enough headroom for harmonic capture.",
            zh: "控制削顶、抑制直流偏置，并给谐波采样留出足够余量。",
          },
          {
            en: "Keep ADC full-scale usage high enough without saturating on peaks.",
            zh: "尽量把 ADC 动态范围吃满，但不能在峰值处饱和。",
          },
        ],
      },
      {
        title: {
          en: "Period and spectrum path",
          zh: "周期与频谱链路",
        },
        items: [
          {
            en: "Estimate the period by zero-crossing or autocorrelation before the FFT stage.",
            zh: "在进入 FFT 前先用过零或自相关估计周期。",
          },
          {
            en: "Use one validated window function and lock harmonic bins relative to the fundamental.",
            zh: "选定一种验证过的窗函数，并相对基波锁定谐波频点。",
          },
        ],
      },
      {
        title: {
          en: "Metric output",
          zh: "指标输出",
        },
        items: [
          {
            en: "Report fundamental amplitude, major harmonics, and THD with consistent formatting.",
            zh: "统一输出基波幅值、主要谐波和 THD。",
          },
          {
            en: "Add weak-signal and over-range diagnostics to avoid fake spectrum reads.",
            zh: "加入弱信号和过量程诊断，避免假频谱结果。",
          },
        ],
      },
    ],
    tuningSteps: [
      {
        en: "Tune the analog headroom first, then validate period estimation on clean sine signals.",
        zh: "先把模拟链路的动态余量调好，再在纯净正弦下验证周期估计。",
      },
      {
        en: "Lock one FFT length and one window before touching THD calculations.",
        zh: "先锁死 FFT 点数和窗函数，再去调 THD 计算。",
      },
      {
        en: "Inject known harmonics and confirm the harmonic indexer before contest-style demos.",
        zh: "先注入已知谐波，确认谐波定位器正常，再做比赛式演示。",
      },
    ],
    risks: [
      {
        en: "Spectral leakage can look like extra harmonics if the period lock is weak.",
        zh: "周期锁定不稳时，频谱泄漏会伪装成额外谐波。",
      },
      {
        en: "ADC clipping creates completely misleading THD values.",
        zh: "ADC 一旦削顶，THD 结果基本就失真了。",
      },
      {
        en: "Window switching late in the project often breaks earlier calibration assumptions.",
        zh: "后期临时换窗函数，常常会把前面标定好的结果全打乱。",
      },
    ],
    verification: [
      {
        en: "Test on a clean sine, then on injected 2nd/3rd harmonic cases with known ratios.",
        zh: "先测纯净正弦，再测已知二次、三次谐波注入样例。",
      },
      {
        en: "Check repeatability across amplitude changes and sampling-length changes.",
        zh: "验证不同幅值、不同采样长度下的重复性。",
      },
      {
        en: "Cross-check THD against a reference source or a trusted waveform generator setup.",
        zh: "用参考信号源或可信函数发生器链路交叉验证 THD。",
      },
    ],
    matchers: [
      { terms: ["失真", "谐波", "thd", "频谱", "fft", "基波"], weight: 4 },
      { terms: ["distortion", "harmonic", "spectrum", "fundamental", "leakage"], weight: 4 },
      { terms: ["窗函数", "自相关", "过零"], weight: 2 },
    ],
  },
  {
    id: "cable",
    family: {
      en: "Cable and transmission-line detection",
      zh: "线缆与传输线检测",
    },
    title: {
      en: "Cable-detection recommendation",
      zh: "线缆检测类推荐方案",
    },
    references: ["2023 B 同轴电缆长度与终端负载检测装置", "2025 D 简易以太网双绞线测试仪"],
    summary: {
      en: "This problem is closest to cable/transmission-line detection: estimate line length and classify terminal state from reflected or phase-shifted responses.",
      zh: "这道题更接近线缆与传输线检测类，需要通过反射或相位响应估计长度并判定终端状态。",
    },
    approach: {
      en: "Pick one physical route and finish it well: pulse-echo or multi-frequency phase. Use a controlled launch network, a return capture path, and a dedicated fault classifier.",
      zh: "建议只选一条物理路线做深做稳：脉冲回波或多频点相位法。核心是受控发射网络、回波采样链路和专门的故障分类器。",
    },
    modules: [
      {
        title: {
          en: "Launch and capture path",
          zh: "发射与回波采样",
        },
        items: [
          {
            en: "Design a repeatable launch network with controlled edge or controlled multi-tone drive.",
            zh: "设计可重复的发射网络，控制好激励边沿或多频点驱动。",
          },
          {
            en: "Capture the return path with enough timing resolution and threshold stability.",
            zh: "回波采样链路要有足够的时间分辨率和阈值稳定性。",
          },
        ],
      },
      {
        title: {
          en: "Length solving",
          zh: "长度求解",
        },
        items: [
          {
            en: "Use time-of-flight or phase-difference solving with a calibrated cable velocity factor.",
            zh: "使用飞行时间或相位差求解，并结合标定过的速度因子。",
          },
          {
            en: "Keep one compensation table for different cable types or expected media.",
            zh: "针对不同线缆类型或介质，保留一张补偿表。",
          },
        ],
      },
      {
        title: {
          en: "Terminal classification",
          zh: "终端状态分类",
        },
        items: [
          {
            en: "Classify open, short, matched, and poor-contact states with a dedicated state machine.",
            zh: "通过专门的状态机判定开路、短路、匹配和接触不良。",
          },
          {
            en: "Separate length estimation from fault classification so one does not destabilize the other.",
            zh: "把长度估计和故障判别分开处理，避免互相拖累。",
          },
        ],
      },
    ],
    tuningSteps: [
      {
        en: "Tune the launch edge and trigger threshold before touching the length solver.",
        zh: "先把发射边沿和触发阈值调稳，再去调长度求解器。",
      },
      {
        en: "Calibrate on known-length cables first, then add terminal-state classification.",
        zh: "先用已知长度线缆做标定，再加入终端状态分类。",
      },
      {
        en: "Validate poor-contact and connector-variation cases at the end, not at the start.",
        zh: "接触不良和连接器差异这类脏工况放在最后专项验证。",
      },
    ],
    risks: [
      {
        en: "Threshold drift and ringing can completely shift the estimated cable length.",
        zh: "阈值漂移和振铃会严重影响线缆长度估计。",
      },
      {
        en: "Trying both pulse and phase methods in a short schedule often leaves both unfinished.",
        zh: "短周期里同时做脉冲法和相位法，通常会两头都做不满。",
      },
      {
        en: "Poor-contact classification is easy to overfit on one connector sample.",
        zh: "接触不良判别很容易只适配某一种连接器样本。",
      },
    ],
    verification: [
      {
        en: "Verify known lengths first, then open, short, matched, and bad-contact end states.",
        zh: "先做已知长度验证，再做开路、短路、匹配和接触不良判别。",
      },
      {
        en: "Test repeated plug/unplug cycles to observe threshold drift and connector variance.",
        zh: "做重复插拔测试，观察阈值漂移和连接器离散性。",
      },
      {
        en: "Measure error versus cable length and keep a compensation table instead of a single constant.",
        zh: "记录误差随长度变化的趋势，不要只靠一个固定常数补偿。",
      },
    ],
    matchers: [
      { terms: ["同轴", "双绞线", "线缆", "电缆", "终端", "开路", "短路", "匹配"], weight: 4 },
      { terms: ["coax", "cable", "twisted pair", "termination", "open", "short", "matched"], weight: 4 },
      { terms: ["长度", "回波", "时延", "反射", "负载检测"], weight: 2 },
    ],
  },
  {
    id: "model",
    family: {
      en: "Unknown model identification",
      zh: "模型辨识",
    },
    title: {
      en: "Model-identification recommendation",
      zh: "模型辨识类推荐方案",
    },
    references: ["2025 G 电路模型探究装置"],
    summary: {
      en: "This problem resembles model identification: the goal is to recover a compact usable model from measured response data.",
      zh: "这道题更像模型辨识类，目标是从测得的响应数据中恢复一个可用的紧凑模型。",
    },
    approach: {
      en: "Use sweep or injected test sequences to capture the response surface, then fit a compact model with least-squares or nonlinear optimization and validate it through replay.",
      zh: "推荐通过扫频或注入测试序列采响应，再用最小二乘或非线性拟合得到紧凑模型，最后通过回放验证模型可靠性。",
    },
    modules: [
      {
        title: {
          en: "Stimulus and sampling",
          zh: "激励与采样",
        },
        items: [
          {
            en: "Prepare a controllable sweep or injected test sequence with repeatable timing.",
            zh: "准备可控的扫频或注入序列，保证时序重复。",
          },
          {
            en: "Sample the response with enough resolution to preserve the dynamics you want to fit.",
            zh: "采样分辨率要足够保住待拟合动态特征。",
          },
        ],
      },
      {
        title: {
          en: "Feature construction and fitting",
          zh: "特征构建与拟合",
        },
        items: [
          {
            en: "Construct a response matrix or compact feature set before fitting.",
            zh: "先构造响应矩阵或紧凑特征集，再做拟合。",
          },
          {
            en: "Use least-squares first, then nonlinear optimization only if it clearly improves the fit.",
            zh: "先用最小二乘，再在确有收益时上非线性优化。",
          },
        ],
      },
      {
        title: {
          en: "Replay and validation",
          zh: "回放与验证",
        },
        items: [
          {
            en: "Replay the fitted model against held-out samples or extra sweep points.",
            zh: "用保留样本或额外扫频点回放验证拟合模型。",
          },
          {
            en: "Keep the model compact enough to explain and debug during the contest.",
            zh: "模型保持足够紧凑，比赛现场才能讲得清、调得动。",
          },
        ],
      },
    ],
    tuningSteps: [
      {
        en: "Stabilize the stimulus and capture path before changing fitting algorithms.",
        zh: "先稳住激励和采样链路，再讨论拟合算法。",
      },
      {
        en: "Start with the smallest model that explains the response, then add complexity only if needed.",
        zh: "先用最小可解释模型起步，再逐步增加复杂度。",
      },
      {
        en: "Reserve a separate validation set to avoid tuning only on the training sweep.",
        zh: "留一部分独立验证数据，避免只对训练扫频过拟合。",
      },
    ],
    risks: [
      {
        en: "Overfitting the response curve makes the model look good but generalize poorly.",
        zh: "只顾着把曲线拟合漂亮，很容易过拟合。",
      },
      {
        en: "Stimulus instability is often mistaken for model error.",
        zh: "激励不稳定常被误判成模型误差。",
      },
      {
        en: "An over-complex model is hard to explain and even harder to debug under contest time pressure.",
        zh: "模型太复杂，现场既难解释，也难调试。",
      },
    ],
    verification: [
      {
        en: "Validate the fitted model against held-out frequency points or extra stimuli.",
        zh: "用保留频点或额外测试序列验证拟合结果。",
      },
      {
        en: "Compare replay output with the original measured response, not just scalar error values.",
        zh: "既看误差数值，也要看回放曲线和原始响应是否一致。",
      },
      {
        en: "Track how fit quality changes with noise and reduced sample density.",
        zh: "关注噪声增加、采样点减少时拟合质量怎么变。",
      },
    ],
    matchers: [
      { terms: ["模型", "辨识", "拟合", "未知网络", "响应", "探究"], weight: 4 },
      { terms: ["model", "identify", "identification", "fit", "response matrix", "unknown network"], weight: 4 },
      { terms: ["最小二乘", "扫频", "回放"], weight: 2 },
    ],
  },
];

const fallbackProfile: InstrumentationProfile = {
  id: "generic",
  family: {
    en: "Generic instrumentation",
    zh: "通用仪器仪表",
  },
  title: {
    en: "Generic instrumentation recommendation",
    zh: "通用仪器仪表推荐方案",
  },
  references: [
    "2019 D 简易电路特性测试仪",
    "2021 A 信号失真度测量装置",
    "2023 B 同轴电缆长度与终端负载检测装置",
    "2023 C 电感电容测量装置",
  ],
  summary: {
    en: "The problem does not strongly match a single distilled family, so the recommendation follows the common instrumentation chain: excitation, front-end, capture, feature extraction, solving, calibration, and display.",
    zh: "这道题没有强烈命中单一蒸馏题型，因此按仪器仪表共性链路推荐：激励、前端、采样、特征提取、求解、标定和显示。",
  },
  approach: {
    en: "Start by locking the measurement principle, then design a reusable front-end and capture path before choosing the smallest solving algorithm that satisfies the metrics.",
    zh: "先锁定测量原理，再设计可复用的前端和采样链路，最后选择满足指标的最小求解算法。",
  },
  modules: [
    {
      title: {
        en: "Signal chain",
        zh: "信号链路",
      },
      items: [
        {
          en: "Define the excitation source, reference path, anti-aliasing, and input protection first.",
          zh: "先明确激励源、参考通道、抗混叠和输入保护。",
        },
        {
          en: "Keep the sampling path simple enough to verify independently from the solving logic.",
          zh: "采样链路尽量独立、可单独验证，不要一开始就和求解逻辑绑死。",
        },
      ],
    },
    {
      title: {
        en: "Algorithm path",
        zh: "算法路径",
      },
      items: [
        {
          en: "Prefer explicit feature extraction over large unstructured post-processing.",
          zh: "优先做可解释的特征提取，不要上来就堆大而散的后处理。",
        },
        {
          en: "Calibrate before solving final metrics.",
          zh: "先完成标定，再输出最终指标。",
        },
      ],
    },
    {
      title: {
        en: "Presentation layer",
        zh: "展示层",
      },
      items: [
        {
          en: "Show clear results, diagnostic flags, and one debug channel for replay.",
          zh: "提供清晰结果显示、异常标志和一条可回放的调试通道。",
        },
        {
          en: "Design for repeated measurement, not one lucky demo.",
          zh: "按可重复测量来设计，而不是押一把幸运演示。",
        },
      ],
    },
  ],
  tuningSteps: [
    {
      en: "Lock the physical measurement route before selecting chips or algorithms.",
      zh: "先锁物理测量路线，再决定芯片和算法。",
    },
    {
      en: "Verify the front-end and sampling path before solving the full problem.",
      zh: "先验证前端和采样，再求全题。",
    },
    {
      en: "Do calibration and fault-state validation before final demos.",
      zh: "在最终演示前，把标定和异常状态验证补齐。",
    },
  ],
  risks: [
    {
      en: "Wrong physical assumptions can make every later optimization meaningless.",
      zh: "如果物理路线假设错了，后面的优化都没意义。",
    },
    {
      en: "Poor front-end stability is usually a bigger problem than weak math.",
      zh: "前端不稳通常比算法不够强更致命。",
    },
    {
      en: "No diagnostics means you cannot explain bad results during a demo.",
      zh: "没有异常诊断，现场一出问题就很难解释。",
    },
  ],
  verification: [
    {
      en: "Repeat every core metric at least 10 times.",
      zh: "所有核心指标至少重复测量 10 次。",
    },
    {
      en: "Validate open, short, weak-signal, and over-range states.",
      zh: "覆盖开路、短路、弱信号和过量程工况。",
    },
    {
      en: "Keep one external reference for cross-checking results.",
      zh: "保留一条外部参考链路做交叉验证。",
    },
  ],
  matchers: [],
};

function getText(text: LocalizedText, lang: "en" | "zh") {
  return lang === "zh" ? text.zh : text.en;
}

function normalizeText(input: string) {
  return input.toLowerCase();
}

function scoreProfile(profile: InstrumentationProfile, normalizedText: string) {
  let score = 0;
  const matchedTerms = new Set<string>();

  for (const matcher of profile.matchers) {
    for (const term of matcher.terms) {
      if (normalizedText.includes(term.toLowerCase())) {
        score += matcher.weight;
        matchedTerms.add(term);
      }
    }
  }

  return {
    score,
    matchedTerms: Array.from(matchedTerms),
  };
}

export function recommendPlanFromDistilledData(
  problemText: string,
  lang: "en" | "zh",
): RecommendedPlan {
  const normalizedText = normalizeText(problemText);

  const ranked = profiles
    .map((profile) => ({
      profile,
      ...scoreProfile(profile, normalizedText),
    }))
    .sort((a, b) => b.score - a.score);

  const best = ranked[0];
  const selected = best && best.score > 0 ? best.profile : fallbackProfile;
  const matchedTerms = best && best.score > 0 ? best.matchedTerms : [];

  const summaryParts =
    lang === "zh"
      ? [
          getText(selected.summary, lang),
          matchedTerms.length > 0 ? `识别到的题面关键词：${matchedTerms.slice(0, 6).join("、")}。` : "",
          `参考蒸馏题：${selected.references.join("、")}。`,
        ]
      : [
          getText(selected.summary, lang),
          matchedTerms.length > 0
            ? `Detected problem cues: ${matchedTerms.slice(0, 6).join(", ")}.`
            : "",
          `Reference problems: ${selected.references.join("; ")}.`,
        ];

  return {
    title: getText(selected.title, lang),
    summary: summaryParts.filter(Boolean).join(" "),
    approach: getText(selected.approach, lang),
    modules: selected.modules.map((section) => ({
      title: getText(section.title, lang),
      items: section.items.map((item) => getText(item, lang)),
    })),
    tuningSteps: selected.tuningSteps.map((item) => getText(item, lang)),
    risks: selected.risks.map((item) => getText(item, lang)),
    verification: selected.verification.map((item) => getText(item, lang)),
    references: selected.references,
    detectedFamily: getText(selected.family, lang),
  };
}
