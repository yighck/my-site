"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/i18n/LanguageContext";
import SearchModal from "./SearchModal";
import type { SearchItem } from "@/lib/content";

interface Props {
  searchItems: SearchItem[];
}

const NAV_ITEMS = [
  { key: "blog", href: "/blog" },
  { key: "docs", href: "/docs" },
  { key: "exam", href: "/exam-review" },
] as const;

export default function Header({ searchItems }: Props) {
  const pathname = usePathname();
  const { t, lang, toggle } = useTranslation();

  return (
    <header className="sticky top-0 z-40 border-b border-white/30 bg-white/65 backdrop-blur-xl dark:border-white/8 dark:bg-slate-950/55">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-950 text-sm text-white shadow-lg shadow-cyan-500/10 dark:bg-cyan-300 dark:text-slate-950">
            FR
          </span>
          <span>{t.header.siteName}</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {NAV_ITEMS.map(({ key, href }) => {
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
                {t.header[key]}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <SearchModal items={searchItems} lang={lang} />
          <button
            onClick={toggle}
            className="rounded-full border border-slate-300/80 px-3 py-1.5 text-xs font-semibold tracking-[0.18em] text-slate-700 transition-colors hover:bg-white dark:border-white/12 dark:text-slate-200 dark:hover:bg-white/8"
          >
            {lang === "en" ? "中" : "EN"}
          </button>
        </div>
      </div>
    </header>
  );
}
