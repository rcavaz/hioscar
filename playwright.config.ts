import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();
if (process.env.E2E === 'true' && process.env.INTEGRATION === 'true') {
  console.error("Mutually exclusive: Between the INTEGRATION and E2E environment variables, only one can be true");
  process.exit(1);
}

enum ScreenshotOptions {
  ON_FAILURE = 'only-on-failure',
  OFF = 'off',
  ON = 'on'
}
const globalProjectSettings = {
  screenshot: ScreenshotOptions.ON_FAILURE,
};

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    actionTimeout: 0,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        ...globalProjectSettings,
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        ...globalProjectSettings,
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        ...globalProjectSettings,
      },
    },
  ],
  outputDir: 'test-results/',
};

export default config;
