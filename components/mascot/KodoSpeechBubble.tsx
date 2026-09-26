import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useKodoStore } from './store/useKodoStore';
import { X } from 'lucide-react';
import { useAudio } from '../Audio/AudioContext';

export default function KodoSpeechBubble() {
  const { speechText, speechOptions, setSpeech } = useKodoStore();
  const { playSound } = useAudio();

  // Speak the text aloud when it changes
  useEffect(() => {
    if (speechText && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      // Play a cute chime sound when he speaks
      playSound('success');

      window.speechSynthesis.cancel();
      const textToSpeak = speechText.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, ''); // Remove emojis for speech
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.pitch = 1.4; // Slightly high but clear and sweet
      utterance.rate = 1.0;  // Normal speed for clear understanding
      utterance.volume = 0.6; 
      
      // Try to find a sweet, clear English voice
      const voices = window.speechSynthesis.getVoices();
      const englishVoices = voices.filter(v => v.lang.startsWith('en'));
      const cuteVoice = englishVoices.find(v => 
        v.name.includes('Samantha') || // macOS clear sweet voice
        v.name.includes('Google UK English Female') || 
        v.name.includes('Google US English') ||
        v.name.includes('Female')
      ) || englishVoices[0]; // Fallback to first English voice

      if (cuteVoice) utterance.voice = cuteVoice;

      window.speechSynthesis.speak(utterance);
    }
  }, [speechText, playSound]);

  // Auto hide generic messages after 5 seconds if there are no options
  useEffect(() => {
    if (speechText && !speechOptions) {
      const timer = setTimeout(() => {
        setSpeech(null);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [speechText, speechOptions, setSpeech]);

  return (
    <AnimatePresence>
      {speechText && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="absolute bottom-[80%] left-[30%] sm:left-[50%] mb-4 min-w-[200px] max-w-[280px] z-50 pointer-events-auto origin-bottom-left"
        >
          <div className="relative bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 p-4 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800">
            {/* Close button for manual dismiss */}
            <button 
              onClick={() => setSpeech(null)}
              className="absolute top-2 right-2 text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-100 transition-colors"
              aria-label="Close message"
            >
              <X size={14} />
            </button>
            
            <p className="text-sm font-medium leading-relaxed pr-4 whitespace-pre-line">
              {speechText}
            </p>
            
            {speechOptions && speechOptions.length > 0 && (
              <div className="mt-3 flex flex-col gap-2">
                {speechOptions.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      opt.action();
                      // We don't auto-close if an action is pressed, the action itself should manage state if needed
                    }}
                    className={`text-xs px-3 py-2 rounded-lg font-semibold transition-colors w-full text-left
                      ${idx === 0 
                        ? 'bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200' 
                        : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700'
                      }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            {/* Bubble Tail */}
            <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white dark:bg-zinc-900 border-b border-r border-zinc-200 dark:border-zinc-800 transform rotate-45 shadow-sm" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
