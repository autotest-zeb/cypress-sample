# Zebrunner Cypress reporting agent sample

## sample-cypress

Your guide to run the first Cypress test with reporting to Zebrunner.

## Prerequisites

Before configuring Zebrunner Cypress reporting agent, you need to create a free Zebrunner workspace at https://zebrunner.com/

## Configuration

### _Step 1: Basic project setup_

Clone the Zebrunner's [samples](https://github.com/autotest-zeb/cypress-sample.git) repository

```
git clone https://github.com/autotest-zeb/cypress-sample.git
```

### _Step 2: Configure credentials and reporting_

In Zebrunner:

- Navigate to "Account and profile" section by clicking on the User icon from the top right side;
- Click on "API Access" tab;
- Press "Token" button, create a token and copy it before closing the dialog (you won't be able to see the token later).

Define launch configuration (override defaults if needed) and copy content below to the list of reporters to the `cypress.config.js` file

#### **`cypress.config.js`**

```js
"reporterOptions": {
       "reportingServerHostname": "https://<workspace>.zebrunner.com/",
       "reportingServerAccessToken": "<accessToken>",
       "reportingProjectKey": "<project_key>",
       "reportingRunEnvironment": "DEMO",
       "reportingRunBuild": 'cypress.12',
       "reportingRunDisplayName": 'Cypress v12',
   }
```

### _Step 3: Execute the tests_

Please run the following command in the terminal

to launch basic tests:

```
npm install && npx cypress run --headed --spec cypress/e2e/basic.cy.js
```

to launch tests to check abort:

```
npm install && npx cypress run --headed --spec cypress/e2e/search.cy.js
```

to launch tests to check the execution of tests in threads:

```
npm install && npx cypress run --headed --spec cypress/e2e/for_threads/*.cy.js
```

### _Step 4: View test results_

Congratulations! You have just completed reporting setup for a test project!
Now you can go to the Launches page to see the results.

Note: Video will be available only for tests launched via launcher!

To learn more about advanced reporting capabilities, test cases mapping and more please go to the [documentation](https://zebrunner.com/documentation/reporting/cypress/).
