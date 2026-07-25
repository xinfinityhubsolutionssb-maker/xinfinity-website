import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  ShoppingCart,
  Store,
  Factory,
  UtensilsCrossed,
  Truck,
  Wrench,
  HeartPulse,
  GraduationCap,
  Hotel,
  Briefcase,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AutoCount Business Types | XINFINITY HUB SOLUTIONS",
  description:
    "Discover AutoCount accounting and business management solutions tailored for different industries. XINFINITY HUB SOLUTIONS helps businesses implement the right AutoCount solution.",
};

const industries = [
  {
    icon: Store,
    title: "Retail",
    description:
      "Suitable for retail stores requiring inventory control, sales management, customer management and real-time business reporting.",
  },
  {
    icon: ShoppingCart,
    title: "Wholesale & Distribution",
    description:
      "Manage purchasing, inventory movement, multiple warehouses, pricing structures and customer orders efficiently.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Support production planning, bill of materials (BOM), costing, stock movement and manufacturing operations.",
  },
  {
    icon: Building2,
    title: "Trading",
    description:
      "Designed for trading businesses that require accurate accounting, inventory management and business insights.",
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Beverage",
    description:
      "Handle purchasing, inventory, costing, sales and business performance for restaurants and food businesses.",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description:
      "Track inventory, purchasing, customer billing and operational costs across logistics businesses.",
  },
  {
    icon: Wrench,
    title: "Construction & Engineering",
    description:
      "Manage project costing, procurement, subcontractors, expenses and financial reporting.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Suitable for clinics, pharmacies and healthcare providers requiring inventory and financial management.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Support educational institutions with accounting, fee collection, purchasing and expense management.",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description:
      "Manage finance, inventory and operational costs for hotels, resorts and accommodation businesses.",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description:
      "Perfect for consultants, agencies and service providers requiring complete accounting and financial reporting.",
  },
];

const benefits = [
  "Integrated accounting & finance",
  "Inventory & warehouse management",
  "Sales & purchasing management",
  "Multi-user access",
  "Real-time reporting",
  "Audit trail",
  "Business analytics",
  "Scalable for growing businesses",
];

export default function BusinessTypesPage() {
  return (
    <main className="bg-[#07111F] text-white">
      {/* Hero */}
      <section className="border-b border-cyan-500/10">
        <div className="container py-24">
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-300">
            AutoCount Solutions
          </span>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
            Business Types
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            AutoCount provides flexible accounting and business management
            solutions suitable for businesses across multiple industries. At
            XINFINITY HUB SOLUTIONS, we help organisations choose, implement
            and customise the right AutoCount solution based on their business
            requirements.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="container py-20">
        <div className="mb-14 max-w-3xl">
          <h2 className="text-4xl font-bold">
            Industries We Support
          </h2>

          <p className="mt-4 text-slate-400">
            Whether you are a startup, SME or growing enterprise, AutoCount
            offers comprehensive business management capabilities that adapt to
            your industry.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-500/10"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-cyan-500/15 p-4">
                  <Icon className="h-7 w-7 text-cyan-300" />
                </div>

                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="container py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold">
                Why Businesses Choose AutoCount
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                AutoCount helps businesses streamline operations by integrating
                accounting, inventory, sales and purchasing into one reliable
                platform that grows together with your organisation.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
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
        </div>
      </section>

      {/* CTA */}
      <section className="container py-24">
        <div className="rounded-[36px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-amber-500/10 p-10 md:p-14">
          <h2 className="text-4xl font-bold">
            Not Sure Which AutoCount Solution Fits Your Business?
          </h2>

          <p className="mt-5 max-w-3xl text-slate-300 leading-8">
            Our consultants will evaluate your business workflow and recommend
            the most suitable AutoCount products, editions and implementation
            strategy based on your operational requirements.
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
              href="/services/software-digital-solutions/autocount/products"
              className="inline-flex items-center rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Next: Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}