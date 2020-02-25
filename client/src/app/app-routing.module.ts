import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';
import { TasksPageComponent } from './components/tasks-page/tasks-page.component';
import { MemberPageComponent } from './components/member-page/member-page.component';


const routes: Routes = [
  {path: "tasksPage", component: TasksPageComponent},
  {path: "allTasks", component: AllTasksComponent},
  {path: "memberPage", component: MemberPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
