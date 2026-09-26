import { create } from 'zustand';

export type KodoState = 
  | 'IDLE'
  | 'GREETING'
  | 'LOOKING'
  | 'HOVERING'
  | 'GUIDING'
  | 'EXCITED'
  | 'GOODBYE';

interface KodoStore {
  state: KodoState;
  speechText: string | null;
  speechOptions: { label: string; action: () => void }[] | null;
  isTourActive: boolean;
  tourStep: number;
  hasSeenGreeting: boolean;
  
  setState: (state: KodoState) => void;
  setSpeech: (text: string | null, options?: { label: string; action: () => void }[] | null) => void;
  startTour: () => void;
  endTour: () => void;
  nextTourStep: () => void;
  setHasSeenGreeting: (val: boolean) => void;
}

export const useKodoStore = create<KodoStore>((set) => ({
  state: 'IDLE',
  speechText: null,
  speechOptions: null,
  isTourActive: false,
  tourStep: 0,
  hasSeenGreeting: false,

  setState: (state) => set({ state }),
  
  setSpeech: (text, options = null) => set({ 
    speechText: text, 
    speechOptions: options as { label: string; action: () => void }[] | null
  }),
  
  startTour: () => set({ 
    isTourActive: true, 
    tourStep: 0,
    state: 'GUIDING'
  }),
  
  endTour: () => set({ 
    isTourActive: false, 
    tourStep: 0,
    state: 'IDLE',
    speechText: null,
    speechOptions: null
  }),
  
  nextTourStep: () => set((prev) => ({ 
    tourStep: prev.tourStep + 1 
  })),

  setHasSeenGreeting: (val) => set({ hasSeenGreeting: val }),
}));
