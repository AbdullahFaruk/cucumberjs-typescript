import { $, ElementFinder, browser, ExpectedConditions } from "protractor";

export class ItemPage {
    public addToCartButton: ElementFinder;
    public modalPageProceedButton: ElementFinder;

    constructor() {
        this.addToCartButton = $("a[title='Add to cart']");
        this.modalPageProceedButton = $("a[title='Proceed to checkout']");
    }

    public async verifyItemToCart(item) {
        const itemToSelect = $(`a[title="${item}"] img`);
        await browser.wait(ExpectedConditions.visibilityOf(itemToSelect), browser.params.timeout.medium,
        "Find item to select");
        await browser.actions().mouseMove(itemToSelect).perform();
        await browser.wait(ExpectedConditions.visibilityOf(this.addToCartButton), browser.params.timeout.medium,
        "Add to cart button is visible");
        await browser.wait(ExpectedConditions.elementToBeClickable(this.addToCartButton), browser.params.timeout.medium,
        "Add to cart button is clickable");
        await this.addToCartButton.click();
        await browser.wait(ExpectedConditions.elementToBeClickable(this.modalPageProceedButton), browser.params.timeout.medium,
        "confirm adding to cart");
        await this.modalPageProceedButton.click();
    }
}
