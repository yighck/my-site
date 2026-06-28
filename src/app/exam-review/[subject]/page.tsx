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
  return getSubjects().map((subject) => ({ subject: subject.id }));
}

export default async function SubjectPage({ params }: Props) {
  const { subject } = await params;
  const content = getSubjectContent(subject);
  if (!content) notFound();

  const searchItems = getSearchIndex();

  return (
    <>
      <Header searchItems={searchItems} />
      <SubjectContent content={content} />
      <Footer />
    </>
  );
}
