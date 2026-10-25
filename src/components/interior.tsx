import Link from "next/link";
import { ContactChannels } from "@/components/contact-channels";
import { content, localPath, type Locale, type Slug } from "@/lib/site";

export function Interior({locale,slug}:{locale:Locale;slug:Slug}) {
  const t=content[locale];
  const page=t.pages[slug];
  const isContact=slug==="contact";
  const showCTA=!["contact","mentions-legales","confidentialite"].includes(slug);
  return (
    <>
      <section className="interior-hero">
        <div className="shell">
          <span className="eyebrow"><span className="signal"/> {page.eyebrow}</span>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </div>
      </section>
      <section className="section-block interior-content">
        <div className="shell">
          {page.sections.map((section,index)=><article className="detail-row" key={section.title}>
            <div className="detail-tag">{section.tag || String(index+1).padStart(2,"0")}</div>
            <div className="detail-body"><h2>{section.title}</h2><p>{section.body}</p></div>
            <div aria-hidden="true" className="detail-index">0{index+1}</div>
          </article>)}
          {isContact ? <><ContactChannels locale={locale}/><div className="contact-action"><a href={"mailto:" + t.common.email} className="button button-primary">{t.common.write}<span aria-hidden="true">↗</span></a></div></> : null}
          {page.closing ? <div className="interior-note">{page.closing}</div> : null}
        </div>
      </section>
      {showCTA && <section className="closing-section compact-closing"><div className="shell closing-inner"><span className="eyebrow">{locale==="fr"?"POURSUIVRE L'ÉCHANGE":"CONTINUE THE CONVERSATION"}</span><h2>{t.home.closingTitle}</h2><Link className="button button-white" href={localPath(locale,"contact")}>{t.common.write}<span aria-hidden="true">↗</span></Link></div></section>}
    </>
  );
}
