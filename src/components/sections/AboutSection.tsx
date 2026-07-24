import {
  Award,
  CheckCircle2,
  Cpu,
  Rocket,
} from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";

const features = [
  {
    icon: Cpu,
    title: "Future-Ready Technologies",
    description:
      "We build scalable digital platforms using modern technologies, cloud architecture and enterprise-grade engineering standards.",
  },
  {
    icon: Rocket,
    title: "Growth-Focused Solutions",
    description:
      "Every solution is designed to streamline operations, increase productivity and support long-term business growth.",
  },
  {
    icon: Award,
    title: "Trusted Professional Delivery",
    description:
      "Quality, security and reliability are embedded into every project we deliver, from planning to deployment and long-term support.",
  },
];

const strengths = [
  "Custom Software Development",
  "Enterprise ERP Solutions",
  "Mobile Application Development",
  "Corporate Website Development",
  "Cloud & Digital Transformation",
  "Long-Term Technical Support",
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#08111D] py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(234,179,8,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.08),transparent_35%)]" />

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="container relative z-10">
        <div className="grid items-center gap-20 lg:grid-cols-[1.2fr_1fr]">
          <FadeUp>
            <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-yellow-500">
              ABOUT XINFINITY HUB
            </span>

            <h2 className="mt-8 max-w-4xl text-4xl font-black leading-tight lg:text-6xl">
              Engineering The Future Of
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent">
                {" "}
                Digital Business
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-300">
              XINFINITY HUB SOLUTIONS SDN. BHD. empowers organisations with
              enterprise software, intelligent automation, modern web
              technologies and scalable digital solutions that create measurable
              business value.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-9 text-gray-400">
              We combine strategic thinking, innovative technologies and
              professional engineering to help businesses modernise operations,
              improve efficiency and stay competitive in a rapidly evolving
              digital world.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {strengths.map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/30 hover:bg-white/10"
                >
                  <CheckCircle2
                    size={22}
                    className="text-yellow-500 transition group-hover:scale-110"
                  />

                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp>
            <div className="space-y-7">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/40 hover:shadow-[0_0_50px_rgba(234,179,8,0.15)]"
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 text-black transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <Icon size={30} />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-4 leading-8 text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}