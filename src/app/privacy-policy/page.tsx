import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for XINFINITY HUB SOLUTIONS SDN. BHD.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#05070F] text-white">
      <div className="container py-40">
        <h1 className="text-5xl font-black">Privacy Policy</h1>

        <div className="mt-10 space-y-8 text-gray-300 leading-8">
          <p>
            XINFINITY HUB SOLUTIONS SDN. BHD. respects your privacy and is
            committed to protecting your personal information.
          </p>

          <section>
            <h2 className="mb-3 text-2xl font-bold">
              Information We Collect
            </h2>

            <p>
              We may collect your name, email address, phone number, company
              details and any information you submit through our contact form.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">
              How We Use Your Information
            </h2>

            <p>
              Your information is used solely to respond to enquiries, provide
              our services, improve our website and communicate with you.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">
              Data Protection
            </h2>

            <p>
              We implement reasonable administrative and technical safeguards
              to protect your personal information from unauthorized access,
              disclosure or misuse.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">
              Contact
            </h2>

            <p>
              For any privacy-related enquiries, please contact us using the
              contact information available on this website.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}