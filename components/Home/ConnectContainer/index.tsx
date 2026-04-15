import ConnectSectionHeader from './ConnectSectionHeading';
import Link from 'next/link';
import { Linkedin, Facebook, Github, Instagram } from 'lucide-react';

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
                            <Link
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-4 border border-zinc-200 rounded-xl hover:bg-zinc-50 hover:border-zinc-300 transition-all group"
                            >
                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-zinc-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-5 h-5" style={{ color: social.color }} />
                                </div>
                                <span className="font-medium text-zinc-800">{social.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ConnectContainer;
