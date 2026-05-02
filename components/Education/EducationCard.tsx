"use client";

import { useState } from "react";
import { EducationInterface } from "@/utils/app_constant";
import { GraduationCap, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const EducationCard = ({ education, index, isLast }: { education: EducationInterface, index: number, isLast: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(index === 0); // Expand first item by default for better visibility

  return (
    <div className="relative pl-12 pb-12 last:pb-0 group/edu">
      {/* Vertical Timeline Line */}
      {!isLast && (
        <div className="absolute left-[1.1rem] top-8 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />
      )}

      {/* Graduation Icon Node */}
      <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center z-10 group-hover/edu:border-blue-500/50 transition-colors duration-300">
        <GraduationCap className="w-4 h-4 text-zinc-500 group-hover/edu:text-blue-500 transition-colors" />
      </div>

      {/* Header Area - Clickable */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-start justify-between gap-4 cursor-pointer"
      >
        <div className="flex flex-col gap-0.5 pt-1">
          <h3 className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 group-hover/edu:text-blue-600 dark:group-hover/edu:text-blue-400 transition-colors">
            {education.institution}
          </h3>
          <div className="flex flex-wrap items-center gap-2 text-[14px] font-medium text-zinc-500 dark:text-zinc-500">
            <span>{education.startDate}—{education.endDate}</span>
            <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <span>{education.duration}</span>
          </div>
        </div>

        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-zinc-400" />
        </motion.div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-6 flex flex-col gap-6">
              {/* Description List */}
              <ul className="space-y-4">
                {education.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-4 group/item">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover/item:bg-blue-500 transition-colors shrink-0" />
                    <span className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400 group-hover/item:text-zinc-900 dark:group-hover/item:text-zinc-200 transition-colors">
                      {desc}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              {education.skills && (
                <div className="flex flex-wrap gap-2">
                  {education.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[12px] font-medium px-3 py-1 rounded-lg bg-zinc-50 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default EducationCard;
