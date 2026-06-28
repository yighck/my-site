"use client";

import { useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "@/i18n/LanguageContext";

gsap.registerPlugin(useGSAP);

interface PlanSection {
  title: string;
  items: string[];
}

interface InstrumentationPlan {
  title: string;
  summary: string;
  approach: string;
  modules: PlanSection[];
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

interface PlanMeta {
  mode: "local-kb" | "local-kb-plus-ocr";
  ocrAttempted: boolean;
  ocrUsed: boolean;
  ocrBudget: {
    totalBudget: number;
    totalUsed: number;
    remaining: number;
    requestReserve: number;
  };
  ocrUsage?: {
    inputTokens: number;
    outputTokens: number;
    totalTokens: number;
  };
  budgetNotice?: string;
}

const EXAMPLE_TOPICS = {
  zh: [
    "设计一个信号失真度测量装置，要求测量基波和谐波并给出 THD。",
    "设计一个同轴电缆长度与终端负载检测装置，要求识别开路、短路和匹配负载。",
    "设计一个电感电容测量装置，要求自动切换量程并输出测量结果。",
  ],
  en: [
    "Design a signal distortion measurement device that reports the fundamental, harmonics, and THD.",
    "Design a coaxial cable length and terminal-load detector that identifies open, short, and matched cases.",
    "Design an inductance and capacitance measurement device with automatic range switching.",
  ],
};

const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;
const COMPRESS_MAX_EDGE = 1600;
const COMPRESS_TARGET_BYTES = 900 * 1024;

async function compressImageFile(file: File) {
  const dataUrl = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
        return;
      }
      reject(new Error("Failed to read image."));
    };
    reader.onerror = () => reject(new Error("Failed to read image."));
    reader.readAsDataURL(file);
  });

  const image = await new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Failed to decode image."));
    img.src = dataUrl;
  });

  const scale = Math.min(1, COMPRESS_MAX_EDGE / Math.max(image.width, image.height));
  const width = Math.max(1, Math.round(image.width * scale));
  const height = Math.max(1, Math.round(image.height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("Canvas is unavailable.");
  }

  context.drawImage(image, 0, 0, width, height);

  const attempts = [0.82, 0.72, 0.6, 0.5];

  for (const quality of attempts) {
    const compressed = canvas.toDataURL("image/jpeg", quality);
    const estimatedBytes = Math.ceil((compressed.length * 3) / 4);
    if (estimatedBytes <= COMPRESS_TARGET_BYTES || quality === attempts[attempts.length - 1]) {
      return compressed;
    }
  }

  return canvas.toDataURL("image/jpeg", 0.5);
}

export default function InstrumentationContent() {
  const { lang, t } = useTranslation();
  const scope = useRef<HTMLElement>(null);
  const [topic, setTopic] = useState("");
  const [imageDataUrl, setImageDataUrl] = useState("");
  const [plan, setPlan] = useState<InstrumentationPlan | null>(null);
  const [planMeta, setPlanMeta] = useState<PlanMeta | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageStatus, setImageStatus] = useState("");

  const examples = useMemo(() => (lang === "zh" ? EXAMPLE_TOPICS.zh : EXAMPLE_TOPICS.en), [lang]);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          isDesktop: "(min-width: 960px)",
        },
        (context) => {
          const conditions = context.conditions ?? {};
          const reduceMotion = Boolean(conditions.reduceMotion);
          const isDesktop = Boolean(conditions.isDesktop);
          const duration = reduceMotion ? 0 : 0.82;

          const intro = gsap.timeline({
            defaults: { duration, ease: "power3.out" },
          });

          intro
            .from(".solver-badge", { y: 18, autoAlpha: 0 })
            .from(".solver-title-line", { yPercent: 30, autoAlpha: 0, stagger: 0.08 }, "<0.08")
            .from(".solver-copy", { y: 22, autoAlpha: 0 }, "-=0.42")
            .from(".solver-card", { y: 26, autoAlpha: 0, stagger: 0.08 }, "-=0.22");

          if (!reduceMotion && isDesktop) {
            gsap.to(".solver-orb", {
              y: (index) => (index % 2 === 0 ? -18 : 14),
              x: (index) => (index === 0 ? -12 : 10),
              duration: (index) => 4.8 + index,
              ease: "sine.inOut",
              force3D: true,
              repeat: -1,
              yoyo: true,
            });
          }
        },
      );

      return () => media.revert();
    },
    { scope },
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = topic.trim();
    if (!trimmed && !imageDataUrl) {
      setError(t.instrumentation.emptyTopic);
      return;
    }

    setLoading(true);
    setError("");
    setPlan(null);
    setPlanMeta(null);

    try {
      const response = await fetch("/api/instrumentation-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic: trimmed,
          lang,
          imageDataUrl,
        }),
      });

      const data = (await response.json()) as
        | { plan?: InstrumentationPlan; meta?: PlanMeta; error?: string }
        | undefined;

      if (!response.ok || !data?.plan) {
        throw new Error(data?.error || t.instrumentation.requestFailed);
      }

      setPlan(data.plan);
      setPlanMeta(data.meta ?? null);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : t.instrumentation.requestFailed,
      );
    } finally {
      setLoading(false);
    }
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      setError(t.instrumentation.imageTypeError);
      return;
    }

    if (file.size > MAX_UPLOAD_BYTES) {
      setError(t.instrumentation.imageSizeError);
      return;
    }

    setImageStatus(t.instrumentation.imageProcessing);
    void compressImageFile(file)
      .then((result) => {
        setImageDataUrl(result);
        setError("");
        setImageStatus(t.instrumentation.imageOptimized);
      })
      .catch(() => {
        setError(t.instrumentation.imageReadError);
        setImageStatus("");
      });
    event.target.value = "";
  }

  return (
    <main ref={scope} className="relative overflow-hidden">
      <div className="solver-orb gpu-float pointer-events-none absolute left-8 top-20 h-44 w-44 rounded-full bg-amber-400/18 blur-3xl dark:bg-amber-400/12" />
      <div className="solver-orb gpu-float pointer-events-none absolute right-0 top-44 h-64 w-64 rounded-full bg-cyan-500/16 blur-3xl dark:bg-cyan-500/16" />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_22rem] lg:items-start">
          <div className="solver-card rounded-[34px] border border-white/60 bg-white/78 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/68">
            <span className="solver-badge inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200">
              {t.instrumentation.badge}
            </span>

            <div className="mt-6 space-y-2 text-[clamp(2.5rem,5vw,4.8rem)] font-semibold tracking-tight text-slate-950 dark:text-white">
              <div className="solver-title-line">{t.instrumentation.heroLine1}</div>
              <div className="solver-title-line bg-gradient-to-r from-amber-500 via-orange-500 to-cyan-500 bg-clip-text text-transparent">
                {t.instrumentation.heroLine2}
              </div>
            </div>

            <p className="solver-copy mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
              {t.instrumentation.heroCopy}
            </p>
          </div>

          <aside className="solver-card rounded-[28px] border border-white/60 bg-slate-950 p-6 text-white shadow-[0_24px_80px_rgba(8,15,35,0.22)] dark:border-white/10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-200/80">
              {t.instrumentation.sidebarLabel}
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              {t.instrumentation.sidebarTitle}
            </h2>
            <div className="mt-6 space-y-4">
              {[t.instrumentation.sidebarStep1, t.instrumentation.sidebarStep2, t.instrumentation.sidebarStep3].map(
                (step, index) => (
                  <div key={step} className="flex gap-4 rounded-2xl bg-white/6 p-4">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-300 text-sm font-semibold text-slate-950">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-7 text-slate-200">{step}</p>
                  </div>
                ),
              )}
            </div>
          </aside>
        </div>

        <section className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="solver-card rounded-[30px] border border-white/60 bg-white/82 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/66">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              {t.instrumentation.inputLabel}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {t.instrumentation.inputTitle}
            </h2>

            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              <textarea
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
                placeholder={t.instrumentation.placeholder}
                className="min-h-56 w-full rounded-[28px] border border-slate-200/80 bg-slate-50/90 px-5 py-4 text-sm leading-7 text-slate-700 outline-none transition-colors focus:border-amber-300 focus:bg-white dark:border-white/10 dark:bg-white/6 dark:text-slate-100 dark:focus:border-amber-400/60"
              />

              <div className="rounded-[28px] border border-dashed border-slate-300/80 bg-slate-50/70 p-5 dark:border-white/12 dark:bg-white/6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {t.instrumentation.imageLabel}
                    </p>
                    <p className="mt-1 text-sm leading-7 text-slate-500 dark:text-slate-400">
                      {t.instrumentation.imageHint}
                    </p>
                  </div>
                  <label className="inline-flex cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-amber-300 dark:text-slate-950 dark:hover:bg-amber-200">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                    {imageDataUrl ? t.instrumentation.imageReplace : t.instrumentation.imageUpload}
                  </label>
                </div>

                {imageDataUrl ? (
                  <div className="mt-5 overflow-hidden rounded-[24px] border border-slate-200/80 bg-white p-3 dark:border-white/10 dark:bg-slate-950/70">
                    {/* Preview the uploaded problem screenshot before submission. */}
                    <img
                      src={imageDataUrl}
                      alt={t.instrumentation.imageAlt}
                      className="max-h-80 w-full rounded-[18px] object-contain"
                    />
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        {imageStatus || t.instrumentation.imageReady}
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setImageDataUrl("");
                          setImageStatus("");
                        }}
                        className="rounded-full border border-slate-200/80 px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:border-rose-300 hover:text-rose-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-rose-400/40 dark:hover:text-rose-300"
                      >
                        {t.instrumentation.imageRemove}
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="flex flex-wrap gap-3">
                {examples.map((example) => (
                  <button
                    key={example}
                    type="button"
                    onClick={() => setTopic(example)}
                    className="rounded-full border border-slate-200/80 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-600 transition-colors hover:border-amber-300 hover:bg-amber-50 dark:border-white/10 dark:bg-white/6 dark:text-slate-300 dark:hover:border-amber-400/40 dark:hover:bg-amber-500/10"
                  >
                    {example}
                  </button>
                ))}
              </div>

              {error ? (
                <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm leading-7 text-rose-700 dark:border-rose-500/20 dark:bg-rose-500/10 dark:text-rose-200">
                  {error}
                </div>
              ) : null}

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-amber-300 dark:text-slate-950 dark:hover:bg-amber-200"
                >
                  {loading ? t.instrumentation.generating : t.instrumentation.submit}
                </button>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {t.instrumentation.helperText}
                </p>
              </div>

              {planMeta?.budgetNotice ? (
                <div className="rounded-2xl border border-cyan-200/70 bg-cyan-50/80 px-4 py-3 text-sm leading-7 text-cyan-900 dark:border-cyan-400/20 dark:bg-cyan-500/10 dark:text-cyan-100">
                  {planMeta.budgetNotice}
                </div>
              ) : null}
            </form>
          </div>

          <div className="solver-card rounded-[30px] border border-white/60 bg-slate-950 p-6 text-white shadow-[0_24px_60px_rgba(8,15,35,0.22)] dark:border-white/10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
              {t.instrumentation.outputLabel}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              {t.instrumentation.outputTitle}
            </h2>

            {!plan && !loading ? (
              <div className="mt-6 rounded-[28px] border border-white/10 bg-white/6 p-5 text-sm leading-7 text-slate-200">
                <p>{t.instrumentation.outputEmpty}</p>
              </div>
            ) : null}

            {loading ? (
              <div className="mt-6 space-y-3">
                <div className="h-16 animate-pulse rounded-3xl bg-white/8" />
                <div className="h-24 animate-pulse rounded-3xl bg-white/8" />
                <div className="h-24 animate-pulse rounded-3xl bg-white/8" />
              </div>
            ) : null}

            {plan ? (
              <div className="mt-6 space-y-6">
                <section className="rounded-[28px] bg-white/6 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/80">
                    {t.instrumentation.planSummary}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">{plan.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-amber-500/18 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">
                      {plan.detectedFamily}
                    </span>
                    {plan.references.map((reference) => (
                      <span
                        key={reference}
                        className="rounded-full bg-white/8 px-3 py-1 text-xs font-medium text-slate-200"
                      >
                        {reference}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-200">{plan.summary}</p>
                  <p className="mt-4 rounded-2xl bg-white/6 px-4 py-3 text-sm leading-7 text-slate-100">
                    {plan.approach}
                  </p>
                  {planMeta ? (
                    <div className="mt-4 rounded-2xl border border-cyan-400/18 bg-cyan-500/8 px-4 py-3 text-sm leading-7 text-cyan-50">
                      <p>
                        {planMeta.mode === "local-kb-plus-ocr"
                          ? "Recommendation mode: OCR for text extraction + local distilled planner."
                          : "Recommendation mode: local distilled planner only."}
                      </p>
                      <p>
                        OCR budget: {planMeta.ocrBudget.totalUsed.toLocaleString()} /{" "}
                        {planMeta.ocrBudget.totalBudget.toLocaleString()} tokens used,{" "}
                        {planMeta.ocrBudget.remaining.toLocaleString()} remaining.
                      </p>
                      {planMeta.ocrUsage?.totalTokens ? (
                        <p>
                          This request OCR usage: {planMeta.ocrUsage.totalTokens.toLocaleString()} tokens.
                        </p>
                      ) : null}
                    </div>
                  ) : null}
                </section>

                {plan.reasoning?.length || plan.matchedTerms?.length ? (
                  <section className="grid gap-4 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
                    <div className="rounded-[26px] bg-white/6 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                        Match Logic
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {plan.matchedTerms?.map((term) => (
                          <span
                            key={term}
                            className="rounded-full bg-cyan-500/14 px-3 py-1 text-xs font-medium text-cyan-100"
                          >
                            {term}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[26px] bg-white/6 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                        Why This Plan
                      </p>
                      <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                        {plan.reasoning?.map((item) => (
                          <li key={item}>- {item}</li>
                        ))}
                      </ul>
                    </div>
                  </section>
                ) : null}

                {plan.familyPlaybook ? (
                  <section className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/80">
                        Distilled Family
                      </p>
                      <h4 className="mt-2 text-xl font-semibold text-white">
                        {plan.familyPlaybook.headline}
                      </h4>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Diagnosis Cues</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyPlaybook.diagnosisCues.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Principle Choices</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyPlaybook.principleChoices.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Must Have Deliverables</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyPlaybook.mustHaveDeliverables.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Defense Focus</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyPlaybook.defenseFocus.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Failure Modes</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyPlaybook.commonFailureModes.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Stretch Goals</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyPlaybook.stretchGoals.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                ) : null}

                {plan.familyKnowledgePack ? (
                  <section className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                        Shared Playbook
                      </p>
                      <h4 className="mt-2 text-xl font-semibold text-white">
                        Cross-problem family knowledge
                      </h4>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Shared Hardware Stack</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyKnowledgePack.sharedHardwareStack.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Shared Error Sources</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyKnowledgePack.sharedErrorSources.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Shared Defense Questions</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyKnowledgePack.sharedDefenseQuestions.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Provincial To National Upgrades</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyKnowledgePack.provincialToNationalUpgrades.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                ) : null}

                {plan.familyObjectiveMap ? (
                  <section className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/80">
                        Objective Map
                      </p>
                      <h4 className="mt-2 text-xl font-semibold text-white">
                        What this family is really measuring
                      </h4>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Measurement Objects</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyObjectiveMap.measurementObjects.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Required Outputs</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyObjectiveMap.requiredOutputs.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Observability Anchors</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyObjectiveMap.observabilityAnchors.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Success Floor</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyObjectiveMap.successFloor.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                ) : null}

                {plan.recommendedModules?.length ? (
                  <section className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                        Recommended Modules
                      </p>
                      <h4 className="mt-2 text-xl font-semibold text-white">
                        Reusable measurement modules to build first
                      </h4>
                    </div>

                    <div className="grid gap-4">
                      {plan.recommendedModules.map((module) => (
                        <article key={module.id} className="rounded-[26px] bg-white/6 p-5">
                          <div className="flex flex-wrap items-center gap-3">
                            <h5 className="text-lg font-semibold text-white">{module.name}</h5>
                            <span className="rounded-full bg-cyan-500/14 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                              {module.id}
                            </span>
                            {typeof module.score === "number" && module.score > 0 ? (
                              <span className="rounded-full bg-amber-500/14 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">
                                {`score ${module.score}`}
                              </span>
                            ) : null}
                          </div>

                          <p className="mt-3 rounded-2xl bg-white/6 px-4 py-3 text-sm leading-7 text-slate-100">
                            {module.role}
                          </p>

                          <div className="mt-4 grid gap-4 md:grid-cols-2">
                            <div className="rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">When To Use</p>
                              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                {module.whenToUse.map((item) => (
                                  <li key={item}>- {item}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Required Signals</p>
                              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                {module.requiredSignals.map((item) => (
                                  <li key={item}>- {item}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Failure Alerts</p>
                              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                {module.failureAlerts.map((item) => (
                                  <li key={item}>- {item}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Quickest Bench</p>
                              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                {module.quickestBench.map((item) => (
                                  <li key={item}>- {item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="mt-4 grid gap-4 md:grid-cols-2">
                            {module.prerequisites.length ? (
                              <div className="rounded-2xl bg-slate-950/28 p-4">
                                <p className="text-sm font-semibold text-amber-200">Prerequisites</p>
                                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                  {module.prerequisites.map((item) => (
                                    <li key={item}>- {item}</li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}

                            {module.unlocks.length ? (
                              <div className="rounded-2xl bg-slate-950/28 p-4">
                                <p className="text-sm font-semibold text-amber-200">Unlocks</p>
                                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                  {module.unlocks.map((item) => (
                                    <li key={item}>- {item}</li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}

                            {module.avoidParallelWith.length ? (
                              <div className="rounded-2xl bg-slate-950/28 p-4">
                                <p className="text-sm font-semibold text-amber-200">Avoid Parallel With</p>
                                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                  {module.avoidParallelWith.map((item) => (
                                    <li key={item}>- {item}</li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}

                            {module.minimumAssemblyOrder.length ? (
                              <div className="rounded-2xl bg-slate-950/28 p-4">
                                <p className="text-sm font-semibold text-amber-200">Minimum Assembly Order</p>
                                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                  {module.minimumAssemblyOrder.map((item) => (
                                    <li key={item}>- {item}</li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}
                          </div>

                          <div className="mt-4 grid gap-4 md:grid-cols-3">
                            {module.provincialFloor.length ? (
                              <div className="rounded-2xl bg-slate-950/28 p-4">
                                <p className="text-sm font-semibold text-amber-200">Provincial Floor</p>
                                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                  {module.provincialFloor.map((item) => (
                                    <li key={item}>- {item}</li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}

                            {module.stretchSignals.length ? (
                              <div className="rounded-2xl bg-slate-950/28 p-4">
                                <p className="text-sm font-semibold text-amber-200">Stretch Signals</p>
                                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                  {module.stretchSignals.map((item) => (
                                    <li key={item}>- {item}</li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}

                            {module.fallbackTriggers.length ? (
                              <div className="rounded-2xl bg-slate-950/28 p-4">
                                <p className="text-sm font-semibold text-amber-200">Fallback Triggers</p>
                                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                  {module.fallbackTriggers.map((item) => (
                                    <li key={item}>- {item}</li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}
                          </div>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {module.linkedProblems.map((item) => (
                              <span
                                key={`${module.id}-${item}`}
                                className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                ) : null}

                {plan.familyBuildPack ? (
                  <section className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/80">
                        Build Pack
                      </p>
                      <h4 className="mt-2 text-xl font-semibold text-white">
                        Family-level build and calibration pack
                      </h4>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Core BOM</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyBuildPack.coreBom.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Optional Upgrades</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyBuildPack.optionalUpgrades.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Bench Setup</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyBuildPack.benchSetup.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Calibration Workflow</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyBuildPack.calibrationWorkflow.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5 md:col-span-2">
                        <p className="text-sm font-semibold text-amber-200">Pre-Contest Quick Pack</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyBuildPack.preContestQuickPack.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                ) : null}

                {plan.familyFailureAtlas ? (
                  <section className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                        Failure Atlas
                      </p>
                      <h4 className="mt-2 text-xl font-semibold text-white">
                        Cross-problem failure and recovery map
                      </h4>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Recurring Symptoms</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyFailureAtlas.recurringSymptoms.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">First Checks</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyFailureAtlas.firstChecks.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Common Root Causes</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyFailureAtlas.commonRootCauses.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Fast Recovery Moves</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyFailureAtlas.fastRecoveryMoves.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                ) : null}

                {plan.familyAnswerTemplate ? (
                  <section className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/80">
                        Answer Template
                      </p>
                      <h4 className="mt-2 text-xl font-semibold text-white">
                        Cross-problem defense speaking templates
                      </h4>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">30-Second Pitch</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyAnswerTemplate.thirtySecondPitch.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Two-Minute Defense</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyAnswerTemplate.twoMinuteDefense.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Error-Closure Story</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyAnswerTemplate.errorClosureStory.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Demo Narrative</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyAnswerTemplate.demoNarrative.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                ) : null}

                {plan.familyMetricLadder ? (
                  <section className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                        Metric Ladder
                      </p>
                      <h4 className="mt-2 text-xl font-semibold text-white">
                        Submission to provincial to stretch signals
                      </h4>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Submission Floor</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyMetricLadder.submissionFloor.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Provincial Ready</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyMetricLadder.provincialReadySignals.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Stretch Signals</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyMetricLadder.nationalStretchSignals.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                ) : null}

                {plan.familyTrainingSequence ? (
                  <section className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/80">
                        Training Sequence
                      </p>
                      <h4 className="mt-2 text-xl font-semibold text-white">
                        Family-level training route
                      </h4>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Foundation Phase</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyTrainingSequence.foundationPhase.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Measurement Phase</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyTrainingSequence.measurementPhase.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Specialization Phase</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyTrainingSequence.specializationPhase.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Mock Contest Phase</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyTrainingSequence.mockContestPhase.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                ) : null}

                {plan.familyReferenceGraph ? (
                  <section className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                        Reference Graph
                      </p>
                      <h4 className="mt-2 text-xl font-semibold text-white">
                        Historical anchor and transfer graph
                      </h4>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Anchor Problems</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyReferenceGraph.anchorProblems.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Transfer Patterns</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyReferenceGraph.transferPatterns.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Escalation Edges</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyReferenceGraph.escalationEdges.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Anti-Patterns</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyReferenceGraph.antiPatterns.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                ) : null}

                {plan.familyDecisionTree ? (
                  <section className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/80">
                        Decision Tree
                      </p>
                      <h4 className="mt-2 text-xl font-semibold text-white">
                        Route selection and fallback logic
                      </h4>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Entry Checks</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyDecisionTree.entryChecks.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Preferred Routes</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyDecisionTree.preferredRoutes.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Route Killers</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyDecisionTree.routeKillers.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Fallback Rules</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyDecisionTree.fallbackRules.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                ) : null}

                {plan.familyTriggerPack ? (
                  <section className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                        Trigger Pack
                      </p>
                      <h4 className="mt-2 text-xl font-semibold text-white">
                        Cue-based family trigger rules
                      </h4>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Strong Positive Cues</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyTriggerPack.strongPositiveCues.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Weak Positive Cues</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyTriggerPack.weakPositiveCues.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Disambiguators</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyTriggerPack.disambiguators.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Route Rejection Cues</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyTriggerPack.routeRejectionCues.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                ) : null}

                {plan.familyCorrectionPack ? (
                  <section className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                        Correction Pack
                      </p>
                      <h4 className="mt-2 text-xl font-semibold text-white">
                        Family-level anti-confusion recovery pack
                      </h4>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Common Confusions</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyCorrectionPack.commonConfusions.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Recovery Checks</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyCorrectionPack.recoveryChecks.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Safe Fallback Claims</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyCorrectionPack.safeFallbackClaims.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Escalation Warnings</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyCorrectionPack.escalationWarnings.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                ) : null}

                {plan.familyHandoffPack?.pivotTargets.length ? (
                  <section className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                        Handoff Matrix
                      </p>
                      <h4 className="mt-2 text-xl font-semibold text-white">
                        Cross-family pivot guidance
                      </h4>
                    </div>

                    <div className="grid gap-4">
                      {plan.familyHandoffPack.pivotTargets.map((target) => (
                        <article key={target.targetFamily} className="rounded-[26px] bg-white/6 p-5">
                          <div className="flex flex-wrap items-center gap-3">
                            <h5 className="text-lg font-semibold text-white">{target.targetFamily}</h5>
                          </div>

                          <div className="mt-4 grid gap-4 md:grid-cols-2">
                            <div className="rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Trigger To Pivot</p>
                              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                {target.triggerToPivot.map((item) => (
                                  <li key={item}>- {item}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Fastest Pivot Check</p>
                              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                {target.fastestPivotCheck.map((item) => (
                                  <li key={item}>- {item}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Reusable Assets</p>
                              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                {target.reusableAssets.map((item) => (
                                  <li key={item}>- {item}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Stop Reusing First</p>
                              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                {target.stopReusingFirst.map((item) => (
                                  <li key={item}>- {item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                ) : null}

                {plan.familyStatementPatternPack ? (
                  <section className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                        Statement Patterns
                      </p>
                      <h4 className="mt-2 text-xl font-semibold text-white">
                        Distilled problem-statement templates
                      </h4>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Goal Phrases</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyStatementPatternPack.goalPhrases.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Metric Phrases</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyStatementPatternPack.metricPhrases.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Constraint Phrases</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyStatementPatternPack.constraintPhrases.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Deliverable Phrases</p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                          {plan.familyStatementPatternPack.deliverablePhrases.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                ) : null}

                {plan.familyLexiconPack ? (
                  <section className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                        Family Lexicon
                      </p>
                      <h4 className="mt-2 text-xl font-semibold text-white">
                        High-signal family vocabulary
                      </h4>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Goal Terms</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {plan.familyLexiconPack.goalTerms.map((item) => (
                            <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Metric Terms</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {plan.familyLexiconPack.metricTerms.map((item) => (
                            <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Constraint Terms</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {plan.familyLexiconPack.constraintTerms.map((item) => (
                            <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-[26px] bg-white/6 p-5">
                        <p className="text-sm font-semibold text-amber-200">Deliverable Terms</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {plan.familyLexiconPack.deliverableTerms.map((item) => (
                            <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                ) : null}

                {plan.familyNegativeExamplePack?.examples.length ? (
                  <section className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                        Near-Miss Library
                      </p>
                      <h4 className="mt-2 text-xl font-semibold text-white">
                        Distilled anti-misclassification cases
                      </h4>
                    </div>

                    <div className="grid gap-4">
                      {plan.familyNegativeExamplePack.examples.map((example) => (
                        <article key={`${example.redirectFamily}-${example.nearMissPrompt}`} className="rounded-[26px] bg-white/6 p-5">
                          <div className="flex flex-wrap items-center gap-3">
                            <h5 className="text-lg font-semibold text-white">{example.redirectFamily}</h5>
                            {typeof example.signalStrength === "number" && example.signalStrength > 0 ? (
                              <span className="rounded-full bg-amber-300/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">
                                Signal {example.signalStrength}
                              </span>
                            ) : null}
                          </div>

                          <p className="mt-4 text-sm leading-7 text-slate-200">{example.nearMissPrompt}</p>

                          {(example.matchedNearMissTerms?.length || example.matchedRedirectTerms?.length) ? (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {example.matchedNearMissTerms?.map((item) => (
                                <span key={`near-${example.redirectFamily}-${item}`} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
                                  Near-miss: {item}
                                </span>
                              ))}
                              {example.matchedRedirectTerms?.map((item) => (
                                <span key={`redirect-${example.redirectFamily}-${item}`} className="rounded-full bg-cyan-300/15 px-3 py-1 text-xs font-medium text-cyan-100">
                                  Redirect: {item}
                                </span>
                              ))}
                            </div>
                          ) : null}

                          <div className="mt-4 grid gap-4 md:grid-cols-2">
                            <div className="rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Why It Looks Close</p>
                              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                {example.whyItLooksLikeThisFamily.map((item) => (
                                  <li key={item}>- {item}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Why It Redirects</p>
                              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                {example.whyItActuallyBelongsElsewhere.map((item) => (
                                  <li key={item}>- {item}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Fastest Question</p>
                              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                {example.fastestDisambiguationQuestion.map((item) => (
                                  <li key={item}>- {item}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Reuse What</p>
                              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                {example.reuseWhat.map((item) => (
                                  <li key={item}>- {item}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="rounded-2xl bg-slate-950/28 p-4 md:col-span-2">
                              <p className="text-sm font-semibold text-amber-200">Drop What</p>
                              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                {example.dropWhat.map((item) => (
                                  <li key={item}>- {item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                ) : null}

                {plan.familyPairDisambiguationPack?.length ? (
                  <section className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                        Family Boundary
                      </p>
                      <h4 className="mt-2 text-xl font-semibold text-white">
                        Distilled family-vs-family split logic
                      </h4>
                    </div>

                    <div className="grid gap-4">
                      {plan.familyPairDisambiguationPack.map((item) => (
                        <article key={`${item.title}-${item.competingFamily}`} className="rounded-[26px] bg-white/6 p-5">
                          <div className="flex flex-wrap items-center gap-3">
                            <h5 className="text-lg font-semibold text-white">{item.title}</h5>
                            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
                              vs {item.competingFamily}
                            </span>
                            {typeof item.signalStrength === "number" && item.signalStrength > 0 ? (
                              <span className="rounded-full bg-cyan-300/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                                Signal {item.signalStrength}
                              </span>
                            ) : null}
                          </div>

                          <p className="mt-4 text-sm leading-7 text-slate-200">{item.decidingQuestion}</p>

                          {(item.matchedPrimaryTerms?.length || item.matchedCompetingTerms?.length) ? (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {item.matchedPrimaryTerms?.map((term) => (
                                <span key={`primary-${item.title}-${term}`} className="rounded-full bg-emerald-300/15 px-3 py-1 text-xs font-medium text-emerald-100">
                                  Primary: {term}
                                </span>
                              ))}
                              {item.matchedCompetingTerms?.map((term) => (
                                <span key={`competing-${item.title}-${term}`} className="rounded-full bg-amber-300/15 px-3 py-1 text-xs font-medium text-amber-100">
                                  Competing: {term}
                                </span>
                              ))}
                            </div>
                          ) : null}

                          <div className="mt-4 grid gap-4 md:grid-cols-2">
                            <div className="rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Primary Wins When</p>
                              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                {item.primaryWinsWhen.map((entry) => (
                                  <li key={entry}>- {entry}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Competing Wins When</p>
                              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                {item.competingWinsWhen.map((entry) => (
                                  <li key={entry}>- {entry}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Reusable Assets</p>
                              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                {item.reusableAssets.map((entry) => (
                                  <li key={entry}>- {entry}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Wrong-Turn Cost</p>
                              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                {item.wrongTurnCost.map((entry) => (
                                  <li key={entry}>- {entry}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                ) : null}

                {plan.routeVariants?.length ? (
                  <section className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                        Route Variants
                      </p>
                      <h4 className="mt-2 text-xl font-semibold text-white">
                        Distilled implementation routes
                      </h4>
                    </div>

                    <div className="grid gap-4">
                      {plan.routeVariants.map((route) => (
                        <article key={route.id} className="rounded-[26px] bg-white/6 p-5">
                          <div className="flex flex-wrap items-center gap-3">
                            <h5 className="text-lg font-semibold text-white">{route.name}</h5>
                            <span className="rounded-full bg-cyan-500/14 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                              {route.id}
                            </span>
                            {typeof route.score === "number" && route.score > 0 ? (
                              <span className="rounded-full bg-amber-500/14 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">
                                {`score ${route.score}`}
                              </span>
                            ) : null}
                          </div>
                          {route.matchedTerms?.length ? (
                            <div className="mt-3 flex flex-wrap gap-2">
                              {route.matchedTerms.map((term) => (
                                <span
                                  key={`${route.id}-${term}`}
                                  className="rounded-full bg-cyan-500/12 px-3 py-1 text-xs font-medium text-cyan-100"
                                >
                                  {term}
                                </span>
                              ))}
                            </div>
                          ) : null}
                          <p className="mt-3 text-sm leading-7 text-slate-200">{route.bestFor}</p>
                          <p className="mt-3 rounded-2xl bg-white/6 px-4 py-3 text-sm leading-7 text-slate-100">
                            {route.principle}
                          </p>

                          {route.hardwareGate ? (
                            <div className="mt-4 rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Hardware Gate</p>
                              <p className="mt-3 text-sm leading-7 text-slate-200">{route.hardwareGate}</p>
                            </div>
                          ) : null}

                          {route.measurementTargets?.length ? (
                            <div className="mt-4 rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Measurement Targets</p>
                              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                {route.measurementTargets.map((item) => (
                                  <li key={item}>- {item}</li>
                                ))}
                              </ul>
                            </div>
                          ) : null}

                          <div className="mt-4 grid gap-4 md:grid-cols-3">
                            <div className="rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Hardware Focus</p>
                              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                {route.hardwareFocus.map((item) => (
                                  <li key={item}>- {item}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Software Focus</p>
                              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                {route.softwareFocus.map((item) => (
                                  <li key={item}>- {item}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Tradeoffs</p>
                              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                {route.tradeoffs.map((item) => (
                                  <li key={item}>- {item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="mt-4 grid gap-4 md:grid-cols-2">
                            {route.validationChecklist?.length ? (
                              <div className="rounded-2xl bg-slate-950/28 p-4">
                                <p className="text-sm font-semibold text-amber-200">Validation Checklist</p>
                                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                  {route.validationChecklist.map((item) => (
                                    <li key={item}>- {item}</li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}

                            {route.avoidWhen?.length ? (
                              <div className="rounded-2xl bg-slate-950/28 p-4">
                                <p className="text-sm font-semibold text-amber-200">Avoid When</p>
                                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                  {route.avoidWhen.map((item) => (
                                    <li key={item}>- {item}</li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}
                          </div>

                          <div className="mt-4 grid gap-4 md:grid-cols-3">
                            {route.provincialProof?.length ? (
                              <div className="rounded-2xl bg-slate-950/28 p-4">
                                <p className="text-sm font-semibold text-amber-200">Provincial Proof</p>
                                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                  {route.provincialProof.map((item) => (
                                    <li key={item}>- {item}</li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}

                            {route.stretchSignals?.length ? (
                              <div className="rounded-2xl bg-slate-950/28 p-4">
                                <p className="text-sm font-semibold text-amber-200">Stretch Signals</p>
                                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                  {route.stretchSignals.map((item) => (
                                    <li key={item}>- {item}</li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}

                            {route.collapseSignals?.length ? (
                              <div className="rounded-2xl bg-slate-950/28 p-4">
                                <p className="text-sm font-semibold text-amber-200">Collapse Signals</p>
                                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                  {route.collapseSignals.map((item) => (
                                    <li key={item}>- {item}</li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}
                          </div>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {route.typicalReferences.map((reference) => (
                              <span
                                key={`${route.id}-${reference}`}
                                className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200"
                              >
                                {reference}
                              </span>
                            ))}
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                ) : null}

                <section className="space-y-4">
                  {plan.modules.map((module) => (
                    <div key={module.title} className="rounded-[26px] bg-white/6 p-5">
                      <h4 className="text-lg font-semibold text-white">{module.title}</h4>
                      <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                        {module.items.map((item) => (
                          <li key={item}>- {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </section>

                {plan.tierOptions?.length ? (
                  <section className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/80">
                        Implementation Tiers
                      </p>
                      <h4 className="mt-2 text-xl font-semibold text-white">
                        Distilled build routes
                      </h4>
                    </div>

                    <div className="grid gap-4">
                      {plan.tierOptions.map((tier) => (
                        <article key={tier.id} className="rounded-[26px] bg-white/6 p-5">
                          <div className="flex flex-wrap items-center gap-3">
                            <h5 className="text-lg font-semibold text-white">{tier.name}</h5>
                            <span className="rounded-full bg-amber-500/14 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">
                              {tier.id}
                            </span>
                          </div>
                          <p className="mt-3 text-sm leading-7 text-slate-200">{tier.fit}</p>
                          <p className="mt-3 rounded-2xl bg-white/6 px-4 py-3 text-sm leading-7 text-slate-100">
                            {tier.whenToChoose}
                          </p>
                          <div className="mt-4 grid gap-4 md:grid-cols-2">
                            <div className="rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Hardware</p>
                              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                {tier.hardware.map((item) => (
                                  <li key={item}>- {item}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Software</p>
                              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                {tier.software.map((item) => (
                                  <li key={item}>- {item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                ) : null}

                {plan.relatedProblems?.length ? (
                  <section className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                        Historical Matches
                      </p>
                      <h4 className="mt-2 text-xl font-semibold text-white">
                        Distilled reference problems
                      </h4>
                    </div>

                    <div className="grid gap-4">
                      {plan.relatedProblems.map((problem) => (
                        <article key={problem.id} className="rounded-[26px] bg-white/6 p-5">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
                              {problem.code}
                            </span>
                            <h5 className="text-lg font-semibold text-white">{problem.title}</h5>
                          </div>
                          <p className="mt-3 text-sm leading-7 text-slate-300">{problem.family}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {problem.difficulty ? (
                              <span className="rounded-full bg-amber-500/12 px-3 py-1 text-xs font-medium text-amber-100">
                                {problem.difficulty}
                              </span>
                            ) : null}
                            {problem.tierFit?.map((tier) => (
                              <span
                                key={`${problem.id}-${tier}`}
                                className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200"
                              >
                                {tier}
                              </span>
                            ))}
                          </div>
                          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                            {problem.highlights.map((item) => (
                              <li key={item}>- {item}</li>
                            ))}
                          </ul>

                          {problem.coreChain?.length ? (
                            <div className="mt-4 rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Core Chain</p>
                              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                {problem.coreChain.map((item) => (
                                  <li key={item}>- {item}</li>
                                ))}
                              </ul>
                            </div>
                          ) : null}

                          <div className="mt-4 grid gap-4 md:grid-cols-3">
                            {problem.mustHaveDeliverables?.length ? (
                              <div className="rounded-2xl bg-slate-950/28 p-4">
                                <p className="text-sm font-semibold text-amber-200">Deliverables</p>
                                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                  {problem.mustHaveDeliverables.map((item) => (
                                    <li key={item}>- {item}</li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}

                            {problem.commonPitfalls?.length ? (
                              <div className="rounded-2xl bg-slate-950/28 p-4">
                                <p className="text-sm font-semibold text-amber-200">Pitfalls</p>
                                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                  {problem.commonPitfalls.map((item) => (
                                    <li key={item}>- {item}</li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}

                            {problem.scoringFocus?.length ? (
                              <div className="rounded-2xl bg-slate-950/28 p-4">
                                <p className="text-sm font-semibold text-amber-200">Scoring Focus</p>
                                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                  {problem.scoringFocus.map((item) => (
                                    <li key={item}>- {item}</li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}
                          </div>

                          {problem.principleRoute?.length ||
                          problem.frontEndFocus?.length ||
                          problem.algorithmBackbone?.length ||
                          problem.calibrationBench?.length ||
                          problem.demoSequence?.length ? (
                            <div className="mt-4 rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Solution Blueprint</p>
                              <div className="mt-4 grid gap-4 md:grid-cols-2">
                                {problem.principleRoute?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Principle Route
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.principleRoute.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {problem.frontEndFocus?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Front-End Focus
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.frontEndFocus.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {problem.algorithmBackbone?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Algorithm Backbone
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.algorithmBackbone.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {problem.calibrationBench?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Calibration Bench
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.calibrationBench.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {problem.demoSequence?.length ? (
                                  <div className="md:col-span-2">
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Demo Sequence
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.demoSequence.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          ) : null}

                          {problem.easyToConfuseWith?.length ||
                          problem.separatingSignals?.length ||
                          problem.preferredStoryline?.length ||
                          problem.overclaimBoundaries?.length ? (
                            <div className="mt-4 rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Disambiguation Map</p>
                              <div className="mt-4 grid gap-4 md:grid-cols-2">
                                {problem.easyToConfuseWith?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Easy To Confuse With
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.easyToConfuseWith.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {problem.separatingSignals?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Separating Signals
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.separatingSignals.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {problem.preferredStoryline?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Preferred Storyline
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.preferredStoryline.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {problem.overclaimBoundaries?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Overclaim Boundaries
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.overclaimBoundaries.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          ) : null}

                          {problem.bestBorrowedFrom?.length ||
                          problem.reusableModules?.length ||
                          problem.nonReusableHabits?.length ||
                          problem.fastestCarryOverChecks?.length ? (
                            <div className="mt-4 rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Transfer Map</p>
                              <div className="mt-4 grid gap-4 md:grid-cols-2">
                                {problem.bestBorrowedFrom?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Best Borrowed From
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.bestBorrowedFrom.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {problem.reusableModules?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Reusable Modules
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.reusableModules.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {problem.nonReusableHabits?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Non-Reusable Habits
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.nonReusableHabits.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {problem.fastestCarryOverChecks?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Fastest Carry-Over Checks
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.fastestCarryOverChecks.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          ) : null}
                          {problem.buildTiers?.length ? (
                            <div className="mt-4 rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Tiered Build Plan</p>
                              <div className="mt-4 grid gap-4 xl:grid-cols-3">
                                {problem.buildTiers.map((tier) => (
                                  <article key={`${problem.id}-${tier.tier}`} className="rounded-2xl bg-white/6 p-4">
                                    <div className="flex items-center gap-2">
                                      <span className="rounded-full bg-amber-500/14 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">
                                        {tier.tier}
                                      </span>
                                    </div>

                                    <div className="mt-4 space-y-4">
                                      <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                          Hardware Stack
                                        </p>
                                        <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                          {tier.hardwareStack.map((item) => (
                                            <li key={item}>- {item}</li>
                                          ))}
                                        </ul>
                                      </div>

                                      <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                          Software Scope
                                        </p>
                                        <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                          {tier.softwareScope.map((item) => (
                                            <li key={item}>- {item}</li>
                                          ))}
                                        </ul>
                                      </div>

                                      <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                          Metric Priority
                                        </p>
                                        <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                          {tier.metricPriority.map((item) => (
                                            <li key={item}>- {item}</li>
                                          ))}
                                        </ul>
                                      </div>

                                      <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                          Avoid Overbuild
                                        </p>
                                        <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                          {tier.avoidOverbuild.map((item) => (
                                            <li key={item}>- {item}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </article>
                                ))}
                              </div>
                            </div>
                          ) : null}
                          {problem.calibrationFixtures?.length ||
                          problem.acceptanceChecklist?.length ||
                          problem.edgeCases?.length ||
                          problem.defenseCheckpoints?.length ? (
                            <div className="mt-4 rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Validation Pack</p>
                              <div className="mt-4 grid gap-4 md:grid-cols-2">
                                {problem.calibrationFixtures?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Calibration Fixtures
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.calibrationFixtures.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {problem.acceptanceChecklist?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Acceptance Checklist
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.acceptanceChecklist.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {problem.edgeCases?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Edge Cases
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.edgeCases.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {problem.defenseCheckpoints?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Defense Checkpoints
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.defenseCheckpoints.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          ) : null}
                          {problem.failureSymptoms?.length ||
                          problem.firstChecks?.length ||
                          problem.likelyRootCauses?.length ||
                          problem.fastRecoveryActions?.length ? (
                            <div className="mt-4 rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Troubleshooting Pack</p>
                              <div className="mt-4 grid gap-4 md:grid-cols-2">
                                {problem.failureSymptoms?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Failure Symptoms
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.failureSymptoms.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {problem.firstChecks?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      First Checks
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.firstChecks.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {problem.likelyRootCauses?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Likely Root Causes
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.likelyRootCauses.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {problem.fastRecoveryActions?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Fast Recovery Actions
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.fastRecoveryActions.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          ) : null}
                          {problem.judgeQuestions?.length ||
                          problem.recommendedAnswers?.length ||
                          problem.demoScoringMoves?.length ||
                          problem.phrasesToAvoid?.length ? (
                            <div className="mt-4 rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Defense Pack</p>
                              <div className="mt-4 grid gap-4 md:grid-cols-2">
                                {problem.judgeQuestions?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Judge Questions
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.judgeQuestions.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {problem.recommendedAnswers?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Recommended Answers
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.recommendedAnswers.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {problem.demoScoringMoves?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Demo Scoring Moves
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.demoScoringMoves.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {problem.phrasesToAvoid?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Phrases To Avoid
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.phrasesToAvoid.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          ) : null}
                          {problem.recommendedReferences?.length ||
                          problem.minimumAcceptanceNumbers?.length ||
                          problem.competitionDayQuickChecks?.length ||
                          problem.overnightBurnInChecks?.length ? (
                            <div className="mt-4 rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Benchmark Pack</p>
                              <div className="mt-4 grid gap-4 md:grid-cols-2">
                                {problem.recommendedReferences?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Recommended References
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.recommendedReferences.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {problem.minimumAcceptanceNumbers?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Minimum Acceptance
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.minimumAcceptanceNumbers.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {problem.competitionDayQuickChecks?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Competition-Day Quick Checks
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.competitionDayQuickChecks.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {problem.overnightBurnInChecks?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Overnight Burn-In Checks
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.overnightBurnInChecks.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          ) : null}
                          {problem.recommendedHardware?.length ||
                          problem.softwareBackbone?.length ||
                          problem.calibrationFocus?.length ||
                          problem.defenseAngles?.length ? (
                            <div className="mt-4 rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Winning Pattern</p>
                              <div className="mt-4 grid gap-4 md:grid-cols-2">
                                {problem.recommendedHardware?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Hardware
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.recommendedHardware.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {problem.softwareBackbone?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Software Backbone
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.softwareBackbone.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {problem.calibrationFocus?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Calibration
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.calibrationFocus.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {problem.defenseAngles?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Defense Angles
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.defenseAngles.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          ) : null}

                          {problem.stabilizeFirst?.length ||
                          problem.abnormalChecklist?.length ||
                          problem.defenseScript?.length ? (
                            <div className="mt-4 rounded-2xl bg-slate-950/28 p-4">
                              <p className="text-sm font-semibold text-amber-200">Execution Notes</p>
                              <div className="mt-4 grid gap-4 md:grid-cols-3">
                                {problem.stabilizeFirst?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Stabilize First
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.stabilizeFirst.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {problem.abnormalChecklist?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Abnormal Checklist
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.abnormalChecklist.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}

                                {problem.defenseScript?.length ? (
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                                      Defense Script
                                    </p>
                                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-200">
                                      {problem.defenseScript.map((item) => (
                                        <li key={item}>- {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          ) : null}

                          <div className="mt-4 flex flex-wrap gap-2">
                            {problem.tags.map((tag) => (
                              <span
                                key={`${problem.id}-${tag}`}
                                className="rounded-full bg-cyan-500/12 px-3 py-1 text-xs font-medium text-cyan-100"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                ) : null}

                <section className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-[24px] bg-white/6 p-4">
                    <p className="text-sm font-semibold text-amber-200">{t.instrumentation.tuningLabel}</p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                      {plan.tuningSteps.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-[24px] bg-white/6 p-4">
                    <p className="text-sm font-semibold text-amber-200">{t.instrumentation.riskLabel}</p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                      {plan.risks.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-[24px] bg-white/6 p-4">
                    <p className="text-sm font-semibold text-amber-200">{t.instrumentation.verifyLabel}</p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                      {plan.verification.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </div>
                </section>
              </div>
            ) : null}
          </div>
        </section>
      </section>
    </main>
  );
}
