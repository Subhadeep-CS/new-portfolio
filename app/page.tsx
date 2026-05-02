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
  description: "Explore the portfolio of Subhadeep Das, a Frontend Engineer specializing in building high-performance, enterprise-grade web applications and immersive user experiences.",
  keywords: ["Subhadeep Das", "Frontend Engineer", "React Developer", "UI/UX Designer", "Software Engineer Portfolio"],
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
      <div className="border-b flex justify-center border-collapse">
        <Banner />
      </div>

      <CrossDivider />
      <ProfileInformation />

      <CrossDivider />
      <DesignationContactInfo />

      <CrossDivider />
      <AboutContainer />


      <CrossDivider />
      <StackContainer />

      <CrossDivider />
      <ExperienceContainer />

      <CrossDivider />
      <FeaturedProjectsContainer />

      <CrossDivider />
      <EducationContainer />

      <CrossDivider />
      <LivePlaygroundContainer />

      <CrossDivider />
      <CertificationsContainer />

      <CrossDivider />
      <HonorRewardContainer />

      <CrossDivider />
      <BookmarkContainer />

      <CrossDivider />
      <QuotesContainer />
      {/* 
      <CrossDivider />
      <FeaturedResourcesContainer />

      <CrossDivider />
      <FeaturedLibraryContainer /> */}

      {/* <CrossDivider />
      <GithubContainer /> */}
      {/* 
      <CrossDivider />
      <SpotifyContainer /> */}

      <CrossDivider />
      <ConnectContainer />
    </section>
  );
}
