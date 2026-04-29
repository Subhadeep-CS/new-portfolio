import { OTHER_RESOURCES_DATA } from "@/utils/app_constant";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const HelpfulLinksContainer = () => {
    return (
        <section className="border-y border-zinc-200 dark:border-zinc-800">
            <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 py-4">
                <h3 className="text-[19px] font-semibold text-zinc-900 dark:text-zinc-100 border-l-2 border-blue-500 pl-3 leading-none">
                    Helpful Resources
                </h3>
            </div>
            <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {OTHER_RESOURCES_DATA.map((resource, idx) => (
                        <Link
                            key={idx}
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col p-5 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="text-md font-bold text-zinc-900 dark:text-zinc-100">{resource.title}</h4>
                                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                            </div>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pr-8">{resource.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HelpfulLinksContainer;
