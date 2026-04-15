import { SELF_HELP_BOOKS_DATA } from "@/utils/app_constant";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const SelfHelpBooksContainer = () => {
    return (
        <section className="border-y border-zinc-200 bg-white">
            <div className="container border-x border-zinc-200 px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {SELF_HELP_BOOKS_DATA.map((book, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row gap-6 p-6 border border-zinc-200 rounded-3xl hover:border-zinc-300 hover:shadow-sm transition-all bg-[#FAFAFA]">
                            {/* Realistic Book Cover */}
                            <div className="w-32 h-48 sm:w-40 sm:h-60 shrink-0 rounded-lg border border-zinc-300 overflow-hidden shadow-lg bg-white">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={book.coverUrl}
                                    alt={`${book.title} Cover`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-center flex-grow py-2">
                                <h4 className="text-[22px] font-bold text-zinc-900 leading-tight">{book.title}</h4>
                                <p className="text-[15px] font-medium text-emerald-600 mt-2 mb-4">By {book.author}</p>
                                <p className="text-[15px] text-zinc-600 leading-relaxed mb-6 flex-grow">{book.description}</p>

                                <Link
                                    href={book.buyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-zinc-900 font-semibold text-white text-[15px] rounded-xl hover:bg-zinc-800 transition-colors shadow-sm self-start active:scale-95"
                                >
                                    <span>Buy Book</span>
                                    <ExternalLink className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SelfHelpBooksContainer;
