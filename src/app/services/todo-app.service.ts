import { Todo } from './../interfaces/todo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoAppService {
  public todo: Todo[];

  constructor() {
    this.todo = [];
  }

  /* Toggle */
  public toggleCheck(id: number): void {
    const i = this.todo.findIndex(t => t.id === id);
    this.todo[i].completed = !this.todo[i].completed;
  }

  /* Delete Task */
  public deleteTask(id: number): Todo[] {
    this.todo =  this.todo.filter(ita => ita.id !== id);
    return this.todo;
  }

}
