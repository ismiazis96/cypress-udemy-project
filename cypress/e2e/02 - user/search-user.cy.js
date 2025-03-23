describe('Template user', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('[data-cy="email"]').type('superadmin@gmail.com');
        cy.get('[data-cy="password"]').type('password');
        cy.get('[data-cy="submit"]').click();
        cy.get('[data-cy="iconProfile"]').should('have.text','Hi, SuperAdmin');
        cy.visit('user-management/user');
    });

    it('User can search data user case positif', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.search').click();
        cy.get('#name').clear('');
        cy.get('#name').type('SuperAdmin');
        // cy.get('#search > .text-right > .btn-primary').click();
        cy.get('[data-cy="submit-search"]').click();
        cy.get('.table > tbody > :nth-child(2) > :nth-child(2)').should('have.text', 'SuperAdmin');
        /* ==== End Cypress Studio ==== */
    });
});