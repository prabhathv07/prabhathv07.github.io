"use client";

import { personal } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "GitHub",   href: personal.github,                   external: true  },
  { label: "LinkedIn", href: personal.linkedin,                  external: true  },
  { label: "Email",    href: `mailto:${personal.email}`,         external: false },
  { label: "Resume",   href: personal.resume,                    external: true  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div className="space-y-0.5">
          <div className="text-xs font-medium text-[color:var(--fg-dim)]">
            © {new Date().getFullYear()} {personal.name}
          </div>
          <div className="text-[11px] text-[color:var(--muted)]">
            Data Scientist · AI Engineer · NJIT MS 2026
          </div>
        </div>

        <nav className="flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              data-cursor-label={l.label}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs text-[color:var(--muted)] hover:text-[color:var(--fg)] hover:bg-[color:var(--bg-elevated)] transition-all"
            >
              {l.label}
              {l.external && <ArrowUpRight size={9} />}
            </a>
          ))}
        </nav>

        <a
          href="#top"
          className="text-[11px] font-mono text-[color:var(--muted)] hover:text-[color:var(--fg)] transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
