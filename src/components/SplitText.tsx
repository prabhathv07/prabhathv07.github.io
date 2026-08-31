"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  by?: "word" | "char";
  as?: "h1" | "h2" | "h3" | "p" | "span";
  wrapper?: (word: string, i: number) => ReactNode;
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function SplitText({
  children,
  className = "",
  delay = 0,
  stagger = 0.06,
  duration = 0.9,
  by = "word",
  as: Tag = "span",
  wrapper,
}: SplitTextProps) {
  const reduced = useReducedMotion();
  const units = by === "word" ? children.split(/(\s+)/) : Array.from(children);

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduced ? 0 : stagger, delayChildren: delay },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: reduced ? 0.01 : duration, ease },
    },
  };

  const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.span;

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ display: "inline-block" }}
    >
      {units.map((u, i) => {
        if (/^\s+$/.test(u)) return <span key={i}>{u}</span>;
        return (
          <motion.span
            key={i}
            variants={item}
            style={{ display: "inline-block", willChange: "transform, opacity, filter" }}
          >
            {wrapper ? wrapper(u, i) : u}
          </motion.span>
        );
      })}
    </MotionTag>
  );
}
