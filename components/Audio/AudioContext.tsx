"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from "react";

export type SoundType = "click" | "menu" | "open" | "scroll" | "success" | "hacker" | "barrelRoll";

class SoundGenerator {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  constructor() {
    // We defer AudioContext creation until a sound is played to satisfy browser security policies.
  }

  setMuted(muted: boolean) {
    this.isMuted = muted;
    if (typeof window !== "undefined") {
      localStorage.setItem("audio_muted", muted ? "true" : "false");
    }
  }

  getMuted() {
    return this.isMuted;
  }

  init() {
    if (this.ctx) return;
    const AudioContextClass = (window as any).AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      this.ctx = new AudioContextClass();
    }
    if (typeof window !== "undefined") {
      const savedMuted = localStorage.getItem("audio_muted");
      this.isMuted = savedMuted === "true";
    }
  }

  private resume() {
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  play(type: SoundType) {
    this.init();
    if (this.isMuted || !this.ctx) return;
    this.resume();

    switch (type) {
      case "click":
        this.playClick();
        break;
      case "menu":
        this.playMenuClick();
        break;
      case "open":
        this.playOpen();
        break;
      case "scroll":
        this.playScroll();
        break;
      case "success":
        this.playSuccess();
        break;
      case "hacker":
        this.playHacker();
        break;
      case "barrelRoll":
        this.playBarrelRoll();
        break;
    }
  }

  private playClick() {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    // Very short, clean, crisp mechanical click
    osc.type = "sine";
    osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

    osc.start(this.ctx.currentTime);
    osc.stop(this.ctx.currentTime + 0.05);
  }

  private playMenuClick() {
    if (!this.ctx) return;
    // A clean, soft double blip
    const playTick = (delay: number, freq: number, duration: number, vol: number) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);
      
      gain.gain.setValueAtTime(vol, this.ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + duration);

      osc.start(this.ctx.currentTime + delay);
      osc.stop(this.ctx.currentTime + delay + duration + 0.01);
    };

    playTick(0, 580, 0.05, 0.05);
    playTick(0.03, 880, 0.07, 0.03);
  }

  private playOpen() {
    if (!this.ctx) return;
    const playNote = (delay: number, freq: number, duration: number, vol: number) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);
      
      gain.gain.setValueAtTime(0, this.ctx.currentTime + delay);
      gain.gain.linearRampToValueAtTime(vol, this.ctx.currentTime + delay + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + duration);

      osc.start(this.ctx.currentTime + delay);
      osc.stop(this.ctx.currentTime + delay + duration + 0.01);
    };

    // A beautiful rising futuristic chime
    playNote(0, 523.25, 0.25, 0.03); // C5
    playNote(0.06, 659.25, 0.25, 0.03); // E5
    playNote(0.12, 783.99, 0.25, 0.03); // G5
    playNote(0.18, 1046.50, 0.3, 0.03); // C6
  }

  private playScroll() {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    // Very soft low frequency bubble pop for Scrollspy indicators
    osc.type = "sine";
    osc.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(90, this.ctx.currentTime + 0.07);

    gain.gain.setValueAtTime(0.025, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.07);

    osc.start(this.ctx.currentTime);
    osc.stop(this.ctx.currentTime + 0.08);
  }

  private playHacker() {
    if (!this.ctx) return;
    // Rapid futuristic digital typing beeps
    const playBeep = (delay: number, freq: number, duration: number, vol: number) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);
      
      gain.gain.setValueAtTime(vol, this.ctx.currentTime + delay);
      gain.gain.setValueAtTime(vol, this.ctx.currentTime + delay + duration - 0.01);
      gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + delay + duration);

      osc.start(this.ctx.currentTime + delay);
      osc.stop(this.ctx.currentTime + delay + duration + 0.01);
    };

    playBeep(0, 900, 0.04, 0.02);
    playBeep(0.03, 1400, 0.04, 0.02);
    playBeep(0.06, 1100, 0.06, 0.02);
    playBeep(0.11, 1800, 0.08, 0.03);
  }

  private playBarrelRoll() {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);

    // Dynamic sweep whoosh
    osc.type = "sine";
    osc.frequency.setValueAtTime(900, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(160, this.ctx.currentTime + 1.2);

    gain.gain.setValueAtTime(0, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.04, this.ctx.currentTime + 0.2);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.2);

    osc.start(this.ctx.currentTime);
    osc.stop(this.ctx.currentTime + 1.3);
  }

  private playSuccess() {
    if (!this.ctx) return;
    const playNote = (delay: number, freq: number, duration: number, vol: number) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);
      
      gain.gain.setValueAtTime(0, this.ctx.currentTime + delay);
      gain.gain.linearRampToValueAtTime(vol, this.ctx.currentTime + delay + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + duration);

      osc.start(this.ctx.currentTime + delay);
      osc.stop(this.ctx.currentTime + delay + duration + 0.01);
    };

    playNote(0, 523.25, 0.12, 0.03); // C5
    playNote(0.06, 659.25, 0.12, 0.03); // E5
    playNote(0.12, 783.99, 0.22, 0.03); // G5
  }
}

const sound = new SoundGenerator();

interface AudioContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playSound: (type: SoundType) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Read preference on client mount
    const saved = localStorage.getItem("audio_muted");
    const initialMuted = saved === "true";
    setIsMuted(initialMuted);
    sound.setMuted(initialMuted);
    sound.init();

    // Global click listener to automatically trigger sound
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const clickable = target.closest("button, a, [role='button'], .cursor-pointer, [data-sound]");
      if (!clickable) return;

      const customSound = clickable.getAttribute("data-sound");
      if (customSound === "none") return;

      if (customSound) {
        sound.play(customSound as SoundType);
        return;
      }

      // Automatically determine menu vs normal click
      const isMenu =
        clickable.closest("nav") ||
        clickable.closest("header") ||
        clickable.closest("[role='navigation']") ||
        clickable.closest(".menu-item");

      if (isMenu) {
        sound.play("menu");
      } else {
        sound.play("click");
      }
    };

    document.addEventListener("click", handleGlobalClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleGlobalClick, { capture: true });
    };
  }, [isMuted]);

  const toggleMute = () => {
    const nextState = !isMuted;
    setIsMuted(nextState);
    sound.setMuted(nextState);
    // Beep briefly to indicate activation
    if (!nextState) {
      sound.play("click");
    }
  };

  const playSound = (type: SoundType) => {
    sound.play(type);
  };

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute, playSound }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
