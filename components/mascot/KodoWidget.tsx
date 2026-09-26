'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useKodoStore } from './store/useKodoStore';
import KodoSpeechBubble from './KodoSpeechBubble';
import { useKodoInteraction } from './hooks/useKodoInteraction';
import { AnimatePresence } from 'framer-motion';

// Lazy load the 3D scene to prevent blocking main thread on load
const KodoScene = dynamic(() => import('./KodoScene'), { 
  ssr: false,
  loading: () => null // Silent load
});

export default function KodoWidget() {
  const [mounted, setMounted] = useState(false);
  const { setSpeech, hasSeenGreeting, setHasSeenGreeting } = useKodoStore();
  
  // Setup global interactions
  useKodoInteraction();

  // Handle first load greeting
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    
    // Check if device supports hover (not a mobile touch device)
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    
    if (canHover && !hasSeenGreeting) {
      // Delay greeting slightly so user can absorb the initial page load
      const timer = setTimeout(() => {
        setHasSeenGreeting(true);
        setSpeech(
          "👋 Hey! I'm Kodo.\n\nI'm your little guide around Subhadeep's portfolio.",
          [
            { 
              label: "Take a quick tour", 
              action: () => {
                // Tour logic to be implemented, for now just close and scroll slightly
                setSpeech("Awesome! Let's explore. Scroll down to see projects!", []);
                setTimeout(() => setSpeech(null), 3000);
                window.scrollBy({ top: 500, behavior: 'smooth' });
              } 
            },
            { 
              label: "I'll explore myself", 
              action: () => setSpeech(null) 
            }
          ]
        );
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [hasSeenGreeting, setHasSeenGreeting, setSpeech]);

  // Don't render anything on server
  if (!mounted) return null;

  // Check prefers-reduced-motion, if true, we can just hide it or render a static image
  // For now, we'll assume the 3D model is lightweight enough, but we should respect it
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  if (prefersReducedMotion) return null;

  return (
    <div 
      className="fixed bottom-6 left-4 sm:bottom-10 sm:left-8 z-[40] pointer-events-none flex flex-col items-center justify-end"
    >
      <div className="relative">
        <KodoSpeechBubble />
        
        {/* The interactive area for Kodo (pointer-events-auto so we can hover/click) */}
        <div 
          className="pointer-events-auto cursor-pointer transition-transform duration-300 hover:scale-110"
          onPointerEnter={() => {
            // Talking Tom hover excitement
            useKodoStore.getState().setState('EXCITED');
            if (!useKodoStore.getState().speechText) {
              setSpeech("Hehe! That tickles! 🐼");
            }
          }}
          onPointerLeave={() => {
            // Stop being excited when mouse leaves
            useKodoStore.getState().setState('IDLE');
          }}
          onClick={() => {
            // Poke interaction
            setSpeech("Woah! 🐼", [
              { label: "Tell me a joke!", action: () => setSpeech("Why do programmers prefer dark mode?\n\nBecause light attracts bugs! 🐛") },
              { label: "Who are you?", action: () => setSpeech("I'm Kodo, Subhadeep's portfolio guide! 🐼✨") }
            ]);
            useKodoStore.getState().setState('EXCITED');
            setTimeout(() => useKodoStore.getState().setState('IDLE'), 2000);
          }}
        >
          <KodoScene />
        </div>
      </div>
    </div>
  );
}
