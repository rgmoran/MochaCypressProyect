/// <reference types="cypress"/>

describe('suite of test of cypress in todomvc page', function(){

    beforeEach('go to the webpage', () => {
        cy.visit('https://todomvc-app-for-testing.surge.sh/')
    })

    it('should be able to add a new to do element', () => {
        cy.get('.new-todo').type("Create a awesome thing{enter}")
        cy.get('ul.todo-list .toggle').click()
        cy.get('ul.todo-list label').should('have.text','Create a awesome thing')
        //cy.contains("Clear completed").click()
    })
});
