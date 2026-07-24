import {
  ShieldCheck,
  Cpu,
  Headphones,
  Rocket,
  Clock3,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const advantages = [
  {
    icon: ShieldCheck,
    title: "Trusted & Reliable",
    description:
      "We focus on long-term partnerships built on trust, quality and transparency.",
  },
  {
    icon: Cpu,
    title: "Latest Technologies",
    description:
      "Modern frameworks and enterprise technologies for secure, scalable solutions.",
  },
  {
    icon: Rocket,
    title: "Business Growth",
    description:
      "Technology designed to improve productivity and accelerate business growth.",
  },
  {
    icon: Headphones,
    title: "Professional Support",
    description:
      "Dedicated support and consultation throughout your project lifecycle.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "Structured planning and efficient development ensure timely project completion.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description:
      "Every solution is tested to deliver reliability, performance and security.",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "Flutter",
  "React Native",
  "Cloud Solutions",
  "REST API",
  "AI Integration",
  "Business Automation",
];

export default function WhyChooseUsPage() {
  return (
    <main className="bg-[#05070F] text-white">

      <section className="border-b border-white/10 pt-40 pb-24">

        <div className="container">

          <span className="font-semibold tracking-widest text-yellow-500">
            WHY CHOOSE XINFINITY
          </span>

          <h1 className="mt-6 text-5xl font-black lg:text-7xl">
            Your Trusted
            <br />
            Technology Partner
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            We combine business knowledge with modern technology to
            deliver innovative digital solutions that help organisations
            improve efficiency, productivity and long-term growth.
          </p>

        </div>

      </section>

      <section className="py-24">

        <div className="container grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {advantages.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-[#0B1120] p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-500"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-500">
                  <Icon size={32} />
                </div>

                <h2 className="text-2xl font-bold">
                  {item.title}
                </h2>

                <p className="mt-5 leading-8 text-gray-400">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </section>

      <section className="bg-[#08111D] py-24">

        <div className="container">

          <h2 className="text-center text-5xl font-bold">
            Technologies We Use
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-4">

            {technologies.map((tech) => (

              <div
                key={tech}
                className="rounded-2xl border border-white/10 bg-[#0B1120] p-6 text-center font-semibold transition hover:border-yellow-500"
              >
                {tech}
              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="py-24">

        <div className="container text-center">

          <h2 className="text-5xl font-bold">
            Ready To Build Your Next Digital Solution?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Let XINFINITY HUB SOLUTIONS SDN. BHD. help transform your
            ideas into reliable, scalable and innovative business
            solutions.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-yellow-500 px-8 py-4 font-bold text-black transition hover:bg-yellow-400"
          >
            Contact Our Team

            <ArrowRight size={20} />
          </Link>

        </div>

      </section>

    </main>
  );
}