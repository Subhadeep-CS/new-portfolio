import { BOOKMARK_DATA } from "@/utils/app_constant";
import { Bookmark, ArrowUpRight } from "lucide-react";
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
                            className="group flex flex-col sm:flex-row sm:items-center justify-between p-5 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-950/50 hover:border-orange-500/50 dark:hover:border-orange-500/30 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-300 gap-4 relative overflow-hidden"
                        >
                            {/* Accent line on hover */}
                            <div className={`absolute left-0 top-0 bottom-0 w-1 ${bm.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                            
                            <div className="flex items-start gap-4">
                                <div className={`w-12 h-12 rounded-2xl ${bm.color} bg-opacity-10 dark:bg-opacity-20 border border-zinc-100 dark:border-zinc-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                    <Bookmark className={`w-6 h-6 ${bm.color.replace('bg-', 'text-')}`} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h4 className="font-bold text-[17px] text-zinc-900 dark:text-zinc-100 leading-tight">
                                            {bm.title}
                                        </h4>
                                        <ArrowUpRight className="w-4 h-4 text-zinc-300 dark:text-zinc-700 group-hover:text-orange-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                                    </div>
                                    <p className="text-[14px] text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed max-w-xl">
                                        {bm.description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex sm:flex-col items-center justify-center px-4 py-2 sm:py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl shadow-sm shrink-0 min-w-[80px]">
                                <span className="text-[20px] font-black text-zinc-900 dark:text-zinc-100 leading-none mb-0.5">{bm.count}</span>
                                <span className="text-[9px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-widest">Items</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BookmarkContainer;
