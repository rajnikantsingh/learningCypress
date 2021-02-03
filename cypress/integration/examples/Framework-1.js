/// <reference types="Cypress" />

describe("Test Framework 1", function () {
	before(function () {
		cy.fixture("example").then(function (data) {
			this.data = data; // this keyword was not working with arrow functions
		});
	});

	it("Log Fixture", function () {
		console.log(this.data.name);
	});
});
