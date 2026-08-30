"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { personal } from "@/lib/data";
import { MagneticButton } from "@/components/MagneticButton";
import ThemeToggle from "@/components/ThemeToggle";
import { ArrowUpRight, ArrowDown } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const navLinks = [
  { href: "#work",       label: "Work"       },
  { href: "#about",      label: "About"      },
  { href: "#skills",     label: "Stack"      },
  { href: "#experience", label: "Experience" },
  { href: "#contact",    label: "Contact"    },
];

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroY       = useTransform(scrollYProgress, [0, 0.2], [0, -40]);

  return (
    <section id="top" className="relative min-h-screen w-full flex flex-col overflow-hidden">
      {/* Subtle ambient — hero only, very restrained */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob top-[20%] left-[10%] w-[500px] h-[500px] bg-violet-700/10 float-slow" />
        <div className="blob bottom-[15%] right-[8%] w-[420px] h-[420px] bg-cyan-600/7" />
      </div>

      {/* ── Header ─────────────────────────────────────────────────── */}
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.05 }}
        className="relative z-20 flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8"
      >
        <a
          href={`mailto:${personal.email}`}
          data-cursor-label="Email"
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase font-mono text-[color:var(--fg-dim)] hover:text-[color:var(--fg)] transition-colors"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Available for work
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-[12px] font-mono tracking-wide text-[color:var(--fg-dim)] hover:text-[color:var(--fg)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <MagneticButton
            as="a"
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-label="Download"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[color:var(--border-strong)] text-[11px] tracking-[0.15em] uppercase font-mono text-[color:var(--fg)] hover:bg-[color:var(--bg-elevated)] transition-colors"
          >
            Resume
            <ArrowUpRight size={10} />
          </MagneticButton>
        </div>
      </motion.header>

      {/* ── Main content ─────────────────────────────────────────────── */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-10 max-w-7xl mx-auto w-full"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          className="mb-8 flex items-center gap-3 text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-mono text-[color:var(--fg-dim)]"
        >
          <span>Data Scientist</span>
          <span className="w-6 h-px bg-[color:var(--border-strong)]" />
          <span>AI Engineer</span>
          <span className="w-6 h-px bg-[color:var(--border-strong)]" />
          <span>Scale AI · NJIT MS &apos;26</span>
        </motion.div>

        {/* Name block with ruled lines */}
        <div className="border-t border-[color:var(--border-strong)]">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease, delay: 0.3 }}
            className="font-display text-[clamp(3.2rem,11.5vw,13.5rem)] leading-[0.88] text-[color:var(--fg)] py-4 md:py-6 select-none"
          >
            Prabhath
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease, delay: 0.42 }}
            className="font-display italic text-[clamp(3.2rem,11.5vw,13.5rem)] leading-[0.88] text-[color:var(--fg-dim)] pb-4 md:pb-6 select-none"
          >
            Vipparthi
          </motion.h1>
        </div>
        <div className="border-b border-[color:var(--border-strong)] mb-8 md:mb-10" />

        {/* Tagline + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <p className="text-sm md:text-base text-[color:var(--fg-dim)] max-w-lg leading-relaxed">
            4 years building predictive models, NLP systems, and production ML pipelines — at{" "}
            <span className="text-[color:var(--fg)]">Scale AI</span> and{" "}
            <span className="text-[color:var(--fg)]">HCL Tech</span>.
            MS Data Science, NJIT (GPA 3.7).
          </p>

          <div className="flex items-center gap-3 flex-shrink-0">
            <MagneticButton
              as="a"
              href="#work"
              data-cursor-label="Work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[color:var(--fg)] text-[color:var(--bg)] text-[11px] tracking-[0.18em] uppercase font-mono hover:opacity-90 transition-opacity"
            >
              View Work
              <ArrowDown size={11} />
            </MagneticButton>
            <MagneticButton
              as="a"
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="LinkedIn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[color:var(--border-strong)] text-[11px] tracking-[0.18em] uppercase font-mono text-[color:var(--fg-dim)] hover:text-[color:var(--fg)] hover:border-[color:var(--fg-dim)] transition-all"
            >
              LinkedIn
              <ArrowUpRight size={11} />
            </MagneticButton>
          </div>
        </motion.div>

        {/* ⌘K hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="mt-10 hidden md:flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-[color:var(--muted)]"
        >
          <kbd className="px-1.5 py-0.5 border border-[color:var(--border-strong)] rounded text-[9px]">⌘</kbd>
          <kbd className="px-1.5 py-0.5 border border-[color:var(--border-strong)] rounded text-[9px]">K</kbd>
          <span className="ml-1">quick nav</span>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ──────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="relative z-10 px-6 md:px-10 pb-8 md:pb-10 flex justify-end"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[color:var(--muted)]"
        >
          <ArrowDown size={14} />
          <span className="text-[9px] font-mono tracking-[0.3em] uppercase">scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
