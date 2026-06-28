import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSubjects } from "@/lib/exam";
import { getSearchIndex } from "@/lib/content";
import ExamReviewContent from "./ExamReviewContent";

export default function ExamReviewPage() {
  const subjects = getSubjects();
  const searchItems = getSearchIndex();

  return (
    <>
      <Header searchItems={searchItems} />
      <ExamReviewContent subjects={subjects} />
      <Footer />
    </>
  );
}
