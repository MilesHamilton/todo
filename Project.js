var todoList = {
    todos: [],
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            // first todoText names the property (ex. .todoText to grab properties)
            // second todoText calls the function and computes whatever you pass in (ex. "addtodo("hi") = "hi"")
            completed: false
        });
        // the "this" method is used to refer to OBJECTS within your function
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText
    },
    deleteTodo: function(position) {
        this.todos.splice(position,1);
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll: function() {
        var totalTodos = this.todos.length
        var completedTodos = 0
        
      this.todos.forEach(todo => {
          if (todo.completed === true) {
        completedTodos++;
    }
      });
    
        this.todos.forEach(todo => {
            if (completedTodos === totalTodos) {
                todo.completed = false;
            } else {
                todo.completed = true;
            }
        });
    }
};

var handlers = {
    addTodo: function () {
        var addTodoTextInput = document.querySelector('#addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = ''
        view.displayTodos()
    },
    changeTodo: function () {
        var changeTodoPositionInput = document.querySelector('#changeTodoPositionInput')
        var changeTodoTextInput = document.querySelector('#changeTodoTextInput')
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value)
        changeTodoPositionInput.value = ''
        changeTodoTextInput.value = ''
        view.displayTodos()
    },
    deleteTodo: function (position) {
        todoList.deleteTodo(position)
        view.displayTodos()
    },
    toggleCompleted: function () {
        var toggleCompletedPositionInput = document.querySelector('#toggleCompletedPositionInput')
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber)
        toggleCompletedPositionInput.valueAsNumber=''
        view.displayTodos()
    },
    toggleAll: function () {
        todoList.toggleAll()
        view.displayTodos()
    }
};
var view = {
    displayTodos: function() {        
        var todosUl = document.querySelector('ul')
        todosUl.innerHTML = '';

    for (let i = 0; i < todoList.todos.length; i++) {
        var todoLi = document.createElement('li')
        var todoTextWithCompletion = ''
        var todo = todoList.todos[i];

        if(todo.completed === true) {
            todoTextWithCompletion = '(x)' + todo.todoText;
        } else {
            todoTextWithCompletion = '( )' + todo.todoText;
        }

        todoLi.id = i
        todoLi.textContent = todoTextWithCompletion;
        todoLi.appendChild(this.createDeleteButton())
        todosUl.appendChild(todoLi) 
              
        }
    },
    createDeleteButton: function () {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton'
        return deleteButton;
    },
    setUpEventListeners: function () {
    var todosUl = document.querySelector('ul')

    todosUl.addEventListener('click', function () {
        console.log(event.target.parentNode.id)
        var elementClicked = event.target
        if (elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id))
        }
    });
 }
}
view.setUpEventListeners()