import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
}

export default function ServiceCard({
  title,
  description,
}: Props) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-[#0B1120] p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-500">

      <div className="mb-6 h-14 w-14 rounded-xl bg-yellow-500" />

      <h3 className="mb-4 text-xl font-bold">
        {title}
      </h3>

      <p className="text-gray-400">
        {description}
      </p>

      <div className="mt-8 flex items-center gap-2 text-yellow-500">
        Learn More

        <ArrowRight size={18} />
      </div>

    </div>
  );
}