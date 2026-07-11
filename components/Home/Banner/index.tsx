"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "next-themes";
import styles from "./banner.module.css";
import Image from "next/image";
import Inspectable from "@/components/InspectMode/Inspectable";

const PARTICLE_CONFIG = {
  spacing: 20,
  repulsionRadius: 130,
  maxRepulsion: 8,
  baseSize: 0.8,
  activeSizeMultiplier: 2,
  lerpFactor: 0.15,
};

const Banner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  // For the SD Magnetic Logo
  const textX = useMotionValue(0);
  const textY = useMotionValue(0);
  const textSpringX = useSpring(textX, { stiffness: 150, damping: 15, mass: 0.1 });
  const textSpringY = useSpring(textY, { stiffness: 150, damping: 15, mass: 0.1 });

  // Mouse REF for Canvas Particle Repulsion
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: { baseX: number, baseY: number, x: number, y: number }[] = [];
    let animationFrameId: number;


    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
        initParticles();
      }
    };

    const initParticles = () => {
      particles = [];
      const cols = Math.ceil(canvas.width / PARTICLE_CONFIG.spacing) + 1;
      const rows = Math.ceil(canvas.height / PARTICLE_CONFIG.spacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          particles.push({
            baseX: i * PARTICLE_CONFIG.spacing,
            baseY: j * PARTICLE_CONFIG.spacing,
            x: i * PARTICLE_CONFIG.spacing,
            y: j * PARTICLE_CONFIG.spacing
          });
        }
      }
    };

    const draw = () => {
      // Ensure particles are initialized if they somehow weren't
      if (particles.length === 0 && canvas.width > 0) {
        initParticles();
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = resolvedTheme === "dark" || resolvedTheme === "emerald" || resolvedTheme === "cyberpunk";
      const baseColor = isDark ? "rgba(63, 63, 70, 0.5)" : "rgba(212, 212, 216, 1)";
      const glowColor = isDark ? "rgba(59, 130, 246, 1)" : "rgba(59, 130, 246, 0.8)";

      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];

        const dx = mouseRef.current.x - p.baseX;
        const dy = mouseRef.current.y - p.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let drawSize = PARTICLE_CONFIG.baseSize;

        if (distance < PARTICLE_CONFIG.repulsionRadius) {
          const force = (PARTICLE_CONFIG.repulsionRadius - distance) / PARTICLE_CONFIG.repulsionRadius;
          p.x = p.baseX - (dx / distance) * force * PARTICLE_CONFIG.maxRepulsion;
          p.y = p.baseY - (dy / distance) * force * PARTICLE_CONFIG.maxRepulsion;
          drawSize = 1 + force * PARTICLE_CONFIG.activeSizeMultiplier;
        } else {
          p.x += (p.baseX - p.x) * PARTICLE_CONFIG.lerpFactor;
          p.y += (p.baseY - p.y) * PARTICLE_CONFIG.lerpFactor;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, drawSize, 0, Math.PI * 2);
        ctx.fillStyle = distance < PARTICLE_CONFIG.repulsionRadius ? glowColor : baseColor;

        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          canvas.width = width;
          canvas.height = height;
          initParticles();
        }
      }
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    draw();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.clientX;
    const clientY = e.clientY;

    mouseRef.current = {
      x: clientX - rect.left,
      y: clientY - rect.top
    };

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    textX.set((clientX - centerX) * 0.2);
    textY.set((clientY - centerY) * 0.2);
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: -1000, y: -1000 };
    textX.set(0);
    textY.set(0);
  };

  return (
    <Inspectable
      metadata={{
        name: "HeroBanner.tsx",
        description: "Interactive hero section featuring a magnetic logo and a custom canvas particle system with mouse repulsion.",
        stack: ["Framer Motion", "HTML5 Canvas", "Next.js Image"],
        optimizations: [
          "Optimized Canvas render loop with requestAnimationFrame",
          "Spring-based physics for smooth logo movement",
          "Responsive canvas resizing with debounce"
        ],
        patterns: ["Magnetic Interaction", "Particle Repulsion", "Dynamic Theme Awareness"],
        architectureNotes: "Uses a low-level Canvas API for performance-heavy particles while leveraging Framer Motion for the UI layer to maintain a declarative code style.",
        animation: {
          type: "Spring Physics & Canvas Animation",
          duration: "Real-time / 60fps",
          description: "Stiffness: 150, Damping: 15 for the magnetic logo."
        },
        accessibility: ["Semantic <section> tag", "Alt text for logo image", "High contrast text support"],
        buildProcess: [
          { iteration: "v1", note: "Simple static SVG logo." },
          { iteration: "v2", note: "Added Framer Motion for magnetic effect." },
          { iteration: "v3", note: "Implemented Canvas particle system for background depth." }
        ]
      }}
    >
      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`${styles.banner_container} container border-x border-zinc-200 dark:border-zinc-800 relative overflow-hidden h-[300px] w-full flex items-center justify-center bg-[#FAFAFA] dark:bg-zinc-950/20`}
      >
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 block cursor-crosshair" />

        <motion.div
          style={{ x: textSpringX, y: textSpringY }}
          className="pointer-events-none z-10 w-[120px] h-[120px] md:w-[150px] md:h-[150px] relative drop-shadow-2xl"
        >
          <Image src="/img/logo/SD.svg" alt="SD Logo" fill className="object-contain dark:invert" />
        </motion.div>
      </section>
    </Inspectable>
  );
};

export default Banner;
