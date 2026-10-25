import { test, expect } from "@playwright/test";

const slugs = [
  "groupe", "activites", "ecosysteme", "realisations", "partenariats",
  "actualites", "contact", "mentions-legales", "confidentialite"
];

test("Home has the official logo and a prelaunch disclosure", async ({page}) => {
  const errors:string[]=[];
  page.on("pageerror",e=>errors.push(e.message));
  await page.goto("/fr/");
  await expect(page.getByRole("heading",{level:1})).toBeVisible();
  await expect(page.getByText(/Activités en préparation/i).first()).toBeVisible();
  await expect(page.locator(".brand-logo")).toBeVisible();
  const naturalWidth=await page.locator(".brand-logo").evaluate((img:HTMLImageElement)=>img.naturalWidth);
  expect(naturalWidth).toBeGreaterThan(0);
  expect(errors).toEqual([]);
});

test("Language switch preserves the current section",async ({page})=>{
  await page.goto("/fr/partenariats/");
  await page.locator(".locale-switch").click();
  await expect(page).toHaveURL(/\/en\/partenariats\/?$/);
  await expect(page.getByRole("heading",{level:1,name:"Grow together"})).toBeVisible();
  await page.locator(".locale-switch").click();
  await expect(page).toHaveURL(/\/fr\/partenariats\/?$/);
});

test("Theme preference toggles and persists", async ({page})=>{
  await page.goto("/fr/");
  await page.getByRole("button",{name:/Activer le mode sombre/}).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme","dark");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme","dark");
  await page.getByRole("button",{name:/Activer le mode clair/}).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme","light");
});

test("Mobile navigation works without horizontal overflow",async ({page})=>{
  await page.setViewportSize({width:320,height:730});
  await page.goto("/fr/");
  await page.getByRole("button",{name:"Ouvrir le menu"}).click();
  await expect(page.locator("#mobile-nav")).toHaveClass(/is-open/);
  await page.locator("#mobile-nav").getByRole("link",{name:/Le Groupe/}).click();
  await expect(page).toHaveURL(/\/fr\/groupe\/?$/);
  await expect(page.getByRole("heading",{level:1,name:"Le Groupe"})).toBeVisible();
  const dimensions=await page.evaluate(()=>({width:document.documentElement.scrollWidth,view:window.innerWidth}));
  expect(dimensions.width).toBeLessThanOrEqual(dimensions.view+1);
});

for(const locale of ["fr","en"]) {
  for(const slug of slugs) {
    test(locale+"/"+slug+" renders successfully",async ({page})=>{
      const response=await page.goto("/"+locale+"/"+slug+"/");
      expect(response?.status()).toBe(200);
      await expect(page.getByRole("heading",{level:1})).toBeVisible();
    });
  }
}
