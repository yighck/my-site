import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeContent from "./HomeContent";
import { getBlogPosts, getSearchIndex } from "@/lib/content";

export default function Home() {
  const searchItems = getSearchIndex();
  const posts = getBlogPosts().slice(0, 3);

  return (
    <>
      <Header searchItems={searchItems} />
      <main className="mx-auto max-w-6xl flex-1 px-6 py-16">
        <HomeContent posts={posts} />
      </main>
      <Footer />
    </>
  );
}
