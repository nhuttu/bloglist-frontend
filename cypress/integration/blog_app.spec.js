/* eslint-disable no-undef */
// eslint-disable-next-line no-undef

describe("Blog app", function () {
    beforeEach(function () {
        cy.request("POST", "http://localhost:3003/api/testing/reset");
        const user = {
            blogs: [],
            name: "asd123",
            username: "rre",
            password: "secr",
        };
        cy.request("POST", "http://localhost:3003/api/users/", user);
        cy.visit("http://localhost:3000");
    });
    it("login from", function () {
        cy.contains("log in to application")
    })
    describe('login', function () {
        it("user can login", function () {
            cy.contains("log in").click()
            cy.get("#username").type("rre")
            cy.get("#password").type("secr")
            cy.get("#login-button").click()
            cy.contains("asd123 logged-in")
        });
        it("fails with wrong", function () {
            cy.contains("log in").click()
            cy.get("#username").type("rre")
            cy.get("#password").type("sec")
            cy.get("#login-button").click()
            cy.get('.failure').should('contain', 'Wrong credentials')
            cy.get('.failure').should('have.css', 'color', 'rgb(255, 0, 0)')
            cy.get('.failure').should('have.css', 'border-style', 'solid')
        })

    }
    )
    describe('when logged in', function () {
        it("user can add a new blog"), function () {
            cy.get("#username").type("rre")
            cy.get("#password").type("secr")
            cy.get("#login-button").click()
            cy.contains("create new blog").click()
            cy.get("#title").type("new")
            cy.get("#author").type("new1")
            cy.get("#url").type("new12")
            cy.get("#create-button").click()
            cy.contains("new")
        }
    })
});
