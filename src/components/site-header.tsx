"use client";
import Link from "next/link";
import {useEffect,useState} from "react";
import {usePathname} from "next/navigation";
import {content,localPath,isSlug,type Locale} from "@/lib/site";

export function SiteHeader({locale}:{locale:Locale}){
 const t=content[locale];const pathname=usePathname();
 const normalized=pathname.endsWith("/")?pathname:pathname+"/";
 const other:Locale=locale==="fr"?"en":"fr";
 const parts=pathname.split("/").filter(Boolean);
 const otherHref=parts[1]==="initiative"&&parts[2]?"/"+other+"/initiative/"+parts[2]+"/":parts[1]&&isSlug(parts[1])?localPath(other,parts[1]):localPath(other);
 const [open,setOpen]=useState(false),[dark,setDark]=useState(false);
 useEffect(()=>{const enabled=window.localStorage.getItem("monarque-theme")==="dark";document.documentElement.dataset.theme=enabled?"dark":"light";setDark(enabled);},[]);
 useEffect(()=>{setOpen(false);},[pathname]);
 function toggleTheme(){const next=!dark;setDark(next);document.documentElement.dataset.theme=next?"dark":"light";window.localStorage.setItem("monarque-theme",next?"dark":"light");}
 return <header className="site-header"><div className="header-inner atlas-shell">
  <Link className="brand" href={localPath(locale)} aria-label="MonarQue Group — accueil"><img className="brand-logo" alt="MonarQue Group S.A.S." src="/brand/logo-horizontal.webp" width={240} height={56}/></Link>
  <nav className="desktop-nav" aria-label={locale==="fr"?"Navigation principale":"Main navigation"}>{t.nav.filter(item=>item.slug!=="contact").map(item=><Link key={item.slug} href={localPath(locale,item.slug)} aria-current={normalized===localPath(locale,item.slug)?"page":undefined}>{item.slug==="activites"?(locale==="fr"?"Domaines":"Fields"):item.label}</Link>)}</nav>
  <div className="header-controls"><Link href={localPath(locale,"contact")} className="atlas-header-contact">{locale==="fr"?"Entrons en relation":"Let's connect"} <span aria-hidden="true">↗</span></Link><Link className="locale-switch" href={otherHref} lang={other} hrefLang={other} aria-label={other==="en"?"Read in English":"Lire en français"}>{other.toUpperCase()}</Link><button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={dark?t.common.light:t.common.dark}>{dark?"☀":"◐"}</button><button className="mobile-toggle" type="button" onClick={()=>setOpen(!open)} aria-label={open?t.common.close:t.common.navigation} aria-controls="mobile-nav" aria-expanded={open}><span className="menu-line"/><span className="menu-line"/></button></div>
  </div>
  <nav id="mobile-nav" aria-label={locale==="fr"?"Navigation mobile":"Mobile navigation"} className={"mobile-nav"+(open?" is-open":"")}>{t.nav.map(item=><Link href={localPath(locale,item.slug)} key={item.slug} onClick={()=>setOpen(false)}>{item.slug==="activites"?(locale==="fr"?"Domaines":"Fields"):item.label}<span aria-hidden="true">↗</span></Link>)}</nav>
 </header>;
}
