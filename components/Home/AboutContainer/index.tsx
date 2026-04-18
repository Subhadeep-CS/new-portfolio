import AboutMe from "./AboutMe";
import AboutSectionHeader from "./AboutSectionHeading";

const AboutContainer = () => {
  return (
    <section className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
      <AboutSectionHeader />
      <AboutMe />
    </section>
  );
};

export default AboutContainer;
