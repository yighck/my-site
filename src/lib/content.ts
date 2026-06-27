import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface Frontmatter {
  title: string;
  date: string;
  description: string;
  tags?: string[];
}

export interface ContentItem {
  slug: string;
  slugPath: string[]; // for docs like ["getting-started", "installation"]
  frontmatter: Frontmatter;
  content: string;
}

export type Lang = "en" | "zh";

// ── Blog ──────────────────────────────────────────────

export function getBlogPosts(lang: Lang): ContentItem[] {
  const blogDir = path.join(CONTENT_DIR, "blog");
  if (!fs.existsSync(blogDir)) return [];

  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(`.${lang}.mdx`));

  const posts = files.map((file) => {
    const slug = file.replace(`.${lang}.mdx`, "");
    const raw = fs.readFileSync(path.join(blogDir, file), "utf-8");
    const { data, content } = matter(raw);
    return {
      slug,
      slugPath: [slug],
      frontmatter: data as Frontmatter,
      content,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

export function getBlogPost(slug: string, lang: Lang): ContentItem | null {
  const filePath = path.join(CONTENT_DIR, "blog", `${slug}.${lang}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    slugPath: [slug],
    frontmatter: data as Frontmatter,
    content,
  };
}

// ── Docs ──────────────────────────────────────────────

export interface DocTreeNode {
  title: string;
  slug: string;       // e.g. "getting-started/installation"
  children?: DocTreeNode[];
}

function walkDocsDir(dir: string, lang: Lang, prefix: string = ""): ContentItem[] {
  const results: ContentItem[] = [];
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkDocsDir(fullPath, lang, prefix ? `${prefix}/${entry.name}` : entry.name));
    } else if (entry.name.endsWith(`.${lang}.mdx`)) {
      const slugName = entry.name.replace(`.${lang}.mdx`, "");
      const slugPath = prefix ? `${prefix}/${slugName}` : slugName;
      const slugParts = slugPath.split("/");
      const raw = fs.readFileSync(fullPath, "utf-8");
      const { data, content } = matter(raw);
      results.push({
        slug: slugPath,
        slugPath: slugParts,
        frontmatter: data as Frontmatter,
        content,
      });
    }
  }

  return results;
}

export function getDocPages(lang: Lang): ContentItem[] {
  const docsDir = path.join(CONTENT_DIR, "docs");
  const pages = walkDocsDir(docsDir, lang);
  // Sort by directory order (filesystem order)
  return pages;
}

export function getDocPage(slugParts: string[], lang: Lang): ContentItem | null {
  const slugPath = slugParts.join("/");
  const filePath = path.join(CONTENT_DIR, "docs", `${slugPath}.${lang}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug: slugPath,
    slugPath: slugParts,
    frontmatter: data as Frontmatter,
    content,
  };
}

export function getDocTree(lang: Lang): DocTreeNode[] {
  const docsDir = path.join(CONTENT_DIR, "docs");
  if (!fs.existsSync(docsDir)) return [];

  function buildTree(dir: string, prefix: string = ""): DocTreeNode[] {
    const nodes: DocTreeNode[] = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    // Directories first, then files
    const dirs = entries.filter((e) => e.isDirectory());
    const files = entries.filter((e) => e.name.endsWith(`.${lang}.mdx`));

    for (const d of dirs) {
      const childPrefix = prefix ? `${prefix}/${d.name}` : d.name;
      const children = buildTree(path.join(dir, d.name), childPrefix);
      if (children.length > 0) {
        // Use directory name as group title (capitalized)
        nodes.push({
          title: d.name.charAt(0).toUpperCase() + d.name.slice(1).replace(/-/g, " "),
          slug: childPrefix,
          children,
        });
      }
    }

    for (const f of files) {
      const slugName = f.name.replace(`.${lang}.mdx`, "");
      const slug = prefix ? `${prefix}/${slugName}` : slugName;
      const raw = fs.readFileSync(path.join(dir, f.name), "utf-8");
      const { data } = matter(raw);
      nodes.push({
        title: (data as Frontmatter).title || slugName,
        slug,
      });
    }

    return nodes;
  }

  return buildTree(docsDir);
}

// ── Search index ──────────────────────────────────────

export interface SearchItem {
  type: "blog" | "docs";
  title: string;
  description: string;
  tags: string[];
  slug: string;
  url: string;
}

export function getSearchIndex(lang: Lang): SearchItem[] {
  const items: SearchItem[] = [];

  for (const post of getBlogPosts(lang)) {
    items.push({
      type: "blog",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      tags: post.frontmatter.tags || [],
      slug: post.slug,
      url: `/blog/${post.slug}`,
    });
  }

  for (const doc of getDocPages(lang)) {
    items.push({
      type: "docs",
      title: doc.frontmatter.title,
      description: doc.frontmatter.description,
      tags: doc.frontmatter.tags || [],
      slug: doc.slug,
      url: `/docs/${doc.slug}`,
    });
  }

  return items;
}
