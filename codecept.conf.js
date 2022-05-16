exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost:3000/',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/homePage.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'test-project'
}
