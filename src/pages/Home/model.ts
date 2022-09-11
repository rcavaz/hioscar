import { Locator, Page } from "@playwright/test"
import { BasePage } from "../../../lib/basePage"
import { selectors } from "./selectors";

export class HomePage extends BasePage {
    locators: { [key in keyof typeof selectors]: Locator };

    readonly url: string = 'https://www.hioscar.com';

    async open() {
        await abortProductAnalyticsRequests(this.page);
        await this.page.goto(this.url);
        this.buildLocators();
    }

    async findDoctor() {
        await this.locators.btnFindDoctor.click();
    }
}

async function abortProductAnalyticsRequests(page: Page) {
    await page.route('https://product-analytics.hioscar.com/v1/t', route => {
        const request = route.request();
        return route.abort();
    })
}
