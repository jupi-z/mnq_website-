import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  fullyParallel: false,
  workers: 1,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL: "http://127.0.0.1:4173",
    trace: "on-first-retry",
    screenshot: "only-on-failure"
  },
  projects: [{
    name: "chromium",
    use: {...devices["Desktop Chrome"], browserName: "chromium"}
  }],
  webServer: {
    command: process.platform === "win32"
      ? "py -m http.server 4173 --directory out"
      : "python3 -m http.server 4173 --directory out",
    url: "http://127.0.0.1:4173/fr/",
    reuseExistingServer: !process.env.CI,
    timeout: 30_000
  }
});
