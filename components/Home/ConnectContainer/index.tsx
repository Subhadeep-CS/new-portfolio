import ConnectSectionHeader from './ConnectSectionHeading';
import Link from 'next/link';
import { Linkedin, Facebook, Github, Instagram } from 'lucide-react';
import MagneticWrapper from '@/components/Layout/common/MagneticWrapper';

const socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/subhadeep-das-frontend-dev', icon: Linkedin, color: '#0A66C2' },
    { name: 'GitHub', url: 'https://github.com/', icon: Github, color: '#181717' },
    { name: 'Facebook', url: 'https://facebook.com/', icon: Facebook, color: '#1877F2' },
    { name: 'Instagram', url: 'https://instagram.com/', icon: Instagram, color: '#E4405F' },
];

const ConnectContainer = () => {
    return (
        <section className="border-y border-zinc-200">
            <ConnectSectionHeader />
            <div className="container border-x border-zinc-200 px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {socials.map((social) => {
                        const Icon = social.icon;
                        return (
                            <MagneticWrapper key={social.name}>
                                <div className="h-full w-full">
                                    <Link
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-4 border border-zinc-200 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:border-zinc-300 transition-all group active:scale-95 duration-200 w-full"
                                    >
                                        <div className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center bg-white dark:bg-black border border-zinc-100 dark:border-zinc-800 shadow-sm transition-transform duration-300">
                                            <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" style={{ color: social.color }} />
                                        </div>
                                        <span className="font-medium text-zinc-800 dark:text-zinc-200">{social.name}</span>
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
