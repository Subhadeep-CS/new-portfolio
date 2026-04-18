import { HONOR_AWARD_DATA } from "@/utils/app_constant";
import { Trophy } from "lucide-react";

const HonorRewardContainer = () => {
    return (
        <section className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
            <div className="container border-x border-zinc-200 px-4 py-4">
                <h3 className="text-[19px] font-semibold text-zinc-900 border-l-2 border-blue-500 pl-3 leading-none">
                    Honors & Rewards
                </h3>
            </div>
            <div className="container border-x border-zinc-200 px-4 py-8">
                <div className="grid grid-cols-1 gap-4">
                    {HONOR_AWARD_DATA.map((award, idx) => (
                        <div key={idx} className="flex gap-4 p-4 border border-zinc-200 rounded-xl hover:bg-zinc-50 transition-colors">
                            <div className="w-10 h-10 rounded-[10px] bg-yellow-50 flex items-center justify-center shrink-0 border border-yellow-100">
                                <Trophy className="w-5 h-5 text-yellow-600" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-zinc-900">{award.title}</h4>
                                <p className="text-sm text-zinc-500 mt-1">{award.issuer} • {award.date}</p>
                                <p className="text-[15px] text-zinc-600 mt-2 leading-relaxed">{award.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default HonorRewardContainer;
