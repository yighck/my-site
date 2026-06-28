"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import type { ContentItem, SearchItem } from "@/lib/content";

gsap.registerPlugin(useGSAP);

interface Props {
  posts: ContentItem[];
  searchItems: SearchItem[];
}

export default function BlogContent({ posts, searchItems }: Props) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const scope = useRef<HTMLDivElement>(null);

  const allTags = Array.from(new Set(posts.flatMap((post) => post.frontmatter.tags || [])));
  const filtered = activeTag
    ? posts.filter((post) => post.frontmatter.tags?.includes(activeTag))
    : posts;

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
          const duration = reduceMotion ? 0 : 0.78;

          const intro = gsap.timeline({
            defaults: { duration, ease: "power3.out" },
          });

          intro
            .from(".blog-hero", { y: 24, autoAlpha: 0 })
            .from(".blog-tag", { y: 16, autoAlpha: 0, stagger: 0.04 }, "-=0.36")
            .from(".blog-card", { y: 24, autoAlpha: 0, stagger: 0.08 }, "-=0.18");
        },
      );

      return () => media.revert();
    },
    { scope, dependencies: [activeTag], revertOnUpdate: true },
  );

  return (
    <>
      <Header searchItems={searchItems} />
      <main ref={scope} className="mx-auto max-w-6xl flex-1 px-6 py-16">
        <section className="blog-hero rounded-[34px] border border-white/60 bg-white/78 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/68">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            写作区
          </p>
          <h1 className="mt-3 text-[clamp(2.4rem,4.5vw,4.2rem)] font-semibold tracking-tight text-slate-950 dark:text-white">
            博客
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            技术文章、项目笔记和学习总结。
          </p>

          {allTags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => setActiveTag(null)}
                className={`blog-tag rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeTag === null
                    ? "bg-slate-950 text-white dark:bg-cyan-300 dark:text-slate-950"
                    : "border border-slate-200/80 bg-white/80 text-slate-600 hover:text-slate-950 dark:border-white/10 dark:bg-white/6 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                全部
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                  className={`blog-tag rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeTag === tag
                      ? "bg-slate-950 text-white dark:bg-cyan-300 dark:text-slate-950"
                      : "border border-slate-200/80 bg-white/80 text-slate-600 hover:text-slate-950 dark:border-white/10 dark:bg-white/6 dark:text-slate-300 dark:hover:text-white"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </section>

        <section className="mt-10">
          {filtered.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((post) => (
                <div key={post.slug} className="blog-card">
                  <PostCard slug={post.slug} frontmatter={post.frontmatter} />
                </div>
              ))}
            </div>
          ) : (
            <div className="blog-card rounded-[28px] border border-dashed border-slate-300 bg-white/70 p-8 text-center text-slate-500 dark:border-white/12 dark:bg-white/5 dark:text-slate-400">
              暂时还没有文章。
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
