export interface PlanSection {
  title: string;
  items: string[];
}

export interface PlanOverview {
  hardware: string[];
  software: string[];
  integration: string[];
}

export interface InstrumentationPlan {
  title: string;
  judgement: string;
  overview: PlanOverview;
  modules: PlanSection[];
  tuningSteps: string[];
}

export interface PlanMeta {
  mode: "local-kb" | "local-kb-plus-ocr";
  ocrUsed: boolean;
  budgetNotice?: string;
  version?: string;
}

export interface InstrumentationResponse {
  plan?: InstrumentationPlan;
  meta?: PlanMeta;
  error?: string;
}
