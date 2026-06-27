import { notFound } from "next/navigation";
import { getDocPage, getDocTree, getSearchIndex } from "@/lib/content";
import DocPageContent from "./DocPageContent";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export function generateStaticParams() {
  const pagesEn = getSearchIndex("en").filter((i) => i.type === "docs");
  return pagesEn.map((p) => ({ slug: p.slug.replace("docs/", "").split("/") }));
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  const pageEn = getDocPage(slug, "en");
  const pageZh = getDocPage(slug, "zh");
  if (!pageEn) notFound();

  const treeEn = getDocTree("en");
  const treeZh = getDocTree("zh");
  const searchItemsEn = getSearchIndex("en");
  const searchItemsZh = getSearchIndex("zh");

  return (
    <DocPageContent
      pageEn={pageEn}
      pageZh={pageZh}
      treeEn={treeEn}
      treeZh={treeZh}
      searchItems={[...searchItemsEn, ...searchItemsZh]}
    />
  );
}
