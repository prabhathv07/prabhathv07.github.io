"use client";

import { Marquee as MarqueeUI } from "@/components/ui/marquee";

const items = [
  { text: "Scale AI", sub: "Applied AI Engineer" },
  { text: "HCL Tech", sub: "Data Scientist" },
  { text: "5.97M", sub: "Records processed" },
  { text: "700+", sub: "Automated tests" },
  { text: "NJIT MS", sub: "GPA 3.7 · 2026" },
  { text: "4 Years", sub: "Industry experience" },
  { text: "PyTorch · PySpark", sub: "Production ML" },
  { text: "RAG · pgvector", sub: "Retrieval AI" },
];

function Dot() {
  return (
    <span className="w-1 h-1 rounded-full bg-[color:var(--border-strong)] flex-shrink-0 mx-4 self-center" />
  );
}

export default function Marquee() {
  return (
    <div className="border-t border-b border-[color:var(--border)] py-5 overflow-hidden">
      <MarqueeUI pauseOnHover className="[--duration:40s] [--gap:0px]">
        {items.map((item) => (
          <div key={item.text} className="inline-flex items-center gap-0">
            <div className="flex items-baseline gap-2 px-4">
              <span className="font-display text-lg md:text-xl text-[color:var(--fg-dim)] whitespace-nowrap select-none">
                {item.text}
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[color:var(--muted)] whitespace-nowrap">
                {item.sub}
              </span>
            </div>
            <Dot />
          </div>
        ))}
      </MarqueeUI>
    </div>
  );
}
