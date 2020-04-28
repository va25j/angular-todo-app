import { Todo } from './../interfaces/todo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoAppService {

  constructor() { }

  /* Array TODO */
  todo: Todo[] = [];

  /* Toggle */

  toggleCheck(id: number) {
    const i = this.todo.findIndex(t => t.id === id);
    this.todo[i].completed = !this.todo[i].completed;
  }

  /* Delete Task */
  deleteTask(id: number) {
    return this.todo = this.todo.filter(ita => ita.id !== id);
  }

}
