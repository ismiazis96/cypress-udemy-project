// describe('Menu Users', () => {
  
//   it('crate user is valid data', () => {
//     cy.visit('http://demo-app-cypress-automation.test/');
//     cy.get('[data-test="email"]').type('superadmin@gmail.com');
//     cy.get('[data-test="password"]').type('password');
//     cy.get('[data-test="submit"]').click();
//     cy.get('[data-test="username"]').should('have.text','Hi, SuperAdmin');

//     cy.visit('http://demo-app-cypress-automation.test/user-management/user');
//     cy.contains('Create New User').click();
//     cy.get('#name').type('ismitech1');
//     cy.get('#email').type('ismitech1@gmail.com');
//     cy.get('#password').type('123456');
//     cy.get('[data-test="btn-submit-create"]').click();
//     cy.get('.alert-success').should('contain', 'Data Berhasil Ditambahkan');
//   })
// })


describe('Menu Users', () => {
  const url = 'http://demo-app-cypress-automation.test/';
  const userData = {
    email: 'superadmin@gmail.com',
    password: 'password',
    assertion: 'Hi, SuperAdmin'
  };
  // variael dibawah digunakan jika menggunakan 1 data
  const newUser = {
    name: 'ismiazis',
    email: 'ismiazis01@gmail.com',
    password: '123456'
  };

  beforeEach(() => {
    cy.visit(url);
  });

  it('login dengan data valid', () => {
    cy.login(userData.email, userData.password);
    cy.get('[data-test="username"]').should('have.text', userData.assertion);
  });

  it('buat user baru', () => {
    cy.login(userData.email, userData.password);
    cy.visit(url + 'user-management/user');
    cy.contains('Create New User').click();
    cy.createUser(newUser);
    cy.get('.alert-success').should('contain', 'Data Berhasil Ditambahkan');
  });

  it.skip('buat data user sebanyak 10 kali dengan data yang unik', () => {
    cy.login(userData.email, userData.password);
    cy.visit(url + 'user-management/user');

    for (let i = 1; i <= 10; i++ ) {
      const uniqueUser = {
        name: `ismitech${i}`,
        email: `ismitech${i}@gmail.com`,
        password: '123456'
      };

      cy.contains('Create New User').click();
      cy.createUser(uniqueUser);
      cy.get('.alert-success').should('contain', 'Data Berhasil Ditambahkan');
    }
  });
});

