import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';

type AppFixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    loggedInPage: void; 
};

export const test = base.extend<AppFixtures>({
    
    loginPage: async ({ page }, use) => { 
        await use(new LoginPage(page)); 
    },
    inventoryPage: async ({ page }, use) => { 
        await use(new InventoryPage(page)); 
    },
    cartPage: async ({ page }, use) => { 
        await use(new CartPage(page)); 
    },
    checkoutPage: async ({ page }, use) => { 
        await use(new CheckoutPage(page)); 
    },

    loggedInPage: async ({ page, loginPage }, use) => {
        await loginPage.navigate();
        await loginPage.login(process.env.SAUCE_USERNAME!, process.env.SAUCE_PASSWORD!);
        await page.waitForURL(/.*inventory\.html/);
        
        await use(); 
    }
});

export { expect } from '@playwright/test';