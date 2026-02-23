# 📝 Test Cases: SauceDemo E2E

## Preconditions (for all tests except TC5)
- Base URL opened: `https://www.saucedemo.com/`
- User has valid credentials (`standard_user` / `secret_sauce`).

---

### TC1: Verify successful login routes to inventory page
**Objective:** Verify that a user with valid credentials can successfully log in to the system.

**Steps:**
1. Open the login page.
2. Enter a valid **Username**.
3. Enter a valid **Password**.
4. Click the **Login** button.

**Expected Result:**
- The user successfully logs in and is redirected to the inventory page (URL contains `inventory.html`).

---

### TC2: Verify cart badge updates when an item is added
**Objective:** Ensure that adding an item to the cart correctly updates the badge counter on the cart icon.  
*(Note: this test is executed iteratively for different products).*

**Preconditions:** User is logged in and is on the `inventory.html` page.

**Steps:**
1. Find a specific product card (e.g., "Sauce Labs Backpack").
2. Click the **Add to cart** button on this product card.

**Expected Result:**
- A badge with the number `1` appears on the cart icon in the top right corner.

---

### TC3: Verify end-to-end checkout journey (Happy Path)
**Objective:** Test the full order process from adding a product to the confirmation message.

**Preconditions:** User is logged in and is on the `inventory.html` page.

**Steps:**
1. Click **Add to cart** next to any product.
2. Click the cart icon in the top right corner.
3. On the cart page, click **Checkout**.
4. On the *Checkout: Your Information* page, fill in:
   - First Name
   - Last Name
   - Zip/Postal Code
5. Click **Continue**.
6. On the *Checkout: Overview* page, verify the order details and click **Finish**.

**Expected Result:**
- The order is successfully completed, and the message **"Thank you for your order!"** is displayed.

---

### TC4: Verify validation error during checkout (missing first name)
**Objective:** Confirm the appearance of a validation error if a required field is left blank during checkout (negative scenario).

**Preconditions:** User is logged in, has added a product to the cart, and is on the *Checkout: Your Information* step.

**Steps:**
1. Leave the **First Name** field empty.
2. Fill in the **Last Name** and **Zip/Postal Code** fields.
3. Click **Continue**.

**Expected Result:**
- Transition to the next step does not occur. An error message appears:  
  **Error: First Name is required.**

---

### TC5: Verify successful login and logout
**Objective:** Ensure that an authenticated user can safely end the session and log out of the account.

**Preconditions:** Standard unauthenticated page `https://www.saucedemo.com/` is opened.  
Cache and cookies are cleared.

**Steps:**
1. Log in using valid credentials.
2. After navigating to the inventory page, click the **Burger Menu** (three horizontal lines) in the top left corner.
3. In the menu that appears, click **Logout**.

**Expected Result:**
- The user logs out of the system and is redirected back to the login page.  
  The **Login** button becomes visible again.