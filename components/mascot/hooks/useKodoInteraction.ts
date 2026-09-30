import { useEffect } from 'react';
import { useKodoStore } from '../store/useKodoStore';

export function useKodoInteraction() {
  const { setState, setSpeech } = useKodoStore();

  useEffect(() => {
    // Only track hover interactions on devices that support hover
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!canHover) return;

    let hoverTimer: NodeJS.Timeout | null = null;
    let isHoveringTarget = false;

    const handleMouseOver = (e: MouseEvent) => {
      // Don't trigger hover reactions during an active guided tour
      if (useKodoStore.getState().isTourActive) return;

      const target = e.target as HTMLElement;
      
      // Look for data-kodo attribute traversing up the tree
      const kodoElement = target.closest('[data-kodo]') as HTMLElement;
      
      if (kodoElement) {
        if (!isHoveringTarget) {
          isHoveringTarget = true;
          const kodoText = kodoElement.getAttribute('data-kodo');
          
          if (kodoText) {
            // Slight delay before reacting so it doesn't trigger on quick pass-overs
            hoverTimer = setTimeout(() => {
              setState('HOVERING');
              setSpeech(kodoText);
            }, 300);
          }
        }
      } else if (isHoveringTarget) {
        // User left the kodo target
        isHoveringTarget = false;
        if (hoverTimer) clearTimeout(hoverTimer);
        setState('IDLE');
        // We do NOT clear the speech bubble immediately to let the user read it
        // The speech bubble has its own auto-hide timer
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      if (hoverTimer) clearTimeout(hoverTimer);
    };
  }, [setState, setSpeech]);
}
