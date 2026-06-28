import { getBlogPosts, getSearchIndex } from "@/lib/content";
import BlogContent from "./BlogContent";

export default function BlogPage() {
  const posts = getBlogPosts();
  const searchItems = getSearchIndex();

  return <BlogContent posts={posts} searchItems={searchItems} />;
}
