"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(true);

    useEffect(() => {
        // Only activate cursor if the device has a fine pointer (mouse), avoiding mobile clunkiness
        if (window.matchMedia("(pointer: fine)").matches) {
            setIsTouchDevice(false);
        }

        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Triggers expansion if over an anchor tag, button, or any element natively declaring a pointer cursor
            if (
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button"
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    if (isTouchDevice) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-zinc-900 dark:bg-white rounded-full pointer-events-none z-[9999]"
                animate={{
                    x: mousePosition.x - (isHovering ? 24 : 6),
                    y: mousePosition.y - (isHovering ? 24 : 6),
                    scale: isHovering ? 4 : 1,
                    opacity: isHovering ? 0 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 800,
                    damping: 35,
                    mass: 0.5,
                }}
            />
            {/* Outer Glow ring that acts like a structural magnet when hovering */}
            <motion.div
                className="fixed top-0 left-0 w-12 h-12 border-2 border-zinc-900 border-dashed dark:border-white rounded-full pointer-events-none z-[9998]"
                animate={{
                    x: mousePosition.x - 24,
                    y: mousePosition.y - 24,
                    scale: isHovering ? 1.2 : 0,
                    opacity: isHovering ? 0.3 : 0,
                    rotate: isHovering ? 180 : 0
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                }}
            />
        </>
    );
}
