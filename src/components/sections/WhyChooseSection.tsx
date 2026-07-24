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
    desc:
      "We build long-term relationships through transparency, quality delivery and dependable business support.",
  },
  {
    icon: Cpu,
    title: "Modern Technologies",
    desc:
      "Enterprise-grade software using modern frameworks, cloud-ready architecture and scalable solutions.",
  },
  {
    icon: Rocket,
    title: "Business Growth Focus",
    desc:
      "Every solution is designed to improve productivity, automate processes and support sustainable growth.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc:
      "Professional consultation, implementation assistance and continuous technical support.",
  },
];

const highlights = [
  "Enterprise-grade architecture",
  "Scalable & future-ready solutions",
  "Secure development practices",
  "Professional project delivery",
  "Customer-first approach",
  "Long-term technical support",
];

export default function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-[#08111D] py-24">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[170px]" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-semibold tracking-widest text-yellow-500">
            WHY CHOOSE XINFINITY
          </span>

          <h2 className="mt-6 text-4xl font-black lg:text-6xl">
            A Reliable Partner For
            <span className="text-yellow-500"> Digital Transformation</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            We combine technical expertise, business knowledge and modern
            technologies to deliver digital solutions that help organisations
            improve efficiency, reduce manual work and accelerate business
            growth.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
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
                  whileHover={{ y: -8 }}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-yellow-500/40 hover:bg-white/10"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-500 group-hover:text-black">
                    <Icon size={30} />
                  </div>

                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-400">
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
            className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            <h3 className="text-3xl font-bold">
              Why Businesses Choose Us
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              Our mission is to provide reliable, scalable and innovative
              technology solutions that empower businesses to compete in the
              digital economy.
            </p>

            <div className="mt-10 space-y-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
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
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400"
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