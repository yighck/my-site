import { getBlogPosts, getSearchIndex } from "@/lib/content";
import BlogContent from "./BlogContent";

export default function BlogPage() {
  const postsEn = getBlogPosts("en");
  const postsZh = getBlogPosts("zh");
  const searchItemsEn = getSearchIndex("en");
  const searchItemsZh = getSearchIndex("zh");

  return (
    <BlogContent
      postsEn={postsEn}
      postsZh={postsZh}
      searchItems={[...searchItemsEn, ...searchItemsZh]}
    />
  );
}
