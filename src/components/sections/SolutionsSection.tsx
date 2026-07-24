"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Database,
  Globe,
  Megaphone,
  MonitorSmartphone,
  Server,
} from "lucide-react";

const solutions = [
  {
    icon: Building2,
    title: "Enterprise Software",
    desc: "Future-ready software platforms tailored to automate workflows, improve operational efficiency and support sustainable business growth.",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile Applications",
    desc: "Powerful Android and iOS applications delivering secure, fast and engaging digital experiences across every device.",
  },
  {
    icon: Globe,
    title: "Corporate Websites",
    desc: "Premium business websites engineered for performance, credibility, SEO and customer conversion.",
  },
  {
    icon: Database,
    title: "ERP Solutions",
    desc: "Integrated ERP ecosystems connecting finance, inventory, CRM, POS and business operations into one intelligent platform.",
  },
  {
    icon: Megaphone,
    title: "Digital Business Growth",
    desc: "Digital solutions that strengthen your online presence, attract customers and expand business opportunities.",
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    desc: "Reliable hardware, networking and enterprise infrastructure designed for stability, security and scalability.",
  },
];

export default function SolutionsSection() {
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
            BUSINESS SOLUTIONS
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight lg:text-6xl">
            Intelligent Solutions For
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent">
              {" "}
              Tomorrow&apos;s Enterprise
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">
            We build scalable digital ecosystems that connect people,
            technology and business processes to help organisations innovate,
            grow and stay ahead in an increasingly digital world.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  {item.title}
                </h3>

                <p className="mt-5 flex-1 leading-8 text-gray-400">
                  {item.desc}
                </p>

                <button
                  type="button"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-yellow-500 transition-all duration-300 group-hover:translate-x-2"
                >
                  Discover Solution
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}