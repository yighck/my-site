"use client";

import { useEffect } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <>
      {children}
      <button
        onClick={toggle}
        aria-label="Toggle dark mode"
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/80 text-lg text-slate-700 shadow-xl shadow-slate-950/10 backdrop-blur transition-colors hover:bg-white dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-900"
      >
        <span className="dark:hidden">☾</span>
        <span className="hidden dark:inline">☀</span>
      </button>
    </>
  );
}
