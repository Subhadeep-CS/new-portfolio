"use client";

import { useState, useEffect, useRef } from "react";
import { Icons } from "@/assets/icons";
import { DESIGNATION } from "@/utils/app_constant";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Send, FileText, Github, Linkedin, Calendar } from "lucide-react";

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

  const handleContactClick = (e: React.MouseEvent) => {
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
    <div className="border-l border-zinc-200 dark:border-zinc-800 flex flex-col justify-between w-full p-4 sm:p-6 md:p-8 gap-5">
      {/* Availability Status Badge & Joining Info */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wide w-fit">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Open to New Opportunities</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
          <Calendar className="w-3.5 h-3.5 text-zinc-400" />
          <span>Available to join from <strong>19 September 2026</strong></span>
        </div>
      </div>

      {/* Main Identity & Headlines */}
      <div className="space-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-zinc-950 dark:text-zinc-50 font-bold tracking-tight">
            Subhadeep Das
          </h1>
          <div className="flex gap-1.5 items-center">
            <div title="Verified Software Engineer" className="flex items-center">
              <svg
                width={22}
                height={22}
                viewBox="0 0 24 24"
                fill="none"
                className="shrink-0"
                aria-label="Verified Engineer"
              >
                <path
                  d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                  className="fill-blue-500 dark:fill-blue-500"
                />
                <path
                  d="m9 12 2 2 4-4"
                  className="stroke-white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <button
              onClick={togglePlay}
              className="flex items-center gap-2 group transition-all duration-300 relative cursor-pointer"
              title="Listen to pronunciation"
            >
              <div className={`p-1.5 rounded-full transition-all duration-300 flex items-center relative ${isPlaying ? 'bg-blue-50 dark:bg-blue-900/20' : 'hover:bg-zinc-100 dark:hover:bg-zinc-900'}`}>
                <Icons.Volume2
                  size={20}
                  className={`transition-colors duration-300 ${isPlaying ? 'text-blue-500' : 'text-zinc-400 group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-300'}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Primary Role & Tech Stack */}
        <h2 className="text-lg sm:text-xl font-semibold text-zinc-800 dark:text-zinc-200">
          Frontend Software Engineer
        </h2>
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
          React.js • Next.js • TypeScript
        </p>

        {/* Dynamic Designation Carousel */}
        <div className="w-full flex items-center h-7 overflow-hidden relative pt-1">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={index}
              initial={{ y: -20, opacity: 0, filter: "blur(4px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: 20, opacity: 0, filter: "blur(4px)" }}
              transition={{ type: "spring", stiffness: 70, damping: 20, mass: 1 }}
              className="absolute left-0 whitespace-nowrap text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-normal"
            >
              {DESIGNATION?.[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Recruiter-focused Action CTAs */}
      <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
        <a
          href="#connect"
          onClick={handleContactClick}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-all duration-300 shadow-md shadow-blue-500/20 active:scale-95 cursor-pointer"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Let's Work Together</span>
        </a>

        <Link
          href="/resume"
          className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg transition-all duration-300 active:scale-95"
        >
          <FileText className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
          <span>View Resume</span>
        </Link>

        <a
          href="https://github.com/Subhadeep-CS"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors"
          title="GitHub Profile"
        >
          <Github className="w-4 h-4" />
          <span className="hidden xs:inline">GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/subhadeep-das-frontend-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg transition-colors"
          title="LinkedIn Profile"
        >
          <Linkedin className="w-4 h-4" />
          <span className="hidden xs:inline">LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default UserInformation;
