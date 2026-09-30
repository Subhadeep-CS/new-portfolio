'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useKodoStore } from './store/useKodoStore';
import KodoSpeechBubble from './KodoSpeechBubble';
import KodoTourSpotlight from './KodoTourSpotlight';
import KodoConfetti from './KodoConfetti';
import { useKodoInteraction } from './hooks/useKodoInteraction';
import { useKodoTour } from './hooks/useKodoTour';
import { useAudio } from '../Audio/AudioContext';

// Lazy load the 3D scene to prevent blocking main thread on load
const KodoScene = dynamic(() => import('./KodoScene'), { 
  ssr: false,
  loading: () => null // Silent load
});

export default function KodoWidget() {
  const [mounted, setMounted] = useState(false);
  const { setSpeech, hasSeenGreeting, setHasSeenGreeting, isTourActive, tourStep, triggerSpin } = useKodoStore();
  const { playSound } = useAudio();
  const {
    totalSteps,
    currentStep,
    handleStartTour,
    handleNextStep,
    handleEndTour,
  } = useKodoTour();
  
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
          "👋 Hey! I'm Kodo.\n\nI'm your 3D guide around Subhadeep's portfolio. Want to explore together?",
          [
            { 
              label: "🗺️ Want a tour? Show me around!", 
              action: () => handleStartTour() 
            },
            { 
              label: "🌀 Do a flip first!", 
              action: () => {
                playSound('barrelRoll');
                triggerSpin();
                setSpeech("Wheee! 🐼🌪️ Now let's explore!", [
                  { label: "🚀 Start the Tour!", action: () => handleStartTour() },
                  { label: "I'll explore myself", action: () => setSpeech(null) }
                ]);
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
  }, [hasSeenGreeting, setHasSeenGreeting, setSpeech, handleStartTour, triggerSpin, playSound]);

  // Don't render anything on server
  if (!mounted) return null;

  // Check prefers-reduced-motion, if true, we can just hide it or render a static image
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  if (prefersReducedMotion) return null;

  return (
    <>
      {/* Dynamic Confetti Cannon */}
      <KodoConfetti />

      {/* Dynamic Theatrical Spotlight HUD Frame over selected section */}
      <KodoTourSpotlight />

      {/* Floating Kodo Mascot Widget */}
      <div 
        className="fixed bottom-6 left-4 sm:bottom-10 sm:left-8 z-[40] pointer-events-none flex flex-col items-center justify-end"
      >
        <div className="relative">
          <KodoSpeechBubble />
          
          {/* The interactive area for Kodo (pointer-events-auto so we can hover/click) */}
          <div 
            className="pointer-events-auto cursor-pointer transition-transform duration-300 hover:scale-110"
            onPointerEnter={() => {
              // Hover excitement
              if (!isTourActive) {
                useKodoStore.getState().setState('EXCITED');
                if (!useKodoStore.getState().speechText) {
                  setSpeech("Hehe! That tickles! 🐼");
                }
              }
            }}
            onPointerLeave={() => {
              // Stop being excited when mouse leaves (if not guiding a tour)
              if (!isTourActive) {
                useKodoStore.getState().setState('IDLE');
              }
            }}
            onClick={() => {
              if (isTourActive) {
                setSpeech(`We're on stop ${tourStep + 1} of ${totalSteps}: ${currentStep?.title || 'Tour'}! 🐼`, [
                  {
                    label: tourStep === totalSteps - 1 ? "🎉 Finish Tour" : "Next Stop ➡️",
                    action: () => handleNextStep()
                  },
                  {
                    label: "🌀 Do a flip, Kodo!",
                    action: () => {
                      playSound('barrelRoll');
                      triggerSpin();
                    }
                  },
                  {
                    label: "End Tour ✕",
                    action: () => handleEndTour()
                  }
                ]);
                return;
              }

              // Poke interaction with crazy options
              setSpeech("Woah! 🐼 Hey there! How can I help you?", [
                { 
                  label: "🗺️ Want a tour? Show me around!", 
                  action: () => handleStartTour() 
                },
                { 
                  label: "🌀 Do a flip, Kodo!", 
                  action: () => {
                    playSound('barrelRoll');
                    triggerSpin();
                    setSpeech("Wheee! 🐼🌪️ I can do backflips too!", [
                      { label: "🗺️ Take a Website Tour", action: () => handleStartTour() },
                      { label: "Tell me a joke! 🐛", action: () => setSpeech("Why do programmers prefer dark mode?\n\nBecause light attracts bugs! 🐛") }
                    ]);
                  } 
                },
                { 
                  label: "Tell me a joke! 🐛", 
                  action: () => setSpeech("Why do programmers prefer dark mode?\n\nBecause light attracts bugs! 🐛") 
                },
                { 
                  label: "Who are you? 🐼", 
                  action: () => setSpeech("I'm Kodo, Subhadeep's 3D guide! 🐼✨ Click 'Want a tour?' anytime to explore the site!") 
                },
                { 
                  label: "What's his core superpower? ⚡", 
                  action: () => setSpeech("React, Next.js, and WebRTC! He builds high-performance real-time applications. 🚀") 
                }
              ]);
              useKodoStore.getState().setState('EXCITED');
              setTimeout(() => {
                if (!useKodoStore.getState().isTourActive) {
                  useKodoStore.getState().setState('IDLE');
                }
              }, 2000);
            }}
          >
            <KodoScene />
          </div>
        </div>
      </div>
    </>
  );
}
