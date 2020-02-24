import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  public getMembersUrl = 'http://localhost:4000/getAllMembers';

  

  constructor(private httpClient: HttpClient) { }


  getMembers(): Observable<any> {
    return this.httpClient.get(this.getMembersUrl)
  }

  getOneMember(member: any): Observable<any> {
    return this.httpClient.get(`http://localhost:4000/getOneMember/${member}`)
  }


}
