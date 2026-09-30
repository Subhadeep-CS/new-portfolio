import { create } from 'zustand';
import { TOUR_STEPS } from '../tourData';

export type KodoState = 
  | 'IDLE'
  | 'GREETING'
  | 'LOOKING'
  | 'HOVERING'
  | 'GUIDING'
  | 'EXCITED'
  | 'GOODBYE'
  | 'SPINNING'
  | 'WAVING'
  | 'THINKING';

export interface SpeechOption {
  label: string;
  action: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
}

interface KodoStore {
  state: KodoState;
  speechText: string | null;
  speechOptions: SpeechOption[] | null;
  isTourActive: boolean;
  tourStep: number;
  hasSeenGreeting: boolean;
  activeSpotlightId: string | null;
  isSecretFactVisible: boolean;
  confettiCount: number;
  
  setState: (state: KodoState) => void;
  setSpeech: (text: string | null, options?: SpeechOption[] | null) => void;
  startTour: (stepIndex?: number) => void;
  endTour: () => void;
  nextTourStep: () => void;
  prevTourStep: () => void;
  goToTourStep: (stepIndex: number) => void;
  setActiveSpotlightId: (id: string | null) => void;
  setHasSeenGreeting: (val: boolean) => void;
  triggerSpin: () => void;
  triggerWave: () => void;
  triggerConfetti: () => void;
  toggleSecretFact: (show?: boolean) => void;
}

export const useKodoStore = create<KodoStore>((set, get) => ({
  state: 'IDLE',
  speechText: null,
  speechOptions: null,
  isTourActive: false,
  tourStep: 0,
  hasSeenGreeting: false,
  activeSpotlightId: null,
  isSecretFactVisible: false,
  confettiCount: 0,

  setState: (state) => set({ state }),
  
  setSpeech: (text, options = null) => set({ 
    speechText: text, 
    speechOptions: options as SpeechOption[] | null
  }),
  
  startTour: (stepIndex = 0) => {
    const initialStep = Math.max(0, Math.min(stepIndex, TOUR_STEPS.length - 1));
    const stepData = TOUR_STEPS[initialStep];
    set((prev) => ({ 
      isTourActive: true, 
      tourStep: initialStep,
      state: stepData ? stepData.mascotState : 'GUIDING',
      activeSpotlightId: stepData ? stepData.targetId : null,
      speechText: null,
      speechOptions: null,
      isSecretFactVisible: false,
      confettiCount: prev.confettiCount + 1,
    }));
  },
  
  endTour: () => {
    set({ 
      isTourActive: false, 
      tourStep: 0,
      state: 'IDLE',
      activeSpotlightId: null,
      isSecretFactVisible: false,
    });
  },
  
  nextTourStep: () => {
    const { tourStep } = get();
    if (tourStep < TOUR_STEPS.length - 1) {
      const nextStep = tourStep + 1;
      const stepData = TOUR_STEPS[nextStep];
      set((prev) => ({ 
        tourStep: nextStep,
        state: stepData ? stepData.mascotState : 'GUIDING',
        activeSpotlightId: stepData ? stepData.targetId : null,
        isSecretFactVisible: false,
        confettiCount: prev.confettiCount + 1,
      }));
    }
  },

  prevTourStep: () => {
    const { tourStep } = get();
    if (tourStep > 0) {
      const prevStep = tourStep - 1;
      const stepData = TOUR_STEPS[prevStep];
      set({ 
        tourStep: prevStep,
        state: stepData ? stepData.mascotState : 'GUIDING',
        activeSpotlightId: stepData ? stepData.targetId : null,
        isSecretFactVisible: false,
      });
    }
  },

  goToTourStep: (stepIndex: number) => {
    const validStep = Math.max(0, Math.min(stepIndex, TOUR_STEPS.length - 1));
    const stepData = TOUR_STEPS[validStep];
    set({
      tourStep: validStep,
      state: stepData ? stepData.mascotState : 'GUIDING',
      activeSpotlightId: stepData ? stepData.targetId : null,
      isSecretFactVisible: false,
    });
  },

  setActiveSpotlightId: (id) => set({ activeSpotlightId: id }),

  setHasSeenGreeting: (val) => set({ hasSeenGreeting: val }),

  triggerSpin: () => set({ state: 'SPINNING' }),

  triggerWave: () => set({ state: 'WAVING' }),

  triggerConfetti: () => set((prev) => ({ confettiCount: prev.confettiCount + 1 })),

  toggleSecretFact: (show) => set((prev) => ({
    isSecretFactVisible: show !== undefined ? show : !prev.isSecretFactVisible
  })),
}));
