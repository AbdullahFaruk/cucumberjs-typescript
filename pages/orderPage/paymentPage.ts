import { $, element, ElementFinder, browser, ExpectedConditions, by } from "protractor";

export class PaymentPage {
    public payByBankWireButton: ElementFinder;
    public confirmOrderButton: ElementFinder;
    public confirmationMessage: ElementFinder;
    public shippingMessage: ElementFinder;

    constructor() {
        this.payByBankWireButton = $("#HOOK_PAYMENT a.bankwire");
        this.confirmOrderButton = $("#cart_navigation button");
        this.confirmationMessage = element(by.xpath("//strong[text()[contains(.,'Your order on My Store is complete')]]"));
        this.shippingMessage = element(by.xpath("//strong[text()[contains(.,'Your order will be sent as soon as we receive payment. ')]]"));
    }

    public async acceptTermsOfService() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.payByBankWireButton), browser.params.timeout.medium,
        "Pay by bank wire button");
        await this.payByBankWireButton.click();
    }

    public async confirmOrder() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.confirmOrderButton), browser.params.timeout.medium,
        "Confirm order button");
        await this.confirmOrderButton.click();
    }

    public async validateConfirmationMessage() {
        return await browser.wait(ExpectedConditions.visibilityOf(this.confirmationMessage), browser.params.timeout.medium,
        "Confirmation message for purchase");
    }

    public async validateShipping() {
        return await browser.wait(ExpectedConditions.visibilityOf(this.confirmationMessage), browser.params.timeout.medium,
        "Shipping confirmation for purchase");
    }
}
