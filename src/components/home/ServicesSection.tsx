import Link from "next/link";
import { ArrowRight } from "lucide-react";

import SectionHeading from "@/components/services/SectionHeading";
import GlassCard from "@/components/ui/enterprise/GlassCard";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="py-28">
      <div className="container">

        <SectionHeading
          title="Our Professional Services"
          subtitle="Delivering technology and business solutions that empower organizations to grow with confidence."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (
            <GlassCard
              key={service.slug}
              className="group flex h-full flex-col p-8 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                Professional Service
              </div>

              <h3 className="text-2xl font-bold text-white">
                {service.title}
              </h3>

              <p className="mt-5 flex-1 leading-8 text-slate-400">
                {service.description}
              </p>

              <Link
                href={`/services/${service.slug}`}
                className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
              >
                Learn More
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </GlassCard>
          ))}

        </div>

      </div>
    </section>
  );
}