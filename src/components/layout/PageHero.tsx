import SectionBadge from "../ui/enterprise/SectionBadge";

interface PageHeroProps {
  badge: string;
  title: string;
  description: string;
}

export default function PageHero({
  badge,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#050816]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.18),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.18),transparent_35%)]" />

      <div className="container relative flex justify-center pt-60 pb-28">
        <div className="flex w-full max-w-5xl flex-col items-center text-center">
          <SectionBadge>{badge}</SectionBadge>

          <h1 className="mt-8 max-w-5xl text-center text-5xl font-bold leading-[1.1] text-white lg:text-7xl">
            {title}
          </h1>

          <p className="mt-8 max-w-3xl text-center text-lg leading-8 text-slate-300">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}