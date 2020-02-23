import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  public addTaskUrl = 'http://localhost:4000/addTask';

  public getTasksUrl = 'http://localhost:4000/getTasks'

  constructor(private httpClient: HttpClient) { }


  addTask(newTask: any): Observable<any> {
    return this.httpClient.post(this.addTaskUrl, newTask);
  }

  getTasks(): Observable<any> {
    return this.httpClient.get(this.getTasksUrl);
  }

}
