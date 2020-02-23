import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks/tasks.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {

  public tasks: Array<any>;

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.getTasks().subscribe(result => {
      const { tasks } = result;
      this.tasks = tasks;
    })
  }

}
