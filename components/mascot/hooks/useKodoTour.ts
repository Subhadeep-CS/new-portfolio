import { useEffect, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useKodoStore } from '../store/useKodoStore';
import { TOUR_STEPS, scrollToSection } from '../tourData';
import { useAudio } from '../../Audio/AudioContext';

export function useKodoTour() {
  const pathname = usePathname();
  const router = useRouter();
  const { playSound } = useAudio();
  const {
    isTourActive,
    tourStep,
    startTour,
    endTour,
    nextTourStep,
    prevTourStep,
    setSpeech,
    setState,
    activeSpotlightId,
    setActiveSpotlightId,
  } = useKodoStore();

  const currentStep = TOUR_STEPS[tourStep];

  // Start tour handler (handles page navigation if needed)
  const handleStartTour = useCallback(
    (stepIndex = 0) => {
      playSound('open');
      if (pathname !== '/') {
        router.push('/');
        setTimeout(() => {
          startTour(stepIndex);
        }, 500);
      } else {
        startTour(stepIndex);
      }
    },
    [pathname, router, playSound, startTour]
  );

  // Next step handler
  const handleNextStep = useCallback(() => {
    if (tourStep >= TOUR_STEPS.length - 1) {
      // Completed the tour!
      playSound('success');
      endTour();
      setState('EXCITED');
      setSpeech(
        "🎉 Woohoo! That completes the tour!\n\nFeel free to explore on your own, or click on me anytime if you want another tour. Enjoy your stay! 🐼✨",
        [
          {
            label: "🚀 Back to top",
            action: () => {
              scrollToSection('profile', -80);
              setSpeech(null);
            },
          },
          {
            label: "✨ Done exploring",
            action: () => setSpeech(null),
          },
        ]
      );
      setTimeout(() => {
        if (!useKodoStore.getState().isTourActive) {
          setState('IDLE');
        }
      }, 3000);
    } else {
      playSound('scroll');
      nextTourStep();
    }
  }, [tourStep, playSound, endTour, setState, setSpeech, nextTourStep]);

  // Previous step handler
  const handlePrevStep = useCallback(() => {
    if (tourStep > 0) {
      playSound('scroll');
      prevTourStep();
    }
  }, [tourStep, playSound, prevTourStep]);

  // Dismiss / End tour handler
  const handleEndTour = useCallback(() => {
    endTour();
    setSpeech("Tour paused! Feel free to explore freely. Click me whenever you want a tour! 🐼");
    setTimeout(() => {
      if (!useKodoStore.getState().isTourActive) {
        setSpeech(null);
      }
    }, 4000);
  }, [endTour, setSpeech]);

  // Effect to scroll and highlight when tourStep changes
  useEffect(() => {
    if (!isTourActive || !currentStep) return;

    // Small delay to ensure smooth transition
    const timer = setTimeout(() => {
      scrollToSection(currentStep.targetId, -80);
      setActiveSpotlightId(currentStep.targetId);
    }, 150);

    return () => clearTimeout(timer);
  }, [isTourActive, tourStep, currentStep, setActiveSpotlightId]);



  // Keyboard navigation during tour
  useEffect(() => {
    if (!isTourActive) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't capture when typing in inputs/textareas
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        e.preventDefault();
        handleNextStep();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevStep();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        handleEndTour();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTourActive, handleNextStep, handlePrevStep, handleEndTour]);

  return {
    isTourActive,
    tourStep,
    totalSteps: TOUR_STEPS.length,
    currentStep,
    handleStartTour,
    handleNextStep,
    handlePrevStep,
    handleEndTour,
  };
}
