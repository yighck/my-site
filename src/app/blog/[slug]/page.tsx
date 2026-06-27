import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts, getSearchIndex } from "@/lib/content";
import BlogPostContent from "./BlogPostContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const postsEn = getBlogPosts("en");
  return postsEn.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const postEn = getBlogPost(slug, "en");
  const postZh = getBlogPost(slug, "zh");
  if (!postEn) notFound();

  const searchItemsEn = getSearchIndex("en");
  const searchItemsZh = getSearchIndex("zh");

  return (
    <BlogPostContent
      postEn={postEn}
      postZh={postZh}
      searchItems={[...searchItemsEn, ...searchItemsZh]}
    />
  );
}
