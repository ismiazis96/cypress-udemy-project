describe('Menu Users', () => {

    beforeEach(() => {
      cy.visit('/');
      cy.get('[data-cy="email"]').type('superadmin@gmail.com');
      cy.get('[data-cy="password"]').type('password');
      cy.get('[data-cy="submit"]').click();
      cy.get('[data-cy="iconProfile"]').should('have.text','Hi, SuperAdmin');
      cy.visit('user-management/user');
      cy.contains('Create New User').click();
    });
    
    // skenario positif
    it.skip('update user kolom name is valid', () => {
      cy.visit('user-management/user/34/edit');
      cy.get('[data-cy="name"]').clear().type('Test User Name');
    //   cy.get('#email').type('datatesting1@gmail.com');
      cy.get('[data-cy="submitEdit"]').click();
      cy.get('.alert-success').should('contain', 'User Berhasil Diupdate');
    });

    // skenario positif
    it('update user kolom email is valid', () => {
        cy.visit('user-management/user/34/edit');
        cy.get('[data-cy="email"]').clear().type('admintesting3@gmail.com');
        cy.get('[data-cy="submitEdit"]').click();
        cy.get('.alert-success').should('contain', 'User Berhasil Diupdate');
        cy.get('table').contains('td', 'Test User Name').should('be.visible');
    });

    // skenario negatif
    it('update user kolom name and email is empty', () => {
        cy.visit('user-management/user/34/edit');
        cy.get('[data-cy="name"]').clear();
        cy.get('[data-cy="email"]').clear();
        cy.get('[data-cy="submitEdit"]').click();
        cy.wait(2000);
        cy.get('.invalid-feedback').should('contain', 'The name field is required.');
        // cy.get('table').contains('td', 'Test User Name').should('be.visible');
    });

    it('update user kolom name is empty', () => {
        cy.visit('user-management/user/34/edit');
        cy.get('[data-cy="name"]').clear();
        cy.get('[data-cy="submitEdit"]').click();
        cy.wait(2000);
        cy.get('.invalid-feedback').should('contain', 'The name field is required.');
        // cy.get('table').contains('td', 'Test User Name').should('be.visible');
    });

    it('update user kolom email is empty', () => {
        cy.visit('user-management/user/34/edit');
        cy.get('[data-cy="email"]').clear();
        cy.get('[data-cy="submitEdit"]').click();
        cy.wait(2000);
        cy.get('.invalid-feedback').should('contain', 'The name field is required.');
        // cy.get('table').contains('td', 'Test User Name').should('be.visible');
    });

    it('update user kolom email invalid format', () => {
        cy.visit('user-management/user/34/edit');
        cy.get('[data-cy="name"]').clear().type('Testing ulang');
        cy.get('[data-cy="email"]').clear().type('testingemail'); // invalid format
        cy.get('[data-cy="submitEdit"]').click();
        cy.wait(2000);
        cy.get('.invalid-feedback').should('contain', 'The email must be a valid email address.');
    });



});