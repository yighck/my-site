"use client";

import { useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { EXAMPLE_TOPICS, INSTRUMENTATION_COPY } from "./content";
import { compressInstrumentationImage, validateInstrumentationImage } from "./image";
import ResultView from "./ResultView";
import { buildStaticInstrumentationPlan } from "./staticPlan";
import type { InstrumentationResponse, InstrumentationPlan, PlanMeta } from "./types";
import { INSTRUMENTATION_VERSION } from "./version";

gsap.registerPlugin(useGSAP);

const IS_STATIC_EXPORT = process.env.NEXT_PUBLIC_STATIC_EXPORT === "1";

export default function InstrumentationContent() {
  const scope = useRef<HTMLElement>(null);
  const [topic, setTopic] = useState("");
  const [imageDataUrl, setImageDataUrl] = useState("");
  const [plan, setPlan] = useState<InstrumentationPlan | null>(null);
  const [planMeta, setPlanMeta] = useState<PlanMeta | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageStatus, setImageStatus] = useState("");

  const examples = useMemo(() => EXAMPLE_TOPICS, []);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          isDesktop: "(min-width: 960px)",
        },
        (context) => {
          const conditions = context.conditions ?? {};
          const reduceMotion = Boolean(conditions.reduceMotion);
          const isDesktop = Boolean(conditions.isDesktop);
          const duration = reduceMotion ? 0 : 0.82;

          const intro = gsap.timeline({
            defaults: { duration, ease: "power3.out" },
          });

          intro
            .from(".solver-badge", { y: 18, autoAlpha: 0 })
            .from(".solver-title-line", { yPercent: 30, autoAlpha: 0, stagger: 0.08 }, "<0.08")
            .from(".solver-copy", { y: 22, autoAlpha: 0 }, "-=0.42")
            .from(".solver-card", { y: 26, autoAlpha: 0, stagger: 0.08 }, "-=0.22");

          if (!reduceMotion && isDesktop) {
            gsap.to(".solver-orb", {
              y: (index) => (index % 2 === 0 ? -18 : 14),
              x: (index) => (index === 0 ? -12 : 10),
              duration: (index) => 4.8 + index,
              ease: "sine.inOut",
              force3D: true,
              repeat: -1,
              yoyo: true,
            });
          }
        },
      );

      return () => media.revert();
    },
    { scope },
  );

  async function readInstrumentationResponse(response: Response) {
    const contentType = response.headers.get("content-type") ?? "";
    const rawText = await response.text();

    if (contentType.includes("application/json")) {
      try {
        return JSON.parse(rawText) as InstrumentationResponse;
      } catch {
        throw new Error("接口返回了无效的 JSON 数据，请刷新页面后重试。");
      }
    }

    const compactText = rawText.replace(/\s+/g, " ").trim();
    const preview = compactText.slice(0, 120);
    throw new Error(
      preview
        ? `接口没有返回 JSON，可能是服务端报错了：${preview}`
        : "接口没有返回 JSON，可能是服务端报错了。",
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = topic.trim();
    if (!trimmed && !imageDataUrl) {
      setError(INSTRUMENTATION_COPY.emptyTopic);
      return;
    }

    setLoading(true);
    setError("");
    setPlan(null);
    setPlanMeta(null);

    try {
      if (IS_STATIC_EXPORT) {
        const data = buildStaticInstrumentationPlan(trimmed, imageDataUrl);
        if (!data.plan) {
          throw new Error(data.error || INSTRUMENTATION_COPY.requestFailed);
        }

        setPlan(data.plan);
        setPlanMeta(data.meta ?? null);
        return;
      }

      const response = await fetch("/api/instrumentation-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic: trimmed,
          imageDataUrl,
        }),
      });

      const data = await readInstrumentationResponse(response);
      if (!response.ok || !data?.plan) {
        throw new Error(data?.error || INSTRUMENTATION_COPY.requestFailed);
      }

      setPlan(data.plan);
      setPlanMeta(data.meta ?? null);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error ? submissionError.message : INSTRUMENTATION_COPY.requestFailed,
      );
    } finally {
      setLoading(false);
    }
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const validationMessage = validateInstrumentationImage(file);
    if (validationMessage) {
      setError(validationMessage);
      return;
    }

    setImageStatus(INSTRUMENTATION_COPY.imageProcessing);
    void compressInstrumentationImage(file)
      .then((result) => {
        setImageDataUrl(result);
        setError("");
        setImageStatus(INSTRUMENTATION_COPY.imageOptimized);
      })
      .catch((imageError) => {
        setError(
          imageError instanceof Error ? imageError.message : INSTRUMENTATION_COPY.imageReadError,
        );
        setImageStatus("");
      });
    event.target.value = "";
  }

  return (
    <main ref={scope} className="relative overflow-hidden">
      <div className="solver-orb pointer-events-none absolute left-8 top-20 h-44 w-44 rounded-full bg-amber-400/18 blur-3xl dark:bg-amber-400/12" />
      <div className="solver-orb pointer-events-none absolute right-0 top-44 h-64 w-64 rounded-full bg-cyan-500/16 blur-3xl dark:bg-cyan-500/16" />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_22rem] lg:items-start">
          <div className="solver-card rounded-[34px] border border-white/60 bg-white/78 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/68">
            <span className="solver-badge inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200">
              {INSTRUMENTATION_COPY.badge}
            </span>

            <div className="mt-6 space-y-2 text-[clamp(2.5rem,5vw,4.8rem)] font-semibold tracking-tight text-slate-950 dark:text-white">
              <div className="solver-title-line">{INSTRUMENTATION_COPY.heroLine1}</div>
              <div className="solver-title-line bg-gradient-to-r from-amber-500 via-orange-500 to-cyan-500 bg-clip-text text-transparent">
                {INSTRUMENTATION_COPY.heroLine2}
              </div>
            </div>

            <p className="solver-copy mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
              {INSTRUMENTATION_COPY.heroCopy}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50/80 px-3 py-1.5 text-xs text-slate-500 dark:border-white/10 dark:bg-white/6 dark:text-slate-300">
              <span className="font-semibold text-slate-700 dark:text-white">
                {INSTRUMENTATION_COPY.deployMarker}
              </span>
              <span className="opacity-70">
                {INSTRUMENTATION_COPY.versionLabel}: {INSTRUMENTATION_VERSION}
              </span>
            </div>
          </div>

          <aside className="solver-card rounded-[28px] border border-white/60 bg-slate-950 p-6 text-white shadow-[0_24px_80px_rgba(8,15,35,0.22)] dark:border-white/10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-200/80">
              {INSTRUMENTATION_COPY.sidebarLabel}
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              {INSTRUMENTATION_COPY.sidebarTitle}
            </h2>
            <div className="mt-6 space-y-4">
              {INSTRUMENTATION_COPY.sidebarSteps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl bg-white/6 p-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-300 text-sm font-semibold text-slate-950">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-7 text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <section className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="solver-card rounded-[30px] border border-white/60 bg-white/82 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/66">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              {INSTRUMENTATION_COPY.inputLabel}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {INSTRUMENTATION_COPY.inputTitle}
            </h2>

            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              <textarea
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
                placeholder={INSTRUMENTATION_COPY.placeholder}
                className="min-h-56 w-full rounded-[28px] border border-slate-200/80 bg-slate-50/90 px-5 py-4 text-sm leading-7 text-slate-700 outline-none transition-colors focus:border-amber-300 focus:bg-white dark:border-white/10 dark:bg-white/6 dark:text-slate-100 dark:focus:border-amber-400/60"
              />

              <div className="rounded-[28px] border border-dashed border-slate-300/80 bg-slate-50/70 p-5 dark:border-white/12 dark:bg-white/6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {INSTRUMENTATION_COPY.imageLabel}
                    </p>
                    <p className="mt-1 text-sm leading-7 text-slate-500 dark:text-slate-400">
                      {INSTRUMENTATION_COPY.imageHint}
                    </p>
                  </div>
                  <label className="inline-flex cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-amber-300 dark:text-slate-950 dark:hover:bg-amber-200">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                    {imageDataUrl
                      ? INSTRUMENTATION_COPY.imageReplace
                      : INSTRUMENTATION_COPY.imageUpload}
                  </label>
                </div>

                {imageDataUrl ? (
                  <div className="mt-5 overflow-hidden rounded-[24px] border border-slate-200/80 bg-white p-3 dark:border-white/10 dark:bg-slate-950/70">
                    <img
                      src={imageDataUrl}
                      alt={INSTRUMENTATION_COPY.imageAlt}
                      className="max-h-80 w-full rounded-[18px] object-contain"
                    />
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        {imageStatus || INSTRUMENTATION_COPY.imageReady}
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setImageDataUrl("");
                          setImageStatus("");
                        }}
                        className="rounded-full border border-slate-200/80 px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:border-rose-300 hover:text-rose-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-rose-400/40 dark:hover:text-rose-300"
                      >
                        {INSTRUMENTATION_COPY.imageRemove}
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="flex flex-wrap gap-3">
                {examples.map((example) => (
                  <button
                    key={example}
                    type="button"
                    onClick={() => setTopic(example)}
                    className="rounded-full border border-slate-200/80 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-600 transition-colors hover:border-amber-300 hover:bg-amber-50 dark:border-white/10 dark:bg-white/6 dark:text-slate-300 dark:hover:border-amber-400/40 dark:hover:bg-amber-500/10"
                  >
                    {example}
                  </button>
                ))}
              </div>

              {error ? (
                <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm leading-7 text-rose-700 dark:border-rose-500/20 dark:bg-rose-500/10 dark:text-rose-200">
                  {error}
                </div>
              ) : null}

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-amber-300 dark:text-slate-950 dark:hover:bg-amber-200"
                >
                  {loading ? INSTRUMENTATION_COPY.generating : INSTRUMENTATION_COPY.submit}
                </button>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {INSTRUMENTATION_COPY.helperText}
                </p>
              </div>

              {planMeta?.budgetNotice ? (
                <div className="rounded-2xl border border-cyan-200/70 bg-cyan-50/80 px-4 py-3 text-sm leading-7 text-cyan-900 dark:border-cyan-400/20 dark:bg-cyan-500/10 dark:text-cyan-100">
                  {planMeta.budgetNotice}
                </div>
              ) : null}
            </form>
          </div>

          <div className="solver-card rounded-[30px] border border-white/60 bg-slate-950 p-6 text-white shadow-[0_24px_60px_rgba(8,15,35,0.22)] dark:border-white/10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
              {INSTRUMENTATION_COPY.outputLabel}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              {INSTRUMENTATION_COPY.outputTitle}
            </h2>

            <ResultView plan={plan} planMeta={planMeta} loading={loading} />
          </div>
        </section>
      </section>
    </main>
  );
}
