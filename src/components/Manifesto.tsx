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
                  I'm a Data Scientist and AI Engineer with 4 years of experience building
                  production ML systems across enterprise and AI-native environments.
                </p>
                <p>
                  Currently at{" "}
                  <strong className="text-[color:var(--fg)] font-medium">Scale AI</strong> as
                  an Applied AI Engineer — I prepare training datasets, engineer ML features,
                  build classification models, and implement embedding-based retrieval
                  workflows that reduce manual review effort by 25%.
                </p>
                <p>
                  Before Scale AI, I spent over 3 years at{" "}
                  <strong className="text-[color:var(--fg)] font-medium">HCL Tech</strong>{" "}
                  building churn prediction and demand forecasting models for enterprise
                  clients — improving high-risk recall by 18% and cutting forecast error
                  by approximately 15%.
                </p>
                <p>
                  I'm completing my{" "}
                  <strong className="text-[color:var(--fg)] font-medium">
                    MS in Data Science at NJIT
                  </strong>{" "}
                  (GPA 3.7, May 2026) and actively looking for my next full-time role.
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
