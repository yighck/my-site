"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "@/i18n/LanguageContext";

gsap.registerPlugin(useGSAP);

interface Props {
  index: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export default function PracticeQuiz({
  index,
  question,
  options,
  answer,
  explanation,
}: Props) {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const scope = useRef<HTMLDivElement>(null);
  const explanationRef = useRef<HTMLDivElement>(null);

  const hasAnswered = selected !== null;
  const isCorrect = selected === answer;

  useGSAP(
    () => {
      gsap.from(".quiz-shell", {
        y: 18,
        autoAlpha: 0,
        duration: 0.52,
        ease: "power2.out",
      });
    },
    { scope },
  );

  useGSAP(
    () => {
      if (!explanationRef.current) {
        return;
      }

      if (showExplanation) {
        gsap.fromTo(
          explanationRef.current,
          { height: 0, autoAlpha: 0 },
          { height: "auto", autoAlpha: 1, duration: 0.42, ease: "power2.out" },
        );
        return;
      }

      gsap.set(explanationRef.current, { height: 0, autoAlpha: 0 });
    },
    { scope, dependencies: [showExplanation], revertOnUpdate: true },
  );

  const choose = (optionIndex: number) => {
    if (hasAnswered) {
      return;
    }

    setSelected(optionIndex);
    setShowExplanation(true);
  };

  return (
    <div ref={scope} className="quiz-shell rounded-[30px] border border-white/60 bg-white/82 p-6 shadow-[0_22px_55px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/62">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white dark:bg-cyan-300 dark:text-slate-950">
          {t.exam.questionLabel.replace("{number}", String(index + 1))}
        </span>
        {hasAnswered && (
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
            isCorrect
              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/14 dark:text-emerald-300"
              : "bg-rose-100 text-rose-700 dark:bg-rose-500/14 dark:text-rose-300"
          }`}>
            {isCorrect
              ? t.exam.quizCorrect
              : t.exam.quizRetry}
          </span>
        )}
      </div>

      <h3 className="mt-5 text-lg font-semibold leading-8 text-slate-950 dark:text-white">
        {question}
      </h3>

      <div className="mt-6 space-y-3">
        {options.map((option, optionIndex) => {
          let stateClass =
            "border-slate-200 bg-white text-slate-700 hover:border-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-cyan-300/40";

          if (hasAnswered) {
            if (optionIndex === answer) {
              stateClass =
                "border-emerald-400 bg-emerald-50 text-emerald-900 dark:bg-emerald-500/14 dark:text-emerald-100";
            } else if (optionIndex === selected && !isCorrect) {
              stateClass =
                "border-rose-400 bg-rose-50 text-rose-900 dark:bg-rose-500/14 dark:text-rose-100";
            }
          }

          return (
            <button
              key={`${option}-${optionIndex}`}
              type="button"
              onClick={() => choose(optionIndex)}
              disabled={hasAnswered}
              className={`flex w-full items-start gap-3 rounded-2xl border px-4 py-4 text-left text-sm leading-7 transition-colors ${stateClass} ${
                hasAnswered ? "cursor-default" : "cursor-pointer"
              }`}
            >
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white dark:bg-cyan-300 dark:text-slate-950">
                {String.fromCharCode(65 + optionIndex)}
              </span>
              <span>{option}</span>
            </button>
          );
        })}
      </div>

      {hasAnswered && (
        <div className="mt-5">
          <button
            type="button"
            onClick={() => setShowExplanation((prev) => !prev)}
            className="text-sm font-semibold text-sky-600 transition-colors hover:text-sky-700 dark:text-cyan-300 dark:hover:text-cyan-200"
          >
            {showExplanation ? t.exam.hideExplanation : t.exam.showExplanation}
          </button>

          <div ref={explanationRef} className="overflow-hidden">
            <div className="mt-4 rounded-2xl bg-slate-100 p-4 text-sm leading-7 text-slate-700 dark:bg-white/6 dark:text-slate-200">
              {explanation}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
