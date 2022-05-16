exports.config = {
  tests: './tests/*Test.js',
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
    HomePage: './pages/HomePage.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'counter-app-testing'
}
