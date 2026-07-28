import { MetadataRoute } from "next";

export const dynamic = "force-dynamic";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://xinfinityhub.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/contact",
    "/solutions",
    "/industries",
    "/technology",
    "/portfolio",
    "/pricing",
    "/faq",
    "/privacy-policy",
    "/terms",
    "/autocount",
    "/autocount/pricing",
    "/autocount/editions",
    "/software-development",
    "/website-development",
    "/mobile-app-development",
    "/erp-solutions",
    "/hardware-supply",
    "/agency-services",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}