"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/40 bg-white/55 px-6 py-8 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/35">
      <div className="mx-auto max-w-6xl text-center text-sm text-slate-500 dark:text-slate-400">
        {`© ${new Date().getFullYear()} 我的知识站。使用 Next.js 与 Tailwind CSS 构建。`}
      </div>
    </footer>
  );
}
