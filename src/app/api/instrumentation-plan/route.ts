import { NextRequest, NextResponse } from "next/server";
import { recommendPlanFromDistilledData } from "@/lib/instrumentation-kb";

const OPENAI_API_URL = "https://api.openai.com/v1/responses";

interface RequestBody {
  topic?: string;
  lang?: "en" | "zh";
  imageDataUrl?: string;
}

function buildVisionPrompt(lang: "en" | "zh") {
  if (lang === "zh") {
    return [
      "你现在只负责识别图片里的电赛题目文字，不负责生成方案。",
      "请尽量完整提取题目中的目标、指标、限制条件、输入输出要求和判分要点。",
      "如果图片里有表格、编号或分条要求，请保留结构。",
      "不要编造缺失内容，不要给建议，只输出提取后的题目文字。",
    ].join("\n");
  }

  return [
    "You only extract the contest problem text from the image and do not generate a solution.",
    "Preserve goals, metrics, constraints, input/output requirements, and scoring-relevant details as faithfully as possible.",
    "If the image contains bullet points or numbered requirements, keep that structure.",
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

async function extractProblemTextFromImage(
  apiKey: string,
  imageDataUrl: string,
  lang: "en" | "zh",
  model: string,
) {
  const response = await fetch(OPENAI_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
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
              detail: "auto",
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

  return extractOutputText(data) ?? "";
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as RequestBody;
  const topic = body.topic?.trim();
  const lang = body.lang === "zh" ? "zh" : "en";
  const imageDataUrl = body.imageDataUrl?.trim();
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL || "gpt-5.5";

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
            ? "当前只上传图片时需要配置 OPENAI_API_KEY 用于识图。"
            : "Image-only input requires OPENAI_API_KEY for OCR.",
      },
      { status: 500 },
    );
  }

  let mergedTopic = topic ?? "";

  if (imageDataUrl && apiKey) {
    try {
      const extracted = await extractProblemTextFromImage(apiKey, imageDataUrl, lang, model);
      if (extracted.trim()) {
        mergedTopic = mergedTopic ? `${mergedTopic}\n\n${extracted.trim()}` : extracted.trim();
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

  const plan = recommendPlanFromDistilledData(mergedTopic, lang);
  return NextResponse.json({ plan });
}
