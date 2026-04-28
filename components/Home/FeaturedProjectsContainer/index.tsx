import { PROJECTS_DATA } from "@/utils/app_constant";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import ExpandButton from "@/components/Layout/common/ExpandButton";

const FeaturedProjectsContainer = () => {
    // Show only the first 2-3 projects as featured
    const featuredProjects = PROJECTS_DATA.slice(0, 3);

    return (
        <section className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
            <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 py-4 flex justify-between items-center bg-[#FAFAFA] dark:bg-zinc-900/50">
                <h3 className="text-[19px] font-semibold text-zinc-900 dark:text-zinc-100 border-l-2 border-blue-500 pl-3 leading-none">
                    Featured Projects
                </h3>
            </div>
            <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {featuredProjects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group flex flex-col p-6 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-300 hover:shadow-md"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 rounded-md border border-zinc-200 dark:border-zinc-700">
                                    {project.year}
                                </span>
                                <div className="flex gap-2">
                                    {project.github && project.github !== "#" && (
                                        <Link href={project.github} target="_blank" className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors">
                                            <Github className="w-4 h-4" />
                                        </Link>
                                    )}
                                    {project.link && project.link !== "#" && (
                                        <Link href={project.link} target="_blank" className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors">
                                            <ExternalLink className="w-4 h-4" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                            <h4 className="text-[17px] font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-500 transition-colors mb-2">
                                {project.title}
                            </h4>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2 mb-4">
                                {project.description}
                            </p>
                            <div className="mt-auto flex flex-wrap gap-1.5">
                                {project.tech.slice(0, 3).map((t, i) => (
                                    <span key={i} className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-500">
                                        #{t.replace(/\s+/g, '')}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center border-t border-zinc-100 dark:border-zinc-800 pt-8">
                    <ExpandButton 
                        isLink 
                        href="/projects" 
                        label="View All Projects" 
                    />
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjectsContainer;
