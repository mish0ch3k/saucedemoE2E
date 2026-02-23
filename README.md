# SauceDemo E2E Automation

This repository contains an automated end-to-end testing framework for [SauceDemo](https://www.saucedemo.com/), built with Playwright and TypeScript.

📊 **[View Latest Test Report](https://mish0ch3k.github.io/saucedemoE2E/)**
## Project Overview
The framework is designed to verify core web functionalities and implements the following patterns:
- **Page Object Model (POM)** and **Playwright Fixtures** for component reusability.
- **Global Authentication Setup** (`storageState`) to optimize execution time.
- **Data-Driven Testing (DDT)** via structured JSON files.
- **CI/CD Integration** via GitHub Actions with automated HTML report deployment.

## Getting Started

### Prerequisites
- Node.js (v16+)

### Installation
1. Clone the repository and install dependencies:
   ```bash
   git clone https://github.com/mish0ch3k/saucedemoE2E.git
   cd saucedemoE2E
   npm ci
   ```
2. Install Playwright browsers:
   ```bash
   npx playwright install --with-deps
   ```

### Environment Variables
   Create a .env file in the root directory of the project and add your
   test credentials:
   ```bash
   SAUCE_USERNAME=standard_user
   SAUCE_PASSWORD=secret_sauce
   ```

### Running the Tests
   ```bash
   npx playwright test
   ```
### Project Structure
```src/pages/``` - Page Object Model classes.

```src/fixtures/``` - Custom fixtures for automatic Page Object instantiation.

```src/data/``` - Static test data and TypeScript interfaces.

```tests/``` - E2E tests (e2e.spec.ts) and global authentication setup (auth.setup.ts).

```.github/workflows/``` - GitHub Actions CI/CD configuration.