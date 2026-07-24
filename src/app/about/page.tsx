import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about XINFINITY HUB SOLUTIONS SDN. BHD., our mission, vision and commitment to delivering innovative software and digital business solutions.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#05070F] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(234,179,8,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.08),transparent_35%)]" />

        <div className="container relative py-28">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-white/5 px-5 py-3 text-sm font-semibold text-yellow-400 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-500 hover:text-black"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <div className="mt-16">
            <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-yellow-500">
              ABOUT US
            </span>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight lg:text-7xl">
              Engineering The Future Of
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent">
                {" "}
                Digital Business
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-300">
              XINFINITY HUB SOLUTIONS SDN. BHD. empowers organisations with
              innovative software, enterprise solutions and modern digital
              technologies that improve efficiency, accelerate growth and
              prepare businesses for the future.
            </p>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827] to-[#0B1120] p-10">
              <h2 className="text-3xl font-black">Our Mission</h2>

              <p className="mt-6 leading-9 text-gray-300">
                To empower businesses through innovative, secure and scalable
                technology solutions that simplify operations, increase
                productivity and support long-term digital transformation.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827] to-[#0B1120] p-10">
              <h2 className="text-3xl font-black">Our Vision</h2>

              <p className="mt-6 leading-9 text-gray-300">
                To become one of Malaysia&apos;s most trusted technology partners by
                delivering world-class digital solutions that create lasting
                business value and sustainable growth.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827] to-[#0B1120] p-10">
            <h2 className="text-3xl font-black">
              Why XINFINITY HUB
            </h2>

            <p className="mt-6 leading-9 text-gray-300">
              We combine business knowledge, engineering excellence and modern
              technologies to build intelligent digital ecosystems for
              organisations of every size. Every project is approached with a
              commitment to quality, transparency, innovation and long-term
              partnership.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-yellow-500 px-7 py-4 font-semibold text-black transition hover:bg-yellow-400"
            >
              Start Your Project
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}