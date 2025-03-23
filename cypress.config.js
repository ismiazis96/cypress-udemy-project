const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //defaultCommandTimeout: 5000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotOnRunFailure: true,
  video: false, // fungsi buat rekam saat running
  watchForFileChanges: false, // fungsi buat otomatis jalan saat di save
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  experimentalStudio: true,  //ini agar bisa di jalankan record secara otomatis code di buat.

  e2e: {
    baseUrl: 'http://demo-app-cypress-automation.test',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
