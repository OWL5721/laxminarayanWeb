import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import ManufacturingSelection from "@/components/Manufacturing/ManufacturingSelection";

export const metadata: Metadata = {
    title: "Manufacturing | Laxminarayan",
    description: "State-of-the-art jewelry manufacturing.",
};

const ManufacturingPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Manufacturing"
                description="Explore our world-class manufacturing divisions."
            />
            <ManufacturingSelection />
        </>
    );
};

export default ManufacturingPage;
