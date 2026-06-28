"use client";

import { INSTRUMENTATION_COPY } from "./content";
import type { InstrumentationPlan, PlanMeta } from "./types";
import { formatDisplayId, toDisplayPairs } from "./result-utils";

interface Props {
  plan: InstrumentationPlan | null;
  planMeta: PlanMeta | null;
  loading: boolean;
}

function SectionList({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;

  return (
    <div className="rounded-[24px] bg-white/6 p-4">
      <p className="text-sm font-semibold text-amber-200">{title}</p>
      <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
        {items.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </div>
  );
}

function RenderValue({ label, value }: { label: string; value: unknown }) {
  if (Array.isArray(value)) {
    if (value.length === 0) return null;

    const allStrings = value.every((item) => typeof item === "string");
    if (allStrings) {
      return <SectionList title={label} items={value as string[]} />;
    }

    return (
      <div className="rounded-[24px] bg-white/6 p-4">
        <p className="text-sm font-semibold text-amber-200">{label}</p>
        <div className="mt-3 space-y-4">
          {value.map((item, index) => (
            <div key={`${label}-${index}`} className="rounded-2xl bg-slate-950/28 p-4">
              <RenderValue label={`${label} ${index + 1}`} value={item} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (value && typeof value === "object") {
    const pairs = toDisplayPairs(value);
    if (!pairs.length) return null;

    return (
      <div className="rounded-[24px] bg-white/6 p-4">
        <p className="text-sm font-semibold text-amber-200">{label}</p>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          {pairs.map(([entryKey, entryValue]) => (
            <div key={`${label}-${entryKey}`} className="rounded-2xl bg-slate-950/28 p-4">
              <RenderValue label={formatDisplayId(entryKey)} value={entryValue} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (typeof value === "string") {
    return (
      <div className="rounded-[24px] bg-white/6 p-4">
        <p className="text-sm font-semibold text-amber-200">{label}</p>
        <p className="mt-3 text-sm leading-7 text-slate-200">{value}</p>
      </div>
    );
  }

  if (typeof value === "number") {
    return (
      <div className="rounded-[24px] bg-white/6 p-4">
        <p className="text-sm font-semibold text-amber-200">{label}</p>
        <p className="mt-3 text-sm leading-7 text-slate-200">{value}</p>
      </div>
    );
  }

  return null;
}

export default function ResultView({ plan, planMeta, loading }: Props) {
  if (!plan && !loading) {
    return (
      <div className="mt-6 rounded-[28px] border border-white/10 bg-white/6 p-5 text-sm leading-7 text-slate-200">
        <p>{INSTRUMENTATION_COPY.outputEmpty}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="mt-6 space-y-3">
        <div className="h-16 animate-pulse rounded-3xl bg-white/8" />
        <div className="h-24 animate-pulse rounded-3xl bg-white/8" />
        <div className="h-24 animate-pulse rounded-3xl bg-white/8" />
      </div>
    );
  }

  if (!plan) {
    return null;
  }

  const {
    title,
    summary,
    approach,
    references,
    detectedFamily,
    modules = [],
    tuningSteps = [],
    risks = [],
    verification = [],
    reasoning = [],
    matchedTerms = [],
    ...rest
  } = plan;

  return (
    <div className="mt-6 space-y-6">
      <section className="rounded-[28px] bg-white/6 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/80">
          {INSTRUMENTATION_COPY.planSummary}
        </p>
        <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-amber-500/18 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">
            {detectedFamily}
          </span>
          {references.map((reference) => (
            <span
              key={reference}
              className="rounded-full bg-white/8 px-3 py-1 text-xs font-medium text-slate-200"
            >
              {reference}
            </span>
          ))}
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-200">{summary}</p>
        <p className="mt-4 rounded-2xl bg-white/6 px-4 py-3 text-sm leading-7 text-slate-100">
          {approach}
        </p>
        {planMeta ? (
          <div className="mt-4 rounded-2xl border border-cyan-400/18 bg-cyan-500/8 px-4 py-3 text-sm leading-7 text-cyan-50">
            <p>
              {planMeta.mode === "local-kb-plus-ocr"
                ? INSTRUMENTATION_COPY.recommendationModeOcr
                : INSTRUMENTATION_COPY.recommendationModeLocal}
            </p>
            <p>
              {INSTRUMENTATION_COPY.ocrBudget}: {planMeta.ocrBudget.totalUsed.toLocaleString()} /{" "}
              {planMeta.ocrBudget.totalBudget.toLocaleString()} 令牌，{INSTRUMENTATION_COPY.remaining}
              {planMeta.ocrBudget.remaining.toLocaleString()}。
            </p>
            {planMeta.ocrUsage?.totalTokens ? (
              <p>
                {INSTRUMENTATION_COPY.requestOcrUsage}: {planMeta.ocrUsage.totalTokens.toLocaleString()} 令牌。
              </p>
            ) : null}
          </div>
        ) : null}
      </section>

      {matchedTerms.length || reasoning.length ? (
        <section className="grid gap-4 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <SectionList title="匹配依据" items={matchedTerms} />
          <SectionList title="为什么推荐这套方案" items={reasoning} />
        </section>
      ) : null}

      {modules.length ? (
        <section className="grid gap-4 md:grid-cols-2">
          {modules.map((module, index) => (
            <SectionList
              key={`${module.title}-${index}`}
              title={module.title}
              items={module.items}
            />
          ))}
        </section>
      ) : null}

      <section className="grid gap-4 md:grid-cols-3">
        <SectionList title={INSTRUMENTATION_COPY.tuningLabel} items={tuningSteps} />
        <SectionList title={INSTRUMENTATION_COPY.riskLabel} items={risks} />
        <SectionList title={INSTRUMENTATION_COPY.verifyLabel} items={verification} />
      </section>

      {Object.entries(rest).map(([key, value]) => (
        <RenderValue key={key} label={formatDisplayId(key)} value={value} />
      ))}
    </div>
  );
}
