
const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28 bg-white dark:bg-dark">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-gray-light px-8 py-11 dark:bg-bg-color-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px] border border-luxury-gold/10 hover:border-luxury-gold/30 transition duration-300"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl font-serif">
                Request a Consultation
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our concierge team is at your disposal to assist with any inquiries regarding our collections or bespoke services.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-luxury-gold dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-luxury-gold dark:focus:shadow-none transition duration-300"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-luxury-gold dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-luxury-gold dark:focus:shadow-none transition duration-300"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="How can we assist you?"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-luxury-gold dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-luxury-gold dark:focus:shadow-none transition duration-300"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-sm bg-luxury-gold px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-white hover:text-black border border-transparent hover:border-luxury-gold dark:shadow-submit-dark">
                      Send Inquiry
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className="rounded-sm bg-white p-8 shadow-one dark:bg-bg-color-dark lg:p-10 border-t-4 border-luxury-gold">
              <h3 className="mb-8 text-2xl font-bold text-black dark:text-white font-serif">Contact Information</h3>

              <div className="mb-8 border-b border-body-color/10 pb-8">
                <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">Headquarters</h4>
                <p className="text-base text-body-color">
                  
                </p>
              </div>

              <div className="mb-8 border-b border-body-color/10 pb-8">
                <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">Concierge</h4>
                <p className="text-base text-body-color mb-1">
                  <a href="mailto:concierge@laxminarayan.com" className="hover:text-luxury-gold transition">concierge@laxminarayan.com</a>
                </p>
                <p className="text-base text-body-color">
                  
                </p>
              </div>

              <div>
                <h4 className="mb-4 text-lg font-semibold text-black dark:text-white">Follow Us</h4>
                <div className="flex items-center space-x-4">
                  {/* Social Icons Placeholder - reuse from Footer if needed or keep simple text links */}
                  <a href="/" className="text-body-color hover:text-luxury-gold transition">Instagram</a>
                  <a href="/" className="text-body-color hover:text-luxury-gold transition">LinkedIn</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
