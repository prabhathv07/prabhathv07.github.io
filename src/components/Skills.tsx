"use client";

import { useState, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { skills } from "@/lib/data";
import { BlurFade } from "@/components/ui/blur-fade";

const ease = [0.16, 1, 0.3, 1] as const;

// Weight — controls chip size (roughly proficiency signal). Uses index as a soft ordering.
function chipSize(idx: number, total: number) {
  const t = 1 - idx / Math.max(total - 1, 1);
  return 0.85 + t * 0.5; // 0.85 → 1.35 scale
}

export default function Skills() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const totalItems = useMemo(
    () => skills.reduce((s, g) => s + g.items.length, 0),
    []
  );

  return (
    <section
      id="skills"
      className="py-20 md:py-28 border-t border-[color:var(--border)] relative overflow-hidden"
    >
      {/* subtle background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 100% 0%, var(--accent-glow-1) 0%, transparent 60%), radial-gradient(ellipse 40% 30% at 0% 100%, var(--accent-glow-2) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <BlurFade delay={0.05} inView>
          <div className="flex items-end justify-between gap-6 mb-14 md:mb-16 flex-wrap">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[color:var(--muted)] mb-4">
                Technical Stack · {totalItems} tools
              </div>
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-[color:var(--fg)] leading-tight tracking-[-0.02em]">
                Everything I actually use.
              </h2>
            </div>
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[color:var(--muted)] max-w-sm">
              {active
                ? `Selected: ${active}`
                : "Hover a category to isolate · click a tool to lock focus"}
            </div>
          </div>
        </BlurFade>

        <div className="grid md:grid-cols-[220px_1fr] gap-8 md:gap-12">
          {/* Category rail */}
          <div className="flex md:flex-col gap-2 md:gap-0 overflow-x-auto md:overflow-visible pb-2 md:pb-0 no-scrollbar">
            {skills.map((group, gi) => {
              const isHover = hoveredCategory === gi;
              return (
                <button
                  key={group.category}
                  onMouseEnter={() => setHoveredCategory(gi)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  onFocus={() => setHoveredCategory(gi)}
                  onBlur={() => setHoveredCategory(null)}
                  className={`text-left flex-shrink-0 md:flex-shrink px-4 py-3 md:py-4 rounded-lg md:rounded-none border md:border-x-0 md:border-t-0 md:border-b transition-all ${
                    isHover
                      ? "border-[color:var(--accent)] md:border-[color:var(--accent)] bg-[color:var(--accent-dim)]"
                      : "border-[color:var(--border)] md:border-[color:var(--border)] hover:border-[color:var(--border-strong)] md:hover:bg-[color:var(--bg-surface)]"
                  }`}
                  data-cursor-label="View"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div
                        className={`text-[10px] font-mono uppercase tracking-[0.18em] mb-1 transition-colors ${
                          isHover ? "text-[color:var(--accent)]" : "text-[color:var(--muted)]"
                        }`}
                      >
                        {String(gi + 1).padStart(2, "0")}
                      </div>
                      <div
                        className={`text-sm font-medium transition-colors ${
                          isHover ? "text-[color:var(--fg)]" : "text-[color:var(--fg-dim)]"
                        }`}
                      >
                        {group.category}
                      </div>
                    </div>
                    <div
                      className={`text-[10px] font-mono transition-colors ${
                        isHover ? "text-[color:var(--accent)]" : "text-[color:var(--muted)]"
                      }`}
                    >
                      {group.items.length}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Constellation */}
          <div className="min-h-[420px] md:min-h-[520px] relative rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-card)] p-6 md:p-10 overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                background:
                  "radial-gradient(circle at center, var(--accent-dim) 0%, transparent 65%)",
              }}
            />

            <div className="relative flex flex-wrap items-center justify-center gap-2.5 md:gap-3 h-full min-h-[360px] py-6">
              {skills.map((group, gi) =>
                group.items.map((item, ii) => {
                  const dim =
                    hoveredCategory !== null && hoveredCategory !== gi ? true : false;
                  const highlight =
                    hoveredCategory === gi || active === item;
                  const size = chipSize(ii, group.items.length);
                  return (
                    <motion.button
                      key={`${group.category}-${item}`}
                      onClick={() =>
                        setActive((prev) => (prev === item ? null : item))
                      }
                      initial={{ opacity: 0, scale: 0.6, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        duration: reduced ? 0.01 : 0.45,
                        ease,
                        delay: reduced ? 0 : 0.02 * (gi * 4 + ii * 0.5),
                      }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      style={{ fontSize: `${size * 0.82}rem` }}
                      className={`relative font-mono px-3 py-1.5 rounded-full border transition-all whitespace-nowrap ${
                        highlight
                          ? "bg-[color:var(--accent)] text-white border-[color:var(--accent)] shadow-[0_2px_16px_var(--accent-glow-1)]"
                          : dim
                          ? "bg-[color:var(--bg-surface)] text-[color:var(--muted)] border-[color:var(--border)] opacity-40"
                          : "bg-[color:var(--bg-surface)] text-[color:var(--fg-dim)] border-[color:var(--border)] hover:border-[color:var(--accent)] hover:text-[color:var(--fg)]"
                      }`}
                      data-cursor-label="View"
                    >
                      {item}
                    </motion.button>
                  );
                })
              )}
            </div>

            {/* Metric strip at bottom */}
            <div className="relative mt-6 pt-6 border-t border-[color:var(--border)] grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-display font-semibold text-[color:var(--fg)] tracking-[-0.01em]">
                  {skills.length}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[color:var(--muted)] mt-1">
                  Categories
                </div>
              </div>
              <div>
                <div className="text-2xl font-display font-semibold text-[color:var(--fg)] tracking-[-0.01em]">
                  {totalItems}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[color:var(--muted)] mt-1">
                  Tools
                </div>
              </div>
              <div>
                <div className="text-2xl font-display font-semibold text-[color:var(--fg)] tracking-[-0.01em]">
                  4y
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[color:var(--muted)] mt-1">
                  In production
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
