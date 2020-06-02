import { TodoAppService } from './../services/todo-app.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {
  public todos: Todo[];

  constructor(public todoAppService: TodoAppService) { }

  ngOnInit(): void {
    this.todos = this.todoAppService.todo;
  }

  public toggleCheck(id: number): void {
    this.todoAppService.toggleCheck(id);
  }

  public deleteTask(id: number): void {
    this.todos = this.todoAppService.deleteTask(id);
  }

}
