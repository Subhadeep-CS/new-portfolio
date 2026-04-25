"use client";
import { useState } from "react";
import { ExperienceInterface } from "@/utils/app_constant";
import { CodeXml, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ExperienceCard = ({ experience, isLast }: { experience: ExperienceInterface, isLast?: boolean }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Get all unique skills/technologies used in this company across all roles
    const allSkills = Array.from(new Set(experience.roles.flatMap(role => role.skills)));

    return (
        <div className="relative pl-12 pb-2 first:pt-0 group/exp">
            
            {/* Vertical Timeline Line between Companies - Only if not last */}
            {!isLast && (
                <div className="absolute left-[1.35rem] top-12 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 group-hover/exp:bg-blue-500/30 transition-colors" />
            )}

            {/* Company Icon Node */}
            <div className="absolute left-0 top-0 w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-white font-bold overflow-hidden shrink-0 z-10 group-hover/exp:border-blue-500/50 transition-colors">
                <span className="text-lg">{experience.company.charAt(0)}</span>
            </div>

            {/* Header: Company Info + Main Technologies */}
            <div 
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer pt-1"
            >
                <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2 group-hover/exp:text-blue-600 dark:group-hover/exp:text-blue-400 transition-colors">
                        {experience.company}
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {allSkills.slice(0, 5).map((skill, index) => (
                            <span 
                                key={index} 
                                className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800"
                            >
                                {skill}
                            </span>
                        ))}
                        {allSkills.length > 5 && <span className="text-[10px] text-zinc-400">+{allSkills.length - 5} more</span>}
                    </div>
                </div>
                
                <div className="flex items-center gap-4 self-end md:self-auto">
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-50 dark:bg-zinc-900 group-hover/exp:bg-blue-50 dark:group-hover/exp:bg-blue-900/20 transition-colors"
                    >
                        <ChevronDown className="w-5 h-5 text-zinc-500 group-hover:text-blue-500 transition-colors" />
                    </motion.div>
                </div>
            </div>

            {/* Detailed Content: Roles Timeline */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <div className="mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-900">
                            <div className="flex flex-col ml-6 border-l-2 border-zinc-100 dark:border-zinc-900">
                                {experience.roles.map((role, rIndex) => (
                                    <div key={rIndex} className="relative pl-8 pb-10 last:pb-0">
                                        {/* Role Icon Positioned Over the Border */}
                                        <div className="absolute -left-[1.1rem] top-0 w-8 h-8 bg-white dark:bg-zinc-950 rounded-full border-2 border-zinc-100 dark:border-zinc-900 flex items-center justify-center">
                                            <CodeXml className="w-4 h-4 text-zinc-500" />
                                        </div>

                                        {/* Role Header */}
                                        <div className="flex flex-col gap-1">
                                            <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{role.title}</h4>
                                            <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                                                <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs">{role.type}</span>
                                                <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                                <span>{role.startDate} – {role.endDate}</span>
                                                <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                                <span className="italic">{role.duration}</span>
                                            </div>
                                        </div>

                                        {/* Content Body */}
                                        <div className="mt-6 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                                            {/* Main Responsibilities */}
                                            <ul className="space-y-4">
                                                {role.responsibilities.map((resp, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-start gap-3 group/item"
                                                    >
                                                        <span className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-400/50 group-hover/item:bg-blue-500 transition-colors shrink-0" />
                                                        <span className="group-hover/item:text-zinc-900 dark:group-hover/item:text-zinc-200 transition-colors">
                                                            {resp}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Projects */}
                                            {role.projects && role.projects.length > 0 && (
                                                <div className="mt-8 space-y-8">
                                                    {role.projects.map((project, pIndex) => (
                                                        <div key={pIndex} className="bg-zinc-50 dark:bg-zinc-900/50 p-5 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                                                            <h5 className="font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                                                                Project:
                                                                <span className="text-blue-500">{project.name}</span>
                                                            </h5>
                                                            <ul className="space-y-3">
                                                                {project.description.map((desc, dIndex) => (
                                                                    <li
                                                                        key={dIndex}
                                                                        className="flex items-start gap-3 group/desc text-[14.5px]"
                                                                    >
                                                                        <span className="w-1 h-1 mt-2.5 rounded-full bg-zinc-400 shrink-0" />
                                                                        <span className="group-hover/desc:text-zinc-900 dark:group-hover/desc:text-zinc-200 transition-colors">
                                                                            {desc}
                                                                        </span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ExperienceCard;
