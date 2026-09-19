"use client";

import React, { useState } from 'react';
import ConnectSectionHeader from './ConnectSectionHeading';
import Link from 'next/link';
import { Linkedin, Github, Mail, FileText, ArrowUpRight, Check } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import MagneticWrapper from '@/components/Layout/common/MagneticWrapper';
import { motion, AnimatePresence } from 'framer-motion';

const socials = [
    {
        name: 'Email',
        subText: 'dassubhadeep631@gmail.com',
        actionText: 'Send Email',
        url: 'mailto:dassubhadeep631@gmail.com',
        icon: Mail,
        color: '#EA4335',
        borderColor: 'hover:border-red-500/40 dark:hover:border-red-500/40',
        bgHover: 'hover:bg-red-50/40 dark:hover:bg-red-950/20',
        glowShadow: 'group-hover:shadow-[0_8px_30px_rgb(234,67,53,0.15)]',
        external: false,
        isEmail: true,
        emailValue: 'dassubhadeep631@gmail.com'
    },
    {
        name: 'LinkedIn',
        subText: 'in/subhadeep-das',
        actionText: 'Let\'s Connect',
        url: 'https://www.linkedin.com/in/subhadeep-das-frontend-dev',
        icon: Linkedin,
        color: '#0A66C2',
        borderColor: 'hover:border-sky-500/40 dark:hover:border-sky-500/40',
        bgHover: 'hover:bg-sky-50/40 dark:hover:bg-sky-950/20',
        glowShadow: 'group-hover:shadow-[0_8px_30px_rgb(10,102,194,0.15)]',
        external: true
    },
    {
        name: 'GitHub',
        subText: '@Subhadeep-CS',
        actionText: 'View Repos',
        url: 'https://github.com/Subhadeep-CS',
        icon: Github,
        color: '#181717',
        borderColor: 'hover:border-purple-500/40 dark:hover:border-purple-500/40',
        bgHover: 'hover:bg-purple-50/40 dark:hover:bg-purple-950/20',
        glowShadow: 'group-hover:shadow-[0_8px_30px_rgb(168,85,247,0.15)]',
        external: true
    },
    {
        name: 'Resume',
        subText: 'PDF Format',
        actionText: 'Download CV',
        url: '/resume',
        icon: FileText,
        color: '#3B82F6',
        borderColor: 'hover:border-blue-500/40 dark:hover:border-blue-500/40',
        bgHover: 'hover:bg-blue-50/40 dark:hover:bg-blue-950/20',
        glowShadow: 'group-hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)]',
        external: false
    },
    {
        name: 'WhatsApp',
        subText: '+91 98746 69132',
        actionText: 'Direct Message',
        url: 'https://wa.me/919874669132',
        icon: SiWhatsapp,
        color: '#25D366',
        borderColor: 'hover:border-emerald-500/40 dark:hover:border-emerald-500/40',
        bgHover: 'hover:bg-emerald-50/40 dark:hover:bg-emerald-950/20',
        glowShadow: 'group-hover:shadow-[0_8px_30px_rgb(37,211,102,0.15)]',
        external: true
    },
];

const ConnectContainer = () => {
    const [showToast, setShowToast] = useState(false);

    const handleEmailClick = (email: string) => {
        navigator.clipboard.writeText(email);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <section className="relative divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/30">
            <ConnectSectionHeader />
            <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 sm:px-6 py-6 sm:py-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 w-full">
                    {socials.map((social, index) => {
                        const Icon = social.icon;
                        const isLast = index === 4;

                        return (
                            <MagneticWrapper 
                                key={social.name} 
                                className={`h-full w-full ${isLast ? "col-span-2 sm:col-span-1" : ""}`}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.35, delay: index * 0.07 }}
                                    className="h-full w-full"
                                >
                                    <Link
                                        href={social.url}
                                        target={social.external ? "_blank" : undefined}
                                        rel={social.external ? "noopener noreferrer" : undefined}
                                        onClick={() => social.isEmail && handleEmailClick(social.emailValue!)}
                                        className={`relative flex flex-col justify-between p-4 sm:p-5 h-full min-h-[115px] sm:min-h-[135px] bg-white dark:bg-zinc-900/70 border border-zinc-200/90 dark:border-zinc-800/90 rounded-2xl ${social.borderColor} ${social.bgHover} ${social.glowShadow} hover:-translate-y-1.5 transition-all duration-300 group shadow-sm overflow-hidden`}
                                    >
                                        {/* Background ambient radial glow effect on card hover */}
                                        <div 
                                            className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                                            style={{ backgroundColor: social.color }}
                                        />

                                        {/* Top Row: Icon Container on top-left + Action Arrow on top-right */}
                                        <div className="flex items-center justify-between w-full mb-3 sm:mb-3.5">
                                            <div 
                                                className="w-9.5 h-9.5 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center bg-zinc-100/90 dark:bg-zinc-800/90 border border-zinc-200/80 dark:border-zinc-700/60 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner shrink-0"
                                            >
                                                <Icon 
                                                    className={`w-4.5 h-4.5 sm:w-5 sm:h-5 ${
                                                        social.name === "GitHub" ? "text-zinc-900 dark:text-zinc-50" : ""
                                                    }`} 
                                                    style={social.name === "GitHub" ? undefined : { color: social.color }} 
                                                />
                                            </div>

                                            <div className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center bg-zinc-100/80 dark:bg-zinc-800/60 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-hover:bg-zinc-200/70 dark:group-hover:bg-zinc-700/70 transition-all duration-300 shrink-0">
                                                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                            </div>
                                        </div>

                                        {/* Bottom Row: Title + Action Subtext */}
                                        <div className="flex flex-col space-y-0.5 z-10">
                                            <span className="font-bold text-xs sm:text-base text-zinc-900 dark:text-zinc-100 tracking-tight whitespace-nowrap">
                                                {social.name}
                                            </span>
                                            <span className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors whitespace-nowrap">
                                                {social.actionText}
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            </MagneticWrapper>
                        );
                    })}
                </div>
            </div>

            {/* Toast Notification when Email is Clicked */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl shadow-xl border border-zinc-700/50 dark:border-zinc-300/50"
                    >
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 dark:text-emerald-600 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-semibold">
                            Email copied to clipboard!
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ConnectContainer;


