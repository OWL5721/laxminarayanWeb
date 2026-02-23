
import Image from "next/image";

const StoryHero = () => {
    return (
        <section className="relative z-10 overflow-hidden pb-[120px] pt-[150px] md:pt-[180px] lg:pt-[220px] bg-white dark:bg-dark">
            <div className="container">
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4 lg:w-1/2">
                        <div className="mb-12 max-w-[570px] lg:mb-0">
                            <span className="mb-4 block text-lg font-medium text-luxury-gold uppercase tracking-[0.2em]">
                                Our Heritage
                            </span>
                            <h1 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[45px] font-serif">
                                A Legacy of Trust, Crafted for Eternity.
                            </h1>
                            <p className="text-base font-medium leading-relaxed text-body-color md:text-lg">
                                Since 1985, Laxminarayan has been synonymous with purity and artistic excellence. Founded by [Founder Name], our journey began in a small workshop with a big vision: to create jewelry that transcends generations.
                            </p>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-xl">
                            <Image
                                src="/images/about/story-hero.jpg"
                                alt="Founder or Workshop"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition duration-700"
                            />
                            {/* Placeholder if image missing - remove in production if real image used */}
                            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 z-[-1]">
                                [Vintage Workshop Image]
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StoryHero;
