import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about XINFINITY HUB SOLUTIONS SDN. BHD., our mission, vision and commitment to delivering innovative software and digital business solutions.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24">
      <h1 className="mb-8 text-4xl font-bold">About Us</h1>

      <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
        XINFINITY HUB SOLUTIONS SDN. BHD. is a Malaysian technology company
        providing software development, ERP solutions, website development,
        mobile application development, cloud solutions and digital
        transformation services for businesses of all sizes.
      </p>

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="mb-3 text-2xl font-semibold">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Empower businesses through innovative, reliable and scalable digital
            solutions that improve productivity and long-term growth.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">Our Vision</h2>
          <p className="text-gray-600 dark:text-gray-300">
            To become one of Malaysia's trusted technology partners by
            delivering high-quality software, enterprise systems and digital
            transformation services.
          </p>
        </section>
      </div>
    </main>
  );
}