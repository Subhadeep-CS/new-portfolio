import { CERTIFICATION_DATA } from "@/utils/app_constant";
import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";

const CertificationsContainer = () => {
    return (
        <section className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
            <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 py-4">
                <h3 className="text-[19px] font-semibold text-zinc-900 dark:text-zinc-100 border-l-2 border-blue-500 pl-3 leading-none">
                    Certifications
                </h3>
            </div>
            <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {CERTIFICATION_DATA.map((cert, idx) => (
                        <Link 
                            key={idx} 
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors group cursor-pointer"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-[10px] bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-500/20 group-hover:scale-110 transition-transform">
                                    <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{cert.title}</h4>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{cert.issuer}</p>
                                </div>
                            </div>
                            <ExternalLink className="w-5 h-5 text-zinc-400 group-hover:text-blue-500 transition-colors shrink-0" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default CertificationsContainer;
