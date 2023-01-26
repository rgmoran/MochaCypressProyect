/// <reference types="cypress" />

export class TodoListPage {
    navigate(){
        cy.visit("http://todomvc-app-for-testing.surge.sh/")
    }

    addTodo(text){
        cy.get('.new-todo').type(text + "{enter}")
    }

    validateElement(index, textToValidate){
        cy.get(`ul.todo-list li:nth-child(${index + 1}) label`).should('have.text', textToValidate)
        cy.get('.toggle').should('not.be.checked')
    }

    checkTodoElement(indexElement){
        cy.get(`ul.todo-list li:nth-child(${indexElement + 1}) .toggle`).click()        
    }

    clearTodoList(){
        cy.contains("Clear completed").click()
    }

    validateLenghtOfTodoList(numbersOfTodos){
        cy.get(`ul.todo-list li`).should("have.length", numbersOfTodos)
    }

    validateStateCompletedOfElement(indexOfElement, isCompleted){
        cy.get(`.todo-list li:nth-child(${indexOfElement}) label`).should(`${isCompleted ? '' : '.not'}`, 'text-decorate-line', 'line-through')
    }

    validateIsChecked(indexElement, isChecked){
        cy.get(`.todo-list li:nth-child(${indexElement})`).should(`${isChecked ? '' : '.not'}be.checked`)
    }

    validateEmptyTodoList(){
        cy.get('ul.todo-list').should('not.have.descendants')
    }

    showOnlyCompleteTodo(){
        cy.contains("Completed").click()
        cy.get('.todo-list li').should('have.length.lessThan', 3)
        cy.get('.todo-list li').should('not.have.length.greaterThan', 3)
    }

    showAllTodoElement(){
        cy.contains("All").click()
        cy.get('.todo-list li').should('have.length.lessThan', 5)
        cy.get('.todo-list li').should('have.length', 3)
    }

    showActiveTodoElement(){
        cy.contains("Active").click()
        cy.get('.todo-list li').should('have.length.lessThan', 3)
        cy.get('.todo-list li').should('not.have.length.greaterThan', 5)
    }
}