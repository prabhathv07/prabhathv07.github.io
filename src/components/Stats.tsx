"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BlurFade } from "@/components/ui/blur-fade";

const ease = [0.16, 1, 0.3, 1] as const;

function parseStatValue(v: string): { prefix: string; num: number | null; suffix: string } {
  const m = v.match(/^([~]?)([0-9,.]+)([KM+]*)$/);
  if (!m) return { prefix: "", num: null, suffix: v };
  return {
    prefix: m[1] || "",
    num: parseFloat(m[2].replace(/,/g, "")),
    suffix: m[3] || "",
  };
}

export default function Stats() {
  return (
    <section className="border-t border-[color:var(--border-strong)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[color:var(--border)]">
          {stats.map((stat, i) => {
            const { prefix, num, suffix } = parseStatValue(stat.value);
            return (
              <BlurFade key={stat.label} delay={0.05 + i * 0.06} inView>
                <motion.div
                  whileHover={{ backgroundColor: "var(--bg-elevated)" }}
                  transition={{ duration: 0.2 }}
                  className="px-6 md:px-8 py-10 md:py-12 cursor-default border-b border-t-0 border-r-0 border-l-0 border-[color:var(--border)] md:border-b-0"
                >
                  <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[color:var(--muted)] mb-4">
                    {stat.label}
                  </div>
                  <div className="font-display text-5xl md:text-6xl text-[color:var(--fg)] leading-none mb-2">
                    {prefix}
                    {num !== null ? (
                      <NumberTicker
                        value={num}
                        decimalPlaces={num % 1 !== 0 ? 2 : 0}
                        className="font-display text-5xl md:text-6xl text-[color:var(--fg)]"
                      />
                    ) : stat.value}
                    {suffix}
                  </div>
                  <div className="text-xs text-[color:var(--fg-dim)] leading-relaxed font-mono">
                    {stat.note}
                  </div>
                </motion.div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
