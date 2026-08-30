"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { certifications } from "@/lib/data";
import { BlurFade } from "@/components/ui/blur-fade";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Certifications() {
  const featured = certifications.filter((c) => c.featured);
  const others   = certifications.filter((c) => !c.featured);

  return (
    <section id="certifications" className="border-t border-[color:var(--border-strong)] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <BlurFade delay={0.05} inView>
          <div className="mb-10 flex items-center gap-3 text-[10px] font-mono tracking-[0.3em] uppercase text-[color:var(--muted)]">
            <span>Certifications</span>
            <span className="flex-1 h-px bg-[color:var(--border)]" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-[color:var(--fg)] mb-16">
            Validated <em className="italic text-[color:var(--fg-dim)]">credentials</em>
          </h2>
        </BlurFade>

        {/* Featured certs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {featured.map((cert, i) => (
            <BlurFade key={cert.title} delay={0.06 + i * 0.06} inView>
              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.25, ease } }}
                className="border border-[color:var(--border)] hover:border-[color:var(--border-strong)] rounded-2xl p-6 md:p-7 bg-[color:var(--bg-card)] transition-colors flex flex-col h-full"
              >
                <div className="text-[9px] font-mono tracking-[0.28em] uppercase text-[color:var(--accent)] mb-3">
                  Featured
                </div>
                <h3 className="font-display text-xl md:text-2xl text-[color:var(--fg)] leading-tight mb-2">
                  {cert.title}
                </h3>
                <div className="text-xs text-[color:var(--fg-dim)] mb-3">{cert.issuer}</div>
                {cert.description && (
                  <p className="text-sm leading-relaxed text-[color:var(--fg-dim)] mb-5 flex-1">
                    {cert.description.slice(0, 150)}{cert.description.length > 150 ? "…" : ""}
                  </p>
                )}
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-[color:var(--border)]">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[color:var(--muted)]">
                    {cert.date}
                  </span>
                  {cert.verify && (
                    <a
                      href={cert.verify}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-label="Verify"
                      className="inline-flex items-center gap-1 text-[10px] font-mono tracking-widest uppercase text-[color:var(--fg-dim)] hover:text-[color:var(--fg)] transition-colors"
                    >
                      Verify <ArrowUpRight size={10} />
                    </a>
                  )}
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* Others: compact list */}
        <BlurFade delay={0.1} inView>
          <div className="border-t border-[color:var(--border)] divide-y divide-[color:var(--border)]">
            {others.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease, delay: 0.04 + i * 0.04 }}
                className="flex items-center justify-between py-4 gap-4 group hover:bg-[color:var(--bg-elevated)] transition-colors px-2 -mx-2 rounded-lg"
              >
                <div className="flex-1 min-w-0">
                  <span className="text-sm text-[color:var(--fg)] group-hover:text-[color:var(--fg)] transition-colors">
                    {cert.title}
                  </span>
                  <span className="text-xs text-[color:var(--muted)] ml-3 font-mono">{cert.issuer}</span>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[color:var(--muted)] hidden sm:block">
                    {cert.date}
                  </span>
                  {cert.verify && (
                    <a
                      href={cert.verify}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-label="Verify"
                      className="inline-flex items-center gap-1 text-[10px] font-mono tracking-widest uppercase text-[color:var(--fg-dim)] hover:text-[color:var(--fg)] transition-colors"
                    >
                      Verify <ArrowUpRight size={10} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
