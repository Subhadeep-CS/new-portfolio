"use client";

import { useState, useEffect, useRef } from "react";
import { Icons } from "@/assets/icons";
import { DESIGNATION } from "@/utils/app_constant";
import { motion, AnimatePresence } from "framer-motion";

const SpeakerWave = () => (
  <div className="flex items-center justify-center w-5 h-5">
    <svg width="14" height="20" viewBox="0 0 14 20" fill="none" className="text-blue-500">
      <motion.path
        d="M3 6C5 8 5 12 3 14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        animate={{
          opacity: [0, 1, 0],
          x: [0, 1, 0]
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.path
        d="M8 3C11 7 11 13 8 17"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        animate={{
          opacity: [0, 1, 0],
          x: [0, 1.5, 0]
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          delay: 0.3,
          ease: "easeInOut"
        }}
      />
    </svg>
  </div>
);

const UserInformation = () => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % (DESIGNATION?.length || 1));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/my_name_audio.mp3");
      audioRef.current.onended = () => setIsPlaying(false);
    }

    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(err => console.error("Audio playback failed:", err));
      setIsPlaying(true);
    }
  };

  return (
    <div className="border-l border-zinc-200 dark:border-zinc-800 flex flex-col gap-1 justify-end divide-y-1 w-full *:pl-4">
      <div className="text-zinc-300 dark:text-zinc-700 hidden">text-3xl text-zinc-950 font-medium</div>
      <div className="flex gap-2 items-center">
        <h3 className="text-3xl text-zinc-950 dark:text-zinc-100 font-medium">Subhadeep Das</h3>
        <div className="flex gap-1 items-center">
          <Icons.BadgeCheck size={24} className="text-white" fill="" />
          <button
            onClick={togglePlay}
            className="flex items-center gap-2 group transition-all duration-300 relative cursor-pointer"
            title="Listen to pronunciation"
          >
            <div className={`p-1.5 rounded-full transition-all duration-300 flex items-center relative ${isPlaying ? 'bg-blue-50 dark:bg-blue-900/20' : 'hover:bg-zinc-100 dark:hover:bg-zinc-900'}`}>
              <Icons.Volume2
                size={22}
                className={`transition-colors duration-300 ${isPlaying ? 'text-blue-500' : 'text-zinc-400 group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-300'}`}
              />
            </div>
          </button>
        </div>
      </div>
      <div className="w-full flex items-center h-8 overflow-hidden relative pl-4">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={index}
            initial={{ y: -30, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: 30, opacity: 0, filter: "blur(4px)" }}
            transition={{ type: "spring", stiffness: 60, damping: 20, mass: 1.2 }}
            className="absolute left-4 whitespace-nowrap text-zinc-400 dark:text-zinc-500"
          >
            {DESIGNATION?.[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UserInformation;
