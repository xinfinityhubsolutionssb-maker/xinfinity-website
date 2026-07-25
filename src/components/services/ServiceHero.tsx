import PageHero from "@/components/layout/PageHero";

interface ServiceHeroProps {
  badge: string;
  title: string;
  description: string;
}

export default function ServiceHero({
  badge,
  title,
  description,
}: ServiceHeroProps) {
  return (
    <PageHero
      badge={badge}
      title={title}
      description={description}
    />
  );
}