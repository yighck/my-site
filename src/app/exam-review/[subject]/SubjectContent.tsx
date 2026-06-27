"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "@/i18n/LanguageContext";
import ConceptCard from "@/components/exam/ConceptCard";
import PracticeQuiz from "@/components/exam/PracticeQuiz";
import SummarySection from "@/components/exam/SummarySection";
import type { SubjectContent as SubjectContentData } from "@/lib/exam";

gsap.registerPlugin(useGSAP);

type Tab = "summary" | "concepts" | "practice" | "tips";

interface Props {
  contentEn: SubjectContentData | null;
  contentZh: SubjectContentData | null;
}

export default function SubjectContent({ contentEn, contentZh }: Props) {
  const { lang, t } = useTranslation();
  const [tab, setTab] = useState<Tab>("summary");
  const scope = useRef<HTMLElement>(null);

  const content = (lang === "zh" ? contentZh : contentEn) ?? contentZh ?? contentEn;

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
          const duration = reduceMotion ? 0 : 0.8;

          gsap.set([".subject-orb", ".subject-panel", ".subject-metric"], {
            willChange: "transform, opacity",
          });

          const intro = gsap.timeline({
            defaults: { duration, ease: "power3.out" },
          });

          intro
            .from(".subject-back", { x: -18, autoAlpha: 0 })
            .from(".subject-hero", { y: 28, autoAlpha: 0 }, "-=0.3")
            .from(".subject-metric", { y: 18, autoAlpha: 0, stagger: 0.08 }, "-=0.36")
            .from(".subject-tab", { y: 18, autoAlpha: 0, stagger: 0.05 }, "-=0.24")
            .from(".subject-panel", { y: 24, autoAlpha: 0, stagger: 0.08 }, "-=0.2");

          if (!reduceMotion && isDesktop) {
            gsap.to(".subject-orb", {
              y: (index) => (index % 2 === 0 ? -14 : 14),
              duration: (index) => 4.6 + index,
              ease: "sine.inOut",
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

  useGSAP(
    () => {
      gsap.fromTo(
        ".subject-stage",
        { y: 20, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.52,
          ease: "power2.out",
        },
      );
    },
    { scope, dependencies: [tab], revertOnUpdate: true },
  );

  if (!content) {
    return null;
  }

  const tabs: { key: Tab; label: string; count: string }[] = [
    { key: "summary", label: t.exam.tabSummary, count: content.summary ? "01" : "00" },
    { key: "concepts", label: t.exam.tabConcepts, count: String(content.concepts.length).padStart(2, "0") },
    { key: "practice", label: t.exam.tabPractice, count: String(content.practice.length).padStart(2, "0") },
    { key: "tips", label: t.exam.tabTips, count: content.tips ? "01" : "00" },
  ];

  const metrics = [
    {
      label: t.exam.metricConceptCards,
      value: content.concepts.length,
    },
    {
      label: t.exam.metricPracticeSets,
      value: content.practice.length,
    },
    {
      label: t.exam.metricStudyModes,
      value: 4,
    },
  ];

  const sideNotes = [t.exam.subjectStep1, t.exam.subjectStep2, t.exam.subjectStep3];

  return (
    <main ref={scope} className="relative overflow-hidden">
      <div className="subject-orb pointer-events-none absolute left-8 top-20 h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl dark:bg-cyan-400/14" />
      <div className="subject-orb pointer-events-none absolute right-10 top-36 h-52 w-52 rounded-full bg-indigo-500/14 blur-3xl dark:bg-indigo-500/18" />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/exam-review"
          className="subject-back inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/75 px-4 py-2 text-sm font-medium text-slate-600 backdrop-blur transition-colors hover:text-slate-950 dark:border-white/10 dark:bg-white/6 dark:text-slate-300 dark:hover:text-white"
        >
          <span>{"<"}</span>
          <span>{t.exam.backToSubjects}</span>
        </Link>

        <div className="subject-hero mt-6 rounded-[34px] border border-white/60 bg-white/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/68">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-[22px] bg-slate-950 text-3xl shadow-lg shadow-cyan-500/10 dark:bg-cyan-300 dark:text-slate-950">
                {content.subject.icon}
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                {t.exam.subjectBoardLabel}
              </p>
              <h1 className="mt-3 text-[clamp(2.4rem,4.5vw,4.2rem)] font-semibold tracking-tight text-slate-950 dark:text-white">
                {lang === "zh" ? content.subject.name.zh : content.subject.name.en}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
                {lang === "zh" ? content.subject.description.zh : content.subject.description.en}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="subject-metric rounded-3xl border border-slate-200/80 bg-slate-50/90 p-5 dark:border-white/10 dark:bg-white/6"
                >
                  <p className="text-3xl font-semibold text-slate-950 dark:text-white">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {tabs.map((item) => {
            const active = tab === item.key;
            return (
              <button
                key={item.key}
                onClick={() => setTab(item.key)}
                className={`subject-tab inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-medium transition-colors ${
                  active
                    ? "bg-slate-950 text-white shadow-lg shadow-slate-950/15 dark:bg-cyan-300 dark:text-slate-950"
                    : "border border-slate-200/80 bg-white/80 text-slate-600 hover:text-slate-950 dark:border-white/10 dark:bg-white/6 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${active ? "bg-white/15 dark:bg-slate-950/12" : "bg-slate-100 dark:bg-white/10"}`}>
                  {item.count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1fr)_20rem]">
          <section className="space-y-6">
            {tab === "summary" && (
              <div className="subject-stage">
                {content.summary ? (
                  <SummarySection content={content.summary} />
                ) : (
                  <div className="rounded-[28px] border border-dashed border-slate-300 bg-white/70 p-8 text-slate-500 dark:border-white/12 dark:bg-white/5 dark:text-slate-400">
                    {t.exam.emptySummary}
                  </div>
                )}
              </div>
            )}

            {tab === "concepts" && (
              <div className="subject-stage grid gap-5 md:grid-cols-2">
                {content.concepts.length > 0 ? (
                  content.concepts.map((concept) => (
                    <ConceptCard
                      key={concept.term}
                      term={concept.term}
                      en={concept.en}
                      definition={concept.definition}
                    />
                  ))
                ) : (
                  <div className="rounded-[28px] border border-dashed border-slate-300 bg-white/70 p-8 text-slate-500 dark:border-white/12 dark:bg-white/5 dark:text-slate-400">
                    {t.exam.emptyConcepts}
                  </div>
                )}
              </div>
            )}

            {tab === "practice" && (
              <div className="subject-stage space-y-5">
                {content.practice.length > 0 ? (
                  content.practice.map((question, index) => (
                    <PracticeQuiz
                      key={`${question.question}-${index}`}
                      index={index}
                      question={question.question}
                      options={question.options}
                      answer={question.answer}
                      explanation={question.explanation}
                    />
                  ))
                ) : (
                  <div className="rounded-[28px] border border-dashed border-slate-300 bg-white/70 p-8 text-slate-500 dark:border-white/12 dark:bg-white/5 dark:text-slate-400">
                    {t.exam.emptyPractice}
                  </div>
                )}
              </div>
            )}

            {tab === "tips" && (
              <div className="subject-stage">
                {content.tips ? (
                  <SummarySection content={content.tips} />
                ) : (
                  <div className="rounded-[28px] border border-dashed border-slate-300 bg-white/70 p-8 text-slate-500 dark:border-white/12 dark:bg-white/5 dark:text-slate-400">
                    {t.exam.emptyTips}
                  </div>
                )}
              </div>
            )}
          </section>

          <aside className="space-y-5">
            <div className="subject-panel rounded-[28px] border border-white/60 bg-slate-950 p-6 text-white shadow-[0_24px_60px_rgba(8,15,35,0.2)] dark:border-white/10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/75">
                {t.exam.studyFlowLabel}
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                {t.exam.studyFlowTitle}
              </h2>
              <div className="mt-6 space-y-4">
                {sideNotes.map((note, index) => (
                  <div key={note} className="flex gap-4 rounded-2xl bg-white/6 p-4">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-300 text-sm font-semibold text-slate-950">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-7 text-slate-200">{note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="subject-panel rounded-[28px] border border-white/60 bg-white/78 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/60">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                {t.exam.coverageLabel}
              </p>
              <div className="mt-5 space-y-4">
                {tabs.map((item) => {
                  const ratio =
                    item.key === "summary"
                      ? content.summary
                        ? 100
                        : 18
                      : item.key === "tips"
                        ? content.tips
                          ? 100
                          : 18
                        : item.key === "concepts"
                          ? Math.min(100, Math.max(20, content.concepts.length * 16))
                          : Math.min(100, Math.max(20, content.practice.length * 16));

                  return (
                    <div key={`meter-${item.key}`}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="font-medium text-slate-700 dark:text-slate-200">
                          {item.label}
                        </span>
                        <span className="text-slate-400">{ratio}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-100 dark:bg-white/8">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500"
                          style={{ width: `${ratio}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
