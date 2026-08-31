"use client";

import { motion } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";

const ease = [0.16, 1, 0.3, 1] as const;

const principles = [
  {
    number: "01",
    title: "Ship what runs.",
    body:
      "Production over prototype. A model that hits 0.94 in a notebook but drifts in the first week isn't shipped — it's abandoned. I care about the version that survives real data, real users, and real Mondays.",
    tag: "Reliability",
  },
  {
    number: "02",
    title: "Explain the model, not just its score.",
    body:
      "SHAP values, decision logs, audit trails. Stakeholders don't sign off on ROC-AUC — they sign off on \"why did this customer get flagged.\" Every classifier I ship comes with a plain-English answer to that question.",
    tag: "Interpretability",
  },
  {
    number: "03",
    title: "Test the pipeline, not just the notebook.",
    body:
      "ML fails silently. Wrong join, drifted feature, stale schema — the model still returns a number. 700+ automated tests across my projects because catching it at 3am with a paged alert is worse than catching it in CI.",
    tag: "Rigor",
  },
];

export default function Principles() {
  return (
    <section
      id="principles"
      className="py-20 md:py-28 border-t border-[color:var(--border)] relative overflow-hidden"
    >
      {/* subtle background accent */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 20%, var(--accent-glow-1) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <BlurFade delay={0.05} inView>
          <div className="mb-14 md:mb-20 max-w-2xl">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[color:var(--muted)] mb-4">
              How I work
            </div>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-[color:var(--fg)] leading-[1.1] tracking-[-0.02em]">
              Three things I care about,
              <br />
              <span className="text-[color:var(--fg-dim)]">learned the hard way.</span>
            </h2>
          </div>
        </BlurFade>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -3 }}
              className="relative rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-card)] p-6 md:p-8 flex flex-col"
              style={{ boxShadow: "var(--shadow-sm)" }}
            >
              {/* Number + tag row */}
              <div className="flex items-center justify-between mb-6">
                <div className="font-display font-semibold text-3xl md:text-4xl text-[color:var(--accent)] tracking-[-0.02em]">
                  {p.number}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[color:var(--fg-dim)] px-2 py-1 rounded border border-[color:var(--border)]">
                  {p.tag}
                </span>
              </div>

              <h3 className="font-display font-semibold text-xl md:text-2xl text-[color:var(--fg)] leading-[1.2] tracking-[-0.015em] mb-4">
                {p.title}
              </h3>

              <p className="text-[15px] text-[color:var(--fg-dim)] leading-[1.7]">
                {p.body}
              </p>

              {/* corner mark */}
              <div
                aria-hidden
                className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[color:var(--accent)] opacity-40"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
