import { MetadataRoute } from "next";

export const revalidate = 86400; // regenerate once per day

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://xinfinityhub.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/",
    "/about",
    "/services",
    "/services/software-digital-solutions",
    "/services/software-digital-solutions/autocount",
    "/services/software-digital-solutions/autocount/business-types",
    "/services/software-digital-solutions/autocount/products",
    "/services/software-digital-solutions/autocount/pricing",
    "/services/software-digital-solutions/autocount/editions",
    "/services/software-digital-solutions/autocount/compare-editions",
    "/services/software-digital-solutions/autocount/resources",
    "/services/hardware-it-infrastructure",
    "/services/accounts-administration-manpower-support",
    "/services/project-tender-support-services",
    "/services/travel-tour-services",
    "/solutions",
    "/industries",
    "/why-choose-us",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  const now = new Date();

  return pages.map((page) => ({
    url: `${siteUrl}${page}`,
    lastModified: now,
    changeFrequency:
      page === "/"
        ? "weekly"
        : page.startsWith("/services/software-digital-solutions/autocount")
        ? "weekly"
        : "monthly",
    priority:
      page === "/"
        ? 1.0
        : page === "/services"
        ? 0.95
        : page === "/contact"
        ? 0.9
        : page === "/about"
        ? 0.9
        : page === "/solutions"
        ? 0.9
        : page === "/industries"
        ? 0.9
        : page.startsWith("/services")
        ? 0.85
        : 0.8,
  }));
}