import FadeUp from "@/components/animations/FadeUp";
import {
  Code2,
  Globe,
  Smartphone,
  Building2,
  Monitor,
  Plane,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Custom software solutions designed to improve productivity and business efficiency.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for Android and iOS.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Professional corporate websites, portals and e-commerce platforms.",
  },
  {
    icon: Building2,
    title: "ERP & Business Systems",
    description:
      "Accounting, Inventory, CRM, POS and enterprise business management solutions.",
  },
  {
    icon: Monitor,
    title: "IT Hardware Supply",
    description:
      "Supply of computers, networking devices, POS systems and business equipment.",
  },
  {
    icon: Plane,
    title: "Travel & Agency",
    description:
      "Reliable travel arrangements and professional agency services.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#05070F]">
      <div className="container">

        <FadeUp>
          <div className="text-center">

            <span className="font-semibold tracking-widest text-yellow-500">
              OUR SERVICES
            </span>

            <h2 className="mt-4 text-4xl font-bold lg:text-6xl">
              Comprehensive Business Solutions
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
              We provide end-to-end technology services that empower
              businesses to innovate, automate and grow with confidence.
            </p>

          </div>
        </FadeUp>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <FadeUp key={service.title} delay={index * 0.1}>
                <div className="group rounded-3xl border border-white/10 bg-[#0B1120] p-8 transition-all duration-300 hover:-translate-y-3 hover:border-yellow-500">

                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-500 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-black">
                    <Icon size={32} />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold">
                    {service.title}
                  </h3>

                  <p className="leading-8 text-gray-400">
                    {service.description}
                  </p>

                  <button className="mt-8 font-semibold text-yellow-500 transition hover:translate-x-2">
                    Learn More →
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