"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "@/i18n/LanguageContext";
import {
  instrumentationTracks,
  platformModules,
  testChecklist,
  weeklyRoadmap,
} from "@/lib/instrumentation";

gsap.registerPlugin(useGSAP);

export default function InstrumentationContent() {
  const { lang, t } = useTranslation();
  const scope = useRef<HTMLElement>(null);

  const badges = [
    t.instrumentation.badgeHardware,
    t.instrumentation.badgeAlgorithms,
    t.instrumentation.badgeContest,
    t.instrumentation.badgePlatform,
  ];

  const statCards = [
    { value: "4", label: t.instrumentation.statFamilies },
    { value: "6", label: t.instrumentation.statWeeks },
    { value: "1", label: t.instrumentation.statPlatform },
  ];

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
            .from(".inst-badge", { y: 18, autoAlpha: 0 })
            .from(".inst-title-line", { yPercent: 30, autoAlpha: 0, stagger: 0.08 }, "<0.08")
            .from(".inst-copy", { y: 22, autoAlpha: 0 }, "-=0.42")
            .from(".inst-pill", { y: 18, autoAlpha: 0, stagger: 0.06 }, "-=0.34")
            .from(".inst-stat", { y: 24, autoAlpha: 0, stagger: 0.08 }, "-=0.32")
            .from(".inst-card", { y: 30, autoAlpha: 0, stagger: 0.08 }, "-=0.18");

          if (!reduceMotion && isDesktop) {
            gsap.to(".inst-orb", {
              y: (index) => (index % 2 === 0 ? -18 : 16),
              x: (index) => (index === 0 ? -10 : 12),
              duration: (index) => 4.6 + index,
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

  return (
    <main ref={scope} className="relative overflow-hidden">
      <div className="inst-orb gpu-float pointer-events-none absolute left-8 top-20 h-44 w-44 rounded-full bg-amber-400/18 blur-3xl dark:bg-amber-400/12" />
      <div className="inst-orb gpu-float pointer-events-none absolute right-0 top-44 h-64 w-64 rounded-full bg-cyan-500/16 blur-3xl dark:bg-cyan-500/16" />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_22rem] lg:items-start">
          <div className="inst-card rounded-[34px] border border-white/60 bg-white/78 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/68">
            <span className="inst-badge inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200">
              {t.instrumentation.badge}
            </span>

            <div className="mt-6 space-y-2 text-[clamp(2.5rem,5vw,4.8rem)] font-semibold tracking-tight text-slate-950 dark:text-white">
              <div className="inst-title-line">{t.instrumentation.heroLine1}</div>
              <div className="inst-title-line bg-gradient-to-r from-amber-500 via-orange-500 to-cyan-500 bg-clip-text text-transparent">
                {t.instrumentation.heroLine2}
              </div>
            </div>

            <p className="inst-copy mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
              {t.instrumentation.heroCopy}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inst-pill rounded-full border border-slate-200/80 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/6 dark:text-slate-200"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {statCards.map((card) => (
                <div
                  key={card.label}
                  className="inst-stat rounded-3xl border border-slate-200/80 bg-slate-50/90 p-5 dark:border-white/10 dark:bg-white/6"
                >
                  <p className="text-3xl font-semibold text-slate-950 dark:text-white">
                    {card.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {card.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="inst-card rounded-[28px] border border-white/60 bg-slate-950 p-6 text-white shadow-[0_24px_80px_rgba(8,15,35,0.22)] dark:border-white/10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-200/80">
              {t.instrumentation.principleLabel}
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              {t.instrumentation.principleTitle}
            </h2>
            <div className="mt-6 space-y-4">
              {[t.instrumentation.principle1, t.instrumentation.principle2, t.instrumentation.principle3].map(
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

        <section className="mt-14">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              {t.instrumentation.familiesLabel}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {t.instrumentation.familiesTitle}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {instrumentationTracks.map((track) => (
              <article
                key={track.id}
                className="inst-card relative overflow-hidden rounded-[30px] border border-white/60 bg-white/82 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/66"
              >
                <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-r ${track.accent} opacity-90`} />
                <div className="relative">
                  <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm dark:bg-slate-950/75 dark:text-slate-200">
                    {lang === "zh" ? track.badge.zh : track.badge.en}
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                    {lang === "zh" ? track.title.zh : track.title.en}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {lang === "zh" ? track.summary.zh : track.summary.en}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {(lang === "zh" ? track.drills.zh : track.drills.en).map((drill) => (
                      <span
                        key={`${track.id}-${drill}`}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-white/8 dark:text-slate-300"
                      >
                        {drill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="inst-card rounded-[30px] border border-white/60 bg-white/82 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/66">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              {t.instrumentation.roadmapLabel}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {t.instrumentation.roadmapTitle}
            </h2>

            <div className="mt-8 space-y-5">
              {weeklyRoadmap.map((item) => (
                <div
                  key={item.week}
                  className="rounded-3xl border border-slate-200/80 bg-slate-50/90 p-5 dark:border-white/10 dark:bg-white/6"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white dark:bg-amber-300 dark:text-slate-950">
                      {item.week}
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
                      {lang === "zh" ? item.title.zh : item.title.en}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {lang === "zh" ? item.focus.zh : item.focus.en}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <section className="inst-card rounded-[30px] border border-white/60 bg-slate-950 p-6 text-white shadow-[0_24px_60px_rgba(8,15,35,0.22)] dark:border-white/10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
                {t.instrumentation.platformLabel}
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                {t.instrumentation.platformTitle}
              </h2>

              <div className="mt-6 space-y-4">
                {platformModules.map((module) => (
                  <div key={module.name} className="rounded-2xl bg-white/6 p-4">
                    <p className="font-mono text-sm text-amber-200">{module.name}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-200">
                      {lang === "zh" ? module.zh : module.en}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="inst-card rounded-[30px] border border-white/60 bg-white/82 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/66">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                {t.instrumentation.testingLabel}
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
                {t.instrumentation.testingTitle}
              </h2>

              <div className="mt-6 space-y-3">
                {(lang === "zh" ? testChecklist.zh : testChecklist.en).map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/90 p-4 dark:border-white/10 dark:bg-white/6"
                  >
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </section>
    </main>
  );
}
