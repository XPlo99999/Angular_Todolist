import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Task {
  title: string;
  completed: boolean;
}
@Component({
  selector: 'app-recap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recap.component.html',
  styleUrl: './recap.component.scss'
})
export class RecapComponent implements OnInit {
  inProgressCount = 0;
  completedCount = 0;
  ngOnInit(): void {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      const tasks: Task[] = JSON.parse(storedTasks);
      this.inProgressCount = tasks.filter(task => !task.completed).length;
      this.completedCount = tasks.filter(task => task.completed).length;
    } else {
      console.log('Aucune tâche trouvée dans le LocalStorage.');
    }
  }
}
