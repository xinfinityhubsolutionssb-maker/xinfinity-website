import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Building2,
  Crown,
  Users,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AutoCount Editions | XINFINITY HUB SOLUTIONS",
  description:
    "Compare AutoCount editions and find the right solution for your business with XINFINITY HUB SOLUTIONS.",
};

const editions = [
  {
    title: "Basic Edition",
    icon: Building2,
    badge: "Start Small",
    description:
      "Ideal for startups and small businesses looking for reliable accounting software with essential business functions.",
    features: [
      "General Ledger",
      "Accounts Receivable",
      "Accounts Payable",
      "Cash Book",
      "Basic Inventory",
      "Sales & Purchasing",
      "Financial Reports",
      "SST Ready",
    ],
  },
  {
    title: "Standard Edition",
    icon: Users,
    badge: "Most Popular",
    featured: true,
    description:
      "Suitable for growing SMEs that require more advanced inventory, reporting and operational management.",
    features: [
      "Everything in Basic",
      "Multi Warehouse",
      "Advanced Inventory",
      "Batch & Serial Tracking",
      "User Access Control",
      "Custom Reports",
      "Business Analysis",
      "Department Control",
    ],
  },
  {
    title: "Premium Edition",
    icon: Crown,
    badge: "Enterprise",
    description:
      "Designed for larger organisations with complex business processes and advanced operational requirements.",
    features: [
      "Everything in Standard",
      "Manufacturing Support",
      "Bill of Materials (BOM)",
      "Advanced Costing",
      "Multiple Companies",
      "Powerful Reporting",
      "Scalable Architecture",
      "Enterprise Ready",
    ],
  },
];

const reasons = [
  "Scalable for business growth",
  "Malaysia compliance ready",
  "Cloud & Desktop deployment",
  "Secure data management",
  "Professional implementation",
  "Training & after-sales support",
];

export default function AutoCountEditionsPage() {
  return (
    <main className="bg-[#07111F] text-white">
      {/* Hero */}
      <section className="border-b border-cyan-500/10">
        <div className="container py-24">
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-300">
            AutoCount Editions
          </span>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold md:text-6xl">
            Choose the Right Edition for Your Business
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            AutoCount provides multiple editions to support businesses at
            different stages of growth. Whether you are a startup, SME or
            enterprise, we will recommend the most suitable edition based on
            your business requirements.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="container py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          {editions.map((edition) => {
            const Icon = edition.icon;

            return (
              <div
                key={edition.title}
                className={`relative rounded-3xl border p-8 backdrop-blur transition duration-300 hover:-translate-y-2 ${
                  edition.featured
                    ? "border-cyan-400 bg-cyan-500/10 shadow-[0_0_40px_rgba(34,211,238,.15)]"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {edition.featured && (
                  <div className="absolute -top-4 left-8 rounded-full bg-cyan-400 px-4 py-1 text-sm font-semibold text-slate-900">
                    Recommended
                  </div>
                )}

                <div className="inline-flex rounded-2xl bg-cyan-500/15 p-4">
                  <Icon className="h-8 w-8 text-cyan-300" />
                </div>

                <div className="mt-6">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                    {edition.badge}
                  </span>

                  <h2 className="mt-5 text-3xl font-bold">
                    {edition.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-400">
                    {edition.description}
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  {edition.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="container py-20">
          <div className="mx-auto max-w-4xl text-center">
            <ShieldCheck className="mx-auto h-12 w-12 text-cyan-400" />

            <h2 className="mt-6 text-4xl font-bold">
              Why Choose AutoCount?
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Every AutoCount edition is designed to improve productivity,
              financial accuracy and business efficiency while remaining
              scalable for future expansion.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-24">
        <div className="rounded-[36px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-amber-500/10 p-10 md:p-14">
          <h2 className="text-4xl font-bold">
            Compare Editions & Pricing
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
            View the complete feature comparison and pricing guide to select the
            AutoCount edition that best matches your business.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/services/software-digital-solutions/autocount/pricing"
              className="inline-flex items-center rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Next: Pricing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}