import AboutContainer from "@/components/Home/AboutContainer";
import Banner from "@/components/Home/Banner";
import DesignationContactInfo from "@/components/Home/DesignationContactInfo";
import ProfileInformation from "@/components/Home/ProfileInformation";
import StackContainer from "@/components/Home/StackContainer";
import ExperienceContainer from "@/components/Home/ExperienceContainer";
import FeaturedProjectsContainer from "@/components/Home/FeaturedProjectsContainer";
import EducationContainer from "@/components/Home/EducationContainer";
import CrossDivider from "@/components/Layout/common/CrossDivider";
import GithubContainer from "@/components/Home/GithubContainer";
import ConnectContainer from "@/components/Home/ConnectContainer";
import CertificationsContainer from "@/components/Home/CertificationsContainer";
import HonorRewardContainer from "@/components/Home/HonorRewardContainer";
import BookmarkContainer from "@/components/Home/BookmarkContainer";
import QuotesContainer from "@/components/Home/QuotesContainer";
import LivePlaygroundContainer from "@/components/Home/LivePlaygroundContainer";
import FeaturedResourcesContainer from "@/components/Home/FeaturedResourcesContainer";
import FeaturedLibraryContainer from "@/components/Home/FeaturedLibraryContainer";
import SpotifyContainer from "@/components/Home/SpotifyContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subhadeep Das | Frontend Engineer & Creative Developer",
  description: "Subhadeep Das is a Frontend Developer specializing in React.js and Next.js. Explore projects, skills, and portfolio.",
  keywords: ["Subhadeep Das", "Frontend Engineer", "React Developer", "UI/UX Designer", "Software Engineer Portfolio"],
  alternates: {
    canonical: "https://subhadeepdas.com",
  },
  openGraph: {
    title: "Subhadeep Das | Frontend Engineer",
    description: "Building production-grade platforms with modern web technologies.",
    type: "website",
    url: "https://subhadeepdas.com", // Adjust to your actual domain
  }
};

export default function Home() {
  return (
    <section className="flex flex-col">
      <div id="profile" className="scroll-mt-20">
        <div className="border-b flex justify-center border-collapse">
          <Banner />
        </div>

        <CrossDivider />
        <ProfileInformation />

        <CrossDivider />
        <DesignationContactInfo />
      </div>

      <CrossDivider />
      <div id="about" className="scroll-mt-20">
        <AboutContainer />
      </div>

      <CrossDivider />
      <div id="stack" className="scroll-mt-20">
        <StackContainer />
      </div>

      <CrossDivider />
      <div id="experience" className="scroll-mt-20">
        <ExperienceContainer />
      </div>

      <CrossDivider />
      <div id="projects" className="scroll-mt-20">
        <FeaturedProjectsContainer />
      </div>

      <CrossDivider />
      <div id="education" className="scroll-mt-20">
        <EducationContainer />
      </div>

      <CrossDivider />
      <div id="playground" className="scroll-mt-20">
        <LivePlaygroundContainer />
      </div>

      <CrossDivider />
      <div id="certifications" className="scroll-mt-20">
        <CertificationsContainer />
      </div>

      <CrossDivider />
      <div id="honors" className="scroll-mt-20">
        <HonorRewardContainer />
      </div>

      <CrossDivider />
      <div id="bookmarks" className="scroll-mt-20">
        <BookmarkContainer />
      </div>

      <CrossDivider />
      <div id="quotes" className="scroll-mt-20">
        <QuotesContainer />
      </div>

      <CrossDivider />
      <div id="connect" className="scroll-mt-20">
        <ConnectContainer />
      </div>
    </section>
  );
}
