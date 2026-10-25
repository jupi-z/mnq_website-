import Link from "next/link";
import {ContactChannels} from "@/components/contact-channels";
import {AtlasProjects,AtlasDomainSelector} from "@/components/atlas-interactive";
import {atlasWords} from "@/lib/atlas";
import {content,localPath,type Locale,type Slug} from "@/lib/site";

function Arrow(){return <span className="atlas-link-arrow" aria-hidden="true">↗</span>;}
export function Interior({locale,slug}:{locale:Locale;slug:Slug}){
 const t=content[locale],p=t.pages[slug],a=atlasWords[locale];
 const legal=slug==="mentions-legales"||slug==="confidentialite";
 const contact=slug==="contact";
 const title=p.title;
 return <>
  <section className="atlas-subhero atlas-shell">
   <div className="atlas-breadcrumb">{locale==="fr"?"ACCUEIL":"HOME"} <span>/</span> {p.eyebrow}</div>
   <span className="eyebrow">{p.eyebrow}</span>
   <h1>{title}</h1>
   <div className="atlas-subhero-bottom"><p>{p.intro}</p><span className="atlas-page-number">0{["groupe","activites","ecosysteme","realisations","partenariats","actualites","contact","mentions-legales","confidentialite"].indexOf(slug)+1}</span></div>
  </section>
  {slug==="activites"?
   <section className="atlas-section atlas-shell"><AtlasDomainSelector locale={locale} areas={t.home.areas}/><div className="atlas-detail-follow">{p.sections.map((s,i)=><article key={s.title} className="atlas-detail-row"><span className="atlas-overline">{s.tag} / 0{i+1}</span><h2>{s.title}</h2><p>{s.body}</p></article>)}</div></section>
   :slug==="ecosysteme"?
   <section className="atlas-section atlas-shell"><AtlasProjects locale={locale}/><div className="atlas-quiet-note">{a.preparation}</div></section>
   :slug==="groupe"?
   <><section className="atlas-section atlas-shell atlas-about-feature"><div><span className="eyebrow">{a.about}</span><h2>{a.aboutHeadline}<br/><em>{a.aboutHighlight}</em></h2></div><div className="atlas-about-art" aria-hidden="true"><i/><i/><i/><i/></div></section><section className="atlas-section atlas-section-mist"><div className="atlas-shell">{p.sections.map((s,i)=><article className="atlas-detail-row" key={s.title}><span className="atlas-overline">{s.tag} / 0{i+1}</span><h2>{s.title}</h2><p>{s.body}</p></article>)}</div></section></>
   :slug==="partenariats"?
   <><section className="atlas-section atlas-shell"><div className="atlas-partnership-grid">{p.sections.map((s,i)=><article key={s.title} className="atlas-partner"><span className="atlas-overline">0{i+1} / {s.tag}</span><h2>{s.title}</h2><p>{s.body}</p><span className="atlas-partner-arrow" aria-hidden="true">↗</span></article>)}</div></section><section className="atlas-section atlas-forest"><div className="atlas-shell"><span className="eyebrow">{a.collab}</span><h2 className="atlas-statement">{a.next}</h2><Link className="atlas-button atlas-button-light" href={localPath(locale,"contact")}>{a.start}<Arrow/></Link></div></section></>
   :contact?
   <section className="atlas-section atlas-shell atlas-contact-layout"><div className="atlas-contact-info"><span className="eyebrow">{a.reach}</span>{p.sections.map(s=><div key={s.title}><span className="atlas-overline">{s.tag}</span><h2>{s.title}</h2><p>{s.body}</p></div>)}</div><div className="atlas-contact-methods"><h2>{a.next}</h2><ContactChannels locale={locale}/><a className="atlas-button" href={"mailto:"+t.common.email}>{t.common.write}<Arrow/></a></div></section>
   :legal?
   <section className="atlas-section atlas-shell"><article className="atlas-legal">{p.sections.map(s=><section key={s.title}><span className="atlas-overline">{s.tag}</span><h2>{s.title}</h2><p>{s.body}</p></section>)}{p.closing&&<p className="atlas-quiet-note">{p.closing}</p>}</article></section>
   :<section className="atlas-section atlas-shell"><div className="atlas-editorial-list">{p.sections.map((s,i)=><article className="atlas-detail-row" key={s.title}><span className="atlas-overline">{s.tag||"0"+(i+1)}</span><h2>{s.title}</h2><p>{s.body}</p></article>)}</div>{p.closing&&<p className="atlas-quiet-note">{p.closing}</p>}</section>}
  {!legal&&!contact&&slug!=="partenariats"&&<section className="atlas-cta"><div className="atlas-shell atlas-cta-inner"><div><span className="eyebrow">{a.reach}</span><h2>{a.reachHeadline}<br/><em>{a.reachHighlight}</em></h2></div><Link className="atlas-button atlas-button-light" href={localPath(locale,"contact")}>{a.start}<Arrow/></Link></div></section>}
 </>;
}
