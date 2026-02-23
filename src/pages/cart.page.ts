import { Page, test } from '@playwright/test';
import { BasePage } from './common';

export class CartPage extends BasePage {
    private checkoutButton = this.page.getByTestId('checkout');

    constructor(page: Page) { super(page); }

    async proceedToCheckout() {
            await this.checkoutButton.click();
    }
}