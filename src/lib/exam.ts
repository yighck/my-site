import fs from "fs";
import path from "path";

const EXAM_DIR = path.join(process.cwd(), "content", "exam-review");

export interface Subject {
  id: string;
  name: { en: string; zh: string };
  icon: string;
  color: string;
  description: { en: string; zh: string };
}

export interface Concept {
  term: string;
  en: string;
  definition: string;
}

export interface PracticeQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface SubjectContent {
  subject: Subject;
  summary: string;
  concepts: Concept[];
  practice: PracticeQuestion[];
  tips: string;
}

export function getSubjects(): Subject[] {
  const filePath = path.join(EXAM_DIR, "subjects.json");
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export function getSubject(id: string): Subject | undefined {
  return getSubjects().find((s) => s.id === id);
}

function readJsonSafe(filePath: string): any[] {
  if (!fs.existsSync(filePath)) return [];
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch {
    return [];
  }
}

function readMdSafe(filePath: string): string {
  if (!fs.existsSync(filePath)) return "";
  return fs.readFileSync(filePath, "utf-8");
}

export function getSubjectContent(subjectId: string, lang: "en" | "zh"): SubjectContent | null {
  const subject = getSubject(subjectId);
  if (!subject) return null;

  const dir = path.join(EXAM_DIR, subjectId);

  return {
    subject,
    summary: readMdSafe(path.join(dir, `summary.${lang}.md`)),
    concepts: readJsonSafe(path.join(dir, `concepts.${lang}.json`)),
    practice: readJsonSafe(path.join(dir, `practice.${lang}.json`)),
    tips: readMdSafe(path.join(dir, `tips.${lang}.md`)),
  };
}
