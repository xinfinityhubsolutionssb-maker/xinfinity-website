import { LucideIcon } from "lucide-react";
import GlassCard from "./GlassCard";

interface TimelineCardProps {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function TimelineCard({
  step,
  title,
 description,
  icon: Icon,
}: TimelineCardProps) {
  return (
    <GlassCard className="relative p-8">
      <div className="mb-6 flex items-center justify-between">
        <div className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-bold text-white">
          {step}
        </div>

        <Icon className="h-8 w-8 text-cyan-400" />
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