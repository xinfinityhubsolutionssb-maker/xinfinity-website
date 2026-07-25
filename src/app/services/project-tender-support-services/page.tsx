import type { Metadata } from "next";

import ServiceHero from "@/components/services/ServiceHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceIndustries from "@/components/services/ServiceIndustries";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceCTA from "@/components/services/ServiceCTA";

import { tenderServices } from "@/data/tender-services";
import { industries } from "@/data/industries";
import BackToHomeButton from "@/components/common/BackToHomeButton";

export const metadata: Metadata = {
  title: "Project & Tender Support Services",
  description:
    "Professional project coordination, tender documentation, proposal preparation and business consultancy services.",
};

export default function ProjectTenderSupportPage() {
  return (
      <>
        <BackToHomeButton />
  
      <ServiceHero
        badge="Project & Tender Support"
        title="Helping Businesses Win More Opportunities"
        description="Professional support for project coordination, tender preparation, proposal development and business documentation."
      />

      <ServiceOverview
        title="Comprehensive Tender & Project Support"
        description="Our team assists businesses in preparing high-quality documentation, coordinating submissions and supporting project execution from planning to completion."
      />

      <ServiceFeatures
        title="Our Professional Services"
        subtitle="Solutions that simplify project execution and tender submissions."
        items={tenderServices}
      />

      <ServiceIndustries industries={industries} />

      <ServiceProcess />

      <ServiceBenefits
        title="Why Choose XINFINITY"
        benefits={[
          "Professional documentation",
          "Structured proposal preparation",
          "Tender compliance support",
          "Project coordination expertise",
          "Business-focused consultation",
          "Fast response time",
          "Confidential document handling",
          "Reliable long-term partnership",
        ]}
      />

      <ServiceCTA />
    </>
  );
}