"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BlurFade } from "@/components/ui/blur-fade";

const ease = [0.16, 1, 0.3, 1] as const;

function parseStatValue(value: string): { prefix: string; num: number | null; suffix: string } {
  const match = value.match(/^([~]?)([0-9,.]+)([K+M]*)?$/);
  if (!match) return { prefix: "", num: null, suffix: value };
  const prefix = match[1] || "";
  const num = parseFloat(match[2].replace(/,/g, ""));
  const suffix = match[3] || "";
  return { prefix, num, suffix };
}

export default function Stats() {
  return (
    <section className="relative py-24 md:py-32 border-t hairline overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <BlurFade delay={0.1} inView>
          <div className="mb-12 flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-[color:var(--fg-dim)] font-mono">
            <span className="h-px w-8 bg-[color:var(--border-strong)]" />
            <span>By the numbers</span>
          </div>
        </BlurFade>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const { prefix, num, suffix } = parseStatValue(stat.value);
            return (
              <BlurFade key={stat.label} delay={0.1 + i * 0.07} inView>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.3, ease } }}
                  className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden group cursor-default"
                >
                  <div className="absolute inset-0 bg-[color:var(--accent)] opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500" />
                  <div className="relative">
                    <div className="text-[10px] tracking-[0.25em] uppercase text-[color:var(--fg-dim)] font-mono mb-4">
                      {stat.label}
                    </div>
                    <div className="font-display text-5xl md:text-6xl text-[color:var(--fg)] mb-3 leading-none">
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
                    <div className="text-xs text-[color:var(--fg-dim)] leading-relaxed">
                      {stat.note}
                    </div>
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
