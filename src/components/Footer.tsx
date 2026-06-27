"use client";

import { useTranslation } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/40 bg-white/55 px-6 py-8 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/35">
      <div className="mx-auto max-w-6xl text-center text-sm text-slate-500 dark:text-slate-400">
        {t.footer.copyright.replace("{year}", String(new Date().getFullYear()))}
      </div>
    </footer>
  );
}
