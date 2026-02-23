
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const MasterpieceShowcase = () => {
    // Placeholder data for masterpieces
    const masterpieces = [
        {
            id: 1,
            title: "The Royal Polki Necklace",
            description: "A breathtaking fusion of uncut diamonds and emeralds, inspired by the royal courts of Rajasthan.",
            image: "/images/blog/blog-01.jpg", // Placeholder image
            price: "Price on Request",
        },
        {
            id: 2,
            title: "Celestial Diamond Ring",
            description: "A rare 5-carat solitaire surrounded by a halo of pink argyle diamonds.",
            image: "/images/blog/blog-02.jpg", // Placeholder image
            price: "Price on Request",
        },
        {
            id: 3,
            title: "The Peacock Brooch",
            description: "Intricate enamel work combined with sapphires and diamonds to create a living masterpiece.",
            image: "/images/blog/blog-03.jpg", // Placeholder image
            price: "Price on Request",
        },
    ];

    return (
        <section className="pt-16 md:pt-20 lg:pt-28 pb-16 md:pb-20 lg:pb-28 bg-dark text-white">
            <div className="container">
                <SectionTitle
                    title="Masterpiece Collection"
                    paragraph="Exclusive creations that redefine luxury. Available by appointment only."
                    center
                    mb="80px"
                />

                <div className="grid grid-cols-1 gap-12">
                    {masterpieces.map((item, index) => (
                        <div key={item.id} className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl border border-luxury-gold/20">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover hover:scale-105 transition duration-700"
                                />
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <span className="block text-luxury-gold uppercase tracking-widest text-sm mb-2">High Jewelry</span>
                                <h3 className="text-3xl md:text-4xl font-bold font-serif mb-6">{item.title}</h3>
                                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                                    {item.description}
                                </p>
                                <button className="bg-luxury-gold text-white px-8 py-3 rounded-sm font-semibold hover:bg-white hover:text-black transition duration-300">
                                    Inquire Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MasterpieceShowcase;
