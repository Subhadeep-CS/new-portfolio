"use client";

import { useRef } from "react";
import { EXPERIENCE_DATA } from "@/utils/app_constant";
import ExperienceSectionHeader from "./ExperienceSectionHeading";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";

const ExperienceContainer = () => {
  return (
    <section className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800 relative z-0">
      <ExperienceSectionHeader />
      <div className="container border-x border-zinc-200 dark:border-zinc-800 relative py-12">
        <div className="flex flex-col gap-6 w-full max-w-4xl">
          {EXPERIENCE_DATA.map((experience, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="bg-white dark:bg-zinc-950 p-2 sm:p-4"
            >
              <ExperienceCard 
                experience={experience} 
                isLast={index === EXPERIENCE_DATA.length - 1}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceContainer;
