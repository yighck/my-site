import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSubjects, getSubjectContent } from "@/lib/exam";
import { getSearchIndex } from "@/lib/content";
import SubjectContent from "./SubjectContent";

interface Props {
  params: Promise<{ subject: string }>;
}

export function generateStaticParams() {
  return getSubjects().map((s) => ({ subject: s.id }));
}

export default async function SubjectPage({ params }: Props) {
  const { subject } = await params;
  const contentEn = getSubjectContent(subject, "en");
  const contentZh = getSubjectContent(subject, "zh");
  if (!contentEn && !contentZh) notFound();

  const searchItemsEn = getSearchIndex("en");
  const searchItemsZh = getSearchIndex("zh");

  return (
    <>
      <Header searchItems={[...searchItemsEn, ...searchItemsZh]} />
      <SubjectContent contentEn={contentEn} contentZh={contentZh} />
      <Footer />
    </>
  );
}
