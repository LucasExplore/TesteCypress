describe("Feature de Automação serverest", () => {
  beforeEach(() => {
    cy.visit("https://front.serverest.dev/login");
  });

  it("Cadastro de usuario com sucesso", () => {
    cy.cadastrousuario()
    cy.contains("Cadastro realizado com sucesso");
  });

  it("Login com sucesso", () => {
    cy.login("marcelo_tomas_assis@pepsico.com", "Dodo@940808");
    cy.get("h1").should("be.visible");
  });

  it("Login com Email e/ou senha inválidos", () => {
    cy.login("marcelo_tomas_assis@pepsico.com", "erro na senha");
    cy.contains("Email e/ou senha inválidos");
  });
});
