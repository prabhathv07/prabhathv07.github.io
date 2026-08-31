"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { BlurFade } from "@/components/ui/blur-fade";

const ease = [0.16, 1, 0.3, 1] as const;
const secondary = projects.filter((p) => !p.featured);

export default function Projects() {
  if (secondary.length === 0) return null;

  return (
    <section id="more-work" className="py-20 md:py-28 border-t border-[color:var(--border)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <BlurFade delay={0.05} inView>
          <div className="flex items-end justify-between mb-10 md:mb-14">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[color:var(--muted)] mb-3">
                More work · {secondary.length}
              </div>
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-[color:var(--fg)] leading-tight tracking-[-0.02em]">
                Other projects.
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

        <div className="grid md:grid-cols-2 gap-4">
          {secondary.map((p, i) => (
            <motion.a
              key={p.number}
              href={p.github || "#"}
              target={p.github ? "_blank" : undefined}
              rel={p.github ? "noopener noreferrer" : undefined}
              data-cursor-label={p.github ? "Code" : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease, delay: 0.05 + i * 0.06 }}
              whileHover={{ y: -2 }}
              className="group rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-card)] p-6 hover:border-[color:var(--border-strong)] transition-all"
              style={{ boxShadow: "var(--shadow-sm)" }}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  {p.number} · {p.category}
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-[color:var(--muted)] group-hover:text-[color:var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0"
                />
              </div>
              <h3 className="font-display font-medium text-lg text-[color:var(--fg)] leading-[1.2] mb-2 tracking-[-0.01em]">
                {p.title}
              </h3>
              <p className="text-sm text-[color:var(--fg-dim)] leading-[1.55] mb-4 line-clamp-3">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.stack.slice(0, 4).map((s) => (
                  <span
                    key={s}
                    className="text-[10px] font-mono uppercase tracking-[0.1em] text-[color:var(--fg-dim)] px-2 py-0.5 rounded border border-[color:var(--border)] bg-[color:var(--bg-surface)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-[color:var(--border)]">
                <span className="text-[11px] font-mono text-[color:var(--muted)]">{p.footer}</span>
                {p.metrics[0] && (
                  <span className="text-sm font-display font-semibold text-[color:var(--fg)]">
                    {p.metrics[0].value}
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
