import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private ApiUrl = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) { }
  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.ApiUrl, httpOptions);
  }
  deleteTask(task: Task): Observable<Task>{
    const apiUrl = `${this.ApiUrl}/${task.id}`
    return this.http.delete<Task>(apiUrl);
  }
  updateRemainder(task: Task): Observable<Task>{
    const apiUrl = `${this.ApiUrl}/${task.id}`
    return this.http.put<Task>(apiUrl, task, httpOptions)
  }
  addTask(task:Task): Observable<Task>{
    return this.http.post<Task>(this.ApiUrl, task, httpOptions)
  }
}
