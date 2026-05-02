import { BOOKMARK_DATA } from "@/utils/app_constant";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const BookmarkContainer = () => {
    return (
        <section className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
            <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 py-4 flex justify-between items-center bg-[#FAFAFA] dark:bg-zinc-900/50">
                <h3 className="text-[19px] font-semibold text-zinc-900 dark:text-zinc-100 border-l-2 border-orange-500 pl-3 leading-none">
                    Bookmarks
                </h3>
            </div>
            <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 py-8">
                <div className="grid grid-cols-1 gap-4">
                    {BOOKMARK_DATA.map((bm, idx) => (
                        <Link
                            key={idx}
                            href={bm.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col sm:flex-row sm:items-center justify-between p-5 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-950/50 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-300 gap-4"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-white dark:group-hover:bg-zinc-800 transition-all shadow-sm">
                                    <bm.icon className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h4 className="font-bold text-[17px] text-zinc-900 dark:text-zinc-100 leading-tight group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                                            {bm.title}
                                        </h4>
                                        <ArrowUpRight className="w-4 h-4 text-zinc-300 dark:text-zinc-700 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                                    </div>
                                    <p className="text-[14px] text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed max-w-xl">
                                        {bm.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BookmarkContainer;
