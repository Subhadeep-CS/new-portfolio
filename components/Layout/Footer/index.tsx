import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t border-zinc-200 py-10 text-center bg-[#FAFAFA] dark:bg-zinc-950 mt-auto">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center text-[15px] text-zinc-500 font-medium space-y-4">

                <p className="flex items-center justify-center flex-wrap gap-1.5">
                    <span className="text-zinc-600 dark:text-zinc-400">Inspired by</span>
                    <Link href="https://x.com/iamncdai" target="_blank" className="font-semibold text-zinc-800 dark:text-zinc-200 hover:underline">ncdai</Link>
                    <span className="text-zinc-400">/</span>
                    <Link href="https://tailwindcss.com" target="_blank" className="font-semibold text-zinc-800 dark:text-zinc-200 hover:underline">tailwindcss.com</Link>
                    <span className="text-zinc-400">/</span>
                    <Link href="https://ui.shadcn.com" target="_blank" className="font-semibold text-zinc-800 dark:text-zinc-200 hover:underline">ui.shadcn.com</Link>
                    <span className="text-zinc-400">/</span>
                    <Link href="https://vercel.com" target="_blank" className="font-semibold text-zinc-800 dark:text-zinc-200 hover:underline">vercel.com</Link>
                </p>

                <p>
                    Built by <Link href="https://github.com/Subhadeep-CS" target="_blank" className="font-bold text-zinc-900 dark:text-white hover:underline">Subhadeep</Link>. The source code is available on <Link href="https://github.com/Subhadeep-CS/new-portfolio" target="_blank" className="font-bold text-zinc-900 dark:text-white hover:underline whitespace-nowrap">GitHub</Link>.
                </p>

            </div>
        </footer>
    );
};

export default Footer;
