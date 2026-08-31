"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

interface Props {
  className?: string;
  density?: number;
  linkDistance?: number;
  accent?: string;
  dim?: string;
}

export default function NeuralField({
  className = "",
  density = 0.00009,
  linkDistance = 140,
  accent = "15, 118, 110",
  dim = "17, 17, 17",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(pointer: coarse)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let nodes: Node[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const targetCount = Math.max(
        24,
        Math.min(140, Math.floor(width * height * density))
      );
      nodes = new Array(targetCount).fill(0).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: 1.1 + Math.random() * 1.6,
      }));
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };
    const onLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    const step = () => {
      ctx.clearRect(0, 0, width, height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mActive = mouseRef.current.active;
      const link2 = linkDistance * linkDistance;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        if (mActive) {
          const dx = n.x - mx;
          const dy = n.y - my;
          const d2 = dx * dx + dy * dy;
          if (d2 < 22000) {
            const force = (22000 - d2) / 22000;
            n.x += (dx / Math.max(Math.sqrt(d2), 1)) * force * 0.6;
            n.y += (dy / Math.max(Math.sqrt(d2), 1)) * force * 0.6;
          }
        }
      }

      // links
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < link2) {
            const alpha = (1 - d2 / link2) * 0.35;
            ctx.strokeStyle = `rgba(${dim}, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // mouse-node links (accent color)
      if (mActive) {
        for (let i = 0; i < nodes.length; i++) {
          const a = nodes[i];
          const dx = a.x - mx;
          const dy = a.y - my;
          const d2 = dx * dx + dy * dy;
          if (d2 < 32000) {
            const alpha = (1 - d2 / 32000) * 0.55;
            ctx.strokeStyle = `rgba(${accent}, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mx, my);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        ctx.fillStyle = `rgba(${dim}, 0.55)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(step);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    if (!isMobile) window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    if (!reduced) rafRef.current = requestAnimationFrame(step);
    else step(); // draw one static frame

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [density, linkDistance, accent, dim]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      aria-hidden
    />
  );
}
