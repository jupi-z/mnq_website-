import type { MetadataRoute } from "next";
import { SITE_READY, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function robots():MetadataRoute.Robots {
  return {
    rules: SITE_READY ? [{userAgent:"*",allow:"/"}] : [{userAgent:"*",disallow:"/"}],
    sitemap: SITE_URL + "/sitemap.xml"
  };
}
