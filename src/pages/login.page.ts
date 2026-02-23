import { Page, test } from '@playwright/test';
import { BasePage } from './common';

export class LoginPage extends BasePage {
    private usernameInput = this.page.getByTestId('username');
    private passwordInput = this.page.getByTestId('password');
    private loginButton = this.page.getByTestId('login-button');

    constructor(page: Page) { super(page); }

    async login(username = process.env.SAUCE_USERNAME!, password = process.env.SAUCE_PASSWORD!) {
            await this.usernameInput.fill(username);
            await this.passwordInput.fill(password);
            await this.loginButton.click();
    }

    async isLoginButtonVisible() {
            return await this.loginButton.isVisible();
    }
}