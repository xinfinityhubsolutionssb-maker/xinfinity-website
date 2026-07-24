import type { Metadata } from "next";
import {
  Store,
  ShoppingCart,
  Factory,
  Hospital,
  GraduationCap,
  Building2,
  Truck,
  Hotel,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Discover how XINFINITY HUB SOLUTIONS SDN. BHD. delivers digital solutions for retail, manufacturing, healthcare, education, logistics, hospitality and other industries.",

  keywords: [
    "Retail Software",
    "Manufacturing ERP",
    "Healthcare System",
    "Education Management",
    "Logistics Software",
    "Hotel Management",
    "Business Software Malaysia",
    "Industry Solutions",
  ],

  alternates: {
    canonical: "/industries",
  },

  openGraph: {
    title: "Industries We Serve | XINFINITY HUB SOLUTIONS SDN. BHD.",
    description:
      "Industry-specific software and digital transformation solutions for businesses across Malaysia.",
    url: "/industries",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | XINFINITY HUB SOLUTIONS SDN. BHD.",
    description:
      "Industry-focused ERP, software development and digital business solutions.",
  },
};

const industries = [
  {
    icon: Store,
    title: "Retail",
    description:
      "POS systems, inventory management, customer loyalty and business analytics.",
  },
  {
    icon: ShoppingCart,
    title: "Wholesale & Distribution",
    description:
      "Order management, warehouse operations and supply chain optimization.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Production planning, inventory control and manufacturing ERP solutions.",
  },
  {
    icon: Hospital,
    title: "Healthcare",
    description:
      "Clinic and healthcare management systems with secure patient data handling.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Student management systems, learning platforms and administrative automation.",
  },
  {
    icon: Building2,
    title: "Corporate",
    description:
      "Custom enterprise software, HR systems, finance and workflow automation.",
  },
  {
    icon: Truck,
    title: "Logistics",
    description:
      "Fleet management, shipment tracking and logistics planning solutions.",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description:
      "Hotel, resort and service business management systems with online booking support.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="bg-[#05070F] text-white">
      <section className="border-b border-white/10 pt-40 pb-24">
        <div className="container">
          <span className="font-semibold tracking-widest text-yellow-500">
            INDUSTRIES
          </span>

          <h1 className="mt-6 text-5xl font-black lg:text-7xl">
            Industries
            <br />
            We Serve
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            We help businesses from various industries embrace digital
            transformation through reliable, scalable and innovative technology
            solutions.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="rounded-3xl border border-white/10 bg-[#0B1120] p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-500"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-500">
                  <Icon size={32} />
                </div>

                <h2 className="text-xl font-bold">
                  {industry.title}
                </h2>

                <p className="mt-5 leading-8 text-gray-400">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#08111D] py-24">
        <div className="container text-center">
          <h2 className="text-5xl font-bold">
            Your Industry, Our Expertise
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Whether you're a startup, SME or enterprise, we build solutions
            tailored to your industry and business goals.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-yellow-500 px-8 py-4 font-bold text-black transition hover:bg-yellow-400"
          >
            Contact Our Team
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}