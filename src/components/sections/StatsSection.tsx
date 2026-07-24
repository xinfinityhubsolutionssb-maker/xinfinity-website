"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Building2,
  Clock3,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    value: "6+",
    title: "Core Services",
    description: "Complete business technology solutions.",
    icon: BriefcaseBusiness,
  },
  {
    value: "10+",
    title: "Industries Supported",
    description: "Serving multiple business sectors.",
    icon: Building2,
  },
  {
    value: "100%",
    title: "Customer Commitment",
    description: "Focused on quality and long-term value.",
    icon: ShieldCheck,
  },
  {
    value: "24/7",
    title: "Support Availability",
    description: "Dedicated assistance whenever required.",
    icon: Clock3,
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#08111D] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_60%)]" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-semibold tracking-wide text-yellow-500">
            COMPANY HIGHLIGHTS
          </span>

          <h2 className="mt-6 text-3xl font-bold lg:text-4xl">
            Delivering Technology That
            <span className="text-yellow-500"> Drives Business Growth</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-gray-400 leading-8">
            We combine modern technologies, enterprise best practices and
            business expertise to deliver scalable digital solutions for
            companies across Malaysia.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-yellow-500/40 hover:bg-white/10"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500 text-black transition-transform duration-300 group-hover:scale-110">
                  <Icon size={32} />
                </div>

                <h3 className="text-5xl font-black text-yellow-500">
                  {item.value}
                </h3>

                <h4 className="mt-4 text-xl font-semibold">
                  {item.title}
                </h4>

                <p className="mt-3 leading-7 text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}