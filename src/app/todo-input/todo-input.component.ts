import { TodoAppService } from './../services/todo-app.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.sass']
})
export class TodoInputComponent implements OnInit {

  title: string;

  constructor(public todoAppService: TodoAppService) { }

  ngOnInit(): void {
  }


  addTask() {
    if (this.title.trim()) {
      const task: Todo = {
        title: this.title,
        id: Date.now(),
        completed: false,
        date: new Date()
      };
      this.todoAppService.todo.push(task);
      this.title = '';
    }
  }
}
