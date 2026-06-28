import { NextRequest, NextResponse } from "next/server";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { recommendPlanFromDistilledData, type RecommendedPlan } from "@/lib/instrumentation-kb";

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
const OCR_BUDGET_FILE = path.join(process.cwd(), "data", "instrumentation-ocr-budget.json");

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

interface PlanResponseMeta {
  mode: "local-kb" | "local-kb-plus-ocr";
  ocrAttempted: boolean;
  ocrUsed: boolean;
  ocrBudget: {
    totalBudget: number;
    totalUsed: number;
    remaining: number;
    requestReserve: number;
  };
  ocrUsage?: OcrUsage;
  budgetNotice?: string;
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
    "尽量完整提取目标、指标、限制条件、输入输出要求和评分相关内容。",
    "如果图片里有分条、编号或表格，请保留原有结构。",
    "不要编造缺失内容，不要补建议，只输出提取后的题目文字。",
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
    return `OCR 总预算受 1M 以内硬上限约束，当前已自动切换为纯本地蒸馏推荐。剩余预算约 ${remaining} 令牌。`;
  }

  if (!usage || usage.totalTokens <= 0) {
    return `本次未走模型生成方案；文本题目直接使用本地蒸馏知识库。当前 OCR 预算仍受 1M 以内硬上限约束，剩余约 ${remaining} 令牌。`;
  }

  return `本次仅在识图阶段消耗了 ${usage.totalTokens} 令牌，方案推荐仍然完全来自本地蒸馏知识库。当前 OCR 总预算保持在 1M 以内，剩余约 ${remaining} 令牌。`;
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

function finalizePlan(plan: RecommendedPlan) {
  return plan;
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as RequestBody;
  const topic = body.topic?.trim();
  const imageDataUrl = body.imageDataUrl?.trim();
  const apiKey = process.env.OPENAI_API_KEY;
  const model = DEFAULT_OCR_MODEL;

  if (!topic && !imageDataUrl) {
    return NextResponse.json(
      {
        error: "请至少提供题目文字或题目截图。",
      },
      { status: 400 },
    );
  }

  if (imageDataUrl && !apiKey && !topic) {
    return NextResponse.json(
      {
        error: "当前只上传图片时需要配置 OpenAI OCR 接口密钥，例如 OPENAI_API_KEY。",
      },
      { status: 500 },
    );
  }

  let mergedTopic = topic ?? "";
  let budgetState = await readOcrBudgetState();
  let ocrUsage: OcrUsage | undefined;
  let ocrAttempted = false;
  let ocrUsed = false;
  let forcedTextOnly = false;

  if (shouldRunImageOcr(topic, imageDataUrl, apiKey)) {
    const remainingBudget = Math.max(0, budgetState.totalBudget - budgetState.totalUsed);

    if (remainingBudget < OCR_REQUEST_TOKEN_RESERVE) {
      forcedTextOnly = true;
    } else {
      ocrAttempted = true;

      try {
        const extracted = await extractProblemTextFromImage(apiKey as string, imageDataUrl as string, model);
        ocrUsage = extracted.usage;
        ocrUsed = extracted.usage.totalTokens > 0 || extracted.text.trim().length > 0;

        if (extracted.text.trim()) {
          mergedTopic = mergedTopic ? `${mergedTopic}\n\n${extracted.text.trim()}` : extracted.text.trim();
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
          await writeOcrBudgetState(budgetState);
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
          ? "当前 OCR 预算已受限，请补充题目文字后再生成方案。"
          : "未能从图片中提取有效题目文字，请补一段文字说明后重试。",
      },
      { status: 400 },
    );
  }

  const plan = finalizePlan(recommendPlanFromDistilledData(mergedTopic, "zh"));
  const meta: PlanResponseMeta = {
    mode: ocrUsed ? "local-kb-plus-ocr" : "local-kb",
    ocrAttempted,
    ocrUsed,
    ocrBudget: {
      totalBudget: budgetState.totalBudget,
      totalUsed: budgetState.totalUsed,
      remaining: Math.max(0, budgetState.totalBudget - budgetState.totalUsed),
      requestReserve: OCR_REQUEST_TOKEN_RESERVE,
    },
    ocrUsage,
    budgetNotice: buildBudgetNotice(budgetState, ocrUsage, forcedTextOnly),
  };

  return NextResponse.json({ plan, meta });
}
