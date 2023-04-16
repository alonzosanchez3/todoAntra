import { Model } from './model.js'
import { View } from './view.js'

export const Controller = ((view, model) => {
  const state = new model.State();
  const init = () => {
      model.getTodos().then((todos) => {
          todos.reverse();
          state.todos = todos;
      });
  };

  const handleSubmit = () => {
      view.submitBtnEl.addEventListener("click", (event) => {
          /*
              1. read the value from input
              2. post request
              3. update view
          */
          const inputValue = view.inputEl.value;
          model.createTodo({ content: inputValue, completed: false }).then((data) => {
              state.todos = [data, ...state.todos];
              view.clearInput();
          });
      });
  };

  const handleDelete = () => {
      //event bubbling
      /*
          1. get id
          2. make delete request
          3. update view, remove
      */
      view.todoLists.addEventListener("click", (event) => {
          if (event.target.className.baseVal === "delete") {
              const id = event.target.id;
              model.deleteTodo(+id).then((data) => {
                  state.todos = state.todos.filter((todo) => todo.id !== +id);
              });
          }
      });
  };

  const handleEdit = () => {
      view.todoLists.addEventListener("click", (event) => {

        //1. get id
        //2. get span element
        //3. check if span has contenteditable
        //4. call PUT method

          if(event.target.className.baseVal === "edit") {
              const id = event.target.id;
              let spanEl = event.target.parentNode.querySelector('span') || event.target.parentNode.parentNode.querySelector('span')

              if(spanEl.hasAttribute('contenteditable')) {
                  spanEl.removeAttribute('contenteditable')
              } else {
                  spanEl.setAttribute('contenteditable', true)
                  spanEl.focus()
              }

              let data;
              for(const todo of state.todos) {
                if(todo.id === +id) {
                      data = {
                        ...todo,
                        content: spanEl.innerHTML
                      }
                  }
              }
              model.editTodo(+id, data)
          }
      })
  }

  const handleComplete = () => {

    //1. get id
    //2. get data from current state
    //3. call put method
    //4. update view

      view.todoLists.addEventListener("click", (event) => {
          if(event.target.className.baseVal === "complete") {
              const id = event.target.id;
              let data;
              for(let todo of state.todos) {
                if(todo.id === +id) {
                      data = {
                        ...todo
                      }
                  }
              }
              model.completeTodo(+id, data).then((data) => {
                state.todos = state.todos.map((todo) => {
                  if(todo.id === +id) {
                    todo = {
                      ...todo, completed: !todo.completed
                    }
                  }
                  return todo;
                })
              })
          }
      })
  }

  const bootstrap = () => {
      init();
      handleSubmit();
      handleDelete();
      handleEdit();
      handleComplete();
      state.subscribe(() => {
          view.renderTodos(state.todos);
      });
  };
  return {
      bootstrap,
  };
})(View, Model); //ViewModel