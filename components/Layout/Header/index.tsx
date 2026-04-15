import Navbar from "./Navbar";
import { Search } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 py-1 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-y">
      <div className="container px-2 h-12 flex items-center justify-between border-x">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-500 dark:text-zinc-400 text-xs font-semibold select-none cursor-default shadow-sm group">
          <Search className="w-3.5 h-3.5 text-zinc-400 group-hover:text-blue-500 transition-colors" />
          <span>Search</span>
          <div className="flex items-center gap-0.5 ml-2">
            <kbd className="font-mono text-[10px] bg-white dark:bg-black px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-800">⌘</kbd>
            <kbd className="font-mono text-[10px] bg-white dark:bg-black px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-800">K</kbd>
          </div>
        </div>

        <div className="flex items-center gap-2 text-muted sm:ml-auto">
          <Navbar />
          {/* <ModeToggle /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
