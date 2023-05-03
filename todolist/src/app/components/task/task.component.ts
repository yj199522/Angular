import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './interface/task.interface';
import { dropdownList } from './interface/dropdownList';
import { AddTaskService } from 'src/app/service/add-task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() taskList!: Task[];
  @Output() changeStatus: EventEmitter<Task> = new EventEmitter();
  @Output() editDetails: EventEmitter<Task> = new EventEmitter();
  @Output() deleteDetails = new EventEmitter();

  dropdown = dropdownList;
  constructor() { }

  selectedOption(task: Task, status: string) {
    task.status = status;
    this.changeStatus.emit(task);
  }

  editTask(task: Task) {
    this.editDetails.emit(task);
  }

  deleteTask(task: Task) {
    console.log(task.id);
    this.deleteDetails.emit(task.id);
  }
}
