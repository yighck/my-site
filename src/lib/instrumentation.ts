export interface InstrumentationTrack {
  id: string;
  title: {
    en: string;
    zh: string;
  };
  accent: string;
  badge: {
    en: string;
    zh: string;
  };
  summary: {
    en: string;
    zh: string;
  };
  drills: {
    en: string[];
    zh: string[];
  };
}

export const instrumentationTracks: InstrumentationTrack[] = [
  {
    id: "parameter",
    title: {
      en: "Electrical Parameter Testing",
      zh: "电路参数测试",
    },
    accent: "from-amber-400 via-orange-500 to-red-500",
    badge: {
      en: "2019 D / 2023 C",
      zh: "2019 D / 2023 C",
    },
    summary: {
      en: "Use known excitation plus dual-channel capture to recover resistance, capacitance, inductance, amplitude ratio, and phase shift.",
      zh: "通过已知激励和双通道采样，反推出电阻、电容、电感、幅值比和相位差。",
    },
    drills: {
      en: ["相位提取", "量程切换", "扫频拟合"],
      zh: ["相位提取", "量程切换", "扫频拟合"],
    },
  },
  {
    id: "spectrum",
    title: {
      en: "Distortion And Spectrum",
      zh: "失真与频谱测量",
    },
    accent: "from-cyan-400 via-sky-500 to-blue-600",
    badge: {
      en: "2021 A",
      zh: "2021 A",
    },
    summary: {
      en: "Lock the period first, then use a windowed FFT to find harmonics, leakage behavior, and THD under non-ideal conditions.",
      zh: "先锁定周期，再用加窗 FFT 处理谐波、频谱泄漏和 THD，在非理想采样下仍保持稳定。",
    },
    drills: {
      en: ["window choice", "harmonic indexing", "THD validation"],
      zh: ["窗函数选择", "谐波定位", "THD 校验"],
    },
  },
  {
    id: "cable",
    title: {
      en: "Cable And Transmission-Line Detection",
      zh: "线缆与传输线检测",
    },
    accent: "from-emerald-400 via-teal-500 to-cyan-600",
    badge: {
      en: "2023 B / 2025 D",
      zh: "2023 B / 2025 D",
    },
    summary: {
      en: "Choose one physical method and finish it well: pulse echo or multi-frequency phase, then classify open, short, matched, and bad-contact cases.",
      zh: "在脉冲回波和多频点相位法里只选一种，做深做稳，再完成开路、短路、匹配和接触不良判别。",
    },
    drills: {
      en: ["edge capture", "velocity-factor calibration", "fault state machine"],
      zh: ["边沿捕获", "速度因子标定", "故障状态机"],
    },
  },
  {
    id: "model",
    title: {
      en: "Model Identification Extension",
      zh: "模型辨识扩展",
    },
    accent: "from-violet-400 via-fuchsia-500 to-pink-500",
    badge: {
      en: "2025 G",
      zh: "2025 G",
    },
    summary: {
      en: "Treat this as an upgrade path after the main sprint: reuse sweep capture and fitting infrastructure to recover a compact circuit model.",
      zh: "把它放在主训练线之后，复用扫频采集和拟合链路，恢复一个可验证的紧凑电路模型。",
    },
    drills: {
      en: ["response matrix", "least-squares fitting", "replay validation"],
      zh: ["响应矩阵", "最小二乘拟合", "回放验证"],
    },
  },
];

export const weeklyRoadmap = [
  {
    week: "01",
    title: {
      en: "Close The Excitation-Capture-Display Loop",
      zh: "打通激励-采样-显示闭环",
    },
    focus: {
      en: "Bring up 1 kHz to 100 kHz excitation, ADC DMA capture, UART waveform output, and on-screen frequency/RMS.",
      zh: "完成 1 kHz 到 100 kHz 激励、ADC DMA 连续采样、串口回传波形和屏幕频率/RMS 显示。",
    },
  },
  {
    week: "02",
    title: {
      en: "Make Core Metrics Trustworthy",
      zh: "把基础指标做准",
    },
    focus: {
      en: "Add multi-range switching, zero and gain calibration, phase measurement, and fault messaging for weak, open, short, and saturated input.",
      zh: "加入多量程切换、零点与增益标定、相位测量，以及弱信号、开路、短路、饱和输入提示。",
    },
  },
  {
    week: "03",
    title: {
      en: "Train The Parameter-Tester Family",
      zh: "攻克参数测试题型",
    },
    focus: {
      en: "Build impedance, RLC, amplitude-ratio, and phase-difference solving with per-range calibration tables.",
      zh: "建立阻抗、RLC、幅值比和相位差求解链路，并配套量程级标定表。",
    },
  },
  {
    week: "04",
    title: {
      en: "Train The Spectrum Family",
      zh: "攻克频谱失真题型",
    },
    focus: {
      en: "Finish a reliable distortion workflow with period locking, windowing, harmonic peak search, and THD output.",
      zh: "完成周期锁定、加窗、谐波峰值搜索和 THD 输出的稳定流程。",
    },
  },
  {
    week: "05",
    title: {
      en: "Choose One Advanced Direction",
      zh: "二选一突破高级题型",
    },
    focus: {
      en: "Pick cable detection or fine RLC measurement. Do not split the team into two half-finished tracks.",
      zh: "在线缆检测和高精度 RLC 之间只选一条，不要把队伍拆成两条都做不满的线。",
    },
  },
  {
    week: "06",
    title: {
      en: "Run A 72-Hour Mock Contest",
      zh: "做一次 72 小时仿真赛",
    },
    focus: {
      en: "Freeze architecture, allow bug fixes only, and prepare one principle sheet plus one error-closure sheet for demo and defense.",
      zh: "冻结架构，只允许修 bug，并准备一页测量原理和一页误差闭环说明用于演示与答辩。",
    },
  },
];

export const platformModules = [
  {
    name: "signal_gen_start()",
    en: "Starts fixed-frequency or sweep excitation and locks the measurement entry point.",
    zh: "负责定频或扫频激励，锁住整条测量链的入口。",
  },
  {
    name: "sample_capture()",
    en: "Owns fixed-length capture, DMA buffers, trigger rules, and sampling metadata.",
    zh: "负责定长采样、DMA 缓冲、触发规则和采样元信息。",
  },
  {
    name: "feature_extract()",
    en: "Computes frequency, peak-to-peak, RMS, phase, DC offset, and harmonic features.",
    zh: "负责频率、峰峰值、RMS、相位、直流偏置和谐波特征提取。",
  },
  {
    name: "measure_solve()",
    en: "Turns features into RLC values, cable length, terminal state, or fitting error.",
    zh: "把特征量反演成 RLC 参数、线缆长度、终端状态或拟合误差。",
  },
  {
    name: "calibration_apply()",
    en: "Applies zero, gain, phase, and response compensation before solving.",
    zh: "在求解前统一施加零点、增益、相位和频响补偿。",
  },
  {
    name: "ui_commit_result()",
    en: "Publishes final values, diagnostics, and operator-facing prompts.",
    zh: "负责输出最终数值、异常状态和面向操作者的提示。",
  },
];

export const testChecklist = {
  en: [
    "Verify sine, square, and sweep inputs at low, mid, and high frequencies.",
    "Record at least 10 repeated runs for every core metric.",
    "Run open, short, weak-signal, over-range, and noisy-input diagnostics.",
    "Cross-check against both a standard source and a self-built sample network.",
  ],
  zh: [
    "对低频、中频、高频下的正弦、方波和扫频输入做全套验证。",
    "每个核心指标至少做 10 次重复测量记录。",
    "覆盖开路、短路、弱信号、过量程和噪声叠加诊断。",
    "同时做标准源对测和自建样件对测两套交叉验证。",
  ],
};
