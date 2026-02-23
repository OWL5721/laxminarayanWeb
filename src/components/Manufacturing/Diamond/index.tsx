
import SectionTitle from "../../Common/SectionTitle";

const DiamondManufacturing = () => {
    return (
        <section className="pb-[120px] pt-[120px]">
            <div className="container">
                <SectionTitle
                    title="Diamond Manufacturing Excellence"
                    paragraph="Our state-of-the-art facility ensures every diamond reaches its full potential of brilliance and fire."
                    center
                    mb="50px"
                />

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Process Step 1 */}
                    <div className="rounded-sm bg-white p-8 shadow-one dark:bg-dark">
                        <div className="mb-4 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary/10 text-primary">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                            </svg>
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-black dark:text-white font-serif">Rough Planning</h3>
                        <p className="text-body-color">Using advanced Galaxy scanning technology to map the rough diamond and determine the optimal cut.</p>
                    </div>

                    {/* Process Step 2 */}
                    <div className="rounded-sm bg-white p-8 shadow-one dark:bg-dark">
                        <div className="mb-4 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary/10 text-primary">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2L2 22h20L12 2z" />
                                <path d="M2 22L12 12" />
                                <path d="M22 22L12 12" />
                            </svg>
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-black dark:text-white font-serif">Laser Sawing</h3>
                        <p className="text-body-color">Precision laser cutting to separate the stone with minimal weight loss and maximum safety.</p>
                    </div>

                    {/* Process Step 3 */}
                    <div className="rounded-sm bg-white p-8 shadow-one dark:bg-dark">
                        <div className="mb-4 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary/10 text-primary">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2v20" />
                                <path d="M2 12h20" />
                                <circle cx="12" cy="12" r="4" />
                            </svg>
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-black dark:text-white font-serif">Polishing & Grading</h3>
                        <p className="text-body-color">Expert artisans facet the diamond to release its inner fire, followed by rigorous quality grading.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiamondManufacturing;
