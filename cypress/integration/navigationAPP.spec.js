context("NavigationAPP", () => {
  it("Scrolling first page to the bottom and returns to top", () => {
    cy.visit("http://localhost:3000");
    cy.viewport("macbook-15");
    cy.scrollTo(0, "0%", { duration: 2000 });
    cy.scrollTo(0, "20%", { duration: 3000 });
    cy.scrollTo(0, "20%", { duration: 1000 });
    cy.scrollTo(0, "40%", { duration: 3000 });
    cy.scrollTo(0, "40%", { duration: 1000 });
    cy.scrollTo(0, "60%", { duration: 3000 });
    cy.scrollTo(0, "60%", { duration: 1000 });
    cy.scrollTo(0, "80%", { duration: 3000 });
    cy.scrollTo(0, "80%", { duration: 1000 });
    cy.scrollTo(0, "100%", { duration: 3000 });
    cy.scrollTo(0, "100%", { duration: 2000 });
    cy.contains("voltar ao topo").click();
    cy.viewport("ipad-2");
    cy.scrollTo("bottom", { duration: 5000 });
    cy.contains("voltar ao topo").click();
    cy.viewport("iphone-5");
    cy.scrollTo("bottom", { duration: 5000 });
  });
});
