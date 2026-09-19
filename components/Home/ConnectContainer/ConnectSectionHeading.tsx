import { Sparkles } from "lucide-react";

const ConnectSectionHeader = () => {
    return (
        <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 sm:px-6 py-6 sm:py-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                            Available for work
                        </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight flex items-center gap-2.5">
                        Let's Connect
                        <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                        I'm currently open to Frontend Software Engineer opportunities. If you're hiring for React.js, Next.js or TypeScript roles, I'd be happy to connect.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ConnectSectionHeader;

