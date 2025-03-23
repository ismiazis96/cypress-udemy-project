describe('Menu Users', () => {

    beforeEach(() => {
      cy.visit('/');
      cy.get('[data-cy="email"]').type('superadmin@gmail.com');
      cy.get('[data-cy="password"]').type('password');
      cy.get('[data-cy="submit"]').click();
      cy.get('[data-cy="iconProfile"]').should('have.text','Hi, SuperAdmin');
      cy.visit('user-management/user');
    //   cy.wait(2000);
    //   cy.contains('Create New User').click();
    });
    
    // skenario positif
    it.skip('User can delete data is valid', () => {
      //cy.get('table tbody tr').last().find('.confirm-btn').click();
      cy.get('table tbody tr').contains('td', 'ismitech4').parent().find('.confirm-delete').click();
      cy.wait(2000);
      cy.get(':nth-child(2) > .swal-button').click();
      cy.get('.alert-success').should('contain', 'User Deleted Successfully');
    });

    it('User can delete data and cancel delete data', () => {
        //cy.get('table tbody tr').last().find('.confirm-btn').click();
        cy.get('table tbody tr').contains('td', 'ismitech3').parent().find('.confirm-delete').click();
        cy.wait(2000);
        cy.get(':nth-child(1) > .swal-button').click();
        cy.get('h1').should('contain', 'User List');
      });

});


 /* ==== Generated with Cypress Studio ==== */
    //   cy.get(':nth-child(4) > .text-right > .d-flex > .ml-2 > .confirm-delete').click();
    //   cy.get(':nth-child(2) > .swal-button').click();
    //   cy.wait(2000);
    //   cy.get('.alert-success').should('have.text', 'User Deleted Successfully');
      /* ==== End Cypress Studio ==== */

    //   cy.visit('/user-management/user/47');
    //   cy.get('.confirm-delete').click();