"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { personal } from "@/lib/data";

const commands = [
  { id: "work",     label: "Projects",    sub: "View my projects",           href: "#work",           icon: "◈" },
  { id: "about",    label: "About",       sub: "Who I am and what I do",     href: "#about",          icon: "◉" },
  { id: "skills",   label: "Stack",       sub: "Technologies and tools",     href: "#skills",         icon: "◎" },
  { id: "journey",  label: "Experience",  sub: "Scale AI · HCL Tech · NJIT", href: "#experience",     icon: "◌" },
  { id: "contact",  label: "Contact",     sub: "Let's talk",                 href: "#contact",        icon: "◍" },
  { id: "resume",   label: "Resume",      sub: "Download my CV",             href: personal.resume,   icon: "↓",  external: true },
  { id: "github",   label: "GitHub",      sub: personal.githubLabel,         href: personal.github,   icon: "⌥",  external: true },
  { id: "linkedin", label: "LinkedIn",    sub: personal.linkedinLabel,       href: personal.linkedin, icon: "⌘",  external: true },
  { id: "email",    label: "Email",       sub: personal.email,               href: `mailto:${personal.email}`, icon: "✉", external: true },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);

  const filtered = commands.filter(
    (c) =>
      c.label.toLowerCase().includes(query.toLowerCase()) ||
      c.sub.toLowerCase().includes(query.toLowerCase())
  );

  const close = useCallback(() => { setOpen(false); setQuery(""); setSelected(0); }, []);

  const navigate = useCallback((cmd: typeof commands[0]) => {
    close();
    if (cmd.external) {
      window.open(cmd.href, "_blank", "noopener,noreferrer");
    } else {
      const el = document.querySelector(cmd.href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [close]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); setOpen((o) => !o); }
      if (!open) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowDown") setSelected((s) => Math.min(s + 1, filtered.length - 1));
      if (e.key === "ArrowUp")   setSelected((s) => Math.max(s - 1, 0));
      if (e.key === "Enter" && filtered[selected]) navigate(filtered[selected]);
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, [open, close, filtered, selected, navigate]);

  useEffect(() => { setSelected(0); }, [query]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="cmd-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={close}
        >
          <motion.div
            className="cmd-box"
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-[color:var(--border)]">
              <Search size={15} className="text-[color:var(--muted)] flex-shrink-0" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, links…"
                className="flex-1 bg-transparent text-sm text-[color:var(--fg)] placeholder-[color:var(--muted)] outline-none font-mono"
              />
              <kbd className="hidden sm:flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-mono text-[color:var(--muted)] border border-[color:var(--border)] rounded">
                ESC
              </kbd>
            </div>
            <ul className="py-2 max-h-[360px] overflow-y-auto no-scrollbar">
              {filtered.length === 0 ? (
                <li className="px-4 py-6 text-center text-sm text-[color:var(--fg-dim)] font-mono">
                  No results for "{query}"
                </li>
              ) : (
                filtered.map((cmd, i) => (
                  <li key={cmd.id}>
                    <button
                      onClick={() => navigate(cmd)}
                      onMouseEnter={() => setSelected(i)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                        i === selected ? "bg-[color:var(--bg-elevated)]" : "hover:bg-[color:var(--bg-surface)]"
                      }`}
                    >
                      <span className="w-7 h-7 rounded-lg glass flex items-center justify-center text-sm flex-shrink-0 font-mono text-[color:var(--fg-dim)]">
                        {cmd.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-[color:var(--fg)] truncate">{cmd.label}</div>
                        <div className="text-xs text-[color:var(--fg-dim)] truncate">{cmd.sub}</div>
                      </div>
                      {i === selected && (
                        <ArrowRight size={14} className="text-[color:var(--accent)] flex-shrink-0" />
                      )}
                    </button>
                  </li>
                ))
              )}
            </ul>
            <div className="px-4 py-2 border-t border-[color:var(--border)] flex items-center justify-between">
              <span className="text-[10px] font-mono text-[color:var(--muted)]">⌘K to toggle</span>
              <div className="flex items-center gap-3 text-[10px] font-mono text-[color:var(--muted)]">
                <span>↑↓ navigate</span>
                <span>↵ open</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
