import {
  Award,
  Clock3,
  Headphones,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";

import GlassCard from "@/components/ui/enterprise/GlassCard";
import SectionHeading from "@/components/services/SectionHeading";

const features = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We combine technology and business strategy to deliver practical, future-ready solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Solutions",
    description:
      "Secure, scalable and dependable services designed to support long-term business growth.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "Every solution is tailored to your organization's goals, processes and operational requirements.",
  },
  {
    icon: Headphones,
    title: "Professional Support",
    description:
      "Our team provides responsive consultation, implementation and ongoing technical assistance.",
  },
  {
    icon: Clock3,
    title: "Efficient Delivery",
    description:
      "Structured project management ensures timely delivery without compromising quality.",
  },
  {
    icon: Award,
    title: "Commitment to Excellence",
    description:
      "We strive to deliver high-quality services that build long-term trust and lasting partnerships.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-[#020817] py-28">
      <div className="container">
        <SectionHeading
          title="Why Choose XINFINITY"
          subtitle="A trusted technology partner committed to helping businesses innovate, grow and succeed."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <GlassCard
                key={feature.title}
                className="p-8 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
                  <Icon className="h-8 w-8 text-cyan-400" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {feature.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}