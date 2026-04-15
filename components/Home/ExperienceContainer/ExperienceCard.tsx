"use client";
import { ExperienceInterface } from "@/utils/app_constant";
import { CodeXml, ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const ExperienceCard = ({ experience }: { experience: ExperienceInterface }) => {
    return (
        <div className="py-8 first:pt-4 flex flex-col gap-4">
            {/* Header: Company Info */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-900 border flex items-center justify-center text-white font-bold overflow-hidden relative">
                    <span className="text-sm">{experience.company.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 flex items-center gap-2">
                    {experience.company}
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                </h3>
            </div>

            {/* Roles Timeline */}
            <div className="flex flex-col ml-5 border-l border-zinc-200">
                {experience.roles.map((role, rIndex) => (
                    <div key={rIndex} className="relative pl-8 pb-8 last:pb-0">
                        {/* Role Icon Positioned Over the Border */}
                        <div className="absolute -left-3.5 top-0 w-7 h-7 bg-white rounded-full border border-zinc-200 flex items-center justify-center">
                            <CodeXml className="w-4 h-4 text-zinc-600" />
                        </div>

                        {/* Role Header */}
                        <div className="flex items-start justify-between">
                            <div>
                                <h4 className="text-[17px] font-semibold text-zinc-900">{role.title}</h4>
                                <div className="flex flex-wrap items-center gap-2 mt-1 text-sm text-zinc-500 font-medium tracking-wide">
                                    <span>{role.type}</span>
                                    <span className="text-zinc-300">|</span>
                                    <span>{role.startDate} – {role.endDate}</span>
                                    <span className="text-zinc-300">|</span>
                                    <span>{role.duration}</span>
                                </div>
                            </div>
                            <ChevronDown className="w-5 h-5 text-zinc-400" />
                        </div>

                        {/* Content Body */}
                        <div className="mt-6 text-[15.5px] leading-relaxed text-zinc-700">
                            {/* Main Responsibilities */}
                            <ul className="space-y-3">
                                {role.responsibilities.map((resp, i) => (
                                    <motion.li
                                        key={i}
                                        whileHover={{ x: 6 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                        className="flex items-start gap-3 pl-2 cursor-default group"
                                    >
                                        <span className="w-1.5 h-1.5 mt-2 rounded-full bg-zinc-300 group-hover:bg-blue-500 transition-colors duration-300 shrink-0" />
                                        <span className="group-hover:text-zinc-900 transition-colors duration-300">
                                            {resp}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Projects */}
                            {role.projects && role.projects.length > 0 && (
                                <div className="mt-6 space-y-6">
                                    {role.projects.map((project, pIndex) => (
                                        <div key={pIndex}>
                                            <h5 className="font-semibold text-zinc-900 mb-4 flex items-center gap-2">
                                                In-house Project:
                                                <span className="font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md text-sm">{project.name}</span>
                                            </h5>
                                            <ul className="space-y-3">
                                                {project.description.map((desc, dIndex) => (
                                                    <motion.li
                                                        key={dIndex}
                                                        whileHover={{ x: 6 }}
                                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                                        className="flex items-start gap-3 pl-2 cursor-default group"
                                                    >
                                                        <span className="w-1.5 h-1.5 mt-2 rounded-full bg-zinc-300 group-hover:bg-blue-500 transition-colors duration-300 shrink-0" />
                                                        <span className="group-hover:text-zinc-900 transition-colors duration-300">
                                                            {desc}
                                                        </span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Skills Tags */}
                            <div className="flex flex-wrap gap-2 mt-6">
                                {role.skills.map((skill, sIndex) => (
                                    <span
                                        key={sIndex}
                                        className="px-2.5 py-1 text-[13px] border border-zinc-200 rounded-md text-zinc-600 bg-white"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceCard;
