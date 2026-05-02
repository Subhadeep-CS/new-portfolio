"use client";
import { useState } from "react";
import { ExperienceInterface } from "@/utils/app_constant";
import { ChevronDown, Briefcase, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ExperienceCard = ({ experience, isLast, defaultExpanded = false }: { experience: ExperienceInterface, isLast?: boolean, defaultExpanded?: boolean }) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    return (
        <div className="group/card w-full max-w-full">
            {/* Company Header Row */}
            <div className="flex gap-4 md:gap-6 items-stretch">
                {/* Left Column: Timeline Logo */}
                <div className="flex flex-col items-center shrink-0 w-10 md:w-12">
                    <div className="relative group/logo w-10 h-10 md:w-12 md:h-12 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-950 p-2 z-10 transition-transform duration-500 group-hover/logo:scale-110 group-hover/logo:rotate-3 shadow-sm flex items-center justify-center">
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-fuchsia-500 rounded-2xl opacity-0 group-hover/logo:opacity-20 blur-xl transition-opacity duration-500" />
                        {experience.logoUrl ? (
                            <Image
                                src={experience.logoUrl}
                                alt={experience.company}
                                width={48}
                                height={48}
                                className="w-full h-full object-contain relative z-10"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center relative z-10">
                                <Briefcase className="w-5 h-5 text-zinc-400" />
                            </div>
                        )}
                    </div>
                    {/* Line down to first role */}
                    <div className="w-[2px] flex-1 bg-zinc-200 dark:bg-zinc-800 mt-2 min-h-[16px] group-hover/card:bg-blue-500/30 transition-colors duration-500 rounded-t-full" />
                </div>

                {/* Right Column: Company Name */}
                <div className="flex-1 pb-6 flex items-start">
                    <div className="flex items-center gap-2 h-10 md:h-12 w-full">
                        <h3 className="text-[16px] md:text-[18px] font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight text-wrap">
                            {experience.company}
                        </h3>
                        {experience.company.toLowerCase().includes("webart") && (
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)] shrink-0"
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Roles Container */}
            <div className="flex flex-col w-full">
                {experience.roles.map((role, rIndex) => (
                    <div key={rIndex} className="flex gap-4 md:gap-6 items-stretch w-full">
                        {/* Left Column: Timeline Dot & Line */}
                        <div className="flex flex-col items-center shrink-0 w-10 md:w-12">
                            {/* Upper line to bridge gap to dot */}
                            <div className="w-[2px] h-1.5 bg-zinc-200 dark:bg-zinc-800 group-hover/card:bg-blue-500/30 transition-colors duration-500" />

                            {/* Dot */}
                            <div className="w-4 h-4 rounded-full border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex items-center justify-center transition-colors duration-300 group-hover/card:border-blue-500/50 shrink-0 z-10">
                                <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover/card:bg-blue-500 transition-colors duration-300" />
                            </div>

                            {/* Lower Line connecting to next role */}
                            {rIndex < experience.roles.length - 1 && (
                                <div className="w-[2px] flex-1 bg-zinc-200 dark:bg-zinc-800 group-hover/card:bg-blue-500/30 transition-colors duration-500" />
                            )}
                        </div>

                        {/* Role Content Wrapper */}
                        <div className="flex-1 pb-10 min-w-0">
                            <div className="space-y-4">
                                {/* Role Header */}
                                <div
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="flex items-center justify-between gap-2 group/role cursor-pointer"
                                >
                                    <div className="space-y-1">
                                        <h4 className="text-[14px] md:text-[16px] font-semibold text-zinc-800 dark:text-zinc-200 transition-colors group-hover/role:text-blue-500 leading-tight pr-2 text-wrap">
                                            {role.title}
                                        </h4>

                                        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[12px] md:text-[13px] font-medium text-zinc-500 dark:text-zinc-500">
                                            <span>{role.type}</span>
                                            <span className="text-zinc-300 dark:text-zinc-800">|</span>
                                            <span className="tabular-nums">{role.startDate} — {role.endDate}</span>
                                            <span className="hidden sm:inline text-zinc-300 dark:text-zinc-800">|</span>
                                            <span className="text-zinc-400 dark:text-zinc-600 font-normal">{role.duration}</span>
                                        </div>
                                    </div>

                                    <button
                                        className="p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-400 shrink-0"
                                    >
                                        <motion.div animate={{ rotate: isExpanded ? 0 : -90 }}>
                                            <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                                        </motion.div>
                                    </button>
                                </div>

                                {/* Expandable Content */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "circOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="space-y-6 pt-2">
                                                {/* Responsibilities */}
                                                <ul className="space-y-3 pl-1">
                                                    {role.responsibilities.map((resp, i) => (
                                                        <motion.li
                                                            key={i}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: i * 0.05 }}
                                                            className="flex items-start gap-3 group/item text-zinc-600 dark:text-zinc-400 text-[15px] leading-relaxed"
                                                        >
                                                            <Sparkles className="w-3.5 h-3.5 mt-1 text-zinc-300 dark:text-zinc-700 group-hover/item:text-blue-500 transition-colors shrink-0" />
                                                            <span className="group-hover/item:text-zinc-900 dark:group-hover/item:text-zinc-200 transition-colors">{resp}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>

                                                {/* Skills Pills */}
                                                <div className="flex flex-wrap gap-2 pl-1">
                                                    {role.skills.map((skill, sIndex) => (
                                                        <motion.span
                                                            key={sIndex}
                                                            whileHover={{ y: -2, scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/30 hover:shadow-sm transition-all cursor-default"
                                                        >
                                                            {skill}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceCard;
