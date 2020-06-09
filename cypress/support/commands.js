Cypress.Commands.add("accessResourcePage", (menuItem,submenuItem) => {
  // Click menu hamburger
  cy.get(".menu").click();
  // Click on resource link
  cy.contains(menuItem).click();
  // Click on event link
  if(submenuItem!==null || submenuItem!==undefined){
    cy.contains(submenuItem).click();
  }
});

Cypress.Commands.add("visitURL", (url) => {
  cy.visit(url);
});

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
