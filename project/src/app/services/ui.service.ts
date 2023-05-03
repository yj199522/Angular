import { Injectable } from '@angular/core';
import{Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  showAddToggle:boolean = false;
  subject = new Subject<any>();

  constructor() { }
  onShowAddToggle(): void{
    this.showAddToggle = !this.showAddToggle
    this.subject.next(this.showAddToggle)
  }

  onAddToggle(): Observable<any>{
    return this.subject.asObservable();
  }
}
