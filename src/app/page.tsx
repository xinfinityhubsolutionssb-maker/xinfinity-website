import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import WhatsappButton from "@/components/common/WhatsappButton";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="pt-32">
        <Hero />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <SolutionsSection />
        <IndustriesSection />
        <WhyChooseSection />
        <ProcessSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsappButton />
    </>
  );
}