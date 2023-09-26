const { defineConfig } = require('cypress');
const zbrPlugin = require('@zebrunner/javascript-agent-cypress/lib/plugin');

module.exports = defineConfig({
  video: true,
  chromeWebSecurity: false,
  reporter: '@zebrunner/javascript-agent-cypress',
  reporterOptions: {
    reportingServerHostname: 'https://<workspace>.zebrunner.com/',
    reportingServerAccessToken: '<accessToken>',
    reportingProjectKey: '<project_key>',
    reportingRunEnvironment: 'DEMO',
    reportingRunBuild: 'cypress.12',
    reportingRunDisplayName: 'Cypress v12',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      zbrPlugin(on, config);
      return require('./cypress/plugins/index.js')(on, config);
    },
  },
});
