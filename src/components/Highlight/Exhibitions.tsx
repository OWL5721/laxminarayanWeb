
import SectionTitle from "../Common/SectionTitle";

const Exhibitions = () => {
    const events = [
        {
            id: 1,
            title: "IIJS Premiere 2024",
            location: "Mumbai, India",
            date: "August 8-12, 2024",
            description: "Showcasing our latest bridal collection at India's largest jewelry exposition.",
        },
        {
            id: 2,
            title: "Hong Kong Jewellery & Gem Fair",
            location: "Hong Kong",
            date: "September 18-22, 2024",
            description: "Presenting our exclusive loose diamond inventory to the international market.",
        },
        {
            id: 3,
            title: "Private Viewing: The Royal Collection",
            location: "Laxminarayan Flagship, Surat",
            date: "October 15, 2024",
            description: "An invitation-only event for our esteemed clients to view the new high-jewelry line.",
        },
    ];

    return (
        <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-bg-color-dark">
            <div className="container">
                <SectionTitle
                    title="Exhibitions & Events"
                    paragraph="Join us at prestigious events around the globe."
                    center
                    mb="50px"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <div key={event.id} className="bg-white dark:bg-dark p-8 shadow-one hover:shadow-two rounded-sm duration-300 border-t-4 border-luxury-gold">
                            <span className="block text-sm text-gray-500 mb-2">{event.date}</span>
                            <h3 className="text-xl font-bold text-black dark:text-white mb-2 font-serif">{event.title}</h3>
                            <p className="text-luxury-gold font-medium mb-4 text-sm uppercase tracking-wide">{event.location}</p>
                            <p className="text-body-color border-t border-gray-200 dark:border-gray-700 pt-4">
                                {event.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Exhibitions;
