context("NavigationAPP", () => {
  it("Enters the landing page and tries to go to the bottom the page", () => {
    cy.visit("https://localhost:3000");
    cy.viewport(1440, 900);
    cy.scrollTo("bottom", { duration: 10000 });
    cy.contains("voltar ao topo");
  });
});
