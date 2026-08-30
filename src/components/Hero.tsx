"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { personal, heroBio, heroNote } from "@/lib/data";
import { MagneticButton } from "@/components/MagneticButton";
import ThemeToggle from "@/components/ThemeToggle";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const NeuralSphere = dynamic(() => import("./NeuralSphere"), { ssr: false });

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
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroY       = useTransform(scrollYProgress, [0, 0.25], [0, -60]);

  return (
    <section id="top" className="relative min-h-screen w-full flex flex-col overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 accent-glow opacity-60" />
      <div className="blob top-[15%] left-[8%]  w-[520px] h-[520px] bg-violet-600/15 float-slow" />
      <div className="blob top-[45%] right-[8%] w-[600px] h-[600px] bg-cyan-500/10" />
      <div className="blob bottom-[8%] left-[38%] w-[400px] h-[400px] bg-fuchsia-500/10" />

      {/* ── Header ─────────────────────────────────────────────── */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.1 }}
        className="relative z-20 flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8"
      >
        {/* Status badge */}
        <a
          href={`mailto:${personal.email}`}
          data-cursor-label="Email"
          className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] tracking-[0.18em] uppercase font-mono text-[color:var(--fg)] hover:bg-white/8 transition-all"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Available for work
        </a>

        {/* Nav */}
        <nav className="hidden lg:flex items-center gap-1 glass rounded-full px-2 py-1.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-[12px] text-[color:var(--fg-dim)] hover:text-[color:var(--fg)] hover:bg-white/8 rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MagneticButton
            as="a"
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-label="Download"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--fg)] text-[color:var(--bg)] text-[11px] tracking-[0.15em] uppercase font-mono hover:opacity-90 transition-opacity"
          >
            Resume
            <ArrowUpRight size={11} />
          </MagneticButton>
        </div>
      </motion.header>

      {/* ── Name + Sphere ───────────────────────────────────────── */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-10"
      >
        {/* Role labels */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="mb-4 md:mb-6 flex items-center gap-3 text-[10px] md:text-[11px] tracking-[0.32em] uppercase text-[color:var(--fg-dim)] font-mono"
        >
          <span className="text-[color:var(--fg)]">Data Scientist</span>
          <span className="h-px w-6 bg-[color:var(--border-strong)]" />
          <span>AI Engineer</span>
          <span className="h-px w-6 bg-[color:var(--border-strong)]" />
          <span>Scale AI · HCL Tech</span>
        </motion.div>

        {/* Giant name + sphere */}
        <div className="relative flex flex-col items-center leading-[0.85] w-full select-none">
          <motion.h1
            initial={{ opacity: 0, y: 70, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0,  filter: "blur(0px)"  }}
            transition={{ duration: 1.2, ease, delay: 0.35 }}
            className="font-display text-[22vw] md:text-[16vw] text-[color:var(--fg)] text-center"
          >
            {personal.firstName}
          </motion.h1>

          {/* Sphere inset */}
          <div className="relative w-full flex items-center justify-center -mt-[6vw] md:-mt-[5vw]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease, delay: 0.5 }}
              className="relative w-[38vw] md:w-[28vw] max-w-[480px] aspect-square"
            >
              <NeuralSphere />
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 70, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0,  filter: "blur(0px)"  }}
            transition={{ duration: 1.2, ease, delay: 0.5 }}
            className="font-display text-[22vw] md:text-[16vw] italic text-[color:var(--fg)] text-center -mt-[6vw] md:-mt-[5vw]"
          >
            {personal.lastName}
          </motion.h1>
        </div>
      </motion.div>

      {/* ── Footer strip ────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 0.85 }}
        className="relative z-10 px-6 md:px-10 pb-8 md:pb-10 grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-10 max-w-7xl mx-auto w-full items-end"
      >
        <p className="text-sm md:text-[15px] leading-relaxed text-[color:var(--fg-dim)] max-w-md">
          {heroBio}
        </p>

        {/* Scroll indicator */}
        <div className="hidden md:flex flex-col items-center gap-2">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-[color:var(--fg-dim)]" />
          </motion.div>
          <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[color:var(--muted)] rotate-0">
            scroll
          </span>
        </div>

        <p className="text-sm md:text-[15px] leading-relaxed text-[color:var(--fg-dim)] md:text-right max-w-md ml-auto">
          {heroNote}
        </p>
      </motion.div>

      {/* ── Command palette hint ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-[color:var(--muted)]"
      >
        <kbd className="px-1.5 py-0.5 border border-[color:var(--border-strong)] rounded text-[9px]">⌘</kbd>
        <kbd className="px-1.5 py-0.5 border border-[color:var(--border-strong)] rounded text-[9px]">K</kbd>
        <span className="ml-1">quick nav</span>
      </motion.div>
    </section>
  );
}
