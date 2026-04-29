"use client";
import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";

const TARGET_TIMEZONE = "Asia/Kolkata";

export const LiveClock = () => {
    const [timeString, setTimeString] = useState<string>("");
    const [diffString, setDiffString] = useState<string>("");

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();

            // Format time for the target timezone
            const targetTime = now.toLocaleTimeString("en-US", {
                timeZone: TARGET_TIMEZONE,
                hour12: false,
                hour: "numeric",
                minute: "numeric",
            });
            setTimeString(targetTime);

            // Calculate timezone difference
            const targetDateStr = now.toLocaleString("en-US", { timeZone: TARGET_TIMEZONE });
            const localDateStr = now.toLocaleString("en-US");

            const targetTimeMs = new Date(targetDateStr).getTime();
            const localTimeMs = new Date(localDateStr).getTime();

            const diffHours = (targetTimeMs - localTimeMs) / (1000 * 60 * 60);

            let diffText = "same time";
            if (diffHours > 0) {
                diffText = `${diffHours}h ahead`;
            } else if (diffHours < 0) {
                diffText = `${Math.abs(diffHours)}h behind`;
            }

            setDiffString(diffText);
        };

        updateClock();
        const intervalId = setInterval(updateClock, 10000); // update every 10 secs
        return () => clearInterval(intervalId);
    }, []);

    // Display a loader or nothing until client hydrates to avoid hydration mismatch
    if (!timeString) {
        return (
            <div className="flex items-center gap-2 bg-transparent p-2 rounded-2xl">
                <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 shrink-0">
                    <Clock className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                </div>
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">--:--</span>
            </div>
        );
    }

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 bg-transparent hover:bg-zinc-50 dark:hover:bg-zinc-900 p-2 rounded-2xl transition-colors cursor-pointer"
        >
            <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 shrink-0">
                <Clock className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <span>{timeString}</span>
                <span className="text-zinc-400 dark:text-zinc-600">//</span>
                <span className="text-zinc-500 dark:text-zinc-400">{diffString}</span>
            </div>
        </motion.div>
    );
};

export default LiveClock;
