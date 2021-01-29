/// <reference types="Cypress" />

describe("My First Test", () => {
	it("Does not do much", () => {
		expect(true).to.equal(true);
    });
    it("This will check the substring", () => {
        expect('Rajni').to.contain('Raj');
    });
    it("Open a Test App", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type("ca");
        cy.wait(2000);
        cy.get(".products").find(".product").should('have.length', 4);
    })
});
