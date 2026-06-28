import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts, getSearchIndex } from "@/lib/content";
import BlogPostContent from "./BlogPostContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const searchItems = getSearchIndex();

  return <BlogPostContent post={post} searchItems={searchItems} />;
}
