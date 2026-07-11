"use client";

import Navbar from "./Navbar";
import { ModeToggle } from "@/components/ModeToggle";
import CommandPalette from "./CommandPallete";
import { SoundToggle } from "@/components/Audio/SoundToggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-y">
      <div className="container px-4 h-12 flex items-center justify-between border-x">
        <div className="flex items-center shrink-0">
          <img src="/img/logo/SD.svg" alt="SD Logo" className="w-8 h-8 sm:w-10 sm:h-10 dark:invert" />
        </div>
        <div className="flex items-center gap-2 text-muted sm:ml-auto">
          <Navbar />
          <ModeToggle />
          <SoundToggle />
          <CommandPalette />
        </div>
      </div>
    </header>
  );
};

export default Header;
