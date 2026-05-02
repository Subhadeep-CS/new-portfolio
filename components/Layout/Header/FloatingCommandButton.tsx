"use client";

import { Search, Menu } from "lucide-react";
import { motion } from "framer-motion";

const FloatingCommandButton = () => {
    const handleOpen = () => {
        window.dispatchEvent(new CustomEvent("open-command-palette"));
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] sm:hidden flex items-center"
        >
            <button
                onClick={handleOpen}
                className="flex items-center gap-3 pl-4 pr-3 py-2.5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl shadow-black/10 text-zinc-600 dark:text-zinc-400 active:scale-95 transition-all"
            >
                <div className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-blue-500" />
                    <span className="text-[14px] font-medium text-zinc-900 dark:text-zinc-100">Search...</span>
                </div>
                <div className="h-4 w-[1px] bg-zinc-200 dark:bg-zinc-800 mx-1" />
                <Menu className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />
            </button>
        </motion.div>
    );
};

export default FloatingCommandButton;
