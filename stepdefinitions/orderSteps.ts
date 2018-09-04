import { SummaryPage } from "../pages/orderPage/summaryPage";
import { SigninPage } from "../pages/orderPage/signinPage";
import { BottomNavigationPage } from "../pages/orderPage/bottomNavigationPage";
import { ShippingPage } from "../pages/orderPage/shippingPage";
import { PaymentPage } from "../pages/orderPage/paymentPage";

const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const summaryPage = new SummaryPage();
const signinPage = new SigninPage();
const bottomNavigationPage = new BottomNavigationPage();
const shippingPage = new ShippingPage();
const paymentPage = new PaymentPage();



When(/^I follow the order process to checkout filling the shipping data$/, async () => {
    await summaryPage.proceedToCheckout();
    await signinPage.login()
    await bottomNavigationPage.proceedToCheckout();
    await shippingPage.acceptTermsOfService();
    await bottomNavigationPage.proceedToCheckout();
    await paymentPage.acceptTermsOfService();
    await paymentPage.confirmOrder();
});

Then(/^I see a success confirmation message$/, async () => {
    await expect(paymentPage.validateConfirmationMessage()).to.eventually.be.true;
});

Then(/^I see a shipping confirmation message$/, async () => {
    await expect(paymentPage.validateShipping()).to.eventually.be.true;
});