"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagneticButton } from "@/components/MagneticButton";

const ease = [0.16, 1, 0.3, 1] as const;

const panelAccents = [
  "from-violet-600/25 via-fuchsia-600/15",
  "from-cyan-500/25 via-blue-600/15",
  "from-amber-500/25 via-orange-600/15",
];

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2.01-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.39-5.25 5.67.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.14 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

/* ── Featured horizontal panel ──────────────────────────────────── */
function FeaturedPanel({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <div className="w-screen h-screen flex-shrink-0 flex items-center px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Ambient glow */}
      <div className={`blob top-[10%] right-[5%] w-[600px] h-[600px] bg-gradient-to-br ${panelAccents[index % panelAccents.length]} to-transparent opacity-40`} />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
        {/* Left */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="font-display text-8xl md:text-9xl text-[color:var(--border-strong)] leading-none select-none">
              {project.number}
            </span>
            <div className="space-y-1">
              {project.tag && (
                <div className="text-[10px] tracking-[0.3em] uppercase font-mono text-[color:var(--accent)] bg-[color:var(--accent)]/10 px-2.5 py-1 rounded-full w-fit">
                  {project.tag}
                </div>
              )}
              <div className="text-[10px] tracking-[0.3em] uppercase font-mono text-[color:var(--fg-dim)]">
                {project.category}
              </div>
            </div>
          </div>

          <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-[color:var(--fg)] leading-[1.0] mb-6">
            {project.title}
          </h3>

          <p className="text-base md:text-lg leading-relaxed text-[color:var(--fg-dim)] mb-8 max-w-xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack.map((tech) => (
              <span key={tech} className="px-3 py-1.5 text-[11px] font-mono rounded-full glass text-[color:var(--fg-dim)]">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {project.demo && (
              <MagneticButton
                as="a"
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-label="Live"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[color:var(--fg)] text-[color:var(--bg)] text-[11px] tracking-[0.15em] uppercase font-mono hover:opacity-90 transition-opacity"
              >
                Live demo
                <ArrowUpRight size={13} />
              </MagneticButton>
            )}
            {project.github && (
              <MagneticButton
                as="a"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-label="Code"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-[color:var(--fg)] text-[11px] tracking-[0.15em] uppercase font-mono hover:border-[color:var(--border-strong)] transition-colors"
              >
                <GithubIcon size={13} />
                Source
              </MagneticButton>
            )}
          </div>
        </div>

        {/* Right: metrics */}
        <div className="glass rounded-3xl p-8 md:p-10">
          <div className="text-[10px] tracking-[0.3em] uppercase font-mono text-[color:var(--fg-dim)] mb-6">
            Project metrics
          </div>
          <div className="grid grid-cols-2 gap-6">
            {project.metrics.map((m) => (
              <div key={m.label} className="space-y-1">
                <div className="text-[10px] tracking-[0.2em] uppercase font-mono text-[color:var(--muted)]">
                  {m.label}
                </div>
                <div className="font-display text-3xl md:text-4xl text-[color:var(--fg)]">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Secondary grid card ─────────────────────────────────────────── */
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <BlurFade delay={0.06 + index * 0.05} inView>
      <motion.article
        whileHover={{ y: -6, transition: { duration: 0.35, ease } }}
        className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:border-[color:var(--border-strong)] transition-colors h-full flex flex-col"
      >
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[color:var(--accent)] opacity-0 group-hover:opacity-[0.07] blur-2xl transition-opacity duration-700" />
        <div className="relative flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-4 gap-2">
            <div>
              <div className="text-[9px] tracking-[0.3em] uppercase font-mono text-[color:var(--muted)] mb-1">
                {project.category}
              </div>
              <span className="font-display text-4xl text-[color:var(--border-strong)] group-hover:text-[color:var(--fg-dim)] transition-colors leading-none">
                {project.number}
              </span>
            </div>
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" data-cursor-label="Live"
                  className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-[color:var(--fg)] hover:text-[color:var(--bg)] transition-all">
                  <ArrowUpRight size={14} />
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" data-cursor-label="Code"
                  className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-[color:var(--fg)] hover:text-[color:var(--bg)] transition-all">
                  <GithubIcon size={14} />
                </a>
              )}
            </div>
          </div>

          <h3 className="font-display text-xl md:text-2xl text-[color:var(--fg)] leading-tight mb-3">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-[color:var(--fg-dim)] mb-5 flex-1">
            {project.description.slice(0, 180)}{project.description.length > 180 ? "…" : ""}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-4 border-t hairline">
            {project.stack.slice(0, 4).map((tech) => (
              <span key={tech} className="px-2 py-1 text-[10px] font-mono rounded-full bg-[color:var(--bg-elevated)] text-[color:var(--fg-dim)]">
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="px-2 py-1 text-[10px] font-mono rounded-full bg-[color:var(--bg-elevated)] text-[color:var(--muted)]">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        </div>
      </motion.article>
    </BlurFade>
  );
}

/* ── Main Projects section ───────────────────────────────────────── */
export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);
  const PANELS = featured.length;

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(PANELS - 1) * 100}vw`]);
  const progress = useTransform(scrollYProgress, [0, 1], [0, PANELS - 1]);

  return (
    <section id="work" className="border-t hairline">

      {/* ── Section header ─── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <BlurFade delay={0.05} inView>
          <div className="mb-6 flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-[color:var(--fg-dim)] font-mono">
            <span className="h-px w-8 bg-[color:var(--border-strong)]" />
            <span>Selected work · {projects.length} projects</span>
          </div>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.9] text-[color:var(--fg)]">
            My<em className="italic text-[color:var(--fg-dim)]"> Projects</em>
          </h2>
          <p className="mt-6 max-w-xl text-[color:var(--fg-dim)] leading-relaxed">
            Production AI systems, distributed data pipelines, LLM alignment research —
            every build solves a real problem with math, tests, and shipping discipline.
          </p>
        </BlurFade>
      </div>

      {/* ── Horizontal featured scroll ─── */}
      <div ref={containerRef} style={{ height: `${PANELS * 100}vh` }} className="relative">
        <div className="horizontal-section">
          <motion.div
            className="flex"
            style={{ width: `${PANELS * 100}vw`, x }}
          >
            {featured.map((project, i) => (
              <FeaturedPanel key={project.number} project={project} index={i} />
            ))}
          </motion.div>

          {/* Dot progress */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {featured.map((_, i) => (
              <motion.div
                key={i}
                className="h-1 rounded-full bg-[color:var(--fg-dim)] transition-all duration-300"
                animate={{ width: 8, opacity: 0.4 }}
                style={{
                  width: 8,
                  backgroundColor: `var(--fg)`,
                }}
              />
            ))}
          </div>

          {/* Drag hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 right-10 text-[10px] font-mono tracking-widest uppercase text-[color:var(--muted)] hidden md:block"
          >
            scroll to explore →
          </motion.div>
        </div>
      </div>

      {/* ── Secondary grid ─── */}
      {secondary.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 border-t hairline">
          <BlurFade delay={0.05} inView>
            <div className="mb-12 flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-[color:var(--fg-dim)] font-mono">
              <span className="h-px w-8 bg-[color:var(--border-strong)]" />
              <span>More projects</span>
            </div>
          </BlurFade>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {secondary.map((p, i) => (
              <ProjectCard key={p.number} project={p} index={i} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
