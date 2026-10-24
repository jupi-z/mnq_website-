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
    title:locale==="fr"?"MonarQue Group S.A.S. | Entreprendre et développer":"MonarQue Group S.A.S. | Build and develop",
    description:content[locale].home.lead,
    alternates:{canonical:localPath(locale),languages:{fr:localPath("fr"),en:localPath("en")}}
  };
}
export default async function LocalHome({params}:{params:Promise<{locale:string}>}){
  const {locale}=await params;
  if(!isLocale(locale)) notFound();
  return <Home locale={locale}/>;
}
