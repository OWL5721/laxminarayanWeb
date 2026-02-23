import Breadcrumb from "@/components/Common/Breadcrumb";
import JewelryManufacturing from "@/components/Manufacturing/Jewelry";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jewelry Manufacturing | Laxminarayan",
    description: "Premium jewelry manufacturing services.",
};

const JewelryManufacturingPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Jewelry Manufacturing"
                description="Creating masterpieces with expert jewelry manufacturing."
            />
            <JewelryManufacturing />
        </>
    );
};

export default JewelryManufacturingPage;
