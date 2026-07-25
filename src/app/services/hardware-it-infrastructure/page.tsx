import type { Metadata } from "next";

import ServiceHero from "@/components/services/ServiceHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceIndustries from "@/components/services/ServiceIndustries";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceCTA from "@/components/services/ServiceCTA";

import { hardwareServices } from "@/data/hardware-services";
import { industries } from "@/data/industries";
import BackToHomeButton from "@/components/common/BackToHomeButton";

export const metadata: Metadata = {
  title: "Hardware & IT Infrastructure",
  description:
    "Professional hardware supply, networking, server deployment, CCTV, office IT setup and technical support.",
};

export default function HardwareInfrastructurePage() {
  return (
      <>
        <BackToHomeButton />
  
      <ServiceHero
        badge="Hardware & IT Infrastructure"
        title="Reliable IT Infrastructure For Modern Businesses"
        description="Providing dependable hardware, networking and infrastructure solutions that support productivity, security and long-term business growth."
      />

      <ServiceOverview
        title="Enterprise Infrastructure Solutions"
        description="From supplying business hardware to designing complete office IT environments, XINFINITY delivers reliable technology infrastructure tailored to your operational needs."
      />

      <ServiceFeatures
        title="Our Infrastructure Services"
        subtitle="Professional IT infrastructure services for businesses of every size."
        items={hardwareServices}
      />

      <ServiceIndustries industries={industries} />

      <ServiceProcess />

      <ServiceBenefits
        title="Why Choose XINFINITY"
        benefits={[
          "Professional consultation",
          "Quality hardware solutions",
          "Experienced deployment engineers",
          "Reliable after-sales support",
          "Scalable infrastructure planning",
          "Business continuity focus",
          "Secure deployment practices",
          "Long-term technology partnership",
        ]}
      />

      <ServiceCTA />
    </>
  );
}