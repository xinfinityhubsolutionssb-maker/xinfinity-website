"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import GlassCard from "./GlassCard";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({
  items,
}: FAQAccordionProps) {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-5">
      {items.map((item, index) => (
        <GlassCard key={item.question}>
          <button
            onClick={() => setOpen(open === index ? -1 : index)}
            className="flex w-full items-center justify-between p-6 text-left"
          >
            <span className="text-lg font-semibold text-white">
              {item.question}
            </span>

            <ChevronDown
              className={`transition ${
                open === index ? "rotate-180" : ""
              }`}
            />
          </button>

          {open === index && (
            <div className="px-6 pb-6 leading-8 text-slate-400">
              {item.answer}
            </div>
          )}
        </GlassCard>
      ))}
    </div>
  );
}