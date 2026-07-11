"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { personal } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

const links = [
  { label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { label: "LinkedIn", value: personal.linkedinLabel, href: personal.linkedin },
  { label: "GitHub", value: personal.githubLabel, href: personal.github },
  { label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\D/g, "")}` },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-40 border-t hairline overflow-hidden"
    >
      <div className="absolute inset-0 accent-glow opacity-60" />
      <div className="blob top-[10%] left-[10%] w-[500px] h-[500px] bg-violet-600/15 float-slow" />
      <div className="blob bottom-[10%] right-[10%] w-[500px] h-[500px] bg-cyan-500/10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease }}
          className="mb-6 flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-white/60 font-mono"
        >
          <span className="h-px w-8 bg-white/40" />
          <span>Let&apos;s Connect</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="font-display text-[16vw] md:text-[13vw] leading-[0.85] text-white text-gradient"
        >
          Let&apos;s <em className="italic bg-gradient-to-br from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Talk.</em>
        </motion.h2>

        <div className="mt-14 grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg leading-relaxed text-white/70">
              Looking for <span className="text-white">Data Scientist</span> roles at
              companies building real ML systems. Open to onsite, hybrid, or
              remote — anywhere.
            </p>
            <div className="text-xs font-mono tracking-widest uppercase text-white/50 space-y-1">
              <div>· Open to relocate</div>
              <div>· F-1 STEM OPT</div>
              <div>· No sponsorship required (3 yrs)</div>
              <div>· Available now</div>
            </div>
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="Download"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-[11px] tracking-[0.25em] uppercase font-mono hover:bg-white/90 transition-all"
            >
              Download resume
              <ArrowUpRight size={14} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="glass rounded-3xl overflow-hidden divide-y hairline"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                data-cursor-label={l.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 + i * 0.06 }}
                className="group flex items-center justify-between px-6 md:px-8 py-6 md:py-8 hover:bg-white/5 transition-all"
              >
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/40 mb-2">
                    {l.label}
                  </div>
                  <div className="font-display text-2xl md:text-3xl text-white group-hover:text-white/70 transition-colors truncate">
                    {l.value}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all flex-shrink-0 ml-4">
                  <ArrowUpRight
                    size={18}
                    className="group-hover:rotate-45 transition-transform"
                  />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
