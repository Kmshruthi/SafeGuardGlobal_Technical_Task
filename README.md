```

# About Cypress

```
Cypress is a JavaScript End to End Testing or UI testing framework. It makes end to end testing, debugging, reporting excitingly easy. Cypress explains here https://www.cypress.io/how-it-works the details on different features it holds.

```

# Package.json dependencies 

```
- cypress: Main framework which allows end to end testing.

```
# Initial Setup

```
Assumption: I assume you have installed node.js along with npm in your machine. If not please do so before continuing with the below steps.

Step 1: git clone  the repo

Step 2: open project in editor – preferably visual studio code. Open terminal in visual studio code.

Step 3: cd SafeGuard_Technical_Task. 

Step 4: npm install

```

# Command to run the test

```

- npx cypress open
- Once the Cypress window opens click on E2E testing which will be configured
- Then select the browser, this will pick the browsers installed on your machine
- Then select the feature under the cypress\e2e\features, preferably `PIM.cy.js` to run the test

Also tests can be run on the command line with the below comman
`npx cypress run --record --key 6f458ff2-1fa0-4c42-85a3-5c90c1124957`

This will give the Dashboard view of the test run, with the video and the screenshot captured for the failed tests.

```

# Tests covered are as follows:

PIM:
```
- Login feature
- Assert the mandatory fields on add employee page
- Assert the employee ID to be unique
- Add a employee
- Logout feature
```

TIME:
```
- Login feature
- Select the employee
- Edit the employee Timesheet
- Logout feature
```


# Details on anything further that you would like to achieve given more time, including any trade-offs that you may have made
```
- cypress-cucumber-preprocessor: Allows us to integrate gherkin cucumber syntax for easy business readability. Also, I have used the Page object model which makes it easy to understand.

- cypress-testing-library: Custom commands which supports selecting elements in DOM by just using text. Eliminates CSS selector headaches.
fs-extra: Used for reading JSON file for setting different configuration for different environments.

- Add more tests + assertions
```



