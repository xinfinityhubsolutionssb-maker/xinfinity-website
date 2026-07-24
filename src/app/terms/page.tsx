import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions for XINFINITY HUB SOLUTIONS SDN. BHD.",
};

export default function TermsPage() {
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
              LEGAL
            </span>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight lg:text-7xl">
              Terms &
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent">
                {" "}
                Conditions
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-300">
              These Terms & Conditions govern your access to and use of the
              XINFINITY HUB SOLUTIONS SDN. BHD. website and services. By using
              this website, you agree to comply with these terms.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#0B1120] p-8 md:p-12">
            <div className="space-y-12 text-gray-300 leading-8">
              <section>
                <h2 className="mb-4 text-2xl font-bold text-white">
                  Acceptance
                </h2>

                <p>
                  By accessing or using this website, you acknowledge that you
                  have read, understood and agree to be bound by these Terms &
                  Conditions and all applicable laws and regulations.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-white">
                  Intellectual Property
                </h2>

                <p>
                  All content, graphics, trademarks, logos, software, text and
                  other materials displayed on this website remain the property
                  of XINFINITY HUB SOLUTIONS SDN. BHD. unless otherwise stated.
                  No content may be copied, reproduced or distributed without
                  prior written permission.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-white">
                  Website Use
                </h2>

                <p>
                  Users agree to use this website only for lawful purposes and
                  must not attempt to disrupt, damage or gain unauthorised
                  access to any part of the website or its supporting systems.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-white">
                  Disclaimer
                </h2>

                <p>
                  The information provided on this website is for general
                  informational purposes only. While we strive to keep all
                  information accurate and up to date, no warranties or
                  guarantees are provided regarding completeness, reliability or
                  suitability.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-white">
                  Governing Law
                </h2>

                <p>
                  These Terms & Conditions shall be governed by and interpreted
                  in accordance with the laws of Malaysia. Any disputes arising
                  from the use of this website shall be subject to the exclusive
                  jurisdiction of the Malaysian courts.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}