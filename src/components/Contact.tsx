"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { personal } from "@/lib/data";
import { MagneticButton } from "@/components/MagneticButton";
import { BlurFade } from "@/components/ui/blur-fade";

const ease = [0.16, 1, 0.3, 1] as const;

const links = [
  { label: "Email",    value: personal.email,        href: `mailto:${personal.email}`,                       cursorLabel: "Email"    },
  { label: "LinkedIn", value: personal.linkedinLabel, href: personal.linkedin,                                cursorLabel: "LinkedIn" },
  { label: "GitHub",   value: personal.githubLabel,   href: personal.github,                                  cursorLabel: "Code"     },
  { label: "Phone",    value: personal.phone,         href: `tel:${personal.phone.replace(/[^0-9]/g, "")}`,  cursorLabel: "Call"     },
];

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-[color:var(--border-strong)] py-24 md:py-40 overflow-hidden">
      {/* Subtle ambient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob top-[10%] left-[5%] w-[500px] h-[500px] bg-violet-700/8 float-slow" />
        <div className="blob bottom-[10%] right-[5%] w-[400px] h-[400px] bg-cyan-600/6" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">

        <BlurFade delay={0.05} inView>
          <div className="mb-10 flex items-center gap-3 text-[10px] font-mono tracking-[0.3em] uppercase text-[color:var(--muted)]">
            <span>Let&apos;s Connect</span>
            <span className="flex-1 h-px bg-[color:var(--border)]" />
          </div>
          <h2 className="font-display text-[13vw] md:text-[11vw] leading-[0.85] text-[color:var(--fg)] mb-14">
            Let&apos;s <em className="italic text-[color:var(--fg-dim)]">Talk.</em>
          </h2>
        </BlurFade>

        <div className="grid md:grid-cols-[1fr_1.6fr] gap-10 md:gap-16 items-start">

          {/* Left */}
          <BlurFade delay={0.1} inView>
            <div className="space-y-6">
              <p className="text-base md:text-lg leading-relaxed text-[color:var(--fg-dim)]">
                Actively looking for full-time roles as a{" "}
                <span className="text-[color:var(--fg)] font-medium">Data Scientist</span>,{" "}
                <span className="text-[color:var(--fg)] font-medium">AI Engineer</span>,{" "}
                <span className="text-[color:var(--fg)] font-medium">ML Engineer</span>, or{" "}
                <span className="text-[color:var(--fg)] font-medium">Data Engineer</span>.
                Onsite, hybrid, or remote — anywhere in the US.
              </p>

              <div className="space-y-2 text-xs font-mono tracking-widest uppercase">
                <div className="flex items-center gap-2 text-[color:var(--fg-dim)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Available immediately
                </div>
                <div className="flex items-center gap-2 text-[color:var(--muted)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--muted)]" />
                  Open to relocate — anywhere in the US
                </div>
                <div className="flex items-center gap-2 text-[color:var(--muted)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--muted)]" />
                  Harrison, NJ (NYC metro)
                </div>
              </div>

              <MagneticButton
                as="a"
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-label="Download"
                className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[color:var(--fg)] text-[color:var(--bg)] text-[11px] tracking-[0.2em] uppercase font-mono hover:opacity-90 transition-opacity"
              >
                Download resume
                <ArrowUpRight size={12} />
              </MagneticButton>
            </div>
          </BlurFade>

          {/* Right: links */}
          <BlurFade delay={0.15} inView>
            <div className="border border-[color:var(--border)] rounded-2xl overflow-hidden divide-y divide-[color:var(--border)]">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  data-cursor-label={l.cursorLabel}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.07, ease }}
                  className="group flex items-center justify-between px-6 md:px-8 py-5 hover:bg-[color:var(--bg-elevated)] transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="text-[9px] font-mono tracking-[0.28em] uppercase text-[color:var(--muted)] mb-1">
                      {l.label}
                    </div>
                    <div className="font-display text-xl md:text-2xl text-[color:var(--fg)] group-hover:text-[color:var(--fg-dim)] transition-colors truncate">
                      {l.value}
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-full border border-[color:var(--border)] flex items-center justify-center text-[color:var(--fg-dim)] group-hover:bg-[color:var(--fg)] group-hover:text-[color:var(--bg)] group-hover:border-[color:var(--fg)] transition-all flex-shrink-0 ml-4">
                    <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-200" />
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
