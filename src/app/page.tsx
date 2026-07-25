import TopBar from "@/components/layout/TopBar";

import Hero from "@/components/sections/Hero";
import TrustedBySection from "@/components/home/TrustedBySection";
import StatsSection from "@/components/sections/StatsSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TechnologySection from "@/components/sections/TechnologySection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactSection from "@/components/sections/ContactSection";

import WhatsappButton from "@/components/common/WhatsappButton";

export default function Home() {
  return (
    <>
      <TopBar />

      <main className="pt-32">
        <Hero />

        <TrustedBySection />

        <StatsSection />

        <AboutSection />

        <ServicesSection />

        <TechnologySection />

        <SolutionsSection />

        <IndustriesSection />

        <WhyChooseSection />

        <ProcessSection />

        <ContactSection />
      </main>

      <WhatsappButton />
    </>
  );
}