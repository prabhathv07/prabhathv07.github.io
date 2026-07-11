"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 border-t hairline overflow-hidden">
      <div className="blob top-[10%] left-[-5%] w-[500px] h-[500px] bg-cyan-500/10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 md:mb-20"
        >
          <div className="mb-6 flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-white/50 font-mono">
            <span className="h-px w-8 bg-white/30" />
            <span>Toolkit</span>
          </div>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.9] text-white text-gradient">
            My<em className="italic text-white/50"> Stack</em>
          </h2>
        </motion.div>

        <div className="space-y-14 md:space-y-20">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease, delay: i * 0.08 }}
              className="border-t hairline pt-8 md:pt-10"
            >
              <div className="mb-6 flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-white/60 font-mono">
                <span className="glass rounded-full px-3 py-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{group.category}</span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 md:gap-x-6">
                {group.items.map((item, j) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      ease,
                      delay: 0.1 + j * 0.03,
                    }}
                    className="font-display text-3xl md:text-5xl lg:text-6xl text-white hover:text-white/50 transition-colors leading-tight"
                    data-cursor="text"
                  >
                    {item}
                    {j < group.items.length - 1 && (
                      <span className="text-white/20 mx-2">·</span>
                    )}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
