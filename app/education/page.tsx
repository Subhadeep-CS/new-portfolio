import CrossDivider from "@/components/Layout/common/CrossDivider";
import PageHeader from "@/components/Layout/common/PageHeader";
import ConnectContainer from "@/components/Home/ConnectContainer";
import EducationTimeline from "@/components/Education/EducationTimeline";

export default function Education() {
    return (
        <section className="flex flex-col py-4">
            <PageHeader 
                title={<>My <br /><span className="text-blue-500">Education.</span></>}
                subtitle="The academic foundation and continuous learning that shaped my software engineering journey."
                backgroundText="LEARNING"
            />

            <CrossDivider />
            
            <div className="container border-x border-zinc-200 dark:border-zinc-800 relative py-12 px-4 md:px-0">
               <EducationTimeline />
            </div>

            <CrossDivider />
            <ConnectContainer />
        </section>
    );
}
