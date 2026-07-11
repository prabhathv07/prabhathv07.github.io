"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { experiences, education } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 border-t hairline overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 md:mb-20"
        >
          <div className="mb-6 flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-white/50 font-mono">
            <span className="h-px w-8 bg-white/30" />
            <span>Experience & Education</span>
          </div>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.9] text-white text-gradient">
            The<em className="italic text-white/50"> Journey</em>
          </h2>
        </motion.div>

        <div className="mb-10 md:mb-14 flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-white/60 font-mono">
          <span className="glass rounded-full px-3 py-1">01</span>
          <span>Experience</span>
          <span className="flex-1 h-px bg-white/10" />
        </div>

        <div className="space-y-5 md:space-y-6 mb-24 md:mb-32">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease, delay: i * 0.1 }}
              className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-all"
            >
              <div className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-violet-500/20 via-cyan-500/10 to-transparent blur-3xl opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="relative grid md:grid-cols-[220px_1fr] gap-6 md:gap-10">
                <div>
                  <div className="text-[11px] tracking-[0.25em] uppercase text-white/50 font-mono mb-2">
                    {exp.period}
                  </div>
                  <div className="text-[11px] tracking-[0.25em] uppercase text-white/40 font-mono">
                    {exp.location}
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl text-white mb-2 leading-tight">
                    {exp.title}
                  </h3>
                  <div className="text-sm text-white/60 mb-6">
                    {exp.company}
                  </div>
                  <ul className="space-y-3 mb-6">
                    {exp.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        className="text-sm md:text-[15px] leading-relaxed text-white/70 flex gap-3"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-white/40 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.href && (
                    <a
                      href={exp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-label="Repo"
                      className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase text-white hover:text-white/70 transition-colors"
                    >
                      View repository
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mb-10 md:mb-14 flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-white/60 font-mono">
          <span className="glass rounded-full px-3 py-1">02</span>
          <span>Education</span>
          <span className="flex-1 h-px bg-white/10" />
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {education.map((edu, i) => (
            <motion.article
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease, delay: i * 0.1 }}
              className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-all"
            >
              <div className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-fuchsia-500/15 via-blue-500/10 to-transparent blur-3xl opacity-40 group-hover:opacity-70 transition-opacity" />
              <div className="relative">
                <div className="text-[11px] tracking-[0.25em] uppercase text-white/50 font-mono mb-4">
                  {edu.detail}
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-white mb-3 leading-tight">
                  {edu.degree}
                </h3>
                <div className="text-sm text-white/60 mb-6">{edu.school}</div>
                <div className="text-xs font-mono tracking-widest uppercase text-white/50 pt-6 border-t hairline">
                  {edu.period}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
