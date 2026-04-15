import { SELF_HELP_BOOKS_DATA } from "@/utils/app_constant";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const FeaturedLibraryContainer = () => {
    // Show only the first 2 books
    const featuredBooks = SELF_HELP_BOOKS_DATA.slice(0, 2);

    return (
        <section className="border-y border-zinc-200">
            <div className="container border-x border-zinc-200 px-4 py-4 flex justify-between items-center bg-[#FAFAFA]">
                <h3 className="text-[19px] font-semibold text-zinc-900 border-l-2 border-emerald-500 pl-3 leading-none">
                    Beyond Code
                </h3>
            </div>
            <div className="container border-x border-zinc-200 px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {featuredBooks.map((book, idx) => (
                        <div key={idx} className="flex gap-5 p-5 border border-zinc-200 rounded-[20px] hover:bg-zinc-50 transition-colors">
                            <div className="w-24 h-36 shrink-0 rounded-[8px] border border-zinc-300 overflow-hidden shadow-sm bg-zinc-100">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={book.coverUrl}
                                    alt={`${book.title} Cover`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h4 className="text-[18px] font-bold text-zinc-900 leading-tight mb-0.5">{book.title}</h4>
                                <p className="text-[13px] font-semibold tracking-wide text-emerald-600 mb-3 border-b border-emerald-100 pb-2 w-max uppercase">By {book.author}</p>
                                <p className="text-[14px] text-zinc-600 line-clamp-3 leading-relaxed">{book.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center border-t border-zinc-100 pt-8">
                    <Link
                        href="/self-help"
                        className="group flex justify-center items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-[12px] font-medium hover:bg-zinc-800 transition-all shadow-sm active:scale-95"
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
