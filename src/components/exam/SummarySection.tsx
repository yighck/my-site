"use client";

import type { ReactNode } from "react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function SummarySection({ content }: { content: string }) {
  const sections = content.split(/^## /gm).filter(Boolean);

  return (
    <div className="space-y-4">
      {sections.map((section, index) => (
        <CollapsibleSection key={index} content={section} defaultOpen={index === 0} />
      ))}
    </div>
  );
}

function CollapsibleSection({
  content,
  defaultOpen,
}: {
  content: string;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const containerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const lines = content.split("\n");
  const title = lines[0]?.replace(/^#+\s*/, "").trim() || "";
  const body = lines.slice(1).join("\n").trim();

  useGSAP(
    () => {
      if (!bodyRef.current) {
        return;
      }

      if (open) {
        gsap.fromTo(
          bodyRef.current,
          { height: 0, autoAlpha: 0 },
          { height: "auto", autoAlpha: 1, duration: 0.45, ease: "power2.out" },
        );
        return;
      }

      gsap.to(bodyRef.current, {
        height: 0,
        autoAlpha: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    },
    { scope: containerRef, dependencies: [open], revertOnUpdate: true },
  );

  return (
    <div
      ref={containerRef}
      className="rounded-[28px] border border-white/60 bg-white/82 shadow-[0_22px_55px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/62"
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <h3 className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
          {title}
        </h3>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500 dark:bg-white/8 dark:text-slate-300">
          {open ? "OPEN" : "SHOW"}
        </span>
      </button>

      <div ref={bodyRef} className="overflow-hidden">
        <div className="border-t border-slate-200/80 px-6 py-5 dark:border-white/10">
          <div className="space-y-4 text-sm leading-7 text-slate-700 dark:text-slate-200">
            {renderSimpleMarkdown(body)}
          </div>
        </div>
      </div>
    </div>
  );
}

function renderSimpleMarkdown(text: string) {
  const lines = text.split("\n");
  const elements: ReactNode[] = [];
  let listItems: string[] = [];
  let tableRows: string[][] = [];
  let paragraphLines: string[] = [];

  const flushParagraph = () => {
    if (paragraphLines.length === 0) {
      return;
    }

    elements.push(
      <p key={`p-${elements.length}`}>
        {paragraphLines.join(" ")}
      </p>,
    );
    paragraphLines = [];
  };

  const flushList = () => {
    if (listItems.length === 0) {
      return;
    }

    elements.push(
      <ul key={`ul-${elements.length}`} className="list-disc space-y-2 pl-5">
        {listItems.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>,
    );
    listItems = [];
  };

  const flushTable = () => {
    if (tableRows.length === 0) {
      return;
    }

    elements.push(
      <div key={`table-${elements.length}`} className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm">
          <tbody>
            {tableRows.map((row, rowIndex) => (
              <tr key={`${row.join("-")}-${rowIndex}`}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${cell}-${cellIndex}`}
                    className="border border-slate-200 px-3 py-2 dark:border-white/10"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>,
    );
    tableRows = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      flushTable();
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      flushTable();
      elements.push(
        <h4 key={`h-${elements.length}`} className="pt-2 text-base font-semibold text-slate-950 dark:text-white">
          {line.slice(4)}
        </h4>,
      );
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      flushTable();
      listItems.push(line.slice(2).replace(/\*\*/g, ""));
      continue;
    }

    if (line.startsWith("|")) {
      flushParagraph();
      flushList();
      if (!/^\|[\s:-]+\|$/.test(line)) {
        tableRows.push(
          line
            .split("|")
            .map((cell) => cell.trim())
            .filter(Boolean),
        );
      }
      continue;
    }

    paragraphLines.push(line.replace(/\*\*/g, ""));
  }

  flushParagraph();
  flushList();
  flushTable();

  return elements;
}
