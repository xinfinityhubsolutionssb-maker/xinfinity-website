import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  Minus,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Compare AutoCount Editions | XINFINITY HUB SOLUTIONS",
  description:
    "Compare AutoCount editions and choose the right solution for your business.",
};

const features = [
  {
    feature: "General Ledger",
    basic: true,
    standard: true,
    premium: true,
  },
  {
    feature: "Accounts Receivable",
    basic: true,
    standard: true,
    premium: true,
  },
  {
    feature: "Accounts Payable",
    basic: true,
    standard: true,
    premium: true,
  },
  {
    feature: "Inventory",
    basic: true,
    standard: true,
    premium: true,
  },
  {
    feature: "Sales & Purchasing",
    basic: true,
    standard: true,
    premium: true,
  },
  {
    feature: "Multi Warehouse",
    basic: false,
    standard: true,
    premium: true,
  },
  {
    feature: "Batch & Serial Number",
    basic: false,
    standard: true,
    premium: true,
  },
  {
    feature: "Advanced User Permission",
    basic: false,
    standard: true,
    premium: true,
  },
  {
    feature: "Manufacturing",
    basic: false,
    standard: false,
    premium: true,
  },
  {
    feature: "Bill of Materials (BOM)",
    basic: false,
    standard: false,
    premium: true,
  },
  {
    feature: "Advanced Costing",
    basic: false,
    standard: false,
    premium: true,
  },
  {
    feature: "Enterprise Scalability",
    basic: false,
    standard: true,
    premium: true,
  },
];

function Cell({ value }: { value: boolean }) {
  return value ? (
    <Check className="mx-auto h-5 w-5 text-cyan-400" />
  ) : (
    <Minus className="mx-auto h-5 w-5 text-slate-500" />
  );
}

export default function CompareEditionsPage() {
  return (
    <main className="bg-[#07111F] text-white">
      {/* Hero */}
      <section className="border-b border-cyan-500/10">
        <div className="container py-24">
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-300">
            AutoCount Comparison
          </span>

          <h1 className="mt-6 text-5xl font-bold md:text-6xl">
            Compare AutoCount Editions
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Compare the core capabilities available in each AutoCount edition
            and select the package that best matches your business growth.
          </p>
        </div>
      </section>

      {/* Table */}
      <section className="container py-20">
        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-white/10 bg-cyan-500/10">
                <th className="px-6 py-5 text-left text-lg font-semibold">
                  Features
                </th>

                <th className="px-6 py-5 text-center text-lg font-semibold">
                  Basic
                </th>

                <th className="px-6 py-5 text-center text-lg font-semibold text-cyan-300">
                  Standard
                </th>

                <th className="px-6 py-5 text-center text-lg font-semibold text-amber-300">
                  Premium
                </th>
              </tr>
            </thead>

            <tbody>
              {features.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-white/5 hover:bg-white/5"
                >
                  <td className="px-6 py-5 font-medium">
                    {row.feature}
                  </td>

                  <td className="px-6 py-5 text-center">
                    <Cell value={row.basic} />
                  </td>

                  <td className="px-6 py-5 text-center">
                    <Cell value={row.standard} />
                  </td>

                  <td className="px-6 py-5 text-center">
                    <Cell value={row.premium} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Recommendation */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="container py-20">
          <div className="mx-auto max-w-4xl text-center">
            <BadgeCheck className="mx-auto h-12 w-12 text-cyan-400" />

            <h2 className="mt-6 text-4xl font-bold">
              Which Edition Should You Choose?
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              <strong>Basic</strong> is suitable for startups and small
              businesses.
              <br />
              <strong>Standard</strong> is recommended for most SMEs and growing
              companies.
              <br />
              <strong>Premium</strong> is designed for organisations requiring
              manufacturing, advanced costing and enterprise-level operations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-24">
        <div className="rounded-[36px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-amber-500/10 p-10 md:p-14">
          <h2 className="text-4xl font-bold">
            Need Help Choosing?
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
            Our AutoCount specialists will recommend the most suitable edition
            based on your business processes, number of users and future
            expansion plans.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/services/software-digital-solutions/autocount/resources"
              className="inline-flex items-center rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Next: Resources
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}