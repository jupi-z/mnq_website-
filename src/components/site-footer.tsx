import Link from "next/link";
import { content, localPath, type Locale } from "@/lib/site";

export function SiteFooter({locale}:{locale:Locale}) {
  const text = content[locale];
  return (
    <footer className="footer">
      <div className="shell footer-main">
        <div className="footer-statement">
          <span className="eyebrow muted">MONARQUE GROUP S.A.S.</span>
          <h2>{text.tagline}</h2>
          <p>{text.footer.intro}</p>
        </div>
        <div className="footer-column">
          <h3>{text.footer.navigation}</h3>
          {text.nav.map(item=><Link href={localPath(locale,item.slug)} key={item.slug}>{item.label}</Link>)}
          <Link href={localPath(locale,"realisations")}>{text.pages.realisations.title}</Link>
          <Link href={localPath(locale,"actualites")}>{text.pages.actualites.title}</Link>
        </div>
        <div className="footer-column">
          <h3>{text.footer.contact}</h3>
          <a href={"mailto:" + text.common.email}>{text.common.email}</a>
          <span>{text.footer.location}</span>
          <h3 className="footer-legal-title">{text.footer.legal}</h3>
          <Link href={localPath(locale,"mentions-legales")}>{text.pages["mentions-legales"].title}</Link>
          <Link href={localPath(locale,"confidentialite")}>{text.pages.confidentialite.title}</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} MonarQue Group S.A.S. — {text.footer.rights}.</span>
        <span>{text.footer.status}</span>
      </div>
    </footer>
  );
}
