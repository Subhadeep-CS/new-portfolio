import ProjectTimeline from "@/components/Projects/ProjectTimeline";
import CrossDivider from "@/components/Layout/common/CrossDivider";
import ConnectContainer from "@/components/Home/ConnectContainer";
import PageHeader from "@/components/Layout/common/PageHeader";

const ProjectsPage = () => {
  return (
    <section className="flex flex-col py-4">
      <PageHeader 
        title={<>My Engineering <br /><span className="text-blue-500">Journey.</span></>}
        subtitle="From building simple UI components to architecting complex, production-grade platforms. Each project represents a milestone in my growth as a Frontend Engineer."
        backgroundText="CREATIVE CODE"
      />

      <CrossDivider />

      {/* Timeline Section */}
      <div className="bg-white dark:bg-zinc-950">
        <ProjectTimeline />
      </div>

      <CrossDivider />
      
      {/* Footer Contact */}
      <ConnectContainer />
    </section>
  );
};

export default ProjectsPage;
