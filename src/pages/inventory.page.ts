import { Page, test, expect } from '@playwright/test';
import { BasePage } from './common';

export class InventoryPage extends BasePage {
    private cartBadge = this.page.locator('.shopping_cart_badge');
    private cartLink = this.page.locator('.shopping_cart_link');
    private burgerMenu = this.page.getByRole('button', { name: 'Open Menu' });
    private logoutLink = this.page.getByTestId('logout-sidebar-link');

    constructor(page: Page) { super(page); }

    async verifyPageLoaded() {
            await expect(this.page).toHaveURL(/.*inventory.html/);
    }

    async addProductToCart(productName: string) {
            const formattedName = productName.toLowerCase().replace(/ /g, '-');
            await this.page.getByTestId(`add-to-cart-${formattedName}`).click();
    }

    async removeProductFromCart(productName: string) {
            const formattedName = productName.toLowerCase().replace(/ /g, '-');
            await this.page.getByTestId(`remove-${formattedName}`).click();
    }

    async getCartBadgeCount() {
            if (await this.cartBadge.isVisible()) {
                return await this.cartBadge.innerText();
            }
            return '0';
    }

    async goToCart() {
            await this.cartLink.click();
    }

    async logout() {
            await this.burgerMenu.click();
            await this.logoutLink.click();
    }
}