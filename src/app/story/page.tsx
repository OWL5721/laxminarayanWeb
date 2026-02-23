import StoryHero from "@/components/Story/StoryHero";
import Timeline from "@/components/Story/Timeline";
import CoreValues from "@/components/Story/CoreValues";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Story | Laxminarayan",
    description: "The legacy of craftsmanship, trust, and timeless jewelry.",
};

const StoryPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Our Story"
                description="A journey of passion, precision, and purity."
            />
            <StoryHero />
            <Timeline />
            <CoreValues />
        </>
    );
};

export default StoryPage;
