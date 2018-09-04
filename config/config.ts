import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {
    params: {
        timeout: {
            small: 2000,
            medium: 6000,
            large: 15000
        }
    },

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "http://automationpractice.com",

    capabilities: {
        browserName: "chrome",
    },

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../../features/*.feature",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js"],
        strict: true,
        tags: "",
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },
};
