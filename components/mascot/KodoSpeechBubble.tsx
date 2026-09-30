'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useKodoStore } from './store/useKodoStore';
import { X, ArrowRight, ArrowLeft, CheckCircle2, RotateCw, Lightbulb, PartyPopper, ChevronDown, ChevronUp } from 'lucide-react';
import { useAudio } from '../Audio/AudioContext';
import { useKodoTour } from './hooks/useKodoTour';
import { TOUR_STEPS } from './tourData';

export default function KodoSpeechBubble() {
  const {
    speechText,
    speechOptions,
    setSpeech,
    isTourActive,
    tourStep,
    triggerSpin,
    triggerConfetti,
    toggleSecretFact,
    isSecretFactVisible,
  } = useKodoStore();
  const { playSound } = useAudio();
  const {
    currentStep,
    totalSteps,
    handleNextStep,
    handlePrevStep,
    handleEndTour,
  } = useKodoTour();

  const [isMinimized, setIsMinimized] = useState(false);

  // Voice text to speak
  const activeVoiceText = isTourActive && currentStep
    ? isSecretFactVisible
      ? currentStep.secretFact
      : currentStep.voiceText || currentStep.text
    : speechText;

  // Speak the text aloud when it changes
  useEffect(() => {
    if (activeVoiceText && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const textToSpeak = activeVoiceText.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '');
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.pitch = 1.35;
      utterance.rate = 1.0;
      utterance.volume = 0.5;

      const voices = window.speechSynthesis.getVoices();
      const englishVoices = voices.filter((v) => v.lang.startsWith('en'));
      const cuteVoice =
        englishVoices.find(
          (v) =>
            v.name.includes('Samantha') ||
            v.name.includes('Google UK English Female') ||
            v.name.includes('Google US English') ||
            v.name.includes('Female')
        ) || englishVoices[0];

      if (cuteVoice) utterance.voice = cuteVoice;

      window.speechSynthesis.speak(utterance);
    }
  }, [activeVoiceText]);

  // Auto hide generic messages after 6 seconds if there are no options and tour is not active
  useEffect(() => {
    if (speechText && !speechOptions && !isTourActive) {
      const timer = setTimeout(() => {
        setSpeech(null);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [speechText, speechOptions, isTourActive, setSpeech]);

  const isVisible = isTourActive || Boolean(speechText);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          className="absolute bottom-[92%] left-0 mb-2 w-[220px] sm:w-[245px] z-50 pointer-events-auto origin-bottom-left"
        >
          {/* Iridescent Slim Glassmorphic Card (Compact width to avoid overlapping page content) */}
          <div className="p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/70 via-indigo-500/60 to-pink-500/60 shadow-xl shadow-black/15">
            <div className="relative bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl text-zinc-900 dark:text-zinc-100 p-3 rounded-[15px]">
              
              {/* Header Controls (Minimize & Close) */}
              <div className="flex items-center gap-1 absolute top-2 right-2 z-10">
                {isTourActive && (
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="text-zinc-400 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-200 transition-colors p-0.5 rounded cursor-pointer"
                    title={isMinimized ? "Expand" : "Minimize"}
                  >
                    {isMinimized ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                  </button>
                )}
                <button
                  onClick={() => {
                    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                      window.speechSynthesis.cancel();
                    }
                    if (isTourActive) {
                      handleEndTour();
                    } else {
                      setSpeech(null);
                    }
                  }}
                  className="text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-100 transition-colors p-0.5 rounded cursor-pointer"
                  aria-label={isTourActive ? 'End Tour' : 'Close'}
                >
                  <X size={13} />
                </button>
              </div>

              {/* TOUR MODE UI */}
              {isTourActive && currentStep ? (
                <div className="flex flex-col gap-2">
                  {/* Step Header */}
                  <div className="flex items-center justify-between pr-10">
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400 font-bold text-[9px] uppercase tracking-wider">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping inline-block" />
                      <span>Tour {tourStep + 1}/{totalSteps}</span>
                    </div>
                  </div>

                  {/* Segmented Progress Line */}
                  <div className="grid grid-cols-7 gap-0.5 w-full">
                    {TOUR_STEPS.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          idx === tourStep
                            ? 'bg-blue-500 shadow-sm shadow-blue-500/50'
                            : idx < tourStep
                            ? 'bg-blue-400/40 dark:bg-blue-500/40'
                            : 'bg-zinc-100 dark:bg-zinc-800'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Minimized view vs Full view */}
                  {!isMinimized ? (
                    <>
                      {/* Step Title & Body Text */}
                      <div className="mt-0.5">
                        <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
                          {currentStep.title}
                        </h4>
                        <p className="text-[11px] font-normal leading-relaxed text-zinc-600 dark:text-zinc-300 mt-1">
                          {currentStep.text}
                        </p>
                      </div>

                      {/* Mini Action Chips */}
                      <div className="flex items-center flex-wrap gap-1 py-0.5">
                        <button
                          onClick={() => {
                            playSound('hacker');
                            triggerSpin();
                            toggleSecretFact();
                          }}
                          className={`flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] font-semibold transition-all cursor-pointer border ${
                            isSecretFactVisible
                              ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/40'
                              : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200/50 dark:border-zinc-800'
                          }`}
                        >
                          <Lightbulb size={10} className={isSecretFactVisible ? 'text-amber-500' : 'text-zinc-400'} />
                          <span>Secret</span>
                        </button>

                        <button
                          onClick={() => {
                            playSound('barrelRoll');
                            triggerSpin();
                          }}
                          className="flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] font-semibold bg-zinc-100 dark:bg-zinc-900 hover:bg-purple-500/10 text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 border border-zinc-200/50 dark:border-zinc-800 transition-all cursor-pointer active:scale-95"
                        >
                          <RotateCw size={10} className="text-purple-500" />
                          <span>Flip</span>
                        </button>

                        <button
                          onClick={() => {
                            playSound('open');
                            triggerConfetti();
                            triggerSpin();
                            setSpeech("🎉 Party time! 🐼✨");
                          }}
                          className="flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] font-semibold bg-zinc-100 dark:bg-zinc-900 hover:bg-pink-500/10 text-zinc-600 dark:text-zinc-400 hover:text-pink-600 dark:hover:text-pink-400 border border-zinc-200/50 dark:border-zinc-800 transition-all cursor-pointer active:scale-95"
                        >
                          <PartyPopper size={10} className="text-pink-500" />
                          <span>Party</span>
                        </button>
                      </div>

                      {/* Secret Fact Details */}
                      <AnimatePresence>
                        {isSecretFactVisible && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30 p-2 rounded-xl text-[10px] text-amber-800 dark:text-amber-200 font-medium leading-snug"
                          >
                            <span className="font-bold uppercase text-[9px] text-amber-600 dark:text-amber-400 block mb-0.5">
                              💡 Secret Note
                            </span>
                            {currentStep.secretFact}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Navigation Buttons */}
                      <div className="flex items-center justify-between gap-1.5 pt-1.5 border-t border-zinc-100 dark:border-zinc-800/80">
                        {tourStep > 0 ? (
                          <button
                            onClick={handlePrevStep}
                            className="flex items-center gap-0.5 text-[11px] px-2 py-1 rounded-lg font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                          >
                            <ArrowLeft size={11} />
                            <span>Back</span>
                          </button>
                        ) : (
                          <button
                            onClick={handleEndTour}
                            className="text-[10px] text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors px-1 cursor-pointer"
                          >
                            Skip
                          </button>
                        )}

                        <button
                          onClick={handleNextStep}
                          className="flex items-center gap-1 text-[11px] px-3 py-1 rounded-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-500/20 active:scale-95 transition-all cursor-pointer ml-auto"
                        >
                          <span>{tourStep === totalSteps - 1 ? 'Finish' : 'Next'}</span>
                          {tourStep === totalSteps - 1 ? <CheckCircle2 size={12} /> : <ArrowRight size={12} />}
                        </button>
                      </div>
                    </>
                  ) : (
                    /* Minimized View */
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] font-bold text-zinc-800 dark:text-zinc-200 truncate max-w-[140px]">
                        {currentStep.title}
                      </span>
                      <button
                        onClick={handleNextStep}
                        className="text-[10px] font-bold text-blue-600 dark:text-cyan-400 hover:underline cursor-pointer"
                      >
                        Next ➡️
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                /* REGULAR SPEECH BUBBLE UI */
                <div>
                  <p className="text-xs font-medium leading-relaxed pr-4 whitespace-pre-line text-zinc-800 dark:text-zinc-200">
                    {speechText}
                  </p>

                  {speechOptions && speechOptions.length > 0 && (
                    <div className="mt-2.5 flex flex-col gap-1.5">
                      {speechOptions.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            opt.action();
                          }}
                          className={`text-[11px] px-2.5 py-1.5 rounded-xl font-semibold transition-all duration-200 w-full text-left flex items-center justify-between group cursor-pointer
                            ${
                              idx === 0
                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-500/20 active:scale-[0.98]'
                                : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 active:scale-[0.98]'
                            }`}
                        >
                          <span>{opt.label}</span>
                          {idx === 0 && (
                            <ArrowRight
                              size={11}
                              className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Tail */}
              <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-white dark:bg-zinc-950 border-b border-r border-indigo-500/40 transform rotate-45 shadow-sm" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
