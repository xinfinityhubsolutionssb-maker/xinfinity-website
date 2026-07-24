import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for XINFINITY HUB SOLUTIONS SDN. BHD.",
};

export default function PrivacyPolicyPage() {
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
              Privacy
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent">
                {" "}
                Policy
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-300">
              We value your trust and are committed to protecting your personal
              information through responsible data handling practices and
              appropriate security measures.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#0B1120] p-8 md:p-12">
            <div className="space-y-12 text-gray-300 leading-8">
              <section>
                <p>
                  XINFINITY HUB SOLUTIONS SDN. BHD. respects your privacy and is
                  committed to protecting your personal information. This Privacy
                  Policy explains how we collect, use, store and safeguard the
                  information you provide when using our website and services.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-white">
                  Information We Collect
                </h2>

                <p>
                  We may collect your name, email address, phone number,
                  company information and any details you voluntarily submit
                  through our contact forms or other communication channels.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-white">
                  How We Use Your Information
                </h2>

                <p>
                  Your information is used to respond to enquiries, provide our
                  professional services, improve our website, communicate with
                  you and fulfil legal or contractual obligations where
                  applicable.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-white">
                  Data Protection
                </h2>

                <p>
                  We implement appropriate administrative, technical and
                  organisational safeguards designed to protect personal
                  information against unauthorised access, alteration,
                  disclosure or destruction.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-white">
                  Third-Party Services
                </h2>

                <p>
                  Our website may integrate trusted third-party services where
                  necessary. These providers maintain their own privacy policies,
                  and we encourage users to review them before submitting
                  personal information.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-white">
                  Contact
                </h2>

                <p>
                  If you have any questions regarding this Privacy Policy or how
                  your information is handled, please contact us through the
                  contact details provided on this website.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}