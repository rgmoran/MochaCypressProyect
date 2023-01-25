/// <reference types="cypress"/>

describe('suite of test of cypress in todomvc page', function(){

    beforeEach('go to the webpage', () => {
        cy.visit('https://todomvc-app-for-testing.surge.sh/')
    })

    it('should be able to add a new to do element', () => {
        cy.get('.new-todo', {timeout:3000}).type("Create a awesome thing{enter}")
        cy.get('.toggle',{timeout:5000}).click()
        cy.contains("Clear completed").click()
    })
});
