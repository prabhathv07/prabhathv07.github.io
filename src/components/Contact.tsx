"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { personal } from "@/lib/data";
import { MagneticButton } from "@/components/MagneticButton";
import { BlurFade } from "@/components/ui/blur-fade";

const ease = [0.16, 1, 0.3, 1] as const;

const links = [
  { label: "Email",    value: personal.email,         href: `mailto:${personal.email}`,                      cursorLabel: "Email"    },
  { label: "LinkedIn", value: personal.linkedinLabel,  href: personal.linkedin,                               cursorLabel: "LinkedIn" },
  { label: "GitHub",   value: personal.githubLabel,    href: personal.github,                                 cursorLabel: "Code"     },
  { label: "Phone",    value: personal.phone,          href: `tel:${personal.phone.replace(/[^0-9]/g, "")}`, cursorLabel: "Call"     },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-40 border-t hairline overflow-hidden">
      <div className="absolute inset-0 accent-glow opacity-50" />
      <div className="blob top-[10%] left-[8%]  w-[500px] h-[500px] bg-violet-600/15 float-slow" />
      <div className="blob bottom-[8%] right-[8%] w-[500px] h-[500px] bg-cyan-500/10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">

        <BlurFade delay={0.05} inView>
          <div className="mb-6 flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-[color:var(--fg-dim)] font-mono">
            <span className="h-px w-8 bg-[color:var(--border-strong)]" />
            <span>Let&apos;s Connect</span>
          </div>
        </BlurFade>

        <BlurFade delay={0.1} inView>
          <h2 className="font-display text-[15vw] md:text-[12vw] leading-[0.85] text-[color:var(--fg)] mb-14">
            Let&apos;s <em className="italic text-gradient-accent">Talk.</em>
          </h2>
        </BlurFade>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16 items-start">

          {/* Left */}
          <BlurFade delay={0.15} inView>
            <div className="space-y-6">
              <p className="text-base md:text-lg leading-relaxed text-[color:var(--fg-dim)]">
                Actively looking for full-time roles as a{" "}
                <span className="text-[color:var(--fg)] font-medium">Data Scientist</span>,{" "}
                <span className="text-[color:var(--fg)] font-medium">AI Engineer</span>,{" "}
                <span className="text-[color:var(--fg)] font-medium">ML Engineer</span>, or{" "}
                <span className="text-[color:var(--fg)] font-medium">Data Engineer</span>.
                Open to onsite, hybrid, or remote — anywhere in the US.
              </p>

              <div className="text-xs font-mono tracking-widest uppercase text-[color:var(--fg-dim)] space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-emerald-400" />
                  Available immediately
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[color:var(--fg-dim)]" />
                  Open to relocate anywhere in the US
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[color:var(--fg-dim)]" />
                  Harrison, NJ (NYC metro)
                </div>
              </div>

              <MagneticButton
                as="a"
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-label="Download"
                className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[color:var(--fg)] text-[color:var(--bg)] text-[11px] tracking-[0.22em] uppercase font-mono hover:opacity-90 transition-opacity"
              >
                Download resume
                <ArrowUpRight size={13} />
              </MagneticButton>
            </div>
          </BlurFade>

          {/* Right: links */}
          <BlurFade delay={0.2} inView>
            <div className="glass rounded-3xl overflow-hidden divide-y hairline">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  data-cursor-label={l.cursorLabel}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25 + i * 0.07, ease }}
                  className="group flex items-center justify-between px-6 md:px-8 py-6 hover:bg-white/[0.04] transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[color:var(--muted)] mb-1.5">
                      {l.label}
                    </div>
                    <div className="font-display text-xl md:text-2xl text-[color:var(--fg)] group-hover:text-[color:var(--fg-dim)] transition-colors truncate">
                      {l.value}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-[color:var(--fg)] group-hover:text-[color:var(--bg)] transition-all flex-shrink-0 ml-4">
                    <ArrowUpRight size={15} className="group-hover:rotate-45 transition-transform duration-200" />
                  </div>
                </motion.a>
              ))}
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
