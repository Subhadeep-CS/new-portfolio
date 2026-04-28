"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { IconType } from "react-icons";

interface TechProps {
    tech: {
        name: string;
        url: string;
        icon: IconType;
        color: string;
    }
}

const StackCard = ({ tech }: TechProps) => {
    const Icon = tech.icon;
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <Tooltip key={tech.name}>
            <TooltipTrigger asChild>
                <Link
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseMove={handleMouseMove}
                    className="relative p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-950 transition-colors w-16 h-16 flex items-center justify-center group overflow-hidden"
                >
                    <motion.div
                        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                        style={{
                            background: useMotionTemplate`
                                radial-gradient(
                                    65px circle at ${mouseX}px ${mouseY}px,
                                    ${tech.color}33,
                                    transparent 80%
                                )
                            `,
                        }}
                    />
                    <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="w-8 h-8 filter drop-shadow-md" color={tech.color} />
                    </div>
                </Link>
            </TooltipTrigger>
            <TooltipContent>
                <p>{tech.name}</p>
            </TooltipContent>
        </Tooltip>
    );
};

export default StackCard;
