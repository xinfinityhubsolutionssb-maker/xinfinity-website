export default function TrustedBySection() {
  const items = [
    "Software Development",
    "ERP Solutions",
    "Cloud Services",
    "IT Infrastructure",
    "Business Automation",
    "Digital Transformation",
  ];

  return (
    <section className="border-y border-white/10 bg-[#081120] py-8">
      <div className="container">
        <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-3 lg:grid-cols-6">
          {items.map((item) => (
            <div
              key={item}
              className="font-semibold tracking-wide text-slate-400 transition hover:text-cyan-400"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}