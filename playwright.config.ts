import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html'], ['list']],
  use: {
    trace: 'on-first-retry',
    baseURL: 'https://www.saucedemo.com',
    testIdAttribute: 'data-test',
  },
  projects: [
    { 
      name: 'setup', 
      testMatch: /.*\.setup\.ts/ 
    },
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        //storageState: 'playwright/.auth/user.json', 
      },
      dependencies: ['setup'],
    },
  ],
});