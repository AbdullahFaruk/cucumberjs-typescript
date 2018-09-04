import { $, ElementFinder, browser, ExpectedConditions } from "protractor";

export class ShippingPage {
    public proceedToCheckoutButton: ElementFinder;
    public termsOfServiceCheckbox: ElementFinder;


    constructor() {
        this.termsOfServiceCheckbox = $("label[for='cgv']");
    }

    public async acceptTermsOfService() {
        await browser.wait(ExpectedConditions.visibilityOf(this.termsOfServiceCheckbox), browser.params.timeout.medium,
        "Terms of service checkbox");
        await this.termsOfServiceCheckbox.click();
    }
}
