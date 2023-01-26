/// <reference types="cypress"/>

describe('suite of test of cypress in todomvc page', function() {

    beforeEach('go to the webpage', () => {
        cy.visit('https://todomvc-app-for-testing.surge.sh/')
        cy.get('.new-todo').type("Create a awesome thing{enter}")
    })

    it('should pass assertions aboud the first todo list element', () => {
        cy.get('ul.todo-list label').should('have.text','Create a awesome thing')
        cy.get('.toggle').should('not.be.checked')
    })

    it('should be mark as a todo element as a completed', () => {
        cy.get('ul.todo-list .toggle').click()
        cy.get('ul.todo-list li').should('have.class', 'completed')
    })

    it('should be clear the todo list', () => {  
        cy.get('ul.todo-list .toggle').click()     
        cy.contains('Clear').click()
        cy.get('.todo-list').should('not.have.descendants')

    })
});
