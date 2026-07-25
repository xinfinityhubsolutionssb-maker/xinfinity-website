import {
  ClipboardCheck,
  SearchCheck,
  Settings,
  Database,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

import ServiceFeatures from "@/components/services/ServiceFeatures";

export default function AutoCountImplementation() {
  return (
    <ServiceFeatures
      title="Our AutoCount Implementation Methodology"
      subtitle="A structured implementation approach that minimises risk, accelerates deployment and ensures long-term business success."
      items={[
        {
          icon: SearchCheck,
          title: "Business Requirement Analysis",
          description:
            "Understand your current workflow, operational challenges and business objectives before recommending the most suitable AutoCount solution.",
        },
        {
          icon: ClipboardCheck,
          title: "Solution Planning",
          description:
            "Prepare implementation plans, software licensing recommendations, deployment strategy and project milestones.",
        },
        {
          icon: Settings,
          title: "Installation & Configuration",
          description:
            "Install, configure and optimise AutoCount based on your accounting structure, inventory workflow and operational requirements.",
        },
        {
          icon: Database,
          title: "Data Migration & Validation",
          description:
            "Migrate existing customer, supplier, inventory and accounting data with verification to ensure accuracy before go-live.",
        },
        {
          icon: GraduationCap,
          title: "User Training & Go-Live",
          description:
            "Provide practical end-user training, operational guidance and go-live assistance to ensure a smooth transition.",
        },
        {
          icon: ShieldCheck,
          title: "Maintenance & Technical Support",
          description:
            "Deliver continuous technical support, troubleshooting, software updates and business advice after implementation.",
        },
      ]}
    />
  );
}