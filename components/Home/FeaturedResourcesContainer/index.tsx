import { MENTORS_DATA } from "@/utils/app_constant";
import { User, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ExpandButton from "@/components/Layout/common/ExpandButton";

const FeaturedResourcesContainer = () => {
    // Show only the first 2 mentors on the homepage as a preview
    const featuredMentors = MENTORS_DATA.slice(0, 2);

    return (
        <section className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
            <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 py-4">
                <h3 className="text-[19px] font-semibold text-zinc-900 dark:text-zinc-100 border-l-2 border-blue-500 pl-3 leading-none">
                    Mentors & Inspirations
                </h3>
            </div>
            <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {featuredMentors.map((mentor, idx) => (
                        <Link
                            key={idx}
                            href={mentor.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col p-6 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
                                    <User className="w-6 h-6 text-zinc-600 dark:text-zinc-400" />
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                            <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{mentor.name}</h4>
                            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">{mentor.role}</p>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{mentor.description}</p>
                        </Link>
                    ))}
                </div>

                <div className="flex justify-center border-t border-zinc-100 dark:border-zinc-800 pt-8">
                    <ExpandButton 
                        isLink 
                        href="/resources" 
                        label="Show All Resources" 
                    />
                </div>
            </div>
        </section>
    );
};

export default FeaturedResourcesContainer;
