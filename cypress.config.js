const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    code : false,
    charts: true,
    hml: true,
    reportPageTitle: 'Cypress Automation Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts:false,
  },
  e2e: {
    setupNodeEvents(on, config) {

    },
    specPattern: "cypress/e2e/*.cy.js",
    baseUrl:"https://rahulshettyacademy.com/angularpractice/",
    defaultCommandTimeout : 8000,
    pageLoadTimeout : 10000
  },
  env :{
    //Custom enviromnet variable here
  },
  retries:{
    //tries agian on failure while run
    runMode:1,
    //tries again in gui 
    openMode:0
    
  }
  
});
