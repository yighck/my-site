"use client";

import { INSTRUMENTATION_COPY } from "./content";
import type { InstrumentationPlan, PlanMeta } from "./types";

interface Props {
  plan: InstrumentationPlan | null;
  planMeta: PlanMeta | null;
  loading: boolean;
}

function SectionList({ title, items }: { title: string; items: string[] }) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="rounded-[24px] bg-white/6 p-4">
      <h4 className="text-sm font-semibold text-amber-200">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
        {items.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </section>
  );
}

function OverviewBlock({ title, items }: { title: string; items: string[] }) {
  if (!items.length) {
    return null;
  }

  return (
    <div className="rounded-[20px] bg-white/5 p-4">
      <h5 className="text-sm font-semibold text-amber-200">{title}</h5>
      <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
        {items.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </div>
  );
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

  return (
    <div className="mt-6 space-y-6">
      <section className="rounded-[28px] bg-white/6 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/80">
          {INSTRUMENTATION_COPY.outputTitle}
        </p>
        <h3 className="mt-3 text-2xl font-semibold">{plan.title}</h3>
        {planMeta ? (
          <div className="mt-4 space-y-3">
            <p className="rounded-2xl bg-cyan-500/10 px-4 py-3 text-sm leading-7 text-cyan-100">
              {planMeta.mode === "local-kb-plus-ocr"
                ? INSTRUMENTATION_COPY.recommendationModeOcr
                : INSTRUMENTATION_COPY.recommendationModeLocal}
            </p>
            {planMeta.version ? (
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/80">
                {INSTRUMENTATION_COPY.versionLabel}: {planMeta.version}
              </p>
            ) : null}
          </div>
        ) : null}
      </section>

      <section className="rounded-[24px] bg-white/6 p-4">
        <h4 className="text-sm font-semibold text-amber-200">
          {INSTRUMENTATION_COPY.judgementLabel}
        </h4>
        <p className="mt-3 text-sm leading-7 text-slate-200">{plan.judgement}</p>
      </section>

      <section className="rounded-[24px] bg-white/6 p-4">
        <h4 className="text-sm font-semibold text-amber-200">
          {INSTRUMENTATION_COPY.overviewLabel}
        </h4>
        <div className="mt-3 grid gap-4 md:grid-cols-3">
          <OverviewBlock title="硬件模块" items={plan.overview.hardware} />
          <OverviewBlock title="软件思路" items={plan.overview.software} />
          <OverviewBlock title="联调顺序" items={plan.overview.integration} />
        </div>
      </section>

      {plan.modules.length ? (
        <section className="space-y-4">
          <h4 className="text-sm font-semibold text-amber-200">
            {INSTRUMENTATION_COPY.moduleLabel}
          </h4>
          <div className="grid gap-4 md:grid-cols-2">
            {plan.modules.map((module) => (
              <SectionList key={module.title} title={module.title} items={module.items} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="space-y-4">
        <h4 className="text-sm font-semibold text-amber-200">
          {INSTRUMENTATION_COPY.tuningLabel}
        </h4>
        <SectionList title={INSTRUMENTATION_COPY.tuningLabel} items={plan.tuningSteps} />
      </section>
    </div>
  );
}
