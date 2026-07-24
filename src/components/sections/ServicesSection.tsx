import FadeUp from "@/components/animations/FadeUp";
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  Code2,
  Globe,
  Monitor,
  Plane,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Custom enterprise software engineered to automate operations, improve productivity and accelerate business growth.",
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    description:
      "Modern Android and iOS applications delivering seamless user experiences and high performance.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Professional corporate websites, customer portals and digital platforms built for speed, security and conversions.",
  },
  {
    icon: Building2,
    title: "ERP & Business Systems",
    description:
      "Integrated ERP, CRM, POS, inventory and accounting solutions that streamline business management.",
  },
  {
    icon: ClipboardCheck,
    title: "Project & Tender Support",
    description:
      "Professional tender documentation, project administration, coordination and compliance support for Government, GLC and corporate organisations.",
  },
  {
    icon: Monitor,
    title: "IT Infrastructure",
    description:
      "Business hardware, networking solutions and technology infrastructure that keeps your organisation connected.",
  },
  {
    icon: Plane,
    title: "Travel & Agency Services",
    description:
      "Reliable travel arrangements and agency services delivered with professionalism and efficiency.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#05070F] py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.08),transparent_35%)]" />

      <div className="container relative z-10">
        <FadeUp>
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-yellow-500">
              OUR SERVICES
            </span>

            <h2 className="mt-8 text-4xl font-black leading-tight lg:text-6xl">
              Smart Technology
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent">
                {" "}
                Built For Modern Business
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">
              We provide end-to-end technology, project management and business support services that help organisations improve efficiency, strengthen operations and confidently achieve their business goals.
            </p>
          </div>
        </FadeUp>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <FadeUp key={service.title} delay={index * 0.08}>
                <div className="group flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827] to-[#0B1120] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-yellow-500/40 hover:shadow-[0_0_50px_rgba(234,179,8,0.15)]">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 text-black transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-5 flex-1 leading-8 text-gray-400">
                    {service.description}
                  </p>

                  <button className="mt-8 inline-flex items-center gap-2 font-semibold text-yellow-500 transition-all duration-300 group-hover:translate-x-2">
                    Learn More
                    <ArrowRight size={18} />
                  </button>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}