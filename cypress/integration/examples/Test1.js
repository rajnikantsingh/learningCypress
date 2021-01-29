/// <reference types="Cypress" />

describe("My First Test", () => {
	it("Does not do much", () => {
		expect(true).to.equal(true);
	});
	it("This will check the substring", () => {
		expect("Rajni").to.contain("Raj");
	});
	it("Open a Test App", () => {
		cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
		cy.get(".search-keyword").type("ca");
		cy.wait(2000);
		cy.get(".products").find(".product").should("have.length", 4);
		cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click();
		cy.get(".products")
			.find(".product")
			.each((element) => {
				if (element.find(".product-name").text().includes("Cauliflower")) {
					element.find("button").click();
				}
			});
		console.log(
			cy.get(".brand").then(function (logoElement) {
				cy.log(logoElement.text());
			}),
		);
	});
});
