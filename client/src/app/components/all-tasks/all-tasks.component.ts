import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { MembersService } from 'src/app/services/members/members.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {

  public tasks: Array<any>;

  constructor(private tasksService: TasksService,
    private membersService: MembersService) { }

  ngOnInit() {
    this.tasksService.getTasks().subscribe(result => {
      const { tasks } = result;
      this.tasks = tasks;
    })
  }

  getOneMember(member_id: any) {
    this.membersService.getOneMember(member_id).subscribe(result =>{
      console.log(result)
    })
  }

}
