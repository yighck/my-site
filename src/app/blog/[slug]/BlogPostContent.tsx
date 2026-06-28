"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/TableOfContents";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/MdxComponents";
import type { ContentItem, SearchItem } from "@/lib/content";

interface Props {
  post: ContentItem;
  searchItems: SearchItem[];
}

export default function BlogPostContent({ post, searchItems }: Props) {
  return (
    <>
      <Header searchItems={searchItems} />
      <div className="mx-auto flex max-w-6xl flex-1 gap-8 px-6 py-16">
        <article className="min-w-0 flex-1">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 text-sm text-slate-500 backdrop-blur transition-colors hover:text-slate-950 dark:border-white/10 dark:bg-white/6 dark:text-slate-300 dark:hover:text-white"
          >
            <span>{"<"}</span>
            <span>返回博客</span>
          </Link>

          <header className="rounded-[34px] border border-white/60 bg-white/78 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/68">
            <time
              dateTime={post.frontmatter.date}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400"
            >
              {post.frontmatter.date}
            </time>
            <h1 className="mt-3 text-[clamp(2.2rem,4vw,3.8rem)] font-semibold tracking-tight text-slate-950 dark:text-white">
              {post.frontmatter.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
              {post.frontmatter.description}
            </p>
            {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {post.frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-white/8 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="mt-8 rounded-[34px] border border-white/60 bg-white/78 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/68">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </article>

        <TableOfContents />
      </div>
      <Footer />
    </>
  );
}
