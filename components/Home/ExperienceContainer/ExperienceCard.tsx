"use client";
import { useState } from "react";
import { ExperienceInterface } from "@/utils/app_constant";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ExperienceCard = ({ experience, isLast }: { experience: ExperienceInterface, isLast?: boolean }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Get all unique skills
    const allSkills = Array.from(new Set(experience.roles.flatMap(role => role.skills)));

    const listVariant = {
        hidden: { opacity: 0, x: -10 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.3
            }
        })
    };

    return (
        <div className="relative pb-4 group/exp">
            
            {/* Header: Company Info */}
            <div 
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer py-6 px-2 rounded-2xl hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-all duration-300"
            >
                <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-3 transition-colors">
                        {experience.company}
                        <span className="text-zinc-400 font-normal text-sm">— {experience.roles[0]?.duration}</span>
                    </h3>
                    <p className="text-[15px] text-zinc-500 dark:text-zinc-400 font-medium">
                        {experience.roles[0]?.title} • {experience.roles[0]?.type}
                    </p>
                </div>
                
                <div className="flex items-center gap-4">
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 transition-colors"
                    >
                        <ChevronDown className="w-5 h-5 text-zinc-400" />
                    </motion.div>
                </div>
            </div>

            {/* Detailed Content */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <div className="pb-8 px-4 space-y-12">
                            {experience.roles.map((role, rIndex) => (
                                <div key={rIndex} className="flex flex-col gap-10">
                                    
                                    {/* Main Responsibilities */}
                                    <div className="space-y-4">
                                        <ul className="space-y-3">
                                            {role.responsibilities.map((resp, i) => (
                                                <motion.li 
                                                    key={i} 
                                                    custom={i}
                                                    variants={listVariant}
                                                    initial="hidden"
                                                    animate="visible"
                                                    whileHover={{ x: 6 }}
                                                    className="flex items-start gap-4 text-zinc-600 dark:text-zinc-400 text-[15px] leading-relaxed group/item cursor-default"
                                                >
                                                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover/item:bg-blue-500 transition-colors duration-300 shrink-0" />
                                                    <span className="group-hover/item:text-zinc-900 dark:group-hover/item:text-zinc-200 transition-colors duration-300">{resp}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Projects */}
                                    {role.projects && role.projects.length > 0 && (
                                        <div className="space-y-12">
                                            {role.projects.map((project, pIndex) => (
                                                <div key={pIndex} className="space-y-5">
                                                    <h5 className="text-[15px] font-medium text-zinc-500 dark:text-zinc-400">
                                                        In-house Project: {" "}
                                                        <span className="text-zinc-900 dark:text-zinc-100 underline decoration-zinc-200 dark:decoration-zinc-800 underline-offset-8">
                                                            {project.name}
                                                        </span>
                                                    </h5>
                                                    <ul className="space-y-3">
                                                        {project.description.map((desc, dIndex) => (
                                                            <motion.li 
                                                                key={dIndex}
                                                                custom={dIndex + role.responsibilities.length}
                                                                variants={listVariant}
                                                                initial="hidden"
                                                                animate="visible"
                                                                whileHover={{ x: 6 }}
                                                                className="flex items-start gap-4 text-zinc-600 dark:text-zinc-400 text-[15px] leading-relaxed group/project cursor-default"
                                                            >
                                                                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover/project:bg-blue-500 transition-colors duration-300 shrink-0" />
                                                                <span className="group-hover/project:text-zinc-900 dark:group-hover/project:text-zinc-200 transition-colors duration-300">{desc}</span>
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Tech Stack Pills w/ Micro-interaction */}
                                    <div className="flex flex-wrap gap-2 pt-4">
                                        {allSkills.map((skill, index) => (
                                            <motion.span 
                                                key={index}
                                                whileHover={{ y: -2, scale: 1.05 }}
                                                className="text-[12px] font-medium px-3 py-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 cursor-default"
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ExperienceCard;
