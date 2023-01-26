/// <reference types="cypress"/>

import { TodoListPage } from "../pages/todoListPage";

describe('suite of test of cypress in todomvc page', function() {
    const todoObject = new TodoListPage()

    beforeEach('go to the webpage', () => {
        todoObject.navigate()
        todoObject.addTodo("Thing to be Great!!!")
        todoObject.addTodo("write something that you have to do")
        todoObject.addTodo("make your days more efficiently")
        todoObject.addTodo("Just Do IT!!!")
        todoObject.addTodo("SIIIIIIIIIIUUUUUUUUUUU!!! XD")
    })

    it('should pass assertions aboud the first todo list element', () => {
        todoObject.validateElement(0, "SIIIIIIIIIIUUUUUUUUUUU!!! XD")
    })

    it('should be mark as a todo element as a completed', () => {
        todoObject.checkTodoElement(1)
    })

    it('should be clear the todo list', () => {  
        todoObject.checkTodoElement(0)
        todoObject.clearTodoList()      
    })
});
