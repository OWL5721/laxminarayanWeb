
const CoreValues = () => {
    return (
        <section className="pt-16 md:pt-20 lg:pt-28 pb-16 md:pb-20 lg:pb-28">
            <div className="container">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                    <span className="mb-2 block text-lg font-semibold text-luxury-gold uppercase tracking-widest">
                        Philosophy
                    </span>
                    <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[40px] font-serif">
                        Core Values
                    </h2>
                    <p className="text-base text-body-color">
                        The principles that guide every piece we create.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                    <div className="text-center p-8 border border-luxury-gold/10 hover:border-luxury-gold/50 transition duration-300 rounded-sm">
                        <div className="mb-6 flex items-center justify-center text-luxury-gold">
                            {/* Diamond Icon */}
                            <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7L12 22L22 7L12 2Z" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-black dark:text-white font-serif">Purity</h3>
                        <p className="text-body-color">
                            We use only certified diamonds and hallmarked metals, ensuring that every piece is an investment in authenticity.
                        </p>
                    </div>

                    <div className="text-center p-8 border border-luxury-gold/10 hover:border-luxury-gold/50 transition duration-300 rounded-sm">
                        <div className="mb-6 flex items-center justify-center text-luxury-gold">
                            {/* Art/Design Icon */}
                            <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor" />
                            </svg>
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-black dark:text-white font-serif">Artistry</h3>
                        <p className="text-body-color">
                            Handcrafted by master artisans who have dedicated their lives to preserving traditional jewelry-making techniques.
                        </p>
                    </div>

                    <div className="text-center p-8 border border-luxury-gold/10 hover:border-luxury-gold/50 transition duration-300 rounded-sm">
                        <div className="mb-6 flex items-center justify-center text-luxury-gold">
                            {/* Handshake/Trust Icon */}
                            <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 11 9.66 11 8C11 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.33 13 0 14.34 0 17V19H16V17C16 14.34 10.67 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 17V19H24V17C24 14.34 18.67 13 16 13Z" fill="currentColor" />
                            </svg>
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-black dark:text-white font-serif">Trust</h3>
                        <p className="text-body-color">
                            Building relationships that last for generations. Our transparency in pricing and grading is our promise to you.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoreValues;
