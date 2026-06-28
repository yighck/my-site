import { notFound } from "next/navigation";
import { getDocPage, getDocTree, getSearchIndex } from "@/lib/content";
import DocPageContent from "./DocPageContent";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export function generateStaticParams() {
  return getSearchIndex()
    .filter((item) => item.type === "docs")
    .map((item) => ({ slug: item.slug.split("/") }));
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  const page = getDocPage(slug);
  if (!page) notFound();

  const tree = getDocTree();
  const searchItems = getSearchIndex();

  return <DocPageContent page={page} tree={tree} searchItems={searchItems} />;
}
