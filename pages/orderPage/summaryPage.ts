import { $, ElementFinder, browser, ExpectedConditions } from "protractor";

export class SummaryPage {
    public proceedToCheckoutButton: ElementFinder;

    constructor() {
        this.proceedToCheckoutButton = $("a.standard-checkout");
    }

    public async proceedToCheckout() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.proceedToCheckoutButton), browser.params.timeout.medium,
        "Proceed to checkout button");
        await this.proceedToCheckoutButton.click();
    }
}
