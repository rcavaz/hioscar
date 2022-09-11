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

test('navigates to Find a Doctor page', async ({ home }) => {

  test.skip(process.env.E2E !== 'true', 'End-to-End test only');

  await home.open();
  await home.findDoctor();
  await expect(home.page).toHaveURL(/.*care-options/);
});
