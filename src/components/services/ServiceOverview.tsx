import SectionHeading from "./SectionHeading";

interface ServiceOverviewProps {
  title: string;
  description: string;
}

export default function ServiceOverview({
  title,
  description,
}: ServiceOverviewProps) {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            title={title}
            subtitle="Delivering innovative business solutions tailored for SMEs, Corporate organisations, Government agencies, GLCs and Enterprise clients."
          />

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <p className="mx-auto max-w-4xl text-center text-lg leading-9 text-slate-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}