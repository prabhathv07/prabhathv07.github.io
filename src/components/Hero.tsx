"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { personal, stats } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section id="top" className="min-h-[calc(100dvh-3.5rem)] flex flex-col justify-between">
      {/* ── Main content ──────────────────────────────────────── */}
      <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 w-full">

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease }}
          className="mb-8 inline-flex items-center gap-2 text-xs font-mono text-[color:var(--fg-dim)] border border-[color:var(--border)] bg-[color:var(--bg-card)] rounded-full px-3 py-1.5 w-fit"
          style={{ boxShadow: "var(--shadow-xs)" }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          Available for full-time opportunities · Anywhere in the US
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease, delay: 0.08 }}
          className="font-display font-semibold text-[clamp(2.6rem,7vw,5.5rem)] leading-[1.04] text-[color:var(--fg)] mb-3"
        >
          Data Scientist
          <br />
          <span className="text-[color:var(--accent)]">&</span> AI Engineer.
        </motion.h1>

        {/* Name */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease, delay: 0.2 }}
          className="text-lg font-medium text-[color:var(--fg-dim)] mb-8"
        >
          Prabhath Vipparthi
        </motion.p>

        {/* Bio + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.28 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div className="max-w-xl space-y-3">
            <p className="text-base text-[color:var(--fg-dim)] leading-[1.65]">
              4 years building production ML systems, NLP pipelines, and RAG platforms at{" "}
              <span className="text-[color:var(--fg)] font-medium">Scale AI</span> and{" "}
              <span className="text-[color:var(--fg)] font-medium">HCL Tech</span>.{" "}
              MS Data Science, NJIT (GPA 3.7, May 2026).
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[color:var(--muted)]">
              <MapPin size={11} />
              Harrison, NJ (NYC metro) · Open to relocation anywhere in the US
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="#work"
              data-cursor-label="Work"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[color:var(--accent)] text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              View Work <ArrowRight size={13} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="LinkedIn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[color:var(--border-strong)] text-sm text-[color:var(--fg-dim)] hover:text-[color:var(--fg)] hover:border-[color:var(--border-strong)] bg-[color:var(--bg-card)] transition-all"
              style={{ boxShadow: "var(--shadow-xs)" }}
            >
              LinkedIn <ArrowUpRight size={12} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── Stats strip ───────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.45 }}
        className="max-w-6xl mx-auto px-6 md:px-10 pb-10 md:pb-14 w-full"
      >
        <div
          className="grid grid-cols-2 sm:grid-cols-4 rounded-xl overflow-hidden border border-[color:var(--border)]"
          style={{ boxShadow: "var(--shadow-sm)" }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`bg-[color:var(--bg-card)] px-6 py-5 flex flex-col gap-1 ${
                i < stats.length - 1 ? "border-r border-[color:var(--border)]" : ""
              }`}
            >
              <span className="font-display font-semibold text-2xl md:text-3xl text-[color:var(--fg)]">
                {s.value}
              </span>
              <span className="text-xs text-[color:var(--muted)] leading-snug">{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
