"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = stored ? stored === "dark" : prefersDark;
    setIsDark(dark);
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      data-cursor-label={isDark ? "Light" : "Dark"}
      className="w-8 h-8 rounded-lg border border-[color:var(--border-strong)] flex items-center justify-center text-[color:var(--fg-dim)] hover:text-[color:var(--fg)] hover:bg-[color:var(--bg-elevated)] transition-all"
    >
      {isDark ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  );
}
