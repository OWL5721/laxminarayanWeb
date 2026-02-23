import Link from "next/link";
import { Collection } from "@/types/collection";
import Image from "next/image";

const SingleCollection = ({ collection }: { collection: Collection }) => {
    const { title, image, link } = collection;
    return (
        <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
            <Link href={link} className="relative block aspect-[4/5] w-full overflow-hidden">
                {/* Grayscale to Color or Zoom effect on hover */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Text Overlay */}
                <div className="absolute bottom-8 left-0 w-full text-center z-20">
                    <h3 className="inline-block border-b-2 border-transparent pb-1 text-2xl font-bold font-serif text-white uppercase tracking-widest transition-all duration-300 group-hover:border-luxury-gold group-hover:text-luxury-gold">
                        {title}
                    </h3>
                </div>
            </Link>
        </div>
    );
};

export default SingleCollection;
