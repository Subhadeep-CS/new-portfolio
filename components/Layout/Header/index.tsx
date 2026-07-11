"use client";

import Link from "next/link";
import Navbar from "./Navbar";
import { ModeToggle } from "@/components/ModeToggle";
import CommandPalette from "./CommandPallete";
import { SoundToggle } from "@/components/Audio/SoundToggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-y">
      <div className="container px-4 h-12 flex items-center justify-between border-x">
        <Link href="/" className="flex items-center shrink-0 cursor-pointer">
          <img src="/img/logo/SD.svg" alt="SD Logo" className="w-8 h-8 sm:w-10 sm:h-10 dark:invert" />
        </Link>
        <div className="flex items-center gap-1.5 sm:gap-2 text-muted sm:ml-auto">
          <div className="hidden sm:block">
            <Navbar />
          </div>
          <div className="hidden sm:block w-[1px] h-4 bg-zinc-250 dark:bg-zinc-800/80 mx-1 shrink-0" />
          
          <ModeToggle />
          
          <div className="w-[1px] h-4 bg-zinc-250 dark:bg-zinc-800/80 mx-0.5 shrink-0" />
          
          <SoundToggle />
          
          <div className="hidden sm:block">
            <CommandPalette />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
