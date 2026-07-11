"use client";

export interface CustomThemeColors {
  bg: string;
  accent: string;
  border: string;
}

export const DEFAULT_CUSTOM_COLORS: CustomThemeColors = {
  bg: "#0f091c",
  accent: "#ff007f",
  border: "#251b3d",
};

export const PRESETS = [
  {
    name: "Cyber Coral",
    colors: { bg: "#0f091c", accent: "#ff007f", border: "#251b3d" }
  },
  {
    name: "Neon Tangerine",
    colors: { bg: "#150e06", accent: "#ff7b00", border: "#321d09" }
  },
  {
    name: "Oceanic Wave",
    colors: { bg: "#04151f", accent: "#00b4d8", border: "#0b2b3c" }
  },
  {
    name: "Forest Camp",
    colors: { bg: "#06130b", accent: "#38b000", border: "#102a18" }
  },
  {
    name: "Velvet Plum",
    colors: { bg: "#14051a", accent: "#b5179e", border: "#2b0a38" }
  }
];

export const applyCustomTheme = (colors: CustomThemeColors) => {
  if (typeof document === "undefined") return;
  const root = document.documentElement;

  // Set main theme colors
  root.style.setProperty("--background", colors.bg);
  root.style.setProperty("--foreground", "#eeddf5");
  root.style.setProperty("--primary", colors.accent);
  root.style.setProperty("--border", colors.border);

  // Generate card background: slightly lighter than bg
  const cardBg = lighten(colors.bg, 6);
  root.style.setProperty("--card", cardBg);
  root.style.setProperty("--card-foreground", "#eeddf5");
  root.style.setProperty("--popover", cardBg);
  root.style.setProperty("--popover-foreground", "#eeddf5");

  // Overrides for Tailwind white/zinc
  root.style.setProperty("--color-white", cardBg);
  root.style.setProperty("--color-zinc-50", "#eeddf5");
  root.style.setProperty("--color-zinc-100", "#e1cceb");
  root.style.setProperty("--color-zinc-200", colors.border);
  root.style.setProperty("--color-zinc-300", hexToRgba(colors.border, 0.8));
  root.style.setProperty("--color-zinc-400", "#b29cb8");
  root.style.setProperty("--color-zinc-500", "#8d7994");
  root.style.setProperty("--color-zinc-600", "#695570");
  root.style.setProperty("--color-zinc-700", lighten(colors.border, 10));
  root.style.setProperty("--color-zinc-800", colors.border);
  root.style.setProperty("--color-zinc-900", cardBg);
  root.style.setProperty("--color-zinc-950", colors.bg);

  // Map blue active classes to the custom accent color!
  root.style.setProperty("--color-blue-50", hexToRgba(colors.accent, 0.1));
  root.style.setProperty("--color-blue-100", hexToRgba(colors.accent, 0.2));
  root.style.setProperty("--color-blue-400", lighten(colors.accent, 10));
  root.style.setProperty("--color-blue-500", colors.accent);
  root.style.setProperty("--color-blue-600", lighten(colors.accent, -10));
  root.style.setProperty("--color-blue-900", hexToRgba(colors.accent, 0.3));
  root.style.setProperty("--color-blue-950", hexToRgba(colors.accent, 0.15));
};

export const clearCustomThemeStyles = () => {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  
  // Remove all overridden properties
  const properties = [
    "--background", "--foreground", "--primary", "--border", 
    "--card", "--card-foreground", "--popover", "--popover-foreground",
    "--color-white", "--color-zinc-50", "--color-zinc-100", "--color-zinc-200",
    "--color-zinc-300", "--color-zinc-400", "--color-zinc-500", "--color-zinc-600",
    "--color-zinc-700", "--color-zinc-800", "--color-zinc-900", "--color-zinc-950",
    "--color-blue-50", "--color-blue-100", "--color-blue-400", "--color-blue-500",
    "--color-blue-600", "--color-blue-900", "--color-blue-950"
  ];
  
  properties.forEach(prop => root.style.removeProperty(prop));
};

// Helper function to lighten a hex color
function lighten(hex: string, percent: number): string {
  let cleanHex = hex.replace("#", "");
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split("").map(c => c + c).join("");
  }
  
  const num = parseInt(cleanHex, 16);
  let r = (num >> 16) + Math.round(2.55 * percent);
  let g = ((num >> 8) & 0x00ff) + Math.round(2.55 * percent);
  let b = (num & 0x0000ff) + Math.round(2.55 * percent);

  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));

  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Helper function to parse hex to rgba
function hexToRgba(hex: string, alpha: number): string {
  let cleanHex = hex.replace("#", "");
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split("").map(c => c + c).join("");
  }
  const r = parseInt(cleanHex.slice(0, 2), 16);
  const g = parseInt(cleanHex.slice(2, 4), 16);
  const b = parseInt(cleanHex.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
