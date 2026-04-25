"use client";
import { motion } from "framer-motion";

const CrossDivider = () => (
    <div className="container border-x border-zinc-200 dark:border-zinc-800">
        <div className="w-full h-10">
            <motion.div
                className="w-full h-full cursor-pointer opacity-30 dark:opacity-10"
                style={{
                    backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(161, 161, 170, 0.4) 6px, rgba(161, 161, 170, 0.4) 7px)",
                }}
                whileHover={{
                    opacity: 0.6,
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