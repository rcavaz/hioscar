import { test, expect } from '@playwright/test';
import { CareOptionsPageFactory } from '../../src/pages/CareOptions/model';
import { HomePageFactory } from '../../src/pages/Home/model'

test.describe('end-to-end tests only', () => {
  test.skip(process.env.E2E !== 'true', 'End-to-End test only');

  test('navigates to Find a Doctor page', async ({ page }) => {
    const home = HomePageFactory(page);
    await home.open();
    await home.findDoctor();
    const care = CareOptionsPageFactory(page);
    await care.selectaNetwork();

    await expect(home.page).toHaveURL('https://www.hioscar.com/search/?networkId=006&year=2022');
  });
});
