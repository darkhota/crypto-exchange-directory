describe("renders the details page", () => {
  it("renders correctly", () => {
    cy.visit("http://localhost:3000/details/binance");
    cy.get("#container").should("exist");
  });
});
