var todoList = {
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0) {
        console.log('your todo list is empty!!')
        } else {
            console.log('My Todos:');
        for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
            console.log ('(x)', this.todos[i].todoText)
        } else {
            console.log ('( )', this.todos[i].todoText)
            }    
        }
    }
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
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    toggleAll: function() {
        var totalTodos = this.todos.length
        var completedTodos = 0;

    for (var i = 0; i < totalTodos; i++) {
        if(this.todos[i].completed === true) {
            completedTodos++;
        }
    }
        if (completedTodos === totalTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
                
            }
        }
        this.displayTodos();
    }
};

var handlers = {
    displayTodos: function () {
        todoList.displayTodos();
    },
    addTodo: function () {
        var addTodoTextInput = document.querySelector('#addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = ''
    },
    changeTodo: function () {
        var changeTodoPositionInput = document.querySelector('#changeTodoPositionInput')
        var changeTodoTextInput = document.querySelector('#changeTodoTextInput')
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value)
        changeTodoPositionInput.value = ''
        changeTodoTextInput.value = ''
    },
    deleteTodo: function () {
        var deleteTodoPositionInput = document.querySelector('#deleteTodoPositionInput')
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber)
        deleteTodoPositionInput.value=''
    },
    toggleCompleted: function () {
        var toggleCompletedPositionInput = document.querySelector('#toggleCompletedPositionInput')
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber)
        toggleCompletedPositionInput.valueAsNumber=''
    },
    toggleAll: function () {
        todoList.toggleAll()
    }
}