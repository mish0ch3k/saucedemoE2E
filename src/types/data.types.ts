export interface CheckoutUser {
    firstName: string;
    lastName: string;
    postalCode: string;
    expectedError?: string;
}

export interface CheckoutData {
    valid: CheckoutUser;
    invalid: CheckoutUser;
}

export interface TestData {
    baseUrl: string;
    products: string[];
    checkout: CheckoutData;
    messages: {
        checkoutComplete: string;
    };
}