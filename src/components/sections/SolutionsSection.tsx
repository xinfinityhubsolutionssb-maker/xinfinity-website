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
    desc: "Custom business software engineered to streamline operations and improve productivity.",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile Applications",
    desc: "Modern Android and iOS applications built for performance and scalability.",
  },
  {
    icon: Globe,
    title: "Corporate Websites",
    desc: "Premium business websites focused on branding, credibility and lead generation.",
  },
  {
    icon: Database,
    title: "ERP Solutions",
    desc: "Integrated ERP platforms covering inventory, accounting, CRM, POS and business management.",
  },
  {
    icon: Megaphone,
    title: "Business Advertising",
    desc: "Digital platforms that help businesses attract customers and increase market visibility.",
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    desc: "Reliable hardware, networking and infrastructure solutions for growing organisations.",
  },
];

export default function SolutionsSection() {
  return (
    <section className="relative overflow-hidden bg-[#08111D] py-24">
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-[160px]" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-semibold tracking-widest text-yellow-500">
            BUSINESS SOLUTIONS
          </span>

          <h2 className="mt-6 text-4xl font-black lg:text-6xl">
            Comprehensive
            <span className="text-yellow-500"> Technology Solutions</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            From enterprise software to modern digital platforms, we deliver
            scalable technology solutions that support business growth,
            operational efficiency and long-term digital transformation.
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
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-yellow-500/40 hover:bg-white/10"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-500 group-hover:text-black">
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {item.desc}
                </p>

                <button
                  type="button"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-yellow-500 transition group-hover:translate-x-1"
                >
                  Learn More

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