import {
  CheckCircle2,
  Award,
  Cpu,
  Rocket,
} from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";

const features = [
  {
    icon: Cpu,
    title: "Modern Technologies",
    description:
      "Built using modern frameworks and enterprise-grade development practices.",
  },
  {
    icon: Rocket,
    title: "Business Growth",
    description:
      "Solutions designed to improve productivity, efficiency and scalability.",
  },
  {
    icon: Award,
    title: "Professional Quality",
    description:
      "Reliable delivery with a strong focus on security, quality and performance.",
  },
];

const strengths = [
  "Custom Software Development",
  "Enterprise ERP Systems",
  "Mobile Application Development",
  "Corporate Website Development",
  "Business Process Automation",
  "Long-Term Technical Support",
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#08111D] py-24">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-[140px]" />

      <div className="container relative">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}

          <FadeUp>
            <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-semibold tracking-wide text-yellow-500">
              ABOUT XINFINITY
            </span>

            <h2 className="mt-8 text-4xl font-black leading-tight lg:text-6xl">
              Innovative
              <span className="text-yellow-500"> Technology</span>
              <br />
              Reliable Business Solutions
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-300">
              XINFINITY HUB SOLUTIONS SDN. BHD. delivers premium software
              development, ERP solutions, mobile applications, corporate
              websites and digital transformation services for businesses across
              Malaysia.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-400">
              We combine technical expertise with business understanding to
              create secure, scalable and future-ready digital solutions that
              help organisations improve efficiency and accelerate growth.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {strengths.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-xl"
                >
                  <CheckCircle2
                    size={20}
                    className="text-yellow-500"
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right */}

          <FadeUp>
            <div className="space-y-6">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/40 hover:bg-white/10"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500 text-black transition duration-300 group-hover:scale-110">
                        <Icon size={30} />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold">
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