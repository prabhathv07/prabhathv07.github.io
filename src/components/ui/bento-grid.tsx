"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps {
  name?: string;
  className?: string;
  children?: ReactNode;
  background?: ReactNode;
  Icon?: React.FC<{ className?: string }>;
  description?: string;
  href?: string;
  cta?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  name,
  className,
  children,
  background,
  Icon,
  description,
  href,
  cta,
}: BentoCardProps) {
  return (
    <div
      key={name}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xl",
        "bg-[#0d0d0f] border border-white/[0.06]",
        "[box-shadow:0_0_0_1px_rgba(255,255,255,0.06)]",
        "transition-all duration-300 hover:border-white/[0.12] hover:shadow-[0_0_30px_rgba(124,58,237,0.08)]",
        className
      )}
    >
      <div>{background}</div>
      <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:translate-y-[-4px]">
        {Icon && (
          <Icon className="h-10 w-10 origin-left text-white/60 transition-all duration-300 ease-in-out group-hover:scale-90 group-hover:text-[#7c3aed]" />
        )}
        {name && (
          <h3 className="text-base font-semibold text-white/90">{name}</h3>
        )}
        {description && (
          <p className="max-w-lg text-sm text-white/50">{description}</p>
        )}
        {children}
      </div>
      {href && cta && (
        <div
          className={cn(
            "pointer-events-none absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0",
            "transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          )}
        >
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto text-xs font-medium text-[#7c3aed] hover:underline"
          >
            {cta} →
          </a>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-white/[0.01]" />
    </div>
  );
}
