"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagneticButton } from "@/components/MagneticButton";

const ease = [0.16, 1, 0.3, 1] as const;

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2.01-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.39-5.25 5.67.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.14 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

/* ── Featured bento card ─────────────────────────────────────────── */
function FeaturedCard({
  project,
  large = false,
}: {
  project: typeof projects[0];
  large?: boolean;
}) {
  return (
    <motion.article
      whileHover={{ y: -3, transition: { duration: 0.3, ease } }}
      className="relative border border-[color:var(--border)] hover:border-[color:var(--border-strong)] rounded-2xl overflow-hidden bg-[color:var(--bg-card)] transition-colors flex flex-col h-full"
    >
      {/* Number watermark */}
      <span className="pointer-events-none absolute bottom-4 right-5 font-display text-[7rem] md:text-[9rem] leading-none text-[color:var(--border)] select-none z-0">
        {project.number}
      </span>

      <div className="relative z-10 p-7 md:p-8 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <div>
            <div className="text-[9px] font-mono tracking-[0.28em] uppercase text-[color:var(--muted)] mb-2">
              {project.category}
            </div>
            {project.tag && (
              <span className="inline-block text-[9px] font-mono tracking-[0.2em] uppercase text-[color:var(--accent)] border border-[color:var(--accent)]/25 bg-[color:var(--accent)]/8 px-2 py-0.5 rounded-full">
                {project.tag.split("·")[0].trim()}
              </span>
            )}
          </div>
          <div className="flex gap-2 flex-shrink-0">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo for ${project.title}`}
                data-cursor-label="Live"
                className="w-8 h-8 rounded-full border border-[color:var(--border)] flex items-center justify-center text-[color:var(--fg-dim)] hover:text-[color:var(--fg)] hover:border-[color:var(--border-strong)] transition-all"
              >
                <ArrowUpRight size={13} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub source for ${project.title}`}
                data-cursor-label="Code"
                className="w-8 h-8 rounded-full border border-[color:var(--border)] flex items-center justify-center text-[color:var(--fg-dim)] hover:text-[color:var(--fg)] hover:border-[color:var(--border-strong)] transition-all"
              >
                <GithubIcon size={13} />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className={`font-display text-[color:var(--fg)] leading-tight mb-4 ${large ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-[color:var(--fg-dim)] mb-6 flex-1">
          {large
            ? project.description.slice(0, 220) + (project.description.length > 220 ? "…" : "")
            : project.description.slice(0, 140) + (project.description.length > 140 ? "…" : "")}
        </p>

        {/* Metrics */}
        {project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-3 mb-5 pt-5 border-t border-[color:var(--border)]">
            {project.metrics.slice(0, 2).map((m) => (
              <div key={m.label}>
                <div className="text-[9px] font-mono tracking-widest uppercase text-[color:var(--muted)] mb-1">
                  {m.label}
                </div>
                <div className="font-display text-xl md:text-2xl text-[color:var(--fg)]">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, large ? 6 : 4).map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-[10px] font-mono rounded-full bg-[color:var(--bg-elevated)] text-[color:var(--fg-dim)] border border-[color:var(--border)]"
            >
              {t}
            </span>
          ))}
          {project.stack.length > (large ? 6 : 4) && (
            <span className="px-2 py-1 text-[10px] font-mono rounded-full bg-[color:var(--bg-elevated)] text-[color:var(--muted)] border border-[color:var(--border)]">
              +{project.stack.length - (large ? 6 : 4)}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* ── Secondary card (smaller) ────────────────────────────────────── */
function SecondaryCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <BlurFade delay={0.04 + index * 0.04} inView>
      <motion.article
        whileHover={{ y: -4, transition: { duration: 0.28, ease } }}
        className="border border-[color:var(--border)] hover:border-[color:var(--border-strong)] rounded-xl p-5 md:p-6 bg-[color:var(--bg-card)] transition-colors flex flex-col h-full"
      >
        <div className="flex items-start justify-between mb-3 gap-2">
          <div>
            <div className="text-[9px] font-mono tracking-[0.25em] uppercase text-[color:var(--muted)] mb-1">
              {project.category}
            </div>
            <span className="font-display text-3xl text-[color:var(--border-strong)] leading-none">
              {project.number}
            </span>
          </div>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="Code"
              className="opacity-0 group-hover:opacity-100 w-8 h-8 rounded-full border border-[color:var(--border)] flex items-center justify-center text-[color:var(--fg-dim)] hover:text-[color:var(--fg)] hover:border-[color:var(--border-strong)] transition-all"
            >
              <GithubIcon size={13} />
            </a>
          )}
        </div>

        <h3 className="font-display text-lg md:text-xl text-[color:var(--fg)] leading-tight mb-3">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-[color:var(--fg-dim)] mb-4 flex-1">
          {project.description.slice(0, 120)}{project.description.length > 120 ? "…" : ""}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[color:var(--border)]">
          {project.stack.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-[color:var(--bg-elevated)] text-[color:var(--muted)] border border-[color:var(--border)]"
            >
              {t}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="px-2 py-0.5 text-[10px] font-mono rounded-full text-[color:var(--muted)]">
              +{project.stack.length - 4}
            </span>
          )}
        </div>
      </motion.article>
    </BlurFade>
  );
}

/* ── Main component ──────────────────────────────────────────────── */
export default function Projects() {
  const featured   = projects.filter((p) => p.featured);
  const secondary  = projects.filter((p) => !p.featured);

  // Bento layout: row1 [0=large, 1=small], row2 [2=small, 3=large]
  const f0 = featured[0];
  const f1 = featured[1];
  const f2 = featured[2];
  const f3 = featured[3];

  return (
    <section id="work" className="border-t border-[color:var(--border-strong)] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <BlurFade delay={0.05} inView>
          <div className="mb-10 flex items-center gap-3 text-[10px] font-mono tracking-[0.3em] uppercase text-[color:var(--muted)]">
            <span>Selected work · {projects.length} projects</span>
            <span className="flex-1 h-px bg-[color:var(--border)]" />
            <a
              href="https://github.com/prabhathv07"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[color:var(--fg)] transition-colors"
            >
              All repos <ArrowUpRight size={10} />
            </a>
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-[color:var(--fg)] mb-16">
            My <em className="italic text-[color:var(--fg-dim)]">Projects</em>
          </h2>
        </BlurFade>

        {/* ── Bento grid: 4 featured ─────────────────────────────── */}
        {featured.length >= 4 && (
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {/* Row 1: large + small */}
            <BlurFade delay={0.07} inView className="md:col-span-2">
              <FeaturedCard project={f0} large />
            </BlurFade>
            <BlurFade delay={0.1} inView>
              <FeaturedCard project={f1} />
            </BlurFade>

            {/* Row 2: small + large */}
            <BlurFade delay={0.13} inView>
              <FeaturedCard project={f2} />
            </BlurFade>
            <BlurFade delay={0.16} inView className="md:col-span-2">
              <FeaturedCard project={f3} large />
            </BlurFade>
          </div>
        )}

        {/* ── Secondary grid ────────────────────────────────────── */}
        {secondary.length > 0 && (
          <div className="mt-16">
            <BlurFade delay={0.05} inView>
              <div className="mb-8 flex items-center gap-3 text-[10px] font-mono tracking-[0.3em] uppercase text-[color:var(--muted)]">
                <span>More projects</span>
                <span className="flex-1 h-px bg-[color:var(--border)]" />
              </div>
            </BlurFade>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 group">
              {secondary.map((p, i) => (
                <SecondaryCard key={p.number} project={p} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <BlurFade delay={0.1} inView>
          <div className="mt-12 flex justify-center">
            <MagneticButton
              as="a"
              href="https://github.com/prabhathv07"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="GitHub"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[color:var(--border-strong)] text-[11px] tracking-[0.18em] uppercase font-mono text-[color:var(--fg-dim)] hover:text-[color:var(--fg)] hover:border-[color:var(--fg-dim)] transition-all"
            >
              <GithubIcon size={12} />
              View all on GitHub
              <ArrowUpRight size={11} />
            </MagneticButton>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
