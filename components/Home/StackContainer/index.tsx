"use client";

import StackSectionHeader from "./StackSectionHeading";
import { TECH_STACK } from "@/utils/app_constant";
import StackCard from "./StackCard";

const StackContainer = () => {
    return (
        <section className="divide-y border-y">
            <StackSectionHeader />
            <div className="container border-x px-4 py-8">
                <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-start">
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
