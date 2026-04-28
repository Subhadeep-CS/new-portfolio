import { Search } from "lucide-react";

const CommandPalette = () => {
    return (
        <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-500 dark:text-zinc-400 text-xs font-semibold cursor-pointer shadow-sm hover:shadow-md hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all group"
        >
            <Search className="w-3.5 h-3.5 text-zinc-400 group-hover:text-blue-500 transition-colors" />
            <span>Search</span>
            <div className="flex items-center gap-0.5 ml-2">
                <kbd className="font-mono text-[10px] bg-white dark:bg-black px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-800 focus:outline-none">⌘</kbd>
                <kbd className="font-mono text-[10px] bg-white dark:bg-black px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-800 focus:outline-none">K</kbd>
            </div>
        </button>
    )
}

export default CommandPalette