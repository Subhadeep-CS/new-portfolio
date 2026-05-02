"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { Search, Folder, BookOpen, UserCircle, Github, Linkedin, MonitorPlay, TerminalSquare, Rotate3D, FileText } from "lucide-react";
import { useTheme } from "next-themes";

export default function CommandPalette() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const { setTheme } = useTheme();

    // Toggle the menu when ⌘K is pressed or event dispatched
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        const handleOpenEvent = () => setOpen(true);

        document.addEventListener("keydown", down);
        window.addEventListener("open-command-palette", handleOpenEvent);
        
        return () => {
            document.removeEventListener("keydown", down);
            window.removeEventListener("open-command-palette", handleOpenEvent);
        };
    }, []);

    const runCommand = (command: () => void) => {
        setOpen(false);
        command();
    };

    return (
        <Command.Dialog
            open={open}
            onOpenChange={setOpen}
            label="Global Command Menu"
            onPointerDown={(e) => {
                if (e.target === e.currentTarget) {
                    setOpen(false);
                }
            }}
            className="fixed inset-0 bg-white/40 dark:bg-black/60 backdrop-blur-sm z-[99999] flex items-start justify-center pt-[15vh] px-4 animate-in fade-in duration-200"
        >
            <div className="w-full max-w-[550px] bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200 ease-out">
                <div className="flex items-center px-4 py-4 border-b border-zinc-100 dark:border-zinc-800">
                    <Search className="w-[18px] h-[18px] text-zinc-400 mr-3 shrink-0" />
                    <Command.Input
                        autoFocus
                        placeholder="Type a command or search..."
                        className="w-full bg-transparent border-none outline-none text-[15px] text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 font-medium"
                    />
                    <div className="hidden sm:flex items-center gap-1">
                        <kbd className="px-2 py-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded text-[10px] items-center text-zinc-500 font-bold font-mono shadow-sm">ESC</kbd>
                    </div>
                </div>

                <Command.List className="max-h-[320px] overflow-y-auto p-2 scrollbar-hide">
                    <Command.Empty className="py-12 text-center text-sm font-medium text-zinc-500">No results found.</Command.Empty>

                    <Command.Group heading="Navigation" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-zinc-500 [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest mt-1">
                        <Command.Item
                            onSelect={() => runCommand(() => router.push("/"))}
                            className="flex items-center px-3 py-3 rounded-lg cursor-pointer text-[14px] font-medium text-zinc-700 dark:text-zinc-300 aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-900 aria-selected:text-zinc-900 dark:aria-selected:text-white transition-colors"
                        >
                            <UserCircle className="w-[18px] h-[18px] mr-3 text-blue-500" />
                            <span>Homepage / About Me</span>
                        </Command.Item>
                        <Command.Item
                            onSelect={() => runCommand(() => router.push("/projects"))}
                            className="flex items-center px-3 py-3 rounded-lg cursor-pointer text-[14px] font-medium text-zinc-700 dark:text-zinc-300 aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-900 aria-selected:text-zinc-900 dark:aria-selected:text-white transition-colors"
                        >
                            <Folder className="w-[18px] h-[18px] mr-3 text-orange-500" />
                            <span>Projects</span>
                        </Command.Item>
                        <Command.Item
                            onSelect={() => runCommand(() => router.push("/resources"))}
                            className="flex items-center px-3 py-3 rounded-lg cursor-pointer text-[14px] font-medium text-zinc-700 dark:text-zinc-300 aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-900 aria-selected:text-zinc-900 dark:aria-selected:text-white transition-colors"
                        >
                            <MonitorPlay className="w-[18px] h-[18px] mr-3 text-indigo-500" />
                            <span>Resources & Mentors</span>
                        </Command.Item>
                        <Command.Item
                            onSelect={() => runCommand(() => router.push("/library"))}
                            className="flex items-center px-3 py-3 rounded-lg cursor-pointer text-[14px] font-medium text-zinc-700 dark:text-zinc-300 aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-900 aria-selected:text-zinc-900 dark:aria-selected:text-white transition-colors"
                        >
                            <BookOpen className="w-[18px] h-[18px] mr-3 text-emerald-500" />
                            <span>Beyond Code (Library)</span>
                        </Command.Item>
                        <Command.Item
                            onSelect={() => runCommand(() => {
                                const link = document.createElement('a');
                                link.href = '/document/SUBHADEEP_DAS_CV_FRONTEND_ENGINEER.pdf';
                                link.download = 'Subhadeep_Das_CV_Frontend_Engineer.pdf';
                                link.click();
                            })}
                            className="flex items-center px-3 py-3 rounded-lg cursor-pointer text-[14px] font-medium text-zinc-700 dark:text-zinc-300 aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-900 aria-selected:text-zinc-900 dark:aria-selected:text-white transition-colors"
                        >
                            <FileText className="w-[18px] h-[18px] mr-3 text-red-500" />
                            <span>Download CV / Resume</span>
                            <span className="ml-auto text-[10px] text-zinc-400 uppercase tracking-widest font-semibold flex items-center gap-1">PDF</span>
                        </Command.Item>
                    </Command.Group>

                    <Command.Separator className="h-[1px] bg-zinc-100 dark:bg-zinc-800 my-2 mx-1" />

                    <Command.Group heading="Social Links" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-zinc-500 [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest">
                        <Command.Item
                            onSelect={() => runCommand(() => window.open("https://github.com/Subhadeep-CS", "_blank"))}
                            className="flex items-center px-3 py-3 rounded-lg cursor-pointer text-[14px] font-medium text-zinc-700 dark:text-zinc-300 aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-900 aria-selected:text-zinc-900 dark:aria-selected:text-white transition-colors"
                        >
                            <Github className="w-[18px] h-[18px] mr-3 text-zinc-500 dark:text-zinc-400" />
                            <span>GitHub Profile</span>
                            <span className="ml-auto text-[11px] text-zinc-400 uppercase tracking-widest font-semibold flex items-center gap-1">Open <span className="text-[14px]">↗</span></span>
                        </Command.Item>
                        <Command.Item
                            onSelect={() => runCommand(() => window.open("https://www.linkedin.com/in/subhadeep-das-frontend-dev", "_blank"))}
                            className="flex items-center px-3 py-3 rounded-lg cursor-pointer text-[14px] font-medium text-zinc-700 dark:text-zinc-300 aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-900 aria-selected:text-zinc-900 dark:aria-selected:text-white transition-colors"
                        >
                            <Linkedin className="w-[18px] h-[18px] mr-3 text-blue-600 dark:text-blue-500" />
                            <span>LinkedIn connection</span>
                            <span className="ml-auto text-[11px] text-zinc-400 uppercase tracking-widest font-semibold flex items-center gap-1">Open <span className="text-[14px]">↗</span></span>
                        </Command.Item>
                    </Command.Group>

                    <Command.Separator className="h-[1px] bg-zinc-100 dark:bg-zinc-800 my-2 mx-1" />

                    <Command.Group heading="Developer Extras" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-zinc-500 [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest">
                        <Command.Item
                            onSelect={() => runCommand(() => {
                                setTheme("dark");
                                console.log("%c INIT HACKER MODE... 🚀", "color: #00ff00; font-size: 20px; font-weight: bold; background: black; padding: 10px;");
                            })}
                            className="flex items-center px-3 py-3 rounded-lg cursor-pointer text-[14px] font-medium text-zinc-700 dark:text-zinc-300 aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-900 aria-selected:text-zinc-900 dark:aria-selected:text-emerald-400 transition-colors"
                        >
                            <TerminalSquare className="w-[18px] h-[18px] mr-3 text-emerald-500" />
                            <span>System: Enable Hacker Mode</span>
                        </Command.Item>
                        <Command.Item
                            onSelect={() => runCommand(() => {
                                document.body.style.transition = 'transform 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                                document.body.style.transform = 'rotate(360deg)';
                                setTimeout(() => {
                                    document.body.style.transition = '';
                                    document.body.style.transform = '';
                                }, 1500);
                            })}
                            className="flex items-center px-3 py-3 rounded-lg cursor-pointer text-[14px] font-medium text-zinc-700 dark:text-zinc-300 aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-900 aria-selected:text-zinc-900 dark:aria-selected:text-white transition-colors"
                        >
                            <Rotate3D className="w-[18px] h-[18px] mr-3 text-fuchsia-500" />
                            <span>Action: Do a barrel roll</span>
                        </Command.Item>
                    </Command.Group>

                </Command.List>
            </div>
        </Command.Dialog>
    );
}
