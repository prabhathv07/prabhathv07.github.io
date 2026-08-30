"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { certifications } from "@/lib/data";
import { BlurFade } from "@/components/ui/blur-fade";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Certifications() {
  const featured = certifications.find((c) => c.featured);
  const others   = certifications.filter((c) => !c.featured);

  return (
    <section id="certifications" className="relative py-24 md:py-32 border-t hairline overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <BlurFade delay={0.05} inView>
          <div className="mb-6 flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-[color:var(--fg-dim)] font-mono">
            <span className="h-px w-8 bg-[color:var(--border-strong)]" />
            <span>Certifications</span>
          </div>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.9] text-[color:var(--fg)] mb-16 md:mb-20">
            Validated<em className="italic text-[color:var(--fg-dim)]"> by the best</em>
          </h2>
        </BlurFade>

        <div className="grid md:grid-cols-3 gap-4">
          {featured && (
            <BlurFade delay={0.08} inView>
              <motion.div
                whileHover={{ scale: 1.015, transition: { duration: 0.3, ease } }}
                className="md:col-span-2 glass rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-[color:var(--border-strong)] transition-colors"
              >
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[color:var(--accent)] opacity-[0.08] blur-3xl group-hover:opacity-[0.14] transition-opacity duration-700" />
                <div className="relative flex flex-col h-full">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--accent)] font-mono mb-4">
                    Featured
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl text-[color:var(--fg)] leading-tight mb-3">
                    {featured.title}
                  </h3>
                  <div className="text-sm text-[color:var(--fg-dim)] mb-4">{featured.issuer}</div>
                  {featured.description && (
                    <p className="text-sm md:text-[15px] leading-relaxed text-[color:var(--fg-dim)] mb-8 max-w-xl">
                      {featured.description}
                    </p>
                  )}
                  <div className="mt-auto flex items-center gap-6 flex-wrap pt-6 border-t hairline">
                    <span className="text-xs font-mono tracking-widest uppercase text-[color:var(--muted)]">
                      {featured.date}
                    </span>
                    {featured.verify && (
                      <a href={featured.verify} target="_blank" rel="noopener noreferrer" data-cursor-label="Verify"
                        className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase text-[color:var(--fg)] hover:text-[color:var(--fg-dim)] transition-colors">
                        Verify credential
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </BlurFade>
          )}

          <div className="space-y-4">
            {others.map((cert, i) => (
              <BlurFade key={cert.title} delay={0.1 + i * 0.06} inView>
                <motion.div
                  whileHover={{ x: 4, transition: { duration: 0.2, ease } }}
                  className="glass rounded-2xl p-5 relative overflow-hidden hover:border-[color:var(--border-strong)] transition-colors"
                >
                  <h4 className="font-display text-lg md:text-xl text-[color:var(--fg)] mb-2 leading-tight">
                    {cert.title}
                  </h4>
                  <div className="text-xs text-[color:var(--fg-dim)] mb-3 line-clamp-1">{cert.issuer}</div>
                  <div className="flex items-center gap-4 flex-wrap pt-3 border-t hairline">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[color:var(--muted)]">
                      {cert.date}
                    </span>
                    {cert.verify && (
                      <a href={cert.verify} target="_blank" rel="noopener noreferrer" data-cursor-label="Verify"
                        className="inline-flex items-center gap-1 text-[10px] font-mono tracking-widest uppercase text-[color:var(--fg)] hover:text-[color:var(--fg-dim)] transition-colors">
                        Verify
                        <ArrowUpRight size={11} />
                      </a>
                    )}
                  </div>
                </motion.div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
