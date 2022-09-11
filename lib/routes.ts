import { Page } from "@playwright/test";

export async function abortProductAnalyticsRequests(page: Page) {
    await page.route('https://product-analytics.hioscar.com/v1/t', route => {
        const request = route.request();
        return route.abort();
    })
}
