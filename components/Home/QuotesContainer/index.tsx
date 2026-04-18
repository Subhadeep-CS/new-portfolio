"use client";
import { useState, useEffect } from "react";
import { QUOTES } from "@/utils/app_constant";
import { motion, AnimatePresence } from "framer-motion";

const QuotesContainer = () => {
    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % QUOTES.length);
        }, 6000); // Crossfade every 6 seconds
        return () => clearInterval(timer);
    }, [isHovered]);

    return (
        <section className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
            <div className="container border-x border-zinc-200 px-4 py-8">
                <div
                    className="relative w-full max-w-4xl mx-auto border border-zinc-200 rounded-xl bg-[#FAFAFA] p-8 sm:p-12 overflow-hidden flex flex-col justify-center min-h-[220px]"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* The giant subtle serif quote icon in the background to match the image */}
                    <span className="absolute -top-6 left-4 text-[180px] text-zinc-100 font-serif leading-none select-none pointer-events-none">
                        “
                    </span>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="relative z-10 w-full"
                        >
                            <p className="text-[17px] sm:text-[19px] font-medium text-zinc-600 italic font-mono mb-4 text-center leading-relaxed">
                                &quot;{QUOTES[index].text}&quot;
                            </p>
                            <p className="text-right text-[15px] sm:text-[16px] text-zinc-400 font-mono italic">
                                — {QUOTES[index].author}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default QuotesContainer;
