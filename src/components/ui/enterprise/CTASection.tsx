import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
}

export default function CTASection({
  title,
  description,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-600/20 via-sky-600/10 to-blue-700/20 p-12">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-white">
          {title}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          {description}
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
        >
          Get Quote

          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}