"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Headphones,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Trusted Technology Partner",
    desc: "We build long-term partnerships through transparency, professional delivery and dependable technical expertise.",
  },
  {
    icon: Cpu,
    title: "Future-Ready Engineering",
    desc: "Modern architectures, cloud-ready systems and scalable technologies designed for tomorrow&apos;s business.",
  },
  {
    icon: Rocket,
    title: "Business Growth Driven",
    desc: "Every solution is strategically developed to increase productivity, automate operations and support sustainable growth.",
  },
  {
    icon: Headphones,
    title: "Dedicated Long-Term Support",
    desc: "From consultation to deployment and continuous maintenance, we're committed to your long-term success.",
  },
];

const highlights = [
  "Enterprise-grade architecture",
  "Cloud-ready & scalable solutions",
  "Secure development standards",
  "Professional project management",
  "Transparent communication",
  "Continuous technical support",
];

export default function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-[#08111D] py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.08),transparent_35%)]" />

      <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-yellow-500">
            WHY CHOOSE XINFINITY
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight lg:text-6xl">
            Your Strategic Partner For
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent">
              {" "}
              Digital Excellence
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">
            We combine business understanding, innovative technologies and
            professional engineering to deliver intelligent solutions that help
            organisations modernise, innovate and grow with confidence.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <div className="grid gap-8 sm:grid-cols-2">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827] to-[#0B1120] p-8 backdrop-blur-xl transition-all duration-500 hover:border-yellow-500/40 hover:shadow-[0_0_50px_rgba(234,179,8,0.15)]"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 text-black transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon size={30} />
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-400">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827] to-[#0B1120] p-10 backdrop-blur-xl"
          >
            <h3 className="text-3xl font-black text-white">
              Building Long-Term Success Together
            </h3>

            <p className="mt-6 leading-9 text-gray-400">
              We don&apos;t simply develop software. We build reliable digital
              ecosystems that strengthen operations, improve efficiency and
            position businesses for sustainable long-term growth.
            </p>

            <div className="mt-10 space-y-5">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <ShieldCheck
                    size={20}
                    className="text-yellow-500"
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-yellow-500 px-7 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400"
            >
              Start Your Project

              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}