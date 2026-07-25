import { Check } from "lucide-react";
import GlassCard from "./GlassCard";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  highlight = false,
}: PricingCardProps) {
  return (
    <GlassCard
      className={`relative p-10 ${
        highlight ? "border-cyan-500/40" : ""
      }`}
    >
      {highlight && (
        <div className="absolute right-6 top-6 rounded-full bg-cyan-500 px-4 py-1 text-xs font-bold uppercase text-white">
          Popular
        </div>
      )}

      <h3 className="text-3xl font-bold text-white">
        {title}
      </h3>

      <div className="mt-5 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-5xl font-bold text-transparent">
        {price}
      </div>

      <p className="mt-5 leading-7 text-slate-400">
        {description}
      </p>

      <div className="mt-8 space-y-4">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3"
          >
            <Check className="h-5 w-5 text-cyan-400" />

            <span className="text-slate-300">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <button className="mt-10 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-semibold text-white transition hover:scale-105">
        Get Quote
      </button>
    </GlassCard>
  );
}