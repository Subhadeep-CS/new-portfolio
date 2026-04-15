import { BOOKS_DATA } from "@/utils/app_constant";
import { BookOpen, ExternalLink } from "lucide-react";
import Link from "next/link";

const BooksContainer = () => {
    return (
        <section className="border-y border-zinc-200">
            <div className="container border-x border-zinc-200 px-4 py-4">
                <h3 className="text-[19px] font-semibold text-zinc-900 border-l-2 border-blue-500 pl-3 leading-none">
                    Books I Recommend
                </h3>
            </div>
            <div className="container border-x border-zinc-200 px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {BOOKS_DATA.map((book, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row gap-6 p-6 border border-zinc-200 rounded-2xl hover:bg-zinc-50 transition-colors">
                            {/* Spine/Cover Simulation */}
                            <div className={`w-24 h-32 shrink-0 rounded-md border ${book.themeBorder} ${book.theme} flex items-center justify-center shadow-sm`}>
                                <BookOpen className="w-8 h-8 text-black/40" />
                            </div>
                            <div className="flex flex-col justify-center flex-grow">
                                <h4 className="text-xl font-bold text-zinc-900 leading-tight">{book.title}</h4>
                                <p className="text-[15px] font-medium text-zinc-500 mt-1 mb-3">By {book.author}</p>
                                <p className="text-sm text-zinc-600 leading-relaxed mb-4">{book.description}</p>

                                <Link
                                    href={book.buyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-blue-600 self-start transition-colors"
                                >
                                    <span>Get Book</span>
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

export default BooksContainer;
