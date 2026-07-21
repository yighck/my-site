import { recommendPlanFromDistilledData, type RecommendedPlan } from "@/lib/instrumentation-kb";
import { INSTRUMENTATION_VERSION } from "./version";
import type { InstrumentationResponse } from "./types";

function joinCleanLines(lines: Array<string | undefined>) {
  return lines
    .map((line) => line?.trim())
    .filter((line): line is string => Boolean(line))
    .join(" ");
}

function ensureList(items: string[] | undefined, fallback: string[]) {
  return items && items.length ? items : fallback;
}

function simplifyPlan(plan: RecommendedPlan) {
  const referencesText = plan.references?.length ? `参考题源：${plan.references.join("、")}。` : "";
  const matchedText = plan.matchedTerms?.length ? `识别关键词：${plan.matchedTerms.join("、")}。` : "";
  const reasoningText = plan.reasoning?.length ? `判断依据：${plan.reasoning.join("；")}。` : "";
  const overview =
    typeof plan.approach === "string"
      ? {
          hardware: plan.modules?.length
            ? [
                `建议优先按以下模块搭建：${plan.modules
                  .map((module) =>
                    `${module.title}${module.items.length ? `（${module.items.join("、")}）` : ""}`,
                  )
                  .join("；")}。`,
              ]
            : [],
          software: plan.approach ? [plan.approach] : [],
          integration: [
            ...((plan.risks ?? []).length
              ? [`实现时重点注意：${(plan.risks ?? []).join("；")}。`]
              : []),
            ...((plan.verification ?? []).length
              ? [`完成后优先验证：${(plan.verification ?? []).join("；")}。`]
              : []),
          ],
        }
      : {
          hardware: plan.approach.hardware ?? [],
          software: plan.approach.software ?? [],
          integration: plan.approach.integration ?? [],
        };

  return {
    title: plan.title || "电赛题目方案建议",
    judgement: joinCleanLines([
      plan.detectedFamily ? `题型判断：${plan.detectedFamily}。` : "",
      plan.summary,
      matchedText,
      reasoningText,
      referencesText,
    ]),
    overview,
    modules: plan.modules?.filter((module) => module.items?.length) ?? [],
    tuningSteps: ensureList(plan.tuningSteps, ["先保证主链路可运行，再逐项校准关键指标。"]),
  };
}

export function buildStaticInstrumentationPlan(topic: string, imageDataUrl?: string): InstrumentationResponse {
  if (!topic.trim()) {
    return {
      error: imageDataUrl
        ? "静态部署版暂不支持图片 OCR，请补充题目文字后再生成方案。"
        : "请至少提供题目文字。",
    };
  }

  const plan = simplifyPlan(recommendPlanFromDistilledData(topic, "zh"));

  return {
    plan,
    meta: {
      mode: "local-kb",
      ocrUsed: false,
      budgetNotice: imageDataUrl
        ? "当前为 GitHub Pages 静态部署版，图片 OCR 不可用；本次方案仅根据输入文字和本地知识库生成。"
        : "当前为 GitHub Pages 静态部署版，方案由浏览器内置本地知识库生成。",
      version: INSTRUMENTATION_VERSION,
    },
  };
}
