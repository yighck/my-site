import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDocTree, getSearchIndex } from "@/lib/content";
import DocsContent from "./DocsContent";

export default function DocsPage() {
  const treeEn = getDocTree("en");
  const treeZh = getDocTree("zh");
  const searchItemsEn = getSearchIndex("en");
  const searchItemsZh = getSearchIndex("zh");

  return (
    <DocsContent
      treeEn={treeEn}
      treeZh={treeZh}
      searchItems={[...searchItemsEn, ...searchItemsZh]}
    />
  );
}
