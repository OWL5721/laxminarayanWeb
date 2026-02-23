import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Laxminarayan",
  description: "Get in touch with our concierge team for inquiries and appointments.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="We invite you to experience the world of Laxminarayan. Visit our flagship boutique or contact our concierge."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
