"use client"
import Inspectable from "@/components/InspectMode/Inspectable";
import ExperienceSectionHeader from "./ExperienceSectionHeading";
import { EXPERIENCE_DATA } from "@/utils/app_constant";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const ExperienceContainer = () => {
  return (
    <Inspectable
      metadata={{
        name: "ExperienceContainer.tsx",
        description: "A professional timeline showcasing work history with expandable role details and staggered entrance animations.",
        stack: ["Framer Motion", "Lucide Icons", "TailwindCSS"],
        optimizations: [
          "Intersection Observer for scroll-triggered animations",
          "Conditional rendering for expanded states",
          "Memoized list mapping for performance"
        ],
        patterns: ["Accordion / Expandable List", "Vertical Timeline Architecture", "Staggered List Animations"],
        architectureNotes: "Uses Framer Motion's whileInView for performant reveal animations. Data is normalized in app_constant.ts to separate content from logic.",
        animation: {
          type: "Staggered Entrance",
          duration: "0.4s per item",
          description: "Entrance animation with 0.1s delay between siblings."
        },
        accessibility: ["Keyboard navigable accordions", "Semantic sectioning", "High contrast focus states"],
        buildProcess: [
          { iteration: "v1", note: "Simple list of experiences." },
          { iteration: "v2", note: "Added expand/collapse functionality." },
          { iteration: "v3", note: "Implemented scroll-reveal staggered animations." }
        ]
      }}
    >
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
                className={`px-4 ${index === 0 ? "pb-4" : "py-4"}`}
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
    </Inspectable>
  );
};

export default ExperienceContainer;
