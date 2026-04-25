"use client";
import { motion } from "framer-motion";

// A decorative divider with faint diagonal hash lines and a subtle glow interaction
const CrossDivider = () => (
    <div className="flex w-full justify-center">
        <div className="w-full h-10">
            <motion.div
                className="w-full h-full cursor-pointer opacity-60"
                style={{
                    backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(161, 161, 170, 0.2) 6px, rgba(161, 161, 170, 0.2) 7px)",
                }}
                whileHover={{
                    opacity: 0.5,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
            ></motion.div>
        </div>
    </div>
);

export default CrossDivider;