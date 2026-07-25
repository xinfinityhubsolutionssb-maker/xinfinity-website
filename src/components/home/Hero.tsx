"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#020817]">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[180px]" />
      </div>

      <div className="container relative z-10 py-32 lg:py-40">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl text-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
            <Sparkles className="h-4 w-4" />
            Innovative Technology Solutions
          </div>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
            Empowering Businesses Through
            <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Technology & Innovation
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300 md:text-xl">
            XINFINITY HUB SOLUTIONS SDN. BHD. delivers enterprise software,
            IT infrastructure, business automation, digital transformation,
            travel services and professional business support tailored to
            organizations of every size.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:scale-105"
            >
              Get a Quote
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center rounded-xl border border-white/15 px-8 py-4 text-base font-semibold text-white transition hover:border-cyan-400 hover:bg-white/5"
            >
              Explore Our Services
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}