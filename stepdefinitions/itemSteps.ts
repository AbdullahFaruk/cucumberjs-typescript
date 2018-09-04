import { ItemPage } from "../pages/itemPage";
const { When } = require("cucumber");

const itemPage = new ItemPage();

When(/^I add "(.*?)" to the cart$/, async (item) => {
    await itemPage.verifyItemToCart(item);
});
