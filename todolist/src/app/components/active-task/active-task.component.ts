import { Component } from '@angular/core';
import { Task } from '../task/interface/task.interface';

@Component({
  selector: 'app-active-task',
  templateUrl: './active-task.component.html',
  styleUrls: ['./active-task.component.scss']
})
export class ActiveTaskComponent {
  changeTaskStatus() {
    console.log('hiii');
  }
}
