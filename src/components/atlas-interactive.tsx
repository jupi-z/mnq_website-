"use client";

import {useState} from "react";
import Link from "next/link";
import {atlasInitiatives,atlasWords,type AtlasInitiative} from "@/lib/atlas";
import type {Locale} from "@/lib/site";

const categories=["all","brands","internal","products","industry"] as const;

export function AtlasProjects({locale}:{locale:Locale}){
  const [filter,setFilter]=useState<(typeof categories)[number]>("all");
  const terms=atlasWords[locale];
  const data=atlasInitiatives(locale);
  const visible=data.filter(item=>filter==="all" || (filter==="brands"&&item.id==="zingatia") || (filter==="internal"&&item.id==="ltex") || (filter==="products"&&["monarque-connect","thyslo","zamurek"].includes(item.id)) || (filter==="industry"&&item.id==="aura"));
  return <div>
    <div className="atlas-filter" role="group" aria-label={locale==="fr"?"Filtrer les initiatives":"Filter initiatives"}>
      {categories.map(key=><button key={key} type="button" aria-pressed={filter===key} onClick={()=>setFilter(key)}>{key==="all"?terms.all:key==="brands"?terms.brands:key==="internal"?terms.internal:key==="products"?terms.products:terms.industry}</button>)}
      <span className="atlas-filter-count" aria-live="polite">{String(visible.length).padStart(2,"0")} / {String(data.length).padStart(2,"0")}</span>
    </div>
    <div className="atlas-initiative-list">{visible.map((item,index)=><InitiativeRow key={item.id} item={item} locale={locale} index={index}/>)}</div>
  </div>;
}
function InitiativeRow({item,locale,index}:{item:AtlasInitiative;locale:Locale;index:number}){
  return <Link className="atlas-initiative" href={"/"+locale+"/initiative/"+item.id+"/"}>
    <span className="atlas-number">{String(index+1).padStart(2,"0")}</span>
    <div><span className="atlas-overline">{item.category} / {item.status}</span><h2>{item.name}</h2></div>
    <p>{item.description}</p><span className="atlas-arrow" aria-hidden="true">↗</span>
  </Link>;
}

export function AtlasDomainSelector({locale,areas}:{locale:Locale;areas:{title:string;body:string}[]}){
  const [active,setActive]=useState(0);
  const term=atlasWords[locale];
  return <div className="atlas-domain-layout">
    <div className="atlas-domain-tabs" role="tablist" aria-label={term.fields}>
      {areas.map((area,i)=><button type="button" key={area.title} role="tab" aria-selected={active===i} aria-controls="atlas-domain-detail" id={"atlas-domain-tab-"+i} onClick={()=>setActive(i)}><span>{String(i+1).padStart(2,"0")}</span>{area.title}<b aria-hidden="true">↗</b></button>)}
    </div>
    <div id="atlas-domain-detail" className="atlas-domain-detail" role="tabpanel" aria-labelledby={"atlas-domain-tab-"+active} tabIndex={0}>
      <div className={"atlas-domain-art atlas-domain-art-"+active} aria-hidden="true"><div className="atlas-geometric-symbol"><span/><span/><span/><span/></div><small>MONARQUE / {String(active+1).padStart(2,"0")}</small></div>
      <span className="atlas-overline">{term.scope} / 0{active+1}</span>
      <h2>{areas[active].title}</h2>
      <p>{areas[active].body}</p>
      <p className="atlas-disclosure">{term.preparation}</p>
    </div>
  </div>;
}
