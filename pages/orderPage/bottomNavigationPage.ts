import { $, ElementFinder, browser, ExpectedConditions } from "protractor";

export class BottomNavigationPage {
    public proceedToCheckoutButton: ElementFinder;
    public termsOfServiceCheckbox: ElementFinder;


    constructor() {
        this.proceedToCheckoutButton = $("a~button[type=submit]");
    }

    public async proceedToCheckout() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.proceedToCheckoutButton), browser.params.timeout.medium,
        "Proceed to checkout button");
        await this.proceedToCheckoutButton.click();
    }
}
