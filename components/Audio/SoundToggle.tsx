"use client";

import React from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
          <AnimatePresence mode="wait">
            {isMuted ? (
              <motion.div
                key="muted"
                initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 20 }}
                transition={{ duration: 0.15 }}
                className="text-zinc-400 dark:text-zinc-650"
              >
                <VolumeX className="h-[18px] w-[18px]" />
              </motion.div>
            ) : (
              <motion.div
                key="unmuted"
                initial={{ opacity: 0, scale: 0.8, rotate: 20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: -20 }}
                transition={{ duration: 0.15 }}
                className="text-blue-500 dark:text-blue-400"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1.5,
                  }}
                >
                  <Volume2 className="h-[18px] w-[18px]" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="text-xs bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-medium">
        {isMuted ? "Unmute UI Sounds" : "Mute UI Sounds"}
      </TooltipContent>
    </Tooltip>
  );
};
