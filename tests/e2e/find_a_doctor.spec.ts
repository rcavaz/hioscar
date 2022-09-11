import { test as base, expect } from '@playwright/test';
import { HomePage } from '../../src/pages/Home/model'
import { selectors } from '../../src/pages/Home/selectors'

type PageFixtures = {
  home: HomePage;
};

const test = base.extend<PageFixtures>({
  home: async ({ page }, use) => {
    const homePage = new HomePage(page, selectors);
    await use(homePage);
  }
});

test.describe('end-to-end tests only', () => {
  test.skip(process.env.E2E !== 'true', 'End-to-End test only');

  test('navigates to Find a Doctor page', async ({ home }) => {
    await home.open();
    await home.findDoctor();
    await expect(home.page).toHaveURL(/.*care-options/);

    await home.page.screenshot({ path: 'screenshot.png' });
  });

  /**
   * TODO:
   * 1. Find a Doctor
   * 2. Find doctors & drugs
   * 3. Search network
   * 4. Select 2022
   *    a. Select employer provider -> Oscar -> California -> Continue -> Covered drugs
   *    b. Select employer provider -> Oscar -> California -> Continue -> In-network hospitals
   */
});
