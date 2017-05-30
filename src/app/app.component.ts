import { Component } from '@angular/core';
import { Todo } from './todo';
import {TodoDataService} from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})

export class AppComponent {
   
   //todos: Todo[] = [];
  // Inject the dependency associated with the injection token 'TodoDataService'
  // assign it to a property called 'todoDataService'

  constructor(private todoDataService: TodoDataService){

  }

  //handle event emitted by TodoListHeaderComponent
  onAddTodo(todo: Todo){
    this.todoDataService.addTodo(todo); 
  }
  
  // service is now available as this.todoDataService
  onToggleTodoComplete(todo: Todo){
  	this.todoDataService.toggleTodoComplete(todo);
  }

  onRemoveTodo(todo){
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos(){
    return this.todoDataService.getAllTodos();
  }
  
}
