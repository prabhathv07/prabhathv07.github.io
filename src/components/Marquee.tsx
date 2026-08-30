"use client";

import { Marquee as MarqueeUI } from "@/components/ui/marquee";

const tags = [
  "SQL Analytics",
  "Data Pipelines",
  "Feature Engineering",
  "Machine Learning",
  "Statistical Testing",
  "PySpark ETL",
  "Data Warehousing",
  "SHAP Explainability",
  "Hypothesis Testing",
  "MLOps",
  "RAG Systems",
  "Distributed Systems",
  "Dashboarding",
  "Model Deployment",
];

function Star() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-3 h-3 flex-shrink-0 text-[color:var(--border-strong)]"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4z" />
    </svg>
  );
}

export default function Marquee() {
  return (
    <section className="relative py-6 md:py-10 border-y hairline overflow-hidden">
      <MarqueeUI pauseOnHover className="[--duration:35s]">
        {tags.map((tag) => (
          <div key={tag} className="flex items-center gap-5 px-5">
            <span className="font-display text-2xl md:text-4xl text-[color:var(--fg-dim)] whitespace-nowrap select-none">
              {tag}
            </span>
            <Star />
          </div>
        ))}
      </MarqueeUI>
    </section>
  );
}
