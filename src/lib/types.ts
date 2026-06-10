export type CategoryId = "home" | "yard" | "energy" | "auto" | "business";

export interface Category {
  id: CategoryId;
  name: string;
  shortName: string;
  description: string;
  accent: string;
  textAccent: string;
  icon: string;
}

export interface CalculatorInput {
  key: string;
  label: string;
  unit?: string;
  type?: "number" | "select";
  min?: number;
  max?: number;
  step?: number;
  defaultValue: number;
  options?: Array<{ label: string; value: number }>;
  help?: string;
}

export interface CalculatorResult {
  label: string;
  value: number;
  unit?: string;
  format?: "number" | "currency" | "percent" | "decimal";
  primary?: boolean;
}

export interface CalculatorDefinition {
  slug: string;
  name: string;
  category: CategoryId;
  summary: string;
  description: string;
  inputs: CalculatorInput[];
  formula: string;
  example: string;
  assumptions: string[];
  faq: Array<{ question: string; answer: string }>;
  keywords: string[];
}

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface GuideSource {
  label: string;
  href: string;
  note: string;
}

export interface GuideDefinition {
  slug: string;
  title: string;
  category: CategoryId;
  calculatorSlugs: string[];
  description: string;
  intro: string;
  readTime: string;
  reviewed: string;
  sections: GuideSection[];
  takeaway: string;
  sources: GuideSource[];
}
