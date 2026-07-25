interface SectionBadgeProps {
  children: React.ReactNode;
}

export default function SectionBadge({
  children,
}: SectionBadgeProps) {
  return (
    <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-cyan-300 backdrop-blur-md">
      {children}
    </div>
  );
}