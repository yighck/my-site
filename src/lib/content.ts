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
  slugPath: string[];
  frontmatter: Frontmatter;
  content: string;
}

export interface DocTreeNode {
  title: string;
  slug: string;
  children?: DocTreeNode[];
}

export interface SearchItem {
  type: "blog" | "docs";
  title: string;
  description: string;
  tags: string[];
  slug: string;
  url: string;
}

function readMdxFile(filePath: string) {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    frontmatter: data as Frontmatter,
    content,
  };
}

export function getBlogPosts(): ContentItem[] {
  const blogDir = path.join(CONTENT_DIR, "blog");
  if (!fs.existsSync(blogDir)) return [];

  const files = fs.readdirSync(blogDir).filter((file) => file.endsWith(".mdx") && !file.endsWith(".en.mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const { frontmatter, content } = readMdxFile(path.join(blogDir, file));

    return {
      slug,
      slugPath: [slug],
      frontmatter,
      content,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime(),
  );
}

export function getBlogPost(slug: string): ContentItem | null {
  const filePath = path.join(CONTENT_DIR, "blog", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const { frontmatter, content } = readMdxFile(filePath);
  return {
    slug,
    slugPath: [slug],
    frontmatter,
    content,
  };
}

function walkDocsDir(dir: string, prefix = ""): ContentItem[] {
  const results: ContentItem[] = [];
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      results.push(...walkDocsDir(fullPath, prefix ? `${prefix}/${entry.name}` : entry.name));
      continue;
    }

    if (!entry.name.endsWith(".mdx") || entry.name.endsWith(".en.mdx")) {
      continue;
    }

    const slugName = entry.name.replace(/\.mdx$/, "");
    const slug = prefix ? `${prefix}/${slugName}` : slugName;
    const { frontmatter, content } = readMdxFile(fullPath);

    results.push({
      slug,
      slugPath: slug.split("/"),
      frontmatter,
      content,
    });
  }

  return results;
}

export function getDocPages(): ContentItem[] {
  const docsDir = path.join(CONTENT_DIR, "docs");
  return walkDocsDir(docsDir);
}

export function getDocPage(slugParts: string[]): ContentItem | null {
  const slug = slugParts.join("/");
  const filePath = path.join(CONTENT_DIR, "docs", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const { frontmatter, content } = readMdxFile(filePath);
  return {
    slug,
    slugPath: slugParts,
    frontmatter,
    content,
  };
}

export function getDocTree(): DocTreeNode[] {
  const docsDir = path.join(CONTENT_DIR, "docs");
  if (!fs.existsSync(docsDir)) return [];

  function buildTree(dir: string, prefix = ""): DocTreeNode[] {
    const nodes: DocTreeNode[] = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const dirs = entries.filter((entry) => entry.isDirectory());
    const files = entries.filter(
      (entry) => entry.name.endsWith(".mdx") && !entry.name.endsWith(".en.mdx"),
    );

    for (const dirEntry of dirs) {
      const childPrefix = prefix ? `${prefix}/${dirEntry.name}` : dirEntry.name;
      const children = buildTree(path.join(dir, dirEntry.name), childPrefix);

      if (children.length > 0) {
        nodes.push({
          title: dirEntry.name.charAt(0).toUpperCase() + dirEntry.name.slice(1).replace(/-/g, " "),
          slug: childPrefix,
          children,
        });
      }
    }

    for (const fileEntry of files) {
      const slugName = fileEntry.name.replace(/\.mdx$/, "");
      const slug = prefix ? `${prefix}/${slugName}` : slugName;
      const { frontmatter } = readMdxFile(path.join(dir, fileEntry.name));

      nodes.push({
        title: frontmatter.title || slugName,
        slug,
      });
    }

    return nodes;
  }

  return buildTree(docsDir);
}

export function getSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  for (const post of getBlogPosts()) {
    items.push({
      type: "blog",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      tags: post.frontmatter.tags || [],
      slug: post.slug,
      url: `/blog/${post.slug}`,
    });
  }

  for (const doc of getDocPages()) {
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
