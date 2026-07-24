import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact XINFINITY HUB SOLUTIONS SDN. BHD. for software development, ERP solutions, website development, mobile apps, IT hardware and digital transformation services.",

  keywords: [
    "Contact XINFINITY HUB",
    "Software Company Malaysia",
    "ERP Consultation",
    "Website Development Malaysia",
    "Mobile App Developer",
    "IT Solutions Malaysia",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact Us | XINFINITY HUB SOLUTIONS SDN. BHD.",
    description:
      "Get in touch with our team to discuss your next software or digital transformation project.",
    url: "/contact",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | XINFINITY HUB SOLUTIONS SDN. BHD.",
    description:
      "Let's discuss how XINFINITY HUB can help transform your business with modern technology solutions.",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-[#05070F] text-white">
      <section className="border-b border-white/10 pt-40 pb-24">
        <div className="container">
          <span className="font-semibold tracking-widest text-yellow-500">
            CONTACT US
          </span>

          <h1 className="mt-6 text-5xl font-black lg:text-7xl">
            Let's Build
            <br />
            Something Great
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Whether you need a custom software solution, ERP implementation,
            website, mobile application or IT consultation, our team is ready
            to help.
          </p>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}