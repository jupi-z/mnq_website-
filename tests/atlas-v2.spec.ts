import {test,expect} from "@playwright/test";

for(const locale of ["fr","en"] as const){
  test("Atlas V2 "+locale+" home and visual language",async({page})=>{
    const response=await page.goto("/"+locale+"/");
    expect(response?.status()).toBe(200);
    await expect(page.locator(".atlas-hero h1")).toBeVisible();
    await expect(page.locator(".atlas-art canvas")).toBeVisible();
    const background=await page.locator("body").evaluate(el=>getComputedStyle(el).backgroundColor);
    expect(background).toBe("rgb(245, 243, 236)");
    await expect(page.locator(".atlas-forest")).toBeVisible();
  });
  test("Atlas V2 "+locale+" ecosystem filtering and initiative details",async({page})=>{
    await page.goto("/"+locale+"/ecosysteme/");
    await expect(page.locator(".atlas-initiative")).toHaveCount(6);
    const label=locale==="fr"?"Produits":"Products";
    await page.getByRole("button",{name:label,exact:true}).click();
    await expect(page.locator(".atlas-initiative")).toHaveCount(3);
    await page.locator(".atlas-initiative").first().click();
    await expect(page).toHaveURL(new RegExp("/"+locale+"/initiative/monarque-connect/"));
    await expect(page.locator(".atlas-project-heading h1")).toHaveText("Monarque Connect");
  });
  test("Atlas V2 "+locale+" domain selector",async({page})=>{
    await page.goto("/"+locale+"/activites/");
    const tabs=page.getByRole("tab");
    await expect(tabs).toHaveCount(4);
    await tabs.nth(2).click();
    await expect(tabs.nth(2)).toHaveAttribute("aria-selected","true");
    await expect(page.locator("#atlas-domain-detail h2")).toContainText(locale==="fr"?"Industrie":"Industry");
  });
  test("Atlas V2 "+locale+" complete mobile multipage routes",async({page})=>{
    await page.setViewportSize({width:320,height:750});
    for(const route of ["","groupe/","activites/","ecosysteme/","realisations/","partenariats/","actualites/","contact/","mentions-legales/","confidentialite/","initiative/zingatia/","initiative/ltex/","initiative/monarque-connect/","initiative/thyslo/","initiative/zamurek/","initiative/aura/"]){
      const url="/"+locale+"/"+route;
      const response=await page.goto(url);
      expect(response?.status(),url).toBe(200);
      await expect(page.locator("h1").first()).toBeVisible();
      const width=await page.evaluate(()=>document.documentElement.scrollWidth);
      expect(width,url+" horizontal overflow").toBeLessThanOrEqual(321);
    }
  });
}

test("Atlas fonts are applied to display, body and italic titles",async({page})=>{
  await page.goto("/fr/");
  await page.evaluate(()=>document.fonts.ready);
  const fonts=await page.evaluate(()=>{
    const h=document.querySelector(".atlas-hero h1");
    const em=document.querySelector(".atlas-hero h1 em");
    return {body:getComputedStyle(document.body).fontFamily,display:h?getComputedStyle(h).fontFamily:"",italic:em?getComputedStyle(em).fontFamily:""};
  });
  expect(fonts.body.toLowerCase()).toContain("manrope");
  expect(fonts.display.toLowerCase()).toContain("manrope");
  expect(fonts.italic.toLowerCase()).toContain("instrument");
});
