"use client";

import { BlurFade } from "@/components/ui/blur-fade";

const focuses = [
  {
    area: "ML & Modeling",
    items: [
      "Classification & regression (scikit-learn, PyTorch, TensorFlow)",
      "Cross-validation, precision/recall tuning, ROC-AUC",
      "Feature engineering, SMOTE, SHAP explainability",
    ],
  },
  {
    area: "NLP & AI Systems",
    items: [
      "Transformers, Hugging Face, spaCy, embeddings",
      "RAG pipelines with pgvector and similarity search",
      "LLM evaluation, LLM-as-a-Judge, vLLM inference",
    ],
  },
  {
    area: "Data Engineering",
    items: [
      "PySpark, Apache Spark, Databricks at scale",
      "dbt, Apache Airflow, DuckDB, medallion architecture",
      "ETL pipelines, data quality tests, Apache Arrow",
    ],
  },
  {
    area: "MLOps & Deployment",
    items: [
      "MLflow experiment tracking and model registry",
      "Docker, Kubernetes, Azure, AWS, Render",
      "Model monitoring, data drift detection, CI/CD",
    ],
  },
];

export default function Manifesto() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-[color:var(--border)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">

          {/* Left: bio */}
          <BlurFade delay={0.05} inView>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[color:var(--muted)] mb-6">
                About
              </div>
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-[color:var(--fg)] leading-[1.15] mb-8">
                Building ML systems
                <br />
                that work in production.
              </h2>
              <div className="space-y-4 text-base text-[color:var(--fg-dim)] leading-[1.7]">
                <p>
                  My path into ML started at HCL Tech, sitting between business
                  stakeholders and the modelling team &mdash; turning &ldquo;we&rsquo;re
                  losing customers&rdquo; into 30+ features, a Random Forest with
                  cross-validated ROC-AUC, and a Tableau dashboard the ops team could
                  actually read. Three years of that taught me the boring truth of
                  production ML: the model is 20% of the work.
                </p>
                <p>
                  At{" "}
                  <strong className="text-[color:var(--fg)] font-medium">Scale AI</strong>{" "}
                  I&rsquo;m closer to the model itself &mdash; classification models with
                  threshold tuning for minority-class recall, embedding retrieval over
                  Hugging Face transformers, and PySpark pipelines that got 28% faster
                  once I stopped shuffling data unnecessarily. The tools change but the
                  loop is the same: measure, ship, watch, fix.
                </p>
                <p>
                  Outside work, I ship things end-to-end. A pre-market briefing platform
                  running every weekday on ~130 symbols. A 5.97M-row NYC taxi pipeline
                  with 23 data-quality tests. A StarCoder2 self-alignment pipeline that
                  distilled 30k TypeScript files into 448 instruction-response pairs.
                  All on GitHub, all with the tests.
                </p>
                <p>
                  I&rsquo;m finishing my{" "}
                  <strong className="text-[color:var(--fg)] font-medium">
                    MS in Data Science at NJIT
                  </strong>{" "}
                  this May (GPA 3.7) and looking for the next full-time role &mdash;
                  data scientist, AI engineer, ML engineer, whichever title the team uses
                  for &ldquo;this person owns the ML system end-to-end.&rdquo;
                </p>
              </div>
            </div>
          </BlurFade>

          {/* Right: focus areas */}
          <BlurFade delay={0.12} inView>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[color:var(--muted)] mb-6">
                What I do
              </div>
              <div className="space-y-7">
                {focuses.map((group) => (
                  <div key={group.area}>
                    <h3 className="text-sm font-semibold text-[color:var(--fg)] mb-2.5">
                      {group.area}
                    </h3>
                    <ul className="space-y-1.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-[color:var(--fg-dim)] flex items-start gap-2.5 leading-[1.55]"
                        >
                          <span className="mt-[0.45em] w-1 h-1 rounded-full bg-[color:var(--accent)] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>

        </div>
      </div>
    </section>
  );
}
