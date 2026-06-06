"use client";

import { useLocations } from "@/hooks/useLocations";

const PixelNameReveal = () => {
  const name = "SUBHADEEP DAS";
  const { coords, isLoading } = useLocations();

  return (
    <div className="w-full bg-white dark:bg-zinc-950 pt-12 flex justify-center items-end overflow-hidden border-t border-zinc-100 dark:border-zinc-900 relative group">

      {/* Developer Grid Background (Always Visible) */}
      <div
        className="absolute inset-0 opacity-100 pointer-events-none text-zinc-950/[0.03] dark:text-white/[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Code syntax label (Top Left) */}
      <div className="absolute top-3 left-6 font-mono text-[10px] text-zinc-400/50 dark:text-zinc-600/50 select-none pointer-events-none hidden sm:block">
        <span className="text-purple-500 dark:text-purple-400/80">const</span>{" "}
        <span className="text-blue-500 dark:text-blue-400/80">footer</span> = () =&gt; &lt;
        <span className="text-amber-600 dark:text-amber-500/80">PixelNameReveal</span>{" "}
        <span className="text-emerald-600 dark:text-emerald-500/80">text</span>=
        <span className="text-rose-500 dark:text-rose-400/80">"{name}"</span> /&gt;;
      </div>

      {/* Location coords label (Top Right) - Dynamic Geolocation */}
      <div className="absolute top-3 right-6 font-mono text-[10px] text-zinc-400/50 dark:text-zinc-600/50 select-none pointer-events-none hidden sm:block">
        Loc:{" "}
        <span className="text-emerald-500/70">
          {isLoading ? (
            <span className="animate-pulse">Detecting...</span>
          ) : (
            `${coords?.lat}, ${coords?.lng}`
          )}
        </span>
      </div>

      {/* Name Container */}
      <div className="w-full translate-y-[30%] select-none pointer-events-auto px-4 md:px-8 z-10">
        <h2
          className="w-full flex justify-between items-center text-[10vw] font-black leading-none transition-colors duration-500"
          style={{ WebkitTextStroke: "1.5px currentColor" }}
        >
          {name.split("").map((char, index) => (
            <span
              key={index}
              className="origin-bottom text-transparent text-zinc-300 dark:text-zinc-800/50 hover:text-black dark:hover:text-white transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[8%] hover:scale-105 cursor-default pointer-events-auto"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
};

export default PixelNameReveal;
