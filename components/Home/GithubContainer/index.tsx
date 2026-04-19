"use client";
import { useState, useRef } from "react";
import { GitHubCalendar } from "react-github-calendar";
import GithubSectionHeader from "./GithubSectionHeading";
import { motion, AnimatePresence } from "framer-motion";

const GithubContainer = () => {
  const [hoveredActivity, setHoveredActivity] = useState<{
    count: number;
    date: string;
    level: number;
    x: number;
    y: number;
  } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <GithubSectionHeader />
      <div
        className="container border-x border-zinc-200 dark:border-zinc-800 px-4 py-12 relative overflow-hidden"
        ref={containerRef}
      >
        <div className="flex flex-col items-center w-full relative">
          <AnimatePresence>
            {hoveredActivity && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                className="absolute z-[100] pointer-events-none bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-4 py-2.5 rounded-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] border border-zinc-800 dark:border-zinc-200 flex flex-col items-center gap-0.5"
                style={{
                  left: hoveredActivity.x,
                  top: hoveredActivity.y - 65, // Position above the dot
                  transform: "translateX(-50%)",
                }}
              >
                <span className="text-[14px] font-black leading-none">
                  {hoveredActivity.count}{" "}
                  {hoveredActivity.count === 1
                    ? "contribution"
                    : "contributions"}
                </span>
                <span className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                  {new Date(hoveredActivity.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                {/* Arrow */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-900 dark:bg-zinc-100 rotate-45 border-r border-b border-zinc-800 dark:border-zinc-200" />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="p-4 sm:p-8 pb-12 bg-zinc-50/50 dark:bg-zinc-900/30 rounded-[32px] border border-zinc-100 dark:border-zinc-800/50 shadow-inner w-full flex justify-center">
            <div className="scale-[0.65] sm:scale-[0.85] md:scale-100 origin-center transition-transform duration-500">
              <GitHubCalendar
                username="Subhadeep-CS"
                colorScheme="light"
                blockSize={13}
                blockMargin={4}
                fontSize={14}
                theme={{
                  light: ["#EBEDF0", "#9BE9A8", "#40C463", "#30A14E", "#216E39"],
                  dark: ["#161B22", "#0E4429", "#006D32", "#26A641", "#39D353"],
                }}
                renderBlock={(block, activity) => (
                  <motion.g
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const containerRect =
                        containerRef.current?.getBoundingClientRect();
                      if (containerRect) {
                        setHoveredActivity({
                          ...activity,
                          x: rect.left - containerRect.left + rect.width / 2,
                          y: rect.top - containerRect.top,
                        });
                      }
                    }}
                    onMouseLeave={() => setHoveredActivity(null)}
                  >
                    {block}
                  </motion.g>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubContainer;
