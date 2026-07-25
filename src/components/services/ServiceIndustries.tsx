import GlassCard from "@/components/ui/enterprise/GlassCard";
import SectionHeading from "./SectionHeading";

interface Props {
  industries: string[];
}

export default function ServiceIndustries({
  industries,
}: Props) {
  return (
    <section className="py-24">
      <div className="container">

        <SectionHeading
          title="Industries We Serve"
          subtitle="Supporting businesses across multiple industries with reliable and scalable solutions."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry) => (
            <GlassCard
              key={industry}
              className="p-6 text-center"
            >
              <h3 className="text-xl font-semibold text-white">
                {industry}
              </h3>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
}