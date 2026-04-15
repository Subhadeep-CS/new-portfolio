"use client";
import { GitHubCalendar } from "react-github-calendar";
import GithubSectionHeader from "./GithubSectionHeading";

const GithubContainer = () => {
    return (
        <section className="border-y border-zinc-200">
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
