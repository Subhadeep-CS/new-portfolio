"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAudio } from "./AudioContext";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export const SoundToggle = () => {
  const { isMuted, toggleMute } = useAudio();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={toggleMute}
          // data-sound="none" to prevent automatic default click sounds from looping inside the sound toggle click itself
          data-sound="none"
          className="inline-flex items-center justify-center rounded-xl w-9 h-9 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors relative cursor-pointer group shadow-sm bg-white dark:bg-zinc-950"
          aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
        >
          <div className="relative flex items-end justify-center gap-[2.5px] h-[15px] w-[18px] overflow-visible">
            {/* Bar 1 */}
            <motion.div
              animate={{
                height: isMuted ? "3px" : ["3px", "15px", "3px"],
              }}
              transition={
                isMuted
                  ? { duration: 0.2 }
                  : {
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 0.8,
                      ease: "easeInOut",
                    }
              }
              className={`w-[2.5px] rounded-full transition-colors duration-300 ${
                isMuted ? "bg-zinc-300 dark:bg-zinc-700" : "bg-blue-500 dark:bg-blue-400"
              }`}
            />
            {/* Bar 2 */}
            <motion.div
              animate={{
                height: isMuted ? "3px" : ["3px", "11px", "3px"],
              }}
              transition={
                isMuted
                  ? { duration: 0.2 }
                  : {
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 0.5,
                      ease: "easeInOut",
                      delay: 0.15,
                    }
              }
              className={`w-[2.5px] rounded-full transition-colors duration-300 ${
                isMuted ? "bg-zinc-300 dark:bg-zinc-700" : "bg-blue-500 dark:bg-blue-400"
              }`}
            />
            {/* Bar 3 */}
            <motion.div
              animate={{
                height: isMuted ? "3px" : ["3px", "14px", "3px"],
              }}
              transition={
                isMuted
                  ? { duration: 0.2 }
                  : {
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 0.7,
                      ease: "easeInOut",
                      delay: 0.3,
                    }
              }
              className={`w-[2.5px] rounded-full transition-colors duration-300 ${
                isMuted ? "bg-zinc-300 dark:bg-zinc-700" : "bg-blue-500 dark:bg-blue-400"
              }`}
            />
            {/* Bar 4 */}
            <motion.div
              animate={{
                height: isMuted ? "3px" : ["3px", "9px", "3px"],
              }}
              transition={
                isMuted
                  ? { duration: 0.2 }
                  : {
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 0.6,
                      ease: "easeInOut",
                      delay: 0.05,
                    }
              }
              className={`w-[2.5px] rounded-full transition-colors duration-300 ${
                isMuted ? "bg-zinc-300 dark:bg-zinc-700" : "bg-blue-500 dark:bg-blue-400"
              }`}
            />

            {/* Diagonal Slash Line */}
            <motion.div
              initial={false}
              animate={{
                width: isMuted ? "22px" : "0px",
                opacity: isMuted ? 1 : 0,
              }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 h-[1.5px] bg-zinc-400 dark:bg-zinc-550 origin-center"
              style={{
                transform: "translate(-50%, -50%) rotate(-45deg)",
              }}
            />
          </div>
        </button>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="text-xs bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-medium">
        {isMuted ? "Unmute UI Sounds" : "Mute UI Sounds"}
      </TooltipContent>
    </Tooltip>
  );
};
