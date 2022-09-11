import { Locator, Page } from '@playwright/test';

type SelectorsMap = {
    [x: string]: string;
};

type LocatorsMap = {
    [x: string]: Locator;
};

export abstract class BasePage {
    readonly page: Page;
    abstract readonly url: string;

    private selectors: SelectorsMap;
    abstract locators: LocatorsMap;

    constructor(page: Page, selectors: SelectorsMap) {
        this.page = page;
        this.selectors = selectors;
    }

    // Do not forget to call buildLocators() within your implementation of open()
    abstract open(): Promise<void>;

    protected buildLocators(): void {
        this.locators = Object.keys(this.selectors)
        .map((k) => ({key: k, value: this.page.locator(this.selectors[k])}))
        .reduce((acc, curr) => {
            acc[curr.key] = curr.value
            return acc
        },{});
    }
}
