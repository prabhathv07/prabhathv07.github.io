"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { BlurFade } from "@/components/ui/blur-fade";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 border-t border-[color:var(--border)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <BlurFade delay={0.05} inView>
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[color:var(--muted)] mb-4">
            Technical Stack
          </div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-[color:var(--fg)] leading-tight mb-12 md:mb-14">
            Tools & Technologies
          </h2>
        </BlurFade>

        <div className="space-y-0 divide-y divide-[color:var(--border)] border-t border-[color:var(--border)]">
          {skills.map((group, gi) => (
            <BlurFade key={group.category} delay={0.05 + gi * 0.05} inView>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease, delay: 0.03 + gi * 0.04 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-10 py-5 hover:bg-[color:var(--bg-surface)] transition-colors -mx-6 px-6 md:-mx-10 md:px-10"
              >
                <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[color:var(--muted)] sm:w-44 flex-shrink-0 pt-0.5">
                  {group.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, ii) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.94 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, ease, delay: 0.02 + ii * 0.015 }}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-[color:var(--bg-card)] text-[color:var(--fg-dim)] border border-[color:var(--border)] hover:border-[color:var(--border-strong)] hover:text-[color:var(--fg)] transition-all cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>

      </div>
    </section>
  );
}
