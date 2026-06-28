"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchModal from "./SearchModal";
import type { SearchItem } from "@/lib/content";

interface Props {
  searchItems: SearchItem[];
}

const NAV_ITEMS = [
  { label: "博客", href: "/blog" },
  { label: "文档", href: "/docs" },
  { label: "期末复习", href: "/exam-review" },
  { label: "电赛仪器仪表", href: "/instrumentation" },
] as const;

export default function Header({ searchItems }: Props) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/30 bg-white/65 backdrop-blur-xl dark:border-white/8 dark:bg-slate-950/55">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-950 text-sm text-white shadow-lg shadow-cyan-500/10 dark:bg-cyan-300 dark:text-slate-950">
            FR
          </span>
          <span>我的知识站</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {NAV_ITEMS.map(({ label, href }) => {
            const isActive = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-slate-950 text-white dark:bg-cyan-300 dark:text-slate-950"
                    : "text-slate-600 hover:bg-white hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <SearchModal items={searchItems} />
        </div>
      </div>
    </header>
  );
}
