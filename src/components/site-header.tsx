"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { content, localPath, isSlug, type Locale } from "@/lib/site";

export function SiteHeader({locale}:{locale:Locale}) {
  const text = content[locale];
  const pathname = usePathname();
  const normalizedPath = pathname.endsWith("/") ? pathname : pathname + "/";
  const other:Locale = locale === "fr" ? "en" : "fr";
  const currentSlug = pathname.split("/").filter(Boolean)[1];
  const otherHref = currentSlug && isSlug(currentSlug) ? localPath(other,currentSlug) : localPath(other);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [brandLoaded, setBrandLoaded] = useState(false);
  useEffect(() => {
    const stored = window.localStorage.getItem("monarque-theme");
    const enabled = stored === "dark";
    document.documentElement.dataset.theme = enabled ? "dark" : "light";
    setDark(enabled);
  }, []);
  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    window.localStorage.setItem("monarque-theme", next ? "dark" : "light");
  }
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href={localPath(locale)} className="brand" aria-label="MonarQue Group — accueil">
          <span className={"brand-fallback" + (brandLoaded ? " visually-hidden" : "")}><span className="brand-main">MONARQUE</span><span className="brand-sub"><span className="brand-stroke"/>GROUP<span className="brand-stroke"/></span></span>
          <img src="/brand/logo-horizontal.webp" alt="" className={"brand-logo" + (brandLoaded ? " is-loaded" : "")} onLoad={() => setBrandLoaded(true)} onError={() => setBrandLoaded(false)}/>
        </Link>
        <nav className="desktop-nav" aria-label={locale === "fr" ? "Navigation principale" : "Main navigation"}>
          {text.nav.map(link => <Link href={localPath(locale,link.slug)} key={link.slug} aria-current={normalizedPath === localPath(locale,link.slug) ? "page" : undefined}>{link.label}</Link>)}
        </nav>
        <div className="header-controls">
          <Link className="locale-switch" href={otherHref} lang={other} hrefLang={other} aria-label={other === "en" ? "Read in English" : "Lire en français"}>{other.toUpperCase()}</Link>
          <button type="button" className="theme-toggle" aria-label={dark ? text.common.light : text.common.dark} onClick={toggleTheme} title={dark ? text.common.light : text.common.dark}>{dark ? "☀" : "◐"}</button>
          <button type="button" className="mobile-toggle" aria-label={open ? text.common.close : text.common.navigation} aria-controls="mobile-nav" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span className="menu-line"/><span className="menu-line"/>
          </button>
        </div>
      </div>
      <nav id="mobile-nav" className={"mobile-nav" + (open ? " is-open" : "")} aria-label={locale === "fr" ? "Navigation mobile" : "Mobile navigation"}>
        {text.nav.map(link => <Link href={localPath(locale,link.slug)} onClick={() => setOpen(false)} key={link.slug} aria-current={normalizedPath === localPath(locale,link.slug) ? "page" : undefined}>{link.label}<span aria-hidden="true">↗</span></Link>)}
      </nav>
    </header>
  );
}
