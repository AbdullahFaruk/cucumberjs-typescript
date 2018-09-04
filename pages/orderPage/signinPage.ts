import { $, ElementFinder, browser, ExpectedConditions } from "protractor";

export class SigninPage {
    public inputEmail: ElementFinder;
    public inputPassword: ElementFinder;
    public submitLoginButton: ElementFinder;


    constructor() {
        this.inputEmail = $("input#email");
        this.inputPassword = $("input#passwd");
        this.submitLoginButton = $("button#SubmitLogin");
    }

    public async login() {
        const defaultUser = {
            'email': 'info.perromordedor@gmail.com',
            'password': 'alphatest'
        }
        await this.inputEmail.sendKeys(defaultUser.email);
        await this.inputPassword.sendKeys(defaultUser.password);
        await this.submitLoginButton.click();
    }
}
