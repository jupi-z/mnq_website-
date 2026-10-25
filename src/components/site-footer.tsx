import Link from "next/link";
import {atlasWords} from "@/lib/atlas";
import {content,localPath,type Locale} from "@/lib/site";

export function SiteFooter({locale}:{locale:Locale}){
 const t=content[locale],a=atlasWords[locale];
 return <footer className="atlas-footer"><div className="atlas-shell atlas-footer-grid">
   <div className="atlas-footer-brand"><Link href={localPath(locale)}><img src="/brand/logo-horizontal.webp" alt="MonarQue Group S.A.S." width={250} height={65}/></Link><p>{t.footer.intro}</p><span className="atlas-overline">{a.company}</span></div>
   <div><h2>{t.footer.navigation}</h2><nav className="atlas-footer-links">{t.nav.map(n=><Link href={localPath(locale,n.slug)} key={n.slug}>{n.slug==="activites"?(locale==="fr"?"Domaines":"Fields"):n.label}</Link>)}<Link href={localPath(locale,"realisations")}>{t.pages.realisations.title}</Link><Link href={localPath(locale,"actualites")}>{t.pages.actualites.title}</Link></nav></div>
   <div><h2>{t.footer.contact}</h2><div className="atlas-footer-links"><a href={"mailto:"+t.common.email}>{t.common.email}</a><span>{t.footer.location}</span><Link href={localPath(locale,"mentions-legales")}>{t.pages["mentions-legales"].title}</Link><Link href={localPath(locale,"confidentialite")}>{t.pages.confidentialite.title}</Link></div></div>
  </div><div className="atlas-footer-bottom atlas-shell"><span>© {new Date().getFullYear()} MONARQUE GROUP S.A.S. / {t.footer.rights}</span><span>{locale==="fr"?"Penser loin. Construire avec sens.":"Think further. Build with purpose."}</span></div>
 </footer>;
}
