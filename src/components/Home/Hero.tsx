
import Link from "next/link";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        >
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 z-[-1]">
                <div className="absolute inset-0 bg-luxury-dark/90" />
                {/* <Image src="/images/hero/jewelry-hero.jpg" fill className="object-cover" alt="Hero Background" /> */}
            </div>

            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div
                            className="mx-auto max-w-[800px] text-center"
                            data-wow-delay=".2s"
                        >
                            <h1 className="mb-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight font-serif tracking-wide">
                                Timeless Elegance, <br /> Crafted for Eternity.
                            </h1>
                            <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                                Discover the finest collection of handcrafted jewelry, where tradition meets modern sophistication. From bespoke diamond pieces to intricate gold designs.
                            </p>
                            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                                <Link
                                    href="/collections"
                                    className="rounded-sm bg-luxury-gold px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-luxury-gold/90"
                                >
                                    Explore Collections
                                </Link>
                                <Link
                                    href="/contact"
                                    className="rounded-sm bg-white/10 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-white/20"
                                >
                                    Book Appointment
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
