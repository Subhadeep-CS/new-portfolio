import { SELF_HELP_BOOKS_DATA } from "@/utils/app_constant";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const FeaturedLibraryContainer = () => {
    // Show only the first 2 books
    const featuredBooks = SELF_HELP_BOOKS_DATA.slice(0, 2);

    return (
        <section className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
            <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 py-4 flex justify-between items-center bg-[#FAFAFA] dark:bg-zinc-900/50">
                <h3 className="text-[19px] font-semibold text-zinc-900 dark:text-zinc-100 border-l-2 border-emerald-500 pl-3 leading-none">
                    Beyond Code
                </h3>
            </div>
            <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {featuredBooks.map((book, idx) => (
                        <div key={idx} className="group relative w-full h-[180px] [perspective:1000px] cursor-pointer">
                            <div className="w-full h-full relative transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] shadow-sm rounded-[20px] border border-zinc-200 dark:border-zinc-800">
                                {/* Front */}
                                <div className="absolute inset-0 [backface-visibility:hidden] flex gap-5 p-5 bg-white dark:bg-zinc-950/50 rounded-[20px]">
                                    <div className="w-24 h-full shrink-0 rounded-[8px] border border-zinc-300 dark:border-zinc-700 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                                        <img src={book.coverUrl} alt={`${book.title} Cover`} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h4 className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 leading-tight mb-0.5">{book.title}</h4>
                                        <p className="text-[13px] font-semibold tracking-wide text-emerald-600 dark:text-emerald-400 mb-3 border-b border-emerald-100 dark:border-emerald-900/30 pb-2 w-max uppercase">By {book.author}</p>
                                        <p className="text-[14px] text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed">{book.description}</p>
                                    </div>
                                </div>
                                {/* Back */}
                                <div className="absolute inset-0 h-full w-full rounded-[20px] bg-zinc-50 dark:bg-zinc-900 px-6 py-4 [transform:rotateX(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center text-center">
                                    <h4 className="text-[16px] font-bold text-emerald-600 dark:text-emerald-400 mb-2">My Takeaway</h4>
                                    <p className="text-[14px] text-zinc-700 dark:text-zinc-300 leading-relaxed italic line-clamp-4">
                                        &quot;{book.description || "A transformative read that profoundly impacted my journey"}&quot;
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center border-t border-zinc-100 dark:border-zinc-800 pt-8">
                    <Link
                        href="/library"
                        className="group flex justify-center items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-[12px] font-medium hover:bg-zinc-800 dark:hover:bg-white transition-all shadow-sm active:scale-95"
                    >
                        Explore The Library
                        <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedLibraryContainer;
