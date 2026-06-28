"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const elements = document.querySelectorAll("h2[id], h3[id]");
    const items: TocItem[] = Array.from(elements).map((element) => ({
      id: element.id,
      text: element.textContent || "",
      level: parseInt(element.tagName[1]),
    }));
    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -80% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  if (headings.length < 2) {
    return null;
  }

  return (
    <aside className="hidden w-56 flex-shrink-0 xl:block">
      <nav className="sticky top-24 rounded-[28px] border border-white/60 bg-white/72 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/52">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
          本页目录
        </p>
        <ul className="space-y-1.5 border-l border-slate-200 dark:border-white/10">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={`block border-l-2 py-0.5 text-xs transition-colors ${
                  activeId === heading.id
                    ? "border-slate-950 font-medium text-slate-950 dark:border-cyan-300 dark:text-white"
                    : "border-transparent text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                }`}
                style={{ paddingLeft: `${(heading.level - 2) * 12 + 12}px` }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
