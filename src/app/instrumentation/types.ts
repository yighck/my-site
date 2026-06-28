export interface PlanSection {
  title: string;
  items: string[];
}

export interface InstrumentationPlan {
  title: string;
  summary: string;
  approach: string;
  modules: PlanSection[];
  tuningSteps: string[];
  risks: string[];
  verification: string[];
  references: string[];
  detectedFamily: string;
  matchedTerms?: string[];
  reasoning?: string[];
  [key: string]: unknown;
}

export interface PlanMeta {
  mode: "local-kb" | "local-kb-plus-ocr";
  ocrAttempted: boolean;
  ocrUsed: boolean;
  ocrBudget: {
    totalBudget: number;
    totalUsed: number;
    remaining: number;
    requestReserve: number;
  };
  ocrUsage?: {
    inputTokens: number;
    outputTokens: number;
    totalTokens: number;
  };
  budgetNotice?: string;
}

export interface InstrumentationResponse {
  plan?: InstrumentationPlan;
  meta?: PlanMeta;
  error?: string;
}
