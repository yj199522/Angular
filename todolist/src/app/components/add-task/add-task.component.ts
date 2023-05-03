import { Component } from '@angular/core';
import { AddTaskService } from 'src/app/service/add-task.service';
import { Task } from '../task/interface/task.interface';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  constructor(private addTaskService: AddTaskService) { }
  text:string = '';
  description:string = '';
  onSubmit(){
    if (!this.text) {
      alert('Please add a task title');
      return;
    }
    const newTask: Task = {
      title: this.text,
      description: this.description,
      status: 'active'
    }
    this.addTaskService.addTask(newTask).subscribe((task: Task) => {
      alert('Task added successfully');
      this.text = '';
      this.description = '';
    })
  }
}
