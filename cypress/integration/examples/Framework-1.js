/// <reference types="Cypress" />
import HomePage from "../pageObjects/HomePage.js";

describe("Test Framework 1", function () {
	const homePage = new HomePage();

	before(function () {
		cy.visit(Cypress.env("url"));
	});
	beforeEach(function () {
		cy.fixture("example").then(function (data) {
			this.data = data; // this keyword was not working with arrow functions
		});
	});

	it("Validate Attribute Property - TWo Way Binding", function () {
		homePage.getEditBox().type(this.data.name);
		homePage.getGender().select(this.data.gender);
		homePage.getTwoWayBindingElement().should("have.value", this.data.name);
	});
	it("should have min length validation", function () {
		console.log(this.data.productNames);

		homePage.getEditBox().should("have.attr", "minlength", 2); // can also use promise to get prop
	});
	it("should be disabled", function () {
		homePage.getEntrepreneur().should("be.disabled"); // behaviour should be = BE , Property = have
	});

	it("Navigate to Shop", function () {
		homePage.getShopTab().click();
		this.data.productNames.forEach(function (prodName) {
			cy.addProduct(prodName);
		});
		// cy.get("#navbarResponsive > .navbar-nav > .nav-item > .nav-link").;
	});
});
