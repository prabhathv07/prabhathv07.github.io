"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, ExternalLink, Code2, Phone } from "lucide-react";
import { personal } from "@/lib/data";
import { BlurFade } from "@/components/ui/blur-fade";

const ease = [0.16, 1, 0.3, 1] as const;

const contactLinks = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    Icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: personal.linkedinLabel,
    href: personal.linkedin,
    Icon: ExternalLink,
    external: true,
  },
  {
    label: "GitHub",
    value: personal.githubLabel,
    href: personal.github,
    Icon: Code2,
    external: true,
  },
  {
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/[^0-9]/g, "")}`,
    Icon: Phone,
    external: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-[color:var(--border)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">

          {/* Left: CTA copy */}
          <BlurFade delay={0.05} inView>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[color:var(--muted)] mb-6">
                Get in touch
              </div>
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-[color:var(--fg)] leading-[1.15] mb-6">
                Let&apos;s work together.
              </h2>
              <p className="text-base text-[color:var(--fg-dim)] leading-[1.7] mb-8">
                I&apos;m actively looking for full-time roles as a{" "}
                <strong className="text-[color:var(--fg)] font-medium">Data Scientist</strong>,{" "}
                <strong className="text-[color:var(--fg)] font-medium">AI Engineer</strong>,{" "}
                <strong className="text-[color:var(--fg)] font-medium">ML Engineer</strong>, or{" "}
                <strong className="text-[color:var(--fg)] font-medium">Data Engineer</strong>.
                Onsite, hybrid, or remote — anywhere in the US.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2.5 text-sm text-[color:var(--fg-dim)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  Available immediately
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[color:var(--fg-dim)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--border-strong)] flex-shrink-0" />
                  Open to relocate anywhere in the US
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[color:var(--fg-dim)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--border-strong)] flex-shrink-0" />
                  Harrison, NJ (NYC metro)
                </div>
              </div>

              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-label="Download"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[color:var(--accent)] text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Download Resume <ArrowUpRight size={13} />
              </a>
            </div>
          </BlurFade>

          {/* Right: contact links */}
          <BlurFade delay={0.1} inView>
            <div
              className="rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-card)] overflow-hidden divide-y divide-[color:var(--border)]"
              style={{ boxShadow: "var(--shadow-sm)" }}
            >
              {contactLinks.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  data-cursor-label={l.label}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease, delay: 0.1 + i * 0.06 }}
                  className="group flex items-center gap-4 px-6 py-5 hover:bg-[color:var(--bg-elevated)] transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg border border-[color:var(--border)] flex items-center justify-center text-[color:var(--fg-dim)] group-hover:border-[color:var(--accent)] group-hover:text-[color:var(--accent)] transition-all flex-shrink-0">
                    <l.Icon size={15} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[color:var(--muted)] mb-0.5">
                      {l.label}
                    </div>
                    <div className="text-sm font-medium text-[color:var(--fg)] truncate">
                      {l.value}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-[color:var(--muted)] group-hover:text-[color:var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0"
                  />
                </motion.a>
              ))}
            </div>
          </BlurFade>

        </div>
      </div>
    </section>
  );
}
