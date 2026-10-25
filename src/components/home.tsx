import Link from "next/link";
import { content, localPath, type Locale } from "@/lib/site";

export function Home({locale}:{locale:Locale}) {
  const t = content[locale];
  const h=t.home;
  return (
    <>
      <section className="hero">
        <div className="shell hero-inner">
          <div className="hero-content">
            <div className="eyebrow hero-label"><span className="signal"/> {h.eyebrow}</div>
            <p className="launch-status">{t.launchStatus}</p>
            <h1>{h.title}</h1>
            <p className="hero-lead">{h.lead}</p>
            <div className="actions">
              <Link className="button button-primary" href={localPath(locale,"groupe")}>{h.explore}<span aria-hidden="true">↗</span></Link>
              <Link className="button button-text" href={localPath(locale,"partenariats")}>{h.partnership}<span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <div className="hero-bottom"><span>MONARQUE GROUP S.A.S.</span><span>KOLWEZI · RDC</span></div>
          <p className="hero-image-note">{h.visualNote}</p>
        </div>
      </section>
      <section className="section-block statement-section">
        <div className="shell split-layout">
          <span className="eyebrow section-eyebrow">{h.introLabel}</span>
          <div><h2 className="display-title">{h.introTitle}</h2><p className="section-description">{h.introBody}</p><p className="launch-disclosure">{t.launchNotice}</p></div>
        </div>
      </section>
      <section className="section-block section-subtle">
        <div className="shell">
          <div className="section-heading"><span className="eyebrow">{h.areasLabel}</span><h2 className="display-title">{h.areasTitle}</h2></div>
          <div className="area-grid">
            {h.areas.map((area,index)=><div className="area" key={area.title}>
              <div className="area-number">0{index+1}</div><div className="area-content"><h3>{area.title}</h3><p>{area.body}</p></div>
              <span className="area-arrow" aria-hidden="true">↗</span>
            </div>)}
          </div>
          <div className="inline-more"><Link className="text-link" href={localPath(locale,"activites")}>{t.pages.activites.title}<span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>
      <section className="section-block ecosystem-section">
        <div className="shell split-layout">
          <span className="eyebrow section-eyebrow">{h.ecosystemLabel}</span>
          <div><h2 className="display-title">{h.ecosystemTitle}</h2><p className="section-description">{h.ecosystemBody}</p>
            <div className="word-rail"><span>ZINGATIA</span><span>LTEX</span><span>MONARQUE CONNECT</span><span>THYSLO</span><span>ZAMUREK</span></div>
            <Link className="text-link" href={localPath(locale,"ecosysteme")}>{t.common.discover}<span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
      <section className="section-block section-subtle values-section">
        <div className="shell">
          <div className="section-heading"><span className="eyebrow">{h.valuesLabel}</span><h2 className="display-title">{h.valuesTitle}</h2></div>
          <div className="values-grid">{h.values.map((value,index)=><article className="value" key={value.title}><span>0{index+1}</span><h3>{value.title}</h3><p>{value.body}</p></article>)}</div>
        </div>
      </section>
      <section className="closing-section">
        <div className="shell closing-inner"><span className="eyebrow">{locale==="fr"?"05 / COLLABORATION":"05 / COLLABORATION"}</span><h2>{h.closingTitle}</h2><p>{h.closingBody}</p><Link className="button button-white" href={localPath(locale,"contact")}>{t.common.write}<span aria-hidden="true">↗</span></Link></div>
      </section>
    </>
  );
}
