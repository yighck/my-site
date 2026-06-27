"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "@/i18n/LanguageContext";

gsap.registerPlugin(useGSAP);

interface Props {
  term: string;
  en: string;
  definition: string;
}

export default function ConceptCard({ term, en, definition }: Props) {
  const { t } = useTranslation();
  const [flipped, setFlipped] = useState(false);
  const scope = useRef<HTMLButtonElement>(null);

  useGSAP(
    () => {
      gsap.to(".concept-inner", {
        rotationY: flipped ? 180 : 0,
        duration: 0.65,
        ease: "power3.inOut",
      });
    },
    { scope, dependencies: [flipped], revertOnUpdate: true },
  );

  return (
    <button
      ref={scope}
      type="button"
      onClick={() => setFlipped((prev) => !prev)}
      className="group h-60 w-full cursor-pointer rounded-[28px] text-left [perspective:1200px]"
    >
      <div className="concept-inner relative h-full rounded-[28px] border border-white/60 bg-white/82 shadow-[0_22px_55px_rgba(15,23,42,0.08)] backdrop-blur-xl [transform-style:preserve-3d] transition-transform dark:border-white/10 dark:bg-slate-950/62">
        <div className="absolute inset-0 flex h-full flex-col justify-between rounded-[28px] p-6 [backface-visibility:hidden]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              {t.exam.conceptLabel}
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {term}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              {en}
            </p>
          </div>
          <div className="flex items-end justify-between">
            <p className="max-w-[13rem] text-sm leading-7 text-slate-500 dark:text-slate-400">
              {t.exam.conceptHint}
            </p>
            <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white dark:bg-cyan-300 dark:text-slate-950">
              {flipped ? t.exam.conceptBack : t.exam.conceptFront}
            </span>
          </div>
        </div>

        <div className="absolute inset-0 flex h-full rounded-[28px] bg-slate-950 p-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] dark:bg-cyan-300 dark:text-slate-950">
          <div className="flex h-full w-full flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80 dark:text-slate-700">
                {t.exam.definitionLabel}
              </p>
              <p className="mt-5 text-sm leading-8 text-slate-100 dark:text-slate-900">
                {definition}
              </p>
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300 dark:text-slate-700">
              {t.exam.conceptReturn}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
