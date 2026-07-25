import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

export default function SectionContainer({
  children,
  className = "",
}: SectionContainerProps) {
  return (
    <section className={`py-24 ${className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}