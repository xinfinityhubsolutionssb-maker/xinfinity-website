import type { Metadata } from "next";

import AutoCountHero from "@/components/autocount/AutoCountHero";
import AutoCountOverview from "@/components/autocount/AutoCountOverview";
import AutoCountProducts from "@/components/autocount/AutoCountProducts";
import AutoCountImplementation from "@/components/autocount/AutoCountImplementation";
import AutoCountIndustries from "@/components/autocount/AutoCountIndustries";
import AutoCountEditions from "@/components/autocount/AutoCountEditions";
import AutoCountPricing from "@/components/autocount/AutoCountPricing";
import AutoCountSupport from "@/components/autocount/AutoCountSupport";
import AutoCountFAQ from "@/components/autocount/AutoCountFAQ";
import AutoCountCTA from "@/components/autocount/AutoCountCTA";

export const metadata: Metadata = {
  title: "AutoCount Accounting Software Malaysia | XINFINITY HUB SOLUTIONS",
  description:
    "Official AutoCount Accounting Software solutions by XINFINITY HUB SOLUTIONS SDN. BHD. We provide consultation, implementation, cloud deployment, desktop licensing, data migration, customization, user training, technical support and maintenance for businesses across Malaysia.",
  keywords: [
    "AutoCount",
    "AutoCount Accounting",
    "AutoCount Cloud",
    "AutoCount Malaysia",
    "Accounting Software",
    "Cloud Accounting",
    "Inventory System",
    "Payroll",
    "POS",
    "e-Invoice",
    "Business Software",
    "ERP",
    "SME Software",
    "Malaysia Accounting Software",
  ],
  openGraph: {
    title: "AutoCount Business Solutions",
    description:
      "Professional AutoCount consultation, implementation, licensing, deployment and support for Malaysian businesses.",
    type: "website",
  },
};

export default function AutoCountPage() {
  return (
    <main className="overflow-x-hidden bg-[#07111F]">
      <AutoCountHero />

      <AutoCountOverview />

      <AutoCountProducts />

      <AutoCountIndustries />

      <AutoCountEditions />

      <AutoCountPricing />

      <AutoCountImplementation />

      <AutoCountSupport />

      <AutoCountFAQ />

      <AutoCountCTA />
    </main>
  );
}