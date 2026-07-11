"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [variant, setVariant] = useState<"default" | "link" | "text">("default");
  const [label, setLabel] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const leave = () => setVisible(false);

    const overListener = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const link = target.closest("a, button, [data-cursor='link']");
      const text = target.closest("[data-cursor='text']");
      if (link) {
        setVariant("link");
        const l =
          link.getAttribute("data-cursor-label") ||
          (link.tagName === "A" ? "Open" : "");
        setLabel(l);
      } else if (text) {
        setVariant("text");
        setLabel("");
      } else {
        setVariant("default");
        setLabel("");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", overListener);
    document.body.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", overListener);
      document.body.removeEventListener("mouseleave", leave);
    };
  }, [cursorX, cursorY, visible]);

  const scale =
    variant === "link" ? 2.6 : variant === "text" ? 0.4 : 1;

  return (
    <>
      <motion.div
        aria-hidden
        style={{
          translateX: smoothX,
          translateY: smoothY,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
      >
        <motion.div
          animate={{
            scale,
            opacity: visible ? 1 : 0,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 250 }}
          className="-ml-3 -mt-3 h-6 w-6 rounded-full bg-white"
        />
      </motion.div>

      <motion.div
        aria-hidden
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9998]"
      >
        <motion.div
          animate={{
            opacity: variant === "link" && label ? 1 : 0,
            y: variant === "link" ? -40 : -30,
          }}
          transition={{ type: "spring", damping: 22, stiffness: 260 }}
          className="-translate-x-1/2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-white whitespace-nowrap"
        >
          {label}
        </motion.div>
      </motion.div>
    </>
  );
}
