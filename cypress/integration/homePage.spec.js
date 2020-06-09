/// <reference types="Cypress" />

describe("Hobsons home page test cases", () => {
  beforeEach(function () {
    cy.fixture("hobsonUIConfig").then(function (data) {
      this.data = data;
      cy.visitURL(this.data.hobsonURL);
    });
  });

  it("To verify that hobson company logo and title are visible", function () {
    // Assert logo
    cy.get("#logo").should("be.visible");
    // Assert page title
    cy.title(this.data.homePageTitle);
  });

  it("To verify the content alignment of “How can we help your students?” section", function () {
    // click on scroll button
    cy.get(".home-more").click();
    // Assert the heading
    cy.get("#section-learn-more > h2").should('contain',this.data.headingText);
    // Assert font family
    cy.get("#section-learn-more")
      .should(
        "have.css",
        "font-family",
        '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
      );
    // Assert color
    cy.get("#section-learn-more").should("have.css", "color", "rgb(37, 38, 40)");
  });
});
