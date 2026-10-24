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
    alternates:{
      canonical:localPath(locale,slug),
      languages:{fr:localPath("fr",slug),en:localPath("en",slug)}
    }
  };
}
export default async function ContentPage({params}:{params:Params}) {
  const {locale,slug}=await params;
  if(!isLocale(locale)||!isSlug(slug)) notFound();
  return <Interior locale={locale} slug={slug}/>;
}
