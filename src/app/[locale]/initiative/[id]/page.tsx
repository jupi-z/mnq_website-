import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {atlasIds,atlasInitiative,atlasWords} from "@/lib/atlas";
import {isLocale,locales,localPath,SITE_URL} from "@/lib/site";

type Params=Promise<{locale:string;id:string}>;
export const dynamicParams=false;
export function generateStaticParams(){return locales.flatMap(locale=>atlasIds.map(id=>({locale,id})));}
export async function generateMetadata({params}:{params:Params}):Promise<Metadata>{
 const {locale,id}=await params;if(!isLocale(locale))return {};
 const item=atlasInitiative(locale,id);if(!item)return {};
 const title=item.name+" | MonarQue Group";
 const url=localPath(locale)+"initiative/"+id+"/";
 return {
  title,
  description:item.description,
  openGraph:{type:"website",siteName:"MonarQue Group",title,description:item.description,url:SITE_URL+url,locale:locale==="fr"?"fr_CD":"en_US"},
  twitter:{card:"summary",title,description:item.description},
  alternates:{canonical:url,languages:{fr:"/fr/initiative/"+id+"/",en:"/en/initiative/"+id+"/","x-default":"/fr/initiative/"+id+"/"}}
 };
}
export default async function InitiativePage({params}:{params:Params}){
 const {locale,id}=await params;if(!isLocale(locale))notFound();
 const item=atlasInitiative(locale,id);if(!item)notFound();
 const t=atlasWords[locale];
 return <>
  <section className="atlas-subhero atlas-shell atlas-project-heading"><div><div className="atlas-breadcrumb">{locale==="fr"?"ÉCOSYSTÈME":"ECOSYSTEM"} / {item.category}</div><span className="eyebrow">{item.status}</span><h1>{item.name}</h1><p className="atlas-project-strap">{item.line}</p></div><div className={"atlas-project-mark atlas-project-mark-"+item.id}><span>{item.name}</span></div></section>
  <section className="atlas-section atlas-shell"><div className="atlas-section-split"><span className="eyebrow">{locale==="fr"?"01 / PRÉSENTATION":"01 / OVERVIEW"}</span><div><h2 className="atlas-statement">{item.line}</h2><p className="atlas-project-description">{item.description}</p><p className="atlas-disclosure">{item.approach}</p></div></div>
   <div className="atlas-project-facts"><div><span className="atlas-overline">{locale==="fr"?"NATURE":"NATURE"}</span><p>{item.category}</p></div><div><span className="atlas-overline">{locale==="fr"?"STATUT":"STATUS"}</span><p>{item.status}</p></div><div><span className="atlas-overline">{locale==="fr"?"GROUPE":"GROUP"}</span><p>MonarQue Group S.A.S.</p></div></div>
   <div className="atlas-focus"><span className="eyebrow">{locale==="fr"?"DOMAINES D'INTÉRÊT":"AREAS OF FOCUS"}</span>{item.focus.map((area,i)=><div key={area}><span>0{i+1}</span><h2>{area}</h2></div>)}</div>
   <Link className="atlas-text-link" href={localPath(locale,"ecosysteme")}>← {locale==="fr"?"Retour à l'écosystème":"Back to ecosystem"}</Link>
  </section>
  <section className="atlas-cta"><div className="atlas-shell atlas-cta-inner"><div><span className="eyebrow">{t.reach}</span><h2>{t.reachHeadline}<br/><em>{t.reachHighlight}</em></h2></div><Link className="atlas-button atlas-button-light" href={localPath(locale,"contact")}>{t.start}<span aria-hidden="true">↗</span></Link></div></section>
 </>;
}
