import { EXPERIENCE_DATA } from "@/utils/app_constant";
import ExperienceSectionHeader from "./ExperienceSectionHeading";
import ExperienceCard from "./ExperienceCard";

const ExperienceContainer = () => {
  return (
    <section className="divide-y border-y">
      <ExperienceSectionHeader />
      <div className="container border-x px-4 py-4">
        <div className="flex flex-col divide-y">
          {EXPERIENCE_DATA.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceContainer;
