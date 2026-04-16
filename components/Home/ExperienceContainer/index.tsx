"use client";

import { useRef } from "react";
import { EXPERIENCE_DATA } from "@/utils/app_constant";
import ExperienceSectionHeader from "./ExperienceSectionHeading";
import ExperienceCard from "./ExperienceCard";
import { motion, useScroll, useSpring } from "framer-motion";

const ExperienceContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="border-y border-zinc-200 dark:border-zinc-800 relative z-0">
      <ExperienceSectionHeader />
      <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 py-8 relative" ref={containerRef}>
        
        {/* Animated timeline background line for Desktop */}
        <div className="absolute left-[3.25rem] top-12 bottom-12 w-[3px] bg-zinc-100 dark:bg-zinc-800 -z-10 rounded-full overflow-hidden hidden md:block">
            <motion.div 
                className="w-full bg-blue-500 origin-top" 
                style={{ scaleY, height: "100%" }}
            />
        </div>

        <div className="flex flex-col gap-6 w-full max-w-4xl">
          {EXPERIENCE_DATA.map((experience, index) => (
             <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.5, delay: index * 0.1 }}
                 key={index}
                 className="bg-white dark:bg-zinc-950 p-6 sm:p-8 rounded-[24px] shadow-sm border border-zinc-200 dark:border-zinc-800"
             >
                 <ExperienceCard experience={experience} />
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceContainer;
