"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useTranslation } from "@/i18n/LanguageContext";
import type { SearchItem } from "@/lib/content";

interface Props {
  items: SearchItem[];
  lang: string;
}

export default function SearchModal({ items, lang }: Props) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = query.trim()
    ? items.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.tags.some((tag) => tag.toLowerCase().includes(q))
        );
      })
    : [];

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    setQuery("");
    const timer = window.setTimeout(() => inputRef.current?.focus(), 40);
    return () => window.clearTimeout(timer);
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-full border border-slate-300/80 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-white dark:border-white/12 dark:text-slate-300 dark:hover:bg-white/8"
      >
        <span>{t.search.trigger}</span>
        <kbd className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500 dark:bg-white/10 dark:text-slate-400">
          Ctrl K
        </kbd>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[14vh]">
      <div className="absolute inset-0 bg-slate-950/45 backdrop-blur-sm" onClick={close} />

      <div className="relative w-full max-w-xl overflow-hidden rounded-[28px] border border-white/60 bg-white/95 shadow-2xl shadow-slate-950/20 dark:border-white/10 dark:bg-slate-950/95">
        <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4 dark:border-white/10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            {t.search.find}
          </span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.search.placeholder}
            className="flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500"
          />
          <button
            onClick={close}
            className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-500 dark:bg-white/10 dark:text-slate-400"
          >
            ESC
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto p-2">
          {!query.trim() && (
            <p className="px-4 py-10 text-center text-sm text-slate-400">
              {t.search.typeToSearch}
            </p>
          )}

          {query.trim() && results.length === 0 && (
            <p className="px-4 py-10 text-center text-sm text-slate-500">
              {t.search.noResults}
            </p>
          )}

          {results.map((item) => (
            <Link
              key={`${item.type}-${item.slug}`}
              href={item.url}
              onClick={close}
              className="flex items-start gap-3 rounded-2xl px-4 py-3 transition-colors hover:bg-slate-100 dark:hover:bg-white/6"
            >
              <span className="mt-0.5 rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:bg-white/10 dark:text-slate-400">
                {item.type}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-slate-900 dark:text-white">
                  {item.title}
                </p>
                <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
