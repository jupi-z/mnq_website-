import type { Metadata } from "next";
import "../globals.css";
import { isLocale, locales, SITE_READY, SITE_URL } from "@/lib/site";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import {atlasManrope,atlasInstrument} from "@/lib/fonts";

export function generateStaticParams() { return locales.map(locale=>({locale})); }
export const dynamicParams = false;
export const metadata:Metadata = {
  metadataBase:new URL(SITE_URL),
  applicationName:"MonarQue Group",
  robots:{index:SITE_READY,follow:SITE_READY},
  icons:{icon:[{url:"/favicon.ico",type:"image/x-icon"},{url:"/brand/icone.webp",type:"image/webp"}]}
};
export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}) {
  const {locale}=await params;
  if(!isLocale(locale)) notFound();
  return <html lang={locale}><body className={atlasManrope.variable+" "+atlasInstrument.variable}><SiteShell locale={locale}>{children}</SiteShell></body></html>;
}
