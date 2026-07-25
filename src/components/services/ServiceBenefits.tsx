import { CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

interface Props {
  title: string;
  benefits: string[];
}

export default function ServiceBenefits({
  title,
  benefits,
}: Props) {
  return (
    <section className="py-24">
      <div className="container">

        <SectionHeading
          title={title}
          subtitle="Why organisations choose XINFINITY as their trusted business solutions partner."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <CheckCircle2 className="mt-1 h-6 w-6 text-cyan-400" />

              <p className="text-slate-300 leading-8">
                {benefit}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}