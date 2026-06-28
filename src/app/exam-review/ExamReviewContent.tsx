"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { Subject } from "@/lib/exam";

gsap.registerPlugin(useGSAP);

interface Props {
  subjects: Subject[];
}

const FEATURE_LABELS = ["知识总结", "概念卡片", "练习题", "复习提示"];
const STUDY_STEPS = [
  "先看知识总结，快速找回章节主线。",
  "再用概念卡片补术语和关键定义。",
  "最后刷题并用提示区收束错题。",
];

export default function ExamReviewContent({ subjects }: Props) {
  const scope = useRef<HTMLElement>(null);

  const statCards = [
    { value: `${subjects.length}`, label: "门课程已整理" },
    { value: "4", label: "种复习模块并行推进" },
    { value: "1", label: "条清晰的考前冲刺路径" },
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
            .from(".review-badge", { y: 18, autoAlpha: 0 })
            .from(".review-title-line", { yPercent: 30, autoAlpha: 0, stagger: 0.08 }, "<0.08")
            .from(".review-copy", { y: 22, autoAlpha: 0 }, "-=0.42")
            .from(".review-feature", { y: 18, autoAlpha: 0, stagger: 0.06 }, "-=0.38")
            .from(".review-stat", { y: 24, autoAlpha: 0, stagger: 0.08 }, "-=0.34")
            .from(".subject-card", { y: 36, autoAlpha: 0, stagger: 0.1 }, "-=0.22");

          if (!reduceMotion && isDesktop) {
            gsap.to(".review-orb", {
              y: (index) => (index % 2 === 0 ? -16 : 18),
              x: (index) => (index === 1 ? 12 : -10),
              duration: (index) => 4.8 + index,
              ease: "sine.inOut",
              force3D: true,
              repeat: -1,
              yoyo: true,
              stagger: 0.2,
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
      <div className="review-orb gpu-float pointer-events-none absolute left-10 top-28 h-40 w-40 rounded-full bg-cyan-400/18 blur-3xl dark:bg-cyan-400/14" />
      <div className="review-orb gpu-float pointer-events-none absolute right-6 top-52 h-56 w-56 rounded-full bg-indigo-500/16 blur-3xl dark:bg-indigo-500/18" />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_22rem] lg:items-start">
          <div className="rounded-[32px] border border-white/60 bg-white/78 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/68">
            <span className="review-badge inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:border-cyan-500/20 dark:bg-cyan-500/10 dark:text-cyan-200">
              期末冲刺
            </span>

            <div className="mt-6 space-y-2 text-[clamp(2.5rem,5vw,4.8rem)] font-semibold tracking-tight text-slate-950 dark:text-white">
              <div className="review-title-line">把期末复习</div>
              <div className="review-title-line bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
                做成一张作战地图
              </div>
            </div>

            <p className="review-copy mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
              这块前端现在围绕课程冲刺来设计：先抓住知识框架，再翻概念、刷题、看提示，让复习节奏更像一套真的考前流程。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {FEATURE_LABELS.map((feature) => (
                <span
                  key={feature}
                  className="review-feature rounded-full border border-slate-200/80 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/6 dark:text-slate-200"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {statCards.map((card) => (
                <div
                  key={card.label}
                  className="review-stat rounded-3xl border border-slate-200/80 bg-slate-50/90 p-5 dark:border-white/10 dark:bg-white/6"
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

          <aside className="subject-card rounded-[28px] border border-white/60 bg-slate-950 p-6 text-white shadow-[0_24px_80px_rgba(8,15,35,0.22)] dark:border-white/10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
              复习节奏
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              一眼看到今天该复习什么
            </h2>
            <div className="mt-6 space-y-4">
              {STUDY_STEPS.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl bg-white/6 p-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-300 text-sm font-semibold text-slate-950">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-7 text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <section className="mt-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                科目列表
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
                按科目进入你的复习面板
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {subjects.map((subject, index) => (
              <Link
                key={subject.id}
                href={`/exam-review/${subject.id}`}
                className="subject-card group relative overflow-hidden rounded-[30px] border border-white/60 bg-white/82 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-colors hover:border-sky-200 dark:border-white/10 dark:bg-slate-950/66 dark:hover:border-cyan-400/30"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-r ${subject.color} opacity-92`}
                />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-2xl shadow-sm dark:bg-slate-950/70">
                        {subject.icon}
                      </span>
                      <p className="mt-5 text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
                        0{index + 1}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                        {subject.name.zh}
                      </h3>
                    </div>
                    <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white dark:bg-cyan-300 dark:text-slate-950">
                      复习中
                    </span>
                  </div>

                  <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {subject.description.zh}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {FEATURE_LABELS.map((feature) => (
                      <span
                        key={`${subject.id}-${feature}`}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-white/8 dark:text-slate-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center justify-between text-sm font-medium">
                    <span className="text-slate-400">进入科目详情</span>
                    <span className="text-sky-600 transition-transform group-hover:translate-x-1 dark:text-cyan-300">
                      开始复习 {"->"}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
