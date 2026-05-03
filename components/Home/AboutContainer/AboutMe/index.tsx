"use client";
import { ABOUT_ME } from "@/utils/app_constant";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import ExpandButton from "@/components/Layout/common/ExpandButton";

const AboutMe = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Separate sections into visible and collapsible
  const visibleSections = ABOUT_ME.slice(0, 2);
  const collapsibleSections = ABOUT_ME.slice(2);

  const renderSection = (section: any) => (
    <div key={section.key} className="flex flex-col gap-3">
      <h4 className="text-[19px] font-semibold text-zinc-900 dark:text-zinc-100 border-l-2 border-blue-500 pl-3 leading-none">
        {section.key}
      </h4>
      <p className="text-[15.5px] leading-relaxed text-zinc-700 dark:text-zinc-400 mt-2">
        {section.details}
      </p>

      {section.children && section.children.length > 0 && (
        <ul className="mt-3 space-y-3">
          {section.children.map((child: any, cIdx: number) => (
            <motion.li
              key={cIdx}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="flex items-start gap-3 text-[15px] text-zinc-600 dark:text-zinc-500 pl-2 cursor-default group"
            >
              <span className="w-1.5 h-1.5 mt-2 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover:bg-blue-500 transition-colors duration-300 shrink-0" />
              <span className="group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors duration-300">
                <strong className="font-semibold text-zinc-800 dark:text-zinc-300">{child.key}:</strong>{" "}
                {child.details}
              </span>
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div
      id="about-me"
      className="container border-x border-zinc-200 dark:border-zinc-800 py-8 relative scroll-mt-20"
    >
      <div className="flex flex-col gap-10 max-w-4xl px-4">
        {/* Visible Sections */}
        {visibleSections.map(renderSection)}

        {/* Collapsible Sections */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="collapsible-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                opacity: { duration: 0.3 }
              }}
              className="overflow-hidden"
            >
              <div className="flex flex-col gap-10">
                {collapsibleSections.map(renderSection)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!isExpanded && ABOUT_ME.length > 2 && (
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent pointer-events-none" />
      )}

      {ABOUT_ME.length > 2 && (
        <div className="pt-8 mt-8 flex justify-center border-t border-zinc-200 dark:border-zinc-800">
          <ExpandButton
            isExpanded={isExpanded}
            onClick={() => {
              if (isExpanded) {
                (window as any).lenis?.scrollTo("#about-me", { offset: -80 });
                setIsExpanded(false);
              } else {
                setIsExpanded(true);
              }
            }}
            label={isExpanded ? "Show Less" : "Read More"}
          />
        </div>
      )}
    </div>
  );
};

export default AboutMe;
