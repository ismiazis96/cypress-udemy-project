

describe('User Can Login to System', () => {

    beforeEach(() => {
        // Arrange
        cy.visit('http://demo-app-cypress-automation.test/');
    });

        // Positif Test Case
    it.only('User can login with valid username dan password', () => {
        // act
        cy.get('[data-test="email"]').type('superadmin@gmail.com');
        cy.get('[data-test="password"]').type('password');
        // Submit the form
        cy.get('[data-test="submit"]').click();
             
        // assertion
        cy.get('[data-test="username"]').should('have.text','Hi, SuperAdmin');
    });

    // negative  test case 1 : User cannot login if email false
    it('User cannot login without email false', () => {
        // action
        cy.get('input[name="email"]').type('superadminsalah@gmail.com')
        cy.get('input[name="password"]').type('password');
        cy.get(".btn").click();
        // assertions
        cy.get('.invalid-feedback').should("have.text", "These credentials do not match our records.");
       
    });
    
    // negative  test case 2 : User cannot login if password false
    it('User cannot login if password false', () => {        
        cy.get('input[name="email"]').type('superadmin@gmail.com');
        cy.get('input[name="password"]').type('passwordsalah');
        cy.get(".btn").click();

        // assertion
        cy.get('.invalid-feedback').should('have.text','These credentials do not match our records.');
        
    });

    // negative test case 3 : user cannot login email is empty & password valid
    it('User cannot login without Email is empty & password valid', () => {
        // action
        cy.get('input[name="email"]').clear().should('have.value', '');
        cy.get('input[name="password"]').type('password');

        cy.get(".btn").click();
        // assertion
        cy.url().should('include', 'http://demo-app-cypress-automation.test/');
    });
    // negatif test case 4 : user cannot login email true & password empty
    it('User cannot login email true & password empty', () => {
        // action
        cy.get('input[name="email"]').type('superadmin@gmail.com');
        cy.get('input[name="password"]').clear().should('have.value', '');

        cy.get(".btn").click();
        // assertion
        cy.url().should('include', 'http://demo-app-cypress-automation.test/');
    });
    // negatif test case 5 : user cannot login email & password empty
    it('User cannot login email & password empty', () => {
        // action
        cy.get('input[name="email"]').clear().should('have.value', '');
        cy.get('input[name="password"]').clear().should('have.value', '');

        cy.get(".btn").click();
        // assertion
        cy.url().should('include', 'http://demo-app-cypress-automation.test/');
    });

    // skenario logout
    it('User can logout system', () => {
        /* ==== Generated with Cypress Studio ==== */
        
        cy.get('[data-test="email"]').type('superadmin@gmail.com');
        cy.get('[data-test="password"]').type('password');
        cy.get('[data-test="submit"]').click();
        cy.get('[data-test="username"]').click();
        cy.get('[data-test="logout-btn"]').click();
        cy.get('h4').should("contain", "Login");
        /* ==== End Cypress Studio ==== */
    })
    

});