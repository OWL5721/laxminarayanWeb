
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const ManufacturingPreview = () => {
    return (
        <section className="py-16 md:py-20 lg:py-28 bg-gray-light dark:bg-bg-color-dark">
            <div className="container">
                <SectionTitle
                    title="Manufacturing Excellence"
                    paragraph="State-of-the-art facilities for both diamond and jewelry production."
                    center
                    mb="50px"
                />

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Diamond */}
                    <div className="group relative overflow-hidden rounded-sm bg-white dark:bg-dark shadow-one hover:shadow-two duration-300">
                        <div className="p-8 text-center">
                            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white font-serif">
                                Diamond Manufacturing
                            </h3>
                            <p className="mb-6 text-base font-medium text-body-color">
                                From rough planning to laser sawing and polishing.
                            </p>
                            <Link href="/manufacturing/diamond" className="text-luxury-gold hover:underline font-semibold uppercase tracking-wider text-sm">
                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* Jewelry */}
                    <div className="group relative overflow-hidden rounded-sm bg-white dark:bg-dark shadow-one hover:shadow-two duration-300">
                        <div className="p-8 text-center">
                            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white font-serif">
                                Jewelry Manufacturing
                            </h3>
                            <p className="mb-6 text-base font-medium text-body-color">
                                End-to-end creation, casting, and setting services.
                            </p>
                            <Link href="/manufacturing/jewelry" className="text-luxury-gold hover:underline font-semibold uppercase tracking-wider text-sm">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManufacturingPreview;
