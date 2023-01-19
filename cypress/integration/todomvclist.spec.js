/// <reference types="cypress"/>

describe('suite of test of cypress in todomvc page', function(){

    it('go to todomvc page', () => {
        cy.visit('https://todomvc-app-for-testing.surge.sh/')

    })
});
