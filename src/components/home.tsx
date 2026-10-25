import Link from "next/link";
import {AtlasArt} from "@/components/atlas-art";
import {atlasInitiatives,atlasWords} from "@/lib/atlas";
import {content,localPath,type Locale} from "@/lib/site";

function Arrow(){return <span className="atlas-link-arrow" aria-hidden="true">↗</span>;}
export function Home({locale}:{locale:Locale}){
 const t=content[locale],h=t.home,a=atlasWords[locale];
 const initiatives=atlasInitiatives(locale);
 return <>
  <section className="atlas-hero atlas-shell">
   <div className="atlas-hero-copy">
    <span className="eyebrow">MONARQUE GROUP S.A.S. / KOLWEZI, RDC</span>
    <h1><span>{a.headlineOne}</span><em>{a.headlineTwo}</em></h1>
    <p className="atlas-lead">{h.lead}</p>
    <div className="atlas-actions"><Link className="atlas-button" href={localPath(locale,"groupe")}>{a.discover}<Arrow/></Link><Link className="atlas-text-link" href={localPath(locale,"activites")}>{a.explore}<Arrow/></Link></div>
    <span className="atlas-hero-disclosure">{a.company}</span>
   </div>
   <AtlasArt label={locale==="fr"?"Une identité en mouvement":"An identity in motion"}/>
  </section>
  <div className="atlas-strap atlas-shell"><span>{a.based}</span><span>{a.company}</span><span>MONARQUE / 2026</span></div>
  <section className="atlas-section atlas-shell" id="vision">
   <div className="atlas-section-split"><div className="atlas-side-note"><span className="eyebrow">01 / {a.about}</span><span className="atlas-hairline"/></div>
    <div><h2 className="atlas-statement">{a.aboutHeadline}<br/><em>{a.aboutHighlight}</em></h2><div className="atlas-intro-bottom"><p>{h.introBody}<br/><br/>{t.launchNotice}</p><Link className="atlas-text-link" href={localPath(locale,"groupe")}>{a.more}<Arrow/></Link></div></div></div>
  </section>
  <section className="atlas-section atlas-section-mist">
   <div className="atlas-shell"><div className="atlas-section-heading"><div><span className="eyebrow">02 / {a.fields}</span><h2>{a.fieldsHeadline}<br/><em>{a.fieldsHighlight}</em></h2></div><p>{locale==="fr"?"Des domaines complémentaires, développés avec méthode et selon leur maturité réelle.":"Complementary fields, developed methodically and in line with their actual stage."}</p></div>
    <div className="atlas-domain-rows">{h.areas.map((area,i)=><Link href={localPath(locale,"activites")} className="atlas-domain-row" key={area.title}><span className="atlas-number">0{i+1}</span><h3>{area.title}</h3><p>{area.body}</p><Arrow/></Link>)}</div>
   </div>
  </section>
  <section className="atlas-section atlas-forest">
   <div className="atlas-shell"><div className="atlas-section-heading"><div><span className="eyebrow">03 / {a.ecosystem}</span><h2>{a.ecosystemHeadline}<br/><em>{a.ecosystemHighlight}</em></h2></div><p>{h.ecosystemBody}</p></div>
    <div className="atlas-ecosystem-feature"><div className="atlas-feature-word"><span>01 / MONARQUE CONNECT</span><strong>Connect<span aria-hidden="true">↗</span></strong><p>{initiatives[2].description}</p><Link href={"/"+locale+"/initiative/monarque-connect/"} className="atlas-text-link">{a.selected}<Arrow/></Link></div><div className="atlas-feature-grid"><span className="atlas-feature-number">MQ / 06</span><div className="atlas-feature-geometry" aria-hidden="true"><i/><i/><i/><i/></div><span className="atlas-feature-bottom">{a.independent}</span></div></div>
    <div className="atlas-project-rail"><span className="atlas-overline">{a.preparation}</span><div>{initiatives.map(item=><Link key={item.id} href={"/"+locale+"/initiative/"+item.id+"/"}>{item.name}</Link>)}</div></div>
    <Link className="atlas-text-link atlas-forest-link" href={localPath(locale,"ecosysteme")}>{a.seeAll}<Arrow/></Link>
   </div>
  </section>
  <section className="atlas-section atlas-shell"><div className="atlas-section-heading"><div><span className="eyebrow">04 / {h.valuesLabel}</span><h2>{h.valuesTitle}</h2></div></div><div className="atlas-values">{h.values.map((v,i)=><article key={v.title}><span className="atlas-number">0{i+1}</span><h3>{v.title}</h3><p>{v.body}</p></article>)}</div></section>
  <section className="atlas-cta"><div className="atlas-shell atlas-cta-inner"><div><span className="eyebrow">05 / {a.reach}</span><h2>{a.reachHeadline}<br/><em>{a.reachHighlight}</em></h2></div><Link className="atlas-button atlas-button-light" href={localPath(locale,"contact")}>{a.start}<Arrow/></Link></div></section>
 </>;
}
