import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  public getMembersUrl = 'http://localhost:4000/getAllMembers';

  public member: any;  

  constructor(private httpClient: HttpClient) { }


  getMembers(): Observable<any> {
    return this.httpClient.get(this.getMembersUrl)
  }

  getOneMember(member: any): Observable<any> {
    return this.httpClient.get(`http://localhost:4000/getOneMember/${member}`).pipe(map((result: Array<any>) => {
      console.log("see here", result)
      this.member = result[0];
      return result;
  }))
  }
  
  getMemberObject() {
    return this.member;
  }

  
}
