import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import GlassCard from "@/components/ui/enterprise/GlassCard";
import SectionHeading from "@/components/services/SectionHeading";
import { autoCountProducts } from "@/data/autocount-products";

export default function AutoCountProducts() {
  return (
    <section className="py-24">
      <div className="container">
        <SectionHeading
          title="Official AutoCount Product Portfolio"
          subtitle="Comprehensive business software solutions designed to help Malaysian businesses improve productivity, financial management and operational efficiency."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {autoCountProducts.map((product) => (
            <GlassCard
              key={product.name}
              className="group flex h-full flex-col border border-white/10 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-500/5"
            >
              <div className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                Official AutoCount Solution
              </div>

              <h3 className="text-2xl font-bold text-white">
                {product.name}
              </h3>

              <p className="mt-5 flex-1 leading-8 text-slate-400">
                {product.description}
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="mb-4 text-sm font-semibold uppercase tracking-wide text-cyan-300">
                  Our Services
                </div>

                <div className="space-y-3">
                  {[
                    "Business Consultation",
                    "Software Licensing",
                    "Implementation & Deployment",
                    "Data Migration",
                    "Configuration & Customisation",
                    "User Training",
                    "Technical Support",
                    "Future Upgrades",
                  ].map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="h-4 w-4 text-cyan-400" />

                      <span className="text-sm text-slate-300">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                Request Free Consultation

                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}