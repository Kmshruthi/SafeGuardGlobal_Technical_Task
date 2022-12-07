// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('LoginWithPageSession', (uName, pwd) => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .click({
            force: true
        })
        .type(uName).should('have.value', 'Admin')
    cy
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')

        .type(pwd)
    cy.get('.oxd-button').should('have.text', ' Login ').click({
        force: true
    });

    cy.get('.oxd-topbar-header-title').should('have.text', 'Dashboard');
    
})

Cypress.Commands.add('EmployeeSearch', (employeeName) => {
    cy.get('.oxd-autocomplete-text-input > input').
        // should('have.value', 'Type for hints...').
        type(employeeName).should("have.value", employeeName);
    cy.get('.oxd-autocomplete-option').contains(employeeName).click()
    cy.get('.oxd-form-actions > .oxd-button').should('have.text', ' View ').click({ force: true })
})

Cypress.Commands.add('SideMenu', (locator,value, headerValue, secondHeader) => {
    cy.get(':nth-child(' +locator + ') > .oxd-main-menu-item > .oxd-text').should('have.text', value).click({ force: true });
    cy.get('.oxd-topbar-header-breadcrumb').should('have.text', headerValue)
    cy.contains(secondHeader).should("be.visible")
})

Cypress.Commands.add('EnterFieldValue', (selector, value)=>{
    cy.get(selector).clear().
    type(value).should("have.value", value);
})

Cypress.Commands.add("SaveButton", () => {
    cy.get('.oxd-button--secondary').should('have.text', " Save ").click()
})

Cypress.Commands.add("SubmitButton", () => {
    cy.get('.oxd-button--secondary').should('have.text', " Submit ").click()
})

Cypress.Commands.add("ClickOnButton", (selector, value) => {
    cy.get(selector).should('have.text', " " + value + " ").click()
})

Cypress.Commands.add("Logout",() => {
    cy.get('.oxd-userdropdown-tab').click()

    cy.get(':nth-child(4) > .oxd-userdropdown-link').should('have.text', 'Logout').click()
    cy.get('.oxd-button').should('have.text', ' Login ')
})