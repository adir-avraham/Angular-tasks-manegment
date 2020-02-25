import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/services/members/members.service';
import { ActivatedRoute } from '@angular/router';


interface Member {
  name: string;
  _id: string | object;
  tasks: Array<object>;
}


@Component({
  selector: 'app-member-page',
  templateUrl: './member-page.component.html',
  styleUrls: ['./member-page.component.css']
})
export class MemberPageComponent implements OnInit {

  public member: Member = {name: "a", _id: "", tasks: []};
  constructor(private membersService: MembersService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.member = this.membersService.getMemberObject()
    //const member_id = this.activateRoute.snapshot.paramMap.get('_id')
    //this.membersService.getOneMember(member_id).subscribe(result=>{
     //this.member = result[0]
    //})
  }

}
