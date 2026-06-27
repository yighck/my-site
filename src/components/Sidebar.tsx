"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { DocTreeNode } from "@/lib/content";

interface Props {
  tree: DocTreeNode[];
}

function TreeNode({ node, depth = 0 }: { node: DocTreeNode; depth?: number }) {
  const pathname = usePathname();
  const href = `/docs/${node.slug}`;
  const isActive = pathname === href;
  const hasChildren = Boolean(node.children?.length);

  if (hasChildren) {
    return (
      <div>
        <p
          className="mb-2 mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400"
          style={{ paddingLeft: `${depth * 12}px` }}
        >
          {node.title}
        </p>
        {node.children!.map((child) => (
          <TreeNode key={child.slug} node={child} depth={depth + 1} />
        ))}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={`block rounded-2xl px-3 py-2 text-sm transition-colors ${
        isActive
          ? "bg-slate-950 font-medium text-white dark:bg-cyan-300 dark:text-slate-950"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/8 dark:hover:text-white"
      }`}
      style={{ paddingLeft: `${depth * 12 + 12}px` }}
    >
      {node.title}
    </Link>
  );
}

export default function Sidebar({ tree }: Props) {
  return (
    <aside className="hidden w-64 flex-shrink-0 lg:block">
      <nav className="sticky top-24 rounded-[28px] border border-white/60 bg-white/72 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/52">
        {tree.map((node) => (
          <TreeNode key={node.slug} node={node} />
        ))}
      </nav>
    </aside>
  );
}
