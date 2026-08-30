"use client";

import { personal } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "GitHub",   href: personal.github,   external: true  },
  { label: "LinkedIn", href: personal.linkedin,  external: true  },
  { label: "Email",    href: `mailto:${personal.email}`, external: false },
  { label: "Resume",   href: personal.resume,   external: true  },
];

export default function Footer() {
  return (
    <footer className="border-t hairline py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[color:var(--muted)]">
              © {new Date().getFullYear()} {personal.name}
            </div>
            <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[color:var(--muted)]">
              Data Scientist · AI Engineer · MS NJIT
            </div>
          </div>

          <nav className="flex items-center gap-1">
            {footerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                data-cursor-label={l.label}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[10px] font-mono tracking-widest uppercase text-[color:var(--fg-dim)] hover:text-[color:var(--fg)] hover:bg-white/5 transition-all"
              >
                {l.label}
                {l.external && <ArrowUpRight size={9} />}
              </a>
            ))}
          </nav>

          <a
            href="#top"
            className="text-[10px] font-mono tracking-[0.3em] uppercase text-[color:var(--muted)] hover:text-[color:var(--fg)] transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
