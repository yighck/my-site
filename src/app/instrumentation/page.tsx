import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSearchIndex } from "@/lib/content";
import InstrumentationContent from "./InstrumentationContent";

export default function InstrumentationPage() {
  const searchItemsEn = getSearchIndex("en");
  const searchItemsZh = getSearchIndex("zh");

  return (
    <>
      <Header searchItems={[...searchItemsEn, ...searchItemsZh]} />
      <InstrumentationContent />
      <Footer />
    </>
  );
}
