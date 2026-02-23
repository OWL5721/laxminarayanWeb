
import Link from "next/link";
import Image from "next/image";

const JournalHero = () => {
    return (
        <section className="relative z-10 overflow-hidden pb-[60px] pt-[120px] md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px] bg-white dark:bg-dark">
            <div className="container">
                <div className="-mx-4 flex flex-wrap items-center">
                    {/* Featured Image */}
                    <div className="w-full px-4 lg:w-1/2">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-xl">
                            <Image
                                src="/images/blog/blog-01.jpg"
                                alt="Latest Journal Entry"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 bg-luxury-gold px-4 py-1 text-sm font-bold text-white uppercase tracking-wider">
                                Featured
                            </div>
                        </div>
                    </div>

                    {/* Featured Content */}
                    <div className="w-full px-4 lg:w-1/2">
                        <div className="mt-10 lg:mt-0 lg:pl-10">
                            <span className="mb-4 block text-lg font-medium text-luxury-gold uppercase tracking-[0.2em]">
                                Education
                            </span>
                            <h1 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl font-serif">
                                The Art of Diamond Grading: Beyond the 4Cs
                            </h1>
                            <p className="mb-8 text-base leading-relaxed text-body-color dark:text-gray-300 sm:text-lg">
                                Understand the nuances of diamond quality that go beyond the certificate. Learn how cut, polish, and symmetry affect brilliance in ways that standard reports might miss.
                            </p>
                            <div className="flex items-center space-x-4">
                                <Link
                                    href="/blog-details"
                                    className="inline-flex items-center justify-center rounded-sm bg-luxury-dark px-8 py-4 text-base font-semibold text-white transition duration-300 hover:bg-luxury-gold"
                                >
                                    Read Article
                                </Link>
                                <span className="text-body-color text-sm italic">
                                    By Rajesh Patel | Feb 10, 2026
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JournalHero;
