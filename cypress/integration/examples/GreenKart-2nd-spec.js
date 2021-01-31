/// <reference types="Cypress" />

describe("CHECKOUT TEST", () => {
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
		cy.get(".products").as("Products");

		cy.get("@Products").find(".product").should("have.length", 4);
		cy.get("@Products")
			.find(".product")
			.eq(2)
			.contains("ADD TO CART")
			.click()
			.then(() => {
				console.log("Added to cart"); //  Prints in Browser
			});
		cy.get("@Products")
			.find(".product")
			.each((element) => {
				if (element.find(".product-name").text().includes("Cauliflower")) {
					element.find("button").click();
				}
			});
		cy.get(".brand").then(function (logoElement) {
			cy.log(logoElement.text()); // Prints in test runner
		});
		//assertion
		cy.get(".brand").should("have.text", "GREENKART");
		cy.get(".cart-icon > img").click();
		cy.contains("PROCEED TO CHECKOUT").click();
		cy.contains("Place Order").click();
	});
});
