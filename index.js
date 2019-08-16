var todoList = {
    todos: [],
    displayTodos: function() {
        console.log('My Todos', this.todos);
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            // first todoText names the property (ex. .todoText to grab properties)
            // second todoText calls the function and computes whatever you pass in (ex. "addtodo("hi") = "hi"")
            completed: false
        });
        // the "this" method is used to refer to OBJECTS within your function
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText
        this.displayTodos()
    },
    deleteTodo: function(position) {
        this.todos.splice(position,1);
        this.displayTodos();
    },
    toggleCompleted (position) {
        var todo = this.todos [position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};

