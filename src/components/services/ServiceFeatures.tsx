import { LucideIcon } from "lucide-react";
import FeatureGrid from "@/components/ui/enterprise/FeatureGrid";
import InfoCard from "@/components/ui/enterprise/InfoCard";
import SectionHeading from "./SectionHeading";

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Props {
  title: string;
  subtitle: string;
  items: FeatureItem[];
}

export default function ServiceFeatures({
  title,
  subtitle,
  items,
}: Props) {
  return (
    <section className="py-24">
      <div className="container">
        <SectionHeading
          title={title}
          subtitle={subtitle}
        />

        <FeatureGrid cols={3}>
          {items.map((item) => (
            <InfoCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </FeatureGrid>
      </div>
    </section>
  );
}