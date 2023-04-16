export const APIs = (() => {
  const createTodo = (newTodo) => {
      console.log('post')
      return fetch("http://localhost:3000/todos", {
          method: "POST",
          body: JSON.stringify(newTodo),
          headers: { "Content-Type": "application/json" },
      }).then((res) => res.json());
  };

  const deleteTodo = (id) => {
      return fetch("http://localhost:3000/todos/" + id, {
          method: "DELETE",
      }).then((res) => {
          console.log(res)
          return res.json()
      })
  };

  const editTodo = (id, content) => {
      console.log(content)
      const data = {
        ...content
      }
      console.log(data)
      return fetch("http://localhost:3000/todos/" + id, {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {"Content-Type": "application/json; charset=UTF-8"}
      }).then(res => {
        console.log(res)
      })
  }

  const getTodos = () => {
      return fetch("http://localhost:3000/todos").then((res) => res.json());
  };

  const completeTodo = (id, data) => {
    console.log(data)
      return fetch("http://localhost:3000/todos/" + id, {
          method: "PUT",
          body: JSON.stringify({...data, completed: !data.completed}),
          headers: {
              'Content-type': 'application/json; charset=UTF-8'
          }
      }).then((res) => {
          return res.json()
      })
  }

  return { createTodo, deleteTodo, getTodos, completeTodo, editTodo };
})();