"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  variant?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale";
  delay?: number;
  duration?: number;
  once?: boolean;
}

const variants: Record<string, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "slide-up": {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 75 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: -75 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
};

export const ScrollReveal = ({
  children,
  width = "100%",
  className,
  variant = "slide-up",
  delay = 0.2,
  duration = 0.5,
  once = true,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  return (
    <div ref={ref} style={{ width, position: "relative", overflow: "hidden" }} className={className}>
      <motion.div
        variants={variants[variant]}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};
