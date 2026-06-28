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
  lang?: "en" | "zh";
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

function localizePlanStringForZh(text: string): string {
  return text
    .replace(/^Distilled Backbone$/g, "蒸馏主线")
    .replace(/^Route Focus$/g, "路线落点")
    .replace(/^Secondary family add-on:\s*/g, "次级题型补充：")
    .replace(/^\?+\s*/g, "次级题型补充：")
    .replace(/^Primary family match:\s*/g, "主判定题型：")
    .replace(/^Matched cues:\s*/g, "命中的关键词：")
    .replace(/^Preferred route:\s*/g, "优先落地路线：")
    .replace(/^Closest historical matches:\s*/g, "最接近的历年题：")
    .replace(/^Reference problems:\s*/g, "参考题目：")
    .replace(/^Distilled backbone:\s*/g, "蒸馏主线：")
    .replace(/^Secondary family overlap:\s*/g, "次级关联题型：")
    .replace(/^Preferred implementation route:\s*/g, "优先落地路线：")
    .replace(/^Hardware gate:\s*/g, "硬件前提：")
    .replace(/^Problem cues that pushed this route:\s*/g, "推动该路线的题面线索：")
    .replace(/^Stabilize these target outputs first:\s*/g, "先把这些结果测稳：")
    .replace(/^Closest distilled historical match:\s*/g, "最近的历年映射题：")
    .replace(/^Distilled family backbone:\s*/g, "蒸馏主线：")
    .replace(
      /^No strong explicit cue was found, so the plan falls back to the common instrumentation chain\.$/g,
      "题面没有特别强的显式关键词，因此先按通用仪器仪表测量链路兜底。",
    )
    .replace(
      /^The statement appears concentrated in one family, so the recommendation keeps the main chain focused\.$/g,
      "当前题面更集中于单一题型，建议优先把主链路做深做稳。",
    )
    .replace(
      /^Within this family, the closest implementation route is:\s*(.+)\.$/g,
      "在该题型里，当前最贴近的落地路线是：$1。",
    )
    .replace(
      /^The recommendation starts from the default route of this family:\s*(.+)\.$/g,
      "当前先采用该题型的默认落地路线：$1。",
    )
    .replace(
      /^No route card matched strongly, so the recommendation starts from the family backbone\.$/g,
      "当前没有命中特别明确的路线卡，因此先沿主题型的标准链路推进。",
    )
    .replace(
      /^This family was also reinforced by distilled trigger cues:\s*(.+)\.$/g,
      "蒸馏触发线索也在强化该判断：$1。",
    )
    .replace(
      /^Statement-pattern matches also reinforced this family:\s*(.+)\.$/g,
      "题面表述模式也在支持该题型：$1。",
    )
    .replace(
      /^Family lexicon matches also reinforced this family:\s*(.+)\.$/g,
      "题型词汇也在支持该题型：$1。",
    )
    .replace(
      /^Pairwise family-boundary checks also shaped this match against:\s*(.+)\.$/g,
      "和以下竞争题型做过边界区分：$1。",
    )
    .replace(
      /^Contrastive wording in the statement also favored this family over:\s*(.+)\.$/g,
      "题面中的对比式表述也更偏向该题型，而不是：$1。",
    )
    .replace(
      /^The database also checked near-miss routes and kept this family after comparing against:\s*(.+)\.$/g,
      "数据库还比对了近似误判路线，最终没有切过去：$1。",
    )
    .replace(
      /^Competing-family cues were detected and suppressed through disambiguation:\s*(.+)\.$/g,
      "也检测到了竞争题型线索，并通过区分条件压下：$1。",
    )
    .replace(
      /^The database also surfaced route-rejection cues that should cap overclaiming:\s*(.+)\.$/g,
      "数据库还识别到需要控制过度宣称的否决信号：$1。",
    )
    .replace(
      /^The output is driven by the local distilled instrumentation database\.$/g,
      "推荐结果优先来自本地蒸馏题库，而不是自由生成。",
    );
}

function deepLocalizePlanForZh<T>(value: T): T {
  if (typeof value === "string") {
    return localizePlanStringForZh(value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => deepLocalizePlanForZh(item)) as T;
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, item]) => [key, deepLocalizePlanForZh(item)]),
    ) as T;
  }

  return value;
}

function finalizePlanLanguage(plan: RecommendedPlan, lang: "en" | "zh"): RecommendedPlan {
  if (lang !== "zh") {
    return plan;
  }

  return deepLocalizePlanForZh(plan);
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

function buildVisionPrompt(lang: "en" | "zh") {
  if (lang === "zh") {
    return [
      "你只负责识别图片里的电赛题目文字，不负责生成方案。",
      "尽量完整提取目标、指标、限制条件、输入输出要求和评分相关内容。",
      "如果图片里有分条、编号或表格，请保留原有结构。",
      "不要编造缺失内容，不要补建议，只输出提取后的题目文字。",
    ].join("\n");
  }

  return [
    "Only extract the contest problem text from the image.",
    "Preserve targets, metrics, constraints, inputs, outputs, and scoring-relevant details.",
    "Keep bullets, numbering, and tables when visible.",
    "Do not invent missing content and do not add advice.",
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

function readUsageValue(value: unknown): number {
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

function buildBudgetNotice(
  lang: "en" | "zh",
  state: OcrBudgetState,
  usage?: OcrUsage,
  forcedTextOnly?: boolean,
) {
  const remaining = Math.max(0, state.totalBudget - state.totalUsed);

  if (forcedTextOnly) {
    return lang === "zh"
      ? `OCR 总预算受 1M 以内硬上限约束，当前已自动切换为纯本地蒸馏推荐。剩余预算约 ${remaining} tokens。`
      : `OCR is constrained by a hard under-1M global budget, so this request fell back to local distilled recommendation only. Remaining budget is about ${remaining} tokens.`;
  }

  if (!usage || usage.totalTokens <= 0) {
    return lang === "zh"
      ? `本次未走模型生成方案；文本题目直接使用本地蒸馏知识库。当前 OCR 预算仍受 1M 以内硬上限约束，剩余约 ${remaining} tokens。`
      : `This request did not use model generation; text problems go straight through the local distilled knowledge base. OCR remains under a hard sub-1M global budget, with about ${remaining} tokens left.`;
  }

  return lang === "zh"
    ? `本次仅在识图阶段消耗了 ${usage.totalTokens} tokens，方案推荐仍然完全来自本地蒸馏知识库。当前 OCR 总预算保持在 1M 以内，剩余约 ${remaining} tokens。`
    : `This request used ${usage.totalTokens} tokens only for OCR. The recommendation still came entirely from the local distilled knowledge base, and total OCR usage remains under 1M. Remaining budget is about ${remaining} tokens.`;
}

async function extractProblemTextFromImage(
  apiKey: string,
  imageDataUrl: string,
  lang: "en" | "zh",
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
              text: buildVisionPrompt(lang),
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
        : "Image recognition failed.";

    throw new Error(message);
  }

  return {
    text: extractOutputText(data) ?? "",
    usage: extractUsage(data),
  };
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as RequestBody;
  const topic = body.topic?.trim();
  const lang = body.lang === "zh" ? "zh" : "en";
  const imageDataUrl = body.imageDataUrl?.trim();
  const apiKey = process.env.OPENAI_API_KEY;
  const model = DEFAULT_OCR_MODEL;

  if (!topic && !imageDataUrl) {
    return NextResponse.json(
      {
        error:
          lang === "zh"
            ? "请至少提供题目文字或题目截图。"
            : "Please provide either a problem statement or a problem image.",
      },
      { status: 400 },
    );
  }

  if (imageDataUrl && !apiKey && !topic) {
    return NextResponse.json(
      {
        error:
          lang === "zh"
            ? "当前只上传图片时需要配置兼容 OpenAI 的 OCR 接口密钥，例如 OPENAI_API_KEY。"
            : "Image-only input requires an OpenAI-compatible OCR API key such as OPENAI_API_KEY.",
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
        const extracted = await extractProblemTextFromImage(apiKey as string, imageDataUrl as string, lang, model);
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
              error:
                error instanceof Error
                  ? error.message
                  : lang === "zh"
                    ? "题目图片识别失败，请稍后重试。"
                    : "Failed to read the problem image. Please try again.",
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
        error:
          forcedTextOnly && lang === "zh"
            ? "当前 OCR 预算已受限，请补充题目文字后再生成方案。"
            : forcedTextOnly
              ? "OCR budget is exhausted for image-only input. Please add problem text and try again."
              : lang === "zh"
                ? "未能从图片中提取有效题目文字，请补一段文字说明后重试。"
                : "No usable problem text could be extracted from the image. Please add a short text description and try again.",
      },
      { status: 400 },
    );
  }

  const plan = finalizePlanLanguage(recommendPlanFromDistilledData(mergedTopic, lang), lang);
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
    budgetNotice: buildBudgetNotice(lang, budgetState, ocrUsage, forcedTextOnly),
  };

  return NextResponse.json({ plan, meta });
}
