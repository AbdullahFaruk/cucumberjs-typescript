import { $, ElementFinder, browser } from "protractor";

export class HeaderPage {
    public searchTextBox: ElementFinder;
    public searchButton: ElementFinder;

    constructor() {
        this.searchTextBox = $("#search_query_top");
        this.searchButton = $("button.button-search");
    }

    public async search(item) {
        await this.searchTextBox.sendKeys(item);
        await this.searchButton.click();
    }
}
