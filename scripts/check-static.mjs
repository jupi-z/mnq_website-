import { existsSync,readFileSync } from "node:fs";
import { strict as assert } from "node:assert";

for(const locale of ["fr","en"]) {
  for(const route of ["","groupe/","activites/","ecosysteme/","realisations/","partenariats/","actualites/","contact/","mentions-legales/","confidentialite/"]) {
    const path="out/"+locale+"/"+route+"index.html";
    assert.ok(existsSync(path),"Missing generated page: "+path);
    const html=readFileSync(path,"utf8");
    assert.match(html,/<h1[ >]/,"Missing H1 in "+path);
    assert.match(html,/MonarQue Group/,"Missing identity in "+path);
    assert.match(html,/noindex/i,"Launch gate accidentally open in "+path);
  }
}
for(const image of ["public/brand/logo-horizontal.webp","public/brand/icone.webp"]) {
  assert.ok(existsSync(image),"Official brand asset missing: "+image);
}
assert.ok(existsSync("out/robots.txt"),"robots.txt missing");
assert.ok(existsSync("out/sitemap.xml"),"sitemap.xml missing");
assert.ok(existsSync("out/favicon.ico"),"Favicon missing");
console.log("Static route, brand and prelaunch gates passed.");
