import type { MetadataRoute } from "next";
import { locales, localPath, slugs, SITE_URL } from "@/lib/site";
import { atlasIds } from "@/lib/atlas";

export const dynamic = "force-static";

export default function sitemap():MetadataRoute.Sitemap {
  const home = locales.map(locale=>({url:SITE_URL+localPath(locale)}));
  const pages = locales.flatMap(locale=>slugs.map(slug=>({url:SITE_URL+localPath(locale,slug)})));
  const initiatives=locales.flatMap(locale=>atlasIds.map(id=>({url:SITE_URL+"/"+locale+"/initiative/"+id+"/"})));
  return [...home,...pages,...initiatives].map(item=>({...item,changeFrequency:"monthly" as const,priority:item.url.endsWith("/fr/") || item.url.endsWith("/en/") ? 1 : 0.7}));
}
