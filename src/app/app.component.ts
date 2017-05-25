import { Component } from '@angular/core';
import { Todo} from './todo';
import {TodoDataService} from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})

export class AppComponent {
  
  newTodo: Todo = new Todo(); 
  // Inject the dependency associated with the injection token 'TodoDataService'
  // assign it to a property called 'todoDataService'

  constructor(private todoDataService: TodoDataService){

  }

  //add a new todo item 
  addToDo(){
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }
  
  // service is now available as this.todoDataService
  toggleTodoComplete(todo){
  	this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo){
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos(){
    return this.todoDataService.getAllTodos();
  }

  title = 'app works!';
}
