"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { useTranslation } from "@/i18n/LanguageContext";
import type { DocTreeNode, SearchItem } from "@/lib/content";

gsap.registerPlugin(useGSAP);

interface Props {
  treeEn: DocTreeNode[];
  treeZh: DocTreeNode[];
  searchItems: SearchItem[];
}

export default function DocsContent({ treeEn, treeZh, searchItems }: Props) {
  const { t, lang } = useTranslation();
  const tree = lang === "zh" ? treeZh : treeEn;
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const conditions = context.conditions ?? {};
          const reduceMotion = Boolean(conditions.reduceMotion);
          const duration = reduceMotion ? 0 : 0.8;

          const intro = gsap.timeline({
            defaults: { duration, ease: "power3.out" },
          });

          intro
            .from(".docs-sidebar", { x: -18, autoAlpha: 0 })
            .from(".docs-hero", { y: 24, autoAlpha: 0 }, "-=0.4")
            .from(".docs-group", { y: 22, autoAlpha: 0, stagger: 0.08 }, "-=0.22");
        },
      );

      return () => media.revert();
    },
    { scope },
  );

  return (
    <>
      <Header searchItems={searchItems} />
      <div ref={scope} className="mx-auto flex max-w-6xl flex-1 gap-8 px-6 py-16">
        <div className="docs-sidebar">
          <Sidebar tree={tree} />
        </div>
        <main className="min-w-0 flex-1">
          <section className="docs-hero rounded-[34px] border border-white/60 bg-white/78 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/68">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              {t.docs.sectionLabel}
            </p>
            <h1 className="mt-3 text-[clamp(2.4rem,4.5vw,4.2rem)] font-semibold tracking-tight text-slate-950 dark:text-white">
              {t.docs.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
              {t.docs.subtitle}
            </p>
          </section>

          <div className="mt-10 space-y-8">
            {tree.map((group) => (
              <section key={group.slug} className="docs-group">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h2 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                    {group.title}
                  </h2>
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                    {group.children?.length ?? 1} {t.docs.pagesUnit}
                  </span>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {(group.children || [group]).map((page) => (
                    <Link
                      key={page.slug}
                      href={`/docs/${page.slug}`}
                      className="group rounded-[28px] border border-white/60 bg-white/78 p-6 shadow-[0_22px_55px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-colors hover:border-sky-200 dark:border-white/10 dark:bg-slate-950/62 dark:hover:border-cyan-400/30"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                        {t.docs.pageLabel}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                        {page.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400">
                        /docs/{page.slug}
                      </p>
                      <span className="mt-6 inline-flex text-sm font-medium text-sky-600 transition-transform group-hover:translate-x-1 dark:text-cyan-300">
                        {t.docs.continueReading}
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
