//Version 2 of the app

//array with todo's

// var todos = ['item 1', 'item 2', 'item 3', 'item 4'];

//function to change todos

// function displayTodos(){
// 	console.log('My Todos:', todos);
// }

//function to add new todo

// function addTodo(todo) {
// 	todos.push(todo);
// 	displayTodos();
// }

// function to change a todo

// function changeTodo(position, newValue){
// 	todos[position] = newValue;
// 	displayTodos();
// }

//function to delete a todo

// function deleteTodo(postion){
// 	todos.splice(postion, 1);
// 	displayTodos();
// }

//Object Example
// var myComputer = {
// 	operatingSystem: 'mac',
// 	screenSize: '15inches',
// 	purchaseYear: 2011
// };

// //Another Object Example

// var joe = {
// 	name: "Joe",
// 	sayName: function sayName(){
// 		console.log(this.name);
// 	}
// }

//Version 3.0

// var todoList = {
// 	todos: ['item 1', 'item 2', 'item 3'],
// 	displayTodos: function() {
// 		console.log('My Todos', this.todos);
// 	}, 
// 	addTodo: fuction(todo){
// 		this.todos.push(todo);
// 		this.displayTodos();
// 	},
// 	changeTodo: function(postion, newValue) {
// 		this.todos[postion] = newValue;
// 		this.displayTodos();
// 	}, 
// 	deleteTodo: function(postion) {
// 		this.todos.splice(postion, 1);
// 		this.displayTodos();
// 	}
// };

//V4 Requirements
//todoList.addTodo should add object
// todolist.changeTodo should change the todoText property
// todoList.toggleCompleted should change the completed property

// var todoList = {
// 	todos: [],
// 	displayTodos: function() {
// 		if (this.todos.length === 0) {
// 			console.log('Your todo list is empty!');
// 		}else{
// 			console.log('My Todos:');
// 			for(var i = 0; i < this.todos.length; i++) {
// 				console.log(this.todos[i].todoText);
// 				if(this.todos[i].completed === true){
// 					console.log('(x)',this.todos[i].todoText);
// 				}else{
// 					console.log('( )', this.todos[i].todoText);
// 				}
// 			}
// 		}
// 	}, 
// 	addTodo: fuction(todo){
// 		this.todos.push({
// 			todoText: todoText,
// 			completed: false
// 		});
// 		this.displayTodos();
// 	},
// 	changeTodo: function(postion, todoText) {
// 		this.todos[position].todoText = todoText;
// 		this.displayTodos();
// 	}, 
// 	deleteTodo: function(postion) {
// 		this.todos.splice(postion, 1);
// 		this.displayTodos();
// 	},
// 	toggleCompleted: function(postion){
// 		var todo = this.todos[postion];
// 		todo.completed = !todo.completed;
// 		this.displayTodos();
// 	}
// };

//V5 Requirements
//.displayTodos should show .todoText
//.displayTodos should tell you if .todos is empty
//.displayTodos should show .completed

// var todoList = {
// 	todos: [],
// 	displayTodos: function() {
// 		if (this.todos.length === 0) {
// 			console.log('Your todo list is empty!');
// 		}else{
// 			console.log('My Todos:');
// 			for(var i = 0; i < this.todos.length; i++) {
// 				console.log(this.todos[i].todoText);
// 				if(this.todos[i].completed === true){
// 					console.log('(x)',this.todos[i].todoText);
// 				}else{
// 					console.log('( )', this.todos[i].todoText);
// 				}
// 			}
// 		}
// 	}, 
// 	addTodo: fuction(todo){
// // 		this.todos.push({
// // 			todoText: todoText,
// // 			completed: false
// // 		});
// // 		this.displayTodos();
// // 	},
// // 	changeTodo: function(postion, todoText) {
// // 		this.todos[position].todoText = todoText;
// // 		this.displayTodos();
// // 	}, 
// // 	deleteTodo: function(postion) {
// // 		this.todos.splice(postion, 1);
// // 		this.displayTodos();
// // 	},
// // 	toggleCompleted: function(postion){
// // 		var todo = this.todos[postion];
// // 		todo.completed = !todo.completed;
// // 		this.displayTodos();
// // 	}
// // };
// //V6 Requirements
// //.toggleAll: If everything is true, make everything false
// // toggleAll: Otherwise, make everything true
// //
// var todoList = {
// 	todos: [],
// 	displayTodos: function() {
// 		if (this.todos.length === 0) {
// 			console.log('Your todo list is empty!');
// 		}else{
// 			console.log('My Todos:');
// 			for(var i = 0; i < this.todos.length; i++) {
// 				console.log(this.todos[i].todoText);
// 				if(this.todos[i].completed === true){
// 					console.log('(x)',this.todos[i].todoText);
// 				}else{
// 					console.log('( )', this.todos[i].todoText);
// 				}
// 			}
// 		}
// 	}, 
// 	addTodo: fuction(todo){
// 		this.todos.push({
// 			todoText: todoText,
// 			completed: false
// 		});
// 		this.displayTodos();
// 	},
// 	changeTodo: function(postion, todoText) {
// 		this.todos[position].todoText = todoText;
// 		this.displayTodos();
// 	}, 
// 	deleteTodo: function(postion) {
// 		this.todos.splice(postion, 1);
// 		this.displayTodos();
// 	},
// 	toggleCompleted: function(postion){
// 		var todo = this.todos[postion];
// 		todo.completed = !todo.completed;
// 		this.displayTodos();
// 	},
// 	toggleAll: function() {
// 		var totalTodos = this.todos.length;
// 		var completedTodos = 0;
// 		//Get number of completed todos.
// 		for (var i = 0; i < totalTodos; i++) {
// 			if (this.todos[i].completed == true) {
// 				completedTodos++;
// 			}
// 		}
// 		//If everything's true, make everything false
// 	if(completedTodos === totalTodos) {
// 		for(var i = 0; i < totalTodos; i++) {
// 			this.todos[i].completed = false;
// 			}
// 		}else{
// 			for (var i = 0; i < totalTodos; i++) {
// 				this.todos[i].completed = true;
// 			}
// 		}
// 		this.displayTodos();
// 	}
// };

var todoList = {
  todos: [],
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(postion, todoText){
    this.todos[postion].todoText = todoText;
  },
  deleteTodo: function(postion) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(postion){
    var todo = this.todos[postion];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed == true) {
        completedTodos++
      }
    }
    if(completedTodos === totalTodos) {
		for(var i = 0; i < totalTodos; i++) {
			this.todos[i].completed = false;
			}
		}else{
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
		}
    }
  }
};

var displayTodosButton = document.getElementById('displayTodosButton');

var toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventListener('click', function(){
	todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function(){
  todoList.toggleAll();
});

var handlers = {
	addTodo: function() {
		var addTodoTextInput = document.getElementById('addTodoTextInput');
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = '';
		view.displayTodos();

	},
	changeTodo: function () {
		var changeTodoPostionInput = document.getElementById('changeTodoPostionInput');
		var changeTodoTextInput = document.getElementById('changeTodoTextInput');
		todoList.changeTodo(changeTodoPostionInput.valueAsNumber, changeTodoTextInput.value);
		changeTodoPostionInput.value = '';
		changeTodoTextInput.value = '';
		view.displayTodos();
	},
	deleteTodo: function(){
		var deleteTodoPostionInput = document.getElementById('deleteTodoPostionInput');
		todoList.deleteTodo(deleteTodoPostionInput.valueAsNumber);
		deleteTodoPostionInput.value = '';
		view.displayTodos();
	},
	toggleCompleted: function(){
		var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = '';
		view.displayTodos();
	},
	toggleAll: function(){
  		todoList.toggleAll();
  		view.displayTodos();
	}
};

var view = {
	displayTodos: function(){
		var todosUl = document.queryselector('ul');
		todosUl.innerHTML = '';
		for (var i = 0; i < todoList.todos.length; i++) {
			var todoLi = document.createElement('li');
			var todo = todoList.todos[i];
			var todoTextWithCompletion = '';

			if(todo.completed === true){
				todoTextWithCompletion = '(x) ' + todo.todoText;
			}else{
				todoTextWithCompletion = '( ) ' + todo.todoText;
			};

			todoLi.id = i;
			todoLi.textContent = todoTextWithCompletion;
			todoLi.appendChild(this.createDeleteButton);
			todosUl.appendChild(todLi);
		}
	}, 
	createDeleteButton: function(){
		var deleteButton = document.createElement('button');
		deleteButton.textContent = "Delete";
		deleteButton.className = 'deleteButton';
		return deleteButton;
	}
};

var todosUl = document.queryselector('ul');

todosUl.addEventListener('click', function(event){
	console.log(event.target.parentNode.id);
});




