import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../components/task/interface/task.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AddTaskService {

  constructor(private router: Router, private http: HttpClient) { }

  private AppUrl = 'http://localhost:3000';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoidGVzdDNAZ21haWwuY29tIiwiaWF0IjoxNjgxNjgxMTE5LCJleHAiOjE2ODE3Njc1MTl9.ZoX6KShDj7gUa_kcHmVT74Lr2-MLJ045XD1v_Hz7CPQ'
    })
  }

  addTask(task: Task): Observable<Task> {
    console.log(task);
    return this.http.post<Task>(this.AppUrl + '/tasks', task, this.httpOptions);
  }

  getTasks(status: string = ''): Observable<Task[]> {
    return this.http.get<Task[]>(this.AppUrl + '/tasks' + status, this.httpOptions);
  }

  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(this.AppUrl + '/tasks/' + String(id), this.httpOptions);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.patch<Task>(this.AppUrl + '/tasks/' + String(task.id), { ...task }, this.httpOptions);
  }

  deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(this.AppUrl + '/tasks/' + String(id), this.httpOptions);
  }
}
