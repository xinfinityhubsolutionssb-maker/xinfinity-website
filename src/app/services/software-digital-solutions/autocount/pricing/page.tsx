import type { Metadata } from "next";
import Link from "next/link";
import {
  Cloud,
  Monitor,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  BadgeInfo,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AutoCount Pricing | XINFINITY HUB SOLUTIONS",
  description:
    "View AutoCount Cloud and Desktop pricing information from XINFINITY HUB SOLUTIONS.",
};

const cloudPlans = [
  {
    name: "Basic",
    price: "From RM 75 / month",
    description: "Suitable for startups and small businesses.",
  },
  {
    name: "Standard",
    price: "From RM 150 / month",
    description: "Ideal for growing SMEs with additional users and features.",
  },
  {
    name: "Premium",
    price: "Contact Us",
    description: "Enterprise deployment with customised requirements.",
  },
];

const desktopItems = [
  "Desktop licensing depends on edition, modules and number of users.",
  "Additional modules are licensed separately.",
  "Implementation, training and data migration are quoted individually.",
  "Annual support renewal applies.",
];

const includes = [
  "Professional consultation",
  "Software implementation",
  "User training",
  "Data migration assistance",
  "After-sales support",
  "Remote assistance",
];

export default function AutoCountPricingPage() {
  return (
    <main className="bg-[#07111F] text-white">
      {/* Hero */}
      <section className="border-b border-cyan-500/10">
        <div className="container py-24">
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-300">
            AutoCount Pricing
          </span>

          <h1 className="mt-6 text-5xl font-bold md:text-6xl">
            Flexible Pricing Options
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Choose between AutoCount Cloud subscription or AutoCount Desktop
            perpetual licensing. Our consultants will recommend the most
            suitable option based on your business size and operational
            requirements.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="container py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Cloud */}
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-500/10 p-8 backdrop-blur">
            <div className="flex items-center gap-3">
              <Cloud className="h-8 w-8 text-cyan-300" />
              <h2 className="text-3xl font-bold">
                AutoCount Cloud
              </h2>
            </div>

            <p className="mt-5 text-slate-300">
              Subscription-based solution with secure cloud access, automatic
              updates and remote accessibility.
            </p>

            <div className="mt-8 space-y-5">
              {cloudPlans.map((plan) => (
                <div
                  key={plan.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{plan.name}</h3>

                    <span className="rounded-full bg-cyan-400 px-3 py-1 text-sm font-semibold text-slate-900">
                      {plan.price}
                    </span>
                  </div>

                  <p className="mt-3 text-slate-400">
                    {plan.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="flex items-center gap-3">
              <Monitor className="h-8 w-8 text-cyan-300" />
              <h2 className="text-3xl font-bold">
                AutoCount Desktop
              </h2>
            </div>

            <p className="mt-5 text-slate-300">
              One-time software licensing with optional annual maintenance and
              support plans.
            </p>

            <div className="mt-8 space-y-4">
              {desktopItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 text-cyan-400" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-500/10 p-5">
              <div className="flex items-start gap-3">
                <BadgeInfo className="mt-1 h-5 w-5 text-amber-300" />

                <p className="text-sm leading-7 text-slate-300">
                  Desktop pricing varies depending on the selected edition,
                  number of concurrent users and optional modules. Contact us
                  for an official quotation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Included Services */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="container py-20">
          <div className="text-center">
            <ShieldCheck className="mx-auto h-12 w-12 text-cyan-400" />

            <h2 className="mt-6 text-4xl font-bold">
              Every Project Includes
            </h2>

            <p className="mt-5 text-slate-400">
              XINFINITY HUB SOLUTIONS provides complete implementation services
              to ensure a successful deployment.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {includes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-24">
        <div className="rounded-[36px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-amber-500/10 p-10 md:p-14">
          <h2 className="text-4xl font-bold">
            Need an Official Quotation?
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
            Tell us your business size, number of users and required modules.
            We&apos;ll recommend the right AutoCount package and prepare a detailed
quotation.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/services/software-digital-solutions/autocount/compare-editions"
              className="inline-flex items-center rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Next: Compare Editions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Request Quotation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}