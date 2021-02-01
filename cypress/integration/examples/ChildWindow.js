/// <reference types="Cypress"/>
describe("Child Value", () => {
	it("Get Attribute Value", () => {
		cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#opentab").then((e1) => {
            const url = e1.prop("href");
            cy.visit(url); // this url should be from same domain
        });
    });
});
