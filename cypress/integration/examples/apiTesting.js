/// <reference types="Cypress" />
describe(" API Test", function () {
	it(" My first  test", function () {
		cy.request("POST", "http://216.10.245.166/Library/Addbook.php", {
			name: "Leafefrn Appium Automation with Java",
			isbn: "fefe",
			aisle: "443343",
			author: "John foe",
        }).then(function (response) {
            expect(response.body).to.have.property(
                "Msg", "successfully added"
            );
            expect(response.status).to.eq(200);
        });
	});
});
