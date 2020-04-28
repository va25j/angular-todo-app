import { TodoAppService } from './../services/todo-app.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {

  todos: Todo[];

  constructor(public todoAppService: TodoAppService) { }

  ngOnInit(): void {
    this.todos = this.todoAppService.todo;
  }

  /* Done */
  toggleCheck(id: number) {
    this.todoAppService.toggleCheck(id);
  }

  /* Delete Task */
  deleteTask(id: number) {
    this.todoAppService.deleteTask(id);
  }

}
