"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInspectMode } from "./InspectContext";

const InspectOverlay: React.FC = () => {
  const { isInspectMode } = useInspectMode();
  const [breakpoint, setBreakpoint] = useState("");

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 640) setBreakpoint("xs");
      else if (width < 768) setBreakpoint("sm");
      else if (width < 1024) setBreakpoint("md");
      else if (width < 1280) setBreakpoint("lg");
      else if (width < 1536) setBreakpoint("xl");
      else setBreakpoint("2xl");
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return (
    <AnimatePresence>
      {isInspectMode && (
        <>
          {/* Subtle Grid Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9990] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Screen Info */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[10000] px-4 py-2 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-full shadow-2xl flex items-center gap-4 pointer-events-none"
          >
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Viewport</span>
              <span className="text-sm font-mono text-blue-400">{typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : '0x0'}</span>
            </div>
            <div className="w-[1px] h-3 bg-zinc-800" />
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Breakpoint</span>
              <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-xs font-bold uppercase">{breakpoint}</span>
            </div>
          </motion.div>

          {/* Scanning Line Animation */}
          <motion.div
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="fixed left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent z-[9991] pointer-events-none"
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default InspectOverlay;
