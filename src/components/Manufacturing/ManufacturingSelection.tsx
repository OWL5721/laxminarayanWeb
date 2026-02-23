
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const ManufacturingSelection = () => {
    return (
        <section className="pb-[120px] pt-[120px]">
            <div className="container">
                <SectionTitle
                    title="Our Manufacturing Divisions"
                    paragraph="Choose a division to explore our specialized manufacturing capabilities."
                    center
                    mb="80px"
                />

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    {/* Diamond Manufacturing Card */}
                    <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
                        <div className="relative h-[300px] w-full overflow-hidden">
                            {/* Placeholder generic image/color until real images are added */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black opacity-80 transition-transform duration-500 group-hover:scale-105"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" className="opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                                    <path d="M6 3L2 9L12 21L22 9L18 3H6Z" />
                                    <path d="M2 9H22" />
                                    <path d="M12 21L7 9" />
                                    <path d="M12 21L17 9" />
                                    <path d="M6 3L12 9" />
                                    <path d="M18 3L12 9" />
                                </svg>
                            </div>
                        </div>
                        <div className="p-8 text-center">
                            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white font-serif">
                                Diamond Manufacturing
                            </h3>
                            <p className="mb-8 text-base font-medium text-body-color">
                                Precision cutting, polishing, and grading of high-quality diamonds.
                            </p>
                            <Link
                                href="/manufacturing/diamond"
                                className="inline-block rounded-sm bg-luxury-gold px-8 py-3 text-base font-semibold text-white transition-all hover:bg-luxury-gold/90"
                            >
                                Explore Diamonds
                            </Link>
                        </div>
                    </div>

                    {/* Jewelry Manufacturing Card */}
                    <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
                        <div className="relative h-[300px] w-full overflow-hidden">
                            {/* Placeholder generic image/color until real images are added */}
                            <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/40 to-black opacity-80 transition-transform duration-500 group-hover:scale-105"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" className="opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                                    <circle cx="12" cy="12" r="9" />
                                    <path d="M12 3V21" />
                                    <path d="M12 8L16 12L12 16L8 12L12 8Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="p-8 text-center">
                            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white font-serif">
                                Jewelry Manufacturing
                            </h3>
                            <p className="mb-8 text-base font-medium text-body-color">
                                End-to-end jewelry creation, from casting to final setting and finishing.
                            </p>
                            <Link
                                href="/manufacturing/jewelry"
                                className="inline-block rounded-sm bg-luxury-gold px-8 py-3 text-base font-semibold text-white transition-all hover:bg-luxury-gold/90"
                            >
                                Explore Jewelry
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManufacturingSelection;
