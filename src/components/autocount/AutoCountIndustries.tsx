import {
  Building2,
  Factory,
  ShoppingBag,
  Store,
  Truck,
  UtensilsCrossed,
  Wrench,
  HeartPulse,
  GraduationCap,
  Hotel,
  Briefcase,
  ShoppingCart,
} from "lucide-react";

import GlassCard from "@/components/ui/enterprise/GlassCard";
import SectionHeading from "@/components/services/SectionHeading";

const industries = [
  {
    icon: Store,
    title: "Retail",
    description:
      "Manage POS, inventory, customer loyalty, promotions and financial reporting from one integrated platform.",
  },
  {
    icon: ShoppingBag,
    title: "Wholesale",
    description:
      "Control purchasing, pricing, inventory movement and customer orders efficiently.",
  },
  {
    icon: Truck,
    title: "Distribution",
    description:
      "Monitor multiple warehouses, deliveries, inventory transfers and stock availability in real time.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Support production planning, Bill of Materials (BOM), costing and manufacturing operations.",
  },
  {
    icon: Building2,
    title: "Trading",
    description:
      "Improve accounting, purchasing, sales and inventory management for trading businesses.",
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Beverage",
    description:
      "Suitable for restaurants, cafés and food businesses requiring integrated POS and inventory control.",
  },
  {
    icon: Wrench,
    title: "Construction",
    description:
      "Track project expenses, procurement, supplier payments and financial reporting.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Manage clinic, pharmacy and healthcare operations with accurate inventory and accounting.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Handle finance, purchasing and operational expenses for educational institutions.",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description:
      "Improve financial management and operational reporting for hotels and accommodation providers.",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description:
      "Ideal for consultants, agencies and service providers requiring complete accounting management.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description:
      "Integrate online sales with accounting, inventory and order management for growing businesses.",
  },
];

export default function AutoCountIndustries() {
  return (
    <section className="py-24">
      <div className="container">
        <SectionHeading
          title="Industries Using AutoCount"
          subtitle="AutoCount is trusted by businesses across various industries, helping organisations streamline operations, improve financial control and support long-term growth."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <GlassCard
                key={industry.title}
                className="group h-full border border-white/10 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-500/5"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-cyan-500/15 p-4">
                  <Icon className="h-7 w-7 text-cyan-300" />
                </div>

                <h3 className="text-xl font-bold text-white">
                  {industry.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {industry.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}