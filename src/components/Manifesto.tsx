"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFade } from "@/components/ui/blur-fade";

const words = [
  { text: "I",          accent: false },
  { text: "analyze",    accent: true  },
  { text: "data,",      accent: false },
  { text: "ship",       accent: true  },
  { text: "pipelines,", accent: false },
  { text: "and",        accent: false },
  { text: "train",      accent: true  },
  { text: "models",     accent: false },
  { text: "that",       accent: false },
  { text: "explain",    accent: true  },
  { text: "themselves.",accent: false },
];

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.15, 1, 1, 0.3]);
  const y       = useTransform(scrollYProgress, [0, 0.5], [40, 0]);

  return (
    <section id="about" ref={ref} className="relative py-32 md:py-52 overflow-hidden">
      <div className="blob top-[20%] left-[-8%]  w-[480px] h-[480px] bg-violet-600/10" />
      <div className="blob bottom-[10%] right-[-8%] w-[480px] h-[480px] bg-cyan-500/10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <BlurFade delay={0.05} inView>
          <div className="mb-10 md:mb-14 flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-[color:var(--fg-dim)] font-mono">
            <span className="h-px w-8 bg-[color:var(--border-strong)]" />
            <span>About</span>
          </div>
        </BlurFade>

        {/* Scroll-driven word reveal */}
        <motion.h2
          style={{ opacity, y }}
          className="font-display leading-[1] text-[9vw] md:text-[6.5vw] text-[color:var(--fg)] flex flex-wrap gap-x-[0.18em] gap-y-[0.08em]"
        >
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85, delay: i * 0.055, ease: [0.16, 1, 0.3, 1] }}
              className={w.accent ? "text-gradient-accent italic" : ""}
            >
              {w.text}
            </motion.span>
          ))}
        </motion.h2>

        {/* Bio paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 md:mt-24 grid md:grid-cols-2 gap-8 md:gap-16 ml-auto max-w-4xl"
        >
          <p className="text-base md:text-lg leading-relaxed text-[color:var(--fg-dim)]">
            MS Data Science at NJIT (GPA&nbsp;3.7, May&nbsp;2026). Currently building AI pipelines at&nbsp;
            <span className="text-[color:var(--fg)] font-medium">Scale AI</span> — classification models,
            Hugging&nbsp;Face embeddings, MLflow deployments, PySpark workloads.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-[color:var(--fg-dim)]">
            Previously at <span className="text-[color:var(--fg)] font-medium">HCL Tech</span> for three years —
            churn modeling, demand forecasting, Airflow automation, Databricks pipelines.
            The constant across all of it: the math holds up, the tests catch the regressions,
            and the output explains itself.
          </p>
        </motion.div>

        {/* Key philosophy pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-12 flex flex-wrap gap-3"
        >
          {[
            "Production ML over notebooks",
            "Tests before shipping",
            "Explainability by default",
            "End-to-end ownership",
            "Math-first thinking",
          ].map((pill) => (
            <span
              key={pill}
              className="glass px-4 py-2 rounded-full text-[12px] font-mono tracking-wide text-[color:var(--fg-dim)]"
            >
              {pill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
