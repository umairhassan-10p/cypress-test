/// <reference types="Cypress" />

describe("Hobsons event test cases", () => {
  beforeEach(function () {
    cy.fixture("hobsonUIConfig").then(function (data) {
      this.data = data;
      cy.visitURL(this.data.hobsonURL)
    });
  });

  const todayYear = Cypress.moment().format("YYYY");

  it("To verify that events page has current years events ", function () {
    // Goto event page (Resuable functional in command.js)
    cy.accessResourcePage("Resources", "Events");
    // Assert the on current years events
    let count = 0;
    cy.get(".txt")
      .find("small")
      .each(($small) => {
        let text = $small.text();
        if (text.includes(todayYear)) {
          cy.get(".txt").find("small").eq(count).should("be.visible");
        }
        count++;
      });
  });
});
