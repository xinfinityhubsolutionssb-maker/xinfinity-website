import type { Metadata } from "next";

import ServiceHero from "@/components/services/ServiceHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceCTA from "@/components/services/ServiceCTA";

import { travelServices } from "@/data/travel-services";
import BackToHomeButton from "@/components/common/BackToHomeButton";

export const metadata: Metadata = {
  title: "Travel & Tour Services",
  description:
    "Flight booking, hotel reservations, visa assistance, holiday packages and corporate travel solutions.",
};

export default function TravelTourServicesPage() {
  return (
    <>
      <BackToHomeButton />

      <ServiceHero
        badge="Travel Services"
        title="Professional Travel & Tour Solutions"
        description="Complete travel planning and booking services for individuals, families and businesses."
      />

      <ServiceOverview
        title="Travel Made Simple"
        description="Whether for business trips or holidays, we help plan and coordinate your travel with reliable booking and support services."
      />

      <ServiceFeatures
        title="Our Travel Services"
        subtitle="End-to-end travel solutions for local and international destinations."
        items={travelServices}
      />

      <ServiceBenefits
        title="Why Choose Our Travel Services"
        benefits={[
          "Personalized travel planning",
          "Competitive travel options",
          "Business travel expertise",
          "Reliable customer support",
          "Flexible itineraries",
          "International destination coverage",
          "Group travel management",
          "Convenient booking assistance",
        ]}
      />

      <ServiceCTA />
    </>
  );
}