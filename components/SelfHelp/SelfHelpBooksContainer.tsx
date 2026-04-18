"use client";
import { SELF_HELP_BOOKS_DATA } from "@/utils/app_constant";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const SelfHelpBooksContainer = () => {
    return (
        <section className="bg-white dark:bg-zinc-950 py-16">
            <div className="container px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {SELF_HELP_BOOKS_DATA.map((book, idx) => (
                        <div key={idx} className="group relative w-full h-[220px] [perspective:1000px] cursor-pointer">
                            <div className="w-full h-full relative transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] shadow-sm rounded-[24px] border border-zinc-200 dark:border-zinc-800">
                                {/* Front Side */}
                                <div className="absolute inset-0 [backface-visibility:hidden] flex gap-6 p-6 bg-white dark:bg-zinc-950 rounded-[24px]">
                                    <div className="w-28 h-full shrink-0 rounded-[12px] border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-100 dark:bg-zinc-900 shadow-sm">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img 
                                            src={book.coverUrl} 
                                            alt={`${book.title} Cover`} 
                                            className="w-full h-full object-cover" 
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center py-2">
                                        <h4 className="text-[20px] font-bold text-zinc-900 dark:text-zinc-100 leading-tight mb-1 line-clamp-2">
                                            {book.title}
                                        </h4>
                                        <p className="text-[14px] font-semibold tracking-wide text-emerald-600 dark:text-emerald-400 mb-3 uppercase">
                                            By {book.author}
                                        </p>
                                        <div className="h-[1px] w-12 bg-zinc-100 dark:bg-zinc-800 mb-3" />
                                        <p className="text-[14px] text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed italic">
                                            {book.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Back Side */}
                                <div className="absolute inset-0 h-full w-full rounded-[24px] bg-zinc-900 dark:bg-zinc-900 px-8 py-6 [transform:rotateX(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center text-center">
                                    <h4 className="text-[16px] font-bold text-emerald-400 mb-3 uppercase tracking-widest">My Takeaway</h4>
                                    <p className="text-[14px] text-zinc-300 leading-relaxed italic line-clamp-3 mb-6">
                                        &quot;{book.description}&quot;
                                    </p>
                                    
                                    <Link
                                        href={book.buyLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-white text-[13px] font-bold rounded-full transition-all active:scale-95 shadow-lg shadow-emerald-500/20"
                                    >
                                        <span>Get Your Copy</span>
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SelfHelpBooksContainer;


