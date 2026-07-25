import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  FileText,
  Video,
  Download,
  GraduationCap,
  LifeBuoy,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AutoCount Resources | XINFINITY HUB SOLUTIONS",
  description:
    "Explore AutoCount resources, implementation guides, training, support and business consultation from XINFINITY HUB SOLUTIONS.",
};

const resources = [
  {
    icon: BookOpen,
    title: "Product Information",
    description:
      "Learn about AutoCount Accounting, Cloud Accounting, POS, Payroll, e-Invoice and other available solutions.",
  },
  {
    icon: GraduationCap,
    title: "Implementation Services",
    description:
      "Professional system setup, configuration, data migration and deployment tailored to your business.",
  },
  {
    icon: Video,
    title: "Training",
    description:
      "User training sessions to ensure your team can maximise every AutoCount feature efficiently.",
  },
  {
    icon: LifeBuoy,
    title: "Technical Support",
    description:
      "Ongoing software support, troubleshooting, updates and expert assistance after implementation.",
  },
  {
    icon: FileText,
    title: "Business Consultation",
    description:
      "Receive recommendations on the best AutoCount solution based on your business workflow and future growth.",
  },
  {
    icon: Download,
    title: "Quotation & Proposal",
    description:
      "Request a customised quotation including software licensing, implementation, training and support.",
  },
];

const services = [
  "Business requirement analysis",
  "Software licensing consultation",
  "Cloud & desktop deployment",
  "Data migration assistance",
  "System configuration",
  "User training",
  "Remote & on-site support",
  "Future upgrade planning",
];

export default function AutoCountResourcesPage() {
  return (
    <main className="bg-[#07111F] text-white">
      {/* Hero */}
      <section className="border-b border-cyan-500/10">
        <div className="container py-24">
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-300">
            AutoCount Resources
          </span>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold md:text-6xl">
            Resources & Professional Services
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            XINFINITY HUB SOLUTIONS provides more than software licensing. We
            deliver complete consultation, implementation, training and
            long-term support to help businesses maximise their AutoCount
            investment.
          </p>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="container py-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((resource) => {
            const Icon = resource.icon;

            return (
              <div
                key={resource.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-500/10"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-cyan-500/15 p-4">
                  <Icon className="h-8 w-8 text-cyan-300" />
                </div>

                <h2 className="text-2xl font-bold">
                  {resource.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-400">
                  {resource.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="container py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold">
              What We Provide
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              From planning to post-implementation support, our consultants work
              closely with your team throughout the entire deployment journey.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-24">
        <div className="rounded-[36px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-amber-500/10 p-10 md:p-14">
          <h2 className="text-4xl font-bold">
            Ready to Transform Your Business?
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
            Whether you&apos;re implementing AutoCount for the first time or upgrading
your existing system, our experienced consultants are ready to help
you every step of the way.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/services/software-digital-solutions"
              className="inline-flex items-center rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Back to Software Solutions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}