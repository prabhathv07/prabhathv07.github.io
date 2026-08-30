"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { personal } from "@/lib/data";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#work",       label: "Work"       },
  { href: "#about",      label: "About"      },
  { href: "#experience", label: "Experience" },
  { href: "#contact",    label: "Contact"    },
];

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[color:var(--bg)]/95 backdrop-blur-md border-b border-[color:var(--border)] shadow-[var(--shadow-xs)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between gap-6">
        {/* Logo */}
        <a
          href="#top"
          className="text-sm font-semibold text-[color:var(--fg)] hover:text-[color:var(--accent)] transition-colors tracking-tight"
        >
          PV
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 rounded-md text-sm text-[color:var(--fg-dim)] hover:text-[color:var(--fg)] hover:bg-[color:var(--bg-elevated)] transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-label="Resume"
            className="hidden sm:inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-[color:var(--fg)] text-[color:var(--bg)] hover:opacity-85 transition-opacity"
          >
            Resume <ArrowUpRight size={10} />
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden w-8 h-8 rounded-lg border border-[color:var(--border-strong)] flex items-center justify-center text-[color:var(--fg-dim)]"
          >
            {menuOpen ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[color:var(--border)] bg-[color:var(--bg-card)] px-6 py-4 space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm text-[color:var(--fg-dim)] hover:text-[color:var(--fg)] hover:bg-[color:var(--bg-elevated)] transition-all"
            >
              {l.label}
            </a>
          ))}
          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium bg-[color:var(--fg)] text-[color:var(--bg)] w-fit"
          >
            Resume <ArrowUpRight size={11} />
          </a>
        </div>
      )}
    </header>
  );
}
