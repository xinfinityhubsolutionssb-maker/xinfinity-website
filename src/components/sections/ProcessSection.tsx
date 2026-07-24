"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ClipboardList,
  Lightbulb,
  Code2,
  ShieldCheck,
  Rocket,
  Headphones,
} from "lucide-react";

const process = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Consultation",
    description:
      "We understand your business goals, challenges and project requirements before proposing the right solution.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Planning",
    description:
      "Our team prepares the project architecture, timeline and implementation strategy for efficient execution.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Development",
    description:
      "Solutions are developed using modern technologies with a focus on scalability, security and performance.",
  },
  {
    icon: ShieldCheck,
    step: "04",
    title: "Testing",
    description:
      "Every feature undergoes thorough quality assurance and testing before deployment.",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Deployment",
    description:
      "We deploy your solution securely with proper configuration and production readiness checks.",
  },
  {
    icon: Headphones,
    step: "06",
    title: "Support",
    description:
      "Continuous maintenance, enhancements and technical support ensure long-term business success.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#05070F] py-24">
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-semibold tracking-widest text-yellow-500">
            OUR PROCESS
          </span>

          <h2 className="mt-6 text-4xl font-black lg:text-6xl">
            From Idea To
            <span className="text-yellow-500"> Successful Delivery</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Our proven development methodology ensures every project is planned,
            executed and delivered with quality, transparency and long-term
            business value.
          </p>
        </motion.div>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent xl:block" />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-6">
            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:border-yellow-500/40 hover:bg-white/10"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500 text-black transition duration-300 group-hover:scale-110">
                    <Icon size={30} />
                  </div>

                  <div className="mt-5 text-sm font-bold tracking-widest text-yellow-500">
                    STEP {item.step}
                  </div>

                  <h3 className="mt-3 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {item.description}
                  </p>

                  {index < process.length - 1 && (
                    <ArrowRight
                      size={18}
                      className="absolute -right-4 top-10 hidden text-yellow-500 xl:block"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}