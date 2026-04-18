import { BOOKMARK_DATA } from "@/utils/app_constant";
import { Bookmark } from "lucide-react";

const BookmarkContainer = () => {
    return (
        <section className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
            <div className="container border-x border-zinc-200 px-4 py-4">
                <h3 className="text-[19px] font-semibold text-zinc-900 border-l-2 border-blue-500 pl-3 leading-none">
                    Bookmarks
                </h3>
            </div>
            <div className="container border-x border-zinc-200 px-4 py-8">
                <div className="grid grid-cols-1 gap-4">
                    {BOOKMARK_DATA.map((bm, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-zinc-200 rounded-xl hover:bg-zinc-50 transition-colors gap-4">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-[10px] bg-zinc-100 border border-zinc-200 flex items-center justify-center shrink-0">
                                    <Bookmark className="w-5 h-5 text-zinc-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-zinc-900">{bm.title}</h4>
                                    <p className="text-sm text-zinc-500 mt-1 leading-relaxed max-w-lg">{bm.description}</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center px-4 py-2 sm:py-0 bg-white border border-zinc-100 rounded-lg shadow-sm shrink-0">
                                <span className="text-[22px] font-bold text-zinc-800">{bm.count}</span>
                                <span className="text-[10px] text-zinc-400 font-semibold uppercase tracking-wider">Saved</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default BookmarkContainer;
