import Breadcrumb from "@/components/Common/Breadcrumb";
import Collections from "@/components/Collections";

const CollectionsPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Collections"
                description="Explore our wide range of exquisite jewelry collections."
            />
            <Collections />
        </>
    );
};

export default CollectionsPage;
