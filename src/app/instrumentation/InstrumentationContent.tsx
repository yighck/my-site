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

export default function InstrumentationContent() {
  const { lang, t } = useTranslation();
  const scope = useRef<HTMLElement>(null);
  const [topic, setTopic] = useState("");
  const [plan, setPlan] = useState<InstrumentationPlan | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
    if (!trimmed) {
      setError(t.instrumentation.emptyTopic);
      return;
    }

    setLoading(true);
    setError("");
    setPlan(null);

    try {
      const response = await fetch("/api/instrumentation-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic: trimmed,
          lang,
        }),
      });

      const data = (await response.json()) as
        | { plan?: InstrumentationPlan; error?: string }
        | undefined;

      if (!response.ok || !data?.plan) {
        throw new Error(data?.error || t.instrumentation.requestFailed);
      }

      setPlan(data.plan);
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
                  <p className="mt-3 text-sm leading-7 text-slate-200">{plan.summary}</p>
                  <p className="mt-4 rounded-2xl bg-white/6 px-4 py-3 text-sm leading-7 text-slate-100">
                    {plan.approach}
                  </p>
                </section>

                <section className="space-y-4">
                  {plan.modules.map((module) => (
                    <div key={module.title} className="rounded-[26px] bg-white/6 p-5">
                      <h4 className="text-lg font-semibold text-white">{module.title}</h4>
                      <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                        {module.items.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </section>

                <section className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-[24px] bg-white/6 p-4">
                    <p className="text-sm font-semibold text-amber-200">{t.instrumentation.tuningLabel}</p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                      {plan.tuningSteps.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-[24px] bg-white/6 p-4">
                    <p className="text-sm font-semibold text-amber-200">{t.instrumentation.riskLabel}</p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                      {plan.risks.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-[24px] bg-white/6 p-4">
                    <p className="text-sm font-semibold text-amber-200">{t.instrumentation.verifyLabel}</p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                      {plan.verification.map((item) => (
                        <li key={item}>• {item}</li>
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
