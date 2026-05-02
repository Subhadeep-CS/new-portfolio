import PageHeader from "@/components/Layout/common/PageHeader";
import CrossDivider from "@/components/Layout/common/CrossDivider";
import ConnectContainer from "@/components/Home/ConnectContainer";
import { Download } from "lucide-react";

export const metadata = {
  title: "Resume | Subhadeep",
  description: "View and download my professional resume.",
};

export default function ResumePage() {
  return (
    <section className="flex flex-col py-4">
      <PageHeader
        title={<>My Professional <br /><span className="text-blue-500">Resume.</span></>}
        subtitle="View and download my detailed professional background, technical expertise, and career milestones as a Frontend Engineer."
        backgroundText="EXPERIENCE"
      />

      <CrossDivider />
      <div className="w-full border-y-1">
        <div className="bg-white dark:bg-zinc-950 border-x border-zinc-200 dark:border-zinc-800 container py-8  border-x-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 px-4">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Live Preview</h2>
              <p className="text-zinc-500 dark:text-zinc-400">Download the PDF version for the full details.</p>
            </div>
            <a
              href="/document/SUBHADEEP_DAS_CV_FRONTEND_ENGINEER.pdf"
              download="Subhadeep_Das_CV_Frontend_Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors shrink-0 shadow-lg shadow-blue-500/20"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          <div className="mx-4 border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-900">
            <iframe
              src="/document/SUBHADEEP_DAS_CV_FRONTEND_ENGINEER.pdf#toolbar=0&navpanes=0"
              className="w-full h-[950px] border-none"
              title="Subhadeep Das Resume"
              scrolling="no"
            />
          </div>
        </div>
      </div>

      <CrossDivider />
      <ConnectContainer />
    </section>
  );
}
