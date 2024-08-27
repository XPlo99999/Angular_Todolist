import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { RecapComponent } from './recap/recap.component';

export const routes: Routes = [
    { path: '', redirectTo: '/tasks', pathMatch: 'full' },
    { path: 'tasks', component: TasksComponent },
    { path: 'recap', component: RecapComponent }
];