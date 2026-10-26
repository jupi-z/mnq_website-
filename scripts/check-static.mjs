import { existsSync,readFileSync } from "node:fs";
import { strict as assert } from "node:assert";

const ready = process.env.NEXT_PUBLIC_SITE_READY === "true";
const officialRccm = "CD/KWZ/RCCM/26-B-00523";
const officialIdNat = "14-F4300-N00001Y";
const intentionallyNoindex = new Set(["realisations","actualites"]);

for (const locale of ["fr","en"]) {
  for (const route of ["","groupe/","activites/","ecosysteme/","realisations/","partenariats/","actualites/","contact/","mentions-legales/","confidentialite/"]) {
    const path = "out/"+locale+"/"+route+"index.html";
    assert.ok(existsSync(path),"Missing generated page: "+path);
    const html = readFileSync(path,"utf8");
    assert.match(html,/<h1[ >]/,"Missing H1 in "+path);
    assert.match(html,/MonarQue Group/,"Missing identity in "+path);
    const slug=route.replace(/\/$/,"");
    if(ready && intentionallyNoindex.has(slug)) {
      assert.match(html,/<meta[^>]*name="robots"[^>]*content="noindex, follow/i,"Placeholder page must remain noindexed: "+path);
    } else if(ready) {
      assert.doesNotMatch(html,/<meta[^>]*name="robots"[^>]*content="noindex/i,"Public launch accidentally noindexed: "+path);
    } else {
      assert.match(html,/<meta[^>]*name="robots"[^>]*content="noindex/i,"Preview indexation gate missing: "+path);
    }
  }
  const legal = readFileSync("out/"+locale+"/mentions-legales/index.html","utf8");
  assert.ok(legal.includes(officialRccm),"Verified RCCM missing in "+locale);
  assert.ok(legal.includes(officialIdNat),"Verified national ID missing in "+locale);
  const contact = readFileSync("out/"+locale+"/contact/index.html","utf8");
  assert.ok(contact.includes("contact@monarquegrp.com"),"Official email missing in "+locale);
}

for(const image of ["public/brand/logo-horizontal.webp","public/brand/icone.webp","out/favicon.ico"]) {
  assert.ok(existsSync(image),"Brand asset missing: "+image);
}
const robots=readFileSync("out/robots.txt","utf8");
const sitemap=readFileSync("out/sitemap.xml","utf8");
assert.ok(existsSync("out/sitemap.xml"),"Sitemap missing");
assert.equal((sitemap.match(/<loc>/g)||[]).length,28,"Sitemap should contain only 28 canonical, indexable URLs");
assert.doesNotMatch(sitemap,/\/(actualites|realisations)\//,"Sitemap contains a placeholder page marked noindex");
if(ready) {
  assert.match(robots,/Allow:\s*\//i,"Public robots.txt does not allow crawling");
} else {
  assert.match(robots,/Disallow:\s*\//i,"Preview robots.txt does not block indexing");
}
console.log("Static route, legal identity, brand and "+(ready?"public":"preview")+" indexation gates passed.");
