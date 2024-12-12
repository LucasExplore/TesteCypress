import { faker } from '@faker-js/faker';

describe('Teste de Login', () => {
  
  it('Deve retornar mensagem de erro para login inválido', () => {
    const email = faker.internet.email();
    const password = faker.internet.password();
  
    cy.loginApi(email, password).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.message).to.eq('Email e/ou senha inválidos');
    });
  });
  

  it('Listar Usuários', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/usuarios',
      failOnStatusCode: false 
    }).then((response) => {
      expect(response.status).to.eq(200); 
    });
  });

  it('Login com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/login', 
      body: {
        email: 'marioruanoliveira@moen.com.br',
        password: '123'
      },
      failOnStatusCode: false 
    }).then((response) => {
      expect(response.body.message).to.eq('Login realizado com sucesso'); 
  });
});
});