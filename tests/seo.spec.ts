import {test,expect} from "@playwright/test";

const indexingEnabled=process.env.NEXT_PUBLIC_SITE_READY==="true";

test("Public home exposes canonical, language alternatives and truthful organization/site data",async({page})=>{
  await page.goto("/fr/");
  if(indexingEnabled){
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content",/index/);
    await expect(page.locator('meta[name="robots"]')).not.toHaveAttribute("content",/noindex/);
  }else{
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content",/noindex/);
  }
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href","https://monarquegrp.com/fr/");
  await expect(page.locator('link[hreflang="fr"]')).toHaveAttribute("href","https://monarquegrp.com/fr/");
  await expect(page.locator('link[hreflang="en"]')).toHaveAttribute("href","https://monarquegrp.com/en/");
  await expect(page.locator('link[hreflang="x-default"]')).toHaveAttribute("href","https://monarquegrp.com/fr/");

  const blocks=await page.locator('script[type="application/ld+json"]').allTextContents();
  const schemas=blocks.map(text=>JSON.parse(text));
  const website=schemas.find(schema=>schema["@type"]==="WebSite");
  const organization=schemas.find(schema=>schema["@type"]==="Organization");
  expect(website).toMatchObject({name:"MonarQue Group",alternateName:"MonarQue Group S.A.S.",url:"https://monarquegrp.com/"});
  expect(organization).toMatchObject({name:"MonarQue Group",legalName:"MonarQue Group S.A.S.",email:"contact@monarquegrp.com"});
  expect(organization).not.toHaveProperty("logo");
  expect(organization.identifier).toEqual(expect.arrayContaining([
    expect.objectContaining({propertyID:"RCCM",value:"CD/KWZ/RCCM/26-B-00523"}),
    expect.objectContaining({propertyID:"Identification nationale",value:"14-F4300-N00001Y"})
  ]));
});

test("Robots and sitemap include only pages intended for search results",async({page,request})=>{
  const robotsResponse=await request.get("/robots.txt");
  expect(robotsResponse.ok()).toBeTruthy();
  expect(await robotsResponse.text()).toContain(indexingEnabled?"Allow: /":"Disallow: /");
  expect(await robotsResponse.text()).toContain("https://monarquegrp.com/sitemap.xml");

  const sitemapResponse=await request.get("/sitemap.xml");
  expect(sitemapResponse.ok()).toBeTruthy();
  const sitemap=await sitemapResponse.text();
  expect(sitemap).toContain("/fr/initiative/zingatia/");
  expect(sitemap).toContain("/en/initiative/aura/");
  expect(sitemap).not.toContain("/actualites/");
  expect(sitemap).not.toContain("/realisations/");
  expect((sitemap.match(/<loc>/g)||[]).length).toBe(28);

  for(const locale of ["fr","en"]){
    for(const slug of ["actualites","realisations"]){
      await page.goto(`/${locale}/${slug}/`);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content",/noindex/);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content",/follow/);
    }
  }
});

test("Initiative pages have localized descriptions and canonical sharing metadata",async({page})=>{
  for(const [locale,expected] of [["fr","Zingatia"],["en","Zingatia"]]){
    await page.goto(`/${locale}/initiative/zingatia/`);
    await expect(page.locator('meta[name="description"]')).not.toHaveAttribute("content","");
    await expect(page.locator('meta[property="og:site_name"]')).toHaveAttribute("content","MonarQue Group");
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href",`https://monarquegrp.com/${locale}/initiative/zingatia/`);
    await expect(page.locator("h1")).toContainText(expected);
  }
});
