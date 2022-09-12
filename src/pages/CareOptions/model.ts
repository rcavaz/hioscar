import { Locator, Page } from "@playwright/test"
import { abortProductAnalyticsRequests } from '../../../lib/routes'
import { BasePage } from "../../../lib/basePage"
import { selectors } from "./selectors";

export class CareOptionsPage extends BasePage {
    locators: { [key in keyof typeof selectors]: Locator };

    readonly url: string = 'https://www.hioscar.com/care-options';

    async open() {
        await abortProductAnalyticsRequests(this.page);
        await this.page.goto(this.url);
        this.buildLocators();
    }

    async findDoctorsAndDrugs() {
        await this.locators.btnFindDoctorsAndDrugs.click();
    }

    async searchNetwork() {
        await this.locators.btnSearchNetwork.click();
    }

    async selectaNetwork() { // -- User Journey --
        const options = {delay: 2000};
        await this.locators.btnFindDoctorsAndDrugs.click(options);
        await this.locators.btnSearchNetwork.click(options);

        await this.locators.dropDownSelectaNetwork.click(options);
        await this.locators.firstOptionCoverageYear.click(options);

        // await this.page.pause();
        await this.locators.dropDownCoverageAccess.click(options);
        await this.locators.secondOptionCoverageAccess.click({delay: 5000});

        await this.locators.dropDownNetworkPartner.click(options);
        await this.locators.firstOptionNetworkPartner.click(options);

        await this.locators.dropDownCoverageArea.click(options);
        await this.locators.firstOptionCoverageArea.click(options);

        await this.locators.btnContinue.click(options);
        await this.page.waitForTimeout(5000);
    }
}

export function CareOptionsPageFactory(page: Page) {
    const model = new CareOptionsPage(page, selectors);
    model.buildLocators();
    return model;
}
