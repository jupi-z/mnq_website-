import { test, expect } from "@playwright/test";
import { mkdirSync } from "node:fs";

test("Produce desktop light, mobile light and dark visual QA captures",async ({page})=>{
  mkdirSync("test-results/visual",{recursive:true});
  await page.setViewportSize({width:1440,height:900});
  await page.goto("/fr/");
  await expect(page.getByRole("heading",{level:1})).toBeVisible();
  await page.screenshot({path:"test-results/visual/01-home-desktop.png",fullPage:true});
  await page.goto("/fr/activites/");
  await page.screenshot({path:"test-results/visual/02-activities-desktop.png",fullPage:true});
  await page.setViewportSize({width:390,height:844});
  await page.goto("/fr/");
  await page.screenshot({path:"test-results/visual/03-home-mobile.png",fullPage:true});
  await page.getByRole("button",{name:/Activer le mode sombre/}).click();
  await page.screenshot({path:"test-results/visual/04-home-mobile-dark.png",fullPage:true});
});
