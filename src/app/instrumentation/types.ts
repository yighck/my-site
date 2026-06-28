export interface PlanSection {
  title: string;
  items: string[];
}

export interface InstrumentationPlan {
  title: string;
  judgement: string;
  overview: string;
  modules: PlanSection[];
  tuningSteps: string[];
  risks: string[];
  verification: string[];
}

export interface PlanMeta {
  mode: "local-kb" | "local-kb-plus-ocr";
  ocrUsed: boolean;
  budgetNotice?: string;
}

export interface InstrumentationResponse {
  plan?: InstrumentationPlan;
  meta?: PlanMeta;
  error?: string;
}
