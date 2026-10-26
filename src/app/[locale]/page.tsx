import type { Metadata } from "next";
import { Home } from "@/components/home";
import { content, isLocale, locales, localPath, SITE_URL } from "@/lib/site";
import { WebsiteSchema } from "@/components/website-schema";
import { notFound } from "next/navigation";

export function generateStaticParams(){return locales.map(locale=>({locale}));}
export const dynamicParams = false;

export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{
  const {locale}=await params;
  if(!isLocale(locale)) return {};
  return {
    title:locale==="fr"?"MonarQue Group | Groupe multisectoriel à Kolwezi":"MonarQue Group | Multisectoral group in Kolwezi",
    description:locale==="fr"
      ?"Groupe entrepreneurial multisectoriel établi à Kolwezi, en RDC. Activités numériques, commerciales et projets industriels en préparation; lancement envisagé en mars 2027."
      :"A multisectoral entrepreneurial group based in Kolwezi, DR Congo. Digital, commercial and industrial initiatives are in preparation; launch planned for March 2027, subject to confirmation.",
    openGraph:{type:"website",siteName:"MonarQue Group",title:locale==="fr"?"MonarQue Group | Groupe multisectoriel à Kolwezi":"MonarQue Group | Multisectoral group in Kolwezi",description:content[locale].home.lead,url:SITE_URL+localPath(locale),locale:locale==="fr"?"fr_CD":"en_US"},
    twitter:{card:"summary",title:"MonarQue Group S.A.S.",description:content[locale].home.lead},
    alternates:{canonical:localPath(locale),languages:{fr:localPath("fr"),en:localPath("en"),"x-default":localPath("fr")}}
  };
}
export default async function LocalHome({params}:{params:Promise<{locale:string}>}){
  const {locale}=await params;
  if(!isLocale(locale)) notFound();
  return <><WebsiteSchema/><Home locale={locale}/></>;
}
