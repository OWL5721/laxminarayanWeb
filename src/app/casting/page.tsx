import Breadcrumb from "@/components/Common/Breadcrumb";
import Casting from "@/components/Casting";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Precision Casting Services | Laxminarayan",
    description: "High-quality gold, silver, and platinum casting services for jewelry integration.",
    // other metadata
};

const CastingPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Casting Services"
                description="Precision casting for the modern jewelry industry."
            />
            <Casting />
        </>
    );
};

export default CastingPage;
