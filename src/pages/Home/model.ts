import { Locator, Page } from "@playwright/test"
import { BasePage } from "../../../lib/basePage"
import { abortProductAnalyticsRequests } from "../../../lib/routes";
import { selectors } from "./selectors";

export class HomePage extends BasePage {
    locators: { [key in keyof typeof selectors]: Locator };

    readonly url: string = 'https://www.hioscar.com';

    async open(state?: any) {
        // if (state) {
        //     // Inject state here ...
        // }
        await abortProductAnalyticsRequests(this.page);
        await this.page.goto(this.url);
        this.buildLocators();
    }

    async findDoctor() {
        await this.locators.btnFindDoctor.click();
    }
}

export function HomePageFactory(page: Page) {
    const model = new HomePage(page, selectors);
    model.buildLocators();
    return model;
}
