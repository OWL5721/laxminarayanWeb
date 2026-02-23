
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import blogData from "./blogData";

const ArticleList = () => {
    // Filter out the first one if it's featured, or just show all for now.
    // Let's skip the first one to avoid duplication with Hero.
    const articles = blogData.slice(1);

    return (
        <section className="pb-[120px] pt-[60px]">
            <div className="container">
                <SectionTitle
                    title="Recent Stories"
                    paragraph="Explore our latest collection of insights and trends."
                    center
                    mb="50px"
                />

                <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((blog) => (
                        <div key={blog.id} className="group w-full">
                            <div className="mb-8 overflow-hidden rounded-sm relative aspect-[3/2] shadow-sm">
                                <Link href="/blog-details" className="block w-full h-full">
                                    <span className="absolute top-4 right-4 z-10 bg-white/90 px-3 py-1 text-xs font-bold text-black uppercase tracking-wider backdrop-blur-sm">
                                        {blog.tags[0]}
                                    </span>
                                    <Image
                                        src={blog.image}
                                        alt="image"
                                        fill
                                        className="object-cover transition duration-300 group-hover:scale-110"
                                    />
                                </Link>
                            </div>
                            <div>
                                <h3 className="mb-4">
                                    <Link
                                        href="/blog-details"
                                        className="block text-xl font-bold text-black dark:text-white hover:text-luxury-gold transition-colors font-serif"
                                    >
                                        {blog.title}
                                    </Link>
                                </h3>
                                <p className="mb-6 text-base font-medium text-body-color dark:text-gray-400 line-clamp-2">
                                    {blog.paragraph}
                                </p>
                                <Link
                                    href="/blog-details"
                                    className="inline-block text-base font-semibold text-black dark:text-white hover:text-luxury-gold transition-colors uppercase tracking-widest text-sm border-b border-transparent hover:border-luxury-gold pb-1"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArticleList;
