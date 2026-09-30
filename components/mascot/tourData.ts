import { KodoState } from './store/useKodoStore';

export interface TourReaction {
  emoji: string;
  label: string;
  shout: string; // Fun reaction Kodo says when clicked!
}

export interface TourStep {
  id: string;
  targetId: string;
  title: string;
  badge: string;
  text: string;
  voiceText: string;
  secretFact: string;
  mascotState: KodoState;
  reactions: TourReaction[];
}

export const TOUR_STEPS: TourStep[] = [
  {
    id: "profile",
    targetId: "profile",
    badge: "Welcome",
    title: "Meet Subhadeep! 👋",
    text: "Welcome to Subhadeep's universe! I'm Kodo, and I'll be showing you all the coolest corners of his work. Ready for the ride?",
    voiceText: "Welcome to Subhadeep's universe! I'm Kodo, and I'll be showing you all the coolest corners of his work. Ready for the ride?",
    secretFact: "Subhadeep has fueled over 1,500+ hours of coding with hot filter coffee and lo-fi beats! ☕🎧",
    mascotState: "WAVING",
    reactions: [
      { emoji: "👋", label: "Say Hi!", shout: "Hey there, friend! Welcome aboard! 🐼✨" },
      { emoji: "☕", label: "Send Coffee", shout: "Coffee acquired! Extra developer energy unlocked! ☕⚡" },
      { emoji: "🔥", label: "Hyped!", shout: "Let's goooo! The tour is just getting started! 🚀" },
    ],
  },
  {
    id: "about",
    targetId: "about",
    badge: "Mindset",
    title: "Engineering Mindset 💡",
    text: "Subhadeep crafts software like architecture — modular atomic UI, zero bloated dependencies, and laser-focused performance budgets.",
    voiceText: "Subhadeep crafts software like architecture — modular atomic UI, zero bloated dependencies, and fast web performance.",
    secretFact: "He believes 90% of scalable code comes from clean naming and atomic separation of concerns! 🧠✨",
    mascotState: "THINKING",
    reactions: [
      { emoji: "💡", label: "Big Brain", shout: "Clean architecture is true engineering art! 🧠" },
      { emoji: "🎯", label: "Pixel Perfect", shout: "Every single pixel crafted with intention! 📐" },
      { emoji: "⚡", label: "Fast & Clean", shout: "60 FPS or nothing! Speed is a feature! 🏎️" },
    ],
  },
  {
    id: "stack",
    targetId: "stack",
    badge: "Arsenal",
    title: "Tech Stack & Superpowers 🛠️",
    text: "Here's his weapon collection! Next.js 16, React 19, TypeScript, WebRTC, Tailwind CSS, Framer Motion, and high-performance backend tools.",
    voiceText: "Here's his weapon collection! Next.js, React, TypeScript, WebRTC, Tailwind, Framer Motion, and modern web tools.",
    secretFact: "TypeScript is his superpower — he refuses to write `any` in production code! 🛡️⚡",
    mascotState: "GUIDING",
    reactions: [
      { emoji: "🚀", label: "Next.js FTW", shout: "Turbopack and Server Actions all day! ⚡" },
      { emoji: "🛡️", label: "Strict TS", shout: "Zero `any` allowed in this codebase! 🔒" },
      { emoji: "🎨", label: "Smooth CSS", shout: "Tailwind + Framer Motion = pure magic! ✨" },
    ],
  },
  {
    id: "experience",
    targetId: "experience",
    badge: "Career",
    title: "Professional Journey 💼",
    text: "2+ years of battle-tested experience at WebArt & Brainium — engineering real-time WebSockets, WebRTC video engines, and enterprise portals.",
    voiceText: "Over two years of battle-tested experience, engineering real-time WebSockets, WebRTC video engines, and enterprise portals.",
    secretFact: "At WebArt, he engineered a real-time WebRTC audio and video pipeline with instant peer reconnects! 📡🔥",
    mascotState: "GUIDING",
    reactions: [
      { emoji: "📡", label: "WebRTC Pro", shout: "Peer-to-peer real-time streaming mastered! 🎧" },
      { emoji: "💼", label: "Shipped It", shout: "Production scale with thousands of users! 🚢" },
      { emoji: "⭐", label: "Top Rated", shout: "Awarded Developer of the Quarter! 🏆" },
    ],
  },
  {
    id: "projects",
    targetId: "projects",
    badge: "Flagship Work",
    title: "Featured Projects 🚀",
    text: "From RailTel's 100K+ records government PSU platform to Imboxo OTT video streaming and 3D web apps. Click on any card to explore live!",
    voiceText: "From RailTel's 100K records platform to Imboxo streaming and 3D web apps. Click any card to explore!",
    secretFact: "The RailTel PSU Dashboard was tested with over 100,000 live data records running at a silky 60 FPS! 🏎️💨",
    mascotState: "EXCITED",
    reactions: [
      { emoji: "🏎️", label: "100K+ Data", shout: "Insane data visualization without dropping a frame! 📊" },
      { emoji: "📺", label: "OTT Stream", shout: "Silky smooth video playback across all devices! 🍿" },
      { emoji: "💎", label: "Pure Polish", shout: "Every project feels like a flagship product! ✨" },
    ],
  },
  {
    id: "playground",
    targetId: "playground",
    badge: "Playground",
    title: "Interactive Playground 🎮",
    text: "Creativity running wild! Micro-tools, playful components, and interactive web experiments running completely live right here in your browser.",
    voiceText: "Creativity running wild! Micro-tools and playful components running live in your browser.",
    secretFact: "Every playground experiment is completely custom-coded with vanilla CSS and custom React hooks! 🎨🕹️",
    mascotState: "SPINNING",
    reactions: [
      { emoji: "🎮", label: "Play!", shout: "Gaming and code combined = pure happiness! 🕹️" },
      { emoji: "🌀", label: "Do a Flip!", shout: "Wheee! Look at me go! 🐼🌪️" },
      { emoji: "🧪", label: "Lab Tested", shout: "Mad scientist coding at its best! 🔬" },
    ],
  },
  {
    id: "connect",
    targetId: "connect",
    badge: "Connect",
    title: "Let's Build Together! 📬",
    text: "Looking for an engineer who treats frontend like an art? Drop Subhadeep an email, ping on LinkedIn, or star his GitHub. Thanks for touring with me!",
    voiceText: "Looking for an engineer who treats frontend like an art? Drop an email, ping on LinkedIn, or star his GitHub. Thanks for touring with me!",
    secretFact: "Subhadeep usually responds to emails and LinkedIn messages within 24 hours! ⚡💌",
    mascotState: "WAVING",
    reactions: [
      { emoji: "🤝", label: "Hire Him!", shout: "Best decision you'll make today! Let's build! 🚀" },
      { emoji: "📬", label: "Ping Subhadeep", shout: "His inbox is always open for great projects! ✉️" },
      { emoji: "💖", label: "Love Kodo", shout: "Aww, thank you! Kodo loves you too! 🐼💖" },
    ],
  },
];

export function scrollToSection(id: string, offset: number = -80) {
  if (typeof window === "undefined") return;

  const el = document.getElementById(id);
  if (!el) return;

  const lenis = (window as any).lenis;
  if (lenis) {
    lenis.scrollTo(`#${id}`, { offset, duration: 1.2 });
  } else {
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition + offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}
