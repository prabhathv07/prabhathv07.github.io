"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { personal, heroBio, heroNote } from "@/lib/data";

const NeuralSphere = dynamic(() => import("./NeuralSphere"), { ssr: false });

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full flex flex-col overflow-hidden"
    >
      <div className="absolute inset-0 accent-glow opacity-70" />
      <div className="blob top-[20%] left-[10%] w-[500px] h-[500px] bg-violet-600/15 float-slow" />
      <div className="blob top-[50%] right-[10%] w-[600px] h-[600px] bg-cyan-500/10" />
      <div className="blob bottom-[10%] left-[40%] w-[400px] h-[400px] bg-pink-500/10" />

      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.15 }}
        className="relative z-20 flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8"
      >
        <a
          href={`mailto:${personal.email}`}
          data-cursor-label="Email"
          className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] tracking-[0.2em] uppercase font-mono hover:bg-white/10 transition-all"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Available for work
        </a>

        <nav className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5">
          {[
            { href: "#work", label: "Work" },
            { href: "#about", label: "About" },
            { href: "#skills", label: "Stack" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-[12px] text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-label="Download"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-[11px] tracking-[0.15em] uppercase font-mono hover:bg-white/90 transition-all"
          >
            Resume
          </a>
        </div>
      </motion.header>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="mb-4 md:mb-6 flex items-center gap-3 text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-white/50 font-mono"
        >
          <span className="text-white/80">Data Scientist</span>
          <span className="h-px w-8 bg-white/20" />
          <span>MS · NJIT</span>
          <span className="h-px w-8 bg-white/20" />
          <span>Open to Work</span>
        </motion.div>

        <div className="relative flex flex-col items-center leading-[0.85] w-full">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.4 }}
            className="font-display text-[22vw] md:text-[16vw] text-white text-gradient text-center"
          >
            {personal.firstName}
          </motion.h1>

          <div className="relative w-full flex items-center justify-center -mt-[6vw] md:-mt-[5vw]">
            <div className="relative w-[38vw] md:w-[30vw] max-w-[500px] aspect-square">
              <NeuralSphere />
            </div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.55 }}
            className="font-display text-[22vw] md:text-[16vw] italic text-white text-gradient text-center -mt-[6vw] md:-mt-[5vw]"
          >
            {personal.lastName}
          </motion.h1>
        </div>
      </div>

      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 0.9 }}
        className="relative z-10 px-6 md:px-10 pb-8 md:pb-10 grid md:grid-cols-2 gap-6 md:gap-16 max-w-6xl mx-auto w-full"
      >
        <p className="text-sm md:text-[15px] leading-relaxed text-white/70">
          {heroBio}
        </p>
        <p className="text-sm md:text-[15px] leading-relaxed text-white/70 md:text-right">
          {heroNote}
        </p>
      </motion.footer>
    </section>
  );
}
