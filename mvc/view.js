export const View = (() => {
  const todolistEl = document.querySelector(".todo-lists__pending");
  const todoListCompletedEl = document.querySelector(".todo-lists__complete")
  const submitBtnEl = document.querySelector(".submit-btn");
  const inputEl = document.querySelector(".input");
  const todoLists = document.querySelector(".todo-lists")

  const renderTodos = (todos) => {
      let todosPendingTemplate = "";
      let todosCompletedTemplate = "";
      const todosPending = todos.filter(todo => !todo.completed)
      const todosCompleted = todos.filter(todo => todo.completed)
      todosPending.forEach((todo) => {
          const liTemplate = `
              <li id=${todo.id}>
                  <span class="input">${todo.content}</span>
                  <svg width="22" length="auto" focusable="false" aria-hidden="true" viewBox="0 0 24 24"  aria-label="fontSize small" id=${todo.id} class="edit">
                      <path id=${todo.id} class="edit" fill="white" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z">
                      </path>
                  </svg>
                  <svg id=${todo.id} width="22" length="auto" focusable="false" aria-hidden="true" viewBox="0 0 24 24" aria-label="fontSize small" class="delete">
                      <path id=${todo.id} class="delete" fill="white" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z">
                      </path>
                  </svg>
                  <svg id=${todo.id} width="22" length="auto" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardIcon" aria-label="fontSize small" class="complete">
                      <path id=${todo.id} fill="white" d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" class="complete">
                      </path>
                  </svg>
              </li>
          `;
          todosPendingTemplate += liTemplate;
      });
      todosCompleted.forEach((todo) => {
          const liTemplate = `
              <li id=${todo.id}>
                  <svg id=${todo.id} width="22" length="auto" focusable="false" aria-hidden="true" viewBox="0 0 24 24" aria-label="fontSize small" class="complete">
                      <path id=${todo.id} fill="white" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z">
                      </path>
                  </svg>
                  <span class="input">${todo.content}</span>
                  <svg width="22" length="auto" focusable="false" aria-hidden="true" viewBox="0 0 24 24"  aria-label="fontSize small" id=${todo.id} class="edit">
                      <path id=${todo.id} class="edit" fill="white" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z">
                      </path>
                  </svg>
                  <svg id=${todo.id} width="22" length="auto" focusable="false" aria-hidden="true" viewBox="0 0 24 24" aria-label="fontSize small" class="delete">
                      <path id=${todo.id} class="delete" fill="white" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z">
                      </path>
                  </svg>
              </li>
          `;
          todosCompletedTemplate += liTemplate;
      })
      if (todosPending.length === 0) {
          todosPendingTemplate = "<h4>no task to display!</h4>";
      }

      if(todosCompleted.length === 0) {
        todosCompletedTemplate = "<h4>no tasks completed yet!</h4>"
      }
      todolistEl.innerHTML = todosPendingTemplate;
      todoListCompletedEl.innerHTML = todosCompletedTemplate;
  };

  const clearInput = () => {
      inputEl.value = "";
  };

  return { renderTodos, submitBtnEl, inputEl, clearInput, todolistEl, todoLists };
})();