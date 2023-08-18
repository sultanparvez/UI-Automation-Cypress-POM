# UI Automation Cypress

This automation project utilized page object model. Here, I have Separated tests based on pages. Also separted page objects based 
on pages in order to  abstract the interactions with the UI elements away from the test cases. 


cypress/
├── fixtures/
│ └── data.json
├── e2e/
│ ├── pageObjects/
│ │ ├── page1.js
│ │ ├── page2.js
│ ├── tests/
│ │ ├── testHomePage.js
│ │ ├── testLoginPage.js
│ │ └── ...
│ ├── index.cy.js
├── support/
│ ├── commands.js
│ └── ...
└── screenshots/
└── videos/
.github/
└── workflows/
├── scheduled_tests.yml
└── ...

Here, I encapsulated complex interactions and verifications within the page objects. 
this ensures code reusability and maintains a clear separation of concerns.



To install the dependencies on your pc:

```node.js
npm i
```
To run the project:

```node.js
npm test
```

## Included
* cypress,
* cypress-mochawesome-reporter

