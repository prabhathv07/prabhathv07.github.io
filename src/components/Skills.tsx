"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { BlurFade } from "@/components/ui/blur-fade";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 border-t hairline overflow-hidden">
      <div className="blob top-[10%] left-[-5%] w-[500px] h-[500px] bg-cyan-500/10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <BlurFade delay={0.05} inView>
          <div className="mb-6 flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-[color:var(--fg-dim)] font-mono">
            <span className="h-px w-8 bg-[color:var(--border-strong)]" />
            <span>Toolkit</span>
          </div>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.9] text-[color:var(--fg)] mb-16 md:mb-20">
            My<em className="italic text-[color:var(--fg-dim)]"> Stack</em>
          </h2>
        </BlurFade>

        <div className="space-y-12 md:space-y-16">
          {skills.map((group, i) => (
            <BlurFade key={group.category} delay={0.05 + i * 0.06} inView>
              <div className="border-t hairline pt-8 md:pt-10">
                <div className="mb-6 flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-[color:var(--fg-dim)] font-mono">
                  <span className="glass rounded-full px-3 py-1 text-[color:var(--fg)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{group.category}</span>
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-1">
                  {group.items.map((item, j) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ color: "var(--fg)", transition: { duration: 0.15 } }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, ease, delay: 0.05 + j * 0.025 }}
                      className="font-display text-3xl md:text-[2.8rem] lg:text-[3.5rem] text-[color:var(--fg)] leading-tight cursor-default"
                      data-cursor="text"
                    >
                      {item}
                      {j < group.items.length - 1 && (
                        <span className="text-[color:var(--border-strong)] mx-2 text-2xl md:text-3xl">·</span>
                      )}
                    </motion.span>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
