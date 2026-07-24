import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions for XINFINITY HUB SOLUTIONS SDN. BHD.",
};

export default function TermsPage() {
  return (
    <main className="bg-[#05070F] text-white">
      <div className="container py-40">
        <h1 className="text-5xl font-black">
          Terms & Conditions
        </h1>

        <div className="mt-10 space-y-8 text-gray-300 leading-8">
          <section>
            <h2 className="mb-3 text-2xl font-bold">
              Acceptance
            </h2>

            <p>
              By accessing this website, you agree to these Terms &
              Conditions.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">
              Intellectual Property
            </h2>

            <p>
              All website content, graphics, logos and materials are the
              property of XINFINITY HUB SOLUTIONS SDN. BHD. unless otherwise
              stated.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">
              Disclaimer
            </h2>

            <p>
              Information provided on this website is for general information
              purposes only and may change without prior notice.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">
              Governing Law
            </h2>

            <p>
              These Terms & Conditions are governed by the laws of Malaysia.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}