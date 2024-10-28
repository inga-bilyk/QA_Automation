const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 20000, // Added this line
  
  projectId: "75gyzc",
  reporter: 'cypress-mochawesome-reporter',
  
  env: {
    canLoginUrl:  "https://automation.owlpractice-dev.com/calendar",//"https://ingatestpractice.owlpractice-dev.com/",
    usSignUpUrl: "https://owlpractice.com/signup/",
    
  },
  
  config: 
  {
    "chromeWebSecurity": false
  },
  retries: {
    runMode: 1,
    
    },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/smoke/*.js',
    //specPattern: 'cypress/integration',
    testIsolation: false
    
  },

  
});
