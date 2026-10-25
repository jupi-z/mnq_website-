import { SITE_URL } from "@/lib/site";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MonarQue Group S.A.S.",
  legalName: "MONARQUE GROUP S.A.S.",
  url: SITE_URL,
  logo: SITE_URL+"/brand/logo-horizontal.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "N° 900, Avenue Bunkeya, Quartier Mutoshi, Commune de Manika",
    addressLocality: "Kolwezi",
    addressRegion: "Lualaba",
    addressCountry: "CD"
  }
};
export function OrganizationSchema() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(organization).replace(/</g,"\\u003c")}}/>;
}
