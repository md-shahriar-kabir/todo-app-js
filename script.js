 
 let todos = [];

    function addTodo() {
      const input = document.getElementById("todoInput");
      const task = input.value.trim();

      if (!task) return;

      todos.push({
        id: Date.now(),
        text: task,
        completed: false,
      });
      console.log(todos)

      input.value = "";
      renderTodos();
    }

    function toggleTodo(id) {
      todos = todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      );

      renderTodos();
    }

    function deleteTodo(id) {
      todos = todos.filter(todo => todo.id !== id);
      renderTodos();
    }

    function renderTodos() {
      const todoList = document.getElementById("todoList");

      todoList.innerHTML = todos
        .map(
          todo => `
            <li class="flex items-center justify-between bg-gray-50 p-3 rounded-lg border">
              
              <div class="flex items-center gap-3">
                <input
                  type="checkbox"
                  ${todo.completed ? "checked" : ""}
                  onchange="toggleTodo(${todo.id})"
                  class="w-5 h-5"
                />

                <span class="${
                  todo.completed
                    ? "line-through text-gray-400"
                    : "text-gray-800"
                }">
                  ${todo.text}
                </span>
              </div>

              <button
                onclick="deleteTodo(${todo.id})"
                class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </li>
          `
        )
        .join("");
    }