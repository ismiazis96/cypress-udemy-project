

describe('User Can Login to System', () => {

    beforeEach(() => {
        // Arrange
        cy.visit('/');
    });

        // Positif Test Case
    it('User can login with valid username dan password', () => {
        // act
        cy.get('[data-cy="email"]').type('superadmin@gmail.com');
        cy.get('[data-cy="password"]').type('password');
        // Submit the form
        cy.get('[data-cy="submit"]').click();
        cy.wait(3000) // wait for 2 seconds
             
        // assertion
        cy.get('[data-cy="iconProfile"]').should('have.text','Hi, SuperAdmin');
    });

    // negative  test case 1 : User cannot login if email false
    it('User cannot login without email false', () => {
        // action
        cy.get('[data-cy="email"]').type('superadminsalah@gmail.com')
        cy.get('[data-cy="password"]').type('password');
        cy.get('[data-cy="submit"]').click();
        cy.wait(3000) // wait for 2 seconds
        // assertions
        cy.get('.invalid-feedback').should("have.text", "These credentials do not match our records.");
       
    });
    
    // negative  test case 2 : User cannot login if password false
    it('User cannot login if password false', () => {        
        cy.get('[data-cy="email"]').type('superadmin@gmail.com');
        cy.get('input[name="password"]').type('passwordsalah');
        cy.get('[data-cy="submit"]').click();

        // assertion
        cy.get('.invalid-feedback').should('have.text','These credentials do not match our records.');
        
    });

    // negative test case 3 : user cannot login email is empty & password valid
    it('User cannot login without Email is empty & password valid', () => {
        // action
        cy.get('[data-cy="email"]').clear().should('have.value', '');
        cy.get('[data-cy="password"]').type('password');

        cy.get('[data-cy="submit"]').click();
        // assertion
        cy.url().should('include', 'http://demo-app-cypress-automation.test/');
    });
    // negatif test case 4 : user cannot login email true & password empty
    it('User cannot login email true & password empty', () => {
        // action
        cy.get('[data-cy="email"]').type('superadmin@gmail.com');
        cy.get('[data-cy="password"]').clear().should('have.value', '');

        cy.get('[data-cy="submit"]').click();
        // assertion
        cy.url().should('include', 'http://demo-app-cypress-automation.test/');
    });
    // negatif test case 5 : user cannot login email & password empty
    it('User cannot login email & password empty', () => {
        // action
        cy.get('[data-cy="email"]').clear().should('have.value', '');
        cy.get('[data-cy="password"]').clear().should('have.value', '');

        cy.get('[data-cy="submit"]').click();
        // assertion
        cy.url().should('include', 'http://demo-app-cypress-automation.test/');
    });

    // skenario logout aplikasi
    it('User can logout system', () => {
        /* ==== Generated with Cypress Studio ==== */
        
        cy.get('[data-cy="email"]').type('superadmin@gmail.com');
        cy.get('[data-cy="password"]').type('password');
        cy.get('[data-cy="submit"]').click();
        cy.get('[data-cy="iconProfile"]').click();
        cy.get('[data-cy="logout-btn"]').click();
        cy.get('h4').should("contain", "Login");
        /* ==== End Cypress Studio ==== */
    })
    

});