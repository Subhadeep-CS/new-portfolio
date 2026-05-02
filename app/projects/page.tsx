import ProjectShowcase from "@/components/Projects/ProjectShowcase";
import CrossDivider from "@/components/Layout/common/CrossDivider";
import ConnectContainer from "@/components/Home/ConnectContainer";
import PageHeader from "@/components/Layout/common/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Subhadeep Das",
  description: "A showcase of engineering projects by Subhadeep Das, ranging from enterprise dashboards to creative frontend experiments.",
};

const ProjectsPage = () => {
  return (
    <section className="flex flex-col py-4">
      <PageHeader
        title={<>My Engineering <br /><span className="text-blue-500">Journey.</span></>}
        subtitle="From building simple UI components to architecting complex, production-grade platforms. Each project represents a milestone in my growth as a Frontend Engineer."
        backgroundText="CREATIVE CODE"
      />

      <CrossDivider />

      {/* Showcase Section */}
      <div className="bg-white dark:bg-zinc-950 border-y-1 border-x-1 ">
        <ProjectShowcase />
      </div>

      <CrossDivider />

      {/* Footer Contact */}
      <ConnectContainer />
    </section>
  );
};

export default ProjectsPage;
