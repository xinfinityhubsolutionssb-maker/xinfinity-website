import { ClipboardCheck, Search, Settings, Rocket } from "lucide-react";
import TimelineCard from "@/components/ui/enterprise/TimelineCard";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "Understand your business goals, challenges and project requirements.",
    icon: Search,
  },
  {
    step: "02",
    title: "Planning",
    description:
      "Design a tailored solution with clear implementation strategy.",
    icon: ClipboardCheck,
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "Deploy, configure and integrate the required solutions.",
    icon: Settings,
  },
  {
    step: "04",
    title: "Support",
    description:
      "Provide continuous maintenance, training and technical support.",
    icon: Rocket,
  },
];

export default function ServiceProcess() {
  return (
    <section className="py-24">
      <div className="container">

        <SectionHeading
          title="Our Working Process"
          subtitle="A structured approach that ensures every project is delivered efficiently and professionally."
        />

        <div className="grid gap-8 lg:grid-cols-4">
          {steps.map((step) => (
            <TimelineCard
              key={step.step}
              {...step}
            />
          ))}
        </div>

      </div>
    </section>
  );
}