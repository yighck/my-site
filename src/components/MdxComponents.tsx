import React from "react";
import { codeToHtml } from "shiki";

async function CodeBlock({
  children,
  className,
}: React.HTMLAttributes<HTMLElement>) {
  const match = /language-(\w+)/.exec(className || "");
  const lang = match ? match[1] : "text";
  const code = String(children).replace(/\n$/, "");

  let html: string;
  try {
    html = await codeToHtml(code, {
      lang,
      theme: "github-dark",
      transformers: [
        {
          pre(node) {
            node.properties.className = [
              "overflow-x-auto rounded-[24px] border border-slate-800/70 bg-slate-950 p-5 text-sm leading-relaxed shadow-[0_18px_40px_rgba(15,23,42,0.22)]",
            ];
          },
        },
      ],
    });
  } catch {
    html = `<pre class="overflow-x-auto rounded-[24px] border border-slate-800/70 bg-slate-950 p-5 text-sm leading-relaxed"><code>${code}</code></pre>`;
  }

  return <div className="my-6" dangerouslySetInnerHTML={{ __html: html }} />;
}

function InlineCode({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className="rounded-lg bg-slate-100 px-1.5 py-0.5 text-[0.95em] font-medium text-slate-800 dark:bg-white/10 dark:text-slate-100"
      {...props}
    >
      {children}
    </code>
  );
}

function Heading({ level, children }: { level: number; children: React.ReactNode }) {
  const text = String(children);
  const id = text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

  const sizes: Record<number, string> = {
    1: "mt-12 mb-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white",
    2: "mt-12 mb-4 border-b border-slate-200 pb-3 text-2xl font-semibold tracking-tight text-slate-950 dark:border-white/10 dark:text-white",
    3: "mt-8 mb-3 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100",
    4: "mt-6 mb-2 text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100",
  };

  const linkClass = "no-underline transition-colors hover:text-sky-600 dark:hover:text-cyan-300";

  if (level === 1) {
    return <h1 id={id} className={sizes[1]}><a href={`#${id}`} className={linkClass}>{children}</a></h1>;
  }
  if (level === 2) {
    return <h2 id={id} className={sizes[2]}><a href={`#${id}`} className={linkClass}>{children}</a></h2>;
  }
  if (level === 3) {
    return <h3 id={id} className={sizes[3]}><a href={`#${id}`} className={linkClass}>{children}</a></h3>;
  }
  return <h4 id={id} className={sizes[4]}><a href={`#${id}`} className={linkClass}>{children}</a></h4>;
}

function H1({ children }: any) {
  return <Heading level={1}>{children}</Heading>;
}
function H2({ children }: any) {
  return <Heading level={2}>{children}</Heading>;
}
function H3({ children }: any) {
  return <Heading level={3}>{children}</Heading>;
}
function H4({ children }: any) {
  return <Heading level={4}>{children}</Heading>;
}

export const mdxComponents: Record<string, React.ComponentType<any>> = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
    const codeEl = React.Children.only(children) as React.ReactElement<{
      className?: string;
      children?: React.ReactNode;
    }>;
    if (codeEl?.type === "code") {
      return (
        <CodeBlock className={codeEl.props.className}>
          {codeEl.props.children}
        </CodeBlock>
      );
    }
    return <pre {...props}>{children}</pre>;
  },
  code: InlineCode,
  a: ({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="font-medium text-sky-600 underline decoration-sky-300 underline-offset-4 transition-colors hover:text-sky-700 dark:text-cyan-300 dark:decoration-cyan-700 dark:hover:text-cyan-200"
      {...props}
    >
      {children}
    </a>
  ),
  blockquote: ({
    children,
    ...props
  }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-6 rounded-r-[20px] border-l-4 border-cyan-400 bg-slate-50 px-5 py-4 text-slate-600 dark:bg-white/6 dark:text-slate-300"
      {...props}
    >
      {children}
    </blockquote>
  ),
  table: ({ children, ...props }: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 overflow-x-auto rounded-[24px] border border-slate-200 dark:border-white/10">
      <table className="min-w-full border-collapse text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="border border-slate-200 bg-slate-50 px-4 py-3 text-left font-semibold text-slate-700 dark:border-white/10 dark:bg-white/6 dark:text-slate-200"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td
      className="border border-slate-200 px-4 py-3 text-slate-600 dark:border-white/10 dark:text-slate-300"
      {...props}
    >
      {children}
    </td>
  ),
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-5 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="my-5 list-decimal space-y-2 pl-6 text-slate-700 dark:text-slate-300" {...props}>
      {children}
    </ol>
  ),
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-10 border-slate-200 dark:border-white/10" {...props} />
  ),
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="my-5 text-[15px] leading-8 text-slate-700 dark:text-slate-300" {...props}>
      {children}
    </p>
  ),
};
