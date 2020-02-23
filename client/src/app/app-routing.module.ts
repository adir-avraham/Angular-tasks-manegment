import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';
import { TasksPageComponent } from './components/tasks-page/tasks-page.component';


const routes: Routes = [
  {path: "tasksPage", component: TasksPageComponent},
  {path: "allTasks", component: AllTasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
