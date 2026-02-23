
import Link from "next/link";

const CastingHero = () => {
    return (
        <section className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]">
            <div className="absolute inset-0 z-[-1]">
                <div className="absolute inset-0 bg-luxury-dark/90" />
                {/* Background Image Placeholder - Replace with actual image */}
                {/* <Image src="/images/casting-bg.jpg" fill className="object-cover" alt="Casting Background" /> */}
            </div>
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto max-w-[800px] text-center">
                            <h1 className="mb-5 text-3xl font-bold leading-tight text-white font-serif sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                                Precision Jewelry Casting
                            </h1>
                            <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-gray-300 sm:text-lg md:text-xl">
                                Turning your intricate 3D designs into flawless metal reality. We specialize in high-quality gold, silver, and platinum casting services for manufacturers and designers.
                            </p>
                            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                                <Link
                                    href="/contact"
                                    className="rounded-sm bg-luxury-gold px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-luxury-gold/90"
                                >
                                    Get a Quote
                                </Link>
                                <Link
                                    href="#process"
                                    className="rounded-sm bg-white/10 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-white/20"
                                >
                                    Our Process
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CastingHero;
