import type { Metadata } from "next";

import ServiceHero from "@/components/services/ServiceHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceIndustries from "@/components/services/ServiceIndustries";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceCTA from "@/components/services/ServiceCTA";

import { adminServices } from "@/data/admin-services";
import { industries } from "@/data/industries";
import BackToHomeButton from "@/components/common/BackToHomeButton";

export const metadata: Metadata = {
  title: "Accounts, Administration & Manpower Support",
  description:
    "Professional accounts support, administrative services, documentation, reporting and manpower solutions.",
};

export default function AdminSupportPage() {
  return (
      <>
        <BackToHomeButton />
        
      <ServiceHero
        badge="Business Support Services"
        title="Accounts, Administration & Manpower Support"
        description="Helping businesses streamline daily operations through reliable administrative, accounting and manpower support services."
      />

      <ServiceOverview
        title="Professional Business Support"
        description="Our experienced team provides practical administrative and operational support, allowing your organization to focus on growth while we handle essential business processes."
      />

      <ServiceFeatures
        title="Our Services"
        subtitle="Comprehensive support solutions designed to improve efficiency and productivity."
        items={adminServices}
      />

      <ServiceIndustries industries={industries} />

      <ServiceProcess />

      <ServiceBenefits
        title="Why Work With Us"
        benefits={[
          "Reliable support personnel",
          "Flexible service engagement",
          "Professional documentation",
          "Confidential data handling",
          "Fast turnaround time",
          "Business process improvement",
          "Experienced administrative team",
          "Scalable support services",
        ]}
      />

      <ServiceCTA />
    </>
  );
}