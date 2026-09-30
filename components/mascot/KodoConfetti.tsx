'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useKodoStore } from './store/useKodoStore';

interface Particle {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  rotation: number;
  scale: number;
  color: string;
  shape: 'rect' | 'circle' | 'ribbon';
}

const COLORS = [
  '#ec4899', // Hot Pink
  '#3b82f6', // Bright Blue
  '#8b5cf6', // Electric Violet
  '#06b6d4', // Neon Cyan
  '#f59e0b', // Amber Gold
  '#10b981', // Emerald
  '#f43f5e', // Rose
];

export default function KodoConfetti() {
  const { confettiCount } = useKodoStore();
  const [activeBursts, setActiveBursts] = useState<{ id: number; particles: Particle[] }[]>([]);

  useEffect(() => {
    if (confettiCount === 0) return;

    const burstId = Date.now();
    const newParticles: Particle[] = Array.from({ length: 35 }, (_, i) => {
      const angle = (Math.PI / 180) * (30 + Math.random() * 120); // Shoot upward and outward
      const distance = 250 + Math.random() * 450;
      return {
        id: i,
        x: 0,
        y: 0,
        targetX: Math.cos(angle) * distance * (Math.random() > 0.5 ? 1 : 1.3),
        targetY: -Math.sin(angle) * distance,
        rotation: (Math.random() - 0.5) * 720,
        scale: 0.6 + Math.random() * 0.8,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        shape: ['rect', 'circle', 'ribbon'][Math.floor(Math.random() * 3)] as any,
      };
    });

    // Add burst
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveBursts((prev) => [...prev, { id: burstId, particles: newParticles }]);

    // Remove burst after 2.5s
    const timer = setTimeout(() => {
      setActiveBursts((prev) => prev.filter((b) => b.id !== burstId));
    }, 2500);

    return () => clearTimeout(timer);
  }, [confettiCount]);

  if (activeBursts.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {activeBursts.map((burst) => (
        <div key={burst.id} className="absolute bottom-16 left-12 sm:bottom-20 sm:left-24">
          {burst.particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{
                x: 0,
                y: 0,
                opacity: 1,
                rotate: 0,
                scale: 0,
              }}
              animate={{
                x: p.targetX,
                y: [0, p.targetY, p.targetY + 180],
                opacity: [1, 1, 0],
                rotate: p.rotation,
                scale: [0, p.scale, p.scale * 0.8],
              }}
              transition={{
                duration: 2.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{
                position: 'absolute',
                backgroundColor: p.color,
                borderRadius: p.shape === 'circle' ? '50%' : p.shape === 'ribbon' ? '2px' : '3px',
                width: p.shape === 'ribbon' ? 6 : p.shape === 'circle' ? 10 : 12,
                height: p.shape === 'ribbon' ? 18 : p.shape === 'circle' ? 10 : 8,
                boxShadow: `0 0 10px ${p.color}80`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
