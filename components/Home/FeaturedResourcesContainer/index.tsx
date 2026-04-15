import { MENTORS_DATA } from "@/utils/app_constant";
import { User, ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const FeaturedResourcesContainer = () => {
    // Show only the first 2 mentors on the homepage as a preview
    const featuredMentors = MENTORS_DATA.slice(0, 2);

    return (
        <section className="border-y border-zinc-200">
            <div className="container border-x border-zinc-200 px-4 py-4">
                <h3 className="text-[19px] font-semibold text-zinc-900 border-l-2 border-blue-500 pl-3 leading-none">
                    Mentors & Inspirations
                </h3>
            </div>
            <div className="container border-x border-zinc-200 px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {featuredMentors.map((mentor, idx) => (
                        <Link
                            key={idx}
                            href={mentor.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col p-6 border border-zinc-200 rounded-2xl hover:bg-zinc-50 transition-colors"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center border border-zinc-200">
                                    <User className="w-6 h-6 text-zinc-600" />
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                            <h4 className="text-lg font-bold text-zinc-900">{mentor.name}</h4>
                            <p className="text-sm font-medium text-blue-600 mb-3">{mentor.role}</p>
                            <p className="text-sm text-zinc-600 leading-relaxed">{mentor.description}</p>
                        </Link>
                    ))}
                </div>

                <div className="flex justify-center border-t border-zinc-100 pt-8">
                    <Link
                        href="/resources"
                        className="group flex justify-center items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-[12px] font-medium hover:bg-zinc-800 transition-all shadow-sm hover:shadow active:scale-95"
                    >
                        Show All Resources
                        <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedResourcesContainer;
