"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Stats() {
  return (
    <section className="relative py-24 md:py-32 border-t hairline overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-12 flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-white/50 font-mono">
          <span className="h-px w-8 bg-white/30" />
          <span>By the numbers</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-[10px] tracking-[0.25em] uppercase text-white/50 font-mono mb-4">
                  {stat.label}
                </div>
                <div className="font-display text-5xl md:text-6xl text-white mb-3 text-gradient">
                  {stat.value}
                </div>
                <div className="text-xs text-white/50 leading-relaxed">
                  {stat.note}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
