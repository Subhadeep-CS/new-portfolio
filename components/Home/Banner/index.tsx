"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "next-themes";
import styles from "./banner.module.css";
import Image from "next/image";

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

    // Particle Config
    const spacing = 22;
    const repulsionRadius = 130;
    const maxRepulsion = 16;

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
      const cols = Math.ceil(canvas.width / spacing) + 1;
      const rows = Math.ceil(canvas.height / spacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          particles.push({
            baseX: i * spacing,
            baseY: j * spacing,
            x: i * spacing,
            y: j * spacing
          });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = resolvedTheme === "dark";
      const baseColor = isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)";
      const glowColor = isDark ? "rgba(16, 185, 129, 1)" : "rgba(16, 185, 129, 0.8)";

      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];

        const dx = mouseRef.current.x - p.baseX;
        const dy = mouseRef.current.y - p.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let drawSize = 1;

        if (distance < repulsionRadius) {
          const force = (repulsionRadius - distance) / repulsionRadius;
          p.x = p.baseX - (dx / distance) * force * maxRepulsion;
          p.y = p.baseY - (dy / distance) * force * maxRepulsion;
          drawSize = 1 + force * 2.5;
        } else {
          p.x += (p.baseX - p.x) * 0.15;
          p.y += (p.baseY - p.y) * 0.15;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, drawSize, 0, Math.PI * 2);
        ctx.fillStyle = distance < repulsionRadius ? glowColor : baseColor;

        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);

    // Give DOM a tick to establish width
    const to = setTimeout(() => {
      resize();
      draw();
    }, 100);

    return () => {
      clearTimeout(to);
      window.removeEventListener("resize", resize);
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
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${styles.banner_container} container border-x relative overflow-hidden h-[300px] w-full flex items-center justify-center bg-[#FAFAFA] dark:bg-zinc-950/20`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 block cursor-crosshair" />

      <motion.div
        style={{ x: textSpringX, y: textSpringY }}
        className="pointer-events-none z-10 w-[120px] h-[120px] md:w-[150px] md:h-[150px] relative drop-shadow-2xl"
      >
        <Image src="/img/logo/SD.svg" alt="SD Logo" fill className="object-contain" />
      </motion.div>
    </section>
  );
};

export default Banner;
