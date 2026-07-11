"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { certifications } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Certifications() {
  const featured = certifications.find((c) => c.featured);
  const others = certifications.filter((c) => !c.featured);

  return (
    <section id="certifications" className="relative py-24 md:py-32 border-t hairline overflow-hidden">
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
            <span>Certifications</span>
          </div>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.9] text-white text-gradient">
            Validated<em className="italic text-white/50"> by the best</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease }}
              className="md:col-span-2 md:row-span-2 glass rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-all"
            >
              <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber-500/25 via-pink-500/15 to-transparent blur-3xl opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col h-full">
                <div className="text-[10px] tracking-[0.3em] uppercase text-amber-400/80 font-mono mb-4">
                  Featured
                </div>
                <h3 className="font-display text-3xl md:text-5xl text-white leading-tight mb-4">
                  {featured.title}
                </h3>
                <div className="text-sm text-white/60 mb-6">{featured.issuer}</div>
                {featured.description && (
                  <p className="text-sm md:text-base leading-relaxed text-white/70 mb-8 max-w-2xl">
                    {featured.description}
                  </p>
                )}
                <div className="mt-auto flex items-center gap-6 flex-wrap">
                  <span className="text-xs font-mono tracking-widest uppercase text-white/50">
                    {featured.date}
                  </span>
                  {featured.verify && (
                    <a
                      href={featured.verify}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-label="Verify"
                      className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase text-white hover:text-white/70 transition-colors"
                    >
                      Verify
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {others.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 relative overflow-hidden hover:border-white/20 transition-all"
            >
              <h4 className="font-display text-xl md:text-2xl text-white mb-3 leading-tight">
                {cert.title}
              </h4>
              <div className="text-xs text-white/60 mb-4 line-clamp-2">
                {cert.issuer}
              </div>
              <div className="flex items-center gap-4 flex-wrap pt-4 border-t hairline">
                <span className="text-[10px] font-mono tracking-widest uppercase text-white/40">
                  {cert.date}
                </span>
                {cert.verify && (
                  <a
                    href={cert.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-label="Verify"
                    className="inline-flex items-center gap-1 text-[10px] font-mono tracking-widest uppercase text-white hover:text-white/70 transition-colors"
                  >
                    Verify
                    <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
