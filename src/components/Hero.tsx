"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { personal, stats } from "@/lib/data";
import NeuralField from "@/components/NeuralField";
import SplitText from "@/components/SplitText";
import { MagneticButton } from "@/components/MagneticButton";
import { NumberTicker } from "@/components/ui/number-ticker";
import { useEffect, useState } from "react";

function AnimatedStat({ value }: { value: string }) {
  // Parse numeric prefix, keep suffix (M, K, +, etc.)
  const match = value.match(/^([~<>]?)([\d.,]+)(.*)$/);
  if (!match) return <>{value}</>;
  const [, prefix, num, suffix] = match;
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  const numeric = parseFloat(num.replace(/,/g, ""));
  return (
    <span>
      {prefix}
      <NumberTicker value={numeric} decimalPlaces={decimals} />
      {suffix}
    </span>
  );
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduced = useReducedMotion();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const check = () => {
      const t = document.documentElement.getAttribute("data-theme");
      setTheme(t === "dark" ? "dark" : "light");
    };
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);

  const dim = theme === "dark" ? "240, 237, 232" : "17, 17, 17";
  const accent = theme === "dark" ? "20, 184, 166" : "15, 118, 110";

  return (
    <section
      id="top"
      className="relative min-h-[calc(100dvh-3.5rem)] flex flex-col justify-between overflow-hidden"
    >
      {/* WebGL neural field background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <NeuralField
          className="absolute inset-0 w-full h-full opacity-[0.65]"
          accent={accent}
          dim={dim}
        />
        {/* radial fade to keep text legible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 22% 45%, var(--bg) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Main content ──────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 w-full">

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease }}
          className="mb-8 inline-flex items-center gap-2 text-xs font-mono text-[color:var(--fg-dim)] border border-[color:var(--border)] bg-[color:var(--bg-card)] rounded-full px-3 py-1.5 w-fit backdrop-blur-sm"
          style={{ boxShadow: "var(--shadow-xs)" }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          Available for full-time · Anywhere in the US
        </motion.div>

        {/* Cinematic headline */}
        <h1 className="font-display font-semibold text-[clamp(2.6rem,7.5vw,6rem)] leading-[1.02] text-[color:var(--fg)] mb-4 tracking-[-0.03em]">
          {reduced ? (
            <>
              Data Scientist<br />
              <span className="text-[color:var(--accent)]">&</span> AI Engineer
            </>
          ) : (
            <>
              <SplitText delay={0.1} stagger={0.09} duration={1.0} className="block">
                Data Scientist
              </SplitText>
              <SplitText
                delay={0.55}
                stagger={0.08}
                duration={1.0}
                className="block"
                wrapper={(word, i) =>
                  i === 0 ? <span className="text-[color:var(--accent)]">{word}</span> : word
                }
              >
                & AI Engineer
              </SplitText>
            </>
          )}
        </h1>

        {/* Name */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease, delay: 1.1 }}
          className="text-lg font-medium text-[color:var(--fg-dim)] mb-8"
        >
          Prabhath Vipparthi
        </motion.p>

        {/* Bio + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 1.2 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div className="max-w-xl space-y-3">
            <p className="text-base text-[color:var(--fg-dim)] leading-[1.65]">
              I&rsquo;ve spent the last four years shipping ML in production &mdash;
              embedding retrieval and classification pipelines at{" "}
              <span className="text-[color:var(--fg)] font-medium">Scale AI</span>, and
              churn and demand-forecasting models at{" "}
              <span className="text-[color:var(--fg)] font-medium">HCL Tech</span> before that.
              Wrapping up my MS in Data Science at NJIT this May.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <MagneticButton
              as="a"
              href="#work"
              data-cursor-label="Work"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[color:var(--accent)] text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              View Work <ArrowRight size={13} />
            </MagneticButton>
            <MagneticButton
              as="a"
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="LinkedIn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[color:var(--border-strong)] text-sm text-[color:var(--fg-dim)] hover:text-[color:var(--fg)] bg-[color:var(--bg-card)] transition-all"
            >
              LinkedIn <ArrowUpRight size={12} />
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      {/* ── Stats strip ───────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 1.35 }}
        className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pb-10 md:pb-14 w-full"
      >
        <div
          className="grid grid-cols-2 sm:grid-cols-4 rounded-xl overflow-hidden border border-[color:var(--border)] backdrop-blur-sm"
          style={{ boxShadow: "var(--shadow-sm)" }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`bg-[color:var(--bg-card)]/90 px-6 py-5 flex flex-col gap-1 ${
                i < stats.length - 1 ? "border-r border-[color:var(--border)]" : ""
              }`}
            >
              <span className="font-display font-semibold text-2xl md:text-3xl text-[color:var(--fg)] tabular-nums">
                <AnimatedStat value={s.value} />
              </span>
              <span className="text-xs text-[color:var(--muted)] leading-snug">{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.4, delay: 1.8, repeat: Infinity, repeatDelay: 0.4 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[9px] font-mono tracking-[0.2em] text-[color:var(--muted)] uppercase pointer-events-none"
      >
        scroll
      </motion.div>
    </section>
  );
}
