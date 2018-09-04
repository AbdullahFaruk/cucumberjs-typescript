import { browser } from "protractor";
import { HeaderPage } from "../pages/headerPage";
const { Given, When } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const headerPage = new HeaderPage();

Given(/^I am on the home page$/, async () => {
    await expect(browser.getTitle()).to.eventually.equal("My Store");
});

When(/^I type "(.*?)" on the searchBox$/, async (item) => {
    await headerPage.search(item);
});