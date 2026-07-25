import {
  Award,
  Building2,
  Globe,
  ShieldCheck,
} from "lucide-react";

import SectionHeading from "@/components/services/SectionHeading";
import GlassCard from "@/components/ui/enterprise/GlassCard";

const highlights = [
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description:
      "Custom software, ERP systems and digital transformation solutions tailored for modern businesses.",
  },
  {
    icon: Globe,
    title: "Multi-Industry Experience",
    description:
      "Serving SMEs, corporations and organizations across various industries with scalable technology solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Partnership",
    description:
      "Committed to delivering secure, dependable and long-term technology support for our clients.",
  },
  {
    icon: Award,
    title: "Quality Commitment",
    description:
      "Focused on professionalism, innovation and customer satisfaction in every project we undertake.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-28 bg-[#020817]">
      <div className="container">

        <SectionHeading
          title="About XINFINITY HUB SOLUTIONS"
          subtitle="Helping organizations embrace technology through innovative software, infrastructure and business solutions."
        />

        <div className="mx-auto max-w-5xl text-center">
          <p className="text-lg leading-9 text-slate-300">
            XINFINITY HUB SOLUTIONS SDN. BHD. provides enterprise software
            development, IT infrastructure, business automation, digital
            transformation and professional support services. We partner with
            businesses to streamline operations, improve efficiency and build
            sustainable growth through innovative technology.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <GlassCard key={item.title} className="p-8 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
                  <Icon className="h-8 w-8 text-cyan-400" />
                </div>

                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {item.description}
                </p>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}