"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { BlurFade } from "@/components/ui/blur-fade";

const ease = [0.16, 1, 0.3, 1] as const;

function GithubIcon({ size = 13 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2.01-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.39-5.25 5.67.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.14 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

const featured = projects.filter((p) => p.featured);
const secondary = projects.filter((p) => !p.featured);

export default function Projects() {
  return (
    <section id="work" className="py-20 md:py-28 border-t border-[color:var(--border)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <BlurFade delay={0.05} inView>
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[color:var(--muted)] mb-4">
                Selected work · {projects.length} projects
              </div>
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-[color:var(--fg)] leading-tight">
                Projects & Case Studies
              </h2>
            </div>
            <a
              href="https://github.com/prabhathv07"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="GitHub"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-[color:var(--fg-dim)] hover:text-[color:var(--fg)] transition-colors"
            >
              All repos <ArrowUpRight size={11} />
            </a>
          </div>
        </BlurFade>

        {/* Featured projects */}
        <div className="space-y-3 mb-12">
          {featured.map((project, i) => (
            <BlurFade key={project.number} delay={0.06 + i * 0.07} inView>
              <motion.div
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2, ease }}
                className="group rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-card)] hover:border-[color:var(--border-strong)] hover:shadow-[var(--shadow)] transition-all p-6 md:p-7"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  {/* Left: number + category */}
                  <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-2 md:w-24 flex-shrink-0">
                    <span className="font-mono text-xs text-[color:var(--muted)]">
                      {project.number}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-[color:var(--accent-dim)] text-[color:var(--accent)] border border-[color:var(--accent)]/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Center: title + description + stack */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-lg md:text-xl text-[color:var(--fg)] mb-2.5 group-hover:text-[color:var(--accent)] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[color:var(--fg-dim)] leading-[1.65] mb-4">
                      {project.description.length > 240
                        ? project.description.slice(0, 240) + "…"
                        : project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[color:var(--bg-elevated)] text-[color:var(--fg-dim)] border border-[color:var(--border)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: metric + links */}
                  <div className="flex md:flex-col items-start md:items-end justify-between md:justify-start gap-4 md:w-36 flex-shrink-0">
                    {project.metrics[0] && (
                      <div className="md:text-right">
                        <div className="font-display font-semibold text-xl text-[color:var(--fg)]">
                          {project.metrics[0].value}
                        </div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-[color:var(--muted)] mt-0.5">
                          {project.metrics[0].label}
                        </div>
                      </div>
                    )}
                    <div className="flex gap-2 md:mt-auto">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub source for ${project.title}`}
                          data-cursor-label="Code"
                          className="w-8 h-8 rounded-lg border border-[color:var(--border-strong)] flex items-center justify-center text-[color:var(--fg-dim)] hover:text-[color:var(--fg)] hover:bg-[color:var(--bg-elevated)] transition-all"
                        >
                          <GithubIcon size={13} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live demo for ${project.title}`}
                          data-cursor-label="Live"
                          className="w-8 h-8 rounded-lg border border-[color:var(--border-strong)] flex items-center justify-center text-[color:var(--fg-dim)] hover:text-[color:var(--fg)] hover:bg-[color:var(--bg-elevated)] transition-all"
                        >
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* Secondary projects */}
        {secondary.length > 0 && (
          <BlurFade delay={0.1} inView>
            <div className="border-t border-[color:var(--border)] pt-10">
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[color:var(--muted)] mb-6">
                More projects
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {secondary.map((project, i) => (
                  <motion.div
                    key={project.number}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease, delay: 0.04 + i * 0.04 }}
                    className="group rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-card)] hover:border-[color:var(--border-strong)] hover:shadow-[var(--shadow-sm)] transition-all p-5"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-[color:var(--muted)] mb-1.5">
                          {project.number} · {project.category}
                        </div>
                        <h3 className="font-semibold text-sm text-[color:var(--fg)] group-hover:text-[color:var(--accent)] transition-colors leading-snug">
                          {project.title}
                        </h3>
                      </div>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub source for ${project.title}`}
                          data-cursor-label="Code"
                          className="w-7 h-7 rounded-md border border-[color:var(--border)] flex items-center justify-center text-[color:var(--muted)] hover:text-[color:var(--fg)] hover:border-[color:var(--border-strong)] transition-all flex-shrink-0"
                        >
                          <GithubIcon size={12} />
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-[color:var(--fg-dim)] leading-[1.6] mb-3">
                      {project.description.slice(0, 110)}…
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.stack.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[color:var(--bg-elevated)] text-[color:var(--muted)] border border-[color:var(--border)]"
                        >
                          {t}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded text-[color:var(--muted)]">
                          +{project.stack.length - 4}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </BlurFade>
        )}

      </div>
    </section>
  );
}
