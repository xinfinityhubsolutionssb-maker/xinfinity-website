"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Factory,
  Hospital,
  School,
  ShoppingCart,
  Truck,
} from "lucide-react";

const industries = [
  {
    icon: ShoppingCart,
    title: "Retail & Commerce",
    description:
      "Smart POS, inventory management, customer loyalty, e-commerce integration and retail automation solutions.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Digital manufacturing solutions covering production planning, procurement, inventory and operational visibility.",
  },
  {
    icon: Building2,
    title: "Corporate Enterprise",
    description:
      "Enterprise software, ERP, CRM and workflow automation that improve collaboration and business efficiency.",
  },
  {
    icon: Hospital,
    title: "Healthcare",
    description:
      "Secure digital platforms that simplify administration, patient management and operational reporting.",
  },
  {
    icon: School,
    title: "Education",
    description:
      "Modern education systems including student portals, online services and institutional management platforms.",
  },
  {
    icon: Truck,
    title: "Logistics & Distribution",
    description:
      "Warehouse, fleet, delivery tracking and supply chain management systems built for operational excellence.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-[#05070F] py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(234,179,8,0.08),transparent_30%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_35%)]" />

      <div className="absolute left-0 bottom-0 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-yellow-500">
            INDUSTRIES WE SERVE
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight lg:text-6xl">
            Digital Innovation For
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent">
              {" "}
              Every Industry
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">
            Every organisation has unique challenges. We create intelligent,
            scalable and future-ready technology solutions tailored to industry
            requirements, enabling businesses to innovate, optimise operations
            and achieve sustainable growth.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827] to-[#0B1120] p-8 backdrop-blur-xl transition-all duration-500 hover:border-yellow-500/40 hover:shadow-[0_0_50px_rgba(234,179,8,0.15)]"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 text-black transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {industry.title}
                </h3>

                <p className="mt-5 flex-1 leading-8 text-gray-400">
                  {industry.description}
                </p>

                <div className="mt-8 inline-flex items-center gap-2 font-semibold text-yellow-500 transition-all duration-300 group-hover:translate-x-2">
                  Explore Industry
                  <ArrowRight size={18} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}