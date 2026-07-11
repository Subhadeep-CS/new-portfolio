"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Search, Compass, ChevronUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollspy } from "@/hooks/useScrollspy";
import { SECTIONS } from "@/utils/app_constant";
import { useAudio } from "@/components/Audio/AudioContext";

const FloatingCommandButton = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useScrollspy(SECTIONS.map((s) => s.id));
  const containerRef = useRef<HTMLDivElement>(null);
  const { playSound } = useAudio();

  const handleOpenPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextOpen = !isOpen;
    setIsOpen(nextOpen);
    if (nextOpen) {
      playSound("open");
    }
  };

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
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

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const isHomepage = pathname === "/";

  // Find active section label for display in button/dropdown
  const activeSection = SECTIONS.find((s) => s.id === activeId);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] sm:hidden flex flex-col items-center"
    >
      {/* Scrollspy Dropdown (Mobile) */}
      <AnimatePresence>
        {isOpen && isHomepage && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="w-[240px] max-h-[320px] overflow-y-auto bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl p-2 mb-3 flex flex-col gap-1 z-50 scrollbar-hide"
            data-lenis-prevent
          >
            <div className="px-3 py-1.5 text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest border-b border-zinc-100 dark:border-zinc-900 mb-1">
              Jump to Section
            </div>
            {SECTIONS.map((section) => {
              const isActive = activeId === section.id;
              const Icon = section.icon;

              return (
                <button
                  key={section.id}
                  onClick={() => handleScrollTo(section.id)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer text-left transition-all text-xs font-semibold ${
                    isActive
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                      : "text-zinc-600 dark:text-zinc-400 active:bg-zinc-100 dark:active:bg-zinc-900"
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-zinc-400"}`} />
                  <span className="truncate">{section.label}</span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Pill (CMD) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center bg-white/85 dark:bg-zinc-900/85 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl shadow-black/10 p-1 px-2 text-zinc-600 dark:text-zinc-400 border-collapse"
      >
        {/* Left Search Button */}
        <button
          onClick={handleOpenPalette}
          className="flex items-center gap-2 pl-2 pr-3 py-1.5 active:scale-95 transition-transform cursor-pointer"
        >
          <Search className="w-4 h-4 text-blue-500" />
          <span className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-100">Search</span>
        </button>

        {isHomepage && (
          <>
            <div className="h-4 w-[1px] bg-zinc-200 dark:bg-zinc-800 mx-1" />

            {/* Right Dropdown Toggle Button */}
            <button
              onClick={toggleDropdown}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                isOpen
                  ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 scale-95"
                  : "active:scale-95"
              }`}
            >
              <Compass className={`w-4 h-4 ${isOpen ? "text-blue-500 rotate-45" : "text-zinc-500"} transition-all duration-300`} />
              <span className="text-[12px] font-semibold text-zinc-600 dark:text-zinc-400 w-[90px] text-left truncate block">
                {activeSection ? activeSection.label : "Menu"}
              </span>
              {isOpen ? (
                <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
              ) : (
                <ChevronUp className="w-3.5 h-3.5 text-zinc-400" />
              )}
            </button>
          </>
        )}

        {!isHomepage && (
          <>
            <div className="h-4 w-[1px] bg-zinc-200 dark:bg-zinc-800 mx-1" />

            {/* Menu Button that opens palette on other pages */}
            <button
              onClick={handleOpenPalette}
              className="flex items-center gap-1 px-3 py-1.5 active:scale-95 transition-all cursor-pointer"
            >
              <Compass className="w-4 h-4 text-zinc-500" />
              <span className="text-[12px] font-semibold text-zinc-600 dark:text-zinc-400">Menu</span>
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default FloatingCommandButton;
