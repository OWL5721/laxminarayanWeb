
import SectionTitle from "../Common/SectionTitle";

const servicesData = [
    {
        id: 1,
        title: "Gold Casting",
        paragraph: "10K, 14K, 18K, 22K (Yellow, White, Rose)",
    },
    {
        id: 2,
        title: "Silver Casting",
        paragraph: "925 Sterling Silver, Argentium Silver",
    },
    {
        id: 3,
        title: "Platinum & Palladium",
        paragraph: "High-density, durable casting for premium jewelry.",
    },
    {
        id: 4,
        title: "Brass & Bronze",
        paragraph: "Cost-effective options for fashion jewelry and prototypes.",
    }
];

const ServicesList = () => {
    return (
        <section className="pb-16 md:pb-20 lg:pb-28">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <SectionTitle
                            title="Available Metals"
                            paragraph="We cast in a wide variety of precious and non-precious metals."
                            center
                            mb="50px"
                        />
                    </div>
                </div>

                <div className="-mx-4 flex flex-wrap justify-center">
                    {servicesData.map((service) => (
                        <div key={service.id} className="w-full px-4 md:w-1/2 lg:w-1/4">
                            <div className="mb-8 rounded-sm bg-white p-10 shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
                                <h3 className="mb-4 text-xl font-bold text-black dark:text-white font-serif">
                                    {service.title}
                                </h3>
                                <p className="text-base font-medium text-body-color">
                                    {service.paragraph}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesList;
