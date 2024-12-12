import { faker } from '@faker-js/faker';



Cypress.Commands.add('cadastrousuario', () => {
    const username = faker.internet.username();
    const emailFake = faker.internet.email();
    const senhaFake = faker.internet.password();
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('[data-testid="nome"]').type(username);
    cy.get('[data-testid="email"]').type(emailFake);
    cy.get('[data-testid="password"]').type(senhaFake);
    cy.get('[data-testid="cadastrar"]').click();
  });

Cypress.Commands.add('login', (email, senha) => {
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="senha"]').type(senha);
    cy.get('[data-testid="entrar"]').click();
  });

  Cypress.Commands.add('loginApi', (email, password) => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/login',
      body: { email, password },
      failOnStatusCode: false
    });
  });