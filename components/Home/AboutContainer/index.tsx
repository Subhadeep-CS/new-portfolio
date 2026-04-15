import AboutMe from "./AboutMe";
import AboutSectionHeader from "./AboutSectionHeading";

const AboutContainer = () => {
  return (
    <section className="divide-y border-y">
      <AboutSectionHeader />
      <AboutMe />
    </section>
  );
};

export default AboutContainer;
