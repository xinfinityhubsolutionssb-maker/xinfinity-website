import type { Metadata } from "next";
import {
  BrainCircuit,
  Building2,
  Database,
  ShieldCheck,
  BarChart3,
  Workflow,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Solutions",
  description:
    "Discover XINFINITY HUB business solutions including ERP, CRM, POS, Inventory, Business Intelligence, Cloud Systems and Digital Transformation.",

  keywords: [
    "ERP System Malaysia",
    "CRM System",
    "POS System",
    "Inventory Management",
    "Business Intelligence",
    "Cloud ERP",
    "Digital Transformation",
    "Business Automation",
  ],

  alternates: {
    canonical: "/solutions",
  },

  openGraph: {
    title: "Business Solutions | XINFINITY HUB SOLUTIONS SDN. BHD.",
    description:
      "Enterprise-grade business solutions for companies looking to automate and scale.",
    url: "/solutions",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Business Solutions | XINFINITY HUB SOLUTIONS SDN. BHD.",
    description:
      "ERP, CRM, POS, Inventory and Business Automation solutions.",
  },
};

const solutions = [
  {
    icon: Building2,
    title: "Enterprise ERP",
    description:
      "Complete ERP solution integrating finance, purchasing, inventory, sales and reporting into one platform.",
  },
  {
    icon: Database,
    title: "Inventory Management",
    description:
      "Real-time stock tracking, warehouse management and inventory control for growing businesses.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "Automate repetitive business processes to improve productivity and reduce operational costs.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Interactive dashboards and reports that transform business data into actionable insights.",
  },
  {
    icon: BrainCircuit,
    title: "AI Business Solutions",
    description:
      "Leverage AI-powered automation, intelligent assistants and predictive analytics to improve decision-making.",
  },
  {
    icon: ShieldCheck,
    title: "Cloud & Security",
    description:
      "Secure cloud infrastructure, backup strategies and cybersecurity solutions to protect your business.",
  },
];

export default function SolutionsPage() {
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
        BUSINESS SOLUTIONS
      </span>

      <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight lg:text-7xl">
        Intelligent
        <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent">
          {" "}
          Business Solutions
        </span>
      </h1>

      <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-300">
        We develop enterprise platforms that automate operations, improve
        decision-making and enable organisations to scale confidently through
        modern digital technologies.
      </p>
    </div>
  </div>
</section>

      <section className="py-24">
        <div className="container grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <div
                key={solution.title}
                className="rounded-3xl border border-white/10 bg-[#0B1120] p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-500"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-500">
                  <Icon size={32} />
                </div>

                <h2 className="text-2xl font-bold">
                  {solution.title}
                </h2>

                <p className="mt-5 leading-8 text-gray-400">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#08111D] py-24">
        <div className="container text-center">
          <h2 className="text-5xl font-bold">
            Ready To Transform Your Business?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Let our team help you choose and implement the right solution for
            your organization.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-yellow-500 px-8 py-4 font-bold text-black transition hover:bg-yellow-400"
          >
            Talk To Our Team
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}