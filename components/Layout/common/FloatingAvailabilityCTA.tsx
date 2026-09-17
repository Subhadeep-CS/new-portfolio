"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, X } from "lucide-react";

const FloatingAvailabilityCTA = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo("#connect", { offset: -80 });
    } else {
      const el = document.getElementById("connect");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-[90] flex items-center gap-1.5 p-1 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-full shadow-lg shadow-black/5 hover:border-emerald-500/40 transition-all duration-300 group"
      >
        <button
          onClick={handleClick}
          className="flex items-center gap-2 pl-3 pr-2 py-1.5 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="whitespace-nowrap">Open to Opportunities</span>
          <Briefcase className="w-3.5 h-3.5 text-zinc-400 group-hover:text-blue-500 transition-colors ml-0.5" />
        </button>

        <button
          onClick={() => setIsVisible(false)}
          className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
          title="Dismiss status indicator"
          aria-label="Dismiss availability badge"
        >
          <X className="w-3 h-3" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingAvailabilityCTA;
