"use client";

import { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  as?: "div" | "a" | "button";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  "data-cursor-label"?: string;
}

export function MagneticButton({
  children,
  className,
  strength = 0.28,
  as: Tag = "div",
  href,
  target,
  rel,
  onClick,
  "data-cursor-label": cursorLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 200, damping: 20, mass: 0.5 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  }, [x, y, strength]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const props = {
    ref: ref as React.RefObject<HTMLDivElement>,
    style: { x: springX, y: springY },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className,
    onClick,
    "data-cursor-label": cursorLabel,
    ...(href ? { href, target, rel } : {}),
  };

  if (Tag === "a") {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        style={{ x: springX, y: springY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={className}
        href={href}
        target={target}
        rel={rel}
        data-cursor-label={cursorLabel}
      >
        {children}
      </motion.a>
    );
  }

  if (Tag === "button") {
    return (
      <motion.button
        ref={ref as React.RefObject<HTMLButtonElement>}
        style={{ x: springX, y: springY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={className}
        onClick={onClick}
        data-cursor-label={cursorLabel}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      onClick={onClick}
      data-cursor-label={cursorLabel}
    >
      {children}
    </motion.div>
  );
}
