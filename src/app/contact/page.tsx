import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(234,179,8,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.08),transparent_35%)]" />

        <div className="container relative py-28">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-white/5 px-5 py-3 text-sm font-semibold text-yellow-400 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-500 hover:text-black"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <div className="mt-16">
            <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-yellow-500">
              CONTACT US
            </span>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight lg:text-7xl">
              Let&apos;s Build The
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent">
                {" "}
                Future Together
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-300">
              Whether you need enterprise software, ERP implementation,
              corporate websites, mobile applications or digital transformation
              services, our team is ready to help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}