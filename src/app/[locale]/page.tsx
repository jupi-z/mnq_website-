import type { Metadata } from "next";
import { Home } from "@/components/home";
import { content, isLocale, locales, localPath, SITE_URL } from "@/lib/site";
import { notFound } from "next/navigation";

export function generateStaticParams(){return locales.map(locale=>({locale}));}
export const dynamicParams = false;

export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{
  const {locale}=await params;
  if(!isLocale(locale)) return {};
  return {
    title:locale==="fr"?"MonarQue Group S.A.S. | Penser loin. Construire avec sens.":"MonarQue Group S.A.S. | Think further. Build with purpose.",
    description:content[locale].home.lead,
    openGraph:{type:"website",siteName:"MonarQue Group S.A.S.",title:locale==="fr"?"MonarQue Group S.A.S. | Groupe multisectoriel":"MonarQue Group S.A.S. | Multisector group",description:content[locale].home.lead,url:localPath(locale),locale:locale==="fr"?"fr_CD":"en_US"},
    twitter:{card:"summary",title:"MonarQue Group S.A.S.",description:content[locale].home.lead},
    alternates:{canonical:localPath(locale),languages:{fr:localPath("fr"),en:localPath("en")}}
  };
}
export default async function LocalHome({params}:{params:Promise<{locale:string}>}){
  const {locale}=await params;
  if(!isLocale(locale)) notFound();
  return <Home locale={locale}/>;
}
