import { ReactNode } from "react";
import clsx from "clsx";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl transition-all duration-300",
        hover &&
          "hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-cyan-500/10",
        className
      )}
    >
      {children}
    </div>
  );
}