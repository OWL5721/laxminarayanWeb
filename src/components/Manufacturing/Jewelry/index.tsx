
import SectionTitle from "../../Common/SectionTitle";

const JewelryManufacturing = () => {
    return (
        <section className="pb-[120px] pt-[120px]">
            <div className="container">
                <SectionTitle
                    title="Jewelry Manufacturing Artistry"
                    paragraph="Blending traditional craftsmanship with modern technology to create bespoke jewelry pieces."
                    center
                    mb="50px"
                />

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Process Step 1 */}
                    <div className="rounded-sm bg-white p-8 shadow-one dark:bg-dark text-center">
                        <h3 className="mb-3 text-xl font-bold text-black dark:text-white font-serif">1. CAD Design</h3>
                        <p className="text-body-color">Transforming sketches into precise 3D models ready for production.</p>
                    </div>

                    {/* Process Step 2 */}
                    <div className="rounded-sm bg-white p-8 shadow-one dark:bg-dark text-center">
                        <h3 className="mb-3 text-xl font-bold text-black dark:text-white font-serif">2. Casting</h3>
                        <p className="text-body-color">Lost-wax casting in Gold, Silver, or Platinum for a perfect base.</p>
                    </div>

                    {/* Process Step 3 */}
                    <div className="rounded-sm bg-white p-8 shadow-one dark:bg-dark text-center">
                        <h3 className="mb-3 text-xl font-bold text-black dark:text-white font-serif">3. Setting</h3>
                        <p className="text-body-color">Master setters securely place gemstones to maximize their brilliance.</p>
                    </div>

                    {/* Process Step 4 */}
                    <div className="rounded-sm bg-white p-8 shadow-one dark:bg-dark text-center">
                        <h3 className="mb-3 text-xl font-bold text-black dark:text-white font-serif">4. Finishing</h3>
                        <p className="text-body-color">Polishing, plating, and final quality control for a flawless shine.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JewelryManufacturing;
