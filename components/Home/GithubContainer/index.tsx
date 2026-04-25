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

  // Grayscale theme following the user's reference image
  const customTheme = {
    light: ["#F3F4F6", "#D1D5DB", "#9CA3AF", "#6B7280", "#374151"],
    dark: ["#1F2937", "#374151", "#4B5563", "#9CA3AF", "#E5E7EB"],
  };

  return (
    <section className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <GithubSectionHeader />

      <div
        className="container border-x border-zinc-200 dark:border-zinc-800 px-4 py-16 relative overflow-visible"
        ref={containerRef}
      >
        <div className="flex flex-col w-full max-w-5xl mx-auto relative px-2">

          {/* Precise Popover Tooltip */}
          <AnimatePresence>
            {hoveredActivity && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                className="absolute z-[999] pointer-events-none bg-zinc-950 text-white px-4 py-2 rounded-lg shadow-2xl text-[13px] font-medium flex items-center gap-1.5 whitespace-nowrap"
                style={{
                  left: hoveredActivity.x,
                  top: hoveredActivity.y - 12, // Offset to sit exactly above the square
                  transform: "translate(-50%, -100%)", // Centered horizontally, fully above vertically
                }}
              >
                <span className="font-bold">{hoveredActivity.count} contributions</span>
                <span className="text-zinc-400">on {new Date(hoveredActivity.date).toLocaleDateString("en-GB", { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '.')}</span>

                {/* Visual Arrow */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-zinc-950 rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* The Calendar Grid Container */}
          <div className="w-full flex justify-center py-4 relative">
            {/* Using a relative wrapper here to help with local coordinate mapping */}
            <div className="w-full overflow-x-auto no-scrollbar scroll-smooth">
              <div className="inline-block min-w-full text-center py-2 px-4">
                <GitHubCalendar
                  username="Subhadeep-CS"
                  hideColorLegend={true}
                  hideMonthLabels={false}
                  theme={customTheme}
                  blockSize={13}
                  blockMargin={4}
                  fontSize={14}
                  renderBlock={(block, activity) => (
                    <motion.rect
                      {...block.props}
                      whileHover={{ scale: 1.25, stroke: "rgba(0,0,0,0.1)", strokeWidth: 1 }}
                      onMouseEnter={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const containerRect = containerRef.current?.getBoundingClientRect();
                        if (containerRect) {
                          // Calculating X and Y relative to the containerRef which is 'relative'
                          // This handles centering and scrolling offsets correctly
                          setHoveredActivity({
                            ...activity,
                            x: rect.left - containerRect.left + rect.width / 2,
                            y: rect.top - containerRect.top,
                          });
                        }
                      }}
                      onMouseLeave={() => setHoveredActivity(null)}
                    />
                  )}
                />
              </div>
            </div>
          </div>

          {/* Custom Footer Label & Legend */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4 text-[13px] text-zinc-500 font-medium px-4">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="text-zinc-400">4,522 contributions in 2025 on</span>
              <span className="text-zinc-900 dark:text-zinc-100 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 font-bold cursor-pointer">GitHub</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span>Less</span>
              <div className="flex gap-1">
                {customTheme.light.map((color, i) => (
                  <div key={i} className="w-3.5 h-3.5 rounded-sm border border-black/5 dark:border-white/5" style={{ backgroundColor: color }} />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubContainer;
