"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Globe,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

const badges = [
  "Custom Software",
  "ERP Solutions",
  "Mobile Apps",
  "Corporate Websites",
];

const cards = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Scalable enterprise software engineered for long-term business growth.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "High-performance Android and iOS applications with exceptional user experiences.",
  },
  {
    icon: Globe,
    title: "Corporate Websites",
    description:
      "Modern websites that strengthen your brand and convert visitors into customers.",
  },
  {
    icon: ShieldCheck,
    title: "Business Solutions",
    description:
      "ERP, automation and digital transformation solutions for modern businesses.",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#05070F] pt-40 pb-24">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.10),transparent_40%)]" />

  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />

  <motion.div
    animate={{
      x: [0, 40, 0],
      y: [0, -30, 0],
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute left-1/2 top-20 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-yellow-500/5 blur-[180px]"
  />

      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-yellow-500/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="container relative z-10 grid items-center gap-16 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >

          <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm font-semibold text-yellow-500">
            TECHNOLOGY • SOFTWARE • DIGITAL SOLUTIONS
          </span>

          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[1.05] tracking-tight lg:text-7xl">
            Engineering
          <br />

          <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent">
          Tomorrow&apos;s
          </span>

          <br />

Digital Future
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-300">
          We empower businesses with enterprise software, intelligent automation,
          modern corporate websites, mobile applications and scalable digital
          solutions that accelerate growth, improve efficiency and prepare
          organisations for the future.
          </p>

          <div className="mt-10 flex flex-wrap gap-5 items-center">

            <button className="flex items-center gap-2 rounded-xl bg-yellow-500 px-8 py-4 font-bold text-black shadow-[0_0_35px_rgba(234,179,8,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-[0_0_50px_rgba(234,179,8,0.45)]">
              Start Your Project

              <ArrowRight size={18} />
            </button>

            <button className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500 hover:bg-white/10">
              Explore Services
            </button>

          </div>

          <div className="mt-12 flex flex-wrap gap-4">

  <div className="w-full pb-2">
    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-500">
      Trusted • Innovative • Future Ready
    </p>
  </div>

            {badges.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2"
              >
                <CheckCircle2
                  size={18}
                  className="text-yellow-500"
                />

                <span className="text-sm">
                  {item}
                </span>

              </div>
            ))}

          </div>

        </motion.div>

        <motion.div
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative"
>

          <div className="grid gap-6">

            {cards.map((card) => {

              const Icon = card.icon;

              return (

                <motion.div
                  whileHover={{
                    scale: 1.03,
                  }}
                  key={card.title}
                 className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/40 hover:shadow-[0_0_50px_rgba(234,179,8,0.15)]"
                >

                  <div className="flex items-center gap-5">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 text-black transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">

                      <Icon size={34} />

                    </div>

                    <div>

                      <h3 className="text-2xl font-bold">
                        {card.title}
                      </h3>

                      <p className="mt-2 leading-7 text-gray-400">
                       {card.description}
                      </p>

                    </div>

                  </div>

                </motion.div>

              );

            })}

          </div>

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute -right-8 -top-8 rounded-3xl border border-yellow-500/30 bg-gradient-to-br from-[#111827] to-[#0B1120] p-6 shadow-[0_0_60px_rgba(234,179,8,0.15)] backdrop-blur-xl"
          >

            <h2 className="text-5xl font-black text-yellow-500">
              X
            </h2>

            <p className="mt-2 text-sm font-semibold tracking-widest text-yellow-400">
  FUTURE READY
</p>

<p className="mt-1 text-xs text-gray-400">
  Technology Partner
</p>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}