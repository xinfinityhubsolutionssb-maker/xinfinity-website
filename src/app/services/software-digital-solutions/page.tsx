import type { Metadata } from "next";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceIndustries from "@/components/services/ServiceIndustries";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceCTA from "@/components/services/ServiceCTA";

import { softwareSolutions } from "@/data/software-solutions";
import { industries } from "@/data/industries";
import BackToHomeButton from "@/components/common/BackToHomeButton";

export const metadata: Metadata = {
  title: "Software & Digital Solutions",
  description:
    "Enterprise software, AutoCount implementation, website development, mobile applications, cloud solutions and digital transformation solutions.",
};

export default function SoftwareDigitalSolutionsPage() {
  return (
      <>
        <BackToHomeButton />
        
      <ServiceHero
        badge="Software & Digital Solutions"
        title="Empowering Businesses Through Innovative Technology"
        description="From enterprise software implementation and AutoCount solutions to cloud transformation, website development and mobile applications, XINFINITY delivers end-to-end digital solutions that help organisations improve productivity, efficiency and sustainable growth."
      />

      <ServiceOverview
        title="Enterprise Software Solutions"
        description="Our Software & Digital Solutions combine technology, automation and professional consulting to help businesses streamline operations, improve collaboration and accelerate digital transformation. Whether you are a startup, SME, Government agency or enterprise organisation, we design and implement scalable solutions tailored to your business objectives."
      />

      <ServiceFeatures
        title="Our Digital Solutions"
        subtitle="Comprehensive technology services designed to support every stage of your business growth."
        items={softwareSolutions}
      />

      <ServiceIndustries industries={industries} />

      <ServiceProcess />

      <ServiceBenefits
        title="Why Choose XINFINITY"
        benefits={[
          "Professional consultation and business analysis",
          "Experienced implementation and deployment team",
          "Reliable after-sales technical support",
          "Modern scalable technology solutions",
          "Customised solutions based on business requirements",
          "Secure and future-ready digital architecture",
          "User training and knowledge transfer",
          "Long-term technology partnership",
        ]}
      />

      <ServiceCTA />
    </>
  );
}