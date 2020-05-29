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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('clickLink', (label) =>
        {cy.get('a').contains(label).click()})

Cypress.Commands.add('clickElement', (locator) => 
        {cy.get(locator).click()})

Cypress.Commands.add('enterText', (fieldName,text) =>
        {cy.get(fieldName).type(text)})

Cypress.Commands.add('getErrorMessage', () =>
        {cy.get('.alert-danger')})

Cypress.Commands.add('getElement', (locator) =>
        {cy.get(locator)})

Cypress.Commands.add('assertErrorMessage', (expectedError) =>
        {cy.get('.alert-danger').should('contain', expectedError) })

Cypress.Commands.add('assertTextboxValue', (locator, text) => 
        {cy.get(locator).should('have.value', text) })

Cypress.Commands.add('assertContainsText', (locator, text) => 
        {cy.get(locator).should('contain', text) })