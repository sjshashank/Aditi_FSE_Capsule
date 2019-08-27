import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SearchRequest } from './search-request';

@Injectable({
  providedIn: 'root'
})

export class TaskManagerService {

  tasks: Task[];

  constructor(private http: HttpClient) { }

  getTasks(search: SearchRequest): Observable<any> {
    return this.http.post('http://localhost:8020/tasks/viewtasks/', JSON.stringify(search));
  }

  getTasksDetail(): Observable<any> {
    return this.http.get('http://localhost:8020/tasks/viewalltasks/');
  }

  updateTask(): boolean {
    return true;
  }

  addTask(): boolean {
    return true;
  }

  deleteTask(): boolean {
      return true;
  }

}
