import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSearchIndex } from "@/lib/content";
import InstrumentationContent from "./InstrumentationContent";

export default function InstrumentationPage() {
  const searchItems = getSearchIndex();

  return (
    <>
      <Header searchItems={searchItems} />
      <InstrumentationContent />
      <Footer />
    </>
  );
}
