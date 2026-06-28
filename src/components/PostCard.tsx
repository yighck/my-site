"use client";

import Link from "next/link";
import type { Frontmatter } from "@/lib/content";

interface Props {
  slug: string;
  frontmatter: Frontmatter;
}

export default function PostCard({ slug, frontmatter }: Props) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block rounded-[28px] border border-white/60 bg-white/82 p-6 shadow-[0_22px_55px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-colors hover:border-sky-200 dark:border-white/10 dark:bg-slate-950/62 dark:hover:border-cyan-400/30"
    >
      <div className="flex items-center justify-between gap-3">
        <time
          className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400"
          dateTime={frontmatter.date}
        >
          {frontmatter.date}
        </time>
        <span className="rounded-full bg-slate-950 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white dark:bg-cyan-300 dark:text-slate-950">
          文章
        </span>
      </div>

      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
        {frontmatter.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {frontmatter.description}
      </p>

      {frontmatter.tags && frontmatter.tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-white/8 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <span className="mt-7 inline-flex text-sm font-medium text-sky-600 transition-transform group-hover:translate-x-1 dark:text-cyan-300">
        继续阅读 {"->"}
      </span>
    </Link>
  );
}
