'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useKodoStore } from './store/useKodoStore';
import { TOUR_STEPS, TourStep, TourReaction } from './tourData';
import { RotateCw, ArrowRight, CheckCircle2, PartyPopper } from 'lucide-react';
import { useAudio } from '../Audio/AudioContext';
import { useKodoTour } from './hooks/useKodoTour';

interface Rect {
  top: number;
  left: number;
  width: number;
  height: number;
}

interface FloatingStamp {
  id: number;
  emoji: string;
  label: string;
  x: number;
  y: number;
}

export default function KodoTourSpotlight() {
  const {
    isTourActive,
    tourStep,
    triggerSpin,
    triggerWave,
    triggerConfetti,
    setSpeech,
  } = useKodoStore();
  const { handleNextStep } = useKodoTour();
  const { playSound } = useAudio();
  const [rect, setRect] = useState<Rect | null>(null);
  const [stamps, setStamps] = useState<FloatingStamp[]>([]);

  const currentStep: TourStep | undefined = TOUR_STEPS[tourStep];

  // Track the target section smoothly without drawing any border around it
  useEffect(() => {
    if (!isTourActive || !currentStep) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setRect(null);
      return;
    }

    const updateRect = () => {
      const el = document.getElementById(currentStep.targetId);
      if (el) {
        const clientRect = el.getBoundingClientRect();
        setRect({
          top: clientRect.top + window.scrollY,
          left: clientRect.left + window.scrollX,
          width: clientRect.width,
          height: clientRect.height,
        });
      }
    };

    updateRect();

    window.addEventListener('resize', updateRect);
    window.addEventListener('scroll', updateRect, { passive: true });
    const interval = setInterval(updateRect, 500);

    return () => {
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('scroll', updateRect);
      clearInterval(interval);
    };
  }, [isTourActive, tourStep, currentStep]);

  // Handle stamping an interactive reaction
  const handleReactionClick = (reaction: TourReaction, e: React.MouseEvent) => {
    playSound('success');
    triggerWave();

    // Floating stamp animation position
    const rectTarget = e.currentTarget.getBoundingClientRect();
    const newStamp: FloatingStamp = {
      id: Date.now() + Math.random(),
      emoji: reaction.emoji,
      label: reaction.label,
      x: rectTarget.left + (Math.random() - 0.5) * 30,
      y: rectTarget.top - 10,
    };

    setStamps((prev) => [...prev, newStamp]);

    // Kodo speaks the reaction shout
    setSpeech(`${reaction.emoji} ${reaction.shout}`);

    setTimeout(() => {
      setStamps((prev) => prev.filter((s) => s.id !== newStamp.id));
    }, 1800);
  };

  if (!isTourActive || !rect || !currentStep) return null;

  return (
    <>
      {/* 1. SUPER COOL FLOATING DOCK PINNED CLEANLY ABOVE SECTION (Zero rigid borders or outlines!) */}
      <motion.div
        initial={{ opacity: 0, y: -8, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
        style={{
          top: Math.max(12, rect.top - 52),
          left: rect.left + 12,
        }}
        className="absolute pointer-events-auto z-40 max-w-[calc(100vw-24px)]"
      >
        <div className="flex items-center flex-wrap gap-1.5 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl p-1.5 px-2.5 rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 shadow-xl shadow-black/10">
          
          {/* Tour Step Pill */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold border border-blue-500/20">
            <span className="text-xs">🐼</span>
            <span className="tracking-wide uppercase text-[10px]">
              {tourStep + 1}/{TOUR_STEPS.length}
            </span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span className="text-zinc-800 dark:text-zinc-200 font-semibold truncate max-w-[90px] sm:max-w-[140px]">
              {currentStep.badge}
            </span>
          </div>

          <div className="hidden sm:block h-3.5 w-[1px] bg-zinc-200 dark:bg-zinc-800" />

          {/* Interactive Reaction Stamps */}
          <div className="flex items-center gap-1">
            {currentStep.reactions.map((reaction, idx) => (
              <button
                key={idx}
                onClick={(e) => handleReactionClick(reaction, e)}
                className="flex items-center gap-1 px-2 py-1 rounded-xl bg-zinc-100/80 dark:bg-zinc-900/80 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium transition-all duration-200 active:scale-90 cursor-pointer border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm"
                title={reaction.shout}
              >
                <span className="text-xs">{reaction.emoji}</span>
                <span className="text-[10px] hidden md:inline font-semibold">{reaction.label}</span>
              </button>
            ))}
          </div>

          <div className="h-3.5 w-[1px] bg-zinc-200 dark:bg-zinc-800" />

          {/* Party Confetti Cannon Button */}
          <button
            onClick={() => {
              playSound('open');
              triggerConfetti();
              triggerSpin();
              setSpeech("🎉 PARTY TIME! Let the stardust fly! 🐼✨");
            }}
            className="flex items-center gap-1 p-1 px-2 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 text-pink-600 dark:text-pink-400 border border-pink-500/20 text-xs font-semibold transition-all active:scale-90 cursor-pointer"
            title="Launch Confetti!"
          >
            <PartyPopper size={12} className="text-pink-500 animate-bounce" />
            <span className="text-[10px] hidden sm:inline">Party</span>
          </button>

          {/* Do a flip button */}
          <button
            onClick={() => {
              playSound('barrelRoll');
              triggerSpin();
            }}
            className="p-1 px-1.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-500/20 transition-all active:scale-90 cursor-pointer"
            title="Make Kodo do a flip!"
          >
            <RotateCw size={12} className="text-purple-500" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNextStep}
            className="flex items-center gap-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-2.5 py-1 rounded-xl text-xs font-bold transition-all shadow-md shadow-blue-500/20 active:scale-95 cursor-pointer ml-auto"
          >
            <span>{tourStep === TOUR_STEPS.length - 1 ? 'Finish' : 'Next'}</span>
            {tourStep === TOUR_STEPS.length - 1 ? <CheckCircle2 size={12} /> : <ArrowRight size={12} />}
          </button>
        </div>
      </motion.div>

      {/* 2. FLOATING REACTION STAMPS (Figma/Twitch stream reactions) */}
      <div className="fixed inset-0 pointer-events-none z-[110]">
        <AnimatePresence>
          {stamps.map((stamp) => (
            <motion.div
              key={stamp.id}
              initial={{ opacity: 1, scale: 0.5, x: stamp.x, y: stamp.y }}
              animate={{
                opacity: [1, 1, 0],
                scale: [0.5, 1.25, 1.05],
                y: stamp.y - 100,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
              className="absolute flex items-center gap-1.5 bg-zinc-950/90 text-white backdrop-blur-md px-2.5 py-1 rounded-full border border-yellow-500/40 shadow-xl shadow-black/30 font-bold text-xs"
            >
              <span className="text-sm">{stamp.emoji}</span>
              <span className="text-yellow-300 text-[11px]">{stamp.label}</span>
              <span className="text-[10px] text-white/70">+1</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
