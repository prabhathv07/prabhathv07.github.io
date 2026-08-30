"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type PresetType = "fade" | "slide" | "scale" | "blur" | "blur-slide";

const presetVariants: Record<PresetType, { container: Variants; item: Variants }> = {
  fade: {
    container: { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } },
    item: { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } },
  },
  slide: {
    container: { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } },
    item: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } },
  },
  scale: {
    container: { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } },
    item: { hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } } },
  },
  blur: {
    container: { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } },
    item: { hidden: { opacity: 0, filter: "blur(10px)" }, visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.4 } } },
  },
  "blur-slide": {
    container: { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } },
    item: { hidden: { opacity: 0, y: 20, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } } },
  },
};

interface TextEffectProps {
  children: string;
  per?: "word" | "char" | "line";
  as?: keyof React.JSX.IntrinsicElements;
  preset?: PresetType;
  variants?: { container?: Variants; item?: Variants };
  className?: string;
  trigger?: boolean;
  onAnimationComplete?: () => void;
  segmentWrapperClassName?: string;
}

export function TextEffect({
  children,
  per = "word",
  as: Component = "p",
  preset = "fade",
  variants,
  className,
  trigger = true,
  onAnimationComplete,
  segmentWrapperClassName,
}: TextEffectProps) {
  const selectedVariants = variants || presetVariants[preset];
  const segments = per === "char" ? children.split("") : children.split(" ");

  const MotionComponent = motion[Component as keyof typeof motion] as typeof motion.p;

  return (
    <AnimatePresence mode="popLayout">
      {trigger && (
        <MotionComponent
          className={cn("whitespace-pre-wrap", className)}
          variants={selectedVariants.container}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onAnimationComplete={onAnimationComplete}
        >
          {segments.map((segment, i) => (
            <motion.span
              key={`${segment}-${i}`}
              variants={selectedVariants.item}
              className={cn("inline-block", segmentWrapperClassName)}
            >
              {per === "word" ? segment + " " : segment}
            </motion.span>
          ))}
        </MotionComponent>
      )}
    </AnimatePresence>
  );
}
