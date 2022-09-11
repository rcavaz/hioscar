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

test.describe('integration tests only', () => {
  test.skip(process.env.INTEGRATION !== 'true', 'Integration tests only');

  test('Find a Doctor button redirects to /care-options', async ({ home }) => {
    test.fixme(); // TODO: route calls to stay on page, then verify correct page was requested
    await home.open();
    await home.findDoctor();
    await expect(home.page).toHaveURL(/.*care-options/);
  });
});
