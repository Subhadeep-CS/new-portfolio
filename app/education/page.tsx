import CrossDivider from "@/components/Layout/common/CrossDivider";
import PageHeader from "@/components/Layout/common/PageHeader";
import ConnectContainer from "@/components/Home/ConnectContainer";
import EducationTimeline from "@/components/Education/EducationTimeline";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Education | Subhadeep Das",
    description: "Academic background and continuous learning journey of Subhadeep Das, featuring degrees and specialized certifications.",
};

export default function Education() {
    return (
        <section className="flex flex-col py-4">
            <PageHeader
                title={<>My <br /><span className="text-blue-500">Education.</span></>}
                subtitle="The academic foundation and continuous learning that shaped my software engineering journey."
                backgroundText="LEARNING"
            />

            <CrossDivider />
            <div className="relative w-full border-y-1">
                <div className="container py-8 px-4 md:px-0 border-x-1 border-zinc-200 dark:border-zinc-800">
                    <EducationTimeline />
                </div>
            </div>

            <CrossDivider />
            <ConnectContainer />
        </section>
    );
}
