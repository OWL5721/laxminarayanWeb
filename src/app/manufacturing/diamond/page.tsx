import Breadcrumb from "@/components/Common/Breadcrumb";
import DiamondManufacturing from "@/components/Manufacturing/Diamond";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Diamond Manufacturing | Laxminarayan",
    description: "Expert diamond cutting and polishing services.",
};

const DiamondManufacturingPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Diamond Manufacturing"
                description="Crafting brilliance with precision diamond manufacturing."
            />
            <DiamondManufacturing />
        </>
    );
};

export default DiamondManufacturingPage;
