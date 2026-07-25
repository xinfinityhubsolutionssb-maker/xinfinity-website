interface GradientHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function GradientHeading({
  title,
  subtitle,
  center = true,
}: GradientHeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
        <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>

      {subtitle && (
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}