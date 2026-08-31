"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "top", label: "Intro" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certs" },
  { id: "contact", label: "Contact" },
];

export default function SectionRail() {
  const [active, setActive] = useState<string>("top");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const els = sections
      .map((s) => ({ id: s.id, el: document.getElementById(s.id) }))
      .filter((s): s is { id: string; el: HTMLElement } => !!s.el);

    if (els.length === 0) return;

    const onScroll = () => {
      setVisible(window.scrollY > 400);
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = els[0].id;
      for (const { id, el } of els) {
        if (el.offsetTop <= y) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className={`hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            data-cursor-label={s.label}
            className="group relative flex items-center"
            aria-label={`Jump to ${s.label}`}
          >
            <span
              className={`absolute right-full mr-3 px-2 py-0.5 rounded text-[10px] font-mono tracking-[0.16em] uppercase whitespace-nowrap transition-all ${
                isActive
                  ? "opacity-100 translate-x-0 text-[color:var(--fg)]"
                  : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-[color:var(--fg-dim)]"
              }`}
              style={{
                background: isActive ? "var(--bg-card)" : "var(--bg-card)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-xs)",
              }}
            >
              {s.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? "w-2.5 h-2.5"
                  : "w-1.5 h-1.5 group-hover:w-2 group-hover:h-2"
              }`}
              style={{
                background: isActive ? "var(--accent)" : "var(--border-strong)",
              }}
            />
          </a>
        );
      })}
    </nav>
  );
}
