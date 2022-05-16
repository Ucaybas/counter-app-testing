# Counter-App-Testing

## CodeceptJS & Playwright

This test suite is built using the CodeceptJS framework, and utilises Playwright as a test runner.

More information can be found here: https://codecept.io/playwright/

## Getting Started

The counter-app can be found on this repo: https://github.com/arnab-datta/counter-app

Run the app locally before running the test suite.

`http://localhost:3000/` is the configured home URL. Please update this in the codecept.conf.js if the app is running on a different port.

### Scripts

```sh
# Install dependencies
yarn dev

# Run tests once
yarn test

# Run tests with steps output
yarn test-steps

# Run interactive shell to build out tests
yarn shell
```
