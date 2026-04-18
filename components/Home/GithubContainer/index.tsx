"use client";
import { GitHubCalendar } from "react-github-calendar";
import GithubSectionHeader from "./GithubSectionHeading";

const GithubContainer = () => {
    return (
        <section className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
            <GithubSectionHeader />
            <div className="container border-x border-zinc-200 px-4 py-8 overflow-x-auto">
                <div className="flex justify-center lg:justify-start w-full min-w-max">
                    <GitHubCalendar
                        username="shuding" // Replace with your exact GitHub username, using a popular dev as placeholder
                        colorScheme="light"
                        blockSize={14}
                        blockMargin={4}
                        fontSize={14}
                    />
                </div>
            </div>
        </section>
    );
};

export default GithubContainer;
