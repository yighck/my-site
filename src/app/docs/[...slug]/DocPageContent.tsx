"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import TableOfContents from "@/components/TableOfContents";
import { useTranslation } from "@/i18n/LanguageContext";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/MdxComponents";
import type { ContentItem, DocTreeNode, SearchItem } from "@/lib/content";

gsap.registerPlugin(useGSAP);

interface Props {
  pageEn: ContentItem;
  pageZh: ContentItem | null;
  treeEn: DocTreeNode[];
  treeZh: DocTreeNode[];
  searchItems: SearchItem[];
}

export default function DocPageContent({
  pageEn,
  pageZh,
  treeEn,
  treeZh,
  searchItems,
}: Props) {
  const { lang, t } = useTranslation();
  const page = lang === "zh" && pageZh ? pageZh : pageEn;
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
            .from(".doc-sidebar", { x: -18, autoAlpha: 0 })
            .from(".doc-hero", { y: 24, autoAlpha: 0 }, "-=0.42")
            .from(".doc-body", { y: 20, autoAlpha: 0 }, "-=0.28")
            .from(".doc-toc", { x: 18, autoAlpha: 0 }, "-=0.34");
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
        <div className="doc-sidebar">
          <Sidebar tree={tree} />
        </div>
        <main className="min-w-0 flex-1">
          <section className="doc-hero rounded-[34px] border border-white/60 bg-white/78 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/68">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 text-sm text-slate-500 backdrop-blur transition-colors hover:text-slate-950 dark:border-white/10 dark:bg-white/6 dark:text-slate-300 dark:hover:text-white"
            >
              <span>{"<"}</span>
              <span>{t.docs.backToDocs}</span>
            </Link>
            <h1 className="mt-6 text-[clamp(2.2rem,4vw,3.8rem)] font-semibold tracking-tight text-slate-950 dark:text-white">
              {page.frontmatter.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
              {page.frontmatter.description}
            </p>
          </section>

          <article className="doc-body mt-8 rounded-[34px] border border-white/60 bg-white/78 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/68">
            <MDXRemote source={page.content} components={mdxComponents} />
          </article>
        </main>
        <div className="doc-toc">
          <TableOfContents />
        </div>
      </div>
      <Footer />
    </>
  );
}
