import { ReactNode } from "react";

interface FeatureGridProps {
  children: ReactNode;
  cols?: 2 | 3 | 4;
}

export default function FeatureGrid({
  children,
  cols = 3,
}: FeatureGridProps) {
  const gridClass =
    cols === 2
      ? "grid gap-8 md:grid-cols-2"
      : cols === 4
      ? "grid gap-8 md:grid-cols-2 xl:grid-cols-4"
      : "grid gap-8 md:grid-cols-2 xl:grid-cols-3";

  return <div className={gridClass}>{children}</div>;
}