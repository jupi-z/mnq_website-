import {test,expect} from "@playwright/test";

const ids=["zingatia","ltex","monarque-connect","thyslo","zamurek","aura"];

test("all six Atlas narratives render in both languages with complete sections and FAQs",async({page})=>{
  const errors:string[]=[];
  page.on("pageerror",e=>errors.push(e.message));
  for(const locale of ["fr","en"]){
    for(const id of ids){
      const route="/"+locale+"/initiative/"+id+"/";
      const response=await page.goto(route);
      expect(response?.status(),route).toBe(200);
      await expect(page.getByRole("heading",{level:1})).toContainText(id==="monarque-connect"?"Monarque Connect":id==="thyslo"?"THYSLO":id==="zamurek"?"ZAMUREK":id==="aura"?"Aura":id==="ltex"?"LTEX":"Zingatia");
      expect(await page.locator(".atlas-deep-chapter").count(),route+" chapters").toBe(7);
      expect(await page.locator(".atlas-deep-faq details").count(),route+" FAQs").toBe(3);
      expect(await page.locator(".atlas-deep-prose>p,.atlas-deep-method").count(),route+" body").toBeGreaterThan(8);
      await expect(page.getByRole("link",{name:locale==="fr"?"EN":"FR",exact:true})).toBeVisible();
    }
  }
  expect(errors).toEqual([]);
});

test("initiative language switch preserves the exact project route",async({page})=>{
  await page.goto("/fr/initiative/thyslo/");
  await page.locator(".locale-switch").click();
  await expect(page).toHaveURL(/\/en\/initiative\/thyslo\/?$/);
  await expect(page.getByRole("heading",{level:2,name:/Frequently asked questions/})).toBeVisible();
  await page.locator(".locale-switch").click();
  await expect(page).toHaveURL(/\/fr\/initiative\/thyslo\/?$/);
});

test("all initiative pages fit a narrow mobile viewport",async({page})=>{
  await page.setViewportSize({width:320,height:780});
  for(const locale of ["fr","en"])for(const id of ids){
    const route="/"+locale+"/initiative/"+id+"/";
    await page.goto(route);
    const result=await page.evaluate(()=>({width:document.documentElement.scrollWidth,viewport:window.innerWidth}));
    expect(result.width,route+" horizontal overflow").toBeLessThanOrEqual(result.viewport+1);
  }
});

test("public initiative HTML does not expose unreleased prices or private project names",async({page})=>{
  await page.goto("/fr/initiative/monarque-connect/");
  const body=await page.locator("main").innerText();
  expect(body).not.toMatch(/FairScale|ERPNext|Prisma|PostgreSQL|15\s*USD|45\s*USD|180\s*USD|ZingaPartners|LaJoie Mall/);
  await page.goto("/fr/initiative/zamurek/");
  const zam=await page.locator("main").innerText();
  expect(zam).not.toMatch(/LaJoie Mall|Mercur|NestJS|Prisma|Monarque Connect fournit|Monarque Connect provides/);
});
