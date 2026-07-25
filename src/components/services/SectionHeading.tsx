import GradientHeading from "@/components/ui/enterprise/GradientHeading";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-16">
      <GradientHeading
        title={title}
        subtitle={subtitle}
      />
    </div>
  );
}