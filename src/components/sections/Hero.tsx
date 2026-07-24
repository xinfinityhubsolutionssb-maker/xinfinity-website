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
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
  },
  {
    icon: Globe,
    title: "Corporate Websites",
  },
  {
    icon: ShieldCheck,
    title: "Business Solutions",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#05070F] pt-40 pb-24">

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

          <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">
            Transforming
            <br />

            <span className="text-yellow-500">
              Businesses
            </span>

            Through
            <br />

            Technology
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            XINFINITY HUB SOLUTIONS SDN. BHD.
            provides innovative software development,
            enterprise business systems,
            mobile applications,
            corporate websites,
            IT hardware,
            travel services
            and digital business solutions
            for businesses across Malaysia.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <button className="flex items-center gap-2 rounded-xl bg-yellow-500 px-8 py-4 font-bold text-black transition hover:bg-yellow-400">
              Get Started

              <ArrowRight size={18} />
            </button>

            <button className="rounded-xl border border-white/20 px-8 py-4 transition hover:border-yellow-500">
              Contact Us
            </button>

          </div>

          <div className="mt-12 flex flex-wrap gap-4">

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
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
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
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                >

                  <div className="flex items-center gap-5">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500 text-black">

                      <Icon size={34} />

                    </div>

                    <div>

                      <h3 className="text-2xl font-bold">
                        {card.title}
                      </h3>

                      <p className="mt-2 text-gray-400">
                        Enterprise Grade Solution
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
            className="absolute -right-10 -top-10 rounded-2xl border border-yellow-500/20 bg-[#0B1120] p-6 shadow-2xl"
          >

            <h2 className="text-5xl font-black text-yellow-500">
              X
            </h2>

            <p className="mt-2 text-sm">
              XINFINITY
            </p>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}