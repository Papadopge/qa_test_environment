import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks: string[] = [];
  completedTasks: string[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }

  completeTask(index: number) {
    const completedTask = this.tasks.splice(index, 1);
    this.completedTasks.push(completedTask[0]);
  }

  removeCompletedTask(index: number) {
    this.completedTasks.splice(index, 1);
  }
}
