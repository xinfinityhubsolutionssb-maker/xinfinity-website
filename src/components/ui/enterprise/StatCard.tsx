import GlassCard from "./GlassCard";

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
}

export default function StatCard({
  value,
  label,
  description,
}: StatCardProps) {
  return (
    <GlassCard className="p-8 text-center">
      <h3 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-5xl font-bold text-transparent">
        {value}
      </h3>

      <h4 className="mt-4 text-xl font-semibold text-white">
        {label}
      </h4>

      {description && (
        <p className="mt-3 leading-7 text-slate-400">
          {description}
        </p>
      )}
    </GlassCard>
  );
}