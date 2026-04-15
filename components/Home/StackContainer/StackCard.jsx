import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";

const StackCard = ({ tech }) => {
    const Icon = tech.icon;
    return (
        <>
            <Tooltip key={tech.name}>
                <TooltipTrigger asChild>
                    <Link
                        href={tech.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 border rounded-xl hover:bg-zinc-100 transition-colors w-16 h-16 flex items-center justify-center"
                    >
                        <Icon className="w-8 h-8" color={tech.color} />
                    </Link>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{tech.name}</p>
                </TooltipContent>
            </Tooltip>
        </>
    );
};

export default StackCard;