import AboutContainer from "@/components/Home/AboutContainer";
import Banner from "@/components/Home/Banner";
import DesignationContactInfo from "@/components/Home/DesignationContactInfo";
import ProfileInformation from "@/components/Home/ProfileInformation";
import StackContainer from "@/components/Home/StackContainer";
import ExperienceContainer from "@/components/Home/ExperienceContainer";
import CrossDivider from "@/components/Layout/common/CrossDivider";
import GithubContainer from "@/components/Home/GithubContainer";
import ConnectContainer from "@/components/Home/ConnectContainer";

export default function Home() {
  return (
    <section className="flex flex-col py-4">
      <div className="border-y flex justify-center">
        <Banner />
      </div>

      <CrossDivider />
      <ProfileInformation />

      <CrossDivider />
      <DesignationContactInfo />

      <CrossDivider />
      <AboutContainer />

      <CrossDivider />
      <ExperienceContainer />

      <CrossDivider />
      <StackContainer />

      <CrossDivider />
      <GithubContainer />

      <CrossDivider />
      <ConnectContainer />
    </section>
  );
}
