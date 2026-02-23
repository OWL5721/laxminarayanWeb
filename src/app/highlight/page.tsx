import Breadcrumb from "@/components/Common/Breadcrumb";
import MasterpieceShowcase from "@/components/Highlight/MasterpieceShowcase";
import Exhibitions from "@/components/Highlight/Exhibitions";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Highlights & Masterpieces | Laxminarayan",
    description: "Exclusive high-jewelry collections and global exhibitions.",
};

const HighlightPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Highlights"
                description="Where art meets eternity. Discover our masterpieces."
            />
            <MasterpieceShowcase />
            <Exhibitions />
        </>
    );
};

export default HighlightPage;
