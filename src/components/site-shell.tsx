import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { OrganizationSchema } from "@/components/organization-schema";
import { SiteFooter } from "@/components/site-footer";
import type { Locale } from "@/lib/site";

export function SiteShell({locale,children}:{locale:Locale;children:ReactNode}) {
  return <><OrganizationSchema/><a className="skip-link" href="#main">{locale === "fr" ? "Aller au contenu" : "Skip to content"}</a><SiteHeader locale={locale}/><main id="main">{children}</main><SiteFooter locale={locale}/></>;
}
