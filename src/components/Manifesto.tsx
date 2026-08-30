"use client";

import { motion } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";

const ease = [0.16, 1, 0.3, 1] as const;

const principles = [
  "Statistical rigor before conclusions",
  "Tests before shipping — always",
  "Models that explain their reasoning",
  "Production ML, not notebook demos",
  "End-to-end ownership, start to deploy",
];

export default function Manifesto() {
  return (
    <section id="about" className="border-t border-[color:var(--border-strong)] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <BlurFade delay={0.05} inView>
          <div className="mb-10 flex items-center gap-3 text-[10px] font-mono tracking-[0.3em] uppercase text-[color:var(--muted)]">
            <span>About</span>
            <span className="flex-1 h-px bg-[color:var(--border)]" />
          </div>
        </BlurFade>

        <div className="grid md:grid-cols-[1fr_380px] gap-12 md:gap-20 items-start">

          {/* Left: bio */}
          <BlurFade delay={0.08} inView>
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease }}
                className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.92] text-[color:var(--fg)] mb-8"
              >
                Think in data.
                <br />
                <em className="italic text-[color:var(--fg-dim)]">Ship systems.</em>
              </motion.h2>

              <div className="space-y-4 text-[15px] md:text-base leading-relaxed text-[color:var(--fg-dim)] max-w-xl">
                <p>
                  Data Scientist and AI Engineer with 4 years spanning enterprise analytics
                  and applied AI. Built churn models, forecasting systems, and customer
                  analytics at <span className="text-[color:var(--fg)]">HCL Tech</span>, then
                  expanded into NLP, embeddings, and retrieval-based AI at{" "}
                  <span className="text-[color:var(--fg)]">Scale AI</span>.
                </p>
                <p>
                  Currently building classification models, evaluation datasets, and production
                  ML pipelines — working across Python, PySpark, PyTorch, Hugging Face,
                  and MLflow. MS Data Science, NJIT (GPA 3.7, May 2026).
                </p>
                <p>
                  I care about the math, the tests, and models that don&apos;t just score well
                  but explain why they made the call.
                </p>
              </div>
            </div>
          </BlurFade>

          {/* Right: principles + education */}
          <BlurFade delay={0.14} inView>
            <div>
              <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-[color:var(--muted)] mb-6">
                How I work
              </div>
              <ul className="divide-y divide-[color:var(--border)]">
                {principles.map((p, i) => (
                  <motion.li
                    key={p}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease, delay: 0.06 + i * 0.06 }}
                    className="flex items-start gap-3 py-4 text-sm text-[color:var(--fg-dim)] hover:text-[color:var(--fg)] transition-colors"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[color:var(--accent)] flex-shrink-0" />
                    {p}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-[color:var(--border)]">
                <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-[color:var(--muted)] mb-3">
                  Education
                </div>
                <div className="text-sm font-medium text-[color:var(--fg)]">MS Data Science</div>
                <div className="text-xs text-[color:var(--fg-dim)] mt-1">
                  New Jersey Institute of Technology · GPA 3.7 · May 2026
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
