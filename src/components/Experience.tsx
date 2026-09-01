"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { experiences, education } from "@/lib/data";
import { BlurFade } from "@/components/ui/blur-fade";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Experience() {
  const reduced = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 60%"],
  });
  const rawProgress = useSpring(scrollYProgress, { damping: 30, stiffness: 100 });
  const lineHeight = useTransform(rawProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      className="py-20 md:py-28 border-t border-[color:var(--border)] relative overflow-hidden"
    >
      {/* Subtle background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 40% 30% at 10% 20%, var(--accent-glow-1) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <BlurFade delay={0.05} inView>
          <div className="flex items-end justify-between gap-6 flex-wrap mb-14 md:mb-20">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[color:var(--muted)] mb-4">
                Experience · {experiences.length} roles
              </div>
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-[color:var(--fg)] leading-tight tracking-[-0.02em]">
                Where I&rsquo;ve worked.
              </h2>
            </div>
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[color:var(--muted)]">
              4y total · Scale AI → HCL Tech
            </div>
          </div>
        </BlurFade>

        {/* Timeline container */}
        <div ref={timelineRef} className="relative">
          {/* Static rail (light) */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-[color:var(--border)]" />
          {/* Animated draw line (teal) */}
          <motion.div
            aria-hidden
            className="absolute left-4 md:left-6 top-0 w-[2px] bg-gradient-to-b from-[color:var(--accent)] to-[color:var(--accent-2)] origin-top"
            style={{ height: reduced ? "100%" : lineHeight }}
          />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company + exp.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, ease, delay: 0.05 + i * 0.07 }}
                className="relative pl-14 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-4 -translate-x-1/2 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease, delay: 0.15 + i * 0.05, type: "spring" }}
                    className="relative w-4 h-4 rounded-full bg-[color:var(--bg)] border-2 border-[color:var(--accent)] flex items-center justify-center"
                  >
                    {i === 0 && (
                      <>
                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-40 animate-ping" />
                        <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </>
                    )}
                  </motion.div>
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-card)] p-6 md:p-8 hover:border-[color:var(--border-strong)] transition-all"
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                        <h3 className="font-display font-semibold text-xl md:text-2xl text-[color:var(--fg)] tracking-[-0.01em]">
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

                  <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2.5">
                    {exp.bullets.map((b, bi) => (
                      <motion.li
                        key={bi}
                        initial={{ opacity: 0, x: -6 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.4, ease, delay: 0.08 + bi * 0.03 }}
                        className="flex gap-2.5 text-sm text-[color:var(--fg-dim)] leading-[1.6]"
                      >
                        <span className="mt-[0.5em] w-1 h-1 rounded-full bg-[color:var(--accent)] flex-shrink-0" />
                        {b}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* Education node (visually part of timeline) */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease }}
              className="relative pl-14 md:pl-20"
            >
              <div className="absolute left-4 md:left-6 top-4 -translate-x-1/2 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[color:var(--bg)] border-2 border-[color:var(--accent-2)] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent-2)]" />
                </div>
              </div>

              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-card)] p-6 md:p-8"
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  <div className="grid sm:grid-cols-[1fr_auto] gap-4 items-start mb-3">
                    <div>
                      <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[color:var(--accent-2)] mb-2">
                        Education · {edu.detail}
                      </div>
                      <h3 className="font-display font-semibold text-xl md:text-2xl text-[color:var(--fg)] mb-1 tracking-[-0.01em]">
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
