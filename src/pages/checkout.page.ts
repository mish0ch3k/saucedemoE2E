import { Page, test } from '@playwright/test';
import { BasePage } from './common';

export class CheckoutPage extends BasePage {
    private firstNameInput = this.page.getByTestId('firstName');
    private lastNameInput = this.page.getByTestId('lastName');
    private postalCodeInput = this.page.getByTestId('postalCode');
    private continueButton = this.page.getByTestId('continue');
    private finishButton = this.page.getByTestId('finish');
    private completeHeader = this.page.getByTestId('complete-header');
    
    private errorMessage = this.page.getByTestId('error');

    constructor(page: Page) { super(page); }

    async fillCheckoutInfo(firstName: string, lastName: string, zip: string) {
            await this.firstNameInput.fill(firstName);
            await this.lastNameInput.fill(lastName);
            await this.postalCodeInput.fill(zip);
            await this.continueButton.click();
    }

    async finishCheckout() {
            await this.finishButton.click();
    }

    async getCompleteMessage() {
            return await this.completeHeader.innerText();
    }

    async getErrorMessage() {
            return await this.errorMessage.innerText();
    }
}