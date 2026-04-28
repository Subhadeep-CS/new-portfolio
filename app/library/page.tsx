import CrossDivider from "@/components/Layout/common/CrossDivider";
import SelfHelpBooksContainer from "@/components/SelfHelp/SelfHelpBooksContainer";
import ConnectContainer from "@/components/Home/ConnectContainer";
import PageHeader from "@/components/Layout/common/PageHeader";

export default function SelfHelp() {
    return (
        <section className="flex flex-col py-4">
            <PageHeader 
                title={<>Habits & <br /><span className="text-emerald-500">Mindset.</span></>}
                subtitle="Programming is only half the battle. This is a collection of non-technical self-help books that have helped me overcome procrastination and build discipline."
                backgroundText="BEYOND CODE"
                comingSoon={true}
            />

            <CrossDivider />
            <SelfHelpBooksContainer />

            <CrossDivider />
            <ConnectContainer />
        </section>
    );
}
