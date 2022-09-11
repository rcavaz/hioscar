import { Locator } from "@playwright/test"
import { BasePage } from "../../../lib/basePage"
import { selectors } from "./selectors";

export class HomePage extends BasePage {
    locators: { [key in keyof typeof selectors]: Locator };

    readonly url: string = 'https://www.hioscar.com';

    async open() {
        await this.page.goto(this.url);
        this.buildLocators();
    }

    async findDoctor() {
        await this.locators.btnFindDoctor.click();
    }
}
