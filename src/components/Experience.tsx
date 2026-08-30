"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { experiences, education } from "@/lib/data";
import { BlurFade } from "@/components/ui/blur-fade";

const ease = [0.16, 1, 0.3, 1] as const;

const companyColors: Record<string, string> = {
  "Scale AI": "from-violet-500/20 via-fuchsia-500/10 to-transparent",
  "HCL Tech": "from-cyan-500/20 via-blue-500/10 to-transparent",
  "New Jersey Institute of Technology": "from-emerald-500/15 via-teal-500/10 to-transparent",
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 border-t hairline overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <BlurFade delay={0.05} inView>
          <div className="mb-6 flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-[color:var(--fg-dim)] font-mono">
            <span className="h-px w-8 bg-[color:var(--border-strong)]" />
            <span>Experience &amp; Education</span>
          </div>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.9] text-[color:var(--fg)] mb-16 md:mb-20">
            The<em className="italic text-[color:var(--fg-dim)]"> Journey</em>
          </h2>
        </BlurFade>

        {/* ── Experience ─────────────────────────────────────── */}
        <div className="mb-10 flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-[color:var(--fg-dim)] font-mono">
          <span className="glass rounded-full px-3 py-1 text-[color:var(--fg)]">01</span>
          <span>Experience</span>
          <span className="flex-1 h-px bg-[color:var(--border)]" />
        </div>

        <div className="relative mb-24 md:mb-32">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[color:var(--border)] hidden md:block" style={{ left: "calc(220px + 2.5rem)" }} />

          <div className="space-y-5 md:space-y-6">
            {experiences.map((exp, i) => (
              <BlurFade key={exp.title + exp.company} delay={0.05 + i * 0.08} inView>
                <motion.article
                  whileHover={{ scale: 1.005, transition: { duration: 0.3, ease } }}
                  className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-[color:var(--border-strong)] transition-colors"
                >
                  <div
                    className={`absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br ${companyColors[exp.company] ?? "from-violet-500/15 to-transparent"} blur-3xl opacity-50 group-hover:opacity-90 transition-opacity duration-700`}
                  />

                  <div className="relative grid md:grid-cols-[220px_1fr] gap-6 md:gap-10">
                    {/* Left: meta */}
                    <div className="flex md:flex-col gap-3 md:gap-2">
                      <div>
                        <div className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--fg-dim)] font-mono mb-1">
                          {exp.period}
                        </div>
                        <div className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--muted)] font-mono">
                          {exp.location}
                        </div>
                      </div>
                      {i === 0 && (
                        <span className="self-start mt-1 px-2.5 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Right: content */}
                    <div>
                      <h3 className="font-display text-3xl md:text-4xl text-[color:var(--fg)] mb-1 leading-tight">
                        {exp.title}
                      </h3>
                      <div className="text-sm font-medium text-[color:var(--fg-dim)] mb-6">
                        {exp.company}
                      </div>
                      <ul className="space-y-3 mb-6">
                        {exp.bullets.map((b, bi) => (
                          <li key={bi} className="text-sm md:text-[15px] leading-relaxed text-[color:var(--fg-dim)] flex gap-3">
                            <span className="mt-[0.5em] w-1 h-1 rounded-full bg-[color:var(--accent)] flex-shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      {exp.href && (
                        <a
                          href={exp.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor-label="Code"
                          className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase text-[color:var(--fg)] hover:text-[color:var(--fg-dim)] transition-colors"
                        >
                          View repository
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* ── Education ──────────────────────────────────────── */}
        <div className="mb-10 flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-[color:var(--fg-dim)] font-mono">
          <span className="glass rounded-full px-3 py-1 text-[color:var(--fg)]">02</span>
          <span>Education</span>
          <span className="flex-1 h-px bg-[color:var(--border)]" />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {education.map((edu, i) => (
            <BlurFade key={edu.degree} delay={0.05 + i * 0.08} inView>
              <motion.article
                whileHover={{ scale: 1.005, transition: { duration: 0.3, ease } }}
                className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-[color:var(--border-strong)] transition-colors"
              >
                <div className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-fuchsia-500/15 via-blue-500/10 to-transparent blur-3xl opacity-40 group-hover:opacity-70 transition-opacity" />
                <div className="relative">
                  <div className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--fg-dim)] font-mono mb-4">
                    {edu.detail}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-[color:var(--fg)] mb-3 leading-tight">
                    {edu.degree}
                  </h3>
                  <div className="text-sm text-[color:var(--fg-dim)] mb-6">{edu.school}</div>
                  <div className="text-xs font-mono tracking-widest uppercase text-[color:var(--muted)] pt-6 border-t hairline">
                    {edu.period}
                  </div>
                </div>
              </motion.article>
            </BlurFade>
          ))}
        </div>

      </div>
    </section>
  );
}
