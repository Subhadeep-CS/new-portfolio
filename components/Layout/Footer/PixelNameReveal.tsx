"use client";

import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

const PixelNameReveal = () => {
    const [hoverSide, setHoverSide] = useState<"left" | "right" | null>(null);

    // Letter definitions on a 5x5 grid
    // 1 = pixel, 0 = empty
    const letters: Record<string, number[][]> = {
        S: [
            [0, 1, 1, 1, 0],
            [1, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 1],
            [0, 1, 1, 1, 0],
        ],
        U: [
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [0, 1, 1, 1, 0],
        ],
        B: [
            [1, 1, 1, 1, 0],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 0],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 0],
        ],
        H: [
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
        ],
        A: [
            [0, 1, 1, 1, 0],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
        ],
        D: [
            [1, 1, 1, 1, 0],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 0],
        ],
        E: [
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0],
            [1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
        ],
        P: [
            [1, 1, 1, 1, 0],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0],
            [1, 0, 0, 0, 0],
        ],
    };

    const name = "SUBHADEEP";
    const pixelSize = 10;
    const letterGap = 15;
    const letterWidth = 5 * pixelSize;
    const totalWidth = name.length * (letterWidth + letterGap) - letterGap;
    const totalHeight = 5 * pixelSize;

    const renderPixelPath = (text: string) => {
        let path = "";
        text.split("").forEach((char, charIdx) => {
            const matrix = letters[char] || [];
            const xOffset = charIdx * (letterWidth + letterGap);
            matrix.forEach((row, y) => {
                row.forEach((pixel, x) => {
                    if (pixel === 1) {
                        path += `M ${xOffset + x * pixelSize} ${y * pixelSize} h ${pixelSize} v ${pixelSize} h -${pixelSize} Z `;
                    }
                });
            });
        });
        return path;
    };

    const pathData = renderPixelPath(name);

    return (
        <div className="w-full bg-white dark:bg-zinc-950 pt-8 flex justify-center items-center overflow-hidden border-t border-zinc-100 dark:border-zinc-900 relative group">
            <div className="relative w-full px-0">
                {/* Left detection area */}
                <div
                    className="absolute inset-y-0 left-0 w-1/2 z-30 cursor-crosshair"
                    onMouseEnter={() => setHoverSide("left")}
                    onMouseLeave={() => setHoverSide(null)}
                />
                {/* Right detection area */}
                <div
                    className="absolute inset-y-0 right-0 w-1/2 z-30 cursor-crosshair"
                    onMouseEnter={() => setHoverSide("right")}
                    onMouseLeave={() => setHoverSide(null)}
                />

                <svg
                    viewBox={`0 0 ${totalWidth} ${totalHeight}`}
                    className="w-full h-auto overflow-visible"
                >
                    {/* Background Layer (Outline/Gray) */}
                    <path
                        d={pathData}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-zinc-200 dark:text-zinc-800 transition-colors duration-500"
                    />

                    {/* Left Reveal Layer (Colored when hovering right) */}
                    <motion.path
                        d={pathData}
                        fill="currentColor"
                        className="text-black"
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        animate={{
                            clipPath: hoverSide === "right" ? "inset(0 50% 0 0)" :
                                hoverSide === "left" ? "inset(0 100% 0 0)" :
                                    "inset(0 100% 0 0)"
                        }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    />

                    {/* Right Reveal Layer (Colored when hovering left) */}
                    <motion.path
                        d={pathData}
                        fill="currentColor"
                        className="text-black"
                        initial={{ clipPath: "inset(0 0 0 100%)" }}
                        animate={{
                            clipPath: hoverSide === "left" ? "inset(0 0 0 50%)" :
                                hoverSide === "right" ? "inset(0 0 0 100%)" :
                                    "inset(0 0 0 100%)"
                        }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    />
                </svg>

                {/* Optional: Add a subtle glow or reflection like in the premium designs */}
                <div className="absolute -inset-10 bg-black/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            </div>
        </div>
    );
};

export default PixelNameReveal;
