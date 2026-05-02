"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { PROJECTS_DATA } from "@/utils/app_constant";
import { Lock, Github, ExternalLink, AppWindow } from "lucide-react";
import Link from "next/link";
import React, { MouseEvent } from "react";

const SpotlightCard = ({ children }: { children: React.ReactNode }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative h-full rounded-[24px] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 overflow-hidden transition-all duration-300 hover:shadow-xl dark:hover:shadow-black/50"
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.12),
              transparent 80%
            )
          `,
        }}
      />
      {/* Inner border gradient */}
      <div className="absolute inset-0 rounded-[24px] border-2 border-transparent group-hover:border-blue-500/10 transition-colors duration-500 pointer-events-none"></div>

      <div className="relative h-full flex flex-col p-7 z-10">
        {children}
      </div>
    </div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

const ProjectShowcase = () => {
  return (
    <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 sm:px-6 lg:px-8 py-16">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-6 w-full max-w-4xl mx-auto"
      >
        {PROJECTS_DATA.map((project, idx) => (
          <motion.div key={idx} variants={itemVariants} className="w-full">
            <SpotlightCard>
              <div className="flex flex-col w-full">
                
                {/* Header: Icon, Title, Type & Links */}
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-500 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shrink-0">
                      {project.icon ? (
                        <project.icon className="w-6 h-6" />
                      ) : (
                        <AppWindow className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-[20px] sm:text-[22px] font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-500 transition-colors duration-300 leading-tight">
                        {project.title}
                      </h4>
                      <span className="text-[11.5px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mt-1 block">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 shrink-0">
                    {project.github && project.github !== "#" && (
                      <Link href={project.github} target="_blank" className="p-2.5 rounded-full text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                        <Github className="w-4 h-4" />
                      </Link>
                    )}
                    {project.link && project.link !== "#" ? (
                      <Link href={project.link} target="_blank" className="p-2.5 rounded-full text-zinc-400 hover:text-blue-500 hover:bg-blue-500/10 transition-colors group/link">
                        <ExternalLink className="w-4 h-4 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </Link>
                    ) : (
                      <div className="p-2.5 rounded-full text-zinc-300 dark:text-zinc-700" title="Confidential / Internal">
                        <Lock className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-[15px] sm:text-[16px] text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 max-w-3xl whitespace-pre-wrap">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-x-3 gap-y-2 mt-auto pt-5 border-t border-zinc-100 dark:border-zinc-800/60">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[12.5px] font-medium text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                      {i > 0 && <span className="mr-3 text-zinc-300 dark:text-zinc-700">•</span>}
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectShowcase;
