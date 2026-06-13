"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Zap } from "lucide-react";
import { useInspectMode } from "./InspectContext";

const InspectToggle: React.FC = () => {
  const { isInspectMode, toggleInspectMode } = useInspectMode();

  return (
    <div className="fixed bottom-6 left-6 sm:bottom-10 sm:left-10 z-[10000] hidden sm:flex flex-col items-start gap-3">
      {/* Tooltip for Shortcut */}
      <AnimatePresence>
        {!isInspectMode && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl text-[10px] text-zinc-400 font-medium whitespace-nowrap"
          >
            Press <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded border border-zinc-700 text-zinc-100">Alt + I</kbd> for Inspect Mode
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleInspectMode}
        className={`
          flex items-center gap-2 px-4 py-2.5 rounded-full border shadow-2xl transition-all duration-500 cursor-pointer
          ${isInspectMode 
            ? "bg-blue-600 border-blue-400 text-white" 
            : "bg-zinc-900/80 backdrop-blur-md border-zinc-700 text-zinc-300 hover:border-zinc-500"}
        `}
      >
        {isInspectMode ? (
          <>
            <X className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-tight">Exit Inspect</span>
          </>
        ) : (
          <>
            <div className="relative">
              <Search className="w-4 h-4" />
              <motion.div 
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-blue-500 rounded-full blur-sm -z-10"
              />
            </div>
            <span className="text-sm font-semibold tracking-tight">Inspect Mode</span>
            <div className="ml-1 px-1.5 py-0.5 bg-zinc-800/50 rounded-md border border-zinc-700 text-[10px] text-zinc-500">
              BETA
            </div>
          </>
        )}
      </motion.button>
    </div>
  );
};

export default InspectToggle;
