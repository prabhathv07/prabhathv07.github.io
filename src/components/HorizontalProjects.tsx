"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects, Project } from "@/lib/data";
import TiltCard from "@/components/TiltCard";
import { BlurFade } from "@/components/ui/blur-fade";

const featured = projects.filter((p) => p.featured);

export default function HorizontalProjects() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 901px) and (pointer: fine)");
    const reducedMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setIsDesktop(mq.matches && !reducedMq.matches);
    update();
    mq.addEventListener("change", update);
    reducedMq.addEventListener("change", update);
    return () => {
      mq.removeEventListener("change", update);
      reducedMq.removeEventListener("change", update);
    };
  }, []);

  return isDesktop ? <DesktopHorizontal /> : <MobileStack />;
}

/* ────────────────────────────────── Desktop: pinned horizontal ── */

function DesktopHorizontal() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const wrapper = wrapperRef.current;
      const track = trackRef.current;
      const progress = progressRef.current;
      if (!wrapper || !track) return;

      const getScrollDist = () => track.scrollWidth - window.innerWidth + 96;

      const tween = gsap.to(track, {
        x: () => -getScrollDist(),
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: () => `+=${getScrollDist()}`,
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progress) progress.style.transform = `scaleX(${self.progress})`;
          },
        },
      });

      const onResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", onResize);

      cleanup = () => {
        window.removeEventListener("resize", onResize);
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    })();

    return () => cleanup?.();
  }, []);

  return (
    <section
      id="work"
      ref={wrapperRef}
      className="relative border-t border-[color:var(--border)] overflow-hidden"
      style={{ height: "100vh" }}
    >
      <div className="absolute top-0 left-0 right-0 z-10 pt-10 md:pt-14 px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex items-end justify-between gap-6">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[color:var(--muted)] mb-3">
              Selected Work · {String(featured.length).padStart(2, "0")}
            </div>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-[color:var(--fg)] tracking-[-0.02em]">
              Featured projects.
            </h2>
          </div>
          <div className="hidden md:flex flex-col items-end gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[color:var(--muted)]">
            <span>Scroll to explore →</span>
            <div className="h-[2px] w-40 bg-[color:var(--border)] overflow-hidden rounded-full">
              <div
                ref={progressRef}
                className="h-full bg-[color:var(--accent)] origin-left"
                style={{ transform: "scaleX(0)" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center pt-32 md:pt-40 pb-10">
        <div
          ref={trackRef}
          className="flex items-stretch gap-6 md:gap-8 px-6 md:px-10 will-change-transform"
        >
          {featured.map((p, i) => (
            <ProjectPanel key={p.number} project={p} index={i} total={featured.length} />
          ))}
          <EndingCard />
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────── Mobile: vertical stack ── */

function MobileStack() {
  return (
    <section
      id="work"
      className="py-16 md:py-20 border-t border-[color:var(--border)]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <BlurFade delay={0.05} inView>
          <div className="mb-10 md:mb-14">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[color:var(--muted)] mb-3">
              Selected Work · {String(featured.length).padStart(2, "0")}
            </div>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-[color:var(--fg)] tracking-[-0.02em]">
              Featured projects.
            </h2>
          </div>
        </BlurFade>

        <div className="space-y-5">
          {featured.map((p, i) => (
            <BlurFade key={p.number} delay={0.05 + i * 0.05} inView>
              <div className="w-full">
                <ProjectPanel project={p} index={i} total={featured.length} />
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────── Shared panel ── */

function ProjectPanel({ project, total }: { project: Project; index: number; total: number }) {
  return (
    <div className="flex-shrink-0 md:w-[62vw] lg:w-[48vw] xl:w-[42vw]">
      <TiltCard
        max={4}
        className="h-full rounded-2xl overflow-hidden bg-[color:var(--bg-card)] border border-[color:var(--border)]"
      >
        <div
          className="h-full flex flex-col p-6 md:p-10"
          style={{ boxShadow: "var(--shadow-sm)" }}
        >
          <div className="flex items-center justify-between mb-6 md:mb-8 gap-3">
            <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] text-[color:var(--muted)]">
              <span>
                {project.number} / {String(total).padStart(2, "0")}
              </span>
              <span className="text-[color:var(--accent)]">·</span>
              <span>{project.category}</span>
            </div>
            <span className="hidden sm:inline text-[10px] font-mono uppercase tracking-[0.2em] text-[color:var(--fg-dim)] px-2 py-1 rounded border border-[color:var(--border)]">
              {project.tag}
            </span>
          </div>

          <h3 className="font-display font-semibold text-xl md:text-3xl text-[color:var(--fg)] leading-[1.15] tracking-[-0.02em] mb-4 md:mb-5">
            {project.title}
          </h3>

          <p className="text-sm md:text-[15px] text-[color:var(--fg-dim)] leading-[1.7] mb-6 line-clamp-6">
            {project.description}
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6 pt-4 border-t border-[color:var(--border)]">
            {project.metrics.slice(0, 4).map((m) => (
              <div key={m.label}>
                <div className="text-lg md:text-xl font-display font-semibold text-[color:var(--fg)] tracking-[-0.01em]">
                  {m.value}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[color:var(--muted)] mt-0.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.stack.slice(0, 6).map((s) => (
              <span
                key={s}
                className="text-[10px] font-mono uppercase tracking-[0.1em] text-[color:var(--fg-dim)] px-2 py-1 rounded-md border border-[color:var(--border)] bg-[color:var(--bg-surface)]"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between pt-4 border-t border-[color:var(--border)] gap-3">
            <span className="text-[11px] font-mono text-[color:var(--muted)] truncate">
              {project.footer}
            </span>
            <div className="flex items-center gap-2 flex-shrink-0">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-label="Code"
                  className="w-9 h-9 rounded-lg border border-[color:var(--border)] flex items-center justify-center text-[color:var(--fg-dim)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors"
                >
                  <ArrowUpRight size={14} />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-label="Live"
                  className="w-9 h-9 rounded-lg border border-[color:var(--border)] flex items-center justify-center text-[color:var(--fg-dim)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors"
                >
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}

function EndingCard() {
  return (
    <div className="flex-shrink-0 w-[70vw] md:w-[36vw] flex items-center justify-center">
      <div className="text-center max-w-sm">
        <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-[color:var(--muted)] mb-3">
          End of featured
        </div>
        <p className="font-display text-xl md:text-2xl text-[color:var(--fg)] leading-tight tracking-[-0.01em] mb-4">
          More projects on GitHub — analytics, MLOps, distributed pipelines.
        </p>
        <a
          href="https://github.com/prabhathv07"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-label="GitHub"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[color:var(--border-strong)] text-sm text-[color:var(--fg)] hover:bg-[color:var(--bg-elevated)] transition-colors"
        >
          View all <ArrowUpRight size={13} />
        </a>
      </div>
    </div>
  );
}
