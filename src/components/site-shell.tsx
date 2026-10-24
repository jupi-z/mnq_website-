import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import type { Locale } from "@/lib/site";

export function SiteShell({locale,children}:{locale:Locale;children:ReactNode}) {
  return <><a className="skip-link" href="#main">{locale === "fr" ? "Aller au contenu" : "Skip to content"}</a><SiteHeader locale={locale}/><main id="main">{children}</main><SiteFooter locale={locale}/></>;
}
