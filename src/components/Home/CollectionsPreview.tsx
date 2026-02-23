
import SectionTitle from "../Common/SectionTitle";
import SingleCollection from "../Collections/SingleCollection";

// Reuse existing collections data or minimal subset
import collectionsData from "../Collections/collectionsData";

const CollectionsPreview = () => {
    // Show only first 3 items
    const previewItems = collectionsData.slice(0, 3);

    return (
        <section className="pt-16 md:pt-20 lg:pt-28 pb-16 md:pb-20 lg:pb-28">
            <div className="container">
                <SectionTitle
                    title="Curated Collections"
                    paragraph="Handpicked favorites that define luxury and style."
                    center
                    mb="80px"
                />

                <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                    {previewItems.map((collection) => (
                        <SingleCollection key={collection.id} collection={collection} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CollectionsPreview;
