import { SITE_URL } from "@/lib/site";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": SITE_URL + "/#organization",
  name: "MonarQue Group",
  alternateName: "MonarQue Group S.A.S.",
  legalName: "MonarQue Group S.A.S.",
  url: SITE_URL + "/",
  email: "contact@monarquegrp.com",
  identifier: [
    {"@type":"PropertyValue",propertyID:"RCCM",value:"CD/KWZ/RCCM/26-B-00523"},
    {"@type":"PropertyValue",propertyID:"Identification nationale",value:"14-F4300-N00001Y"}
  ],
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
