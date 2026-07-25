import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Monitor,
  Briefcase,
  Plane,
  ClipboardCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Discover XINFINITY HUB SOLUTIONS SDN. BHD.'s complete business solutions including software development, AutoCount solutions, IT infrastructure, administration support, travel services and project & tender support.",
};

const services = [
  {
    title: "Software & Digital Solutions",
    description:
      "Empowering businesses through enterprise software, AutoCount implementation, cloud solutions, website development, mobile applications and digital transformation.",
    href: "/services/software-digital-solutions",
    icon: Code2,
    color: "from-cyan-500 to-blue-600",
    features: [
      "Business Software",
      "AutoCount Solutions",
      "Website Development",
      "Mobile Apps",
      "Cloud Solutions",
      "Cybersecurity",
    ],
  },
  {
    title: "Hardware & IT Infrastructure",
    description:
      "Reliable hardware supply, office IT setup, networking, servers, storage, CCTV, access control and technical support.",
    href: "/services/hardware-it-infrastructure",
    icon: Monitor,
    color: "from-indigo-500 to-blue-700",
    features: [
      "Hardware Supply",
      "Network Infrastructure",
      "Server Solutions",
      "Cloud Infrastructure",
      "CCTV",
      "IT Support",
    ],
  },
  {
    title: "Accounts, Administration & Manpower Support",
    description:
      "Professional administrative, accounting, documentation and manpower solutions supporting efficient business operations.",
    href: "/services/accounts-administration-manpower-support",
    icon: Briefcase,
    color: "from-emerald-500 to-teal-600",
    features: [
      "Bookkeeping",
      "Administration",
      "Documentation",
      "AGM Preparation",
      "Data Management",
      "Manpower Supply",
    ],
  },
  {
    title: "Travel & Tour Services",
    description:
      "Comprehensive travel planning and coordination for business and leisure with seamless booking and support services.",
    href: "/services/travel-tour-services",
    icon: Plane,
    color: "from-sky-500 to-cyan-600",
    features: [
      "Flight Booking",
      "Hotel Booking",
      "Corporate Travel",
      "Airport Transfer",
      "Travel Planning",
      "Group Travel",
    ],
  },
  {
    title: "Project & Tender Support Services",
    description:
      "Professional documentation, compliance, tender preparation and project coordination for Government, GLC and corporate organisations.",
    href: "/services/project-tender-support-services",
    icon: ClipboardCheck,
    color: "from-violet-500 to-fuchsia-600",
    features: [
      "Tender Documentation",
      "Compliance Review",
      "Project Coordination",
      "Document Control",
      "Submission Tracking",
      "Reporting",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-[#050816]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.18),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_35%)]" />

        <div className="container relative py-24 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-cyan-300">
              Enterprise Business Solutions
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-7xl">
              Complete Business
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Solutions Under One Roof
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              XINFINITY HUB SOLUTIONS delivers integrated technology,
              infrastructure, administration and business support services that
              help organisations improve productivity, efficiency and long-term
              growth.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1120] py-24">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-white">
              Our Core Business Services
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-slate-400">
              We provide comprehensive business solutions designed to support
              SMEs, corporate organisations, Government agencies and enterprise
              clients through every stage of their digital transformation.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-white/10"
                >
                  <div
                    className={`mb-8 inline-flex rounded-2xl bg-gradient-to-r ${service.color} p-5`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-400">
                    {service.description}
                  </p>

                  <div className="mt-8 grid gap-4">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-slate-300"
                      >
                        <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link
                    href={service.href}
                    className="mt-10 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105"
                  >
                    Explore Service
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}