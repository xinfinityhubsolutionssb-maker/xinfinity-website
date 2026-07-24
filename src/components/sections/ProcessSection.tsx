"use client";

import { motion } from "framer-motion";
import {
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
    title: "Discovery",
    description:
      "We understand your business objectives, challenges and future vision before recommending the right digital strategy.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Strategy",
    description:
      "We design a clear implementation roadmap, system architecture and development plan tailored to your organisation.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Engineering",
    description:
      "Our team develops secure, scalable and high-performance solutions using modern technologies and best practices.",
  },
  {
    icon: ShieldCheck,
    step: "04",
    title: "Quality Assurance",
    description:
      "Comprehensive testing ensures reliability, security, performance and a seamless user experience before launch.",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Launch",
    description:
      "Solutions are deployed with careful planning, optimisation and production readiness for a smooth transition.",
  },
  {
    icon: Headphones,
    step: "06",
    title: "Continuous Support",
    description:
      "We continue improving, maintaining and supporting your solution to ensure long-term business success.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#05070F] py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.08),transparent_35%)]" />

      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[200px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-yellow-500">
            OUR PROCESS
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight lg:text-6xl">
            Turning Vision Into
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent">
              {" "}
              Business Success
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">
            Our structured delivery methodology ensures every project is
            executed with precision, transparency and a relentless focus on
            quality from concept to continuous improvement.
          </p>
        </motion.div>

        <div className="relative mt-24">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-yellow-500/20 to-transparent lg:block xl:hidden" />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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
                  whileHover={{ y: -10 }}
                  className="group relative flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827] to-[#0B1120] p-8 backdrop-blur-xl transition-all duration-500 hover:border-yellow-500/40 hover:shadow-[0_0_50px_rgba(234,179,8,0.15)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 text-black transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon size={30} />
                    </div>

                    <span className="text-5xl font-black text-white/10">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 flex-1 leading-8 text-gray-400">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}