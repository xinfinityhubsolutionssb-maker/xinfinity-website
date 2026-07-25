import { LucideIcon } from "lucide-react";
import GlassCard from "./GlassCard";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function InfoCard({
  icon: Icon,
  title,
  description,
}: InfoCardProps) {
  return (
    <GlassCard className="h-full p-8">
      <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-4">
        <Icon className="h-7 w-7 text-white" />
      </div>

      <h3 className="mb-4 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="leading-8 text-slate-400">
        {description}
      </p>
    </GlassCard>
  );
}