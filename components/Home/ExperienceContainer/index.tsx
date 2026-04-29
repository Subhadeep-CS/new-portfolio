"use client";

import { EXPERIENCE_DATA } from "@/utils/app_constant";
import ExperienceSectionHeader from "./ExperienceSectionHeading";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";

const ExperienceContainer = () => {
  return (
    <section className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800 relative z-0">
      <ExperienceSectionHeader />
      <div className="container border-x border-zinc-200 dark:border-zinc-800 relative py-8">
        <div className="flex flex-col w-full max-w-4xl mx-auto divide-y divide-zinc-200 dark:divide-zinc-800">
          {EXPERIENCE_DATA.map((experience, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={index}
              className={`px-4 ${index === 0 ? "pb-12" : "py-12"}`}
            >
              <ExperienceCard
                experience={experience}
                isLast={index === EXPERIENCE_DATA.length - 1}
                defaultExpanded={index === 0}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceContainer;
