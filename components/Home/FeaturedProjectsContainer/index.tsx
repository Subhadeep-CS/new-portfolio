"use client";

import { PROJECTS_DATA } from "@/utils/app_constant";
import { ExternalLink, Github, Lock, AppWindow } from "lucide-react";
import Link from "next/link";
import ExpandButton from "@/components/Layout/common/ExpandButton";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
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
            <div className="absolute inset-0 rounded-[24px] border-2 border-transparent group-hover:border-blue-500/10 transition-colors duration-500 pointer-events-none"></div>
            <div className="relative h-full flex flex-col p-6 z-10">
                {children}
            </div>
        </div>
    );
};

const FeaturedProjectsContainer = () => {
    // Show only the first 3 projects as featured
    const featuredProjects = PROJECTS_DATA.slice(0, 3);

    return (
        <section className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
            <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 py-4 flex justify-between items-center bg-[#FAFAFA] dark:bg-zinc-900/50">
                <h3 className="text-[19px] font-semibold text-zinc-900 dark:text-zinc-100 border-l-2 border-blue-500 pl-3 leading-none">
                    Featured Projects
                </h3>
            </div>
            <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {featuredProjects.map((project, idx) => (
                        <div key={idx} className="w-full h-full">
                            <SpotlightCard>
                                <div className="flex flex-col h-full">
                                    <div className="flex justify-between items-start gap-4 mb-4">
                                        <div className="min-w-0">
                                            <h4 className="text-[15px] sm:text-[16px] font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-500 transition-colors duration-300 leading-tight truncate">
                                                {project.title}
                                            </h4>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mt-1 block">
                                                {project.type}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-1 shrink-0">
                                            {project.github && project.github !== "#" && (
                                                <Link href={project.github} target="_blank" className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                                                    <Github className="w-4 h-4" />
                                                </Link>
                                            )}
                                            {project.link && project.link !== "#" ? (
                                                <Link href={project.link} target="_blank" className="p-1.5 rounded-full text-zinc-400 hover:text-blue-500 hover:bg-blue-500/10 transition-colors group/link">
                                                    <ExternalLink className="w-4 h-4 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                                                </Link>
                                            ) : (
                                                <div className="p-1.5 rounded-full text-zinc-300 dark:text-zinc-700" title="Confidential / Internal">
                                                    <Lock className="w-4 h-4" />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-[13px] text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-x-2 mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/60">
                                        {project.tech.slice(0, 3).map((t, i) => (
                                            <span key={i} className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
                                                {t}{i < project.tech.slice(0, 3).length - 1 && <span className="ml-2 text-zinc-300 dark:text-zinc-700">|</span>}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </SpotlightCard>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center border-t border-zinc-100 dark:border-zinc-800 pt-8">
                    <ExpandButton
                        isLink
                        href="/projects"
                        label="View All Projects"
                    />
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjectsContainer;
