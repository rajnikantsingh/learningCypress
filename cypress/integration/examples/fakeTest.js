/// <reference types="Cypress" />
describe(" My first mocking test", function () {
	it(" My first mocking test", function () {
		cy.visit("https://example.cypress.io/commands/network-requests");
		cy.server(); //this is needed to record the network events
		cy.route({
			method: "PUT",
			url: "comments/*",
			status: 404,
			response: {
				error: "this comment does not exist",
			},
			delay: 1000,
		}).as("putComment");

		cy.get(".network-put.btn.btn-warning").click();
		cy.wait("@putComment");

		// our 404 statusCode logic in scripts.js executed
		cy.get(".network-put-comment").should(
			"contain",
			"this comment does not exist",
		);
	});
});
