import CrossDivider from "@/components/Layout/common/CrossDivider";
import MentorsContainer from "@/components/Resources/MentorsContainer";
import BooksContainer from "@/components/Resources/BooksContainer";
import HelpfulLinksContainer from "@/components/Resources/HelpfulLinksContainer";
import ConnectContainer from "@/components/Home/ConnectContainer";
import PageHeader from "@/components/Layout/common/PageHeader";

export default function Resources() {
    return (
        <section className="flex flex-col py-4">
            <PageHeader 
                title={<>Growth & <br /><span className="text-indigo-500">Resources.</span></>}
                subtitle="A curated collection of the courses, brilliant minds, books, and resources that have shaped my journey in frontend development."
                backgroundText="LEARN MORE"
                comingSoon={true}
            />

            <CrossDivider />
            <MentorsContainer />

            <CrossDivider />
            <BooksContainer />

            <CrossDivider />
            <HelpfulLinksContainer />

            <CrossDivider />
            <ConnectContainer />
        </section>
    );
}
