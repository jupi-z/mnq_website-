import type { Metadata } from "next";
import "../globals.css";
import { SITE_READY, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "MonarQue Group S.A.S. | Groupe entrepreneurial multisectoriel",
  description: "MonarQue Group S.A.S. — groupe entrepreneurial multisectoriel à Kolwezi, en République démocratique du Congo.",
  robots: { index:SITE_READY,follow:SITE_READY },
  icons: {icon: [{url:"/brand/icone.webp",type:"image/webp"}]},
  openGraph: {type:"website",siteName:"MonarQue Group S.A.S.",locale:"fr_CD",url:SITE_URL,title:"MonarQue Group S.A.S.",description:"Groupe entrepreneurial multisectoriel basé à Kolwezi, en RDC."},
  alternates: { canonical: "/fr/", languages: {fr:"/fr/", en:"/en/"} }
};
export default function DefaultLayout({children}:{children:React.ReactNode}) {
  return <html lang="fr"><body>{children}</body></html>;
}
