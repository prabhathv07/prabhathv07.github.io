"use client";

import { motion } from "framer-motion";
import { experiences, education } from "@/lib/data";
import { BlurFade } from "@/components/ui/blur-fade";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-[color:var(--border)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <BlurFade delay={0.05} inView>
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[color:var(--muted)] mb-4">
            Experience
          </div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-[color:var(--fg)] leading-tight mb-12 md:mb-16">
            Where I've worked
          </h2>
        </BlurFade>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-[color:var(--border)] hidden md:block" />

          <div className="space-y-10 md:space-y-12">
            {experiences.map((exp, i) => (
              <BlurFade key={exp.company + exp.title} delay={0.06 + i * 0.08} inView>
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease, delay: 0.05 + i * 0.07 }}
                  className="md:pl-8 relative"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute -left-[4.5px] top-[6px] w-[9px] h-[9px] rounded-full border-2 border-[color:var(--accent)] bg-[color:var(--bg-card)]" />

                  {/* Card */}
                  <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-card)] p-6 md:p-8 hover:border-[color:var(--border-strong)] hover:shadow-[var(--shadow-sm)] transition-all"
                    style={{ boxShadow: "var(--shadow-xs)" }}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div>
                        <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                          <h3 className="font-display font-semibold text-xl md:text-2xl text-[color:var(--fg)]">
                            {exp.company}
                          </h3>
                          {i === 0 && (
                            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                              <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                        <div className="text-xs font-mono uppercase tracking-[0.15em] text-[color:var(--accent)] font-medium">
                          {exp.title}
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-xs font-mono text-[color:var(--fg-dim)]">{exp.period}</div>
                        <div className="text-[10px] font-mono text-[color:var(--muted)] mt-0.5">{exp.location}</div>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2.5">
                      {exp.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-2.5 text-sm text-[color:var(--fg-dim)] leading-[1.6]">
                          <span className="mt-[0.45em] w-1 h-1 rounded-full bg-[color:var(--border-strong)] flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* Education */}
        <BlurFade delay={0.12} inView>
          <div className="mt-14">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[color:var(--muted)] mb-6">
              Education
            </div>
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-card)] p-6 md:p-8"
                style={{ boxShadow: "var(--shadow-xs)" }}
              >
                <div className="grid sm:grid-cols-[1fr_auto] gap-4 items-start">
                  <div>
                    <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[color:var(--muted)] mb-2">
                      {edu.detail}
                    </div>
                    <h3 className="font-display font-semibold text-xl md:text-2xl text-[color:var(--fg)] mb-1">
                      {edu.degree}
                    </h3>
                    <div className="text-sm text-[color:var(--fg-dim)]">{edu.school}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-xs font-mono text-[color:var(--fg-dim)]">{edu.period}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </BlurFade>

      </div>
    </section>
  );
}
