import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeContent from "./HomeContent";
import { getBlogPosts, getSearchIndex } from "@/lib/content";

export default function Home() {
  const searchItemsEn = getSearchIndex("en");
  const searchItemsZh = getSearchIndex("zh");
  const searchItems = [...searchItemsEn, ...searchItemsZh];
  const postsEn = getBlogPosts("en").slice(0, 3);
  const postsZh = getBlogPosts("zh").slice(0, 3);

  return (
    <>
      <Header searchItems={searchItems} />
      <main className="mx-auto max-w-6xl flex-1 px-6 py-16">
        <HomeContent postsEn={postsEn} postsZh={postsZh} />
      </main>
      <Footer />
    </>
  );
}
