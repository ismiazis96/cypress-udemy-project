describe('Menu Users', () => {

  beforeEach(() => {
    cy.visit('/');
    // action login
    cy.get('[data-cy="email"]').type('superadmin@gmail.com');
    cy.get('[data-cy="password"]').type('password');
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="iconProfile"]').should('have.text','Hi, SuperAdmin');
    cy.visit('user-management/user');
    cy.wait(2000);
    cy.contains('Create New User').click();
  });

  // beforeEach(() => {
  //   cy.visit('/user-management/user', {failOnStatusCode: false});
  //   cy.wait(2000);
  //   cy.contains('Create New User').click();
  //   cy.get('#name').clear(); // Pastikan field dikosongkan
  //   cy.get('#email').clear();
  //   cy.get('#password').clear();
  // });
  
  it.only('create user is valid data, user data case positif', () => {

    // cy.contains('Create New User').click();
    cy.get('#name').type('datatesting1');
    cy.get('#email').type('datatesting1@gmail.com');
    cy.get('#password').type('123456');
    cy.get('[data-cy="btn-submit-create"]').click();
    cy.get('.alert-success').should('contain', 'Data Berhasil Ditambahkan');
  });

  it.only('create user is valid data, user data case positif', () => {

    // cy.contains('Create New User').click();
    cy.get('#name').type('datatesting2');
    cy.get('#email').type('datatesting2@gmail.com');
    cy.get('#password').type('123456');
    cy.get('[data-cy="btn-submit-create"]').click();
    cy.get('.alert-success').should('contain', 'Data Berhasil Ditambahkan');
  });

  it('Menampilkan error ketika kolom Name kosong', () => {
    cy.get('#email').type('datatesting2@gmail.com');
    cy.get('#password').type('123456');
    cy.get('[data-cy="btn-submit-create"]').click();
    cy.get('.invalid-feedback').should('contain', 'The name field is required.');
  });
  it('Menampilkan error ketika kolom Email kosong', () => {
    cy.get('#name').type('datatesting1');
    cy.get('#password').type('123456');
    cy.get('[data-cy="btn-submit-create"]').click();
    cy.get('.invalid-feedback').should('contain','The email field is required.');
  });
  it('Menampilkan error ketika email sudah terdaftar (duplicate email)', () => {
    cy.get('#name').type('datatesting1');
    cy.get('#email').type('superadmin@gmail.com')
    cy.get('#password').type('123456');
    cy.get('[data-cy="btn-submit-create"]').click();
    cy.get('.invalid-feedback').should('contain','The email has already been taken.');
  });
  it('Menampilkan error ketika kolom password kosong', () => {
    cy.get('#name').type('datatesting1');
    cy.get('#email').type('datatesting1@gmail.com');
    cy.get('[data-cy="btn-submit-create"]').click();
    cy.get('.invalid-feedback').should('contain','The password field is required.');
  });

});


// describe('Menu Users', () => {
//   const url = '/';
//   const userData = {
//     email: 'superadmin@gmail.com',
//     password: 'password',
//     assertion: 'Hi, SuperAdmin'
//   };
//   // variael dibawah digunakan jika menggunakan 1 data
//   const newUser = {
//     name: 'ismiazis',
//     email: 'ismiazis01@gmail.com',
//     password: '123456'
//   };

//   beforeEach(() => {
//     cy.visit(url);
//   });

//   it('login dengan data valid', () => {
//     cy.login(userData.email, userData.password);
//     cy.get('[data-cy="iconProfile"]').should('have.text', userData.assertion);
//   });

//   it.skip('buat user baru', () => {
//     cy.login(userData.email, userData.password);
//     cy.visit(url + 'user-management/user');
//     cy.contains('Create New User').click();
//     cy.createUser(newUser);
//     cy.get('.alert-success').should('contain', 'Data Berhasil Ditambahkan');
//   });

//   it('buat data user sebanyak 10 kali dengan data yang unik', () => {
//     cy.login(userData.email, userData.password);
//     cy.visit(url + 'user-management/user');

//     for (let i = 1; i <= 10; i++ ) {
//       const uniqueUser = {
//         name: `ismitech${i}`,
//         email: `ismitech${i}@gmail.com`,
//         password: '123456'
//       };

//       cy.contains('Create New User').click();
//       cy.createUser(uniqueUser);
//       cy.get('.alert-success').should('contain', 'Data Berhasil Ditambahkan');
//     }
//   });
// });

