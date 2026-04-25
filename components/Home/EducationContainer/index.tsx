import EducationTimeline from "@/components/Education/EducationTimeline";
import EducationSectionHeader from "./EducationSectionHeading";

const EducationContainer = () => {
  return (
    <section className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800 relative z-0">
      <EducationSectionHeader />
      <div className="container border-x border-zinc-200 dark:border-zinc-800 relative py-8 px-4 md:px-0">
        <EducationTimeline />
      </div>
    </section>
  );
};

export default EducationContainer;
