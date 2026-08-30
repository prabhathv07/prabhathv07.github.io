"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { BlurFade } from "@/components/ui/blur-fade";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Skills() {
  return (
    <section id="skills" className="border-t border-[color:var(--border-strong)] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <BlurFade delay={0.05} inView>
          <div className="mb-10 flex items-center gap-3 text-[10px] font-mono tracking-[0.3em] uppercase text-[color:var(--muted)]">
            <span>Toolkit</span>
            <span className="flex-1 h-px bg-[color:var(--border)]" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-[color:var(--fg)] mb-16">
            My <em className="italic text-[color:var(--fg-dim)]">Stack</em>
          </h2>
        </BlurFade>

        <div className="border-t border-[color:var(--border)]">
          {skills.map((group, gi) => (
            <BlurFade key={group.category} delay={0.04 + gi * 0.05} inView>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease, delay: 0.03 + gi * 0.05 }}
                className="border-b border-[color:var(--border)] py-6 grid md:grid-cols-[200px_1fr] gap-4 md:gap-10 items-start group hover:bg-[color:var(--bg-elevated)] transition-colors px-2 -mx-2 rounded-lg"
              >
                {/* Category label */}
                <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[color:var(--muted)] pt-1 flex-shrink-0">
                  {group.category}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, ii) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ color: "var(--fg)", borderColor: "var(--border-strong)" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, ease, delay: 0.02 + ii * 0.018 }}
                      className="px-3 py-1.5 rounded-full text-[11px] font-mono text-[color:var(--fg-dim)] border border-[color:var(--border)] hover:bg-[color:var(--bg-card)] transition-all cursor-default"
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
