const { Before, BeforeAll, After, AfterAll, Status, setDefaultTimeout } = require("cucumber");
import { browser } from "protractor";
import { config } from "../config/config";
const stepsTimeout = 15000;

BeforeAll({timeout: 100 * 1000}, async () => {
    setDefaultTimeout(stepsTimeout);
});

// Before hook needs a parameter to work;
Before(async (scenario) => {
    await browser.get(config.baseUrl);
});

After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }
    await browser.manage().deleteAllCookies();
    await browser.executeScript("localStorage.clear();");
    await browser.executeScript("sessionStorage.clear();");
});

AfterAll({timeout: 100 * 1000}, async () => {
    await browser.quit();
});
