import { NextRequest, NextResponse } from "next/server";

const OPENAI_API_URL = "https://api.openai.com/v1/responses";

const responseSchema = {
  type: "object",
  additionalProperties: false,
  required: ["title", "summary", "approach", "modules", "tuningSteps", "risks", "verification"],
  properties: {
    title: {
      type: "string",
    },
    summary: {
      type: "string",
    },
    approach: {
      type: "string",
    },
    modules: {
      type: "array",
      minItems: 3,
      maxItems: 6,
      items: {
        type: "object",
        additionalProperties: false,
        required: ["title", "items"],
        properties: {
          title: {
            type: "string",
          },
          items: {
            type: "array",
            minItems: 2,
            maxItems: 5,
            items: {
              type: "string",
            },
          },
        },
      },
    },
    tuningSteps: {
      type: "array",
      minItems: 3,
      maxItems: 6,
      items: {
        type: "string",
      },
    },
    risks: {
      type: "array",
      minItems: 3,
      maxItems: 6,
      items: {
        type: "string",
      },
    },
    verification: {
      type: "array",
      minItems: 3,
      maxItems: 6,
      items: {
        type: "string",
      },
    },
  },
} as const;

interface RequestBody {
  topic?: string;
  lang?: "en" | "zh";
}

function buildDeveloperPrompt(lang: "en" | "zh") {
  if (lang === "zh") {
    return [
      "你是一名全国大学生电子设计竞赛仪器仪表方向顾问。",
      "用户会输入一道电赛题目或题目描述，你需要给出可落地的获奖级方案草案。",
      "输出必须严格贴合输入题目，不要泛泛而谈，不要写备赛建议。",
      "默认面向 3 人学生队，主控优先考虑 STM32，必要时可以补充 FPGA、K230、上位机或专用芯片，但要说明为什么。",
      "方案重点放在：题目目标拆解、总体技术路线、关键功能模块、容易翻车的风险点、调试顺序、验收指标。",
      "如果题目信息不足，允许做少量合理假设，但必须把假设隐含在方案里，不要反问用户。",
      "语言使用中文，风格直接、专业、可执行。",
    ].join("\n");
  }

  return [
    "You are an advisor for instrumentation-style university electronic design contest problems.",
    "The user will paste a contest problem statement or a short description. Return an executable solution draft rather than study advice.",
    "Ground the answer in the stated problem and avoid generic preparation guidance.",
    "Assume a 3-person student team. Prefer STM32 as the baseline controller, and only introduce FPGA, K230, PC software, or dedicated ICs when they materially help the solution.",
    "Focus on: goal decomposition, system-level approach, critical modules, failure risks, tuning order, and verification targets.",
    "If the prompt is incomplete, make only minimal reasonable assumptions and bake them into the plan instead of asking follow-up questions.",
    "Respond in the user's language when possible.",
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

export async function POST(request: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error: "Server is missing OPENAI_API_KEY. Add it to your deployment environment first.",
      },
      { status: 500 },
    );
  }

  const body = (await request.json()) as RequestBody;
  const topic = body.topic?.trim();
  const lang = body.lang === "zh" ? "zh" : "en";

  if (!topic) {
    return NextResponse.json(
      {
        error: lang === "zh" ? "请输入题目描述后再生成方案。" : "Please enter a problem statement first.",
      },
      { status: 400 },
    );
  }

  const model = process.env.OPENAI_MODEL || "gpt-5.4-mini";

  const openAiResponse = await fetch(OPENAI_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      reasoning: {
        effort: "medium",
      },
      input: [
        {
          role: "developer",
          content: [
            {
              type: "input_text",
              text: buildDeveloperPrompt(lang),
            },
          ],
        },
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: topic,
            },
          ],
        },
      ],
      text: {
        format: {
          type: "json_schema",
          name: "instrumentation_plan",
          strict: true,
          schema: responseSchema,
        },
      },
    }),
  });

  const data = (await openAiResponse.json()) as unknown;

  if (!openAiResponse.ok) {
    const message =
      typeof data === "object" &&
      data !== null &&
      "error" in data &&
      typeof (data as { error?: { message?: unknown } }).error?.message === "string"
        ? ((data as { error: { message: string } }).error.message)
        : "OpenAI request failed.";

    return NextResponse.json({ error: message }, { status: openAiResponse.status });
  }

  const outputText = extractOutputText(data);
  if (!outputText) {
    return NextResponse.json(
      {
        error:
          lang === "zh"
            ? "模型没有返回可解析的方案内容，请稍后重试。"
            : "The model did not return a parseable plan. Please try again.",
      },
      { status: 502 },
    );
  }

  try {
    const plan = JSON.parse(outputText);
    return NextResponse.json({ plan });
  } catch {
    return NextResponse.json(
      {
        error:
          lang === "zh"
            ? "模型输出格式异常，请稍后重试。"
            : "The model returned an unexpected format. Please try again.",
      },
      { status: 502 },
    );
  }
}
