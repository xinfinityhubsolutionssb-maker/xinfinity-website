import type { Metadata } from "next";
import {
  Code2,
  Globe,
  Smartphone,
  Building2,
  Monitor,
  Plane,
  ClipboardCheck,
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
    icon: ClipboardCheck,
    title: "Project & Tender Support",
    description:
      "Professional administrative, tender documentation, project coordination and compliance support for Government, GLC and corporate organisations.",
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
      <section className="relative overflow-hidden border-b border-white/10">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(234,179,8,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.08),transparent_35%)]" />

  <div className="container relative py-28">
    <Link
      href="/"
      className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-white/5 px-5 py-3 text-sm font-semibold text-yellow-400 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-500 hover:text-black"
    >
      ← Back to Home
    </Link>

    <div className="mt-16">
      <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-yellow-500">
        OUR SERVICES
      </span>

      <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight lg:text-7xl">
        Professional Technology
        <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent">
          {" "}
          Services
        </span>
      </h1>

      <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-300">
        We deliver enterprise software, mobile applications, ERP systems,
        websites and digital solutions designed to help organisations innovate,
        automate and grow with confidence.
      </p>
    </div>
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

      <section className="border-y border-white/10 bg-[#08111D] py-24">
  <div className="container">
    <div className="mx-auto max-w-4xl text-center">
      <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-yellow-500">
        PROJECT & TENDER SUPPORT
      </span>

      <h2 className="mt-6 text-4xl font-black lg:text-5xl">
        Project & Tender
        <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent">
          {" "}
          Support Services
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
        We provide professional administrative, tender management and project
        coordination services for Government Agencies, Government-Linked Companies
        (GLCs), Public Listed Companies (PLCs), SMEs and Corporate Organisations.
        From tender preparation to project completion, we help ensure
        documentation, coordination and compliance are managed professionally,
        accurately and on time.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2">
      <div className="rounded-3xl border border-white/10 bg-[#0B1120] p-8">
        <h3 className="text-2xl font-bold text-yellow-400">
          📄 Tender Documentation
        </h3>

        <p className="mt-4 leading-8 text-gray-400">
          Preparation, review, compilation and submission support to ensure your
          tender documents are complete, accurate and professionally presented.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-[#0B1120] p-8">
        <h3 className="text-2xl font-bold text-yellow-400">
          📁 Administration Support
        </h3>

        <p className="mt-4 leading-8 text-gray-400">
          Professional document management, reporting, filing, scheduling and
          administrative coordination to keep projects organised and running
          smoothly.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-[#0B1120] p-8">
        <h3 className="text-2xl font-bold text-yellow-400">
          📊 Project Coordination
        </h3>

        <p className="mt-4 leading-8 text-gray-400">
          Coordinating communication between clients, consultants, contractors,
          suppliers and stakeholders to ensure efficient project execution.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-[#0B1120] p-8">
        <h3 className="text-2xl font-bold text-yellow-400">
          📋 Compliance Support
        </h3>

        <p className="mt-4 leading-8 text-gray-400">
          Documentation verification, submission tracking and compliance support
          to help meet project requirements confidently and on time.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="py-24">
  <div className="container">
    <div className="mx-auto max-w-4xl text-center">
      <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-yellow-500">
        WHY CHOOSE US
      </span>

      <h2 className="mt-6 text-4xl font-black lg:text-5xl">
        Why Businesses Trust
        <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent">
          {" "}
          XINFINITY HUB
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
        We are committed to delivering reliable, professional and confidential
        support throughout every stage of your project, ensuring smooth
        coordination and efficient execution.
      </p>
    </div>

    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[
        "Professional & Confidential Service",
        "Accurate Documentation Management",
        "Experienced in Government, GLC & Corporate Projects",
        "Timely Submission & Follow-Up",
        "Efficient Stakeholder Coordination",
        "Reliable Administrative Support",
      ].map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-white/10 bg-[#0B1120] p-6 transition duration-300 hover:border-yellow-500 hover:-translate-y-1"
        >
          <div className="flex items-start gap-3">
            <div className="mt-1 h-3 w-3 rounded-full bg-yellow-500" />
            <p className="text-lg font-medium text-white">
              {item}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="bg-[#08111D] py-24">
  <div className="container text-center">
    <h2 className="text-5xl font-bold">
      Need Professional Business Support?
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
      Whether you need software development, ERP implementation, project
      administration, tender documentation or IT solutions, our team is ready
      to help you deliver successful business outcomes.
    </p>

    <Link
      href="/contact"
      className="mt-10 inline-flex items-center gap-2 rounded-xl bg-yellow-500 px-8 py-4 font-bold text-black transition hover:bg-yellow-400"
    >
      Get Quote
      <ArrowRight size={20} />
    </Link>
  </div>
</section>
    </main>
  );
}