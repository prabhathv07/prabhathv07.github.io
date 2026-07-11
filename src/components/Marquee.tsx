"use client";

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
      className="w-4 h-4 flex-shrink-0 text-white/40"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4z" />
    </svg>
  );
}

export default function Marquee() {
  return (
    <section className="relative py-8 md:py-12 border-y hairline overflow-hidden">
      <div className="flex whitespace-nowrap marquee-track">
        {[...tags, ...tags].map((tag, i) => (
          <div key={i} className="flex items-center gap-6 px-6">
            <span className="font-display text-3xl md:text-5xl text-white/80">
              {tag}
            </span>
            <Star />
          </div>
        ))}
      </div>
    </section>
  );
}
