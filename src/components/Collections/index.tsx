import SectionTitle from "../Common/SectionTitle";
import SingleCollection from "./SingleCollection";
import collectionsData from "./collectionsData";

const Collections = () => {
    return (
        <section
            id="collections"
            className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
        >
            <div className="container">
                <SectionTitle
                    title="Our Collections"
                    paragraph="Discover the artistry and elegance of our exclusive jewelry collections, crafted to perfection."
                    center
                    mb="50px"
                />

                <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                    {collectionsData.map((collection) => (
                        <SingleCollection key={collection.id} collection={collection} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Collections;
