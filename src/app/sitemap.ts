import type { MetadataRoute } from "next";
import { locales, localPath, slugs, SITE_URL } from "@/lib/site";

export default function sitemap():MetadataRoute.Sitemap {
  const home = locales.map(locale=>({url:SITE_URL+localPath(locale)}));
  const pages = locales.flatMap(locale=>slugs.map(slug=>({url:SITE_URL+localPath(locale,slug)})));
  return [...home,...pages].map(item=>({...item,changeFrequency:"monthly" as const,priority:item.url.endsWith("/fr/") || item.url.endsWith("/en/") ? 1 : 0.7}));
}
