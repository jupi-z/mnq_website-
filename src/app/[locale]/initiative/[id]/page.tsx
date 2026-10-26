import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {atlasIds,atlasInitiative,atlasInitiatives,atlasWords} from "@/lib/atlas";
import {initiativeNarratives,type InitiativeNarrative} from "@/lib/initiative-narratives";
import {isLocale,locales,localPath,SITE_URL,type Locale} from "@/lib/site";

type Params=Promise<{locale:string;id:string}>;
export const dynamicParams=false;
export function generateStaticParams(){return locales.flatMap(locale=>atlasIds.map(id=>({locale,id})));}

export async function generateMetadata({params}:{params:Params}):Promise<Metadata>{
 const {locale,id}=await params;
 if(!isLocale(locale))return {};
 const item=atlasInitiative(locale,id);
 const narrative=initiativeNarratives[id]?.[locale];
 if(!item||!narrative)return {};
 const title=item.name+" | MonarQue Group S.A.S.";
 const description=narrative.intro.slice(0,165);
 const url=localPath(locale)+"initiative/"+id+"/";
 return {
  title,description,
  openGraph:{type:"website",siteName:"MonarQue Group",title,description,url:SITE_URL+url,locale:locale==="fr"?"fr_CD":"en_US"},
  twitter:{card:"summary",title,description},
  alternates:{canonical:url,languages:{fr:"/fr/initiative/"+id+"/",en:"/en/initiative/"+id+"/","x-default":"/fr/initiative/"+id+"/"}}
 };
}

function RichText({text}:{text:string}){
 const tokens=text.split(/(\*\*[^*]+\*\*)/g);
 return <>{tokens.map((token,i)=>token.startsWith("**")&&token.endsWith("**")?<strong key={i}>{token.slice(2,-2)}</strong>:<span key={i}>{token}</span>)}</>;
}

function EditorialParagraph({text}:{text:string}){
 const list=text.match(/^(\d+)\.\s+(.+)$/);
 if(list)return <div className="atlas-deep-method"><span aria-hidden="true">{list[1].padStart(2,"0")}</span><p><RichText text={list[2]}/></p></div>;
 return <p><RichText text={text}/></p>;
}

function InitiativeSections({narrative,locale}:{narrative:InitiativeNarrative;locale:Locale}){
 return <div className="atlas-deep-content">
  <aside className="atlas-deep-aside" aria-label={locale==="fr"?"Sommaire de la page":"Page contents"}>
    <span className="atlas-overline">{locale==="fr"?"SUR CETTE PAGE":"ON THIS PAGE"}</span>
    <nav>{narrative.sections.map(s=><a key={s.number} href={"#chapter-"+s.number}><span>{s.number}</span>{s.title}</a>)}<a href="#questions"><span>08</span>{locale==="fr"?"Questions fréquentes":"Frequently asked questions"}</a></nav>
  </aside>
  <div className="atlas-deep-main">
    {narrative.sections.map((s,i)=><section id={"chapter-"+s.number} className={"atlas-deep-chapter"+(i===1||i===4?" atlas-deep-chapter-highlight":"")} key={s.number} aria-labelledby={"chapter-label-"+s.number}>
       <div className="atlas-deep-section-index"><span>{s.number} / 07</span><span className="atlas-deep-index-rule"/></div>
       <h2 id={"chapter-label-"+s.number}>{s.title}</h2>
       <div className="atlas-deep-prose">{s.paragraphs.map((p,j)=><EditorialParagraph text={p} key={j}/>)}</div>
      </section>)}
    <section id="questions" className="atlas-deep-faq" aria-labelledby="atlas-faq-title">
      <span className="atlas-overline">08 / {locale==="fr"?"EN BREF":"IN BRIEF"}</span>
      <h2 id="atlas-faq-title">{locale==="fr"?"Questions fréquentes":"Frequently asked questions"}</h2>
      <div>{narrative.faqs.map((entry,i)=><details key={i}><summary>{entry.question}<span aria-hidden="true">+</span></summary><p>{entry.answer}</p></details>)}</div>
    </section>
  </div>
 </div>;
}

export default async function InitiativePage({params}:{params:Params}){
 const {locale,id}=await params;
 if(!isLocale(locale))notFound();
 const item=atlasInitiative(locale,id);
 const narrative=initiativeNarratives[id]?.[locale];
 if(!item||!narrative)notFound();
 const t=atlasWords[locale];
 const contactHref="mailto:contact@monarquegrp.com?subject="+encodeURIComponent((locale==="fr"?"Projet":"Project")+": "+item.name);
 const currentIndex=atlasIds.indexOf(item.id);
 const suggested=[1,2].map(offset=>atlasIds[(currentIndex+offset)%atlasIds.length]);
 return <>
   <section className={"atlas-deep-hero atlas-deep-hero-"+item.id}>
    <div className="atlas-shell atlas-deep-hero-grid">
      <div className="atlas-deep-hero-copy">
        <div className="atlas-deep-breadcrumb"><Link href={localPath(locale,"ecosysteme")}>{locale==="fr"?"Écosystème":"Ecosystem"}</Link><span aria-hidden="true">/</span><span>{item.name}</span></div>
        <span className="atlas-deep-status"><i/>{narrative.status}</span>
        <span className="atlas-deep-category">{item.category}</span>
        <h1>{item.name}<em>{narrative.hero}</em></h1>
        <p className="atlas-deep-intro">{narrative.intro}</p>
        <div className="atlas-deep-hero-actions">
          <a className="atlas-button" href="#chapter-01">{locale==="fr"?"Explorer le projet":"Explore the initiative"} <span aria-hidden="true">↘</span></a>
          <a className="atlas-deep-quiet-link" href={contactHref}>{locale==="fr"?"Entrer en contact":"Get in touch"} ↗</a>
        </div>
      </div>
      <div className={"atlas-deep-cover atlas-deep-cover-"+item.id} aria-hidden="true">
        <span className="atlas-deep-cover-label">MONARQUE / {String(currentIndex+1).padStart(2,"0")}</span>
        <div className="atlas-deep-cover-orbit"><span/><span/><span/></div>
        <strong>{item.name}</strong>
        <span className="atlas-deep-cover-footer">{locale==="fr"?"INITIATIVE DU GROUPE":"GROUP INITIATIVE"}</span>
      </div>
    </div>
   </section>
   <div className="atlas-deep-meta">
     <div className="atlas-shell atlas-deep-meta-inner">
       <div><small>{locale==="fr"?"NATURE":"NATURE"}</small><span>{item.category}</span></div>
       <div><small>{locale==="fr"?"SITUATION":"STATUS"}</small><span>{item.status}</span></div>
       <div><small>{locale==="fr"?"STRUCTURE":"ORGANIZATION"}</small><span>MonarQue Group S.A.S.</span></div>
     </div>
   </div>
   <div className="atlas-shell atlas-deep-entry"><span className="atlas-overline">{locale==="fr"?"LA RAISON D'ÊTRE":"THE PURPOSE"}</span><div><h2>{narrative.heroTitle}</h2><p>{item.description}</p></div></div>
   <div className="atlas-shell"><InitiativeSections narrative={narrative} locale={locale}/></div>
   <section className="atlas-deep-next" aria-labelledby="atlas-related-title">
     <div className="atlas-shell">
       <span className="atlas-overline">{locale==="fr"?"DANS NOTRE ÉCOSYSTÈME":"WITHIN OUR ECOSYSTEM"}</span>
       <h2 id="atlas-related-title">{locale==="fr"?"Continuer l'exploration.":"Keep exploring."}</h2>
       <div className="atlas-deep-next-links">{suggested.map(key=>{
         const next=atlasInitiative(locale,key);
         return next?<Link href={localPath(locale)+"initiative/"+key+"/"} key={key}><span className="atlas-overline">{next.category}</span><strong>{next.name}</strong><span aria-hidden="true">↗</span></Link>:null;
       })}</div>
       <Link className="atlas-text-link" href={localPath(locale,"ecosysteme")}>← {locale==="fr"?"Toutes les initiatives":"All initiatives"}</Link>
     </div>
   </section>
   <section className="atlas-cta"><div className="atlas-shell atlas-cta-inner"><div><span className="eyebrow">{locale==="fr"?"ENTRONS EN RELATION":"LET'S CONNECT"}</span><h2>{locale==="fr"?"Une question, une idée,":"A question, an idea,"}<br/><em>{locale==="fr"?"une collaboration ?":"a collaboration?"}</em></h2><p className="atlas-deep-cta-note">{locale==="fr"?"Chaque échange est étudié selon le périmètre et la maturité réelle du projet.":"Every inquiry is considered in light of the initiative's scope and actual development stage."}</p></div><a className="atlas-button atlas-button-light" href={contactHref}>{t.start}<span aria-hidden="true">↗</span></a></div></section>
 </>;
}
