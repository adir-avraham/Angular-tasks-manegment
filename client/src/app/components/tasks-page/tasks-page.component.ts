import { Component, OnInit } from "@angular/core";
import { MembersService } from 'src/app/services/members/members.service';
import { FormBuilder } from '@angular/forms';
import { TasksService } from 'src/app/services/tasks/tasks.service';

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
  
  public myForm;
  
  public tasks: Array<any>;

  constructor(private membersService: MembersService,
     private formBuilder: FormBuilder,
     private tasksService: TasksService
     ) {
       this.myForm = this.formBuilder.group({
         member_id: "",
         task: "",
         date: null,
         done: false
       })
     }

  
  ngOnInit() {

    this.membersService.getMembers().subscribe(result => {
      const { members } = result
      console.log(members)
      this.members = members;
    
    }, err => {
      console.log("some error")
    });
  
    this.tasksService.getTasks().subscribe(result => {
      const { tasks } = result;
      this.tasks = tasks;
      console.log(tasks)
    })
  
  
  }


  
  addTask() {
            
    const newTask = {
      member_id: this.myForm.get("member_id").value,
      task: this.myForm.get("task").value,
      date: this.myForm.get('date').value,
      done: this.myForm.get('done').value
    }
    
    this.tasksService.addTask(newTask).subscribe( result => {
      console.log(result)
      if (result) {
        this.tasksService.getTasks().subscribe(result => {
          const { tasks } = result;
          this.tasks = tasks;
        })
        this.myForm.reset();
      }
    } 
    )
    
  }



}
