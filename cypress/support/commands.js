Cypress.Commands.add("fillMandatoryFieldsAndSubmit", function () {
  cy.get("#firstName").type("Allyson");
  cy.get("#lastName").type("Gabriel");
  cy.get("#email").type("allysonteste@gmail.com");
  cy.get("#open-text-area").type("Teste Padrão");
  cy.contains("button", "Enviar").click();
});

Cypress.Commands.add("fillMandatoryFields", function () {
  cy.get("#firstName").type("Allyson");
  cy.get("#lastName").type("Gabriel");
  cy.get("#email").type("allysonteste@gmail.com");
  cy.get("#open-text-area").type("Teste Padrão");
});
