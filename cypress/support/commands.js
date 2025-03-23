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
// Command custom

/** Logic Login*/
Cypress.Commands.add('login', (email, password) => {
    cy.get('[data-cy="email"]').type(email);
    cy.get('[data-cy="password"]').type(password);
    cy.get('[data-cy="submit"]').click();
  });
  
/* Login add user baru*/
  Cypress.Commands.add('createUser', (user) => {
    cy.get('#name').type(user.name);
    cy.get('#email').type(user.email);
    cy.get('#password').type(user.password);
    cy.get('[data-cy="btn-submit-create"]').click();
  });
  