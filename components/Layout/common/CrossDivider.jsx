"use client";
import { motion } from "framer-motion";

// A decorative divider with faint diagonal hash lines and a subtle glow interaction
const CrossDivider = () => (
    <div className="flex w-full justify-center h-10">
        <motion.div
            className="w-full border-x border-zinc-200/30 cursor-pointer opacity-60"
            style={{
                backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(161, 161, 170, 0.25) 6px, rgba(161, 161, 170, 0.25) 7px)",
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
);

export default CrossDivider;