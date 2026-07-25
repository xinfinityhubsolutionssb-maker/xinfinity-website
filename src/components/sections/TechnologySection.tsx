import SectionHeading from "@/components/services/SectionHeading";
import GlassCard from "@/components/ui/enterprise/GlassCard";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "MySQL",
  "Microsoft SQL Server",
  "Tailwind CSS",
  "Docker",
  "Cloud Infrastructure",
  "REST API",
];

export default function TechnologySection() {
  return (
    <section className="bg-[#081120] py-28">
      <div className="container">
        <SectionHeading
          title="Technologies We Work With"
          subtitle="Building secure, scalable and modern solutions using industry-proven technologies."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {technologies.map((tech) => (
            <GlassCard
              key={tech}
              className="flex items-center justify-center p-8 text-center"
            >
              <span className="text-lg font-semibold text-white">
                {tech}
              </span>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}