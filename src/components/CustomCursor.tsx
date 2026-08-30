"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorVariant = "default" | "link" | "text" | "view" | "drag";

const LABEL_MAP: Record<string, string> = {
  Email: "EMAIL",
  Download: "SAVE",
  GitHub: "GITHUB",
  Code: "CODE",
  Live: "VISIT",
  LinkedIn: "LINKEDIN",
  Verify: "VERIFY",
  Light: "LIGHT",
  Dark: "DARK",
  View: "VIEW",
  Open: "OPEN",
};

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [label, setLabel] = useState("");
  const isTouchRef = useRef(false);

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const springCfg = { damping: 28, stiffness: 400, mass: 0.4 };
  const smoothX = useSpring(cursorX, springCfg);
  const smoothY = useSpring(cursorY, springCfg);

  useEffect(() => {
    if (typeof window === "undefined") return;
    isTouchRef.current = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchRef.current) return;

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const link = t.closest("a, button, [data-cursor='link']");
      const text = t.closest("[data-cursor='text']");
      const drag = t.closest("[data-cursor='drag']");

      if (drag) {
        setVariant("drag");
        setLabel("DRAG");
      } else if (link) {
        setVariant("link");
        const raw = link.getAttribute("data-cursor-label") || "";
        setLabel(LABEL_MAP[raw] || raw.toUpperCase() || "OPEN");
      } else if (text) {
        setVariant("text");
        setLabel("");
      } else {
        setVariant("default");
        setLabel("");
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [cursorX, cursorY, visible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  const dotScale = variant === "link" ? 3 : variant === "text" ? 0.35 : variant === "drag" ? 2 : 1;
  const showLabel = (variant === "link" || variant === "drag") && label;

  return (
    <>
      {/* Main dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
        style={{ translateX: smoothX, translateY: smoothY }}
      >
        <motion.div
          className="-ml-3 -mt-3 h-6 w-6 rounded-full bg-white"
          animate={{ scale: dotScale, opacity: visible ? 1 : 0 }}
          transition={{ type: "spring", damping: 18, stiffness: 280 }}
        />
      </motion.div>

      {/* Label pill */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998]"
        style={{ translateX: cursorX, translateY: cursorY }}
      >
        <motion.div
          className="-translate-x-1/2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1 text-[9px] font-mono tracking-[0.18em] text-white whitespace-nowrap"
          animate={{
            opacity: showLabel ? 1 : 0,
            y: showLabel ? -44 : -32,
            scale: showLabel ? 1 : 0.85,
          }}
          transition={{ type: "spring", damping: 22, stiffness: 300 }}
        >
          {label}
        </motion.div>
      </motion.div>
    </>
  );
}
