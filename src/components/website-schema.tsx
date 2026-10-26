import { SITE_URL } from "@/lib/site";

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MonarQue Group",
  alternateName: "MonarQue Group S.A.S.",
  url: SITE_URL + "/",
  inLanguage: ["fr-CD", "en"]
};

export function WebsiteSchema() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(website).replace(/</g,"\\u003c")}}/>;
}
