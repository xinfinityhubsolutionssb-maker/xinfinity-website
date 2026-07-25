import PricingCard from "@/components/ui/enterprise/PricingCard";
import SectionHeading from "@/components/services/SectionHeading";

const plans = [
  {
    solution: "Cloud Basic",
    price: "From RM 75 / Month",
    note:
      "Suitable for startups and small businesses looking for an affordable cloud accounting solution.",
  },
  {
    solution: "Cloud Standard",
    price: "From RM 150 / Month",
    note:
      "Recommended for growing SMEs requiring additional users and enhanced business capabilities.",
  },
  {
    solution: "Desktop Edition",
    price: "Request Quotation",
    note:
      "Desktop licensing is based on the selected edition, modules, deployment requirements and concurrent users.",
  },
];

export default function AutoCountPricing() {
  return (
    <section className="py-24">
      <div className="container">
        <SectionHeading
          title="AutoCount Pricing"
          subtitle="Flexible cloud subscriptions and desktop licensing to suit businesses of every size."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard
              key={plan.solution}
              title={plan.solution}
              price={plan.price}
              description={plan.note}
              features={[
                "Business Consultation",
                "Software Licensing",
                "Professional Implementation",
                "System Configuration",
                "Data Migration",
                "User Training",
                "Technical Support",
                "After Sales Support",
              ]}
            />
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-5xl rounded-3xl border border-amber-400/20 bg-amber-500/10 p-8">
          <h3 className="text-xl font-semibold text-white">
            Pricing Information
          </h3>

          <p className="mt-4 leading-8 text-slate-300">
            Actual pricing varies depending on the selected AutoCount edition,
            number of concurrent users, optional modules, cloud subscription,
            implementation scope, training requirements and data migration.
            Contact XINFINITY HUB SOLUTIONS for an official quotation tailored
            to your business.
          </p>
        </div>

        <p className="mx-auto mt-10 max-w-5xl text-center text-sm leading-7 text-slate-500">
          AutoCount® is a trademark of its respective owner. XINFINITY HUB
          SOLUTIONS provides professional consultation, implementation,
          deployment, training, migration and technical support for AutoCount
          software solutions. Product availability, features and licensing are
          subject to the software owner&apos;s latest policies and terms.
        </p>
      </div>
    </section>
  );
}