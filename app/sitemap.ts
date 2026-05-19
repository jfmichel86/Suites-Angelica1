import type { MetadataRoute } from "next";
import { properties } from "@/lib/properties";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.suitesangelica.com";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/properties`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    ...properties.map((property) => ({ url: `${base}/properties/${property.slug}`, lastModified: new Date() })),
  ];
}
