import {
  distilledFamilyAnswerTemplates,
  distilledFamilyBuildPacks,
  distilledFamilyDecisionTrees,
  distilledFamilyFailureAtlases,
  distilledFamilyKnowledgePacks,
  distilledFamilyMetricLadders,
  distilledFamilyNegativeExamplePacks,
  distilledFamilyPairDisambiguationPacks,
  distilledFamilyCorrectionPacks,
  distilledFamilyHandoffPacks,
  distilledFamilyStatementPatternPacks,
  distilledFamilyLexiconPacks,
  distilledSignalHygienePack,
  distilledModuleAssemblyRules,
  distilledModuleMetricRules,
  distilledRouteEvidencePacks,
  distilledModuleNodes,
  distilledFamilyObjectiveMaps,
  distilledFamilyReferenceGraphs,
  distilledFamilyTriggerPacks,
  distilledFamilyTrainingSequences,
  historicalBenchmarkPacks,
  historicalDisambiguationPacks,
  familyRouteVariants,
  historicalDefensePacks,
  historicalTransferPacks,
  historicalExecutionNotes,
  historicalProblemSupplements,
  historicalSolutionBlueprints,
  historicalTieredBuildPlans,
  historicalTroubleshootingPacks,
  historicalValidationPacks,
  historicalWinningPatterns,
  instrumentationFamilyPlaybooks,
  localizeRichZh,
} from "@/lib/instrumentation-kb-rich";

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

export interface TierOption {
  id: string;
  name: LocalizedText;
  fit: LocalizedText;
  whenToChoose: LocalizedText;
  hardware: LocalizedText[];
  software: LocalizedText[];
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
  matchedTerms?: string[];
  reasoning?: string[];
  tierOptions?: Array<{
    id: string;
    name: string;
    fit: string;
    whenToChoose: string;
    hardware: string[];
    software: string[];
  }>;
  relatedProblems?: Array<{
    id: string;
    code: string;
    title: string;
    family: string;
    highlights: string[];
    tags: string[];
    difficulty?: string;
    tierFit?: string[];
    coreChain?: string[];
    mustHaveDeliverables?: string[];
    commonPitfalls?: string[];
    scoringFocus?: string[];
    recommendedHardware?: string[];
    softwareBackbone?: string[];
    calibrationFocus?: string[];
    defenseAngles?: string[];
    stabilizeFirst?: string[];
    abnormalChecklist?: string[];
    defenseScript?: string[];
    principleRoute?: string[];
    frontEndFocus?: string[];
    algorithmBackbone?: string[];
    calibrationBench?: string[];
    demoSequence?: string[];
    buildTiers?: Array<{
      tier: string;
      hardwareStack: string[];
      softwareScope: string[];
      metricPriority: string[];
      avoidOverbuild: string[];
    }>;
    calibrationFixtures?: string[];
    acceptanceChecklist?: string[];
    edgeCases?: string[];
    defenseCheckpoints?: string[];
    failureSymptoms?: string[];
    firstChecks?: string[];
    likelyRootCauses?: string[];
    fastRecoveryActions?: string[];
    judgeQuestions?: string[];
    recommendedAnswers?: string[];
    demoScoringMoves?: string[];
    phrasesToAvoid?: string[];
    recommendedReferences?: string[];
    minimumAcceptanceNumbers?: string[];
    competitionDayQuickChecks?: string[];
    overnightBurnInChecks?: string[];
    easyToConfuseWith?: string[];
    separatingSignals?: string[];
    preferredStoryline?: string[];
    overclaimBoundaries?: string[];
    bestBorrowedFrom?: string[];
    reusableModules?: string[];
    nonReusableHabits?: string[];
    fastestCarryOverChecks?: string[];
  }>;
  familyPlaybook?: {
    headline: string;
    diagnosisCues: string[];
    principleChoices: string[];
    winningBackbone: string[];
    mustHaveDeliverables: string[];
    defenseFocus: string[];
    commonFailureModes: string[];
    stretchGoals: string[];
  };
  familyKnowledgePack?: {
    sharedHardwareStack: string[];
    sharedErrorSources: string[];
    sharedDefenseQuestions: string[];
    provincialToNationalUpgrades: string[];
  };
  familyObjectiveMap?: {
    measurementObjects: string[];
    requiredOutputs: string[];
    observabilityAnchors: string[];
    successFloor: string[];
  };
  recommendedModules?: Array<{
    id: string;
    name: string;
    role: string;
    whenToUse: string[];
    requiredSignals: string[];
    failureAlerts: string[];
    quickestBench: string[];
    linkedProblems: string[];
    prerequisites: string[];
    unlocks: string[];
    avoidParallelWith: string[];
    minimumAssemblyOrder: string[];
    provincialFloor: string[];
    stretchSignals: string[];
    fallbackTriggers: string[];
    score?: number;
  }>;
  familyBuildPack?: {
    coreBom: string[];
    optionalUpgrades: string[];
    benchSetup: string[];
    calibrationWorkflow: string[];
    preContestQuickPack: string[];
  };
  familyFailureAtlas?: {
    recurringSymptoms: string[];
    firstChecks: string[];
    commonRootCauses: string[];
    fastRecoveryMoves: string[];
  };
  familyAnswerTemplate?: {
    thirtySecondPitch: string[];
    twoMinuteDefense: string[];
    errorClosureStory: string[];
    demoNarrative: string[];
  };
  familyMetricLadder?: {
    submissionFloor: string[];
    provincialReadySignals: string[];
    nationalStretchSignals: string[];
  };
  familyTrainingSequence?: {
    foundationPhase: string[];
    measurementPhase: string[];
    specializationPhase: string[];
    mockContestPhase: string[];
  };
  familyReferenceGraph?: {
    anchorProblems: string[];
    transferPatterns: string[];
    escalationEdges: string[];
    antiPatterns: string[];
  };
  familyDecisionTree?: {
    entryChecks: string[];
    preferredRoutes: string[];
    routeKillers: string[];
    fallbackRules: string[];
  };
  familyTriggerPack?: {
    strongPositiveCues: string[];
    weakPositiveCues: string[];
    disambiguators: string[];
    routeRejectionCues: string[];
  };
  familyCorrectionPack?: {
    commonConfusions: string[];
    recoveryChecks: string[];
    safeFallbackClaims: string[];
    escalationWarnings: string[];
  };
  familyHandoffPack?: {
    pivotTargets: Array<{
      targetFamily: string;
      triggerToPivot: string[];
      fastestPivotCheck: string[];
      reusableAssets: string[];
      stopReusingFirst: string[];
    }>;
  };
  familyStatementPatternPack?: {
    goalPhrases: string[];
    metricPhrases: string[];
    constraintPhrases: string[];
    deliverablePhrases: string[];
  };
  familyLexiconPack?: {
    goalTerms: string[];
    metricTerms: string[];
    constraintTerms: string[];
    deliverableTerms: string[];
  };
  familyNegativeExamplePack?: {
    examples: Array<{
      nearMissPrompt: string;
      whyItLooksLikeThisFamily: string[];
      whyItActuallyBelongsElsewhere: string[];
      redirectProfileId?: string;
      redirectFamily: string;
      fastestDisambiguationQuestion: string[];
      reuseWhat: string[];
      dropWhat: string[];
      matchedNearMissTerms?: string[];
      matchedRedirectTerms?: string[];
      signalStrength?: number;
    }>;
  };
  familyPairDisambiguationPack?: Array<{
    title: string;
    competingFamily: string;
    decidingQuestion: string;
    primaryWinsWhen: string[];
    competingWinsWhen: string[];
    reusableAssets: string[];
    wrongTurnCost: string[];
    matchedPrimaryTerms?: string[];
    matchedCompetingTerms?: string[];
    signalStrength?: number;
  }>;
  routeVariants?: Array<{
    id: string;
    name: string;
    matchedTerms?: string[];
    score?: number;
    bestFor: string;
    principle: string;
    hardwareGate?: string;
    measurementTargets?: string[];
    hardwareFocus: string[];
    softwareFocus: string[];
    validationChecklist?: string[];
    avoidWhen?: string[];
    provincialProof?: string[];
    stretchSignals?: string[];
    collapseSignals?: string[];
    tradeoffs: string[];
    typicalReferences: string[];
  }>;
}

export interface HistoricalProblem {
  id: string;
  year: number;
  code: string;
  title: LocalizedText;
  family: LocalizedText;
  tags: string[];
  highlights: LocalizedText[];
}

export const historicalProblemCatalog: HistoricalProblem[] = [
  {
    id: "1994-b",
    year: 1994,
    code: "1994 B",
    title: {
      en: "Multi-channel data acquisition system",
      zh: "多路数据采集系统",
    },
    family: {
      en: "Electrical parameter testing",
      zh: "电路参数测试",
    },
    tags: ["multi-channel acquisition", "data acquisition", "sampling", "channel consistency", "scan timing", "多路采集", "数据采集", "采样", "通道一致性", "扫描时序"],
    highlights: [
      {
        en: "Acquire multiple channels with defended scaling, timing, and channel-to-channel consistency.",
        zh: "以可答辩的量程、时序和通道一致性完成多路采集。",
      },
    ],
  },
  {
    id: "1995-d",
    year: 1995,
    code: "1995 D",
    title: {
      en: "Simple resistance, capacitance, and inductance tester",
      zh: "简易电阻、电容和电感测试仪",
    },
    family: {
      en: "Electrical parameter testing",
      zh: "电路参数测试",
    },
    tags: ["rcl meter", "resistance", "capacitance", "inductance", "parameter measurement", "电阻", "电容", "电感", "参数测量"],
    highlights: [
      {
        en: "Measure basic passive quantities through a compact and repeatable parameter route.",
        zh: "通过紧凑且可重复的参数链路测量基础无源量。",
      },
    ],
  },
  {
    id: "1997-b",
    year: 1997,
    code: "1997 B",
    title: {
      en: "Simple digital frequency meter",
      zh: "简易数字频率计",
    },
    family: {
      en: "Electrical parameter testing",
      zh: "电路参数测试",
    },
    tags: ["frequency meter", "counter", "period", "timing", "digital measurement", "频率计", "计数", "周期", "计时"],
    highlights: [
      {
        en: "Recover frequency from a clear timing observable and defended counting route.",
        zh: "从清晰的计时观测量和可答辩的计数链路恢复频率。",
      },
    ],
  },
  {
    id: "1999-b",
    year: 1999,
    code: "1999 B",
    title: {
      en: "Digital power-frequency RMS multimeter",
      zh: "数字式工频有效值多用表",
    },
    family: {
      en: "Electrical parameter testing",
      zh: "电路参数测试",
    },
    tags: ["rms meter", "multimeter", "power frequency", "effective value", "voltage", "current", "有效值", "多用表", "工频", "电压", "电流"],
    highlights: [
      {
        en: "Measure RMS-type quantities from a defended low-frequency acquisition chain.",
        zh: "从可答辩的低频采集链路测量有效值类参数。",
      },
    ],
  },
  {
    id: "1999-c",
    year: 1999,
    code: "1999 C",
    title: {
      en: "Frequency-characteristic tester",
      zh: "频率特性测试仪",
    },
    family: {
      en: "Electrical parameter testing",
      zh: "电路参数测试",
    },
    tags: ["frequency response", "transfer characteristic", "sweep", "response curve", "phase", "频率特性", "频率响应", "扫频", "响应曲线"],
    highlights: [
      {
        en: "Build a calibrated sweep route and defend the resulting frequency-response curve.",
        zh: "建立标定扫频链路并为频率响应曲线做答辩。",
      },
    ],
  },
  {
    id: "2001-b",
    year: 2001,
    code: "2001 B",
    title: {
      en: "Simple digital storage oscilloscope",
      zh: "简易数字存储示波器",
    },
    family: {
      en: "Electrical parameter testing",
      zh: "电路参数测试",
    },
    tags: ["digital storage oscilloscope", "waveform capture", "trigger", "sampling", "time base", "数字存储示波器", "波形采集", "触发", "采样"],
    highlights: [
      {
        en: "Capture and retain waveform truth with a defended trigger and sampling path.",
        zh: "通过可答辩的触发和采样链路捕获并保存波形真值。",
      },
    ],
  },
  {
    id: "2001-e",
    year: 2001,
    code: "2001 E",
    title: {
      en: "Data acquisition and transmission system",
      zh: "数据采集与传输系统",
    },
    family: {
      en: "Networked and remote measurement",
      zh: "网络化与远程测量",
    },
    tags: ["data acquisition", "transmission", "remote", "sampling node", "transport", "local sample", "sample truth", "local truth", "remote reconstruction", "数据采集", "传输", "远程", "采样节点"],
    highlights: [
      {
        en: "Acquire data locally and preserve useful measurement structure through the transport path.",
        zh: "本地采集数据并在传输链路中保持可用测量结构。",
      },
    ],
  },
  {
    id: "2003-c",
    year: 2003,
    code: "2003 C",
    title: {
      en: "Low-frequency digital phase meter",
      zh: "低频数字式相位测量仪",
    },
    family: {
      en: "Electrical parameter testing",
      zh: "电路参数测试",
    },
    tags: ["phase meter", "phase difference", "low frequency", "timing", "dual channel", "相位测量", "相位差", "低频", "双通道"],
    highlights: [
      {
        en: "Measure phase difference from a defended dual-path timing or waveform relationship.",
        zh: "从可答辩的双通道时序或波形关系中测量相位差。",
      },
    ],
  },
  {
    id: "2003-d",
    year: 2003,
    code: "2003 D",
    title: {
      en: "Simple logic analyzer",
      zh: "简易逻辑分析仪",
    },
    family: {
      en: "Electrical parameter testing",
      zh: "电路参数测试",
    },
    tags: ["logic analyzer", "digital waveform", "timing capture", "storage", "logic state", "逻辑分析仪", "数字波形", "时序采集", "逻辑状态"],
    highlights: [
      {
        en: "Capture digital timing truth and logic-state transitions through a defended acquisition path.",
        zh: "通过可答辩的采集链路捕获数字时序真值和逻辑状态变化。",
      },
    ],
  },
  {
    id: "2005-b",
    year: 2005,
    code: "2005 B",
    title: {
      en: "Op-amp parameter measurement device",
      zh: "运放参数测量装置",
    },
    family: {
      en: "Electrical parameter testing",
      zh: "电路参数测试",
    },
    tags: ["op amp", "parameter measurement", "gain", "offset", "measurement", "运放", "参数测量", "增益", "失调"],
    highlights: [
      {
        en: "Measure core op-amp parameters from calibrated excitation and reference comparisons.",
        zh: "通过标定激励和参考比对测量运放核心参数。",
      },
    ],
  },
  {
    id: "2005-c",
    year: 2005,
    code: "2005 C",
    title: {
      en: "Simple spectrum analyzer",
      zh: "简易频谱分析仪",
    },
    family: {
      en: "Distortion and spectrum measurement",
      zh: "失真与频谱测量",
    },
    tags: ["spectrum analyzer", "spectrum", "fft", "harmonic", "spur", "频谱分析", "频谱", "谐波", "杂散"],
    highlights: [
      {
        en: "Display and judge spectral components through a stable frequency-domain measurement path.",
        zh: "通过稳定的频域测量链路显示并判定频谱分量。",
      },
    ],
  },
  {
    id: "2017-e",
    year: 2017,
    code: "2017 E",
    title: {
      en: "Adaptive filter",
      zh: "自适应滤波器",
    },
    family: {
      en: "Adaptive filtering and noise suppression",
      zh: "自适应滤波与噪声抑制",
    },
    tags: ["adaptive filter", "noise", "filter", "自适应", "滤波", "噪声"],
    highlights: [
      {
        en: "Recover useful signal under interference with an adaptive filtering chain.",
        zh: "在干扰背景下通过自适应滤波链路恢复有效信号。",
      },
    ],
  },
  {
    id: "2017-f",
    year: 2017,
    code: "2017 F",
    title: {
      en: "AM signal processing experimental circuit",
      zh: "AM 信号处理实验电路",
    },
    family: {
      en: "Modulation recognition and parameter estimation",
      zh: "调制识别与参数估计",
    },
    tags: ["am", "signal processing", "modulation", "carrier", "envelope", "调制", "载波", "包络"],
    highlights: [
      {
        en: "Extract modulation features and recover useful parameters from an AM-oriented signal-processing chain.",
        zh: "通过面向 AM 的信号处理链路提取调制特征，并恢复有用参数。",
      },
    ],
  },
  {
    id: "2017-i",
    year: 2017,
    code: "2017 I",
    title: {
      en: "Visible-light indoor positioning",
      zh: "可见光室内定位装置",
    },
    family: {
      en: "Localization and ranging",
      zh: "定位与测距",
    },
    tags: ["visible light", "positioning", "localization", "indoor", "可见光", "定位", "测距"],
    highlights: [
      {
        en: "Estimate spatial position from optical signal geometry and calibrated references.",
        zh: "通过光信号几何关系和标定参考恢复空间位置。",
      },
    ],
  },
  {
    id: "2017-h",
    year: 2017,
    code: "2017 H",
    title: {
      en: "Remote amplitude-frequency characteristic tester",
      zh: "远程幅频特性测试装置",
    },
    family: {
      en: "Networked and remote measurement",
      zh: "网络化与远程测量",
    },
    tags: ["remote", "frequency response", "network", "幅频特性", "远程", "测试"],
    highlights: [
      {
        en: "Measure or reconstruct amplitude-frequency characteristics through a remote or distributed measurement path.",
        zh: "通过远程或分布式测量链路获取幅频特性结果。",
      },
    ],
  },
  {
    id: "2017-k",
    year: 2017,
    code: "2017 K",
    title: {
      en: "Single-phase appliance analysis and monitoring",
      zh: "单相用电器分析监测装置",
    },
    family: {
      en: "Power-load analysis and feature identification",
      zh: "负载分析与特征识别",
    },
    tags: ["appliance", "single phase", "monitoring", "load", "electrical signature", "state decision", "automatic diagnosis", "用电器", "监测", "单相", "电气特征", "状态判别"],
    highlights: [
      {
        en: "Analyze and monitor appliance behavior from electrical features and operating-state evidence.",
        zh: "通过电气特征和运行状态证据分析单相用电器行为。",
      },
    ],
  },
  {
    id: "2007-a",
    year: 2007,
    code: "2007 A",
    title: {
      en: "Audio signal analyzer",
      zh: "音频信号分析仪",
    },
    family: {
      en: "Distortion and spectrum measurement",
      zh: "失真与频谱测量",
    },
    tags: ["audio", "signal analyzer", "spectrum", "rms", "distortion", "音频", "信号分析", "频谱", "失真"],
    highlights: [
      {
        en: "Analyze audio-band signal metrics through a defendable capture and spectral route.",
        zh: "通过可答辩的采集与频谱链路分析音频信号指标。",
      },
    ],
  },
  {
    id: "2007-c",
    year: 2007,
    code: "2007 C",
    title: {
      en: "Digital oscilloscope",
      zh: "数字示波器",
    },
    family: {
      en: "Electrical parameter testing",
      zh: "电路参数测试",
    },
    tags: ["oscilloscope", "waveform", "sampling", "trigger", "timing", "示波器", "波形", "采样", "触发"],
    highlights: [
      {
        en: "Capture periodic waveforms with calibrated timing and amplitude observability.",
        zh: "以可校准的时间和幅值可观测性捕获周期波形。",
      },
    ],
  },
  {
    id: "2019-d",
    year: 2019,
    code: "2019 D",
    title: {
      en: "Simple circuit characteristic tester",
      zh: "简易电路特性测试仪",
    },
    family: {
      en: "Electrical parameter testing",
      zh: "电路参数测试",
    },
    tags: ["rlc", "impedance", "phase", "电路特性", "阻抗", "相位"],
    highlights: [
      {
        en: "Characterize circuit parameters from controlled excitation and multi-range capture.",
        zh: "通过受控激励和多量程采样测试电路参数。",
      },
    ],
  },
  {
    id: "2019-c",
    year: 2019,
    code: "2019 C",
    title: {
      en: "Line load and fault detection device",
      zh: "线路负载及故障检测装置",
    },
    family: {
      en: "Cable and transmission-line detection",
      zh: "线缆与传输线检测",
    },
    tags: ["line fault", "line load", "cable", "fault detection", "线路", "负载检测", "故障检测"],
    highlights: [
      {
        en: "Identify line load states and fault signatures through controlled probing and response classification.",
        zh: "通过受控探测和响应分类识别线路负载状态与故障特征。",
      },
    ],
  },
  {
    id: "2019-e",
    year: 2019,
    code: "2019 E",
    title: {
      en: "Internet-based signal transmission system",
      zh: "基于互联网的信号传输系统",
    },
    family: {
      en: "Networked and remote measurement",
      zh: "网络化与远程测量",
    },
    tags: ["internet", "signal transmission", "network", "remote", "timestamped transport", "frame identity", "local truth", "remote consistency", "remote reconstruction", "互联网", "信号传输", "网络"],
    highlights: [
      {
        en: "Transmit measured or generated signals over a network path while preserving usable structure and timing.",
        zh: "在网络链路上传输测量或生成信号，同时尽量保住可用结构和时序信息。",
      },
    ],
  },
  {
    id: "2007-g",
    year: 2007,
    code: "2007 G",
    title: {
      en: "Integrating DC digital voltmeter",
      zh: "积分式直流数字电压表",
    },
    family: {
      en: "Electrical parameter testing",
      zh: "电路参数测试",
    },
    tags: ["integrating voltmeter", "dc voltmeter", "dual slope", "integration", "line-frequency rejection", "直流电压表", "积分式", "双积分", "工频抑制"],
    highlights: [
      {
        en: "Measure DC voltage through an integration-based route that keeps offset and mains rejection explainable.",
        zh: "通过积分式测量链路测量直流电压，并保持零漂与工频抑制可答辩。",
      },
    ],
  },
  {
    id: "2009-d",
    year: 2009,
    code: "2009 D",
    title: {
      en: "Wireless environment monitoring simulation device",
      zh: "无线环境监测模拟装置",
    },
    family: {
      en: "Networked and remote measurement",
      zh: "网络化与远程测量",
    },
    tags: ["wireless monitoring", "environment monitoring", "remote node", "sensor transmission", "data acquisition", "transmission", "sampling node", "remote sample", "无线监测", "环境监测", "远程节点", "传输"],
    highlights: [
      {
        en: "Monitor environmental quantities through a distributed sensing and remote transport chain.",
        zh: "通过分布式感知和远程传输链路监测环境量。",
      },
    ],
  },
  {
    id: "2011-e",
    year: 2011,
    code: "2011 E",
    title: {
      en: "Broadband transmission characteristic tester",
      zh: "宽带直流放大器性能测试装置",
    },
    family: {
      en: "Unknown model identification",
      zh: "模型辨识",
    },
    tags: ["broadband", "transfer characteristic", "frequency response", "response curve", "tester", "宽带", "传输特性", "频率响应", "响应曲线"],
    highlights: [
      {
        en: "Characterize transfer behavior through repeatable response benchmarks and compact replay logic.",
        zh: "通过可重复响应基准和紧凑回放逻辑刻画传输行为。",
      },
    ],
  },
  {
    id: "2011-h",
    year: 2011,
    code: "2011 H",
    title: {
      en: "Waveform acquisition, storage, and playback system",
      zh: "波形采集、存储与回放系统",
    },
    family: {
      en: "Electrical parameter testing",
      zh: "电路参数测试",
    },
    tags: ["waveform acquisition", "storage", "playback", "sampling", "trigger", "波形采集", "存储", "回放", "采样"],
    highlights: [
      {
        en: "Acquire, store, and replay waveform information while preserving defended capture truth.",
        zh: "在保持可答辩采集真值的前提下采集、存储并回放波形信息。",
      },
    ],
  },
  {
    id: "2011-g",
    year: 2011,
    code: "2011 G",
    title: {
      en: "Auto-range ohmmeter",
      zh: "自动量程欧姆表",
    },
    family: {
      en: "Electrical parameter testing",
      zh: "电路参数测试",
    },
    tags: ["ohmmeter", "auto range", "resistance", "measurement", "reference resistor", "欧姆表", "自动量程", "电阻", "测量"],
    highlights: [
      {
        en: "Measure resistance accurately while keeping auto-range decisions tied to known references.",
        zh: "在保持自动量程决策可追溯到已知参考的前提下准确测量电阻。",
      },
    ],
  },
  {
    id: "2021-a",
    year: 2021,
    code: "2021 A",
    title: {
      en: "Signal distortion measurement device",
      zh: "信号失真度测量装置",
    },
    family: {
      en: "Distortion and spectrum measurement",
      zh: "失真与频谱测量",
    },
    tags: ["thd", "harmonic", "fft", "spectral truth", "harmonic anchor", "leakage control", "baseline benchmark", "失真", "谐波", "频谱"],
    highlights: [
      {
        en: "Measure fundamental and harmonics reliably and compute THD.",
        zh: "稳定测得基波和谐波并计算 THD。",
      },
    ],
  },
  {
    id: "2013-e",
    year: 2013,
    code: "2013 E",
    title: {
      en: "Transfer-characteristic tester",
      zh: "简易线路特性测试仪",
    },
    family: {
      en: "Electrical parameter testing",
      zh: "电路参数测试",
    },
    tags: ["transfer characteristic", "frequency response", "response curve", "phase", "sweep", "线路特性", "频率响应", "响应曲线", "扫频"],
    highlights: [
      {
        en: "Measure gain or phase response through a calibrated sweep and defend the resulting curve.",
        zh: "通过标定扫频测量增益或相位响应并为结果曲线做答辩。",
      },
    ],
  },
  {
    id: "2013-k",
    year: 2013,
    code: "2013 K",
    title: {
      en: "Easy lighting-line detector",
      zh: "易照明线路探测仪",
    },
    family: {
      en: "Cable and transmission-line detection",
      zh: "线缆与传输线检测",
    },
    tags: ["line detector", "lighting line", "line probing", "fault state", "线路探测", "照明线路", "探测", "故障状态"],
    highlights: [
      {
        en: "Probe line condition and infer wiring-related states from explicit electrical cues.",
        zh: "从显式电气线索中探测线路状态并判断布线相关情况。",
      },
    ],
  },
  {
    id: "2013-f",
    year: 2013,
    code: "2013 F",
    title: {
      en: "Infrared optical communication device",
      zh: "红外光通信装置",
    },
    family: {
      en: "Weak-signal reception and automatic receiver",
      zh: "弱信号接收与自动接收机",
    },
    tags: ["infrared communication", "optical link", "receiver", "transmitter", "link integrity", "红外通信", "光链路", "接收机", "发射机", "链路完整性"],
    highlights: [
      {
        en: "Transmit and recover directed infrared communication signals through a defendable optical receive chain.",
        zh: "通过可答辩的光学收发链路完成定向红外通信信号的发送与恢复。",
      },
    ],
  },
  {
    id: "2015-e",
    year: 2015,
    code: "2015 E",
    title: {
      en: "Simple radio spectrum analyzer",
      zh: "简易射频频谱分析仪",
    },
    family: {
      en: "Distortion and spectrum measurement",
      zh: "失真与频谱测量",
    },
    tags: ["rf spectrum", "spectrum analyzer", "radio", "spur", "harmonic", "射频频谱", "频谱分析", "杂散", "谐波"],
    highlights: [
      {
        en: "Inspect RF spectral content with a fixed benchmark and stable analyzer settings.",
        zh: "以固定基准和稳定分析设置检查射频频谱成分。",
      },
    ],
  },
  {
    id: "2015-f",
    year: 2015,
    code: "2015 F",
    title: {
      en: "Digital frequency meter",
      zh: "数字频率计",
    },
    family: {
      en: "Electrical parameter testing",
      zh: "电路参数测试",
    },
    tags: ["frequency meter", "counter", "period", "timing", "frequency", "频率计", "计数器", "周期", "频率"],
    highlights: [
      {
        en: "Estimate frequency from a clear timing route and known benchmark references.",
        zh: "从清晰的计时链路和已知基准参考中估计频率。",
      },
    ],
  },
  {
    id: "2017-m",
    year: 2017,
    code: "2017 M",
    title: {
      en: "Pipe-internal steel-ball motion measurement device",
      zh: "管道内钢珠运动测量装置",
    },
    family: {
      en: "Localization and ranging",
      zh: "定位与测距",
    },
    tags: ["motion measurement", "pipe", "position tracking", "speed estimate", "管道", "运动测量", "位置跟踪", "速度估计"],
    highlights: [
      {
        en: "Measure motion or position progression inside a constrained physical path.",
        zh: "测量受限物理路径内的运动或位置变化过程。",
      },
    ],
  },
  {
    id: "2017-o",
    year: 2017,
    code: "2017 O",
    title: {
      en: "DC motor speed measurement device",
      zh: "直流电动机测速装置",
    },
    family: {
      en: "Electrical parameter testing",
      zh: "电路参数测试",
    },
    tags: ["speed measurement", "tachometer", "rpm", "motor", "timing", "测速", "转速", "电机", "转速计"],
    highlights: [
      {
        en: "Measure rotational speed from a defended timing or pulse-observation route.",
        zh: "从可答辩的计时或脉冲观测链路测量转速。",
      },
    ],
  },
  {
    id: "2018-a",
    year: 2018,
    code: "2018 A",
    title: {
      en: "Current signal detection device",
      zh: "电流信号检测装置",
    },
    family: {
      en: "Distortion and spectrum measurement",
      zh: "失真与频谱测量",
    },
    tags: ["current detection", "non-contact sensing", "harmonic", "fft", "frequency", "amplitude", "电流检测", "非接触", "谐波", "频谱", "频率", "幅值"],
    highlights: [
      {
        en: "Detect current amplitude, frequency, and harmonic content from a defendable sensing and spectral-analysis chain.",
        zh: "通过可答辩的传感与频谱分析链路检测电流信号的幅值、频率和谐波成分。",
      },
    ],
  },
  {
    id: "2018-f",
    year: 2018,
    code: "2018 F",
    title: {
      en: "Wireless microphone public-address system",
      zh: "无线话筒扩音系统",
    },
    family: {
      en: "Weak-signal reception and automatic receiver",
      zh: "弱信号接收与自动接收机",
    },
    tags: ["wireless microphone", "fm", "receiver", "demodulation", "audio recovery", "short-range link", "无线话筒", "调频", "接收机", "解调", "音频恢复", "短距链路"],
    highlights: [
      {
        en: "Receive and amplify short-range FM-like wireless audio through a defendable RF-to-audio chain.",
        zh: "通过可答辩的射频到音频链路接收并放大短距离调频类无线语音信号。",
      },
    ],
  },
  {
    id: "2018-g",
    year: 2018,
    code: "2018 G",
    title: {
      en: "Simple digital signal timing analyzer",
      zh: "简易数字信号时序分析装置",
    },
    family: {
      en: "Electrical parameter testing",
      zh: "电路参数测试",
    },
    tags: ["timing analyzer", "digital sequence", "trigger", "state word", "timing display", "数字时序", "逻辑分析", "触发", "状态字", "时序显示"],
    highlights: [
      {
        en: "Capture, trigger, and display multi-channel digital timing truth with explicit state observability.",
        zh: "以显式状态可观测的方式完成多路数字时序的捕获、触发与显示。",
      },
    ],
  },
  {
    id: "2018-h",
    year: 2018,
    code: "2018 H",
    title: {
      en: "Simple power measurement device",
      zh: "简易功率测量装置",
    },
    family: {
      en: "Power-load analysis and feature identification",
      zh: "负载分析与特征识别",
    },
    tags: ["power measurement", "ac dc identification", "auto range", "voltage current", "load power", "功率测量", "交直流识别", "自动量程", "电压电流", "负载功率"],
    highlights: [
      {
        en: "Measure load power across DC and AC cases while keeping voltage-current observability and range logic explicit.",
        zh: "在交直流场景下测量负载功率，并保持电压电流观测链路与量程逻辑可解释。",
      },
    ],
  },
  {
    id: "2020-e",
    year: 2020,
    code: "2020 E",
    title: {
      en: "Amplifier nonlinear distortion research device",
      zh: "放大器非线性失真研究装置",
    },
    family: {
      en: "Distortion and spectrum measurement",
      zh: "失真与频谱测量",
    },
    tags: ["distortion", "amplifier", "harmonic", "thd", "nonlinear", "clean source", "drive sweep", "fft benchmark", "harmonic truth", "非线性失真", "谐波", "放大器"],
    highlights: [
      {
        en: "Study amplifier nonlinear distortion through controlled excitation, harmonic extraction, and distortion metrics.",
        zh: "通过受控激励、谐波提取和失真指标研究放大器的非线性失真行为。",
      },
    ],
  },
  {
    id: "2021-d",
    year: 2021,
    code: "2021 D",
    title: {
      en: "Internet-based camera measurement system",
      zh: "基于互联网的摄像测量系统",
    },
    family: {
      en: "Vision-assisted measurement",
      zh: "视觉辅助测量",
    },
    tags: ["camera", "measurement", "internet", "calibrated target", "local truth", "freshness", "stale-data", "remote mirror", "摄像", "测量", "远程"],
    highlights: [
      {
        en: "Combine image acquisition and remote transport for quantitative visual measurement.",
        zh: "结合图像采集与远程传输实现定量视觉测量。",
      },
    ],
  },
  {
    id: "2019-g",
    year: 2019,
    code: "2019 G",
    title: {
      en: "Dual-channel wireless simultaneous-voice transceiver system",
      zh: "双路语音同传的无线收发系统",
    },
    family: {
      en: "Weak-signal reception and automatic receiver",
      zh: "弱信号接收与自动接收机",
    },
    tags: ["receiver", "wireless voice", "dual channel", "demodulation", "lock", "reacquisition", "carrier recovery", "接收机", "无线语音", "双路", "解调", "锁定", "重锁定"],
    highlights: [
      {
        en: "Receive, separate, and recover dual wireless voice channels with a stable lock and replayable receive-chain evidence.",
        zh: "在可复现实验链路下完成双路无线语音的接收、分离与恢复，并证明锁定与接收链路稳定。",
      },
    ],
  },
  {
    id: "2020-g",
    year: 2020,
    code: "2020 G",
    title: {
      en: "Non-contact object size and shape measurement device",
      zh: "非接触物体尺寸形态测量装置",
    },
    family: {
      en: "Vision-assisted measurement",
      zh: "视觉辅助测量",
    },
    tags: ["non-contact", "vision", "size measurement", "shape measurement", "camera", "calibration target", "pixel-to-physical", "geometry solve", "known target", "pose robustness", "非接触", "尺寸测量", "形态测量"],
    highlights: [
      {
        en: "Recover object size or shape from a calibrated non-contact imaging chain.",
        zh: "通过标定后的非接触成像链路恢复物体尺寸或形态信息。",
      },
    ],
  },
  {
    id: "2021-e",
    year: 2021,
    code: "2021 E",
    title: {
      en: "Mixed digital-analog transmission transceiver",
      zh: "数字-模拟信号混合传输收发机",
    },
    family: {
      en: "Modulation recognition and signal separation",
      zh: "调制识别与信号分离",
    },
    tags: ["mixed transmission", "mixed waveform", "modulation", "demodulation", "family recognition", "intermediate cue", "receive chain", "mixture", "混合传输", "混合波形", "调制", "解调", "家族识别", "中间证据"],
    highlights: [
      {
        en: "Handle multiple signal forms in one chain and separate them reliably.",
        zh: "在一条链路里处理多种信号形式并稳定分离。",
      },
    ],
  },
  {
    id: "2021-h",
    year: 2021,
    code: "2021 H",
    title: {
      en: "Appliance analysis and identification device",
      zh: "用电器分析识别装置",
    },
    family: {
      en: "Power-load analysis and feature identification",
      zh: "负载分析与特征识别",
    },
    tags: ["appliance", "load", "current", "voltage", "feature table", "signature", "automatic diagnosis", "monitoring", "line-state diagnosis", "electrical cues", "识别", "负载", "特征表", "自动诊断"],
    highlights: [
      {
        en: "Recognize appliance categories from synchronized electrical features.",
        zh: "通过同步电气特征识别用电器类别。",
      },
    ],
  },
  {
    id: "2021-j",
    year: 2021,
    code: "2021 J",
    title: {
      en: "Periodic waveform recognition and parameter measurement device",
      zh: "周期信号波形识别及参数测量装置",
    },
    family: {
      en: "Electrical parameter testing",
      zh: "电路参数测试",
    },
    tags: ["waveform recognition", "periodic signal", "parameter measurement", "frequency", "duty cycle", "waveform", "波形识别", "周期信号", "参数测量", "频率", "占空比"],
    highlights: [
      {
        en: "Recognize periodic waveform classes and recover their measurable parameters from explicit time-domain observables.",
        zh: "从显式时域观测量中识别周期波形类别并恢复其可测参数。",
      },
    ],
  },
  {
    id: "2022-07-e",
    year: 2022,
    code: "2022-07 E",
    title: {
      en: "Sound-source localization and tracking system",
      zh: "声源定位跟踪系统",
    },
    family: {
      en: "Localization and ranging",
      zh: "定位与测距",
    },
    tags: ["sound source", "localization", "tracking", "angle", "position", "known point", "anchor", "acoustic", "声源", "定位", "跟踪", "角度", "坐标", "锚点"],
    highlights: [
      {
        en: "Estimate and track sound-source position from repeatable acoustic observables and calibrated geometry.",
        zh: "通过可重复的声学观测量与标定几何关系估计并跟踪声源位置。",
      },
    ],
  },
  {
    id: "2022-07-f",
    year: 2022,
    code: "2022-07 F",
    title: {
      en: "Signal modulation-index measurement device",
      zh: "信号调制度测量装置",
    },
    family: {
      en: "Modulation recognition and parameter estimation",
      zh: "调制识别与参数估计",
    },
    tags: ["modulation", "modulation index", "modulation depth", "carrier", "envelope", "parameter estimation", "调制", "调制度", "调幅度", "载波", "包络", "参数估计"],
    highlights: [
      {
        en: "Measure carrier-related modulation depth or index from an explicit feature-extraction chain rather than black-box inference.",
        zh: "通过显式特征提取链路测量与载波相关的调制度，而不是依赖黑箱判断。",
      },
    ],
  },
  {
    id: "2022-10-e",
    year: 2022,
    code: "2022-10 E",
    title: {
      en: "Wireless surveillance system based on CC3200",
      zh: "基于CC3200的无线监视系统",
    },
    family: {
      en: "Networked and remote measurement",
      zh: "网络化与远程测量",
    },
    tags: ["wireless monitoring", "remote", "distributed", "cc3200", "transport", "freshness", "identity", "无线监测", "远程", "分布式", "传输", "时效性", "身份一致性"],
    highlights: [
      {
        en: "Preserve local measurement truth through a wireless monitoring link with visible freshness and node identity.",
        zh: "在无线监测链路中保留本地测量真实性，并显式展示时效性与节点身份。",
      },
    ],
  },
  {
    id: "2024-c",
    year: 2024,
    code: "2024 C",
    title: {
      en: "Wireless transmission signal simulation system",
      zh: "无线传输信号模拟系统",
    },
    family: {
      en: "Modulation recognition and signal separation",
      zh: "调制识别与信号分离",
    },
    tags: ["wireless transmission", "signal simulation", "modulation", "demodulation", "carrier", "channel imitation", "intermediate cue", "无线传输", "信号模拟", "调制", "解调", "载波", "中间证据"],
    highlights: [
      {
        en: "Simulate a wireless transmission chain while keeping modulation, receive, and intermediate observables explainable.",
        zh: "构建无线传输模拟链路，并让调制、接收与中间观测量始终保持可解释。",
      },
    ],
  },
  {
    id: "2024-g",
    year: 2024,
    code: "2024 G",
    title: {
      en: "Simple recording shielding system",
      zh: "简易录音屏蔽系统",
    },
    family: {
      en: "Adaptive filtering and noise suppression",
      zh: "自适应滤波与噪声抑制",
    },
    tags: ["recording shielding", "masking", "acoustic suppression", "interference injection", "noise suppression", "before and after", "录音屏蔽", "掩蔽", "声学抑制", "干扰注入", "噪声抑制"],
    highlights: [
      {
        en: "Suppress or mask recordable target audio through a controlled interference or shielding chain.",
        zh: "通过受控干扰或屏蔽链路抑制、掩蔽可被录制的目标音频信息。",
      },
    ],
  },
  {
    id: "2024-b",
    year: 2024,
    code: "2024 B",
    title: {
      en: "Single-phase active power-filter experimental device",
      zh: "单相有源电力滤波实验装置",
    },
    family: {
      en: "Adaptive filtering and noise suppression",
      zh: "自适应滤波与噪声抑制",
    },
    tags: ["active power filter", "single phase", "harmonic suppression", "compensation", "before and after", "fft benchmark", "harmonic truth", "reference path", "有源电力滤波", "单相", "谐波抑制", "补偿"],
    highlights: [
      {
        en: "Suppress representative line-side interference or harmonic content through a controlled compensation or adaptive-filtering chain.",
        zh: "通过受控补偿或自适应滤波链路抑制代表性的线路干扰或谐波成分。",
      },
    ],
  },
  {
    id: "2023-b",
    year: 2023,
    code: "2023 B",
    title: {
      en: "Coaxial cable length and terminal-load detector",
      zh: "同轴电缆长度与终端负载检测装置",
    },
    family: {
      en: "Cable and transmission-line detection",
      zh: "线缆与传输线检测",
    },
    tags: ["coax", "cable", "termination", "同轴", "终端", "负载检测"],
    highlights: [
      {
        en: "Estimate cable length and classify open, short, and matched terminals.",
        zh: "估计线缆长度并判别开路、短路和匹配终端。",
      },
    ],
  },
  {
    id: "2023-c",
    year: 2023,
    code: "2023 C",
    title: {
      en: "Inductance and capacitance measurement device",
      zh: "电感电容测量装置",
    },
    family: {
      en: "Electrical parameter testing",
      zh: "电路参数测试",
    },
    tags: ["inductance", "capacitance", "anchor point", "frequency sweep", "response curve", "direct parameter anchor", "consistency", "电感", "电容", "量程切换"],
    highlights: [
      {
        en: "Measure passive components accurately with calibrated ranges.",
        zh: "通过标定量程实现无源器件高精度测量。",
      },
    ],
  },
  {
    id: "2023-d",
    year: 2023,
    code: "2023 D",
    title: {
      en: "Modulation recognition and parameter estimation device",
      zh: "信号调制方式识别与参数估计装置",
    },
    family: {
      en: "Modulation recognition and parameter estimation",
      zh: "调制识别与参数估计",
    },
    tags: ["modulation", "parameter estimation", "family labeling", "carrier", "symbol", "explicit cue", "调制识别", "参数估计", "家族判别", "载波", "码元"],
    highlights: [
      {
        en: "Recognize the modulation family and recover carrier or symbol parameters.",
        zh: "识别调制家族并恢复载波或码元参数。",
      },
    ],
  },
  {
    id: "2023-f",
    year: 2023,
    code: "2023 F",
    title: {
      en: "Intelligent positioning system based on sound propagation",
      zh: "基于声传播的智能定位系统",
    },
    family: {
      en: "Localization and ranging",
      zh: "定位与测距",
    },
    tags: ["sound", "positioning", "range", "known point", "anchor coordinates", "remote consistency", "visual overlay", "stale-data", "声传播", "定位", "测距"],
    highlights: [
      {
        en: "Recover position from propagation delay or multi-point acoustic geometry.",
        zh: "通过传播时延或多点声学几何关系恢复位置。",
      },
    ],
  },
  {
    id: "2023-h",
    year: 2023,
    code: "2023 H",
    title: {
      en: "Signal separation device",
      zh: "信号分离装置",
    },
    family: {
      en: "Signal separation and multi-component recovery",
      zh: "信号分离与多分量恢复",
    },
    tags: ["signal separation", "mixture", "interference", "recovered component", "interpretable output", "downstream support", "信号分离", "混合", "干扰", "恢复分量", "可解释输出"],
    highlights: [
      {
        en: "Recover useful signal components from a mixed observation chain.",
        zh: "从混合观测链路中恢复目标信号分量。",
      },
    ],
  },
  {
    id: "2023-j",
    year: 2023,
    code: "2023 J",
    title: {
      en: "Automatic line fault detection system",
      zh: "线路故障自动检测系统",
    },
    family: {
      en: "Cable and transmission-line detection",
      zh: "线缆与传输线检测",
    },
    tags: ["line fault", "automatic detection", "automatic diagnosis", "cable", "fault state", "line-state probing", "explicit cue", "线路故障", "自动检测", "自动诊断", "状态判别"],
    highlights: [
      {
        en: "Automatically detect line fault states from repeatable probing signatures and explicit state logic.",
        zh: "通过可重复的探测签名和显式状态逻辑自动检测线路故障状态。",
      },
    ],
  },
  {
    id: "2025-a",
    year: 2025,
    code: "2025 A",
    title: {
      en: "Energy-feedback converter load test device",
      zh: "能量回馈的变流器负载试验装置",
    },
    family: {
      en: "Power-load analysis and feature identification",
      zh: "负载分析与特征识别",
    },
    tags: ["energy feedback", "converter load test", "power flow", "load test", "voltage current", "mode transition", "能量回馈", "变流器负载", "功率流", "电压电流", "模式切换"],
    highlights: [
      {
        en: "Test converter load behavior through synchronous voltage-current observability and defended energy-flow evidence.",
        zh: "通过同步电压电流观测和可答辩的能量流证据完成变流器负载试验。",
      },
    ],
  },
  {
    id: "2025-b",
    year: 2025,
    code: "2025 B",
    title: {
      en: "Single-phase active power-filter experimental device",
      zh: "单相有源电力滤波实验装置",
    },
    family: {
      en: "Adaptive filtering and noise suppression",
      zh: "自适应滤波与噪声抑制",
    },
    tags: ["active power filter", "single phase", "harmonic suppression", "compensation", "power quality", "before and after", "有源电力滤波", "单相", "谐波抑制", "补偿", "电能质量"],
    highlights: [
      {
        en: "Suppress line-side harmonics through a controlled compensation chain with defended before-and-after evidence.",
        zh: "通过受控补偿链路抑制线侧谐波，并给出可答辩的前后对比证据。",
      },
    ],
  },
  {
    id: "2025-c",
    year: 2025,
    code: "2025 C",
    title: {
      en: "Monocular visual target measurement device",
      zh: "基于单目视觉的目标物测量装置",
    },
    family: {
      en: "Vision-assisted measurement",
      zh: "视觉辅助测量",
    },
    tags: ["monocular", "target measurement", "known point", "geometry anchor", "distance estimate", "pose", "calibrated target", "单目", "目标物测量", "视觉"],
    highlights: [
      {
        en: "Use calibrated monocular geometry to estimate size, distance, or pose.",
        zh: "通过标定后的单目几何估计尺寸、距离或姿态。",
      },
    ],
  },
  {
    id: "2025-d",
    year: 2025,
    code: "2025 D",
    title: {
      en: "Simple Ethernet twisted-pair tester",
      zh: "简易以太网双绞线测试仪",
    },
    family: {
      en: "Cable and transmission-line detection",
      zh: "线缆与传输线检测",
    },
    tags: ["ethernet", "twisted pair", "line-state diagnosis", "fault state", "automatic diagnosis", "electrical cues", "双绞线", "线缆测试"],
    highlights: [
      {
        en: "Measure line integrity and fault states on Ethernet-like cabling.",
        zh: "对以太网类线缆做完整性和故障状态检测。",
      },
    ],
  },
  {
    id: "2025-f",
    year: 2025,
    code: "2025 F",
    title: {
      en: "Simple automatic receiver",
      zh: "简易自动接收机",
    },
    family: {
      en: "Weak-signal reception and automatic receiver",
      zh: "弱信号接收与自动接收机",
    },
    tags: ["receiver", "demodulation", "weak signal", "relock", "false lock", "lock state", "carrier recovery", "接收机", "解调", "弱信号", "重锁定", "锁定状态"],
    highlights: [
      {
        en: "Lock, receive, and recover target information from weak or structured incoming signals.",
        zh: "从弱信号或结构化输入信号中锁定并恢复目标信息。",
      },
    ],
  },
  {
    id: "2025-g",
    year: 2025,
    code: "2025 G",
    title: {
      en: "Circuit model exploration device",
      zh: "电路模型探究装置",
    },
    family: {
      en: "Unknown model identification",
      zh: "模型辨识",
    },
    tags: ["model", "identification", "response", "compact model", "physically interpretable", "stimulus variation", "held-out replay", "direct parameter anchor", "response curve", "replay validation", "sweep consistency", "模型", "辨识", "响应"],
    highlights: [
      {
        en: "Recover a compact model from measured response and verify it by replay.",
        zh: "从测得响应中恢复紧凑模型，并通过回放验证。",
      },
    ],
  },
  {
    id: "2025-j",
    year: 2025,
    code: "2025 J",
    title: {
      en: "Ultrasonic beacon positioning system",
      zh: "超声信标定位系统",
    },
    family: {
      en: "Localization and ranging",
      zh: "定位与测距",
    },
    tags: ["ultrasonic beacon", "positioning", "time of flight", "anchor", "beacon", "超声信标", "定位", "飞行时间", "锚点"],
    highlights: [
      {
        en: "Estimate position from beacon timing and calibrated anchor relationships.",
        zh: "从信标时序和标定锚点关系中估计位置。",
      },
    ],
  },
];

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
      en: "This problem is closest to the electrical-parameter tester family: use known excitation plus amplitude and phase recovery to solve for impedance or RLC values.",
      zh: "这道题最接近电路参数测试类，核心路线是用已知激励配合幅值和相位恢复，反推出阻抗或 RLC 参数。",
    },
    approach: {
      en: "Build a sine-excitation measurement chain with dual-channel capture, a reference path, multi-range switching, and a parameter solver based on amplitude ratio plus phase difference.",
      zh: "推荐搭建正弦激励测量链路，采用双通道采样、参考通道、多量程切换，以及基于幅值比和相位差的参数反演求解器。",
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
            zh: "稳定正弦激励，最好支持在有效频段内扫频。",
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
          en: "Recommended devices",
          zh: "器件建议",
        },
        items: [
          {
            en: "STM32G4 or F4 class MCU, precision op-amp, analog switch or relay for ranges, and a stable reference source.",
            zh: "主控优先 STM32G4 或 F4，配精密运放、模拟开关或继电器量程切换，以及稳定参考源。",
          },
          {
            en: "If frequency span is wide, reserve a comparator or timer-capture path for phase and period support.",
            zh: "如果频率跨度大，预留比较器或定时器捕获链路辅助相位和周期测量。",
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
      { terms: ["电感", "电容", "rlc", "阻抗", "相位", "特性测试", "谐振"], weight: 4 },
      { terms: ["capacitance", "inductance", "impedance", "phase", "amplitude ratio", "resonance"], weight: 4 },
      { terms: ["电感", "电容", "阻抗", "相位", "特性测试", "谐振"], weight: 4 },
      { terms: ["量程", "扫频", "阻抗角", "参数测试"], weight: 2 },
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
    references: ["2020 E 放大器非线性失真研究装置", "2021 A 信号失真度测量装置"],
    summary: {
      en: "This problem matches the distortion and spectrum family: solve period estimation first, then compute harmonics and THD through a controlled FFT path.",
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
            en: "Estimate the period by zero crossing or autocorrelation before the FFT stage.",
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
          en: "Recommended devices",
          zh: "器件建议",
        },
        items: [
          {
            en: "STM32G4 is usually enough for low-to-mid FFT lengths. Add FPGA only if throughput and parallel filtering clearly demand it.",
            zh: "低中等点数 FFT 用 STM32G4 通常足够，只有在吞吐和并行滤波压力明显过大时才考虑 FPGA。",
          },
          {
            en: "Reserve a clean analog band-pass or anti-alias stage before discussing software-only fixes.",
            zh: "先把模拟带通或抗混叠级留好，再讨论纯软件补救。",
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
        en: "Test on a clean sine, then on injected second and third harmonic cases with known ratios.",
        zh: "先测纯净正弦，再测已知二次、三次谐波注入样例。",
      },
      {
        en: "Check repeatability across amplitude changes and sampling-length changes.",
        zh: "验证不同幅值、不同采样长度下的重复性。",
      },
      {
        en: "Cross-check THD against a reference source or a trusted waveform-generator setup.",
        zh: "用参考信号源或可信函数发生器链路交叉验证 THD。",
      },
    ],
    matchers: [
      { terms: ["失真", "谐波", "thd", "频谱", "fft", "基波"], weight: 4 },
      { terms: ["distortion", "harmonic", "spectrum", "fundamental", "leakage"], weight: 4 },
      { terms: ["窗函数", "自相关", "过零", "总谐波"], weight: 2 },
    ],
  },
  {
    id: "modulation",
    family: {
      en: "Modulation recognition and signal parameter estimation",
      zh: "调制识别与参数估计",
    },
    title: {
      en: "Modulation-recognition recommendation",
      zh: "调制识别类推荐方案",
    },
    references: ["2017 F AM 信号处理实验电路", "2023 D 信号调制方式识别与参数估计装置", "2021 E 数字-模拟信号混合传输收发机"],
    summary: {
      en: "This problem is closest to the modulation-recognition family: identify the signal type first, then estimate key parameters such as carrier, symbol timing, bandwidth, or modulation depth.",
      zh: "这道题更接近调制识别与参数估计类，重点是先识别信号类型，再估计载波、符号节拍、带宽或调制度等关键参数。",
    },
    approach: {
      en: "Use analog preselection plus a deterministic digital feature pipeline. Extract carrier and energy structure first, then classify AM, FM, ASK, FSK, PSK or related families through explicit rules.",
      zh: "推荐走模拟预选加确定性数字特征链路：先提取载波和能量结构，再通过显式规则识别 AM、FM、ASK、FSK、PSK 等类别。",
    },
    modules: [
      {
        title: {
          en: "Signal preparation",
          zh: "信号预处理",
        },
        items: [
          {
            en: "Band-limit the input and normalize amplitude before feature extraction.",
            zh: "在特征提取前先限带并做幅值归一化。",
          },
          {
            en: "Reserve a path for carrier-frequency estimation and one for symbol-rate or envelope analysis.",
            zh: "至少保留一条载波频率估计链路和一条符号率或包络分析链路。",
          },
        ],
      },
      {
        title: {
          en: "Feature and classification path",
          zh: "特征与分类链路",
        },
        items: [
          {
            en: "Use FFT, envelope variance, instantaneous frequency, zero-cross timing, or correlation features for deterministic classification.",
            zh: "通过 FFT、包络方差、瞬时频率、过零节拍或相关特征做确定性分类。",
          },
          {
            en: "Estimate carrier, modulation depth, deviation, or symbol rate after the family is identified.",
            zh: "在识别出调制家族后，再估计载波、调制度、频偏或码元速率。",
          },
        ],
      },
      {
        title: {
          en: "Recommended devices",
          zh: "器件建议",
        },
        items: [
          {
            en: "STM32G4 or a DSP-capable MCU is enough for many student-scale recognition tasks. Add FPGA only when multiple channels or very high IF rates are unavoidable.",
            zh: "多数学生级识别任务用 STM32G4 或带 DSP 指令的 MCU 就够了，只有多通道或很高中频时才值得上 FPGA。",
          },
          {
            en: "If the IF is high, down-convert first instead of pushing the whole burden onto the MCU ADC chain.",
            zh: "如果中频过高，优先考虑先下变频，不要把压力全甩给 MCU 的 ADC 链路。",
          },
        ],
      },
    ],
    tuningSteps: [
      {
        en: "Stabilize carrier estimation first, then tune the modulation-family classifier.",
        zh: "先把载波估计做稳，再调调制家族分类器。",
      },
      {
        en: "Validate each modulation family on clean synthetic samples before mixing noise and offsets.",
        zh: "先在干净合成样本上逐类验证，再叠加噪声和偏置。",
      },
      {
        en: "Only after classification is stable should you tighten parameter-estimation accuracy.",
        zh: "先保证识别稳定，再追参数估计精度。",
      },
    ],
    risks: [
      {
        en: "Carrier-offset and bandwidth errors can make one family look like another.",
        zh: "载波偏移和带宽估计错误会让不同调制家族互相伪装。",
      },
      {
        en: "Over-reliance on one feature makes the classifier fragile in noisy channels.",
        zh: "过度依赖单一特征，在噪声信道里会非常脆弱。",
      },
      {
        en: "Trying to solve classification and parameter precision at the same time often slows both down.",
        zh: "同时追分类和精确估参，往往会两头都拖慢。",
      },
    ],
    verification: [
      {
        en: "Prepare labeled AM, FM, ASK, FSK, and PSK samples with known parameters.",
        zh: "准备标注好的 AM、FM、ASK、FSK、PSK 样本及已知参数。",
      },
      {
        en: "Check classification robustness under amplitude drift, noise, and small carrier offset.",
        zh: "检查在幅值漂移、噪声和小载波偏移下的分类鲁棒性。",
      },
      {
        en: "Verify estimated carrier and modulation parameters against the source settings.",
        zh: "把载波和调制参数估计结果与信号源设置逐项比对。",
      },
    ],
    matchers: [
      { terms: ["调制", "识别", "参数估计", "载波", "调制度", "频偏", "码元"], weight: 4 },
      { terms: ["modulation", "estimate", "carrier", "symbol rate", "deviation", "bandwidth"], weight: 4 },
      { terms: ["am", "fm", "ask", "fsk", "psk", "qam"], weight: 3 },
    ],
  },
  {
    id: "localization",
    family: {
      en: "Localization and ranging",
      zh: "定位与测距",
    },
    title: {
      en: "Localization-and-ranging recommendation",
      zh: "定位测距类推荐方案",
    },
    references: ["2017 I 可见光室内定位装置", "2023 F 基于声传播的智能定位系统"],
    summary: {
      en: "This problem is closest to the localization and ranging family: convert propagation, geometry, or multi-point measurements into stable position estimates.",
      zh: "这道题最接近定位与测距类，核心是把传播信息、几何关系或多点观测转换成稳定的位置估计。",
    },
    approach: {
      en: "Lock the physical ranging principle first, then build a timing or geometry pipeline around calibrated references, synchronized capture, and deterministic solving.",
      zh: "推荐先锁定物理测距原理，再围绕标定参考、同步采样和确定性求解搭建时延或几何链路。",
    },
    modules: [
      {
        title: {
          en: "Reference and synchronization",
          zh: "参考与同步",
        },
        items: [
          {
            en: "Keep one stable timing or geometric reference so every measurement is aligned to the same baseline.",
            zh: "保留稳定的时序或几何参考，让每次测量都落在同一基线上。",
          },
          {
            en: "When multiple sensors exist, synchronize them before solving coordinates.",
            zh: "如果有多点传感器，先保证同步，再谈坐标求解。",
          },
        ],
      },
      {
        title: {
          en: "Distance or position solver",
          zh: "距离与位置求解",
        },
        items: [
          {
            en: "Use time of flight, phase difference, or calibrated projective geometry according to the signal medium.",
            zh: "根据介质不同，选择飞行时间、相位差或标定几何投影求解。",
          },
          {
            en: "Separate raw ranging from final coordinate solving so both can be debugged independently.",
            zh: "把原始测距和最终坐标求解拆开，便于独立调试。",
          },
        ],
      },
      {
        title: {
          en: "Recommended devices",
          zh: "器件建议",
        },
        items: [
          {
            en: "Reserve timer capture, comparator, or camera-calibration support according to whether the signal is acoustic, optical, or image-based.",
            zh: "根据是声学、光学还是图像型定位，分别预留定时捕获、比较器或相机标定支持。",
          },
          {
            en: "Use a deterministic physical model before adding heavy learned localization blocks.",
            zh: "优先用确定性物理模型，不要先上重学习型定位块。",
          },
        ],
      },
    ],
    tuningSteps: [
      {
        en: "Stabilize the reference timing or geometry first, then tune the ranging estimator.",
        zh: "先稳住参考时序或几何基线，再调距离估计器。",
      },
      {
        en: "Validate single-axis or single-point measurements before full 2D or 3D localization.",
        zh: "先做单轴或单点验证，再扩展到二维或三维定位。",
      },
      {
        en: "Only after raw distance is repeatable should you optimize coordinate output and UI.",
        zh: "只有原始距离重复性够好，才值得优化坐标输出和界面。",
      },
    ],
    risks: [
      {
        en: "A drifting reference baseline invalidates every later position result.",
        zh: "参考基线一漂，后面的定位结果都会失真。",
      },
      {
        en: "Combining unsynchronized sensors makes geometry look worse than it is.",
        zh: "多点传感不同步时，几何求解看起来会比实际更差。",
      },
      {
        en: "Skipping medium calibration leads to systematic ranging bias.",
        zh: "如果跳过介质标定，测距会带明显系统偏差。",
      },
    ],
    verification: [
      {
        en: "Test known distances or fixed reference points before arbitrary positions.",
        zh: "先测试已知距离或固定参考点，再测任意位置。",
      },
      {
        en: "Measure repeatability against angle, distance, and interference changes.",
        zh: "记录角度、距离和干扰变化下的重复性。",
      },
      {
        en: "Cross-check solved coordinates against physical markers or measured ground truth.",
        zh: "把求出的坐标与物理标记或实测真值做交叉验证。",
      },
    ],
    matchers: [
      { terms: ["定位", "测距", "距离", "坐标", "到达时间", "声传播", "可见光"], weight: 4 },
      { terms: ["localization", "ranging", "distance", "position", "time of flight", "triangulation"], weight: 4 },
      { terms: ["到达角", "相位差定位", "室内定位"], weight: 2 },
    ],
  },
  {
    id: "separation",
    family: {
      en: "Signal separation and multi-component recovery",
      zh: "信号分离与多分量恢复",
    },
    title: {
      en: "Signal-separation recommendation",
      zh: "信号分离类推荐方案",
    },
    references: ["2023 H 信号分离装置", "2021 E 数字-模拟信号混合传输收发机"],
    summary: {
      en: "This problem is closest to the signal-separation family: the focus is to recover multiple useful components from mixed observations without destroying the target metrics.",
      zh: "这道题更接近信号分离类，重点是在混合观测中恢复多个有效分量，并且不把目标指标带坏。",
    },
    approach: {
      en: "Classify the mixture structure first, then separate in the most physically consistent domain: analog preselection, time-domain gating, frequency-domain filtering, or synchronous demodulation.",
      zh: "推荐先判断混合结构，再选择物理上最顺手的分离域：模拟预选、时域门控、频域滤波或同步解调。",
    },
    modules: [
      {
        title: {
          en: "Mixture analysis",
          zh: "混合结构分析",
        },
        items: [
          {
            en: "Identify whether the overlap is in time, frequency, envelope, or modulation domain.",
            zh: "先判断重叠发生在时域、频域、包络域还是调制域。",
          },
          {
            en: "Define which metric matters most after separation: amplitude, waveform shape, timing, or recognition accuracy.",
            zh: "明确分离后最关键的指标到底是幅值、波形、时序还是识别正确率。",
          },
        ],
      },
      {
        title: {
          en: "Separation engine",
          zh: "分离主链路",
        },
        items: [
          {
            en: "Use analog band splitting, notch filters, synchronous demodulation, or digital FIR/IIR blocks according to the overlap mode.",
            zh: "根据重叠方式选择模拟分频、陷波、同步解调或数字 FIR/IIR 分离块。",
          },
          {
            en: "Keep one debug path that lets you inspect the mixed, intermediate, and final signals side by side.",
            zh: "保留一条调试通道，能同时看混合信号、中间信号和最终信号。",
          },
        ],
      },
      {
        title: {
          en: "Recommended devices",
          zh: "器件建议",
        },
        items: [
          {
            en: "Prefer a mixed analog-plus-digital design rather than trying to separate everything in software only.",
            zh: "优先采用模拟加数字的混合方案，不要把所有分离压力都压给纯软件。",
          },
          {
            en: "When bandwidth is high, add a dedicated analog filter or high-speed front-end before discussing advanced DSP.",
            zh: "带宽高时先加专用模拟滤波或高速前端，再谈复杂 DSP。",
          },
        ],
      },
    ],
    tuningSteps: [
      {
        en: "Reproduce the mixed signal stably before testing any separation block.",
        zh: "先把混合信号稳定复现出来，再验证任何分离块。",
      },
      {
        en: "Tune one separation stage at a time and measure how much useful signal it damages.",
        zh: "每次只调一层分离环节，并测它对有效信号造成的损伤。",
      },
      {
        en: "Only after the main component is stable should you chase edge-case recovery.",
        zh: "先稳住主分量，再追边角场景恢复效果。",
      },
    ],
    risks: [
      {
        en: "A filter that separates well may still destroy amplitude or phase metrics.",
        zh: "某个滤波器虽然分离得开，但可能把幅值或相位指标带坏。",
      },
      {
        en: "Separating only in software can fail when the front-end is already distorted or aliased.",
        zh: "如果前端已经失真或混叠，单靠软件分离往往救不回来。",
      },
      {
        en: "Over-tuning for one mixture case usually hurts generalization to another.",
        zh: "只针对一种混合情况过度调参，通常会牺牲泛化。",
      },
    ],
    verification: [
      {
        en: "Prepare at least three mixture patterns with known clean references.",
        zh: "至少准备 3 组混合样例，并保留对应的干净参考信号。",
      },
      {
        en: "Compare before and after separation in terms of amplitude, phase, and residual interference.",
        zh: "对比分离前后幅值、相位和残留干扰量。",
      },
      {
        en: "Validate both the easiest and hardest mixture settings, not only the middle case.",
        zh: "既要验证最容易的样例，也要验证最难的边界样例。",
      },
    ],
    matchers: [
      { terms: ["分离", "混合信号", "干扰", "叠加", "解混", "恢复"], weight: 4 },
      { terms: ["separate", "mixture", "interference", "notch", "demodulation"], weight: 4 },
      { terms: ["陷波", "同步解调", "滤波恢复"], weight: 2 },
    ],
  },
  {
    id: "adaptive-filtering",
    family: {
      en: "Adaptive filtering and noise suppression",
      zh: "自适应滤波与噪声抑制",
    },
    title: {
      en: "Adaptive-filtering recommendation",
      zh: "自适应滤波类推荐方案",
    },
    references: ["2017 E 自适应滤波器", "2024 B 单相有源电力滤波实验装置", "2023 H 信号分离装置"],
    summary: {
      en: "This problem is closest to adaptive filtering and noise suppression: build a recoverable signal path that adapts to interference instead of relying on one fixed filter setting.",
      zh: "这道题更接近自适应滤波与噪声抑制类，重点是建立能跟随干扰变化的恢复链路，而不是依赖固定滤波器参数。",
    },
    approach: {
      en: "Start with a stable reference or error signal, then select the simplest adaptive structure that can track the interference: LMS-like adaptation, constrained coefficient updates, or reference-assisted cancellation.",
      zh: "推荐先建立稳定的参考或误差信号，再选择最小够用的自适应结构，如 LMS 类更新、受限系数调整或参考辅助抵消。",
    },
    modules: [
      {
        title: {
          en: "Reference and error path",
          zh: "参考与误差链路",
        },
        items: [
          {
            en: "Make the reference signal observable and delay-aligned with the target path.",
            zh: "让参考信号可观测，并与目标链路做时延对齐。",
          },
          {
            en: "Define a stable error signal for coefficient adaptation.",
            zh: "定义稳定的误差信号，作为系数调整依据。",
          },
        ],
      },
      {
        title: {
          en: "Adaptive core",
          zh: "自适应核心",
        },
        items: [
          {
            en: "Use one simple adaptive law and control the step size before chasing faster convergence.",
            zh: "先用单一简单自适应律，并把步长控制稳，再追更快收敛。",
          },
          {
            en: "Keep coefficients bounded so the filter does not diverge during disturbance changes.",
            zh: "对系数做边界约束，防止干扰变化时滤波器发散。",
          },
        ],
      },
      {
        title: {
          en: "Recommended devices",
          zh: "器件建议",
        },
        items: [
          {
            en: "A DSP-friendly MCU is usually sufficient unless the filter length or bandwidth is very high.",
            zh: "只要滤波长度和带宽不过分夸张，带 DSP 指令的 MCU 通常就够了。",
          },
          {
            en: "If analog reference quality is poor, no adaptive algorithm will fully rescue the result.",
            zh: "如果模拟参考质量很差，再强的自适应算法也救不回来。",
          },
        ],
      },
    ],
    tuningSteps: [
      {
        en: "Validate the fixed filter path first, then enable adaptation.",
        zh: "先把固定滤波路径验证好，再打开自适应。",
      },
      {
        en: "Tune reference delay and step size before touching filter length.",
        zh: "先调参考时延和步长，再考虑滤波长度。",
      },
      {
        en: "Stress the algorithm with changing interference only after baseline convergence is stable.",
        zh: "只有基础收敛稳定后，才值得去压变化干扰场景。",
      },
    ],
    risks: [
      {
        en: "An unaligned reference makes the adaptive loop look unstable even when the math is fine.",
        zh: "参考链路没对齐时，就算算法本身没问题，系统也会表现得像在发散。",
      },
      {
        en: "Large step sizes can create impressive short-term suppression but terrible long-term drift.",
        zh: "步长过大虽然短期压噪明显，但长期很容易漂掉。",
      },
      {
        en: "A changing noise source can expose overfitting to one interference pattern.",
        zh: "干扰源一变化，就会暴露出你是否只适配了单一样本。",
      },
    ],
    verification: [
      {
        en: "Measure convergence time, residual noise, and steady-state distortion together.",
        zh: "同时记录收敛时间、残余噪声和稳态失真。",
      },
      {
        en: "Test both stationary and drifting interference patterns.",
        zh: "既测试平稳干扰，也测试漂移干扰。",
      },
      {
        en: "Keep one clean reference output for before-and-after comparison.",
        zh: "保留一条干净参考输出做前后对比。",
      },
    ],
    matchers: [
      { terms: ["自适应", "滤波", "噪声抑制", "消噪", "参考噪声", "误差信号"], weight: 4 },
      { terms: ["adaptive", "filter", "noise suppression", "lms", "cancellation"], weight: 4 },
      { terms: ["步长", "收敛", "残差"], weight: 2 },
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
    references: ["2019 C 线路负载及故障检测装置", "2023 B 同轴电缆长度与终端负载检测装置", "2023 J 自动线路故障检测系统", "2025 D 简易以太网双绞线测试仪"],
    summary: {
      en: "This problem is closest to cable and transmission-line detection: estimate line length and classify terminal state from reflected or phase-shifted responses.",
      zh: "这道题最接近线缆与传输线检测类，需要通过反射或相位响应估计长度并判定终端状态。",
    },
    approach: {
      en: "Pick one physical route and finish it well: pulse echo or multi-frequency phase. Use a controlled launch network, a return capture path, and a dedicated fault classifier.",
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
            en: "Use time of flight or phase-difference solving with a calibrated cable velocity factor.",
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
        en: "Test repeated plug and unplug cycles to observe threshold drift and connector variance.",
        zh: "做重复插拔测试，观察阈值漂移和连接器离散性。",
      },
      {
        en: "Measure error versus cable length and keep a compensation table instead of a single constant.",
        zh: "记录误差随长度变化的趋势，不要只靠一个固定常数补偿。",
      },
    ],
    matchers: [
      { terms: ["同轴", "双绞线", "线缆", "电缆", "终端", "开路", "短路", "匹配"], weight: 4 },
      { terms: ["coax", "cable", "twisted pair", "termination", "open", "short", "matched", "pair state", "pair integrity", "bad contact", "mismatch", "line fault", "fault state", "pair diagnosis", "electrical cues", "explicit electrical cues", "passive line"], weight: 4 },
      { terms: ["automatic twisted-pair diagnosis", "twisted-pair diagnosis", "repeatable electrical cues", "pair-sensitive cue"], weight: 5 },
      { terms: ["同轴", "双绞线", "线缆", "电缆", "终端", "开路", "短路", "匹配"], weight: 4 },
      { terms: ["长度", "回波", "时延", "反射", "负载检测", "t dr"], weight: 2 },
    ],
  },
  {
    id: "receiver",
    family: {
      en: "Weak-signal reception and automatic receiver",
      zh: "弱信号接收与自动接收机",
    },
    title: {
      en: "Receiver recommendation",
      zh: "接收机类推荐方案",
    },
    references: ["2025 F 简易自动接收机", "2021 E 数字-模拟信号混合传输收发机"],
    summary: {
      en: "This problem is closest to the receiver family: the key is to recover useful information from weak or structured RF/IF-like signals with a stable receive chain.",
      zh: "这道题更接近接收机类，核心是通过稳定的接收链路，从弱信号或结构化 RF/IF 信号中恢复有效信息。",
    },
    approach: {
      en: "Split the system into front-end gain control, frequency selection, demodulation, and decision output. Keep the receive chain observable at each stage instead of making it a black box.",
      zh: "推荐把系统拆成前端增益控制、选频、解调和判决输出四层，并让每层都可观测，不要做成黑盒。",
    },
    modules: [
      {
        title: {
          en: "Receive front-end",
          zh: "接收前端",
        },
        items: [
          {
            en: "Use selectable gain, filtering, or down-conversion to keep the signal in a measurable range.",
            zh: "通过可选增益、滤波或下变频，把信号维持在可测量范围内。",
          },
          {
            en: "Add RSSI or envelope visibility so weak-signal tuning is not blind.",
            zh: "加入 RSSI 或包络可视化，避免弱信号调试全靠猜。",
          },
        ],
      },
      {
        title: {
          en: "Demodulation and decision",
          zh: "解调与判决",
        },
        items: [
          {
            en: "Choose the smallest demodulation chain that matches the signal family: envelope, correlation, coherent, or symbol timing recovery.",
            zh: "按信号家族选择最小够用的解调链路：包络、相关、相干解调或码元恢复。",
          },
          {
            en: "Keep the decision threshold or lock criterion adjustable during tuning.",
            zh: "调试阶段让判决阈值或锁定判据可调。",
          },
        ],
      },
      {
        title: {
          en: "Recommended devices",
          zh: "器件建议",
        },
        items: [
          {
            en: "Prioritize analog front-end quality before chasing large software decoders.",
            zh: "先保证模拟接收前端质量，再谈复杂的软件解码器。",
          },
          {
            en: "A small MCU plus dedicated analog blocks often outperforms a pure MCU-only approach on weak signals.",
            zh: "面对弱信号，小 MCU 加专用模拟功能块通常比纯 MCU 硬扛更稳。",
          },
        ],
      },
    ],
    tuningSteps: [
      {
        en: "Start with signal presence detection before full content recovery.",
        zh: "先保证能稳定检测到信号存在，再谈完整内容恢复。",
      },
      {
        en: "Tune gain and filtering before the final decision logic.",
        zh: "先调增益和滤波，再调最终判决逻辑。",
      },
      {
        en: "Use synthetic or known transmit patterns before field-like weak-signal cases.",
        zh: "先用已知发射样式调通，再上真实弱信号场景。",
      },
    ],
    risks: [
      {
        en: "Chasing digital rescue while the analog front-end is unstable wastes time.",
        zh: "模拟前端不稳时，指望数字算法兜底基本是在浪费时间。",
      },
      {
        en: "Automatic gain logic can oscillate if the lock criterion is noisy.",
        zh: "锁定判据不稳时，自动增益逻辑很容易振荡。",
      },
      {
        en: "A receiver that works only on strong lab signals is not contest-usable.",
        zh: "只能在实验室强信号下工作的接收机，不算比赛可用方案。",
      },
    ],
    verification: [
      {
        en: "Test signal acquisition from strong to weak conditions and record the failure boundary.",
        zh: "从强信号到弱信号逐级测试接收能力，并记录失效边界。",
      },
      {
        en: "Verify demodulated output against known transmitted patterns.",
        zh: "把解调输出与已知发射样式逐项比对。",
      },
      {
        en: "Observe lock time, relock behavior, and false-trigger rate under noise.",
        zh: "观察噪声下的锁定时间、重锁行为和误触发率。",
      },
    ],
    matchers: [
      { terms: ["接收机", "自动接收", "解调", "弱信号", "锁定", "同步"], weight: 4 },
      { terms: ["receiver", "demodulation", "weak signal", "lock", "synchronization"], weight: 4 },
      { terms: ["中频", "载波恢复", "码元恢复"], weight: 2 },
    ],
  },
  {
    id: "load-analysis",
    family: {
      en: "Power-load analysis and feature identification",
      zh: "负载分析与特征识别",
    },
    title: {
      en: "Load-analysis recommendation",
      zh: "负载分析类推荐方案",
    },
    references: ["2021 H 用电器分析识别装置", "2017 K 单相用电器分析监测装置"],
    summary: {
      en: "This problem belongs to feature-based load analysis: sample voltage and current coherently, then identify the load or state from stable electrical features.",
      zh: "这道题属于基于特征的负载分析类，核心是同步采样电压电流，再从稳定的电气特征中识别负载或状态。",
    },
    approach: {
      en: "Treat it as an electrical-feature recognition problem rather than a generic AI task. Extract steady-state and cycle-based features first, then perform deterministic classification or lightweight fitting.",
      zh: "推荐把它当成电气特征识别问题，而不是泛化 AI 问题。先提取稳态和周期类特征，再做确定性分类或轻量拟合。",
    },
    modules: [
      {
        title: {
          en: "Voltage and current capture",
          zh: "电压电流采样",
        },
        items: [
          {
            en: "Synchronously sample voltage and current with an explicit zero-cross or timing reference.",
            zh: "在明确的过零或时序参考下同步采样电压和电流。",
          },
          {
            en: "Keep the current-sense chain linear and well-isolated from switching noise.",
            zh: "让电流采样链路保持线性，并尽量隔离开关噪声。",
          },
        ],
      },
      {
        title: {
          en: "Feature extraction and classification",
          zh: "特征提取与识别",
        },
        items: [
          {
            en: "Extract RMS, crest factor, phase, active and reactive features, harmonic cues, or transient signatures.",
            zh: "提取 RMS、峰值因子、相位、有功无功特征、谐波线索或瞬态特征。",
          },
          {
            en: "Use deterministic classification, threshold trees, or least-squares fitting before considering heavy models.",
            zh: "优先用确定性分类、阈值树或最小二乘拟合，再考虑重模型。",
          },
        ],
      },
      {
        title: {
          en: "Recommended devices",
          zh: "器件建议",
        },
        items: [
          {
            en: "Add an isolated voltage or current sensor path if safety and common-mode conditions are harsh.",
            zh: "如果安全或共模环境复杂，优先加隔离式电压或电流传感链路。",
          },
          {
            en: "Reserve enough storage for cycle-by-cycle feature logs during debugging.",
            zh: "调试时保留足够的逐周期特征日志缓存。",
          },
        ],
      },
    ],
    tuningSteps: [
      {
        en: "Calibrate voltage and current channels before discussing identification accuracy.",
        zh: "先标定电压电流通道，再谈识别精度。",
      },
      {
        en: "Validate feature repeatability on one known appliance before expanding categories.",
        zh: "先在一类已知负载上验证特征重复性，再扩展类别。",
      },
      {
        en: "Add classification rules only after the feature spread is visible in logs.",
        zh: "先让日志里能明显看出特征分布，再补分类规则。",
      },
    ],
    risks: [
      {
        en: "Bad synchronization between voltage and current destroys phase-based features.",
        zh: "电压电流不同步会直接毁掉相位类特征。",
      },
      {
        en: "Classifying from noisy instantaneous values instead of cycle features usually fails.",
        zh: "拿噪声很大的瞬时值直接分类，通常会失败。",
      },
      {
        en: "A feature set tuned to one appliance batch may not generalize to another.",
        zh: "只针对某一批样机调出来的特征，很可能不泛化。",
      },
    ],
    verification: [
      {
        en: "Repeat measurements across multiple appliances or load states of the same family.",
        zh: "对同一类多个负载或多种状态重复测量。",
      },
      {
        en: "Track how features move under supply variation and noise injection.",
        zh: "观察供电变化和噪声叠加时特征如何漂移。",
      },
      {
        en: "Cross-check identification on unseen samples rather than only the calibration set.",
        zh: "不要只测标定样本，还要测未见过的样本。",
      },
    ],
    matchers: [
      { terms: ["用电器", "识别", "电流", "电压", "负载分析", "有功", "无功"], weight: 4 },
      { terms: ["appliance", "load", "current", "voltage", "power factor", "reactive"], weight: 4 },
      { terms: ["互感器", "过零", "周期特征"], weight: 2 },
    ],
  },
  {
    id: "vision-measurement",
    family: {
      en: "Vision-assisted measurement",
      zh: "视觉辅助测量",
    },
    title: {
      en: "Vision-measurement recommendation",
      zh: "视觉测量类推荐方案",
    },
    references: ["2020 G 非接触物体尺寸形态测量装置", "2021 D 基于互联网的摄像测量系统", "2025 C 基于单目视觉的目标物测量装置"],
    summary: {
      en: "This problem is closest to vision-assisted measurement: use imaging only as the sensing entry, then convert geometry into stable quantitative outputs.",
      zh: "这道题更接近视觉辅助测量类，重点不是“看见”，而是把图像几何信息稳定地变成定量测量结果。",
    },
    approach: {
      en: "Separate the pipeline into image acquisition, calibration, feature localization, geometric solving, and result stabilization. Do not let the vision block become a black box.",
      zh: "推荐把流程拆成图像采集、标定、特征定位、几何求解和结果稳定化五层，不要让视觉模块变成黑盒。",
    },
    modules: [
      {
        title: {
          en: "Imaging and calibration",
          zh: "成像与标定",
        },
        items: [
          {
            en: "Control camera placement, lens distortion, and illumination before discussing algorithms.",
            zh: "先控制相机安装、畸变和光照，再谈算法。",
          },
          {
            en: "Prepare a repeatable calibration target or geometric reference.",
            zh: "准备可重复使用的标定靶或几何参考物。",
          },
        ],
      },
      {
        title: {
          en: "Feature localization and solving",
          zh: "特征定位与求解",
        },
        items: [
          {
            en: "Locate edges, corners, blobs, or markers first, then convert them into size, distance, or position estimates.",
            zh: "先定位边缘、角点、斑块或标记，再转换成尺寸、距离或位置估计。",
          },
          {
            en: "Use deterministic geometry and compensation before considering heavier AI models.",
            zh: "优先用确定性几何和补偿，没必要时不要先上重 AI 模型。",
          },
        ],
      },
      {
        title: {
          en: "Recommended devices",
          zh: "器件建议",
        },
        items: [
          {
            en: "Use a camera-capable MCU or edge SoC only when plain STM32 cannot handle the image stage in time.",
            zh: "只有当普通 STM32 扛不住图像阶段时，才上带视觉能力的 SoC。",
          },
          {
            en: "Keep one simple diagnostic overlay so measurement failure can be seen directly on the image.",
            zh: "保留简单诊断叠加层，让测量失败时能直接在图像上看出原因。",
          },
        ],
      },
    ],
    tuningSteps: [
      {
        en: "Lock camera geometry and lighting before tuning feature extraction.",
        zh: "先锁相机几何和光照，再调特征提取。",
      },
      {
        en: "Validate pixel-level repeatability before translating pixels into real-world units.",
        zh: "先验证像素级重复性，再把像素换成实际量纲。",
      },
      {
        en: "Only after geometric solving is stable should you optimize UI and speed.",
        zh: "先把几何求解做稳，再优化界面和速度。",
      },
    ],
    risks: [
      {
        en: "Lighting variation often dominates more than algorithm choice.",
        zh: "光照变化的影响常常比算法选型更大。",
      },
      {
        en: "Skipping calibration makes all later distance or size estimates drift.",
        zh: "跳过标定会让后续距离和尺寸估计整体漂掉。",
      },
      {
        en: "A good detector does not automatically imply a good measurement result.",
        zh: "检测得准不等于测量得准。",
      },
    ],
    verification: [
      {
        en: "Test the same target under different distances, angles, and light conditions.",
        zh: "同一目标在不同距离、角度和光照下重复测试。",
      },
      {
        en: "Cross-check the final size or distance against a physical ruler or caliper.",
        zh: "最终尺寸或距离必须拿尺子或卡尺交叉验证。",
      },
      {
        en: "Record both localization error and final measurement error.",
        zh: "同时记录定位误差和最终测量误差。",
      },
    ],
    matchers: [
      { terms: ["视觉", "相机", "摄像", "测量", "单目", "图像", "目标物"], weight: 4 },
      { terms: ["vision", "camera", "image", "monocular", "distance", "size"], weight: 4 },
      { terms: ["标定", "角点", "边缘", "几何"], weight: 2 },
    ],
  },
  {
    id: "networked-measurement",
    family: {
      en: "Networked and remote measurement",
      zh: "网络化与远程测量",
    },
    title: {
      en: "Networked-measurement recommendation",
      zh: "网络化测量类推荐方案",
    },
    references: ["2017 H 远程幅频特性测试装置", "2021 D 基于互联网的摄像测量系统", "2019 E 基于互联网的信号传输系统"],
    summary: {
      en: "This problem is closest to networked measurement: the challenge is not only sensing, but transporting, synchronizing, and presenting usable data over a network path.",
      zh: "这道题更接近网络化测量类，难点不只是感知本身，还包括网络链路上的传输、同步和结果呈现。",
    },
    approach: {
      en: "Separate the problem into local sensing, transport framing, latency control, and remote reconstruction or display. Keep measurement integrity more important than feature richness.",
      zh: "推荐把问题拆成局部感知、传输封装、时延控制和远端重建/显示四层，并始终把测量完整性放在花哨功能前面。",
    },
    modules: [
      {
        title: {
          en: "Local measurement node",
          zh: "本地测量节点",
        },
        items: [
          {
            en: "Acquire and validate data locally before sending it over the network.",
            zh: "先在本地把数据采准、验稳，再送上网络。",
          },
          {
            en: "Attach timestamps, sequence numbers, or frame IDs to every useful packet.",
            zh: "给每个有效数据包附带时间戳、序号或帧编号。",
          },
        ],
      },
      {
        title: {
          en: "Transport and reconstruction",
          zh: "传输与重建",
        },
        items: [
          {
            en: "Design a compact packet format with explicit integrity checks and recovery rules.",
            zh: "设计紧凑的数据帧格式，并明确完整性校验与恢复规则。",
          },
          {
            en: "Keep the remote side capable of showing loss, delay, and validity instead of hiding them.",
            zh: "远端要能显示丢包、延迟和有效性，而不是把问题藏起来。",
          },
        ],
      },
      {
        title: {
          en: "Recommended devices",
          zh: "器件建议",
        },
        items: [
          {
            en: "Keep the network stack simple enough to debug. A stable UART-to-host or lightweight TCP/UDP path often beats an overbuilt protocol stack.",
            zh: "网络栈尽量简单可调，稳定的串口到上位机或轻量 TCP/UDP 路线，往往比堆大协议更实用。",
          },
          {
            en: "Separate measurement timing from transport timing so network jitter does not corrupt raw sensing.",
            zh: "把测量时序和传输时序分离，避免网络抖动污染原始感知链路。",
          },
        ],
      },
    ],
    tuningSteps: [
      {
        en: "Validate the sensing node offline first, then add transport.",
        zh: "先离线验证测量节点，再上网络传输。",
      },
      {
        en: "Stress packet loss and latency before polishing the final UI.",
        zh: "在美化界面前先拿丢包和延迟去压系统。",
      },
      {
        en: "Only after link stability is proven should you optimize update rate.",
        zh: "链路稳定性没证实前，不要急着追刷新率。",
      },
    ],
    risks: [
      {
        en: "A pretty remote display can hide severe timing corruption.",
        zh: "远端显示再好看，也可能掩盖严重的时序污染。",
      },
      {
        en: "Network latency can be mistaken for sensing delay if timestamps are missing.",
        zh: "如果没有时间戳，网络延迟很容易被误判成测量延迟。",
      },
      {
        en: "An overbuilt transport stack can consume more time than the measurement problem itself.",
        zh: "过于复杂的传输栈，可能比测量问题本身还费时间。",
      },
    ],
    verification: [
      {
        en: "Measure end-to-end delay, packet integrity, and data repeatability separately.",
        zh: "分别记录端到端延迟、数据完整性和重复性。",
      },
      {
        en: "Inject network jitter or packet drops and observe recovery behavior.",
        zh: "主动注入链路抖动和丢包，观察恢复行为。",
      },
      {
        en: "Cross-check remote results against local logs to confirm no silent corruption.",
        zh: "把远端结果与本地日志对照，确认没有静默错误。",
      },
    ],
    matchers: [
      { terms: ["互联网", "远程", "网络", "传输系统", "摄像测量", "上位机"], weight: 4 },
      { terms: ["network", "remote", "internet", "transport", "packet", "latency"], weight: 4 },
      { terms: ["时间戳", "丢包", "同步"], weight: 2 },
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
    references: ["2025 G 电路模型探究装置", "2019 D 简易电路特性测试仪", "2023 C 电感电容测量装置"],
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
      { terms: ["最小二乘", "扫频", "回放", "参数拟合"], weight: 2 },
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
    "2017 E 自适应滤波器",
    "2017 H 远程幅频特性测试装置",
    "2017 I 可见光室内定位装置",
    "2017 K 单相用电器分析监测装置",
    "2019 D 简易电路特性测试仪",
    "2021 D 基于互联网的摄像测量系统",
    "2021 A 信号失真度测量装置",
    "2021 H 用电器分析识别装置",
    "2023 B 同轴电缆长度与终端负载检测装置",
    "2023 C 电感电容测量装置",
    "2023 D 信号调制方式识别与参数估计装置",
    "2023 F 基于声传播的智能定位系统",
    "2023 H 信号分离装置",
    "2025 G 电路模型探究装置",
  ],
  summary: {
    en: "The problem does not strongly match one distilled family, so the recommendation follows the common instrumentation chain: excitation, front-end, capture, feature extraction, solving, calibration, and display.",
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

const sharedTierCatalog: Record<string, TierOption[]> = {
  measurement: [
    {
      id: "baseline",
      name: {
        en: "Minimal viable board",
        zh: "可交题基础版",
      },
      fit: {
        en: "Use this when time is tight and the priority is to close the full measurement loop quickly.",
        zh: "适合时间紧、优先把完整测量闭环先跑通的队伍。",
      },
      whenToChoose: {
        en: "Choose this when you still need to stabilize excitation, DMA capture, and basic display.",
        zh: "当你还在补激励、DMA 采样和基础显示闭环时，先走这档。",
      },
      hardware: [
        {
          en: "Single MCU board with one validated analog path and one conservative range.",
          zh: "单 MCU 母板，先做一条稳定模拟链路和一个保守量程。",
        },
        {
          en: "Keep protection, reference, and debug pads even if auto-range is not finished yet.",
          zh: "即使自动量程没做完，也要先保留保护、参考链路和测试点。",
        },
      ],
      software: [
        {
          en: "Prioritize fixed-frequency sampling, RMS, frequency, and basic result output.",
          zh: "软件先保住定频采样、RMS、频率和基础结果输出。",
        },
        {
          en: "Avoid large algorithm branches until the raw waveform and timing are trustworthy.",
          zh: "在原始波形和时序不可信前，不要急着堆大算法分支。",
        },
      ],
    },
    {
      id: "provincial",
      name: {
        en: "Stable provincial-first-prize route",
        zh: "稳省一等奖版",
      },
      fit: {
        en: "Best default tier for most teams: balanced accuracy, robustness, and explainability.",
        zh: "这是大多数队伍的默认主线，兼顾精度、稳定性和答辩可解释性。",
      },
      whenToChoose: {
        en: "Choose this when your team already has STM32 bring-up ability and can afford calibration time.",
        zh: "队伍已有 STM32 联调基础，并且能投入时间做标定时，优先走这档。",
      },
      hardware: [
        {
          en: "Add reference path, multi-range switching, and at least one timing-assist path such as comparator capture.",
          zh: "补齐参考通道、多量程切换，以及比较器捕获这类时序辅助链路。",
        },
        {
          en: "Reserve stable connectors and serviceable front-end parts for contest rework.",
          zh: "前端连接器和关键阻容要便于比赛现场返修和更换。",
        },
      ],
      software: [
        {
          en: "Add calibration tables, range-aware solving, abnormal-state prompts, and serial tuning hooks.",
          zh: "软件要补齐标定表、量程感知求解、异常提示和串口调参入口。",
        },
        {
          en: "Keep one deterministic main algorithm instead of switching among many unverified methods.",
          zh: "每类指标只保留一条经过验证的主算法，不要现场频繁换法。",
        },
      ],
    },
    {
      id: "national",
      name: {
        en: "High-performance stretch tier",
        zh: "冲国奖增强版",
      },
      fit: {
        en: "Use this only after the provincial route is solid and reproducible.",
        zh: "只有在省一等奖路线已经稳定可复现后，才值得往这档扩。",
      },
      whenToChoose: {
        en: "Choose this when you have spare time for bandwidth, automation, or stronger model fitting.",
        zh: "有多余时间去冲带宽、自动化或更强模型拟合时，再走这档。",
      },
      hardware: [
        {
          en: "Push front-end bandwidth, clock quality, and isolation only when metrics clearly benefit.",
          zh: "只有指标确实受益时，才继续提高前端带宽、时钟质量和隔离设计。",
        },
        {
          en: "Add richer switching or dual-path capture only if verification capacity can keep up.",
          zh: "双路径采样或更复杂切换必须和验证能力匹配，否则反而拖后腿。",
        },
      ],
      software: [
        {
          en: "Introduce automated sweeps, fitting refinement, or richer diagnostics after the core chain is stable.",
          zh: "自动扫频、拟合增强和更细诊断要放在核心闭环稳定之后。",
        },
        {
          en: "Every enhancement must come with a repeatable test case, otherwise skip it.",
          zh: "每个增强项都必须配套可重复测试样例，否则宁可不加。",
        },
      ],
    },
  ],
};

function normalizeText(input: string) {
  return input.toLowerCase();
}

function extractContrastiveStatements(input: string) {
  const normalized = normalizeText(input)
    .replace(/\s+/g, " ")
    .trim();

  const patterns = [
    /\b(.+?)\s+rather than\s+(.+?)(?=$|[,.!?;:])/g,
    /\b(.+?)\s+instead of\s+(.+?)(?=$|[,.!?;:])/g,
    /\b(.+?)\s+more than\s+(.+?)(?=$|[,.!?;:])/g,
  ];

  const results: Array<{ primary: string; competing: string }> = [];
  const trimToLocalCue = (text: string) => {
    const separators = [
      " where ",
      " that ",
      " which ",
      " with ",
      " while ",
      " and ",
      ",",
      ";",
      ":",
    ];

    let candidate = text.trim();
    for (const separator of separators) {
      const parts = candidate.split(separator);
      candidate = parts[parts.length - 1]?.trim() ?? candidate;
    }

    return candidate;
  };

  for (const pattern of patterns) {
    let match: RegExpExecArray | null;
    while ((match = pattern.exec(normalized)) !== null) {
      const primary = trimToLocalCue(match[1] ?? "");
      const competing = trimToLocalCue(match[2] ?? "");
      if (!primary || !competing) {
        continue;
      }

      results.push({
        primary,
        competing,
      });
    }
  }

  return results.slice(0, 6);
}

const familyBoundaryStrongCueWeights: Record<string, number> = {
  "true lock": 3,
  "false lock": 3,
  "receive chain": 3,
  "reacquisition": 3,
  "reacquire": 2,
  "relock path": 2,
  "lock state": 2,
  "lock-state": 2,
  "lock indicator": 2,
  "weak signal": 2,
  "receive window": 2,
  "接收链": 3,
  "真锁": 3,
  "假锁": 3,
  "重捕获": 3,
  "锁定状态": 2,
  "锁定指示": 2,
  "弱信号": 2,
  "residual reduction": 2,
  "recovered residual": 2,
  "recover component": 2,
  "target component": 2,
  "source separation": 2,
  "残差下降": 2,
  "恢复分量": 2,
  "目标分量": 2,
  "源分离": 2,
};

function getCueStrength(term: string) {
  return familyBoundaryStrongCueWeights[term.toLowerCase()] ?? 1;
}

function getWeightedCueScore(terms: string[]) {
  return terms.reduce((total, term) => total + getCueStrength(term), 0);
}

const stopwordCueTerms = new Set([
  "measurement",
  "measurements",
  "target",
  "targets",
  "distance",
  "position",
  "result",
  "results",
  "system",
  "device",
  "signal",
  "remote",
]);

function escapeRegex(text: string) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function containsCue(normalizedText: string, term: string) {
  const normalizedTerm = term.toLowerCase().trim();
  if (!normalizedTerm) {
    return false;
  }

  if (/[\u4e00-\u9fff]/.test(normalizedTerm)) {
    return normalizedText.includes(normalizedTerm);
  }

  if (normalizedTerm.includes(" ")) {
    return normalizedText.includes(normalizedTerm);
  }

  const pattern = new RegExp(`(^|[^a-z0-9])${escapeRegex(normalizedTerm)}(?=$|[^a-z0-9])`);
  return pattern.test(normalizedText);
}

function filterCueTermsBySpecificity(terms: string[]) {
  return terms.filter((term) => {
    const normalized = term.toLowerCase().trim();
    if (!normalized) {
      return false;
    }

    if (/[\u4e00-\u9fff]/.test(normalized)) {
      return true;
    }

    if (normalized.includes(" ")) {
      return true;
    }

    return !stopwordCueTerms.has(normalized);
  });
}

interface SupportBridgeRule {
  primaryProfileId: string;
  targetProfileId: string;
  cueGroups: string[][];
  minGroups: number;
  baseScore: number;
}

const supportBridgeRules: SupportBridgeRule[] = [
  {
    primaryProfileId: "adaptive-filtering",
    targetProfileId: "separation",
    cueGroups: [
      ["mixed waveform", "mixed signal", "mixture", "mixed interference", "混合波形", "混合信号", "混合干扰"],
      [
        "separate components",
        "signal separation",
        "recover component",
        "recover components",
        "component recovery",
        "decoupling",
        "unmix",
        "interpretable",
        "分离分量",
        "恢复分量",
        "解耦",
        "可解释",
      ],
      [
        "reference path",
        "reference channel",
        "reference signal",
        "convergence",
        "compensation",
        "suppress interference",
        "参考支路",
        "参考通道",
        "参考信号",
        "收敛",
        "补偿",
        "抑制干扰",
      ],
    ],
    minGroups: 2,
    baseScore: 6,
  },
  {
    primaryProfileId: "adaptive-filtering",
    targetProfileId: "load-analysis",
    cueGroups: [
      ["monitoring", "automatic decision", "fault diagnosis", "state recognition", "监测", "自动判别", "故障诊断", "状态识别"],
      ["appliance", "load signature", "load state", "appliance state", "用电器", "负载特征", "负载状态"],
      ["reference path", "convergence", "adaptive", "compensation", "参考支路", "收敛", "自适应", "补偿"],
    ],
    minGroups: 2,
    baseScore: 5,
  },
  {
    primaryProfileId: "separation",
    targetProfileId: "adaptive-filtering",
    cueGroups: [
      ["adaptive", "convergence", "step size", "自适应", "收敛", "步长"],
      ["reference path", "reference signal", "reference channel", "参考支路", "参考信号", "参考通道"],
      ["compensation", "suppress interference", "active filter", "recover component", "补偿", "抑制干扰", "有源滤波", "恢复分量"],
    ],
    minGroups: 2,
    baseScore: 6,
  },
  {
    primaryProfileId: "load-analysis",
    targetProfileId: "adaptive-filtering",
    cueGroups: [
      ["monitoring", "automatic decision", "fault diagnosis", "state recognition", "signature", "监测", "自动判别", "故障诊断", "状态识别", "特征"],
      ["reference path", "reference signal", "reference branch", "参考支路", "参考信号"],
      ["adaptive", "convergence", "compensation", "disturbance suppression", "自适应", "收敛", "补偿", "抑制干扰"],
    ],
    minGroups: 2,
    baseScore: 6,
  },
  {
    primaryProfileId: "load-analysis",
    targetProfileId: "separation",
    cueGroups: [
      ["monitoring", "automatic decision", "state recognition", "signature", "监测", "自动判别", "状态识别", "特征"],
      ["mixed load", "multi appliance", "overlapping current", "mixed waveform", "混合负载", "多用电器", "叠加电流", "混合波形"],
      ["signal separation", "decoupling", "unmix", "separate components", "信号分离", "解耦", "分离分量"],
    ],
    minGroups: 2,
    baseScore: 5,
  },
  {
    primaryProfileId: "load-analysis",
    targetProfileId: "cable",
    cueGroups: [
      ["monitoring", "automatic decision", "automatic diagnosis", "fault diagnosis", "监测", "自动判别", "自动诊断", "故障诊断"],
      ["line state", "line fault", "cable", "pair", "probing", "线路状态", "线缆", "双绞线", "探测"],
      ["explicit cue", "signature", "threshold", "state script", "显式线索", "特征", "阈值", "脚本"],
    ],
    minGroups: 2,
    baseScore: 5,
  },
  {
    primaryProfileId: "cable",
    targetProfileId: "load-analysis",
    cueGroups: [
      ["automatic decision", "automatic diagnosis", "monitoring", "classification", "自动判别", "自动诊断", "监测", "分类"],
      ["line state", "line fault", "cable", "pair", "线路状态", "线故障", "线缆", "线对"],
      ["explicit cue", "signature", "state recognition", "显式线索", "特征", "状态识别"],
    ],
    minGroups: 2,
    baseScore: 5,
  },
];

function buildSupportBridgeHints(primaryProfileId: string, normalizedText: string) {
  return supportBridgeRules
    .filter((rule) => rule.primaryProfileId === primaryProfileId)
    .map((rule) => {
      const matchedTerms = new Set<string>();
      let matchedGroups = 0;

      for (const group of rule.cueGroups) {
        const hits = group.filter((term) => containsCue(normalizedText, term));
        if (!hits.length) {
          continue;
        }

        matchedGroups += 1;
        for (const hit of hits.slice(0, 2)) {
          matchedTerms.add(hit);
        }
      }

      if (matchedGroups < rule.minGroups) {
        return null;
      }

      return {
        targetProfileId: rule.targetProfileId,
        hintScore: rule.baseScore + matchedGroups + Math.min(2, matchedTerms.size),
        matchedTerms: Array.from(matchedTerms),
      };
    })
    .filter((item): item is { targetProfileId: string; hintScore: number; matchedTerms: string[] } => Boolean(item));
}

function scoreProfile(profile: InstrumentationProfile, normalizedText: string) {
  let score = 0;
  const matchedTerms = new Set<string>();

  for (const matcher of profile.matchers) {
    for (const term of matcher.terms) {
      if (containsCue(normalizedText, term)) {
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

function getSecondaryProfile(
  ranked: Array<{
    profile: InstrumentationProfile;
    score: number;
    matchedTerms: string[];
    pairDisambiguationBoost?: {
      score: number;
      matchedTerms: string[];
      analysis: Array<{
        competingProfileId: string;
        matchedPrimaryTerms: string[];
        matchedCompetingTerms: string[];
        signalStrength: number;
      }>;
    };
    negativeExampleAnalysis?: {
      scoreAdjustment: number;
      matchedTerms: string[];
      examples: Array<{
        redirectProfileId: string;
        matchedNearMissTerms: string[];
        matchedRedirectTerms: string[];
        signalStrength: number;
      }>;
    };
    contrastiveCueBoost?: {
      score: number;
      matchedTerms: string[];
      analysis: Array<{
        competingProfileId: string;
        matchedPrimaryTerms: string[];
        matchedCompetingTerms: string[];
        signalStrength: number;
      }>;
    };
  }>,
) {
  if (ranked.length < 2) {
    return null;
  }

  const first = ranked[0];
  const second = ranked[1];

  if (!first || !second) {
    return null;
  }

  const hintedProfileIds = new Map<string, number>();
  const suppressedProfileIds = new Set<string>();

  for (const item of first.contrastiveCueBoost?.analysis ?? []) {
    if (item.signalStrength >= 6) {
      suppressedProfileIds.add(item.competingProfileId);
    }
  }

  for (const item of first.pairDisambiguationBoost?.analysis ?? []) {
    const hintScore =
      item.matchedCompetingTerms.length > 0
        ? item.matchedCompetingTerms.length * 2 + Math.max(0, item.signalStrength - item.matchedPrimaryTerms.length)
        : 0;
    if (hintScore > 0) {
      hintedProfileIds.set(
        item.competingProfileId,
        Math.max(hintedProfileIds.get(item.competingProfileId) ?? 0, hintScore),
      );
    }
  }

  for (const item of first.negativeExampleAnalysis?.examples ?? []) {
    const hintScore =
      item.matchedRedirectTerms.length > 0
        ? item.matchedRedirectTerms.length * 3 + Math.min(1, item.matchedNearMissTerms.length)
        : 0;
    if (hintScore > 0) {
      hintedProfileIds.set(
        item.redirectProfileId,
        Math.max(hintedProfileIds.get(item.redirectProfileId) ?? 0, hintScore),
      );
    }
  }

  if (first.profile.id === "distortion") {
    for (const item of first.negativeExampleAnalysis?.examples ?? []) {
      if (
        item.redirectProfileId === "distortion" &&
        item.matchedRedirectTerms.length >= 2 &&
        item.matchedNearMissTerms.length > 0
      ) {
        suppressedProfileIds.add("modulation");
      }
    }
  }

  if (hintedProfileIds.size > 0) {
    const hintedCandidate = ranked
      .filter(
        (item) =>
          item.profile.id !== first.profile.id &&
          item.score > 0 &&
          hintedProfileIds.has(item.profile.id) &&
          !suppressedProfileIds.has(item.profile.id),
      )
      .sort((left, right) => {
        const hintDiff = (hintedProfileIds.get(right.profile.id) ?? 0) - (hintedProfileIds.get(left.profile.id) ?? 0);
        if (hintDiff !== 0) {
          return hintDiff;
        }
        return right.score - left.score;
      })[0];

    if (hintedCandidate) {
      return hintedCandidate;
    }
  }

  if (second.score <= 0) {
    return null;
  }

  if (suppressedProfileIds.has(second.profile.id)) {
    return null;
  }

  if (second.score >= Math.max(4, first.score - 2)) {
    return second;
  }

  return null;
}

function getSupportProfiles(
  ranked: Array<{
    profile: InstrumentationProfile;
    score: number;
    matchedTerms: string[];
    pairDisambiguationBoost?: {
      score: number;
      matchedTerms: string[];
      analysis: Array<{
        competingProfileId: string;
        matchedPrimaryTerms: string[];
        matchedCompetingTerms: string[];
        signalStrength: number;
      }>;
    };
    negativeExampleAnalysis?: {
      scoreAdjustment: number;
      matchedTerms: string[];
      examples: Array<{
        redirectProfileId: string;
        matchedNearMissTerms: string[];
        matchedRedirectTerms: string[];
        signalStrength: number;
      }>;
    };
    contrastiveCueBoost?: {
      score: number;
      matchedTerms: string[];
      analysis: Array<{
        competingProfileId: string;
        matchedPrimaryTerms: string[];
        matchedCompetingTerms: string[];
        signalStrength: number;
      }>;
    };
  }>,
  selectedProfileId: string,
  normalizedText: string,
) {
  const basePool = ranked.filter((item) => item.profile.id !== selectedProfileId);
  const supportProfiles: typeof basePool = [];
  const bridgeHints = buildSupportBridgeHints(selectedProfileId, normalizedText);
  let workingPool = ranked;

  for (const hint of bridgeHints.sort((left, right) => right.hintScore - left.hintScore)) {
    if (supportProfiles.length >= 2) {
      break;
    }

    const candidate = basePool.find((item) => item.profile.id === hint.targetProfileId);
    if (!candidate || candidate.score <= 0) {
      continue;
    }

    if (supportProfiles.some((item) => item.profile.id === candidate.profile.id)) {
      continue;
    }

    supportProfiles.push({
      ...candidate,
      score: candidate.score + Math.min(4, hint.hintScore),
      matchedTerms: cleanMatchedTerms([...candidate.matchedTerms, ...hint.matchedTerms]),
    });
    workingPool = ranked.filter((item) => item.profile.id !== candidate.profile.id);
  }

  for (let index = 0; index < 2; index += 1) {
    const candidate = getSecondaryProfile(workingPool);
    if (!candidate || candidate.profile.id === selectedProfileId) {
      break;
    }

    if (supportProfiles.some((item) => item.profile.id === candidate.profile.id)) {
      workingPool = ranked.filter((item) => item.profile.id !== candidate.profile.id);
      continue;
    }

    supportProfiles.push(candidate);
    workingPool = ranked.filter(
      (item) => item.profile.id !== candidate.profile.id,
    );
  }

  return supportProfiles;
}

function choosePrimaryProfileRich(
  ranked: Array<{
    profile: InstrumentationProfile;
    score: number;
    matchedTerms: string[];
    pairDisambiguationBoost?: {
      score: number;
      matchedTerms: string[];
      analysis: Array<{
        competingProfileId: string;
        matchedPrimaryTerms: string[];
        matchedCompetingTerms: string[];
        signalStrength: number;
      }>;
    };
    negativeExampleAnalysis?: {
      scoreAdjustment: number;
      matchedTerms: string[];
      examples: Array<{
        redirectProfileId: string;
        matchedNearMissTerms: string[];
        matchedRedirectTerms: string[];
        signalStrength: number;
      }>;
    };
    contrastiveCueBoost?: {
      score: number;
      matchedTerms: string[];
      analysis: Array<{
        competingProfileId: string;
        matchedPrimaryTerms: string[];
        matchedCompetingTerms: string[];
        signalStrength: number;
      }>;
    };
    contrastivePenalty?: {
      score: number;
      matchedTerms: string[];
    };
    contrastiveResolutionBoost?: {
      score: number;
      matchedTerms: string[];
    };
  }>,
) {
  const first = ranked[0];
  if (!first || first.score <= 0) {
    return fallbackProfile;
  }

  const second = ranked[1];
  if (!second || second.score <= 0) {
    return first.profile;
  }

  const scoreGap = first.score - second.score;
  const firstPenalty = first.contrastivePenalty?.score ?? 0;
  const secondPenalty = second.contrastivePenalty?.score ?? 0;
  const firstPositiveContrast =
    (first.contrastiveCueBoost?.score ?? 0) + (first.contrastiveResolutionBoost?.score ?? 0);
  const secondPositiveContrast =
    (second.contrastiveCueBoost?.score ?? 0) + (second.contrastiveResolutionBoost?.score ?? 0);
  const firstNearMissPenalty = Math.abs(first.negativeExampleAnalysis?.scoreAdjustment ?? 0);
  const secondNearMissPenalty = Math.abs(second.negativeExampleAnalysis?.scoreAdjustment ?? 0);

  const firstRejectedMoreStrongly =
    firstPenalty <= -8 &&
    secondPenalty >= firstPenalty &&
    secondPositiveContrast >= firstPositiveContrast;

  const secondHasIndependentSupport =
    second.matchedTerms.length >= 3 ||
    (second.pairDisambiguationBoost?.score ?? 0) >= 6 ||
    secondPositiveContrast >= 6;

  if (
    firstRejectedMoreStrongly &&
    secondHasIndependentSupport &&
    scoreGap <= 18 &&
    firstNearMissPenalty >= secondNearMissPenalty
  ) {
    return second.profile;
  }

  if (
    first.profile.id === "modulation" &&
    second.profile.id === "distortion" &&
    firstPenalty <= -10 &&
    secondPositiveContrast >= 6 &&
    Math.abs(firstPenalty) >= Math.abs(secondPenalty) + 2 &&
    scoreGap <= 24
  ) {
    return second.profile;
  }

  if (
    first.profile.id === "modulation" &&
    second.profile.id === "distortion" &&
    firstNegativeExampleAnalysisHasRejectedModulation(first) &&
    secondHasIndependentSupport
  ) {
    return second.profile;
  }

  return first.profile;
}

function firstNegativeExampleAnalysisHasRejectedModulation(first: {
  negativeExampleAnalysis?: {
    examples: Array<{
      redirectProfileId: string;
      matchedNearMissTerms: string[];
      matchedRedirectTerms: string[];
    }>;
  };
}) {
  return (first.negativeExampleAnalysis?.examples ?? []).some(
    (example) =>
      example.redirectProfileId === "distortion" &&
      example.matchedRedirectTerms.length >= 2 &&
      example.matchedNearMissTerms.some((term) => term.includes("modulation") || term.includes("family") || term.includes("carrier")),
  );
}

function buildRejectedCompetingFamilyPenalty(profileId: string, rawProblemText: string) {
  const statements = extractContrastiveStatements(rawProblemText);
  if (!statements.length) {
    return 0;
  }

  if (profileId !== "modulation") {
    return 0;
  }

  const rejectedTerms = ["modulation", "modulation family", "family", "carrier", "symbol", "symbol rate"];
  const acceptedTerms = ["thd", "harmonic", "harmonics", "spectrum", "distortion", "fundamental"];
  let penalty = 0;

  for (const statement of statements) {
    const rejectedHits = rejectedTerms.filter((term) => containsCue(statement.competing, term));
    const acceptedHits = acceptedTerms.filter((term) => containsCue(statement.primary, term));
    if (rejectedHits.length > 0 && acceptedHits.length > 0) {
      penalty -= 12 + acceptedHits.length * 2 + rejectedHits.length;
    }
  }

  return penalty;
}

function shouldForceDistortionOverModulation(rawProblemText: string) {
  const statements = extractContrastiveStatements(rawProblemText);
  return statements.some((statement) => {
    const primaryHasDistortionCue =
      containsCue(statement.primary, "thd") ||
      containsCue(statement.primary, "harmonic") ||
      containsCue(statement.primary, "harmonics") ||
      containsCue(statement.primary, "distortion") ||
      containsCue(statement.primary, "spectrum");
    const competingHasModulationCue =
      containsCue(statement.competing, "modulation") ||
      containsCue(statement.competing, "modulation family") ||
      containsCue(statement.competing, "carrier") ||
      containsCue(statement.competing, "symbol") ||
      containsCue(statement.competing, "symbol rate") ||
      containsCue(statement.competing, "family");
    return primaryHasDistortionCue && competingHasModulationCue;
  });
}

export function recommendPlanFromDistilledDataLegacy(
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
  const secondary = selected === fallbackProfile ? null : getSecondaryProfile(ranked);

  const summaryParts =
    lang === "zh"
      ? [
          getText(selected.summary, lang),
          matchedTerms.length > 0 ? `识别到的题面关键词：${matchedTerms.slice(0, 8).join("、")}。` : "",
          secondary ? `次级命中题型：${getText(secondary.profile.family, lang)}。` : "",
          `参考蒸馏题：${selected.references.join("、")}。`,
        ]
      : [
          getText(selected.summary, lang),
          matchedTerms.length > 0
            ? `Detected problem cues: ${matchedTerms.slice(0, 8).join(", ")}.`
            : "",
          secondary ? `Secondary family match: ${getText(secondary.profile.family, lang)}.` : "",
          `Reference problems: ${selected.references.join("; ")}.`,
        ];

  const modules = selected.modules.map((section) => ({
    title: getText(section.title, lang),
    items: section.items.map((item) => getText(item, lang)),
  }));

  if (secondary) {
    modules.push({
      title:
        lang === "zh"
          ? `次级题型补充：${getText(secondary.profile.family, lang)}`
          : `Secondary family add-on: ${getText(secondary.profile.family, lang)}`,
      items: secondary.profile.modules[0]
        ? secondary.profile.modules[0].items.map((item) => getText(item, lang))
        : [],
    });
  }

  const references = secondary
    ? Array.from(new Set([...selected.references, ...secondary.profile.references])).slice(0, 6)
    : selected.references;

  const detectedFamily = secondary
    ? `${getText(selected.family, lang)} + ${getText(secondary.profile.family, lang)}`
    : getText(selected.family, lang);

  return {
    title: getText(selected.title, lang),
    summary: summaryParts.filter(Boolean).join(" "),
    approach: getText(selected.approach, lang),
    modules,
    tuningSteps: selected.tuningSteps.map((item) => getText(item, lang)),
    risks: selected.risks.map((item) => getText(item, lang)),
    verification: selected.verification.map((item) => getText(item, lang)),
    references,
    detectedFamily,
  };
}

function getTierOptionsForProfile(profileId: string) {
  const mapping: Record<string, string> = {
    parameter: "measurement",
    distortion: "measurement",
    modulation: "measurement",
    separation: "measurement",
    cable: "measurement",
    receiver: "measurement",
    "load-analysis": "measurement",
    "vision-measurement": "measurement",
    model: "measurement",
    localization: "measurement",
    "adaptive-filtering": "measurement",
    "networked-measurement": "measurement",
    generic: "measurement",
  };

  const tierKey = mapping[profileId] ?? "measurement";
  return sharedTierCatalog[tierKey] ?? sharedTierCatalog.measurement;
}

function buildTierOptions(profileId: string, lang: "en" | "zh") {
  return getTierOptionsForProfile(profileId).map((tier) => ({
    id: tier.id,
    name: getText(tier.name, lang),
    fit: getText(tier.fit, lang),
    whenToChoose: getText(tier.whenToChoose, lang),
    hardware: tier.hardware.map((item) => getText(item, lang)),
    software: tier.software.map((item) => getText(item, lang)),
  }));
}

function findRelatedProblems(
  selectedProfile: InstrumentationProfile,
  secondaryProfile: { profile: InstrumentationProfile } | null,
  matchedTerms: string[],
  lang: "en" | "zh",
) {
  const selectedFamily = getText(selectedProfile.family, "en");
  const secondaryFamily = secondaryProfile ? getText(secondaryProfile.profile.family, "en") : "";
  const lowerMatchedTerms = matchedTerms.map((term) => term.toLowerCase());

  const ranked = historicalProblemCatalog
    .map((problem) => {
      let score = 0;

      if (problem.family.en === selectedFamily) {
        score += 6;
      }

      if (secondaryFamily && problem.family.en === secondaryFamily) {
        score += 3;
      }

      for (const tag of problem.tags) {
        const tagLower = tag.toLowerCase();
        if (lowerMatchedTerms.some((term) => tagLower.includes(term) || term.includes(tagLower))) {
          score += 2;
        }
      }

      for (const reference of selectedProfile.references) {
        if (reference.toLowerCase().includes(problem.code.toLowerCase())) {
          score += 2;
        }
      }

      return { problem, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || b.problem.year - a.problem.year)
    .slice(0, 5);

  return ranked.map(({ problem }) => ({
    id: problem.id,
    code: problem.code,
    title: getText(problem.title, lang),
    family: getText(problem.family, lang),
    highlights: problem.highlights.map((item) => getText(item, lang)),
    tags: problem.tags.slice(0, 6),
  }));
}

function buildReasoning(
  selectedProfile: InstrumentationProfile,
  secondaryProfile: { profile: InstrumentationProfile; score: number; matchedTerms: string[] } | null,
  matchedTerms: string[],
  lang: "en" | "zh",
) {
  if (lang === "zh") {
    return [
      `主判定题型：${getText(selectedProfile.family, lang)}。`,
      matchedTerms.length
        ? `命中的关键词主要有：${matchedTerms.slice(0, 8).join("、")}。`
        : "没有明显强关键词时，按通用仪器仪表测量链路兜底推荐。",
      secondaryProfile
        ? `同时检测到次级关联题型：${getText(secondaryProfile.profile.family, lang)}，因此补充了一层跨题型模块。`
        : "当前题面更集中于单一题型，建议先把主链路做深，不要同时铺太多方向。",
      "推荐结果优先来自历年仪器仪表蒸馏题库，而不是临场自由生成方案。",
    ];
  }

  return [
    `Primary family match: ${getText(selectedProfile.family, lang)}.`,
    matchedTerms.length
      ? `Matched cues: ${matchedTerms.slice(0, 8).join(", ")}.`
      : "No strong explicit cue was found, so the recommendation falls back to the common instrumentation chain.",
    secondaryProfile
      ? `Secondary family overlap: ${getText(secondaryProfile.profile.family, lang)}, so the plan adds one cross-family module.`
      : "The statement appears concentrated in one family, so the recommendation keeps the main chain focused.",
    "The output is driven by the distilled historical instrumentation database rather than freeform plan generation.",
  ];
}

export function recommendPlanFromDistilledDataV2(
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
  const secondary = selected === fallbackProfile ? null : getSecondaryProfile(ranked);
  const relatedProblems = findRelatedProblems(selected, secondary, matchedTerms, lang);
  const reasoning = buildReasoning(selected, secondary, matchedTerms, lang);
  const tierOptions = buildTierOptions(selected.id, lang);

  const modules = selected.modules.map((section) => ({
    title: getText(section.title, lang),
    items: section.items.map((item) => getText(item, lang)),
  }));

  if (secondary) {
    modules.push({
      title:
        lang === "zh"
          ? `次级题型补充：${getText(secondary.profile.family, lang)}`
          : `Secondary family add-on: ${getText(secondary.profile.family, lang)}`,
      items: secondary.profile.modules[0]
        ? secondary.profile.modules[0].items.map((item) => getText(item, lang))
        : [],
    });
  }

  const references = secondary
    ? Array.from(new Set([...selected.references, ...secondary.profile.references])).slice(0, 6)
    : selected.references;

  const detectedFamily = secondary
    ? `${getText(selected.family, lang)} + ${getText(secondary.profile.family, lang)}`
    : getText(selected.family, lang);

  const summaryParts =
    lang === "zh"
      ? [
          getText(selected.summary, lang),
          matchedTerms.length > 0 ? `识别到的题面关键词：${matchedTerms.slice(0, 8).join("、")}。` : "",
          secondary ? `次级命中题型：${getText(secondary.profile.family, lang)}。` : "",
          relatedProblems.length > 0
            ? `关联历年题：${relatedProblems.map((item) => `${item.code} ${item.title}`).join("；")}。`
            : `参考蒸馏题：${selected.references.join("；")}。`,
        ]
      : [
          getText(selected.summary, lang),
          matchedTerms.length > 0
            ? `Detected problem cues: ${matchedTerms.slice(0, 8).join(", ")}.`
            : "",
          secondary ? `Secondary family match: ${getText(secondary.profile.family, lang)}.` : "",
          relatedProblems.length > 0
            ? `Related distilled problems: ${relatedProblems.map((item) => `${item.code} ${item.title}`).join("; ")}.`
            : `Reference problems: ${selected.references.join("; ")}.`,
        ];

  return {
    title: getText(selected.title, lang),
    summary: summaryParts.filter(Boolean).join(" "),
    approach: getText(selected.approach, lang),
    modules,
    tuningSteps: selected.tuningSteps.map((item) => getText(item, lang)),
    risks: selected.risks.map((item) => getText(item, lang)),
    verification: selected.verification.map((item) => getText(item, lang)),
    references,
    detectedFamily,
    matchedTerms,
    reasoning,
    tierOptions,
    relatedProblems,
  };
}

function getRichLocalizedText(
  text: { en: string; zh: string },
  lang: "en" | "zh",
) {
  return text.zh || text.en;
}

const DISPLAY_ONLY_BYPASS_KEYS = new Set([
  "id",
  "code",
  "references",
  "typicalReferences",
  "redirectProfileId",
  "competingProfileId",
]);

function forceZhDisplayText(text: string) {
  return localizeRichZh(text)
    .replace(/^次级题型补充：\?+/g, "次级题型补充：")
    .replace(/\?{3,}/g, "")
    .trim();
}

function forceZhDisplayValue<T>(value: T, key?: string): T {
  if (DISPLAY_ONLY_BYPASS_KEYS.has(key ?? "")) {
    return value;
  }

  if (typeof value === "string") {
    return forceZhDisplayText(value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => forceZhDisplayValue(item, key)) as T;
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([entryKey, entryValue]) => [
        entryKey,
        DISPLAY_ONLY_BYPASS_KEYS.has(entryKey)
          ? entryValue
          : forceZhDisplayValue(entryValue, entryKey),
      ]),
    ) as T;
  }

  return value;
}

function getFamilyPlaybook(profileId: string, lang: "en" | "zh") {
  const playbook = instrumentationFamilyPlaybooks.find((item) => item.profileId === profileId);
  if (!playbook) {
    return undefined;
  }

  return {
    headline: getRichLocalizedText(playbook.headline, lang),
    diagnosisCues: playbook.diagnosisCues.map((item) => getRichLocalizedText(item, lang)),
    principleChoices: playbook.principleChoices.map((item) => getRichLocalizedText(item, lang)),
    winningBackbone: playbook.winningBackbone.map((item) => getRichLocalizedText(item, lang)),
    mustHaveDeliverables: playbook.mustHaveDeliverables.map((item) => getRichLocalizedText(item, lang)),
    defenseFocus: playbook.defenseFocus.map((item) => getRichLocalizedText(item, lang)),
    commonFailureModes: playbook.commonFailureModes.map((item) => getRichLocalizedText(item, lang)),
    stretchGoals: playbook.stretchGoals.map((item) => getRichLocalizedText(item, lang)),
  };
}

function scoreRouteVariant(
  variantId: string,
  normalizedText: string,
) {
  const variant = familyRouteVariants.find((item) => item.id === variantId);
  if (!variant) {
    return {
      score: 0,
      matchedTerms: [] as string[],
    };
  }

  let score = 0;
  const matchedTerms = new Set<string>();

  for (const boost of variant.cueBoosts ?? []) {
    for (const term of boost.terms) {
      if (normalizedText.includes(term.toLowerCase())) {
        score += boost.weight;
        matchedTerms.add(term);
      }
    }
  }

  const avoidWhenPenalty = matchTriggerCueBucket(variant.avoidWhen ?? [], normalizedText, 3);

  return {
    score: score - avoidWhenPenalty.score,
    matchedTerms: dedupeStrings([...Array.from(matchedTerms), ...avoidWhenPenalty.matchedTerms]),
  };
}

function getFamilyKnowledgePack(profileId: string, lang: "en" | "zh") {
  const knowledgePack = distilledFamilyKnowledgePacks.find((item) => item.profileId === profileId);
  if (!knowledgePack) {
    return undefined;
  }

  return {
    sharedHardwareStack: knowledgePack.sharedHardwareStack.map((item) => getRichLocalizedText(item, lang)),
    sharedErrorSources: knowledgePack.sharedErrorSources.map((item) => getRichLocalizedText(item, lang)),
    sharedDefenseQuestions: knowledgePack.sharedDefenseQuestions.map((item) => getRichLocalizedText(item, lang)),
    provincialToNationalUpgrades: knowledgePack.provincialToNationalUpgrades.map((item) =>
      getRichLocalizedText(item, lang),
    ),
  };
}

function getFamilyObjectiveMap(profileId: string, lang: "en" | "zh") {
  const objectiveMap = distilledFamilyObjectiveMaps.find((item) => item.profileId === profileId);
  if (!objectiveMap) {
    return undefined;
  }

  return {
    measurementObjects: objectiveMap.measurementObjects.map((item) => getRichLocalizedText(item, lang)),
    requiredOutputs: objectiveMap.requiredOutputs.map((item) => getRichLocalizedText(item, lang)),
    observabilityAnchors: objectiveMap.observabilityAnchors.map((item) => getRichLocalizedText(item, lang)),
    successFloor: objectiveMap.successFloor.map((item) => getRichLocalizedText(item, lang)),
  };
}

function getRecommendedModules(
  profileId: string,
  normalizedText: string,
  lang: "en" | "zh",
) {
  return distilledModuleNodes
    .filter((item) => item.profileIds.includes(profileId))
    .map((node) => {
      const assemblyRule = distilledModuleAssemblyRules.find((item) => item.moduleId === node.id);
      const metricRule = distilledModuleMetricRules.find((item) => item.moduleId === node.id);
      const searchable = [
        node.name.en,
        node.name.zh,
        node.role.en,
        node.role.zh,
        ...node.whenToUse.map((item) => item.en),
        ...node.whenToUse.map((item) => item.zh),
      ]
        .join(" ")
        .toLowerCase();

      let score = 0;
      for (const token of normalizedText.split(/\s+/).filter(Boolean)) {
        if (token.length >= 3 && searchable.includes(token)) {
          score += 1;
        }
      }

      return {
        id: node.id,
        name: getRichLocalizedText(node.name, lang),
        role: getRichLocalizedText(node.role, lang),
        whenToUse: node.whenToUse.map((item) => getRichLocalizedText(item, lang)),
        requiredSignals: node.requiredSignals.map((item) => getRichLocalizedText(item, lang)),
        failureAlerts: node.failureAlerts.map((item) => getRichLocalizedText(item, lang)),
        quickestBench: node.quickestBench.map((item) => getRichLocalizedText(item, lang)),
        linkedProblems: node.linkedProblems.map((item) => item.toUpperCase()),
        prerequisites: assemblyRule?.prerequisites.map((item) => getRichLocalizedText(item, lang)) ?? [],
        unlocks: assemblyRule?.unlocks.map((item) => getRichLocalizedText(item, lang)) ?? [],
        avoidParallelWith: assemblyRule?.avoidParallelWith.map((item) => getRichLocalizedText(item, lang)) ?? [],
        minimumAssemblyOrder: assemblyRule?.minimumAssemblyOrder.map((item) => getRichLocalizedText(item, lang)) ?? [],
        provincialFloor: metricRule?.provincialFloor.map((item) => getRichLocalizedText(item, lang)) ?? [],
        stretchSignals: metricRule?.stretchSignals.map((item) => getRichLocalizedText(item, lang)) ?? [],
        fallbackTriggers: metricRule?.fallbackTriggers.map((item) => getRichLocalizedText(item, lang)) ?? [],
        score,
      };
    })
    .sort((a, b) => (b.score ?? 0) - (a.score ?? 0) || a.name.localeCompare(b.name))
    .slice(0, 6);
}

function mergeRecommendedModules(
  primaryModules: ReturnType<typeof getRecommendedModules>,
  secondaryModules: ReturnType<typeof getRecommendedModules>,
) {
  const merged = new Map<string, ReturnType<typeof getRecommendedModules>[number]>();

  for (const module of [...primaryModules, ...secondaryModules]) {
    const existing = merged.get(module.id);
    if (!existing) {
      merged.set(module.id, module);
      continue;
    }

    merged.set(module.id, {
      ...existing,
      whenToUse: dedupeStrings([...existing.whenToUse, ...module.whenToUse]),
      requiredSignals: dedupeStrings([...existing.requiredSignals, ...module.requiredSignals]),
      failureAlerts: dedupeStrings([...existing.failureAlerts, ...module.failureAlerts]),
      quickestBench: dedupeStrings([...existing.quickestBench, ...module.quickestBench]),
      linkedProblems: dedupeStrings([...existing.linkedProblems, ...module.linkedProblems]),
      prerequisites: dedupeStrings([...existing.prerequisites, ...module.prerequisites]),
      unlocks: dedupeStrings([...existing.unlocks, ...module.unlocks]),
      avoidParallelWith: dedupeStrings([...existing.avoidParallelWith, ...module.avoidParallelWith]),
      minimumAssemblyOrder: dedupeStrings([...existing.minimumAssemblyOrder, ...module.minimumAssemblyOrder]),
      provincialFloor: dedupeStrings([...existing.provincialFloor, ...module.provincialFloor]),
      stretchSignals: dedupeStrings([...existing.stretchSignals, ...module.stretchSignals]),
      fallbackTriggers: dedupeStrings([...existing.fallbackTriggers, ...module.fallbackTriggers]),
      score: Math.max(existing.score ?? 0, module.score ?? 0),
    });
  }

  return Array.from(merged.values())
    .sort((a, b) => (b.score ?? 0) - (a.score ?? 0) || a.name.localeCompare(b.name))
    .slice(0, 6);
}

function shouldBlendSecondaryModules(
  secondaryProfile: { profile: InstrumentationProfile; score: number; matchedTerms: string[] } | null,
) {
  if (!secondaryProfile) {
    return false;
  }

  return secondaryProfile.score >= 8 || secondaryProfile.matchedTerms.length >= 2;
}

function shouldBlendSupportModules(
  supportProfiles: Array<{ profile: InstrumentationProfile; score: number; matchedTerms: string[] }>,
) {
  return supportProfiles.filter((profile) => shouldBlendSecondaryModules(profile));
}

function buildCrossFamilyModule(
  primaryProfileId: string,
  secondaryProfile: { profile: InstrumentationProfile; score: number; matchedTerms: string[] } | null,
  lang: "en" | "zh",
) {
  if (!secondaryProfile) {
    return null;
  }

  const handoffPack = distilledFamilyHandoffPacks.find((item) => item.profileId === primaryProfileId);
  const pivotTarget = handoffPack?.pivotTargets.find(
    (target) => target.targetProfileId === secondaryProfile.profile.id,
  );

  if (!pivotTarget) {
    return null;
  }

  return {
    title:
      lang === "zh"
        ? `璺ㄩ鍨嬩氦鎺ワ細${getText(secondaryProfile.profile.family, lang)}`
        : `Cross-family handoff: ${getText(secondaryProfile.profile.family, lang)}`,
    items:
      lang === "zh"
        ? dedupeStrings([
            `浠€涔堟儏鍐典笅瑕佸垏鍒拌繖涓棰樺瀷锛?${getRichLocalizedText(
              pivotTarget.triggerToPivot[0],
              lang,
            )}`,
            pivotTarget.fastestPivotCheck[0]
              ? `鏈€蹇垽鏂棶棰橈細${getRichLocalizedText(pivotTarget.fastestPivotCheck[0], lang)}`
              : undefined,
            pivotTarget.reusableAssets[0]
              ? `鍙鐢ㄨ祫浜э細${getRichLocalizedText(pivotTarget.reusableAssets[0], lang)}`
              : undefined,
            pivotTarget.stopReusingFirst[0]
              ? `瑕佸厛鍋滄娌跨敤鐨勬棫璁茶堪锛?${getRichLocalizedText(pivotTarget.stopReusingFirst[0], lang)}`
              : undefined,
          ])
        : dedupeStrings([
            `Shift weight toward this secondary family when: ${getRichLocalizedText(
              pivotTarget.triggerToPivot[0],
              lang,
            )}`,
            pivotTarget.fastestPivotCheck[0]
              ? `Fastest pivot question: ${getRichLocalizedText(pivotTarget.fastestPivotCheck[0], lang)}`
              : undefined,
            pivotTarget.reusableAssets[0]
              ? `Reusable assets: ${getRichLocalizedText(pivotTarget.reusableAssets[0], lang)}`
              : undefined,
            pivotTarget.stopReusingFirst[0]
              ? `Stop reusing first: ${getRichLocalizedText(pivotTarget.stopReusingFirst[0], lang)}`
              : undefined,
          ]),
  };
}

function getFamilyBuildPack(profileId: string, lang: "en" | "zh") {
  const buildPack = distilledFamilyBuildPacks.find((item) => item.profileId === profileId);
  if (!buildPack) {
    return undefined;
  }

  return {
    coreBom: buildPack.coreBom.map((item) => getRichLocalizedText(item, lang)),
    optionalUpgrades: buildPack.optionalUpgrades.map((item) => getRichLocalizedText(item, lang)),
    benchSetup: buildPack.benchSetup.map((item) => getRichLocalizedText(item, lang)),
    calibrationWorkflow: buildPack.calibrationWorkflow.map((item) => getRichLocalizedText(item, lang)),
    preContestQuickPack: buildPack.preContestQuickPack.map((item) => getRichLocalizedText(item, lang)),
  };
}

function getFamilyFailureAtlas(profileId: string, lang: "en" | "zh") {
  const atlas = distilledFamilyFailureAtlases.find((item) => item.profileId === profileId);
  if (!atlas) {
    return undefined;
  }

  return {
    recurringSymptoms: atlas.recurringSymptoms.map((item) => getRichLocalizedText(item, lang)),
    firstChecks: atlas.firstChecks.map((item) => getRichLocalizedText(item, lang)),
    commonRootCauses: atlas.commonRootCauses.map((item) => getRichLocalizedText(item, lang)),
    fastRecoveryMoves: atlas.fastRecoveryMoves.map((item) => getRichLocalizedText(item, lang)),
  };
}

function getFamilyAnswerTemplate(profileId: string, lang: "en" | "zh") {
  const template = distilledFamilyAnswerTemplates.find((item) => item.profileId === profileId);
  if (!template) {
    return undefined;
  }

  return {
    thirtySecondPitch: template.thirtySecondPitch.map((item) => getRichLocalizedText(item, lang)),
    twoMinuteDefense: template.twoMinuteDefense.map((item) => getRichLocalizedText(item, lang)),
    errorClosureStory: template.errorClosureStory.map((item) => getRichLocalizedText(item, lang)),
    demoNarrative: template.demoNarrative.map((item) => getRichLocalizedText(item, lang)),
  };
}

function getFamilyMetricLadder(profileId: string, lang: "en" | "zh") {
  const ladder = distilledFamilyMetricLadders.find((item) => item.profileId === profileId);
  if (!ladder) {
    return undefined;
  }

  return {
    submissionFloor: ladder.submissionFloor.map((item) => getRichLocalizedText(item, lang)),
    provincialReadySignals: ladder.provincialReadySignals.map((item) => getRichLocalizedText(item, lang)),
    nationalStretchSignals: ladder.nationalStretchSignals.map((item) => getRichLocalizedText(item, lang)),
  };
}

function getFamilyTrainingSequence(profileId: string, lang: "en" | "zh") {
  const sequence = distilledFamilyTrainingSequences.find((item) => item.profileId === profileId);
  if (!sequence) {
    return undefined;
  }

  return {
    foundationPhase: sequence.foundationPhase.map((item) => getRichLocalizedText(item, lang)),
    measurementPhase: sequence.measurementPhase.map((item) => getRichLocalizedText(item, lang)),
    specializationPhase: sequence.specializationPhase.map((item) => getRichLocalizedText(item, lang)),
    mockContestPhase: sequence.mockContestPhase.map((item) => getRichLocalizedText(item, lang)),
  };
}

function getFamilyReferenceGraph(profileId: string, lang: "en" | "zh") {
  const graph = distilledFamilyReferenceGraphs.find((item) => item.profileId === profileId);
  if (!graph) {
    return undefined;
  }

  return {
    anchorProblems: graph.anchorProblems.map((item) => getRichLocalizedText(item, lang)),
    transferPatterns: graph.transferPatterns.map((item) => getRichLocalizedText(item, lang)),
    escalationEdges: graph.escalationEdges.map((item) => getRichLocalizedText(item, lang)),
    antiPatterns: graph.antiPatterns.map((item) => getRichLocalizedText(item, lang)),
  };
}

function getFamilyDecisionTree(profileId: string, lang: "en" | "zh") {
  const tree = distilledFamilyDecisionTrees.find((item) => item.profileId === profileId);
  if (!tree) {
    return undefined;
  }

  return {
    entryChecks: tree.entryChecks.map((item) => getRichLocalizedText(item, lang)),
    preferredRoutes: tree.preferredRoutes.map((item) => getRichLocalizedText(item, lang)),
    routeKillers: tree.routeKillers.map((item) => getRichLocalizedText(item, lang)),
    fallbackRules: tree.fallbackRules.map((item) => getRichLocalizedText(item, lang)),
  };
}

function getFamilyTriggerPack(profileId: string, lang: "en" | "zh") {
  const pack = distilledFamilyTriggerPacks.find((item) => item.profileId === profileId);
  if (!pack) {
    return undefined;
  }

  return {
    strongPositiveCues: pack.strongPositiveCues.map((item) => getRichLocalizedText(item, lang)),
    weakPositiveCues: pack.weakPositiveCues.map((item) => getRichLocalizedText(item, lang)),
    disambiguators: pack.disambiguators.map((item) => getRichLocalizedText(item, lang)),
    routeRejectionCues: pack.routeRejectionCues.map((item) => getRichLocalizedText(item, lang)),
  };
}

function getFamilyCorrectionPack(profileId: string, lang: "en" | "zh") {
  const pack = distilledFamilyCorrectionPacks.find((item) => item.profileId === profileId);
  if (!pack) {
    return undefined;
  }

  return {
    commonConfusions: pack.commonConfusions.map((item) => getRichLocalizedText(item, lang)),
    recoveryChecks: pack.recoveryChecks.map((item) => getRichLocalizedText(item, lang)),
    safeFallbackClaims: pack.safeFallbackClaims.map((item) => getRichLocalizedText(item, lang)),
    escalationWarnings: pack.escalationWarnings.map((item) => getRichLocalizedText(item, lang)),
  };
}

function getFamilyLabelById(profileId: string, lang: "en" | "zh") {
  const profile = profiles.find((item) => item.id === profileId) ?? fallbackProfile;
  return getText(profile.family, lang);
}

function getFamilyHandoffPack(profileId: string, lang: "en" | "zh") {
  const pack = distilledFamilyHandoffPacks.find((item) => item.profileId === profileId);
  if (!pack) {
    return undefined;
  }

  return {
    pivotTargets: pack.pivotTargets.map((target) => ({
      targetFamily: getFamilyLabelById(target.targetProfileId, lang),
      triggerToPivot: target.triggerToPivot.map((item) => getRichLocalizedText(item, lang)),
      fastestPivotCheck: target.fastestPivotCheck.map((item) => getRichLocalizedText(item, lang)),
      reusableAssets: target.reusableAssets.map((item) => getRichLocalizedText(item, lang)),
      stopReusingFirst: target.stopReusingFirst.map((item) => getRichLocalizedText(item, lang)),
    })),
  };
}

function getFamilyStatementPatternPack(profileId: string, lang: "en" | "zh") {
  const pack = distilledFamilyStatementPatternPacks.find((item) => item.profileId === profileId);
  if (!pack) {
    return undefined;
  }

  return {
    goalPhrases: pack.goalPhrases.map((item) => getRichLocalizedText(item, lang)),
    metricPhrases: pack.metricPhrases.map((item) => getRichLocalizedText(item, lang)),
    constraintPhrases: pack.constraintPhrases.map((item) => getRichLocalizedText(item, lang)),
    deliverablePhrases: pack.deliverablePhrases.map((item) => getRichLocalizedText(item, lang)),
  };
}

function getLocalizedFamilyLexiconPack(profileId: string) {
  const pack = getFamilyLexiconPack(profileId);
  if (!pack) {
    return undefined;
  }

  return {
    goalTerms: pack.goalTerms,
    metricTerms: pack.metricTerms,
    constraintTerms: pack.constraintTerms,
    deliverableTerms: pack.deliverableTerms,
  };
}

function getFamilyLexiconPack(profileId: string) {
  return distilledFamilyLexiconPacks.find((item) => item.profileId === profileId);
}

function getFamilyNegativeExamplePack(profileId: string) {
  return distilledFamilyNegativeExamplePacks.find((item) => item.profileId === profileId);
}

function getFamilyPairDisambiguationEntries(profileId: string) {
  const seen = new Set<string>();
  return distilledFamilyPairDisambiguationPacks.flatMap((item) => {
    if (item.primaryProfileId === profileId) {
      const key = [profileId, item.competingProfileId].sort().join("::");
      if (seen.has(key)) {
        return [];
      }
      seen.add(key);
      return [
        {
          title: item.title,
          decidingQuestion: item.decidingQuestion,
          competingProfileId: item.competingProfileId,
          currentWinsWhen: item.primaryWinsWhen,
          competingWinsWhen: item.competingWinsWhen,
          reusableAssets: item.reusableAssets,
          wrongTurnCost: item.wrongTurnCost,
          currentCueTerms: item.primaryCueTerms,
          competingCueTerms: item.competingCueTerms,
        },
      ];
    }

    if (item.competingProfileId === profileId) {
      const key = [profileId, item.primaryProfileId].sort().join("::");
      if (seen.has(key)) {
        return [];
      }
      seen.add(key);
      return [
        {
          title: item.title,
          decidingQuestion: item.decidingQuestion,
          competingProfileId: item.primaryProfileId,
          currentWinsWhen: item.competingWinsWhen,
          competingWinsWhen: item.primaryWinsWhen,
          reusableAssets: item.reusableAssets,
          wrongTurnCost: item.wrongTurnCost,
          currentCueTerms: item.competingCueTerms,
          competingCueTerms: item.primaryCueTerms,
        },
      ];
    }

    return [];
  });
}

function getLocalizedFamilyPairDisambiguationPack(profileId: string, lang: "en" | "zh") {
  return getFamilyPairDisambiguationEntries(profileId)
    .map((item) => ({
      title: getRichLocalizedText(item.title, lang),
      competingProfileId: item.competingProfileId,
      competingFamily: getFamilyLabelById(item.competingProfileId, lang),
      decidingQuestion: getRichLocalizedText(item.decidingQuestion, lang),
      primaryWinsWhen: item.currentWinsWhen.map((entry) => getRichLocalizedText(entry, lang)),
      competingWinsWhen: item.competingWinsWhen.map((entry) => getRichLocalizedText(entry, lang)),
      reusableAssets: item.reusableAssets.map((entry) => getRichLocalizedText(entry, lang)),
      wrongTurnCost: item.wrongTurnCost.map((entry) => getRichLocalizedText(entry, lang)),
      primaryCueTerms: item.currentCueTerms,
      competingCueTerms: item.competingCueTerms,
    }));
}

function getLocalizedFamilyNegativeExamplePack(profileId: string, lang: "en" | "zh") {
  const pack = getFamilyNegativeExamplePack(profileId);
  if (!pack) {
    return undefined;
  }

  return {
    examples: pack.examples.map((example) => ({
      nearMissPrompt: getRichLocalizedText(example.nearMissPrompt, lang),
      whyItLooksLikeThisFamily: example.whyItLooksLikeThisFamily.map((item) => getRichLocalizedText(item, lang)),
      whyItActuallyBelongsElsewhere: example.whyItActuallyBelongsElsewhere.map((item) => getRichLocalizedText(item, lang)),
      redirectProfileId: example.redirectProfileId,
      redirectFamily: getFamilyLabelById(example.redirectProfileId, lang),
      fastestDisambiguationQuestion: example.fastestDisambiguationQuestion.map((item) => getRichLocalizedText(item, lang)),
      reuseWhat: example.reuseWhat.map((item) => getRichLocalizedText(item, lang)),
      dropWhat: example.dropWhat.map((item) => getRichLocalizedText(item, lang)),
      matchedNearMissTerms: [] as string[],
      matchedRedirectTerms: [] as string[],
      signalStrength: 0,
    })),
  };
}

function buildPairDisambiguationAnalysis(profileId: string, normalizedText: string) {
  return getFamilyPairDisambiguationEntries(profileId)
    .map((item) => {
      const matchedPrimaryTerms = item.currentCueTerms.filter((term) =>
        containsCue(normalizedText, term),
      );
      const matchedCompetingTerms = item.competingCueTerms.filter((term) =>
        containsCue(normalizedText, term),
      );

      return {
        competingProfileId: item.competingProfileId,
        matchedPrimaryTerms: cleanMatchedTerms(filterCueTermsBySpecificity(matchedPrimaryTerms)),
        matchedCompetingTerms: cleanMatchedTerms(filterCueTermsBySpecificity(matchedCompetingTerms)),
        signalStrength:
          getWeightedCueScore(matchedPrimaryTerms) * 2 +
          getWeightedCueScore(matchedCompetingTerms) * 2 +
          (matchedPrimaryTerms.length > 0 && matchedCompetingTerms.length > 0 ? 2 : 0),
      };
    })
    .filter((item) => item.signalStrength > 0)
    .sort((a, b) => b.signalStrength - a.signalStrength)
    .slice(0, 4);
}

function buildPairDisambiguationBoost(profileId: string, normalizedText: string) {
  const analysis = buildPairDisambiguationAnalysis(profileId, normalizedText);
  let score = 0;
  const matchedTerms: string[] = [];

  for (const item of analysis) {
    const primaryCount = item.matchedPrimaryTerms.length;
    const competingCount = item.matchedCompetingTerms.length;
    const primaryWeight = getWeightedCueScore(item.matchedPrimaryTerms);
    const competingWeight = getWeightedCueScore(item.matchedCompetingTerms);

    if (primaryCount > 0) {
      score += primaryWeight * 2;
    }

    if (primaryCount > 0 && primaryWeight >= competingWeight) {
      score += 2;
    }

    if (competingWeight > primaryWeight && primaryCount === 0) {
      score -= Math.min(8, competingWeight * 2);
    } else if (competingWeight > primaryWeight) {
      score -= Math.min(6, competingWeight - primaryWeight + 1);
    }

    matchedTerms.push(...item.matchedPrimaryTerms, ...item.matchedCompetingTerms);
  }

  return {
    score,
    matchedTerms: cleanMatchedTerms(matchedTerms),
    analysis,
  };
}

function buildContrastiveCueBoost(profileId: string, rawProblemText: string) {
  const statements = extractContrastiveStatements(rawProblemText);
  const pairEntries = getFamilyPairDisambiguationEntries(profileId);

  let score = 0;
  const matchedTerms: string[] = [];
  const analysis: Array<{
    competingProfileId: string;
    matchedPrimaryTerms: string[];
    matchedCompetingTerms: string[];
    signalStrength: number;
  }> = [];

  for (const entry of pairEntries) {
    for (const statement of statements) {
      const chosenSideHits = cleanMatchedTerms(
        entry.currentCueTerms.filter((term) => statement.primary.includes(term.toLowerCase())),
      );
      const rejectedSideHits = cleanMatchedTerms(
        entry.currentCueTerms.filter((term) => statement.competing.includes(term.toLowerCase())),
      );
      const matchedCompetingTerms = cleanMatchedTerms(
        entry.competingCueTerms.filter((term) => statement.competing.includes(term.toLowerCase())),
      );
      const competingChosenSideHits = cleanMatchedTerms(
        entry.competingCueTerms.filter((term) => statement.primary.includes(term.toLowerCase())),
      );

      if (
        !chosenSideHits.length &&
        !rejectedSideHits.length &&
        !matchedCompetingTerms.length &&
        !competingChosenSideHits.length
      ) {
        continue;
      }

      const matchedPrimaryTerms = cleanMatchedTerms([
        ...chosenSideHits,
        ...matchedCompetingTerms,
      ]);
      const rejectedPrimaryTerms = cleanMatchedTerms([
        ...rejectedSideHits,
        ...competingChosenSideHits,
      ]);

      const signalStrength =
        getWeightedCueScore(chosenSideHits) * 4 +
        getWeightedCueScore(matchedCompetingTerms) * 3 +
        getWeightedCueScore(rejectedSideHits) * 2 +
        getWeightedCueScore(competingChosenSideHits) * 2;

      if (chosenSideHits.length) {
        score += getWeightedCueScore(chosenSideHits) * 4;
      }
      if (matchedCompetingTerms.length) {
        score += getWeightedCueScore(matchedCompetingTerms) * 3;
      }
      if (rejectedSideHits.length) {
        score -= getWeightedCueScore(rejectedSideHits) * 4;
      }
      if (competingChosenSideHits.length) {
        score -= getWeightedCueScore(competingChosenSideHits) * 3;
      }
      if (chosenSideHits.length > 0 && matchedCompetingTerms.length > 0) {
        score += 2;
      }

      matchedTerms.push(...matchedPrimaryTerms, ...rejectedPrimaryTerms);
      analysis.push({
        competingProfileId: entry.competingProfileId,
        matchedPrimaryTerms,
        matchedCompetingTerms: rejectedPrimaryTerms,
        signalStrength,
      });
    }
  }

  return {
    score,
    matchedTerms: cleanMatchedTerms(matchedTerms),
    analysis,
  };
}

function buildContrastivePenalty(profileId: string, rawProblemText: string) {
  const statements = extractContrastiveStatements(rawProblemText);
  const pairEntries = getFamilyPairDisambiguationEntries(profileId);
  const lexiconPack = getFamilyLexiconPack(profileId);

  let penalty = 0;
  const matchedTerms: string[] = [];

  for (const entry of pairEntries) {
    for (const statement of statements) {
      const currentRejectedHits = cleanMatchedTerms(
        entry.currentCueTerms.filter((term) => statement.competing.includes(term.toLowerCase())),
      );
      const competingChosenHits = cleanMatchedTerms(
        entry.competingCueTerms.filter((term) => statement.primary.includes(term.toLowerCase())),
      );

      if (!currentRejectedHits.length && !competingChosenHits.length) {
        continue;
      }

      penalty -= getWeightedCueScore(currentRejectedHits) * 5;
      penalty -= getWeightedCueScore(competingChosenHits) * 4;
      matchedTerms.push(...currentRejectedHits, ...competingChosenHits);
    }
  }

  if (lexiconPack) {
    const ownTerms = cleanMatchedTerms([
      ...lexiconPack.goalTerms,
      ...lexiconPack.metricTerms,
      ...lexiconPack.constraintTerms,
      ...lexiconPack.deliverableTerms,
    ]);

    for (const statement of statements) {
      const rejectedLexiconHits = cleanMatchedTerms(
        ownTerms.filter((term) => containsCue(statement.competing, term.toLowerCase())),
      );
      const chosenLexiconHits = cleanMatchedTerms(
        ownTerms.filter((term) => containsCue(statement.primary, term.toLowerCase())),
      );

      if (rejectedLexiconHits.length > 0) {
        penalty -= getWeightedCueScore(rejectedLexiconHits) * 6;
        matchedTerms.push(...rejectedLexiconHits);
      }

      if (chosenLexiconHits.length > 0) {
        penalty += getWeightedCueScore(chosenLexiconHits) * 2;
        matchedTerms.push(...chosenLexiconHits);
      }
    }
  }

  return {
    score: penalty,
    matchedTerms: cleanMatchedTerms(matchedTerms),
  };
}

function buildContrastiveResolutionBoost(profileId: string, rawProblemText: string) {
  const statements = extractContrastiveStatements(rawProblemText);
  let score = 0;
  const matchedTerms: string[] = [];

  for (const entry of distilledFamilyPairDisambiguationPacks) {
    for (const statement of statements) {
      const primaryChosenHits = cleanMatchedTerms(
        entry.primaryCueTerms.filter((term) => statement.primary.includes(term.toLowerCase())),
      );
      const primaryRejectedHits = cleanMatchedTerms(
        entry.primaryCueTerms.filter((term) => statement.competing.includes(term.toLowerCase())),
      );
      const competingChosenHits = cleanMatchedTerms(
        entry.competingCueTerms.filter((term) => statement.primary.includes(term.toLowerCase())),
      );
      const competingRejectedHits = cleanMatchedTerms(
        entry.competingCueTerms.filter((term) => statement.competing.includes(term.toLowerCase())),
      );

      if (
        !primaryChosenHits.length &&
        !primaryRejectedHits.length &&
        !competingChosenHits.length &&
        !competingRejectedHits.length
      ) {
        continue;
      }

      const primaryNet =
        getWeightedCueScore(primaryChosenHits) * 6 +
        getWeightedCueScore(competingRejectedHits) * 5 -
        getWeightedCueScore(primaryRejectedHits) * 6 -
        getWeightedCueScore(competingChosenHits) * 5;

      const competingNet =
        getWeightedCueScore(competingChosenHits) * 6 +
        getWeightedCueScore(primaryRejectedHits) * 5 -
        getWeightedCueScore(competingRejectedHits) * 6 -
        getWeightedCueScore(primaryChosenHits) * 5;

      if (profileId === entry.primaryProfileId) {
        score += primaryNet;
        matchedTerms.push(
          ...primaryChosenHits,
          ...competingRejectedHits,
          ...primaryRejectedHits,
          ...competingChosenHits,
        );
      }

      if (profileId === entry.competingProfileId) {
        score += competingNet;
        matchedTerms.push(
          ...competingChosenHits,
          ...primaryRejectedHits,
          ...competingRejectedHits,
          ...primaryChosenHits,
        );
      }
    }
  }

  return {
    score,
    matchedTerms: cleanMatchedTerms(matchedTerms),
  };
}

function buildFamilyLexiconBoost(profileId: string, normalizedText: string) {
  const pack = getFamilyLexiconPack(profileId);
  if (!pack) {
    return {
      score: 0,
      matchedTerms: [] as string[],
    };
  }

  const buckets = [
    { items: pack.goalTerms, weight: 3 },
    { items: pack.metricTerms, weight: 2 },
    { items: pack.constraintTerms, weight: 2 },
    { items: pack.deliverableTerms, weight: 2 },
  ];

  let score = 0;
  const matchedTerms = new Set<string>();

  for (const bucket of buckets) {
    for (const term of bucket.items) {
      const normalizedTerm = term.toLowerCase();
      if (!containsCue(normalizedText, normalizedTerm)) {
        continue;
      }

      score += bucket.weight;
      matchedTerms.add(term);
    }
  }

  return {
    score,
    matchedTerms: Array.from(matchedTerms).slice(0, 12),
  };
}

function buildNegativeExampleAnalysis(profileId: string, normalizedText: string) {
  const pack = getFamilyNegativeExamplePack(profileId);
  if (!pack) {
    return {
      scoreAdjustment: 0,
      matchedTerms: [] as string[],
      examples: [] as Array<{
        redirectProfileId: string;
        matchedNearMissTerms: string[];
        matchedRedirectTerms: string[];
        signalStrength: number;
      }>,
    };
  }

  const examples = pack.examples
    .map((example) => {
      const matchedNearMissTerms = example.triggerTerms.filter((term) =>
        normalizedText.includes(term.toLowerCase()),
      );
      const matchedRedirectTerms = example.redirectTerms.filter((term) =>
        normalizedText.includes(term.toLowerCase()),
      );

      const signalStrength =
        matchedNearMissTerms.length * 2 +
        matchedRedirectTerms.length * 3 +
        (matchedNearMissTerms.length > 0 && matchedRedirectTerms.length > 0 ? 2 : 0);

      return {
        redirectProfileId: example.redirectProfileId,
        matchedNearMissTerms: matchedNearMissTerms.slice(0, 6),
        matchedRedirectTerms: matchedRedirectTerms.slice(0, 6),
        signalStrength,
      };
    })
    .filter((example) => example.signalStrength > 0)
    .sort((a, b) => b.signalStrength - a.signalStrength)
    .slice(0, 4);

  const scoreAdjustment = examples.reduce((total, example) => {
    if (example.matchedNearMissTerms.length > 0 && example.matchedRedirectTerms.length > 0) {
      return total - Math.min(6, example.signalStrength);
    }
    return total;
  }, 0);

  const matchedTerms = cleanMatchedTerms(
    examples.flatMap((example) => [...example.matchedNearMissTerms, ...example.matchedRedirectTerms]),
  );

  return {
    scoreAdjustment,
    matchedTerms,
    examples,
  };
}

function extractTriggerCueTerms(text: string) {
  const normalized = normalizeText(text)
    .replace(/[()]/g, " ")
    .split(/[，,；;。!！?？、]/)
    .flatMap((segment) => segment.split(/\b(?:and|or|versus|vs\.?|rather than|instead of)\b/))
    .map((item) => item.trim())
    .filter(Boolean);

  return Array.from(
    new Set(
      normalized.filter((term) => {
        if (/[\u4e00-\u9fff]/.test(term)) {
          return term.length >= 2;
        }

        return term.replace(/[^a-z0-9-]/g, "").length >= 3;
      }),
    ),
  );
}

function extractTriggerCueTermsV2(text: string) {
  const stopwords = new Set([
    "the",
    "a",
    "an",
    "is",
    "are",
    "to",
    "of",
    "and",
    "or",
    "with",
    "for",
    "that",
    "this",
    "than",
    "into",
    "from",
    "then",
    "only",
    "just",
    "mainly",
    "mostly",
  ]);

  const normalized = normalizeText(text)
    .replace(/[()]/g, " ")
    .split(/[,.!?;:，。！？；：、]/)
    .flatMap((segment) =>
      segment.split(
        /\b(?:and|or|versus|vs\.?|rather than|instead of|if|when|where|while|switch to|belongs to|target is|task is|problem is|main challenge is|core target is|need to|not)\b/,
      ),
    )
    .map((item) => item.trim())
    .filter(Boolean);

  const candidates = new Set<string>();

  for (const segment of normalized) {
    if (/[\u4e00-\u9fff]/.test(segment)) {
      if (segment.length >= 2) {
        candidates.add(segment);
      }
      continue;
    }

    const tokens = segment.match(/[a-z0-9-]+/g) ?? [];
    if (!tokens.length) {
      continue;
    }

    const joined = tokens.join(" ");
    if (joined.length >= 4) {
      candidates.add(joined);
    }

    for (let size = 2; size <= Math.min(4, tokens.length); size += 1) {
      for (let index = 0; index <= tokens.length - size; index += 1) {
        const slice = tokens.slice(index, index + size);
        if (slice.every((token) => stopwords.has(token))) {
          continue;
        }

        candidates.add(slice.join(" "));
      }
    }

    for (const token of tokens) {
      if (!stopwords.has(token) && token.length >= 5) {
        candidates.add(token);
      }
    }
  }

  return Array.from(candidates).filter((term) => {
    if (/[\u4e00-\u9fff]/.test(term)) {
      return term.length >= 2;
    }

    return term.replace(/[^a-z0-9-]/g, "").length >= 3;
  });
}

function matchTriggerCueBucket(
  cues: Array<{ en: string; zh: string }>,
  normalizedText: string,
  weight: number,
) {
  let score = 0;
  const matchedTerms = new Set<string>();

  for (const cue of cues) {
    const cueTerms = dedupeStrings([...extractTriggerCueTermsV2(cue.en), ...extractTriggerCueTermsV2(cue.zh)]);
    const matched = cueTerms.filter((term) => containsCue(normalizedText, term));
    if (!matched.length) {
      continue;
    }

    score += weight;
    for (const term of matched.slice(0, 3)) {
      matchedTerms.add(term);
    }
  }

  return {
    score,
    matchedTerms: Array.from(matchedTerms),
  };
}

function buildTriggerCueAnalysis(profileId: string, normalizedText: string) {
  const pack = distilledFamilyTriggerPacks.find((item) => item.profileId === profileId);
  if (!pack) {
    return {
      score: 0,
      matchedTerms: [] as string[],
      disambiguatorHits: [] as string[],
      rejectionHits: [] as string[],
    };
  }

  const strongPositive = matchTriggerCueBucket(pack.strongPositiveCues, normalizedText, 4);
  const weakPositive = matchTriggerCueBucket(pack.weakPositiveCues, normalizedText, 2);
  const disambiguators = matchTriggerCueBucket(pack.disambiguators, normalizedText, 2);
  const routeRejections = matchTriggerCueBucket(pack.routeRejectionCues, normalizedText, 1);

  return {
    score: strongPositive.score + weakPositive.score - disambiguators.score,
    matchedTerms: dedupeStrings([...strongPositive.matchedTerms, ...weakPositive.matchedTerms]).slice(0, 12),
    disambiguatorHits: disambiguators.matchedTerms,
    rejectionHits: routeRejections.matchedTerms,
  };
}

function buildTriggerCueBoost(profileId: string, normalizedText: string) {
  const analysis = buildTriggerCueAnalysis(profileId, normalizedText);
  return {
    score: analysis.score,
    matchedTerms: analysis.matchedTerms,
  };
}

function getRankedRouteVariants(
  profileId: string,
  normalizedText: string,
  lang: "en" | "zh",
) {
  return familyRouteVariants
    .filter((item) => item.profileId === profileId)
    .map((variant) => {
      const scored = scoreRouteVariant(variant.id, normalizedText);
      const evidencePack = distilledRouteEvidencePacks.find((item) => item.routeId === variant.id);
      return {
        id: variant.id,
        name: getRichLocalizedText(variant.name, lang),
        matchedTerms: scored.matchedTerms,
        score: scored.score,
        bestFor: getRichLocalizedText(variant.bestFor, lang),
        principle: getRichLocalizedText(variant.principle, lang),
        hardwareGate: getRichLocalizedText(variant.hardwareGate, lang),
        measurementTargets: variant.measurementTargets.map((item) => getRichLocalizedText(item, lang)),
        hardwareFocus: variant.hardwareFocus.map((item) => getRichLocalizedText(item, lang)),
        softwareFocus: variant.softwareFocus.map((item) => getRichLocalizedText(item, lang)),
        validationChecklist: variant.validationChecklist.map((item) => getRichLocalizedText(item, lang)),
        avoidWhen: variant.avoidWhen.map((item) => getRichLocalizedText(item, lang)),
        provincialProof: evidencePack?.provincialProof.map((item) => getRichLocalizedText(item, lang)) ?? [],
        stretchSignals: evidencePack?.stretchSignals.map((item) => getRichLocalizedText(item, lang)) ?? [],
        collapseSignals: evidencePack?.collapseSignals.map((item) => getRichLocalizedText(item, lang)) ?? [],
        tradeoffs: variant.tradeoffs.map((item) => getRichLocalizedText(item, lang)),
        typicalReferences: variant.typicalReferences,
      };
    })
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))
    .slice(0, 4);
}

type RankedRouteVariant = NonNullable<RecommendedPlan["routeVariants"]>[number];
type RelatedProblemRecommendation = NonNullable<RecommendedPlan["relatedProblems"]>[number];

function dedupeStrings(items: Array<string | undefined>) {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const item of items) {
    const trimmed = item?.trim();
    if (!trimmed || seen.has(trimmed)) {
      continue;
    }
    seen.add(trimmed);
    result.push(trimmed);
  }

  return result;
}

function sanitizeMatchedTerm(term: string) {
  let normalized = term.trim().toLowerCase();
  if (!normalized) {
    return "";
  }

  for (const { from, to } of distilledSignalHygienePack.canonicalRewrites) {
    if (normalized === from) {
      normalized = to;
    }
  }

  let changed = true;
  while (changed) {
    changed = false;
    for (const prefix of distilledSignalHygienePack.trimPrefixes) {
      if (normalized.startsWith(prefix) && normalized.length > prefix.length + 2) {
        normalized = normalized.slice(prefix.length).trim();
        changed = true;
      }
    }
  }

  normalized = normalized
    .replace(/^[^a-z0-9\u4e00-\u9fff]+/g, "")
    .replace(/[^a-z0-9\u4e00-\u9fff-]+$/g, "")
    .trim();

  for (const { from, to } of distilledSignalHygienePack.canonicalRewrites) {
    if (normalized === from) {
      normalized = to;
    }
  }

  return normalized;
}

function cleanMatchedTerms(items: Array<string | undefined>) {
  const deduped = dedupeStrings(items.map((item) => (item ? sanitizeMatchedTerm(item) : item)));
  const lowSignal = new Set(distilledSignalHygienePack.lowSignalTerms.map((item) => item.toLowerCase()));
  const protectedShort = new Set(distilledSignalHygienePack.protectedShortTerms.map((item) => item.toLowerCase()));
  const weakStandalone = new Set(distilledSignalHygienePack.weakStandaloneTerms.map((item) => item.toLowerCase()));

  const filtered = deduped.filter((item) => {
    const normalized = item.toLowerCase().trim();
    if (!normalized) {
      return false;
    }

    if (lowSignal.has(normalized)) {
      return false;
    }

    if (normalized.length <= 4 && !protectedShort.has(normalized) && !/[\u4e00-\u9fff]/.test(normalized)) {
      return false;
    }

    if (weakStandalone.has(normalized) && !normalized.includes(" ")) {
      return false;
    }

    return true;
  });

  const prioritized = filtered.sort((left, right) => {
    const leftProtected = protectedShort.has(left.toLowerCase()) ? 1 : 0;
    const rightProtected = protectedShort.has(right.toLowerCase()) ? 1 : 0;
    if (leftProtected !== rightProtected) {
      return rightProtected - leftProtected;
    }

    const leftWords = left.split(/\s+/).length;
    const rightWords = right.split(/\s+/).length;
    if (leftWords !== rightWords) {
      return rightWords - leftWords;
    }

    return right.length - left.length;
  });

  return prioritized.slice(0, 12);
}

const RELATED_PROBLEM_LOW_SIGNAL_TAGS = new Set(
  [
    "signal",
    "signals",
    "response",
    "measurement",
    "measure",
    "device",
    "system",
    "result",
    "test",
    "testing",
    "experiment",
    "experimental",
    "chain",
    "process",
    "processing",
    "feature",
    "features",
    "module",
    "output",
    "input",
    "参数",
    "系统",
    "装置",
    "实验",
    "测量",
    "测试",
    "信号",
    "特征",
    "响应",
    "输出",
    "输入",
  ].map((item) => item.toLowerCase()),
);

const RELATED_PROBLEM_LOW_SIGNAL_MATCH_TERMS = new Set(
  ["visible", "explicit", "before", "after", "final", "same"].map((item) => item.toLowerCase()),
);

function isLowSignalRelatedTag(tag: string) {
  const normalized = tag.trim().toLowerCase();
  if (!normalized) {
    return true;
  }

  if (RELATED_PROBLEM_LOW_SIGNAL_TAGS.has(normalized)) {
    return true;
  }

  return normalized.length <= 2 && !/[\u4e00-\u9fff]/.test(normalized);
}

function getTopRouteVariant(routeVariants: RankedRouteVariant[]) {
  return routeVariants.find((route) => (route.score ?? 0) > 0) ?? routeVariants[0];
}

function buildRouteFocusModule(
  route: RankedRouteVariant | undefined,
  lang: "en" | "zh",
) {
  if (!route) {
    return null;
  }

  return {
    title: lang === "zh" ? "路线落点" : "Route Focus",
    items:
      lang === "zh"
        ? dedupeStrings([
            `优先落地路线：${route.name}。`,
            route.hardwareGate ? `硬件前提：${route.hardwareGate}` : undefined,
            route.measurementTargets?.length
              ? `先把这些结果测稳：${route.measurementTargets.join("、")}。`
              : undefined,
            route.matchedTerms?.length
              ? `这条路线命中的题面线索：${route.matchedTerms.join("、")}。`
              : undefined,
          ])
        : dedupeStrings([
            `Preferred implementation route: ${route.name}.`,
            route.hardwareGate ? `Hardware gate: ${route.hardwareGate}` : undefined,
            route.measurementTargets?.length
              ? `Stabilize these target outputs first: ${route.measurementTargets.join(", ")}.`
              : undefined,
            route.matchedTerms?.length
              ? `Problem cues that pushed this route: ${route.matchedTerms.join(", ")}.`
              : undefined,
          ]),
  };
}

function buildDataDrivenApproach(
  baseApproach: string,
  route: RankedRouteVariant | undefined,
  relatedProblems: RelatedProblemRecommendation[],
  lang: "en" | "zh",
) {
  const referenceProblem = relatedProblems[0];
  const extraParts =
    lang === "zh"
      ? [
          route ? `当前优先采用“${route.name}”路线，核心原理是：${route.principle}` : undefined,
          referenceProblem?.coreChain?.length
            ? `可直接对照 ${referenceProblem.code} 的核心链路先打通首条闭环：${referenceProblem.coreChain
                .slice(0, 2)
                .join("；")}。`
            : undefined,
        ]
      : [
          route
            ? `The first implementation route should be "${route.name}": ${route.principle}`
            : undefined,
          referenceProblem?.coreChain?.length
            ? `Mirror the first closed loop on ${referenceProblem.code}: ${referenceProblem.coreChain
                .slice(0, 2)
                .join("; ")}.`
            : undefined,
        ];

  return dedupeStrings([baseApproach, ...extraParts]).join(" ");
}

function buildDataDrivenTuningSteps(
  baseSteps: string[],
  route: RankedRouteVariant | undefined,
  relatedProblems: RelatedProblemRecommendation[],
  lang: "en" | "zh",
) {
  const referenceProblem = relatedProblems[0];
  const routeSteps =
    lang === "zh"
      ? [
          route?.measurementTargets?.length
            ? `先把 ${route.measurementTargets.join("、")} 这几项基础结果测稳，再往最终指标上叠。`
            : undefined,
          route?.hardwareFocus?.[0] ? `硬件优先锁定：${route.hardwareFocus[0]}` : undefined,
          route?.softwareFocus?.[0] ? `软件优先锁定：${route.softwareFocus[0]}` : undefined,
          referenceProblem?.mustHaveDeliverables?.[0]
            ? `参考 ${referenceProblem.code} 的交付习惯，至少先补齐：${referenceProblem.mustHaveDeliverables[0]}`
            : undefined,
        ]
      : [
          route?.measurementTargets?.length
            ? `Stabilize ${route.measurementTargets.join(", ")} before chasing the final score metrics.`
            : undefined,
          route?.hardwareFocus?.[0] ? `Hardware first: ${route.hardwareFocus[0]}` : undefined,
          route?.softwareFocus?.[0] ? `Software first: ${route.softwareFocus[0]}` : undefined,
          referenceProblem?.mustHaveDeliverables?.[0]
            ? `Borrow the delivery standard from ${referenceProblem.code}: ${referenceProblem.mustHaveDeliverables[0]}`
            : undefined,
        ];

  return dedupeStrings([...routeSteps, ...baseSteps]).slice(0, 8);
}

function buildDataDrivenRisks(
  baseRisks: string[],
  route: RankedRouteVariant | undefined,
  relatedProblems: RelatedProblemRecommendation[],
) {
  const historicalPitfalls = relatedProblems.flatMap((problem) => problem.commonPitfalls ?? []);
  return dedupeStrings([...(route?.avoidWhen ?? []), ...historicalPitfalls, ...baseRisks]).slice(0, 8);
}

function buildDataDrivenVerification(
  baseVerification: string[],
  route: RankedRouteVariant | undefined,
  relatedProblems: RelatedProblemRecommendation[],
  lang: "en" | "zh",
) {
  const historicalChecks = relatedProblems
    .flatMap((problem) =>
      (problem.scoringFocus ?? []).map((item) =>
        lang === "zh"
          ? `按 ${problem.code} 的评分关注点复核：${item}`
          : `Cross-check against the scoring focus of ${problem.code}: ${item}`,
      ),
    )
    .slice(0, 2);

  const benchmarkChecks = relatedProblems
    .flatMap((problem) =>
      (problem.competitionDayQuickChecks ?? []).map((item) =>
        lang === "zh"
          ? `按 ${problem.code} 的现场快检顺序复核：${item}`
          : `Follow the competition-day quick check from ${problem.code}: ${item}`,
      ),
    )
    .slice(0, 2);

  return dedupeStrings([
    ...(route?.validationChecklist ?? []),
    ...baseVerification,
    ...historicalChecks,
    ...benchmarkChecks,
  ]).slice(0, 8);
}

function buildBoostedTerms(profileId: string, normalizedText: string) {
  const playbook = instrumentationFamilyPlaybooks.find((item) => item.profileId === profileId);
  if (!playbook) {
    return { score: 0, matchedTerms: [] as string[] };
  }

  let score = 0;
  const matchedTerms = new Set<string>();

  for (const boost of playbook.keywordBoosts) {
    for (const term of boost.terms) {
      if (containsCue(normalizedText, term)) {
        score += boost.weight;
        matchedTerms.add(term);
      }
    }
  }

  return {
    score,
    matchedTerms: Array.from(matchedTerms),
  };
}

function buildHistoricalReferenceBoost(profileId: string, normalizedText: string) {
  let score = 0;
  const matchedTerms = new Set<string>();

  for (const supplement of historicalProblemSupplements) {
    if (supplement.familyId !== profileId) {
      continue;
    }

    const problem = historicalProblemCatalog.find((item) => item.id === supplement.id);
    if (!problem) {
      continue;
    }

    const cues = [
      supplement.id,
      problem.code.toLowerCase(),
      problem.code.toLowerCase().replace(/\s+/g, ""),
      problem.code.toLowerCase().replace(/\s+/g, "-"),
      `${problem.year}${problem.code.split(" ").pop()?.toLowerCase() ?? ""}`,
    ].filter(Boolean);

    for (const cue of cues) {
      if (containsCue(normalizedText, cue)) {
        score += 6;
        matchedTerms.add(problem.code);
      }
    }
  }

  return {
    score,
    matchedTerms: Array.from(matchedTerms),
  };
}

function buildStatementPatternBoost(profileId: string, normalizedText: string) {
  const pack = distilledFamilyStatementPatternPacks.find((item) => item.profileId === profileId);
  if (!pack) {
    return {
      score: 0,
      matchedTerms: [] as string[],
    };
  }

  const buckets = [
    { items: pack.goalPhrases, weight: 3 },
    { items: pack.metricPhrases, weight: 3 },
    { items: pack.constraintPhrases, weight: 2 },
    { items: pack.deliverablePhrases, weight: 2 },
  ];

  let score = 0;
  const matchedTerms = new Set<string>();

  for (const bucket of buckets) {
    for (const phrase of bucket.items) {
      const candidates = extractTriggerCueTermsV2(`${phrase.en} ${phrase.zh}`);
      const hits = candidates.filter((candidate) => containsCue(normalizedText, candidate));
      if (!hits.length) {
        continue;
      }

      score += bucket.weight;
      for (const hit of hits.slice(0, 2)) {
        matchedTerms.add(hit);
      }
    }
  }

  return {
    score,
    matchedTerms: Array.from(matchedTerms).slice(0, 12),
  };
}

function scoreProfileRich(profile: InstrumentationProfile, normalizedText: string, rawProblemText: string) {
  const base = scoreProfile(profile, normalizedText);
  const boosted = buildBoostedTerms(profile.id, normalizedText);
  const historicalBoost = buildHistoricalReferenceBoost(profile.id, normalizedText);
  const triggerBoost = buildTriggerCueBoost(profile.id, normalizedText);
  const statementBoost = buildStatementPatternBoost(profile.id, normalizedText);
  const lexiconBoost = buildFamilyLexiconBoost(profile.id, normalizedText);
  const pairDisambiguationBoost = buildPairDisambiguationBoost(profile.id, normalizedText);
  const contrastiveCueBoost = buildContrastiveCueBoost(profile.id, rawProblemText);
  const contrastivePenalty = buildContrastivePenalty(profile.id, rawProblemText);
  const contrastiveResolutionBoost = buildContrastiveResolutionBoost(profile.id, rawProblemText);
  const negativeExampleAnalysis = buildNegativeExampleAnalysis(profile.id, normalizedText);
  const rejectedCompetingFamilyPenalty = buildRejectedCompetingFamilyPenalty(profile.id, rawProblemText);
  return {
    score:
      base.score +
      boosted.score +
      historicalBoost.score +
      triggerBoost.score +
      statementBoost.score +
      lexiconBoost.score +
      pairDisambiguationBoost.score +
      contrastiveCueBoost.score +
      contrastivePenalty.score +
      contrastiveResolutionBoost.score +
      negativeExampleAnalysis.scoreAdjustment +
      rejectedCompetingFamilyPenalty,
    matchedTerms: cleanMatchedTerms([
      ...base.matchedTerms,
      ...boosted.matchedTerms,
      ...historicalBoost.matchedTerms,
      ...triggerBoost.matchedTerms,
      ...statementBoost.matchedTerms,
      ...lexiconBoost.matchedTerms,
      ...pairDisambiguationBoost.matchedTerms,
      ...contrastiveCueBoost.matchedTerms,
      ...contrastivePenalty.matchedTerms,
      ...contrastiveResolutionBoost.matchedTerms,
      ...negativeExampleAnalysis.matchedTerms,
    ]),
    pairDisambiguationBoost,
    contrastiveCueBoost,
    contrastivePenalty,
    contrastiveResolutionBoost,
    negativeExampleAnalysis,
  };
}

function getSupplementedRelatedProblems(
  selectedProfile: InstrumentationProfile,
  supportProfiles: Array<{ profile: InstrumentationProfile }>,
  matchedTerms: string[],
  lang: "en" | "zh",
) {
  const selectedFamilyId = selectedProfile.id;
  const supportFamilyIds = new Set(supportProfiles.map((profile) => profile.profile.id));
  const lowerMatchedTerms = matchedTerms.map((term) => term.toLowerCase());
  const effectiveMatchedTerms = lowerMatchedTerms.filter(
    (term) => !isLowSignalRelatedTag(term) && !RELATED_PROBLEM_LOW_SIGNAL_MATCH_TERMS.has(term),
  );
  const selectedReferenceCodes = new Set(selectedProfile.references.map((reference) => reference.toLowerCase()));
  const supportReferenceCodes = new Set(
    supportProfiles.flatMap((profile) => profile.profile.references.map((reference) => reference.toLowerCase())),
  );
  const supplementsById = new Map<string, typeof historicalProblemSupplements>();
  for (const supplement of historicalProblemSupplements) {
    const existing = supplementsById.get(supplement.id) ?? [];
    existing.push(supplement);
    supplementsById.set(supplement.id, existing);
  }
  const transferById = new Map(historicalTransferPacks.map((item) => [item.id, item]));
  const reverseSimilarProblemIds = new Map<string, Set<string>>();

  for (const supplement of historicalProblemSupplements) {
    for (const similarId of supplement.similarProblemIds) {
      const reverseSet = reverseSimilarProblemIds.get(similarId) ?? new Set<string>();
      reverseSet.add(supplement.id);
      reverseSimilarProblemIds.set(similarId, reverseSet);
    }
  }

  const receiverCueTerms = [
    "receiver",
    "weak signal",
    "lock",
    "locking",
    "locked",
    "relock",
    "reacquisition",
    "capture",
    "tracking",
    "receive chain",
    "接收机",
    "弱信号",
    "锁定",
    "重锁",
    "捕获",
    "跟踪",
    "接收链路",
  ];
  const hasReceiverSpecificEvidence = receiverCueTerms.some((term) =>
    effectiveMatchedTerms.some((matched) => matched.includes(term) || term.includes(matched)),
  );

  const ranked = historicalProblemCatalog
    .map((problem) => {
      const supplements = supplementsById.get(problem.id) ?? [];
      const supplement =
        supplements.find((item) => item.familyId === selectedFamilyId) ??
        supplements.find((item) => supportFamilyIds.has(item.familyId)) ??
        supplements[0];
      const winningPattern = historicalWinningPatterns.find((item) => item.id === problem.id);
      const transferPack = transferById.get(problem.id);
      const reverseSimilarIds = reverseSimilarProblemIds.get(problem.id) ?? new Set<string>();
      let score = 0;
      let matchedTagCount = 0;
      let matchedPhraseTagCount = 0;
      let referenceMatchCount = 0;
      const supportPackCount = [
        winningPattern,
        historicalExecutionNotes.find((item) => item.id === problem.id),
        historicalSolutionBlueprints.find((item) => item.id === problem.id),
        historicalTieredBuildPlans.find((item) => item.id === problem.id),
        historicalValidationPacks.find((item) => item.id === problem.id),
        historicalTroubleshootingPacks.find((item) => item.id === problem.id),
        historicalDefensePacks.find((item) => item.id === problem.id),
        historicalBenchmarkPacks.find((item) => item.id === problem.id),
        historicalDisambiguationPacks.find((item) => item.id === problem.id),
        historicalTransferPacks.find((item) => item.id === problem.id),
      ].filter(Boolean).length;
      const supplementFamilyIds = new Set(supplements.map((item) => item.familyId));
      const sameSelectedFamily =
        supplementFamilyIds.has(selectedFamilyId) || problem.family.en === getText(selectedProfile.family, "en");
      const sameSupportFamily =
        supportProfiles.length > 0 &&
        ([...supplementFamilyIds].some((familyId) => supportFamilyIds.has(familyId)) ||
          supportProfiles.some((profile) => problem.family.en === getText(profile.profile.family, "en")));

      if (supplementFamilyIds.has(selectedFamilyId)) {
        score += 8;
      }

      if (sameSupportFamily) {
        score += 4;
      }

      if (problem.family.en === getText(selectedProfile.family, "en")) {
        score += 4;
      }

      for (const tag of problem.tags) {
        const tagLower = tag.toLowerCase();
        if (isLowSignalRelatedTag(tagLower)) {
          continue;
        }
        if (
          effectiveMatchedTerms.some(
            (term) => containsCue(tagLower, term) || containsCue(term, tagLower),
          )
        ) {
          score += 2;
          matchedTagCount += 1;
          if (tagLower.includes(" ") || /[\u4e00-\u9fff]/.test(tagLower) || tagLower.length >= 12) {
            matchedPhraseTagCount += 1;
          }
        }
      }

      const similarProblemIds = supplements.flatMap((item) => item.similarProblemIds);

      if (similarProblemIds.includes(problem.id)) {
        score += 1;
      }

      for (const reference of selectedProfile.references) {
        if (reference.toLowerCase().includes(problem.code.toLowerCase())) {
          score += 2;
          referenceMatchCount += 1;
        }
      }

      if (selectedReferenceCodes.has(problem.code.toLowerCase())) {
        score += 3;
      }

      if (supportReferenceCodes.has(problem.code.toLowerCase())) {
        score += 2;
      }

      if (similarProblemIds.some((similarId) => similarId === problem.id)) {
        score += 1;
      }

      if (similarProblemIds.some((similarId) => selectedReferenceCodes.has(similarId.replace("-", " ").toLowerCase()))) {
        score += 1;
      }

      if (similarProblemIds.some((similarId) => supportReferenceCodes.has(similarId.replace("-", " ").toLowerCase()))) {
        score += 1;
      }

      if (reverseSimilarIds.size > 0) {
        const reverseMatches = Array.from(reverseSimilarIds).filter((similarId) => {
          const similarProblem = historicalProblemCatalog.find((entry) => entry.id === similarId);
          if (!similarProblem) {
            return false;
          }

          return (
            selectedReferenceCodes.has(similarProblem.code.toLowerCase()) ||
            supportReferenceCodes.has(similarProblem.code.toLowerCase())
          );
        }).length;

        if (reverseMatches > 0) {
          score += Math.min(3, reverseMatches + 1);
        }
      }

      if (transferPack) {
        const transferHits = transferPack.bestBorrowedFrom
          .map((item) => `${item.en} ${item.zh}`.toLowerCase())
          .filter((text) =>
            effectiveMatchedTerms.some((term) => text.includes(term) || term.includes(text)),
          ).length;

        if (transferHits > 0) {
          score += Math.min(3, transferHits + 1);
        }
      }

      if (supportPackCount > 0 && (sameSelectedFamily || sameSupportFamily || matchedTagCount > 0 || referenceMatchCount > 0)) {
        score += Math.min(3, Math.ceil(supportPackCount / 3));
      }

      if (selectedFamilyId === "modulation" && supplementFamilyIds.has("receiver") && !hasReceiverSpecificEvidence) {
        score -= 6;
      }

      if (selectedFamilyId === "receiver" && supplementFamilyIds.has("modulation") && !hasReceiverSpecificEvidence) {
        score -= 3;
      }

      if (!sameSelectedFamily && !sameSupportFamily && matchedTagCount === 0 && referenceMatchCount === 0) {
        score = 0;
      }

      if (
        !sameSelectedFamily &&
        !sameSupportFamily &&
        referenceMatchCount === 0 &&
        matchedTagCount < 2 &&
        matchedPhraseTagCount === 0
      ) {
        score = 0;
      }

      if (!sameSelectedFamily && !sameSupportFamily && referenceMatchCount === 0 && score < 4) {
        score = 0;
      }

      return { problem, supplement, winningPattern, score, matchedTagCount, matchedPhraseTagCount, referenceMatchCount };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || b.problem.year - a.problem.year)
    .slice(0, 6);

  return ranked.map(({ problem, supplement, winningPattern }) => {
    const executionNote = historicalExecutionNotes.find((item) => item.id === problem.id);

    const blueprint = historicalSolutionBlueprints.find((item) => item.id === problem.id);
    const buildPlan = historicalTieredBuildPlans.find((item) => item.id === problem.id);
    const validationPack = historicalValidationPacks.find((item) => item.id === problem.id);
    const troubleshootingPack = historicalTroubleshootingPacks.find((item) => item.id === problem.id);
    const defensePack = historicalDefensePacks.find((item) => item.id === problem.id);
    const benchmarkPack = historicalBenchmarkPacks.find((item) => item.id === problem.id);
    const disambiguationPack = historicalDisambiguationPacks.find((item) => item.id === problem.id);
    const transferPack = historicalTransferPacks.find((item) => item.id === problem.id);

    return ({
    id: problem.id,
    code: problem.code,
    title: getText(problem.title, lang),
    family: getText(problem.family, lang),
    highlights: problem.highlights.map((item) => getText(item, lang)),
    tags: problem.tags.slice(0, 6),
    difficulty:
      supplement?.difficulty === "high"
        ? lang === "zh"
          ? "高"
          : "High"
        : supplement?.difficulty === "medium"
          ? lang === "zh"
            ? "中"
            : "Medium"
          : undefined,
    tierFit: supplement?.tierFit.map((tier) => {
      if (lang === "zh") {
        if (tier === "baseline") return "基础版";
        if (tier === "provincial") return "稳省一";
        return "增强版";
      }
      if (tier === "baseline") return "Baseline";
      if (tier === "provincial") return "Provincial";
      return "National";
    }),
    coreChain: supplement?.coreChain.map((item) => getRichLocalizedText(item, lang)),
    mustHaveDeliverables: supplement?.mustHaveDeliverables.map((item) => getRichLocalizedText(item, lang)),
    commonPitfalls: supplement?.commonPitfalls.map((item) => getRichLocalizedText(item, lang)),
    scoringFocus: supplement?.scoringFocus.map((item) => getRichLocalizedText(item, lang)),
    recommendedHardware: winningPattern?.recommendedHardware.map((item) => getRichLocalizedText(item, lang)),
    softwareBackbone: winningPattern?.softwareBackbone.map((item) => getRichLocalizedText(item, lang)),
    calibrationFocus: winningPattern?.calibrationFocus.map((item) => getRichLocalizedText(item, lang)),
    defenseAngles: winningPattern?.defenseAngles.map((item) => getRichLocalizedText(item, lang)),
    stabilizeFirst: executionNote?.stabilizeFirst.map((item) => getRichLocalizedText(item, lang)),
    abnormalChecklist: executionNote?.abnormalChecklist.map((item) => getRichLocalizedText(item, lang)),
    defenseScript: executionNote?.defenseScript.map((item) => getRichLocalizedText(item, lang)),
    principleRoute: blueprint?.principleRoute.map((item) => getRichLocalizedText(item, lang)),
    frontEndFocus: blueprint?.frontEndFocus.map((item) => getRichLocalizedText(item, lang)),
    algorithmBackbone: blueprint?.algorithmBackbone.map((item) => getRichLocalizedText(item, lang)),
    calibrationBench: blueprint?.calibrationBench.map((item) => getRichLocalizedText(item, lang)),
    demoSequence: blueprint?.demoSequence.map((item) => getRichLocalizedText(item, lang)),
    buildTiers: buildPlan?.tiers.map((tier) => ({
      tier:
        lang === "zh"
          ? tier.tier === "baseline"
            ? "基础"
            : tier.tier === "provincial"
              ? "省一"
              : "冲高分"
          : tier.tier === "baseline"
            ? "Baseline"
            : tier.tier === "provincial"
              ? "Provincial"
              : "Stretch",
      hardwareStack: tier.hardwareStack.map((item) => getRichLocalizedText(item, lang)),
      softwareScope: tier.softwareScope.map((item) => getRichLocalizedText(item, lang)),
      metricPriority: tier.metricPriority.map((item) => getRichLocalizedText(item, lang)),
      avoidOverbuild: tier.avoidOverbuild.map((item) => getRichLocalizedText(item, lang)),
    })),
    calibrationFixtures: validationPack?.calibrationFixtures.map((item) => getRichLocalizedText(item, lang)),
    acceptanceChecklist: validationPack?.acceptanceChecklist.map((item) => getRichLocalizedText(item, lang)),
    edgeCases: validationPack?.edgeCases.map((item) => getRichLocalizedText(item, lang)),
    defenseCheckpoints: validationPack?.defenseCheckpoints.map((item) => getRichLocalizedText(item, lang)),
    failureSymptoms: troubleshootingPack?.failureSymptoms.map((item) => getRichLocalizedText(item, lang)),
    firstChecks: troubleshootingPack?.firstChecks.map((item) => getRichLocalizedText(item, lang)),
    likelyRootCauses: troubleshootingPack?.likelyRootCauses.map((item) => getRichLocalizedText(item, lang)),
    fastRecoveryActions: troubleshootingPack?.fastRecoveryActions.map((item) => getRichLocalizedText(item, lang)),
    judgeQuestions: defensePack?.judgeQuestions.map((item) => getRichLocalizedText(item, lang)),
    recommendedAnswers: defensePack?.recommendedAnswers.map((item) => getRichLocalizedText(item, lang)),
    demoScoringMoves: defensePack?.demoScoringMoves.map((item) => getRichLocalizedText(item, lang)),
    phrasesToAvoid: defensePack?.phrasesToAvoid.map((item) => getRichLocalizedText(item, lang)),
    recommendedReferences: benchmarkPack?.recommendedReferences.map((item) => getRichLocalizedText(item, lang)),
    minimumAcceptanceNumbers: benchmarkPack?.minimumAcceptanceNumbers.map((item) => getRichLocalizedText(item, lang)),
    competitionDayQuickChecks: benchmarkPack?.competitionDayQuickChecks.map((item) => getRichLocalizedText(item, lang)),
    overnightBurnInChecks: benchmarkPack?.overnightBurnInChecks.map((item) => getRichLocalizedText(item, lang)),
    easyToConfuseWith: disambiguationPack?.easyToConfuseWith.map((item) => getRichLocalizedText(item, lang)),
    separatingSignals: disambiguationPack?.separatingSignals.map((item) => getRichLocalizedText(item, lang)),
    preferredStoryline: disambiguationPack?.preferredStoryline.map((item) => getRichLocalizedText(item, lang)),
    overclaimBoundaries: disambiguationPack?.overclaimBoundaries.map((item) => getRichLocalizedText(item, lang)),
    bestBorrowedFrom: transferPack?.bestBorrowedFrom.map((item) => getRichLocalizedText(item, lang)),
    reusableModules: transferPack?.reusableModules.map((item) => getRichLocalizedText(item, lang)),
    nonReusableHabits: transferPack?.nonReusableHabits.map((item) => getRichLocalizedText(item, lang)),
    fastestCarryOverChecks: transferPack?.fastestCarryOverChecks.map((item) => getRichLocalizedText(item, lang)),
  });
  });
}

function buildReasoningRich(
  selectedProfile: InstrumentationProfile,
  secondaryProfile: { profile: InstrumentationProfile; score: number; matchedTerms: string[] } | null,
  matchedTerms: string[],
  normalizedText: string,
  rawProblemText: string,
  routeVariants: RankedRouteVariant[],
  relatedProblems: RelatedProblemRecommendation[],
  lang: "en" | "zh",
) {
  const playbook = getFamilyPlaybook(selectedProfile.id, lang);
  const triggerPack = getFamilyTriggerPack(selectedProfile.id, lang);
  const triggerAnalysis = buildTriggerCueAnalysis(selectedProfile.id, normalizedText);
  const statementPatternBoost = buildStatementPatternBoost(selectedProfile.id, normalizedText);
  const lexiconBoost = buildFamilyLexiconBoost(selectedProfile.id, normalizedText);
  const pairDisambiguationBoost = buildPairDisambiguationBoost(selectedProfile.id, normalizedText);
  const contrastiveCueBoost = buildContrastiveCueBoost(selectedProfile.id, rawProblemText);
  const negativeExampleAnalysis = buildNegativeExampleAnalysis(selectedProfile.id, normalizedText);
  const topRoute = getTopRouteVariant(routeVariants);
  const referenceProblem = relatedProblems[0];
  const matchedTriggerTerms = dedupeStrings(
    [
      ...(triggerPack?.strongPositiveCues ?? []),
      ...(triggerPack?.weakPositiveCues ?? []),
    ].filter((cue) =>
      matchedTerms.some((term) => normalizeText(cue).includes(normalizeText(term))),
    ),
  ).slice(0, 2);

  if (lang === "zh") {
    return [
      `主判定题型：${getText(selectedProfile.family, lang)}。`,
      matchedTerms.length
        ? `命中的关键词主要有：${matchedTerms.slice(0, 8).join("、")}。`
        : "题面没有特别强的显式关键词，因此按通用仪器仪表测量链路兜底。",
      secondaryProfile
        ? `同时存在次级关联题型：${getText(secondaryProfile.profile.family, lang)}，推荐时会补一层跨题型模块。`
        : "当前题面更集中于单一题型，建议优先把主链路做深做稳。",
      topRoute
        ? (topRoute.score ?? 0) > 0
          ? `在该题型里，当前最贴近的落地路线是：${topRoute.name}。`
          : `当前先采用该题型的默认落地路线：${topRoute.name}。`
        : "当前没有命中特别明确的路线卡，因此先沿主题型的标准链路推进。",
      referenceProblem ? `最近的历年映射题是：${referenceProblem.code} ${referenceProblem.title}。` : undefined,
      playbook?.headline
        ? `该题型的蒸馏主线是：${playbook.headline}`
        : "推荐结果优先来自本地蒸馏题库，而不是自由生成。",
    ].filter(Boolean) as string[];
  }

  return [
    `Primary family match: ${getText(selectedProfile.family, lang)}.`,
    matchedTerms.length
      ? `Matched cues: ${matchedTerms.slice(0, 8).join(", ")}.`
      : "No strong explicit cue was found, so the plan falls back to the common instrumentation chain.",
    secondaryProfile
      ? `Secondary family overlap: ${getText(secondaryProfile.profile.family, lang)}, so the recommendation adds one cross-family layer.`
      : "The statement appears concentrated in one family, so the recommendation keeps the main chain focused.",
    topRoute
      ? (topRoute.score ?? 0) > 0
        ? `Within this family, the closest implementation route is: ${topRoute.name}.`
        : `The recommendation starts from the default route of this family: ${topRoute.name}.`
      : "No route card matched strongly, so the recommendation starts from the family backbone.",
    matchedTriggerTerms.length
      ? `This family was also reinforced by distilled trigger cues: ${matchedTriggerTerms.join(" | ")}.`
      : undefined,
    statementPatternBoost.matchedTerms.length
      ? `Statement-pattern matches also reinforced this family: ${statementPatternBoost.matchedTerms.join(", ")}.`
      : undefined,
    lexiconBoost.matchedTerms.length
      ? `Family lexicon matches also reinforced this family: ${lexiconBoost.matchedTerms.join(", ")}.`
      : undefined,
    pairDisambiguationBoost.analysis.length
      ? `Pairwise family-boundary checks also shaped this match against: ${pairDisambiguationBoost.analysis
          .map((item) => getFamilyLabelById(item.competingProfileId, lang))
          .join(", ")}.`
      : undefined,
    contrastiveCueBoost.analysis.length
      ? `Contrastive wording in the statement also favored this family over: ${contrastiveCueBoost.analysis
          .map((item) => getFamilyLabelById(item.competingProfileId, lang))
          .join(", ")}.`
      : undefined,
    negativeExampleAnalysis.examples.length
      ? `The database also checked near-miss routes and kept this family after comparing against: ${negativeExampleAnalysis.examples
          .map((example) => getFamilyLabelById(example.redirectProfileId, lang))
          .join(", ")}.`
      : undefined,
    triggerAnalysis.disambiguatorHits.length
      ? `Competing-family cues were detected and suppressed through disambiguation: ${triggerAnalysis.disambiguatorHits.join(", ")}.`
      : undefined,
    triggerAnalysis.rejectionHits.length
      ? `The database also surfaced route-rejection cues that should cap overclaiming: ${triggerAnalysis.rejectionHits.join(", ")}.`
      : undefined,
    referenceProblem
      ? `Closest distilled historical match: ${referenceProblem.code} ${referenceProblem.title}.`
      : undefined,
    playbook?.headline
      ? `Distilled family backbone: ${playbook.headline}`
      : "The output is driven by the local distilled instrumentation database.",
  ].filter(Boolean) as string[];
}

export function recommendPlanFromDistilledDataRich(
  problemText: string,
  lang: "en" | "zh",
): RecommendedPlan {
  const normalizedText = normalizeText(problemText);

  const ranked = profiles
    .map((profile) => ({
      profile,
      ...scoreProfileRich(profile, normalizedText, problemText),
    }))
    .sort((a, b) => b.score - a.score);

  const chosen = choosePrimaryProfileRich(ranked);
  const forcedDistortion = shouldForceDistortionOverModulation(problemText);
  const selected =
    forcedDistortion
      ? ranked.find((item) => item.profile.id === "distortion")?.profile ?? chosen
      : chosen;
  const best = ranked.find((item) => item.profile.id === selected.id) ?? ranked[0];
  const matchedTerms = best && best.score > 0 ? best.matchedTerms : [];
  const rawSupportProfiles = selected === fallbackProfile ? [] : getSupportProfiles(ranked, selected.id, normalizedText);
  const supportProfiles = forcedDistortion
    ? rawSupportProfiles.filter((item) => item.profile.id !== "modulation")
    : rawSupportProfiles;
  const secondary = supportProfiles[0] ?? null;
  const tierOptions = buildTierOptions(selected.id, lang);
  const relatedProblems = getSupplementedRelatedProblems(selected, supportProfiles, matchedTerms, lang);
  const familyPlaybook = getFamilyPlaybook(selected.id, lang);
  const familyKnowledgePack = getFamilyKnowledgePack(selected.id, lang);
  const familyObjectiveMap = getFamilyObjectiveMap(selected.id, lang);
  const primaryRecommendedModules = getRecommendedModules(selected.id, normalizedText, lang);
  const blendedSupportProfiles = shouldBlendSupportModules(supportProfiles);
  const secondaryRecommendedModules = blendedSupportProfiles.flatMap((profile) =>
    getRecommendedModules(profile.profile.id, normalizedText, lang),
  );
  const recommendedModules = mergeRecommendedModules(
    primaryRecommendedModules,
    secondaryRecommendedModules,
  );
  const familyBuildPack = getFamilyBuildPack(selected.id, lang);
  const familyFailureAtlas = getFamilyFailureAtlas(selected.id, lang);
  const familyAnswerTemplate = getFamilyAnswerTemplate(selected.id, lang);
  const familyMetricLadder = getFamilyMetricLadder(selected.id, lang);
  const familyTrainingSequence = getFamilyTrainingSequence(selected.id, lang);
  const familyReferenceGraph = getFamilyReferenceGraph(selected.id, lang);
  const familyDecisionTree = getFamilyDecisionTree(selected.id, lang);
  const familyTriggerPack = getFamilyTriggerPack(selected.id, lang);
  const familyCorrectionPack = getFamilyCorrectionPack(selected.id, lang);
  const familyHandoffPack = getFamilyHandoffPack(selected.id, lang);
  const familyStatementPatternPack = getFamilyStatementPatternPack(selected.id, lang);
  const familyLexiconPack = getLocalizedFamilyLexiconPack(selected.id);
  const familyNegativeExamplePack = getLocalizedFamilyNegativeExamplePack(selected.id, lang);
  const familyPairDisambiguationPack = getLocalizedFamilyPairDisambiguationPack(selected.id, lang);
  const routeVariants = getRankedRouteVariants(selected.id, normalizedText, lang);
  const topRoute = getTopRouteVariant(routeVariants);
  const routeFocusModule = buildRouteFocusModule(topRoute, lang);
  const crossFamilyModules = supportProfiles
    .map((profile) => buildCrossFamilyModule(selected.id, profile, lang))
    .filter((module): module is { title: string; items: string[] } => Boolean(module));
  const reasoning = buildReasoningRich(
    selected,
    secondary,
    matchedTerms,
    normalizedText,
    problemText,
    routeVariants,
    relatedProblems,
    lang,
  );
  const approach = buildDataDrivenApproach(
    getText(selected.approach, lang),
    topRoute,
    relatedProblems,
    lang,
  );
  const tuningSteps = buildDataDrivenTuningSteps(
    selected.tuningSteps.map((item) => getText(item, lang)),
    topRoute,
    relatedProblems,
    lang,
  );
  const risks = buildDataDrivenRisks(
    selected.risks.map((item) => getText(item, lang)),
    topRoute,
    relatedProblems,
  );
  const verification = buildDataDrivenVerification(
    selected.verification.map((item) => getText(item, lang)),
    topRoute,
    relatedProblems,
    lang,
  );
  const selectedNegativeExampleAnalysis = buildNegativeExampleAnalysis(selected.id, normalizedText);
  const selectedPairDisambiguationAnalysis = buildPairDisambiguationAnalysis(selected.id, normalizedText);
  const negativeExampleAnalysisByRedirect = new Map(
    selectedNegativeExampleAnalysis.examples.map((example) => [example.redirectProfileId, example]),
  );
  const pairDisambiguationAnalysisByCompetingProfile = new Map(
    selectedPairDisambiguationAnalysis.map((item) => [item.competingProfileId, item]),
  );

  const modules = selected.modules.map((section) => ({
    title: getText(section.title, lang),
    items: section.items.map((item) => getText(item, lang)),
  }));

  if (familyPlaybook) {
    modules.push({
      title: lang === "zh" ? "蒸馏主线" : "Distilled Backbone",
      items: familyPlaybook.winningBackbone,
    });
  }

  if (routeFocusModule) {
    modules.push(routeFocusModule);
  }

  for (const supportProfile of supportProfiles) {
    modules.push({
      title:
        lang === "zh"
          ? `次级题型补充：${getText(supportProfile.profile.family, lang)}`
          : `Secondary family add-on: ${getText(supportProfile.profile.family, lang)}`,
      items: supportProfile.profile.modules[0]
        ? supportProfile.profile.modules[0].items.map((item) => getText(item, lang))
        : [],
    });
  }

  for (const crossFamilyModule of crossFamilyModules) {
    modules.push(crossFamilyModule);
  }

  const references = supportProfiles.length
    ? Array.from(
        new Set([
          ...selected.references,
          ...supportProfiles.flatMap((profile) => profile.profile.references),
        ]),
      ).slice(0, 8)
    : selected.references;

  const detectedFamily = supportProfiles.length
    ? [getText(selected.family, lang), ...supportProfiles.map((profile) => getText(profile.profile.family, lang))].join(" + ")
    : getText(selected.family, lang);

  const summaryParts =
    lang === "zh"
      ? [
          getText(selected.summary, lang),
          matchedTerms.length > 0 ? `题面命中的关键词：${matchedTerms.slice(0, 8).join("、")}。` : "",
          topRoute ? `优先落地路线：${topRoute.name}。` : "",
          relatedProblems.length > 0
            ? `最接近的历年题有：${relatedProblems.map((item) => `${item.code} ${item.title}`).join("；")}。`
            : `参考蒸馏题：${selected.references.join("；")}。`,
          familyPlaybook?.headline ? `题型蒸馏主线：${familyPlaybook.headline}` : "",
        ]
      : [
          getText(selected.summary, lang),
          matchedTerms.length > 0 ? `Matched cues: ${matchedTerms.slice(0, 8).join(", ")}.` : "",
          topRoute ? `Preferred route: ${topRoute.name}.` : "",
          relatedProblems.length > 0
            ? `Closest historical matches: ${relatedProblems.map((item) => `${item.code} ${item.title}`).join("; ")}.`
            : `Reference problems: ${selected.references.join("; ")}.`,
          familyPlaybook?.headline ? `Distilled backbone: ${familyPlaybook.headline}` : "",
        ];

  const plan: RecommendedPlan = {
    title: getText(selected.title, lang),
    summary: summaryParts.filter(Boolean).join(" "),
    approach,
    modules,
    tuningSteps,
    risks,
    verification,
    references,
    detectedFamily,
    matchedTerms,
    reasoning,
    tierOptions,
    relatedProblems,
    familyPlaybook,
    familyKnowledgePack,
    familyObjectiveMap,
    recommendedModules,
    familyBuildPack,
    familyFailureAtlas,
    familyAnswerTemplate,
    familyMetricLadder,
    familyTrainingSequence,
    familyReferenceGraph,
    familyDecisionTree,
    familyTriggerPack,
    familyCorrectionPack,
    familyHandoffPack,
    familyStatementPatternPack,
    familyLexiconPack,
    familyNegativeExamplePack: familyNegativeExamplePack
      ? {
          examples: familyNegativeExamplePack.examples.map((example) => {
            const analysis = example.redirectProfileId
              ? negativeExampleAnalysisByRedirect.get(example.redirectProfileId)
              : undefined;
            return {
              ...example,
              matchedNearMissTerms: analysis?.matchedNearMissTerms ?? [],
              matchedRedirectTerms: analysis?.matchedRedirectTerms ?? [],
              signalStrength: analysis?.signalStrength ?? 0,
            };
          }),
        }
      : undefined,
    familyPairDisambiguationPack: familyPairDisambiguationPack?.map((item) => {
      const analysis = pairDisambiguationAnalysisByCompetingProfile.get(item.competingProfileId);
      return {
        title: item.title,
        competingFamily: item.competingFamily,
        decidingQuestion: item.decidingQuestion,
        primaryWinsWhen: item.primaryWinsWhen,
        competingWinsWhen: item.competingWinsWhen,
        reusableAssets: item.reusableAssets,
        wrongTurnCost: item.wrongTurnCost,
        matchedPrimaryTerms: analysis?.matchedPrimaryTerms ?? [],
        matchedCompetingTerms: analysis?.matchedCompetingTerms ?? [],
        signalStrength: analysis?.signalStrength ?? 0,
      };
    }),
    routeVariants,
  };

  return lang === "zh" ? forceZhDisplayValue(plan) : plan;
}

export function recommendPlanFromDistilledData(
  problemText: string,
  lang: "en" | "zh",
): RecommendedPlan {
  return recommendPlanFromDistilledDataRich(problemText, lang);
}
