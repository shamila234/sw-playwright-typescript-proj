import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    headless: true,
    channel: "chrome",
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  },
  testMatch: ["**.test.ts"],
  retries: 0,
  reporter: [['list', { printSteps: true }],["dot"], ["json", { outputFile: "test-result.json"}]]
};

export default config;