/// <reference types="Cypress"/>
describe("Doing AUtomation Practice", () => {
	it("Trying Checkboxes", () => {
		cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
		cy.get("#checkBoxOption1")
			.check()
			.should("be.checked")
			.and("have.value", "option1");
		cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
	});
});
