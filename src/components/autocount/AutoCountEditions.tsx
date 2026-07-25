import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Crown,
  Rocket,
  CheckCircle2,
} from "lucide-react";

import GlassCard from "@/components/ui/enterprise/GlassCard";
import SectionHeading from "@/components/services/SectionHeading";

const editions = [
  {
    icon: Building2,
    name: "Basic Edition",
    badge: "Startup",
    description:
      "Suitable for startups and small businesses requiring essential accounting and inventory management.",
    modules: [
      "General Ledger",
      "Accounts Receivable",
      "Accounts Payable",
      "Cash Book",
      "Inventory",
      "Sales & Purchasing",
      "SST Ready",
      "Financial Reports",
    ],
  },
  {
    icon: Rocket,
    name: "Standard Edition",
    badge: "Most Popular",
    featured: true,
    description:
      "Recommended for growing SMEs requiring better inventory control, reporting and operational efficiency.",
    modules: [
      "Everything in Basic",
      "Multi Warehouse",
      "Batch & Serial Tracking",
      "Advanced Inventory",
      "Department Control",
      "User Access Control",
      "Business Analysis",
      "Custom Reports",
    ],
  },
  {
    icon: Crown,
    name: "Premium Edition",
    badge: "Enterprise",
    description:
      "Designed for organisations requiring manufacturing, advanced costing and enterprise scalability.",
    modules: [
      "Everything in Standard",
      "Manufacturing",
      "Bill of Materials (BOM)",
      "Production Planning",
      "Advanced Costing",
      "Multiple Companies",
      "Enterprise Reporting",
      "Scalable Deployment",
    ],
  },
];

export default function AutoCountEditions() {
  return (
    <section className="py-24">
      <div className="container">
        <SectionHeading
          title="Choose Your AutoCount Edition"
          subtitle="Select the edition that matches your business size, operational requirements and future growth."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {editions.map((edition) => {
            const Icon = edition.icon;

            return (
              <GlassCard
                key={edition.name}
                className={`relative flex h-full flex-col border p-8 transition-all duration-300 hover:-translate-y-2 ${
                  edition.featured
                    ? "border-cyan-400 bg-cyan-500/10"
                    : "border-white/10"
                }`}
              >
                {edition.featured && (
                  <div className="absolute -top-4 left-8 rounded-full bg-cyan-400 px-4 py-1 text-sm font-semibold text-slate-900">
                    Recommended
                  </div>
                )}

                <div className="inline-flex w-fit rounded-2xl bg-cyan-500/15 p-4">
                  <Icon className="h-7 w-7 text-cyan-300" />
                </div>

                <div className="mt-6">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">
                    {edition.badge}
                  </span>

                  <h3 className="mt-5 text-3xl font-bold text-white">
                    {edition.name}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-slate-400">
                    {edition.description}
                  </p>
                </div>

                <div className="mt-8 flex-1 space-y-4">
                  {edition.modules.map((module) => (
                    <div
                      key={module}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-cyan-400" />

                      <span className="text-slate-300">
                        {module}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/services/software-digital-solutions/autocount/compare-editions"
                  className="mt-10 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-semibold text-white transition hover:opacity-90"
                >
                  Compare Editions

                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}