/// <reference types="cypress" />

import { TodoListPage } from "../pages/todoListPage"

describe('filtering todo elements', () =>{

    const todoObject = new TodoListPage()

    beforeEach('loading necesary elements', () =>{
        todoObject.navigate()

        todoObject.addTodo("write importan thing just over here")
        todoObject.checkTodoElement()
    })

    it('flitering to "Active" todo elements', () => {
        todoObject.showActiveTodoElement()
    })

    it('flitering to "Completed" todo elements', () => {
        todoObject.showOnlyCompleteTodo()
    })

    it('flitering to "All" todo elements', () => {
        todoObject.showAllTodoElement()
    })
})
