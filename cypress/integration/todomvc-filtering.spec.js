/// <reference types="cypress" />

describe('filtering todo elements', () =>{
    beforeEach('loading necesary elements', () =>{
        cy.visit('http://todomvc-app-for-testing.surge.sh/')

        cy.get('.new-todo').type("welcome to your todo list{enter}")
        cy.get('.new-todo').type("write importan thing just over here{enter}")
        cy.get('.new-todo').type("you are doing great{enter}")

        cy.get('.todo-list li:nth-child(2) .toggle').click()
    })

    it('flitering to "Active" todo elements', () => {
        cy.contains("Active").click()
    })
})
