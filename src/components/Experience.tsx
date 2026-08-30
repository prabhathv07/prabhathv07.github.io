"use client";

import { motion } from "framer-motion";
import { experiences, education } from "@/lib/data";
import { BlurFade } from "@/components/ui/blur-fade";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Experience() {
  return (
    <section id="experience" className="border-t border-[color:var(--border-strong)] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <BlurFade delay={0.05} inView>
          <div className="mb-10 flex items-center gap-3 text-[10px] font-mono tracking-[0.3em] uppercase text-[color:var(--muted)]">
            <span>Experience</span>
            <span className="flex-1 h-px bg-[color:var(--border)]" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-[color:var(--fg)] mb-16">
            Where I&apos;ve <em className="italic text-[color:var(--fg-dim)]">worked</em>
          </h2>
        </BlurFade>

        {/* Experience rows */}
        <div className="border-t border-[color:var(--border)]">
          {experiences.map((exp, i) => (
            <BlurFade key={exp.company + exp.title} delay={0.06 + i * 0.07} inView>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: 0.04 + i * 0.06 }}
                className="border-b border-[color:var(--border)] py-10 md:py-12 group"
              >
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="font-display text-2xl md:text-3xl text-[color:var(--fg)]">
                      {exp.company}
                    </span>
                    {i === 0 && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-[11px] font-mono tracking-[0.15em] text-[color:var(--fg-dim)]">
                      {exp.period}
                    </div>
                    <div className="text-[10px] font-mono tracking-[0.1em] text-[color:var(--muted)] mt-0.5">
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Role */}
                <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-[color:var(--accent)] mb-6">
                  {exp.title}
                </div>

                {/* Bullets in 2 columns on large screens */}
                <ul className="grid md:grid-cols-2 gap-x-10 gap-y-3">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-3 text-sm leading-relaxed text-[color:var(--fg-dim)]">
                      <span className="mt-[0.45em] w-1 h-1 rounded-full bg-[color:var(--border-strong)] flex-shrink-0" />
                      <span className="group-hover:text-[color:var(--fg)] transition-colors duration-300">{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* Education */}
        <BlurFade delay={0.1} inView>
          <div className="mt-16">
            <div className="mb-8 flex items-center gap-3 text-[10px] font-mono tracking-[0.3em] uppercase text-[color:var(--muted)]">
              <span>Education</span>
              <span className="flex-1 h-px bg-[color:var(--border)]" />
            </div>
            {education.map((edu) => (
              <div key={edu.degree} className="border border-[color:var(--border)] rounded-2xl p-8 md:p-10 hover:border-[color:var(--border-strong)] transition-colors">
                <div className="grid md:grid-cols-[1fr_auto] gap-4 items-start">
                  <div>
                    <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[color:var(--muted)] mb-3">
                      {edu.detail}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl text-[color:var(--fg)] mb-2">
                      {edu.degree}
                    </h3>
                    <div className="text-sm text-[color:var(--fg-dim)]">{edu.school}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] font-mono tracking-widest uppercase text-[color:var(--muted)]">
                      {edu.period}
                    </div>
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
