

describe('User Can Open Login Page', () => {
  
  it('User can open login page', () => {
    cy.visit("http://demo-app-cypress-automation.test/");
    // cy.get('h4').should('contain', 'Login'); /* bisa juga pake contain jika pake text*/
    cy.get('h4').should('have.text', 'Login');
  });
});