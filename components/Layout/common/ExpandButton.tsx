"use client";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ExpandButtonProps {
    isExpanded?: boolean;
    onClick?: () => void;
    href?: string;
    label: string;
    isLink?: boolean;
}

const ExpandButton = ({ isExpanded, onClick, href, label, isLink = false }: ExpandButtonProps) => {

    // Style classes based on the user's provided CSS reference with standardized typography
    const btnBaseClass = `
        relative inline-flex items-center justify-center px-10 py-3 rounded-full
        border-[2px] border-zinc-900 dark:border-white
        text-zinc-900 dark:text-white
        bg-white dark:bg-transparent
        font-semibold text-sm
        cursor-pointer overflow-hidden z-0
        transition-colors duration-300
        hover:text-white dark:hover:text-zinc-900
    `;

    const content = (
        <div className="flex items-center gap-3 relative z-10">
            <span>{label}</span>
            <div>
                {isLink ? (
                    <ArrowRight className="w-4 h-4" />
                ) : isExpanded ? (
                    <ChevronUp className="w-4 h-4 translate-y-[1px]" />
                ) : (
                    <ChevronDown className="w-4 h-4 translate-y-[1px]" />
                )}
            </div>
        </div>
    );

    const CrissCrossCircles = () => (
        <>
            <div className={`
                absolute top-1/2 -left-5 -translate-x-1/2 -translate-y-1/2 -z-10 w-5 h-5
                bg-zinc-900 dark:bg-white rounded-full
                group-hover:animate-criss-cross-left
            `} />

            <div className={`
                absolute top-1/2 -right-5 translate-x-1/2 -translate-y-1/2 -z-10 w-5 h-5
                bg-zinc-900 dark:bg-white rounded-full
                group-hover:animate-criss-cross-right
            `} />
        </>
    );

    if (isLink && href) {
        return (
            <Link href={href} className={`group ${btnBaseClass}`}>
                <CrissCrossCircles />
                {content}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={`group ${btnBaseClass}`}>
            <CrissCrossCircles />
            {content}
        </button>
    );
};

export default ExpandButton;
