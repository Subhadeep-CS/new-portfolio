import ConnectSectionHeader from './ConnectSectionHeading';
import Link from 'next/link';
import { Linkedin, Github, Mail, FileText } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import MagneticWrapper from '@/components/Layout/common/MagneticWrapper';

const socials = [
    { name: 'Email', url: 'mailto:dassubhadeep631@gmail.com', icon: Mail, color: '#EA4335', external: false },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/subhadeep-das-frontend-dev', icon: Linkedin, color: '#0A66C2', external: true },
    { name: 'GitHub', url: 'https://github.com/Subhadeep-CS', icon: Github, color: '#181717', external: true },
    { name: 'Resume', url: '/resume', icon: FileText, color: '#3B82F6', external: false },
    { name: 'WhatsApp', url: 'https://wa.me/919874669132', icon: SiWhatsapp, color: '#25D366', external: true },
];

const ConnectContainer = () => {
    return (
        <section className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
            <ConnectSectionHeader />
            <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 py-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4 w-full">
                    {socials.map((social) => {
                        const Icon = social.icon;
                        return (
                            <MagneticWrapper key={social.name}>
                                <div className="h-full w-full">
                                    <Link
                                        href={social.url}
                                        target={social.external ? "_blank" : undefined}
                                        rel={social.external ? "noopener noreferrer" : undefined}
                                        className="flex gap-2 sm:gap-3 p-2.5 sm:p-4 bg-white dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 group shadow-sm items-center w-full"
                                    >
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-lg flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 group-hover:scale-110 transition-transform duration-300">
                                            <Icon 
                                                className={`w-4 h-4 sm:w-5 sm:h-5 ${
                                                    social.name === "GitHub" ? "text-zinc-900 dark:text-zinc-50" : ""
                                                }`} 
                                                style={social.name === "GitHub" ? undefined : { color: social.color }} 
                                            />
                                        </div>
                                        <span className="font-semibold text-xs sm:text-sm text-zinc-800 dark:text-zinc-100 tracking-wide truncate">{social.name}</span>
                                    </Link>
                                </div>
                            </MagneticWrapper>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ConnectContainer;
