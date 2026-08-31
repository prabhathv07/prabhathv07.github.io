"use client";

import { Marquee as MarqueeUI } from "@/components/ui/marquee";

const tech = [
  "Python", "PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face",
  "Transformers", "spaCy", "PySpark", "Apache Spark", "Databricks",
  "dbt", "Airflow", "DuckDB", "PostgreSQL", "pgvector",
  "FastAPI", "MLflow", "Docker", "Kubernetes", "Azure",
  "AWS", "vLLM", "Gemini", "RAG", "SHAP",
  "tree-sitter", "Streamlit", "Power BI",
];

export default function Marquee() {
  return (
    <div className="border-t border-b border-[color:var(--border)] py-6 overflow-hidden bg-[color:var(--bg-surface)]/40">
      <div className="max-w-6xl mx-auto px-6 md:px-10 mb-3 flex items-center justify-between">
        <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-[color:var(--muted)]">
          Stack in production
        </div>
        <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-[color:var(--muted)] hidden sm:block">
          {tech.length}+ tools
        </div>
      </div>
      <MarqueeUI pauseOnHover className="[--duration:60s] [--gap:0px]">
        {tech.map((t) => (
          <div key={t} className="inline-flex items-center">
            <span className="font-display font-medium text-lg md:text-2xl text-[color:var(--fg)] whitespace-nowrap select-none tracking-[-0.01em] px-5">
              {t}
            </span>
            <span className="w-1 h-1 rounded-full bg-[color:var(--accent)] flex-shrink-0" />
          </div>
        ))}
      </MarqueeUI>
    </div>
  );
}
