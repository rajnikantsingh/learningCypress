/// <reference types="Cypress" />

describe("Test Framework 1", function () {
	before(function () {
		cy.visit("https://rahulshettyacademy.com/angularpractice");
		cy.fixture("example").then(function (data) {
			this.data = data; // this keyword was not working with arrow functions
		});
	});

	it("Validate Attribute Property - TWo Way Binding", function () {
		cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
		cy.get("select").select(this.data.gender);
		cy.get(":nth-child(4) > .ng-pristine").should("have.value", this.data.name);
	});
	it("should have min length validation", () => {
		cy.get('input[name="name"]:nth-child(2)').should(
			"have.attr",
			"minlength",
			2,
		); // can also use promise to get prop
	});
	it("should be disabled", () => {
		cy.get("#inlineRadio3").should("be.disabled"); // behaviour should be = BE , Property = have
	});
});
