"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import PostCard from "@/components/PostCard";
import { useTranslation } from "@/i18n/LanguageContext";
import type { ContentItem } from "@/lib/content";

gsap.registerPlugin(useGSAP);

interface Props {
  postsEn: ContentItem[];
  postsZh: ContentItem[];
}

export default function HomeContent({ postsEn, postsZh }: Props) {
  const { t, lang } = useTranslation();
  const scope = useRef<HTMLDivElement>(null);
  const posts = lang === "zh" && postsZh.length > 0 ? postsZh : postsEn;

  const quickLinks = [
    {
      href: "/docs/getting-started/introduction",
      title: t.home.docsIntro,
      path: "/docs/getting-started/introduction",
    },
    {
      href: "/docs/getting-started/installation",
      title: t.home.docsInstall,
      path: "/docs/getting-started/installation",
    },
    {
      href: "/docs/guides/writing-blog",
      title: t.home.docsBlog,
      path: "/docs/guides/writing-blog",
    },
    {
      href: "/docs/guides/adding-docs",
      title: t.home.docsAddDocs,
      path: "/docs/guides/adding-docs",
    },
    {
      href: "/instrumentation",
      title: t.home.instrumentationHub,
      path: "/instrumentation",
    },
  ];

  const statCards =
    lang === "zh"
      ? [
          { value: "3", label: "主要内容栏目" },
          { value: "5", label: "首页快速入口" },
          { value: "1", label: "统一知识入口" },
        ]
      : [
          { value: "3", label: "major content tracks" },
          { value: "5", label: "quick access links" },
          { value: "1", label: "unified knowledge entry point" },
        ];

  const asidePoints =
    lang === "zh"
      ? [
          "博客区记录技术笔记、项目经验和实践复盘。",
          "文档区更适合做结构化、长期沉淀的知识整理。",
          "期末复习栏目专门服务课程冲刺和考前回顾。",
          "电赛仪器仪表专题把题型、平台和训练节奏压成一页作战板。",
        ]
      : [
          "The blog captures notes, projects, and practical lessons.",
          "The docs area is better for structured, long-term reference.",
          "The review zone is tuned for fast finals prep and recap.",
          "The instrumentation hub compresses NUEDC measurement problems into one reusable playbook.",
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
            .from(".home-badge", { y: 18, autoAlpha: 0 })
            .from(".home-title-line", { yPercent: 30, autoAlpha: 0, stagger: 0.08 }, "<0.06")
            .from(".home-copy", { y: 22, autoAlpha: 0 }, "-=0.42")
            .from(".home-stat", { y: 24, autoAlpha: 0, stagger: 0.08 }, "-=0.32")
            .from(".home-card", { y: 26, autoAlpha: 0, stagger: 0.08 }, "-=0.2");

          if (!reduceMotion && isDesktop) {
            gsap.to(".home-orb", {
              y: (index) => (index % 2 === 0 ? -14 : 16),
              x: (index) => (index === 0 ? -10 : 12),
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

  return (
    <div ref={scope} className="relative overflow-hidden">
      <div className="home-orb gpu-float pointer-events-none absolute left-10 top-10 h-40 w-40 rounded-full bg-cyan-400/18 blur-3xl dark:bg-cyan-400/12" />
      <div className="home-orb gpu-float pointer-events-none absolute right-0 top-36 h-56 w-56 rounded-full bg-indigo-500/14 blur-3xl dark:bg-indigo-500/18" />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_22rem]">
        <div className="home-card rounded-[34px] border border-white/60 bg-white/78 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/68">
          <span className="home-badge inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:border-cyan-500/20 dark:bg-cyan-500/10 dark:text-cyan-200">
            {t.home.hubLabel}
          </span>

          <div className="mt-6 space-y-2 text-[clamp(2.8rem,5vw,5rem)] font-semibold tracking-tight text-slate-950 dark:text-white">
            <div className="home-title-line">{t.home.greeting}</div>
            <div className="home-title-line bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
              {t.home.heroHeadline}
            </div>
          </div>

          <p className="home-copy mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            {t.home.intro}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {statCards.map((card) => (
              <div
                key={card.label}
                className="home-stat rounded-3xl border border-slate-200/80 bg-slate-50/90 p-5 dark:border-white/10 dark:bg-white/6"
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

        <aside className="home-card rounded-[28px] border border-white/60 bg-slate-950 p-6 text-white shadow-[0_24px_80px_rgba(8,15,35,0.22)] dark:border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
            {t.home.contentLabel}
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight">
            {t.home.contentHeadline}
          </h2>
          <div className="mt-6 space-y-4">
            {asidePoints.map((point, index) => (
              <div key={point} className="flex gap-4 rounded-2xl bg-white/6 p-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-300 text-sm font-semibold text-slate-950">
                  {index + 1}
                </span>
                <p className="text-sm leading-7 text-slate-200">{point}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <section className="mt-14">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              {t.home.recentLabel}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {t.home.recentPosts}
            </h2>
          </div>
          <Link
            href="/blog"
            className="home-card inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 text-sm font-medium text-slate-500 backdrop-blur transition-colors hover:text-slate-950 dark:border-white/10 dark:bg-white/6 dark:text-slate-300 dark:hover:text-white"
          >
            <span>{t.home.viewAll}</span>
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.slug} className="home-card">
              <PostCard slug={post.slug} frontmatter={post.frontmatter} lang={lang} />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            {t.home.quickLabel}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
            {t.home.quickLinks}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="home-card group rounded-[28px] border border-white/60 bg-white/78 p-6 shadow-[0_22px_55px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-colors hover:border-sky-200 dark:border-white/10 dark:bg-slate-950/62 dark:hover:border-cyan-400/30"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                {t.home.docsEntry}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                {link.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400">
                {link.path}
              </p>
              <span className="mt-6 inline-flex text-sm font-medium text-sky-600 transition-transform group-hover:translate-x-1 dark:text-cyan-300">
                {t.home.openDocument}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
