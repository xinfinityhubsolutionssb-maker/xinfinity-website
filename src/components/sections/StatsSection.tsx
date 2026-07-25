import GlassCard from "@/components/ui/enterprise/GlassCard";

const stats = [
  {
    value: "5+",
    label: "Core Business Services",
  },
  {
    value: "100%",
    label: "Customer Focused",
  },
  {
    value: "Business",
    label: "Hours",
    description: "Mon - Fri\n9:00 AM - 5:30 PM\nSat\n9:00 AM - 1:00 PM",
  },
  {
    value: "∞",
    label: "Innovation",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-[#081120] py-20">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <GlassCard
              key={stat.label}
              className="p-10 text-center"
            >
              <div className="text-5xl font-black text-cyan-400">
                {stat.value}
              </div>

              <div className="mt-4 text-slate-300 font-medium">
                {stat.label}
              </div>

              {"description" in stat && (
                <div className="mt-4 whitespace-pre-line text-sm leading-6 text-slate-400">
                  {stat.description}
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}