import Banner from "@/components/Home/Banner";
import ProfileInformation from "@/components/Home/ProfileInformation";

export default function Home() {
  return (
    <section className="flex flex-col gap-4 py-4">
      <div className="border-y flex justify-center">
        <Banner />
      </div>
      <ProfileInformation />
    </section>
  );
}
