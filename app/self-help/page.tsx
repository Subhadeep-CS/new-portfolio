import CrossDivider from "@/components/Layout/common/CrossDivider";
import SelfHelpBooksContainer from "@/components/SelfHelp/SelfHelpBooksContainer";
import ConnectContainer from "@/components/Home/ConnectContainer";

export default function SelfHelp() {
    return (
        <section className="flex flex-col py-4">
            <div className="border-y border-zinc-200 bg-zinc-50/50 flex flex-col justify-center px-4 py-16">
                <div className="container border-x border-zinc-100 flex flex-col justify-center px-4 py-8">
                    <h1 className="text-[28px] font-bold text-zinc-900 mb-4 border-l-4 border-emerald-500 pl-4 leading-tight">
                        Habits & Mindset
                    </h1>
                    <p className="text-[16px] text-zinc-600 max-w-2xl pl-4 leading-relaxed">
                        Programming is only half the battle. This is a collection of non-technical self-help books that have helped me overcome procrastination, build solid foundational habits, and cultivate the discipline required to grow consistently in my day-to-day life.
                    </p>
                </div>
            </div>

            <CrossDivider />
            <SelfHelpBooksContainer />

            <CrossDivider />
            <ConnectContainer />
        </section>
    );
}
