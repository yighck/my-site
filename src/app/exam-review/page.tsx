import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSubjects } from "@/lib/exam";
import { getSearchIndex } from "@/lib/content";
import ExamReviewContent from "./ExamReviewContent";

export default function ExamReviewPage() {
  const subjects = getSubjects();
  const searchItemsEn = getSearchIndex("en");
  const searchItemsZh = getSearchIndex("zh");

  return (
    <>
      <Header searchItems={[...searchItemsEn, ...searchItemsZh]} />
      <ExamReviewContent subjects={subjects} />
      <Footer />
    </>
  );
}
