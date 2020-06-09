/// <reference types="Cypress" />

describe("Hobsons resource submenu navigation Test cases", () => {
  beforeEach(function () {
    cy.fixture("hobsonUIConfig").then(function (data) {
      this.data = data;
      cy.visitURL(this.data.hobsonURL)
    });
    cy.fixture("resourceText").then(function (data) {
      this.resourceTextData = data;
    });
  });

  it("To verify main navigation contains navigation 'resources' and resources contains sub navigation 'Event' ", function () {
    // Click menu hamburger
    cy.get(".menu").click();
    // Assert resource link
    cy.get(".nav > ul > li")
      .eq(3)
      .should("contain", this.data.resourceLinkText);
    // Click on resource link
    cy.get(".nav > ul > li").eq(3).click();
    // Assert the resource sub menus
    let count = 0;
    cy.get("ul.expand > li").each(($elm) => {
      expect($elm.text()).to.contain(
        this.resourceTextData.resourseSubmenu[count]
      );
      count++;
    });
  });
});
