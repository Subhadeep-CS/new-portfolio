"use client";

import { motion } from "framer-motion";
import React from "react";

interface PageHeaderProps {
  title: React.ReactNode;
  subtitle: string;
  backgroundText: string;
  accentColor?: string;
}

const PageHeader = ({ title, subtitle, backgroundText, accentColor = "text-blue-500" }: PageHeaderProps) => {
  return (
    <div className="border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 flex flex-col justify-center px-4 py-20 overflow-hidden relative">
      <div className="container border-x border-zinc-100 dark:border-zinc-800/50 flex flex-col justify-center px-4 py-8 relative z-10">
        <div className="max-w-3xl pl-4">
          <h1 className="text-4xl sm:text-6xl font-black text-zinc-900 dark:text-white mb-6 leading-[1.1] tracking-tighter">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Background Decorative Text with Glow Interaction */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 select-none pointer-events-auto">
        <motion.span
          initial={{ opacity: 0.03 }}
          whileHover={{
            opacity: 0.12,
            color: "var(--glow-color, #3b82f6)",
            textShadow: "0 0 60px rgba(59, 130, 246, 0.4)",
            scale: 1.02,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-[20vw] font-black whitespace-nowrap cursor-default transition-colors duration-500 dark:opacity-[0.05]"
          style={{ 
            lineHeight: 1
          } as any}
        >
          {backgroundText}
        </motion.span>
      </div>
    </div>
  );
};

export default PageHeader;
