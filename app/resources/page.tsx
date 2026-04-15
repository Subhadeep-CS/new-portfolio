import CrossDivider from "@/components/Layout/common/CrossDivider";
import MentorsContainer from "@/components/Resources/MentorsContainer";
import BooksContainer from "@/components/Resources/BooksContainer";
import HelpfulLinksContainer from "@/components/Resources/HelpfulLinksContainer";
import ConnectContainer from "@/components/Home/ConnectContainer";

export default function Resources() {
    return (
        <section className="flex flex-col py-4">
            <div className="border-y border-zinc-200 bg-zinc-50/50 flex flex-col justify-center px-4 py-16">
                <div className="container border-x border-zinc-100 flex flex-col justify-center px-4 py-8">
                    <h1 className="text-[28px] font-bold text-zinc-900 mb-3 border-l-4 border-blue-500 pl-4 leading-tight">
                        Mentors & Resources
                    </h1>
                    <p className="text-[16px] text-zinc-600 max-w-2xl pl-4 leading-relaxed">
                        A curated collection of the courses, brilliant minds, books, and resources that have shaped my journey in frontend development. Keep learning, keep building.
                    </p>
                </div>
            </div>

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
