
const Timeline = () => {
    const milestones = [
        {
            year: "1985",
            title: "The Beginning",
            description: "Founded in Surat, the heart of the diamond industry, with a focus on precision cutting.",
        },
        {
            year: "1998",
            title: "Expansion into Jewelry",
            description: "Launched our first exclusive jewelry line, blending traditional designs with modern aesthetics.",
        },
        {
            year: "2010",
            title: "Global Reach",
            description: "Started exporting to international markets, bringing Indian craftsmanship to the world.",
        },
        {
            year: "2024",
            title: "Digital Era",
            description: "Embracing technology to offer a seamless luxury experience online.",
        },
    ];

    return (
        <section className="relative z-10 py-16 md:py-20 lg:py-28 bg-gray-light dark:bg-bg-color-dark">
            <div className="container">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                    <span className="mb-2 block text-lg font-semibold text-luxury-gold uppercase tracking-widest">
                        Milestones
                    </span>
                    <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[40px] font-serif">
                        Our Journey
                    </h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Central Line */}
                    <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-luxury-gold/30 hidden md:block"></div>

                    <div className="space-y-12">
                        {milestones.map((item, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Date */}
                                <div className="w-full md:w-5/12 text-center md:text-right mb-4 md:mb-0">
                                    {index % 2 === 1 ? (
                                        <div className="md:text-left">
                                            <h3 className="text-4xl font-bold text-luxury-gold font-serif">{item.year}</h3>
                                        </div>
                                    ) : (
                                        <div className="md:text-right">
                                            <h3 className="text-4xl font-bold text-luxury-gold font-serif">{item.year}</h3>
                                        </div>
                                    )}
                                </div>

                                {/* Dot */}
                                <div className="absolute left-1/2 w-4 h-4 -translate-x-1/2 bg-luxury-gold rounded-full border-4 border-white dark:border-dark hidden md:block"></div>

                                {/* Content */}
                                <div className="w-full md:w-5/12 bg-white dark:bg-dark p-6 rounded-sm shadow-one hover:shadow-two duration-300">
                                    <h4 className="text-xl font-bold text-black dark:text-white mb-2">{item.title}</h4>
                                    <p className="text-body-color text-sm">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
