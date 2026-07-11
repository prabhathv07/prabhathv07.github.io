"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

const gradients = [
  "from-violet-600/30 via-fuchsia-600/20 to-transparent",
  "from-cyan-500/30 via-blue-600/20 to-transparent",
  "from-amber-500/30 via-orange-600/20 to-transparent",
  "from-emerald-500/30 via-teal-600/20 to-transparent",
  "from-rose-500/30 via-pink-600/20 to-transparent",
  "from-indigo-500/30 via-violet-600/20 to-transparent",
  "from-lime-500/30 via-emerald-600/20 to-transparent",
  "from-sky-500/30 via-cyan-600/20 to-transparent",
];

export default function Projects() {
  return (
    <section id="work" className="relative py-24 md:py-32 border-t hairline overflow-hidden">
      <div className="blob top-[20%] right-[-10%] w-[600px] h-[600px] bg-violet-600/10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 md:mb-24"
        >
          <div className="mb-6 flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-white/50 font-mono">
            <span className="h-px w-8 bg-white/30" />
            <span>Selected work · {projects.length} projects</span>
          </div>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.9] text-white text-gradient">
            My<em className="italic text-white/50"> Projects</em>
          </h2>
          <p className="mt-6 max-w-xl text-white/60 leading-relaxed">
            From production RAG platforms to distributed data pipelines and
            LLM-alignment research — every build here solves a real problem with
            math, tests, and shipping discipline.
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {projects.map((project, i) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease, delay: (i % 3) * 0.06 }}
              className="group relative"
            >
              <div className="relative glass rounded-3xl p-8 md:p-10 overflow-hidden transition-all hover:border-white/20">
                <div
                  className={`absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br ${gradients[i % gradients.length]} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700`}
                />

                <div className="relative grid md:grid-cols-[100px_1fr_auto] gap-6 md:gap-10 items-start">
                  <div className="flex md:flex-col justify-between md:justify-start gap-3">
                    <div className="font-display text-5xl md:text-6xl text-white/30 group-hover:text-white/70 transition-colors">
                      {project.number}
                    </div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-white/40 font-mono md:mt-2">
                      {project.tag}
                    </div>
                  </div>

                  <div className="min-w-0">
                    <div className="text-[10px] tracking-[0.25em] uppercase text-white/40 font-mono mb-3">
                      {project.category}
                    </div>
                    <h3 className="font-display text-3xl md:text-5xl text-white leading-tight mb-4">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed text-white/60 max-w-2xl mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-[11px] font-mono rounded-full glass text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t hairline">
                      {project.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-mono mb-1">
                            {m.label}
                          </div>
                          <div className="font-display text-xl md:text-2xl text-white">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex md:flex-col gap-3 md:pt-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-label="Live"
                        className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-white hover:text-black transition-all group/btn"
                      >
                        <ArrowUpRight
                          size={18}
                          className="group-hover/btn:rotate-45 transition-transform"
                        />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-label="Code"
                        className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-white hover:text-black transition-all"
                      >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2.01-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.39-5.25 5.67.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.14 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
