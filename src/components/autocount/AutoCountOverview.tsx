import {
  CheckCircle2,
  Cloud,
  Database,
  ShieldCheck,
  Workflow,
  Laptop,
} from "lucide-react";

import SectionHeading from "@/components/services/SectionHeading";

const highlights = [
  {
    icon: Cloud,
    title: "Cloud & Desktop",
    description:
      "Deploy AutoCount as a secure cloud solution or traditional desktop installation based on your business requirements.",
  },
  {
    icon: Workflow,
    title: "Integrated Operations",
    description:
      "Connect accounting, inventory, purchasing, sales, POS, payroll and e-Invoice into one integrated business platform.",
  },
  {
    icon: Database,
    title: "Data Migration",
    description:
      "Safely migrate existing accounting data from legacy systems with minimal business disruption.",
  },
  {
    icon: Laptop,
    title: "Implementation",
    description:
      "Professional installation, configuration, testing and go-live assistance by experienced consultants.",
  },
  {
    icon: ShieldCheck,
    title: "Training & Support",
    description:
      "Comprehensive user training, technical support and continuous system maintenance after deployment.",
  },
];

const benefits = [
  "AutoCount Accounting",
  "AutoCount Cloud Accounting",
  "AutoCount POS",
  "AutoCount Payroll",
  "AutoCount e-Invoice Ready",
  "Inventory Management",
  "Sales & Purchasing",
  "Manufacturing Support",
  "Business Consultation",
  "Software Customization",
];

export default function AutoCountOverview() {
  return (
    <section className="py-24">
      <div className="container">
        <SectionHeading
          title="Professional AutoCount Business Solutions"
          subtitle="Helping Malaysian businesses digitalise operations with official AutoCount software implementation and professional consulting services."
        />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <p className="text-lg leading-9 text-slate-300">
              XINFINITY HUB SOLUTIONS provides complete AutoCount implementation
              services, helping businesses adopt reliable accounting and
              business management software that improves productivity,
              operational efficiency and financial visibility.
            </p>

            <p className="mt-8 text-lg leading-9 text-slate-300">
              Our services cover business consultation, software licensing,
              deployment, configuration, data migration, user training,
              customization, system integration and ongoing technical support.
              Every implementation is planned according to your operational
              workflow to ensure a smooth and successful transition.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-cyan-500/15 p-3">
                    <Icon className="h-6 w-6 text-cyan-300" />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}