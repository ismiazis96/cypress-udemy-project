describe('Menu Users', () => {
    const url = 'http://demo-app-cypress-automation.test/';
    const userData = {
      email: 'superadmin@gmail.com',
      password: 'password',
      assertion: 'Hi, SuperAdmin'
    };

    beforeEach(() => {
        cy.visit(url);
      });

      it('login dengan data valid', () => {
        cy.login(userData.email, userData.password);
        cy.get('[data-test="username"]').should('have.text', userData.assertion);
      });
    
      it('menampilkan halaman user', () => {
        cy.login(userData.email, userData.password);
        cy.visit(url + 'user-management/user');
        cy.get('h1').should('contain','User List');
        // cy.createUser(newUser);
        // cy.get('.alert-success').should('contain', 'Data Berhasil Ditambahkan');
      });
});