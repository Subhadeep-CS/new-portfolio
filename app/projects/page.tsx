import ProjectShowcase from "@/components/Projects/ProjectShowcase";
import CrossDivider from "@/components/Layout/common/CrossDivider";
import ConnectContainer from "@/components/Home/ConnectContainer";
import PageHeader from "@/components/Layout/common/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Subhadeep Das",
  description: "Explore the projects and engineering works of Subhadeep Das, a Frontend Developer specialized in React.js and Next.js.",
  alternates: {
    canonical: "https://subhadeepdas.com/projects",
  },
};

const ProjectsPage = () => {
  return (
    <section className="flex flex-col py-4 relative min-h-screen overflow-hidden">
      {/* Background Decorative Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
            linear-gradient(to right, rgba(161, 161, 170, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(161, 161, 170, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 100% 100%, 48px 48px, 48px 48px",
        }}
      />
      
      {/* Subtle Noise Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015] dark:opacity-[0.025] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <PageHeader
        title={<>Real Products. <br /><span className="text-blue-500">Real Impact.</span></>}
        subtitle="A collection of enterprise-grade products I've designed and developed while solving real business problems at scale."
        backgroundText="ENGINEERING"
      />

      <CrossDivider />

      {/* Showcase Section */}
      <div className="bg-transparent border-y-1 border-x-1 relative z-10">
        <ProjectShowcase />
      </div>

      <CrossDivider />

      {/* Footer Contact */}
      <div className="relative z-10">
        <ConnectContainer />
      </div>
    </section>
  );
};

export default ProjectsPage;
