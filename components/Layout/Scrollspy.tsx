"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollspy } from "@/hooks/useScrollspy";
import {
  ChevronRight,
} from "lucide-react";
import { SECTIONS } from "@/utils/app_constant";



export default function Scrollspy() {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const activeId = useScrollspy(SECTIONS.map((s) => s.id));

  // Only render on the homepage
  if (pathname !== "/") return null;

  const handleScrollTo = (id: string) => {
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(`#${id}`, { offset: -80 });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-[40] hidden lg:flex flex-col items-end"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          width: isHovered ? 200 : 56,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="bg-white/70 dark:bg-zinc-950/70 border border-zinc-200/60 dark:border-zinc-800/60 backdrop-blur-xl rounded-2xl shadow-xl shadow-black/5 overflow-hidden flex flex-col p-2 gap-1 border-collapse"
      >
        {SECTIONS.map((section) => {
          const isActive = activeId === section.id;
          const Icon = section.icon;

          return (
            <button
              key={section.id}
              onClick={() => handleScrollTo(section.id)}
              className="relative flex items-center h-10 w-full rounded-xl cursor-pointer text-left focus:outline-none transition-colors group select-none"
            >
              {/* Active Background Slide Indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeScrollSection"
                  className="absolute inset-0 bg-blue-50 dark:bg-blue-950/40 rounded-xl"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              {/* Icon / Content Wrapper */}
              <div className="relative z-10 flex items-center w-full">
                <div className="w-10 h-10 flex items-center justify-center shrink-0">
                  <Icon
                    className={`w-[20px] h-[20px] transition-transform duration-300 group-hover:scale-110 ${
                      isActive
                        ? "text-blue-500"
                        : "text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400"
                    }`}
                  />
                </div>

                {/* Text Label */}
                <span
                  className={`text-xs font-semibold tracking-wide truncate transition-all duration-300 ${
                    isHovered
                      ? "opacity-100 translate-x-0 ml-1"
                      : "opacity-0 -translate-x-2 pointer-events-none"
                  } ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 font-bold"
                      : "text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-zinc-100"
                  }`}
                >
                  {section.label}
                </span>
              </div>
            </button>
          );
        })}
      </motion.div>

      {/* Subtle Hint Arrow when collapsed */}
      <AnimatePresence>
        {!isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 5 }}
            className="absolute right-[-10px] top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 text-white shadow-md cursor-pointer pointer-events-none"
          >
            <ChevronRight className="w-4 h-4 rotate-180 animate-pulse" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
