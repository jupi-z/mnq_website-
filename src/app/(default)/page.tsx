import { Home } from "@/components/home";
import { SiteShell } from "@/components/site-shell";
import { WebsiteSchema } from "@/components/website-schema";
export default function Index() {
  return <SiteShell locale="fr"><WebsiteSchema/><Home locale="fr"/></SiteShell>;
}
