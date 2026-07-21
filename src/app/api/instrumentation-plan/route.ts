import { NextRequest, NextResponse } from "next/server";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { recommendPlanFromDistilledData, type RecommendedPlan } from "@/lib/instrumentation-kb";
import { INSTRUMENTATION_VERSION } from "@/app/instrumentation/version";

function normalizeOpenAiBaseUrl(baseUrl: string | undefined) {
  const fallback = "https://api.openai.com/v1";
  const raw = baseUrl?.trim();
  if (!raw) {
    return fallback;
  }

  return raw.replace(/\/+$/, "");
}

const OPENAI_BASE_URL = normalizeOpenAiBaseUrl(process.env.OPENAI_BASE_URL);
const OPENAI_API_URL = `${OPENAI_BASE_URL}/responses`;
const DEFAULT_OCR_MODEL = process.env.OPENAI_OCR_MODEL || process.env.OPENAI_MODEL || "gpt-4.1-mini";
const OCR_OUTPUT_TOKEN_LIMIT = 480;
const OCR_TEXT_PRIORITY_THRESHOLD = 96;
const HARD_OCR_TOTAL_TOKEN_BUDGET_CAP = 1_000_000;
const OCR_BUDGET_FILE = path.join(os.tmpdir(), "instrumentation-ocr-budget.json");

function parsePositiveIntegerEnv(value: string | undefined, fallback: number, cap?: number) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return fallback;
  }

  const normalized = Math.floor(parsed);
  return typeof cap === "number" ? Math.min(normalized, cap) : normalized;
}

const OCR_TOTAL_TOKEN_BUDGET = parsePositiveIntegerEnv(
  process.env.INSTRUMENTATION_OCR_TOKEN_BUDGET,
  HARD_OCR_TOTAL_TOKEN_BUDGET_CAP,
  HARD_OCR_TOTAL_TOKEN_BUDGET_CAP,
);
const OCR_REQUEST_TOKEN_RESERVE = parsePositiveIntegerEnv(
  process.env.INSTRUMENTATION_OCR_REQUEST_RESERVE,
  12_000,
  OCR_TOTAL_TOKEN_BUDGET,
);

export const runtime = "nodejs";

interface RequestBody {
  topic?: string;
  imageDataUrl?: string;
}

interface OcrBudgetState {
  totalBudget: number;
  totalUsed: number;
  updatedAt: string;
}

interface OcrUsage {
  inputTokens: number;
  outputTokens: number;
  totalTokens: number;
}

interface OcrExtractionResult {
  text: string;
  usage: OcrUsage;
}

interface SimplePlanSection {
  title: string;
  items: string[];
}

interface SimplePlanOverview {
  hardware: string[];
  software: string[];
  integration: string[];
}

interface SimplePlan {
  title: string;
  judgement: string;
  overview: SimplePlanOverview;
  modules: SimplePlanSection[];
  tuningSteps: string[];
}

interface PlanResponseMeta {
  mode: "local-kb" | "local-kb-plus-ocr";
  ocrUsed: boolean;
  budgetNotice?: string;
  version?: string;
}

function shouldRunImageOcr(topic: string | undefined, imageDataUrl: string | undefined, apiKey?: string) {
  if (!imageDataUrl || !apiKey) {
    return false;
  }

  if (!topic) {
    return true;
  }

  return topic.length < OCR_TEXT_PRIORITY_THRESHOLD;
}

function buildVisionPrompt() {
  return [
    "你只负责识别图片里的电赛题目文字，不负责生成方案。",
    "请尽量完整提取目标、指标、限制条件、输入输出要求和评分相关内容。",
    "如果图片里有分条、编号或表格，请保留原有结构。",
    "不要编造缺失内容，不要补充建议，只输出提取后的题目文字。",
  ].join("\n");
}

function extractOutputText(data: unknown): string | null {
  if (!data || typeof data !== "object") {
    return null;
  }

  const candidate = (data as { output_text?: unknown }).output_text;
  if (typeof candidate === "string" && candidate.trim()) {
    return candidate;
  }

  const output = (data as { output?: unknown }).output;
  if (!Array.isArray(output)) {
    return null;
  }

  for (const item of output) {
    if (!item || typeof item !== "object") {
      continue;
    }

    const content = (item as { content?: unknown }).content;
    if (!Array.isArray(content)) {
      continue;
    }

    for (const contentItem of content) {
      if (!contentItem || typeof contentItem !== "object") {
        continue;
      }

      const textValue = (contentItem as { text?: unknown }).text;
      if (typeof textValue === "string" && textValue.trim()) {
        return textValue;
      }
    }
  }

  return null;
}

function readUsageValue(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

function extractUsage(data: unknown): OcrUsage {
  if (!data || typeof data !== "object") {
    return { inputTokens: 0, outputTokens: 0, totalTokens: 0 };
  }

  const usage = (data as { usage?: unknown }).usage;
  if (!usage || typeof usage !== "object") {
    return { inputTokens: 0, outputTokens: 0, totalTokens: 0 };
  }

  const inputTokens = readUsageValue((usage as { input_tokens?: unknown }).input_tokens);
  const outputTokens = readUsageValue((usage as { output_tokens?: unknown }).output_tokens);
  const totalTokens =
    readUsageValue((usage as { total_tokens?: unknown }).total_tokens) || inputTokens + outputTokens;

  return {
    inputTokens,
    outputTokens,
    totalTokens,
  };
}

async function ensureBudgetFile() {
  await mkdir(path.dirname(OCR_BUDGET_FILE), { recursive: true });
}

async function readOcrBudgetState(): Promise<OcrBudgetState> {
  try {
    const content = await readFile(OCR_BUDGET_FILE, "utf8");
    const parsed = JSON.parse(content) as Partial<OcrBudgetState>;
    const parsedBudget =
      typeof parsed.totalBudget === "number" && Number.isFinite(parsed.totalBudget)
        ? parsed.totalBudget
        : OCR_TOTAL_TOKEN_BUDGET;
    const totalBudget = Math.min(parsedBudget, OCR_TOTAL_TOKEN_BUDGET);
    const parsedUsed =
      typeof parsed.totalUsed === "number" && Number.isFinite(parsed.totalUsed) ? parsed.totalUsed : 0;
    const totalUsed = Math.min(Math.max(parsedUsed, 0), totalBudget);

    return {
      totalBudget,
      totalUsed,
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : new Date(0).toISOString(),
    };
  } catch {
    return {
      totalBudget: OCR_TOTAL_TOKEN_BUDGET,
      totalUsed: 0,
      updatedAt: new Date(0).toISOString(),
    };
  }
}

async function writeOcrBudgetState(state: OcrBudgetState) {
  await ensureBudgetFile();
  await writeFile(OCR_BUDGET_FILE, JSON.stringify(state, null, 2), "utf8");
}

function buildBudgetNotice(state: OcrBudgetState, usage?: OcrUsage, forcedTextOnly?: boolean) {
  const remaining = Math.max(0, state.totalBudget - state.totalUsed);

  if (forcedTextOnly) {
    return `OCR 预算已接近上限，当前已自动切换为仅使用本地知识库。剩余可用预算约 ${remaining} 令牌。`;
  }

  if (!usage || usage.totalTokens <= 0) {
    return `本次未使用 OCR，方案直接来自本地知识库。当前剩余 OCR 预算约 ${remaining} 令牌。`;
  }

  return `本次 OCR 识别消耗约 ${usage.totalTokens} 令牌，方案生成仍然主要依赖本地知识库。当前剩余 OCR 预算约 ${remaining} 令牌。`;
}

async function extractProblemTextFromImage(
  apiKey: string,
  imageDataUrl: string,
  model: string,
): Promise<OcrExtractionResult> {
  const response = await fetch(OPENAI_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      max_output_tokens: OCR_OUTPUT_TOKEN_LIMIT,
      reasoning: { effort: "minimal" },
      input: [
        {
          role: "developer",
          content: [
            {
              type: "input_text",
              text: buildVisionPrompt(),
            },
          ],
        },
        {
          role: "user",
          content: [
            {
              type: "input_image",
              image_url: imageDataUrl,
              detail: "low",
            },
          ],
        },
      ],
    }),
  });

  const data = (await response.json()) as unknown;

  if (!response.ok) {
    const message =
      typeof data === "object" &&
      data !== null &&
      "error" in data &&
      typeof (data as { error?: { message?: unknown } }).error?.message === "string"
        ? (data as { error: { message: string } }).error.message
        : "题目图片识别失败。";

    throw new Error(message);
  }

  return {
    text: extractOutputText(data) ?? "",
    usage: extractUsage(data),
  };
}

function joinCleanLines(lines: Array<string | undefined>) {
  return lines
    .map((line) => line?.trim())
    .filter((line): line is string => Boolean(line))
    .join(" ");
}

function ensureList(items: string[] | undefined, fallback: string[]) {
  return items && items.length ? items : fallback;
}

function simplifyPlan(plan: RecommendedPlan): SimplePlan {
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

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as RequestBody;
    const topic = body.topic?.trim();
    const imageDataUrl = body.imageDataUrl?.trim();
    const apiKey = process.env.OPENAI_API_KEY;
    const model = DEFAULT_OCR_MODEL;

    if (!topic && !imageDataUrl) {
      return NextResponse.json(
        {
          error: "请至少提供题目文字或题目图片。",
        },
        { status: 400 },
      );
    }

    if (imageDataUrl && !apiKey && !topic) {
      return NextResponse.json(
        {
          error: "当前只有图片输入时，需要先配置 OCR 所需的 OPENAI_API_KEY。",
        },
        { status: 500 },
      );
    }

    let mergedTopic = topic ?? "";
    let budgetState = await readOcrBudgetState();
    let ocrUsage: OcrUsage | undefined;
    let ocrUsed = false;
    let forcedTextOnly = false;

    if (shouldRunImageOcr(topic, imageDataUrl, apiKey)) {
      const remainingBudget = Math.max(0, budgetState.totalBudget - budgetState.totalUsed);

      if (remainingBudget < OCR_REQUEST_TOKEN_RESERVE) {
        forcedTextOnly = true;
      } else {
        try {
          const extracted = await extractProblemTextFromImage(apiKey as string, imageDataUrl as string, model);
          ocrUsage = extracted.usage;
          ocrUsed = extracted.usage.totalTokens > 0 || extracted.text.trim().length > 0;

          if (extracted.text.trim()) {
            mergedTopic = mergedTopic
              ? `${mergedTopic}\n\n${extracted.text.trim()}`
              : extracted.text.trim();
          }

          if (extracted.usage.totalTokens > 0) {
            budgetState = {
              totalBudget: budgetState.totalBudget,
              totalUsed: Math.min(
                budgetState.totalBudget,
                budgetState.totalUsed + extracted.usage.totalTokens,
              ),
              updatedAt: new Date().toISOString(),
            };
            await writeOcrBudgetState(budgetState).catch((error) => {
              console.warn("failed to persist OCR budget state", error);
            });
          }
        } catch (error) {
          if (!mergedTopic) {
            return NextResponse.json(
              {
                error: error instanceof Error ? error.message : "题目图片识别失败，请稍后重试。",
              },
              { status: 502 },
            );
          }
        }
      }
    }

    if (!mergedTopic) {
      return NextResponse.json(
        {
          error: forcedTextOnly
            ? "当前 OCR 预算不足，请补充题目文字后再生成方案。"
            : "未能从图片中提取有效题目文字，请补充文字说明后再试。",
        },
        { status: 400 },
      );
    }

    const plan = simplifyPlan(recommendPlanFromDistilledData(mergedTopic, "zh"));
    const meta: PlanResponseMeta = {
      mode: ocrUsed ? "local-kb-plus-ocr" : "local-kb",
      ocrUsed,
      budgetNotice: buildBudgetNotice(budgetState, ocrUsage, forcedTextOnly),
      version: INSTRUMENTATION_VERSION,
    };

    return NextResponse.json(
      { plan, meta },
      {
        headers: {
          "x-instrumentation-version": INSTRUMENTATION_VERSION,
        },
      },
    );
  } catch (error) {
    console.error("instrumentation-plan route error", error);

    return NextResponse.json(
      {
        error: error instanceof Error ? `服务端处理失败：${error.message}` : "服务端处理失败，请稍后重试。",
      },
      {
        status: 500,
        headers: {
          "x-instrumentation-version": INSTRUMENTATION_VERSION,
        },
      },
    );
  }
}
