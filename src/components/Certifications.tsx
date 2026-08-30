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
    <section id="certifications" className="py-20 md:py-28 border-t border-[color:var(--border)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <BlurFade delay={0.05} inView>
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[color:var(--muted)] mb-4">
            Certifications
          </div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-[color:var(--fg)] leading-tight mb-12 md:mb-14">
            Credentials & Training
          </h2>
        </BlurFade>

        {/* Featured certs */}
        <BlurFade delay={0.08} inView>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {featured.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease, delay: 0.05 + i * 0.06 }}
                className="rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-card)] p-5 md:p-6 flex flex-col hover:border-[color:var(--border-strong)] hover:shadow-[var(--shadow)] transition-all"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <div className="text-[10px] font-mono uppercase tracking-wider text-[color:var(--accent)] mb-3">
                  {cert.issuer}
                </div>
                <h3 className="font-semibold text-sm text-[color:var(--fg)] leading-snug mb-2 flex-1">
                  {cert.title}
                </h3>
                {cert.description && (
                  <p className="text-xs text-[color:var(--fg-dim)] leading-[1.6] mb-4">
                    {cert.description.slice(0, 120)}{cert.description.length > 120 ? "…" : ""}
                  </p>
                )}
                <div className="flex items-center justify-between pt-3 border-t border-[color:var(--border)] mt-auto">
                  <span className="text-[10px] font-mono text-[color:var(--muted)]">{cert.date}</span>
                  {cert.verify && (
                    <a
                      href={cert.verify}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-label="Verify"
                      aria-label={`Verify ${cert.title} certificate`}
                      className="inline-flex items-center gap-1 text-[10px] font-mono text-[color:var(--fg-dim)] hover:text-[color:var(--accent)] transition-colors"
                    >
                      Verify <ArrowUpRight size={10} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </BlurFade>

        {/* Others: compact list */}
        <BlurFade delay={0.12} inView>
          <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-card)] divide-y divide-[color:var(--border)] overflow-hidden">
            {others.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, ease, delay: 0.03 + i * 0.04 }}
                className="flex items-center justify-between px-5 py-3.5 gap-4 hover:bg-[color:var(--bg-elevated)] transition-colors group"
              >
                <div className="flex-1 min-w-0">
                  <span className="text-sm text-[color:var(--fg)] font-medium">{cert.title}</span>
                  <span className="text-xs text-[color:var(--muted)] ml-2">{cert.issuer}</span>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className="text-[10px] font-mono text-[color:var(--muted)] hidden sm:block">
                    {cert.date}
                  </span>
                  {cert.verify && (
                    <a
                      href={cert.verify}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-label="Verify"
                      aria-label={`Verify ${cert.title}`}
                      className="inline-flex items-center gap-1 text-[10px] font-mono text-[color:var(--fg-dim)] hover:text-[color:var(--accent)] transition-colors"
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
