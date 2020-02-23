import { Component, OnInit } from "@angular/core";
import { TasksService } from "src/app/services/tasks/tasks.service";
import { Observable } from "rxjs";
import { MembersService } from 'src/app/services/members/members.service';

interface Member {
  _id: any;
  name: String;
}

@Component({
  selector: "app-tasks-page",
  templateUrl: "./tasks-page.component.html",
  styleUrls: ["./tasks-page.component.css"]
})
export class TasksPageComponent implements OnInit {

  public members: Array<Member>;
  
  constructor(private membersService: MembersService) {}

  
  ngOnInit() {

    this.membersService.getMembers().subscribe(result => {
      const { members } = result
      console.log(members)
      this.members = members;
    
    }, err => {
      console.log("some error")
    });
  
  }




}
