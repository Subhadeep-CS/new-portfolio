"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Toggle visibility if user scrolled more than 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        // Execute immediately to check initial load state
        toggleVisibility();

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                    transition={{ duration: 0.25 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 p-3.5 rounded-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 text-zinc-800 dark:text-zinc-200 shadow-lg hover:shadow-xl hover:bg-white/90 dark:hover:bg-zinc-800/90 hover:scale-110 active:scale-95 transition-all z-[90] flex items-center justify-center cursor-pointer"
                    aria-label="Scroll to top"
                >
                    <ChevronUp className="w-5 h-5 stroke-[2.5px]" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
