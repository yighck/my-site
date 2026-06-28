import { getDocTree, getSearchIndex } from "@/lib/content";
import DocsContent from "./DocsContent";

export default function DocsPage() {
  const tree = getDocTree();
  const searchItems = getSearchIndex();

  return <DocsContent tree={tree} searchItems={searchItems} />;
}
