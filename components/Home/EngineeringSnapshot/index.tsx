"use client";

import { ENGINEERING_SNAPSHOT_ITEMS } from "@/utils/app_constant";
import Inspectable from "@/components/InspectMode/Inspectable";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, PhoneCall, Video, ShieldCheck, Cpu } from "lucide-react";

const icons = [CheckCircle2, Zap, PhoneCall, Video, ShieldCheck, Cpu];

const EngineeringSnapshot = () => {
  return (
    <Inspectable
      metadata={{
        name: "EngineeringSnapshot.tsx",
        description: "A compact summary of core engineering capabilities for quick recruiter scanning.",
        stack: ["React", "Framer Motion", "Lucide Icons", "TailwindCSS"],
        optimizations: [
          "Compact grid layout with minimal DOM depth",
          "Responsive multi-column cards",
          "Clean visual indicators without inflated stats"
        ],
        patterns: ["Capability Grid", "Recruiter-First Scannability"],
        architectureNotes: "Uses structured capability data from app_constant.ts to separate content from display logic.",
        accessibility: ["Semantic sectioning", "High contrast text", "Non-text icons equipped with descriptive labels"],
        buildProcess: [
          { iteration: "v1", note: "Added engineering snapshot component." }
        ]
      }}
    >
      <section id="snapshot" className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800 scroll-mt-20">
        <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 py-4 flex justify-between items-center bg-[#FAFAFA] dark:bg-zinc-900/50">
          <h3 className="text-[19px] font-semibold text-zinc-900 dark:text-zinc-100 border-l-2 border-blue-500 pl-3 leading-none">
            Engineering Snapshot
          </h3>
          <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest hidden sm:inline">
            Quick Scannable Overview
          </span>
        </div>

        <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 py-6 sm:py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {ENGINEERING_SNAPSHOT_ITEMS.map((item, index) => {
              const IconComponent = icons[index % icons.length];
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex flex-col justify-between p-3.5 sm:p-4 rounded-xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/40 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 group shadow-xs"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-900/30 group-hover:scale-105 transition-transform duration-300">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                      {item.label}
                    </h4>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium mt-1 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Inspectable>
  );
};

export default EngineeringSnapshot;
