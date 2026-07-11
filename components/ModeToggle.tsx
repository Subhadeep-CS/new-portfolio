"use client";

import React, { useState, useEffect, useRef, useDeferredValue } from "react";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Gem, Zap, Check, Sliders, RotateCcw, Palette, ChevronLeft } from "lucide-react";
import { useAudio } from "@/components/Audio/AudioContext";
import { 
  CustomThemeColors, 
  DEFAULT_CUSTOM_COLORS, 
  applyCustomTheme, 
  clearCustomThemeStyles, 
  PRESETS 
} from "@/utils/customThemeHelper";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const { playSound } = useAudio();
  const [isOpen, setIsOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [customColors, setCustomColors] = useState<CustomThemeColors>(DEFAULT_CUSTOM_COLORS);
  
  // Defer colors state to prevent input lag on color picker drag
  const deferredCustomColors = useDeferredValue(customColors);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Load custom colors from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("custom_theme_colors");
    if (saved) {
      try {
        setCustomColors(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved colors", e);
      }
    }

    // Close dropdown on click outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsCustomizerOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Monitor theme changes to apply/clear custom variables
  useEffect(() => {
    if (!mounted) return;
    if (theme === "custom") {
      applyCustomTheme(deferredCustomColors);
      localStorage.setItem("custom_theme_colors", JSON.stringify(deferredCustomColors));
    } else {
      clearCustomThemeStyles();
    }
  }, [theme, deferredCustomColors, mounted]);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800/50 animate-pulse border border-zinc-200 dark:border-zinc-800" />
    );
  }

  const activeThemeObj = theme === "custom" 
    ? { id: "custom", label: "Custom Theme", icon: Sliders }
    : (theme === "emerald" 
        ? { id: "emerald", label: "Emerald Gold", icon: Gem } 
        : (theme === "cyberpunk"
            ? { id: "cyberpunk", label: "Cyberpunk", icon: Zap }
            : (theme === "light" 
                ? { id: "light", label: "Light Mode", icon: Sun }
                : { id: "dark", label: "Dark Mode", icon: Moon })));

  const ActiveIcon = activeThemeObj.icon;

  const handleToggleClick = () => {
    playSound("click");
    setIsOpen(!isOpen);
    if (isOpen) {
      setIsCustomizerOpen(false);
    }
  };

  const selectTheme = (newTheme: string, e: React.MouseEvent) => {
    if (theme === newTheme && newTheme !== "custom") return;

    playSound("success");

    // Fallback for browsers that do not support view transitions
    if (
      typeof document === "undefined" ||
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(newTheme);
      if (newTheme !== "custom") {
        setIsOpen(false);
      }
      return;
    }

    const x = e.clientX;
    const y = e.clientY;

    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme);
        if (newTheme !== "custom") {
          setIsOpen(false);
          setIsCustomizerOpen(false);
        }
      });
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 700,
          easing: "cubic-bezier(0.85, 0, 0.15, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  const handleColorChange = (key: keyof CustomThemeColors, value: string) => {
    setCustomColors((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetColors = () => {
    playSound("click");
    setCustomColors(DEFAULT_CUSTOM_COLORS);
    localStorage.removeItem("custom_theme_colors");
  };

  const applyPreset = (presetColors: CustomThemeColors) => {
    playSound("success");
    setCustomColors(presetColors);
    localStorage.setItem("custom_theme_colors", JSON.stringify(presetColors));
  };

  const THEMES = [
    {
      id: "light",
      label: "Light Mode",
      icon: Sun,
      dotStyle: { bg: "#ffffff", fg: "#18181b", accent: "#3b82f6" },
    },
    {
      id: "dark",
      label: "Dark Mode",
      icon: Moon,
      dotStyle: { bg: "#09090b", fg: "#fafafa", accent: "#3b82f6" },
    },
    {
      id: "emerald",
      label: "Emerald Gold",
      icon: Gem,
      dotStyle: { bg: "#061d15", fg: "#f4eae0", accent: "#e5a93b" },
    },
    {
      id: "cyberpunk",
      label: "Cyberpunk",
      icon: Zap,
      dotStyle: { bg: "#0f091c", fg: "#eeddf5", accent: "#ff007f" },
    },
    {
      id: "custom",
      label: "Custom Theme",
      icon: Sliders,
      dotStyle: { bg: customColors.bg, fg: "#eeddf5", accent: customColors.accent },
      hasSettings: true
    }
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={handleToggleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center justify-center rounded-xl w-9 h-9 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors relative cursor-pointer group shadow-sm bg-background"
        title="Switch theme"
        aria-expanded={isOpen}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <ActiveIcon className="h-[1.1rem] w-[1.1rem] text-foreground transition-colors" />
        </motion.div>
        <span className="sr-only">Switch theme</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div className="absolute right-0 mt-2 flex items-start gap-3 z-[999]">
            {/* Customizer Slider Panel (Slides open to the left of dropdown) */}
            <AnimatePresence>
              {isCustomizerOpen && theme === "custom" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: 20 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="w-64 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-background/95 backdrop-blur-xl shadow-2xl p-4 flex flex-col gap-4 text-foreground"
                >
                  <div className="flex justify-between items-center border-b border-zinc-200/50 dark:border-zinc-800/50 pb-2">
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          playSound("click");
                          setIsCustomizerOpen(false);
                        }}
                        className="sm:hidden p-1 rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 text-zinc-400 hover:text-foreground cursor-pointer transition-colors"
                        title="Back to themes"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="text-xs font-bold flex items-center gap-1.5 uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                        <Palette className="w-3.5 h-3.5" /> Customizer
                      </span>
                    </div>
                    <button
                      onClick={handleResetColors}
                      className="p-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-400 hover:text-foreground cursor-pointer transition-colors"
                      title="Reset Theme"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Preset Buttons */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Presets</span>
                    <div className="grid grid-cols-5 gap-1.5">
                      {PRESETS.map((preset) => (
                        <button
                          key={preset.name}
                          onClick={() => applyPreset(preset.colors)}
                          className="h-6 w-full rounded-lg border border-zinc-200/40 relative overflow-hidden group cursor-pointer transition-all hover:scale-105 active:scale-95"
                          title={preset.name}
                        >
                          <span
                            className="absolute inset-y-0 left-0 w-[40%]"
                            style={{ backgroundColor: preset.colors.bg }}
                          />
                          <span
                            className="absolute inset-y-0 left-[40%] w-[20%]"
                            style={{ backgroundColor: preset.colors.border }}
                          />
                          <span
                            className="absolute inset-y-0 right-0 w-[40%]"
                            style={{ backgroundColor: preset.colors.accent }}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Color Pickers */}
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Manual Adjustment</span>
                    
                    {/* Background Picker */}
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-zinc-500">Background</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono font-semibold text-zinc-400">{customColors.bg}</span>
                        <input
                          type="color"
                          value={customColors.bg}
                          onChange={(e) => handleColorChange("bg", e.target.value)}
                          className="w-6 h-6 rounded-lg border border-zinc-250 cursor-pointer overflow-hidden bg-transparent [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-0"
                        />
                      </div>
                    </div>

                    {/* Accent Picker */}
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-zinc-500">Primary Accent</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono font-semibold text-zinc-400">{customColors.accent}</span>
                        <input
                          type="color"
                          value={customColors.accent}
                          onChange={(e) => handleColorChange("accent", e.target.value)}
                          className="w-6 h-6 rounded-lg border border-zinc-250 cursor-pointer overflow-hidden bg-transparent [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-0"
                        />
                      </div>
                    </div>

                    {/* Border Picker */}
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-zinc-500">Borders / Grid</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono font-semibold text-zinc-400">{customColors.border}</span>
                        <input
                          type="color"
                          value={customColors.border}
                          onChange={(e) => handleColorChange("border", e.target.value)}
                          className="w-6 h-6 rounded-lg border border-zinc-250 cursor-pointer overflow-hidden bg-transparent [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-0"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Standard Dropdown Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className={`w-52 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-background/95 backdrop-blur-xl shadow-2xl p-1.5 flex-col gap-0.5 ${
                isCustomizerOpen && theme === "custom" ? "hidden sm:flex" : "flex"
              }`}
            >
              <div className="px-2.5 py-1.5 text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                Select Theme
              </div>

              {THEMES.map((themeOption) => {
                const Icon = themeOption.icon;
                const isSelected = theme === themeOption.id;

                return (
                  <div
                    key={themeOption.id}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 border group/item relative ${
                      isSelected
                        ? "bg-zinc-100/80 dark:bg-zinc-900/85 border-zinc-200/50 dark:border-zinc-800/50 text-foreground"
                        : "bg-transparent border-transparent hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:border-zinc-100 dark:hover:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-foreground"
                    }`}
                  >
                    <button
                      onClick={(e) => selectTheme(themeOption.id, e)}
                      className="flex-1 flex items-center gap-2.5 text-left cursor-pointer py-1"
                    >
                      <Icon className={`h-4 w-4 shrink-0 transition-colors ${
                        isSelected
                          ? "text-blue-500 dark:text-blue-400"
                          : "text-zinc-400 group-hover/item:text-foreground"
                      }`} />
                      <span>{themeOption.label}</span>
                    </button>

                    <div className="flex items-center gap-2 select-none">
                      {/* Visual theme palette preview */}
                      <div className="flex -space-x-1.5 items-center group-hover/item:translate-x-[-2px] transition-transform">
                        <span
                          className="w-2.5 h-2.5 rounded-full border border-zinc-200/20 shadow-sm"
                          style={{ backgroundColor: themeOption.dotStyle.bg }}
                        />
                        <span
                          className="w-2.5 h-2.5 rounded-full border border-zinc-200/20 shadow-sm"
                          style={{ backgroundColor: themeOption.dotStyle.accent }}
                        />
                        <span
                          className="w-2.5 h-2.5 rounded-full border border-zinc-200/20 shadow-sm"
                          style={{ backgroundColor: themeOption.dotStyle.fg }}
                        />
                      </div>

                      {/* Settings/Configure button for custom theme */}
                      {themeOption.hasSettings && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            // Switch theme to custom first if they click settings
                            if (theme !== "custom") {
                              selectTheme("custom", e);
                            }
                            playSound("click");
                            setIsCustomizerOpen(!isCustomizerOpen);
                          }}
                          className={`p-1 rounded-lg border transition-colors cursor-pointer ${
                            isCustomizerOpen && theme === "custom"
                              ? "bg-zinc-200 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 text-foreground"
                              : "border-transparent hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 text-zinc-400 hover:text-foreground"
                          }`}
                          title="Customize colors"
                        >
                          <Sliders className="w-3.5 h-3.5" />
                        </button>
                      )}

                      {isSelected && !themeOption.hasSettings && (
                        <Check className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400 shrink-0" />
                      )}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
