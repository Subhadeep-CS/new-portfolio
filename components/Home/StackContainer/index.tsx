"use client";

import StackSectionHeader from "./StackSectionHeading";
import { TECH_STACK } from "@/utils/app_constant";
import StackCard from "./StackCard";

const StackContainer = () => {
    return (
        <section className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
            <StackSectionHeader />
            <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 py-8">
                <div className="grid grid-cols-4 lg:grid-cols-9 gap-2 md:gap-3 w-full mx-auto justify-items-center">
                    {TECH_STACK.map((tech) => {
                        return (
                            <StackCard key={tech.name} tech={tech} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default StackContainer;
