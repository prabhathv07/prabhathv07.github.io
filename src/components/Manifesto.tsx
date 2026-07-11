"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const words = [
  { text: "I", accent: false },
  { text: "ANALYZE", accent: true },
  { text: "DATA,", accent: false },
  { text: "SHIP", accent: true },
  { text: "PIPELINES,", accent: false },
  { text: "AND", accent: false },
  { text: "TRAIN", accent: true },
  { text: "MODELS", accent: false },
  { text: "THAT", accent: false },
  { text: "EXPLAIN", accent: true },
  { text: "THEMSELVES.", accent: false },
];

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.2, 1, 1, 0.4],
  );

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 md:py-48 overflow-hidden"
    >
      <div className="blob top-[20%] left-[-10%] w-[500px] h-[500px] bg-violet-600/10" />
      <div className="blob bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="mb-10 md:mb-14 flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-white/50 font-mono">
          <span className="h-px w-8 bg-white/30" />
          <span>Manifesto</span>
        </div>

        <motion.h2
          style={{ opacity }}
          className="font-display leading-[0.9] text-[10vw] md:text-[7vw] text-white flex flex-wrap gap-x-[0.15em]"
        >
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.9,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={
                w.accent
                  ? "italic bg-gradient-to-br from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
                  : ""
              }
            >
              {w.text}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-16 md:mt-24 max-w-2xl text-base md:text-lg leading-relaxed text-white/70 ml-auto"
        >
          Master&apos;s in Data Science at NJIT (GPA 3.7, May 2026). I work
          across the full data stack — SQL analytics and hypothesis testing on
          real e-commerce data, 5.97M-row medallion pipelines with PySpark and
          dbt, machine-learning models with SHAP explainability on clinical and
          financial datasets, and production RAG systems on pgvector. Whatever
          the layer, the constants stay the same: the math holds up, the tests
          catch the regressions, and the output explains itself.
        </motion.p>
      </div>
    </section>
  );
}
