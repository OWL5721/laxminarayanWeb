
import SectionTitle from "../Common/SectionTitle";

const processData = [
    {
        id: 1,
        title: "1. 3D Design (CAD)",
        description: "Submit your CAD files or work with our designers to create the perfect 3D model.",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 3L2 9L12 15L22 9L12 3Z" />
                <path d="M2 15L12 21L22 15" />
                <path d="M2 9V15" />
                <path d="M22 9V15" />
                <path d="M12 15V21" />
                <path d="M12 3V9" />
            </svg>
        ),
    },
    {
        id: 2,
        title: "2. Wax Printing",
        description: "High-resolution 3D wax printing ensures every detail is captured precisely.",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17" />
                <path d="M2 12L12 17L22 12" />
            </svg>
        ),
    },
    {
        id: 3,
        title: "3. Investment Casting",
        description: "Using premium investment powder and vacuum casting for porosity-free results.",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" />
            </svg>
        ),
    },
    {
        id: 4,
        title: "4. Finishing",
        description: "Raw castings are cleaned, polished, and prepped for stone setting.",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 6L9 17L4 12" />
            </svg>
        ),
    },
];

const ProcessSteps = () => {
    return (
        <section id="process" className="py-16 md:py-20 lg:py-28 bg-gray-light dark:bg-bg-color-dark">
            <div className="container">
                <SectionTitle
                    title="Our Casting Process"
                    paragraph="From digital file to finished metal, we ensure quality at every step."
                    center
                    mb="80px"
                />

                <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
                    {processData.map((step) => (
                        <div key={step.id} className="w-full">
                            <div className="group relative z-10 text-center">
                                <div className="mx-auto mb-10 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-luxury-gold text-white shadow-one duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-two dark:shadow-gray-dark">
                                    {step.icon}
                                </div>
                                <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl font-serif">
                                    {step.title}
                                </h3>
                                <p className="text-base font-medium leading-relaxed text-body-color">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSteps;
