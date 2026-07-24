import type { Metadata } from "next";
import {
  Code2,
  Globe,
  Smartphone,
  Building2,
  Monitor,
  Plane,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore XINFINITY HUB SOLUTIONS SDN. BHD.'s professional software development, ERP solutions, website development, mobile app development, IT hardware supply and digital business solutions in Malaysia.",

  keywords: [
    "Software Development Malaysia",
    "ERP Malaysia",
    "Website Development",
    "Mobile App Development",
    "IT Hardware Supply",
    "Business Solutions",
    "Custom Software Development",
    "Digital Transformation",
  ],

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title: "Services | XINFINITY HUB SOLUTIONS SDN. BHD.",
    description:
      "Professional software development, ERP solutions, website development, mobile applications, IT hardware supply and digital business solutions.",
    url: "/services",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Services | XINFINITY HUB SOLUTIONS SDN. BHD.",
    description:
      "Professional software development, ERP solutions, website development, mobile applications, IT hardware supply and digital business solutions.",
  },
};

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "We build secure, scalable and high-performance software tailored to your business requirements.",
  },
  {
    icon: Globe,
    title: "Corporate Website Development",
    description:
      "Modern responsive websites that strengthen your brand and generate business enquiries.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Android and iOS mobile applications with intuitive user experiences and enterprise-grade architecture.",
  },
  {
    icon: Building2,
    title: "ERP & Business Solutions",
    description:
      "Accounting, Inventory, CRM, POS, HR and custom enterprise management systems.",
  },
  {
    icon: Monitor,
    title: "IT Hardware Supply",
    description:
      "Supply and consultation for computers, networking equipment, POS devices and business hardware.",
  },
  {
    icon: Plane,
    title: "Travel & Agency Services",
    description:
      "Professional travel arrangements and agency services for corporate and individual clients.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#05070F] text-white">
      <section className="border-b border-white/10 pt-40 pb-24">
        <div className="container">
          <span className="font-semibold tracking-widest text-yellow-500">
            OUR SERVICES
          </span>

          <h1 className="mt-6 text-5xl font-black lg:text-7xl">
            Innovative Services
            <br />
            For Modern Businesses
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            We provide complete technology solutions designed to help
            businesses grow, automate operations and embrace digital
            transformation.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-[#0B1120] p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-500"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-500">
                  <Icon size={32} />
                </div>

                <h2 className="text-2xl font-bold">{service.title}</h2>

                <p className="mt-5 leading-8 text-gray-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#08111D] py-24">
        <div className="container text-center">
          <h2 className="text-5xl font-bold">
            Need A Custom Solution?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Every business is unique. We design and develop solutions that
            match your goals, processes and future growth.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-yellow-500 px-8 py-4 font-bold text-black transition hover:bg-yellow-400"
          >
            Request Consultation

            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}