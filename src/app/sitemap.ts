import { MetadataRoute } from "next";

export const dynamic = "force-dynamic";

const siteUrl = "https://xinfinityhub.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}