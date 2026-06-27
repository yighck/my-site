"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import en from "./en.json";
import zh from "./zh.json";

export type Lang = "en" | "zh";

const translations = { en, zh } as const;

interface LanguageContextValue {
  lang: Lang;
  t: (typeof translations)["en"];
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem("lang") as Lang | null;
  if (stored && translations[stored]) return stored;
  if (navigator.language.startsWith("zh")) return "zh";
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang]);

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next: Lang = prev === "en" ? "zh" : "en";
      localStorage.setItem("lang", next);
      return next;
    });
  }, []);

  const value: LanguageContextValue = {
    lang,
    t: translations[lang],
    toggle,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useTranslation must be used within LanguageProvider");
  return ctx;
}
