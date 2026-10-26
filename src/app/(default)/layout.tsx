import type { Metadata } from "next";
import "../globals.css";
import { SITE_READY, SITE_URL } from "@/lib/site";
import {atlasManrope,atlasInstrument} from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "MonarQue Group",
  title: "MonarQue Group | Groupe multisectoriel à Kolwezi",
  description: "Groupe entrepreneurial multisectoriel établi à Kolwezi, en RDC. Activités numériques, commerciales et projets industriels en préparation; lancement envisagé en mars 2027.",
  robots: { index:SITE_READY,follow:SITE_READY },
  icons: {icon: [{url:"/favicon.ico",type:"image/x-icon"},{url:"/brand/icone.webp",type:"image/webp"}]},
  openGraph: {type:"website",siteName:"MonarQue Group",locale:"fr_CD",url:SITE_URL+"/",title:"MonarQue Group | Groupe multisectoriel à Kolwezi",description:"Groupe entrepreneurial multisectoriel établi à Kolwezi, en RDC. Activités en préparation."},
  twitter: {card:"summary",title:"MonarQue Group | Groupe multisectoriel à Kolwezi",description:"Groupe entrepreneurial multisectoriel établi à Kolwezi, en RDC. Activités en préparation."},
  alternates: { canonical: "/", languages: {fr:"/fr/", en:"/en/", "x-default":"/fr/"} }
};
export default function DefaultLayout({children}:{children:React.ReactNode}) {
  return <html lang="fr"><body className={atlasManrope.variable+" "+atlasInstrument.variable}>{children}</body></html>;
}
