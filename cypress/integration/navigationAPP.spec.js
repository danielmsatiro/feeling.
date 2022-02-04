Cypress.Commands.add("login", () => {
  cy.request({
    method: "POST",
    url: "https://feelings-api-q2-g1-jul21.herokuapp.com/login",
    body: {
      email: "mateus_satiro@yahoo.com.br",
      password: "123456",
    },
  }).then((resp) => {
    console.log(resp.body.user);
    window.localStorage.setItem("@Feeling: accessToken", resp.body.accessToken);
    window.localStorage.setItem(
      "@Feeling: user",
      JSON.stringify(resp.body.user)
    );
  });
});

context("Navigation first page, signIn and SignUp", () => {
  it("Scrolling first page to the bottom and returns to top", () => {
    cy.visit("http://localhost:3000");
    cy.viewport("macbook-15");
    cy.pause();
    cy.scrollTo(0, 900, { duration: 3000 });
    cy.scrollTo(0, 900, { duration: 2000 });
    cy.scrollTo(0, 1800, { duration: 3000 });
    cy.scrollTo(0, 1800, { duration: 2000 });
    cy.scrollTo(0, 2700, { duration: 3000 });
    cy.scrollTo(0, 2700, { duration: 2000 });
    cy.scrollTo(0, 3600, { duration: 3000 });
    cy.scrollTo(0, 3600, { duration: 2000 });
    cy.scrollTo(0, 4500, { duration: 3000 });
    cy.scrollTo(0, 4500, { duration: 3000 });
    cy.scrollTo(0, "100%", { duration: 3000 });
    cy.scrollTo(0, "100%", { duration: 2000 });
    cy.contains("voltar ao topo").click();
    cy.viewport("ipad-2");
    cy.scrollTo("bottom", { duration: 5000 });
    cy.contains("voltar ao topo").click();
    cy.viewport("iphone-5");
    cy.scrollTo("bottom", { duration: 5000 });
    cy.pause();
  });

  it("Try to open creator's card", () => {
    cy.visit("http://localhost:3000");
    cy.viewport("macbook-15");
    cy.scrollTo(0, 4500);
    cy.pause();
    cy.get(
      ":nth-child(1) > .css-pl8jqz > .css-70qvj9 > .css-15cs91t > .css-1vq10q2 > .chakra-link"
    ).click();
    cy.get(
      ":nth-child(2) > .css-pl8jqz > .css-70qvj9 > .css-15cs91t > .css-1vq10q2 > .chakra-link"
    ).click();
    cy.get(
      ":nth-child(3) > .css-pl8jqz > .css-70qvj9 > .css-15cs91t > .css-1vq10q2 > .chakra-link"
    ).click();
    cy.get(
      ":nth-child(4) > .css-pl8jqz > .css-70qvj9 > .css-15cs91t > .css-1vq10q2 > .chakra-link"
    ).click();
    cy.get(
      ":nth-child(5) > .css-pl8jqz > .css-70qvj9 > .css-15cs91t > .css-1vq10q2 > .chakra-link"
    ).click();
    cy.scrollTo(0, 4500);
    cy.pause();
  });

  it("Are Login and SignUp responsible?", () => {
    cy.visit("http://localhost:3000/login");
    cy.viewport("macbook-15");
    cy.pause();
    cy.wait(2000);
    cy.visit("http://localhost:3000/login");
    cy.viewport("ipad-2");
    cy.wait(2000);
    cy.visit("http://localhost:3000/login");
    cy.viewport("iphone-5");
    cy.wait(2000);
    cy.visit("http://localhost:3000/signup");
    cy.viewport("macbook-15");
    cy.wait(2000);
    cy.visit("http://localhost:3000/signup");
    cy.viewport("ipad-2");
    cy.wait(2000);
    cy.visit("http://localhost:3000/signup");
    cy.viewport("iphone-5");
    cy.wait(2000);
  });

  it("Try to signUp page with invalid Email and password", () => {
    cy.visit("http://localhost:3000");
    cy.viewport("macbook-15");
    cy.pause();
    cy.get(".css-1h5rwz3 > :nth-child(6)").click();

    cy.get("#field-6").type("mateus_satiroyahoo.com.br", { delay: 40 });
    cy.get("#field-7").type("Daniel", { delay: 40 });
    cy.get("#field-8").type("123456", { delay: 40 });
    cy.get("#field-9").type("12345", { delay: 40 });
    cy.get(".chakra-button").click();
    cy.contains("E-mail inválido");
    cy.contains("Senhas diferentes");
    cy.contains("Login");
  });

  it("Try to signUp page with email alredy existed", () => {
    cy.visit("http://localhost:3000/signup");
    cy.viewport("macbook-15");
    cy.pause();
    cy.intercept("POST", "/register", {
      statusCode: 400,
      body: {
        name: "Daniel",
        email: "mateus_satiro@yahoo.com.br",
        id: 2,
      },
    }).as("new-user");
    cy.get("#field-1").type("mateus_satiro@yahoo.com.br", { delay: 40 });
    cy.get("#field-2").type("Daniel", { delay: 40 });
    cy.get("#field-3").type("123456", { delay: 40 });
    cy.get("#field-4").type("123456", { delay: 40 });
    cy.get(".chakra-button").click();
    cy.pause();
  });

  it("Try to signUp page with success", () => {
    cy.visit("http://localhost:3000/signup");
    cy.viewport("macbook-15");
    cy.pause();

    cy.intercept("POST", "/register", {
      statusCode: 200,
      body: {
        name: "Daniel",
        email: "mateus_satiro@yahoo.com.br",
        id: 2,
      },
    }).as("new-user");

    cy.get("#field-1").type("mateus_satiro@yahoo.com.br", { delay: 40 });
    cy.get("#field-2").type("Daniel", { delay: 40 });
    cy.get("#field-3").type("123456", { delay: 40 });
    cy.get("#field-4").type("123456", { delay: 40 });
    cy.get(".chakra-button").click();
    cy.pause();
  });

  it("Try to signIn page with invalid Email and passwords", () => {
    cy.visit("http://localhost:3000/login");
    cy.viewport("macbook-15");

    cy.get("#field-1").type("Daniel", { delay: 40 });

    cy.get(".chakra-button").click();
    cy.contains("E-mail inválido");
    cy.contains("Senha obrigatória");
    cy.pause();
  });

  it("Try to signIn page with wrong password", () => {
    cy.visit("http://localhost:3000/login");
    cy.viewport("macbook-15");
    cy.pause();

    cy.intercept("POST", "/login", {
      statusCode: 401,
      body: {
        email: "mateus_satiro@yahoo.com.br",
        password: "123457",
      },
    }).as("new-user");

    cy.get("#field-1").type("mateus_satiro@yahoo.com.br", { delay: 40 });
    cy.get("#field-2").type("123457", { delay: 40 });
    cy.get(".chakra-button").click();
    cy.pause();
  });

  it("Try to signIn page with success", () => {
    cy.visit("http://localhost:3000/login");
    cy.viewport("macbook-15");
    cy.pause();

    cy.intercept("POST", "/login", {
      statusCode: 200,
      body: {
        email: "mateus_satiro@yahoo.com.br",
        password: "123456",
      },
    }).as("new-user");

    cy.get("#field-1").type("mateus_satiro@yahoo.com.br", { delay: 40 });
    cy.get("#field-2").type("123456", { delay: 40 });
    cy.get(".chakra-button").click();
    cy.pause();
  });
});

/* context("Navigation in Dashboard and others pages", () => {
  beforeEach(() => {
    cy.login();
  });
  it("Try to logout", () => {
    cy.visit("http://localhost:3000/dashboard");
    cy.viewport("macbook-15");
    cy.pause();
    cy.get(".css-zhrwrx > svg").click();
    cy.pause();
  });
}); */
