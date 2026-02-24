import { test, expect } from '../src/fixtures/app.fixtures';
import typedData from '../src/data/testData.json';
import { TestData } from '../src/types/data.types';

const testData = typedData as TestData;

test.describe('Saucedemo E2E Test Suite (Authenticated)', () => {
    
   test.beforeEach(async ({ loginPage, inventoryPage }) => {
        await loginPage.navigate();
        await loginPage.login();
        await inventoryPage.verifyPageLoaded();
    });

    test('TC1: Verify successful login routes to inventory page', async ({ inventoryPage }) => {
        await inventoryPage.verifyPageLoaded();
    });
    
    for (const product of testData.products) {
        test(`TC2: Verify adding "${product}" to the cart updates the badge`, async ({ inventoryPage }) => {
            await inventoryPage.addProductToCart(product);
            const count = await inventoryPage.getCartBadgeCount();
            expect(count).toBe('1');
            await inventoryPage.removeProductFromCart(product);
        });
    }

    test('TC3: Verify end-to-end checkout journey (Happy Path)', async ({ inventoryPage, cartPage, checkoutPage }) => {
        const productToBuy = testData.products[0];
        
        await inventoryPage.addProductToCart(productToBuy);
        await inventoryPage.goToCart();
        await cartPage.proceedToCheckout();
        
        await checkoutPage.fillCheckoutInfo(
            testData.checkout.valid.firstName,
            testData.checkout.valid.lastName,
            testData.checkout.valid.postalCode
        );
        await checkoutPage.finishCheckout();
        
        const message = await checkoutPage.getCompleteMessage();
        expect(message).toBe(testData.messages.checkoutComplete);
    });

    test('TC4: Verify checkout validation error for missing first name', async ({ inventoryPage, cartPage, checkoutPage }) => {
        await inventoryPage.addProductToCart(testData.products[0]);
        await inventoryPage.goToCart();
        await cartPage.proceedToCheckout();
        
        await checkoutPage.fillCheckoutInfo(
            testData.checkout.invalid.firstName,
            testData.checkout.invalid.lastName,
            testData.checkout.invalid.postalCode
        );
        
        const errorText = await checkoutPage.getErrorMessage();
        expect(errorText).toBe(testData.checkout.invalid.expectedError);
    });
});

test.describe('Auth and Logout Tests', () => {
    test.use({ storageState: { cookies: [], origins: [] } });

    test('TC5: Verify user can log in and log out successfully', async ({ loginPage, inventoryPage }) => {
        await loginPage.navigate();
        await loginPage.login();
        await inventoryPage.verifyPageLoaded();
        
        await inventoryPage.logout();
        const isVisible = await loginPage.isLoginButtonVisible();
        expect(isVisible).toBeTruthy();
    });
});