"use client";

import { useRef } from "react";
import { PROJECTS_DATA, ProjectInterface } from "@/utils/app_constant";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, Rocket, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const ProjectCard = ({ project, index }: { project: ProjectInterface; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-12 pb-20 last:pb-0"
    >
      {/* Node Dot on the Timeline */}
      <div className="absolute left-[-9px] top-2 w-[18px] h-[18px] rounded-full bg-white dark:bg-zinc-950 border-[4px] border-blue-500 z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

      {/* Year Label */}
      <div className="absolute left-[-120px] top-1 w-20 text-right hidden lg:block">
        <span className="text-sm font-black text-zinc-400 dark:text-zinc-600 tracking-tighter uppercase">
          {project.year}
        </span>
      </div>

      {/* Project Content Card */}
      <div className="group relative bg-white dark:bg-zinc-900/50 p-6 sm:p-8 rounded-[32px] border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]">
        
        {/* Project Type Badge */}
        <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 rounded-full border border-zinc-200 dark:border-zinc-700">
                {project.type}
            </span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span className="text-[11px] font-medium text-zinc-400 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {project.year}
            </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white mb-3 tracking-tight group-hover:text-blue-500 transition-colors">
                    {project.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mb-6 font-medium">
                    {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1.5 bg-zinc-50 dark:bg-zinc-900 text-[12px] font-semibold text-zinc-600 dark:text-zinc-300 rounded-xl border border-zinc-100 dark:border-zinc-800 group-hover:border-blue-500/20 transition-colors">
                            {t}
                        </span>
                    ))}
                </div>

                {/* Action Buttons & Status */}
                <div className="flex items-center flex-wrap gap-4">
                    {project.link && project.link !== "#" ? (
                        <Link
                            href={project.link}
                            target="_blank"
                            className="flex items-center gap-2 px-6 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-bold text-[14px] hover:scale-105 active:scale-95 transition-all shadow-lg"
                        >
                            Live Preview <ExternalLink className="w-4 h-4" />
                        </Link>
                    ) : (
                        <div className="flex items-center gap-2 px-5 py-2.5 bg-zinc-100 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400 rounded-2xl font-bold text-[13px] border border-zinc-200 dark:border-zinc-700 select-none">
                            <span className="w-2 h-2 rounded-full bg-zinc-400 animate-pulse" />
                            Internal / Confidential Platform
                        </div>
                    )}
                    
                    {project.github && project.github !== "#" && (
                        <Link
                            href={project.github}
                            target="_blank"
                            className="flex items-center gap-2 px-5 py-2.5 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-2xl font-bold text-[14px] hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all font-mono"
                        >
                            SOURCE <Github className="w-4 h-4" />
                        </Link>
                    )}
                </div>
            </div>

            {/* Micro Interaction: Icon or Illustration */}
            <div className="hidden lg:flex w-24 h-24 rounded-[24px] bg-blue-50 dark:bg-blue-900/20 items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                <Rocket className="w-10 h-10 text-blue-500" />
            </div>
        </div>

        {/* Decorative corner element */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <ArrowRight className="w-6 h-6 text-blue-500/30 -rotate-45" />
        </div>
      </div>
    </motion.div>
  );
};

const ProjectTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 50%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-20" ref={containerRef}>
      <div className="relative ml-4 lg:ml-40">
        
        {/* The Vertical Line (Background) */}
        <div className="absolute left-0 top-2 bottom-0 w-[2px] bg-zinc-100 dark:bg-zinc-800 rounded-full" />
        
        {/* The Animated Line (Progress) */}
        <motion.div 
          className="absolute left-0 top-2 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 origin-top z-10"
          style={{ scaleY, height: "100%" }}
        />

        {/* Project Entries */}
        <div className="flex flex-col">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Journey End Point */}
        <div className="relative pl-12 py-10">
             <div className="absolute left-[-11px] top-10 w-[22px] h-[22px] rounded-full bg-zinc-900 dark:bg-white flex items-center justify-center">
                 <div className="w-2 h-2 rounded-full bg-white dark:bg-zinc-900 animate-pulse" />
             </div>
             <p className="text-zinc-400 dark:text-zinc-600 font-bold tracking-widest uppercase text-xs">
                To be continued...
             </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;
