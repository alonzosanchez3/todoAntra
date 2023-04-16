import {APIs} from './api.js'
import {View} from './view.js'

export const Model = (() => {
  class State {
      #todos; //private field
      #onChange; //function, will be called when setter function todos is called
      constructor() {
          this.#todos = [];
      }
      get todos() {
          return this.#todos;
      }
      set todos(newTodos) {
          // reassign value
          this.#todos = newTodos;
          this.#onChange?.(); // rendering
      }

      subscribe(callback) {
          //subscribe to the change of the state todos
          this.#onChange = callback;
      }
  }
  const { getTodos, createTodo, deleteTodo, completeTodo, editTodo } = APIs;
  return {
      State,
      getTodos,
      createTodo,
      deleteTodo,
      completeTodo,
      editTodo
  };
})();