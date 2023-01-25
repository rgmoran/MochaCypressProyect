/// <reference types="cypress"/>

describe('suite of test of cypress in todomvc page', function(){

    it('should be able to add a new to do element', () => {
        cy.visit('https://todomvc-app-for-testing.surge.sh/')
        cy.get('.new-todo').type("Create a awesome thing{enter}")
    })
});
