//console.log("hello world")

/*
  client side
    template: static template
    logic(js): MVC(model, view, controller): used to server side technology, single page application
        model: prepare/manage data,
        view: manage view(DOM),
        controller: business logic, event bindind/handling

  server side
    json-server
    CRUD: create(post), read(get), update(put, patch), delete(delete)


*/

//read
/* fetch("http://localhost:3000/todos")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    }); */

import {Controller} from './mvc/controller.js';
Controller.bootstrap();

// const APIs = (() => {
//     const createTodo = (newTodo) => {
//         console.log('post')
//         return fetch("http://localhost:3000/todos", {
//             method: "POST",
//             body: JSON.stringify(newTodo),
//             headers: { "Content-Type": "application/json" },
//         }).then((res) => res.json());
//     };

//     const deleteTodo = (id) => {
//         return fetch("http://localhost:3000/todos/" + id, {
//             method: "DELETE",
//         }).then((res) => {
//             console.log(res)
//             return res.json()
//         })
//     };

//     const editTodo = (id, content) => {
//         console.log(content)
//         return fetch("http://localhost:3000/todos/" + id, {
//             method: "PUT",
//             body: JSON.stringify({...content})
//         }).then(res => res.json())
//     }

//     const getTodos = () => {
//         return fetch("http://localhost:3000/todos").then((res) => res.json());
//     };

//     const completeTodo = (id) => {
//         return fetch("http://localhost:3000/todos/" + id, {
//             method: "PUT",
//             body: JSON.stringify({completed: true}),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8'
//             }
//         }).then((res) => {
//             return res.json()
//         })
//     }

//     return { createTodo, deleteTodo, getTodos, completeTodo, editTodo };
// })();

// //IIFE
// //todos
// /*
//     hashMap: faster to search
//     array: easier to iterate, has order


// */
// const Model = (() => {
//     class State {
//         #todos; //private field
//         #onChange; //function, will be called when setter function todos is called
//         constructor() {
//             this.#todos = [];
//         }
//         get todos() {
//             return this.#todos;
//         }
//         set todos(newTodos) {
//             // reassign value
//             console.log("setter function");
//             this.#todos = newTodos;
//             this.#onChange?.(); // rendering
//         }

//         subscribe(callback) {
//             //subscribe to the change of the state todos
//             this.#onChange = callback;
//         }
//     }
//     const { getTodos, createTodo, deleteTodo, completeTodo, editTodo } = APIs;
//     return {
//         State,
//         getTodos,
//         createTodo,
//         deleteTodo,
//         completeTodo,
//         editTodo
//     };
// })();
// /*
//     todos = [
//         {
//             id:1,
//             content:"eat lunch"
//         },
//         {
//             id:2,
//             content:"eat breakfast"
//         }
//     ]

//     <button class="delete-btn" id="${todo.id}">

// */
// const View = (() => {
//     const todolistEl = document.querySelector(".todo-lists__pending");
//     const todoListCompletedEl = document.querySelector(".todo-lists__complete")
//     const submitBtnEl = document.querySelector(".submit-btn");
//     const inputEl = document.querySelector(".input");

//     const renderTodos = (todos) => {
//         let todosPendingTemplate = "";
//         let todosCompletedTemplate = "";
//         const todosPending = todos.filter(todo => !todo.completed)
//         const todosCompleted = todos.filter(todo => todo.completed)
//         todosPending.forEach((todo) => {
//             const liTemplate = `
//                 <li id=${todo.id}>
//                     <input readonly type="text" value=${todo.content} class="input"></input>
//                     <svg width="22" length="auto" focusable="false" aria-hidden="true" viewBox="0 0 24 24"  aria-label="fontSize small" id=${todo.id} class="edit">
//                         <path id=${todo.id} class="edit" fill="white" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z">
//                         </path>
//                     </svg>
//                     <svg id=${todo.id} width="22" length="auto" focusable="false" aria-hidden="true" viewBox="0 0 24 24" aria-label="fontSize small" class="delete">
//                         <path id=${todo.id} class="delete" fill="white" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z">
//                         </path>
//                     </svg>
//                     <svg id=${todo.id} width="22" length="auto" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardIcon" aria-label="fontSize small" class="complete">
//                         <path id=${todo.id} fill="white" d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" class="complete">
//                         </path>
//                     </svg>
//                 </li>
//             `;
//             todosPendingTemplate += liTemplate;
//         });
//         todosCompleted.forEach((todo) => {
//             const liTemplate = `
//                 <li id=${todo.id}>
//                     <svg width="22" length="auto" focusable="false" aria-hidden="true" viewBox="0 0 24 24" aria-label="fontSize small" class="complete">
//                         <path fill="white" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z">
//                         </path>
//                     </svg>
//                     <input readonly type="text" value=${todo.content} class="input"></input>
//                     <svg width="22" length="auto" focusable="false" aria-hidden="true" viewBox="0 0 24 24"  aria-label="fontSize small" id=${todo.id} class="edit">
//                         <path id=${todo.id} class="edit" fill="white" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z">
//                         </path>
//                     </svg>
//                     <svg id=${todo.id} width="22" length="auto" focusable="false" aria-hidden="true" viewBox="0 0 24 24" aria-label="fontSize small" class="delete">
//                         <path id=${todo.id} class="delete" fill="white" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z">
//                         </path>
//                     </svg>
//                 </li>
//             `;
//             todosCompletedTemplate += liTemplate;
//         })
//         if (todos.length === 0) {
//             todosPendingTemplate = "<h4>no task to display!</h4>";
//         }
//         todolistEl.innerHTML = todosPendingTemplate;
//         todoListCompletedEl.innerHTML = todosCompletedTemplate;
//     };

//     const clearInput = () => {
//         inputEl.value = "";
//     };

//     return { renderTodos, submitBtnEl, inputEl, clearInput, todolistEl };
// })();

// const Controller = ((view, model) => {
//     const state = new model.State();
//     const init = () => {
//         model.getTodos().then((todos) => {
//             todos.reverse();
//             state.todos = todos;
//         });
//     };

//     const handleSubmit = () => {
//         view.submitBtnEl.addEventListener("click", (event) => {
//             /*
//                 1. read the value from input
//                 2. post request
//                 3. update view
//             */
//             const inputValue = view.inputEl.value;
//             model.createTodo({ content: inputValue, completed: false }).then((data) => {
//                 state.todos = [data, ...state.todos];
//                 view.clearInput();
//             });
//         });
//     };

//     const handleDelete = () => {
//         //event bubbling
//         /*
//             1. get id
//             2. make delete request
//             3. update view, remove
//         */
//        console.log(view.todolistEl.children)
//         view.todolistEl.addEventListener("click", (event) => {
//             if (event.target.className.baseVal === "delete") {
//                 const id = event.target.id;
//                 model.deleteTodo(+id).then((data) => {
//                     state.todos = state.todos.filter((todo) => todo.id !== +id);
//                 });
//             }
//         });
//     };

//     const handleEdit = () => {
//         view.todolistEl.addEventListener("click", (event) => {

//             //check if edit svg was clicked
//             if(event.target.tagName === "svg") {
//                 const id = event.target.id;
//                 //find the input element with the same id as the list element
//                 let inputEl;
//                 for(const child of event.currentTarget.children) {
//                     if(+child.id === +id) {
//                         inputEl = child.querySelector('input');
//                     }
//                 }
//                 //check if the input element has readonly attribute and change it if it does or does not
//                 if(inputEl.hasAttribute('readonly')) {
//                     inputEl.removeAttribute('readonly')
//                 } else {
//                     inputEl.setAttribute('readonly', true)
//                 }
//                 //get current input element value and call a put method to update the database
//                 let data;
//                 for(const todo of state.todos) {
//                     console.log(typeof todo.id, typeof id)
//                     if(todo.id === +id) {
//                         data = todo;
//                     }
//                 }
//                 console.log(data)
//                 model.editTodo(+id, data).then((data) => {
//                     console.log(data)
//                 })

//             }
//         })
//     }

//     const handleComplete = () => {
//         view.todolistEl.addEventListener("click", (event) => {
//             if(event.target.className.baseVal === "complete") {
//                 const id = event.target.id;
//                 model.completeTodo(+id).then((data) => {
//                     console.log(data)
//                 })
//             }
//         })
//     }

//     const bootstrap = () => {
//         init();
//         handleSubmit();
//         handleDelete();
//         handleEdit();
//         handleComplete();
//         state.subscribe(() => {
//             view.renderTodos(state.todos);
//         });
//     };
//     return {
//         bootstrap,
//     };
// })(View, Model); //ViewModel

// Controller.bootstrap();
