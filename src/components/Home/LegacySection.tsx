
import Image from "next/image";
import Link from "next/link";

const LegacySection = () => {
    return (
        <section className="py-16 md:py-20 lg:py-28">
            <div className="container">
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4 lg:w-1/2">
                        <div
                            className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                            data-wow-delay=".15s"
                        >
                            <Image
                                src="/images/about/about-image.svg"
                                alt="about image"
                                fill
                                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                            />
                            <Image
                                src="/images/about/about-image-dark.svg"
                                alt="about image"
                                fill
                                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
                            />
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                            <div className="mb-9">
                                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl font-serif">
                                    A Legacy of Trust
                                </h3>
                                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                                    Founded with a vision to create exquisite jewelry that tells a story. Laxminarayan has been a trusted name in the industry, known for purity, quality, and artistic excellence.
                                </p>
                            </div>
                            <div className="mb-9">
                                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl font-serif">
                                    Expert Craftsmanship
                                </h3>
                                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                                    Our artisans combine traditional techniques with modern technology to create pieces that are not just jewelry, but heirlooms.
                                </p>
                            </div>
                            <Link
                                href="/story"
                                className="rounded-sm bg-luxury-gold px-8 py-3 text-base font-semibold text-white transition duration-300 hover:bg-luxury-gold/90"
                            >
                                Read Our Story
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LegacySection;
