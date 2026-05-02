import ConnectSectionHeader from './ConnectSectionHeading';
import Link from 'next/link';
import { Linkedin, Facebook, Github } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import MagneticWrapper from '@/components/Layout/common/MagneticWrapper';

const socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/subhadeep-das-frontend-dev', icon: Linkedin, color: '#0A66C2' },
    { name: 'GitHub', url: 'https://github.com/Subhadeep-CS', icon: Github, color: '#181717' },
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100043405891398', icon: Facebook, color: '#1877F2' },
    { name: 'WhatsApp', url: 'https://wa.me/919874669132', icon: SiWhatsapp, color: '#25D366' },
];

const ConnectContainer = () => {
    return (
        <section className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
            <ConnectSectionHeader />
            <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                    {socials.map((social) => {
                        const Icon = social.icon;
                        return (
                            <MagneticWrapper key={social.name}>
                                <div className="h-full w-full">
                                    <Link
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex gap-3 p-4 bg-white dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 group shadow-sm items-center w-full"
                                    >
                                        <div className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-5 h-5" style={{ color: social.color }} />
                                        </div>
                                        <span className="font-medium text-[16px] text-zinc-800 dark:text-zinc-200 tracking-wide">{social.name}</span>
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
