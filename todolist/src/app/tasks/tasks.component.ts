import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  newTaskTitle: string = '';
  constructor(private router: Router) {}
  ngOnInit(): void {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }
  addTask() {
    if (this.newTaskTitle.trim()) {
      this.tasks.push({ title: this.newTaskTitle, completed: false });
      this.newTaskTitle = '';
      this.saveTasksToLocalStorage();
    }
  }
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveTasksToLocalStorage();
  }
  toggleTaskCompletion(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.saveTasksToLocalStorage();
  }
  navigateToRecap() {
    this.router.navigate(['/recap'], {
      state: {
        tasks: this.tasks
      }
    });
  }
  saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
  getInProgressCount(): number {
    return this.tasks.filter(task => !task.completed).length;
  }
  getCompletedCount(): number {
    return this.tasks.filter(task => task.completed).length;
  }
}