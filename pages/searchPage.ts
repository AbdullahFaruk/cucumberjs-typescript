import { $, ElementFinder, browser, ExpectedConditions } from "protractor";

export class SearchPage {
    public firstItem: ElementFinder;

    constructor() {
        this.firstItem = $("#best-sellers_block_right li:nth-child(1)>a");
    }

    public async selectFirstItem() {
        await browser.wait(ExpectedConditions.visibilityOf(this.firstItem), browser.params.timeout.medium,
        "first cart element");
        await this.firstItem.click();
    }
}
