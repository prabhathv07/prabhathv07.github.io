"use client";

import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t hairline py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-wrap items-center justify-between gap-4">
        <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/40">
          © {new Date().getFullYear()} {personal.name}
        </div>
        <a
          href="#top"
          className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/40 hover:text-white transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
