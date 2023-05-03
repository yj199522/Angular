import { Component } from '@angular/core';
import { AddTaskService } from 'src/app/service/add-task.service';
import { Task } from '../task/interface/task.interface';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent {
  constructor(private addTaskService: AddTaskService) { }
  title: string = '';
  description: string = '';
  task: Task = JSON.parse(localStorage.getItem('task') || '{}');

  ngOnInit(): void {
    console.log(this.task);
    this.title = this.task.title;
    this.description = this.task.description;
  }

  onSubmit() {
    if (!this.title) {
      alert('Please add a task title');
      return;
    }
    const newTask: Task = {
      ...this.task,
      title: this.title,
      description: this.description,
    }
    this.addTaskService.updateTask(newTask).subscribe((task: Task) => {
      alert('Task updated successfully');
    })
  }
}
