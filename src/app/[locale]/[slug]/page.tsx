import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Interior } from "@/components/interior";
import { content, isLocale, isSlug, locales, localPath, slugs } from "@/lib/site";

type Params = Promise<{locale:string;slug:string}>;
export function generateStaticParams() {
  return locales.flatMap(locale=>slugs.map(slug=>({locale,slug})));
}
export const dynamicParams = false;
export async function generateMetadata({params}:{params:Params}):Promise<Metadata> {
  const {locale,slug}=await params;
  if(!isLocale(locale)||!isSlug(slug)) return {};
  const page=content[locale].pages[slug];
  return {
    title:page.title+" | MonarQue Group S.A.S.",
    description:page.intro,
    openGraph:{type:"website",siteName:"MonarQue Group",title:page.title+" | MonarQue Group",description:page.intro,url:localPath(locale,slug),locale:locale==="fr"?"fr_CD":"en_US"},
    twitter:{card:"summary",title:page.title+" | MonarQue Group",description:page.intro},
    robots:slug==="actualites"||slug==="realisations"?{index:false,follow:true}:undefined,
    alternates:{
      canonical:localPath(locale,slug),
      languages:{fr:localPath("fr",slug),en:localPath("en",slug),"x-default":localPath("fr",slug)}
    }
  };
}
export default async function ContentPage({params}:{params:Params}) {
  const {locale,slug}=await params;
  if(!isLocale(locale)||!isSlug(slug)) notFound();
  return <Interior locale={locale} slug={slug}/>;
}
