import { Component, Input } from '@angular/core';
import { Task } from '../task/interface/task.interface';
import { AddTaskService } from 'src/app/service/add-task.service';
import { Router } from '@angular/router';
import { SideBarService } from 'src/app/service/side-bar.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  taskList: Task[] = []
  @Input() title: string = 'Task List';

  constructor(private taskService: AddTaskService, private router: Router, private sideBarService: SideBarService) { }
  ngOnInit(): void {
    this.taskService.getTasks(this.router.url).subscribe((tasks: Task[]) => {
      this.taskList = tasks;
    })
  }
  updateData(task: Task) {
    this.taskService.updateTask(task).subscribe((task: Task) => {
      this.taskService.getTasks(this.router.url).subscribe((tasks: Task[]) => {
        alert('Task updated successfully');
        this.taskList = tasks;
      })
    })
  }
  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe((data) => {
      this.taskService.getTasks(this.router.url).subscribe((tasks: Task[]) => {
        alert('Task deleted successfully');
        this.taskList = tasks;
      })
    })
  }
  editTask(task: Task) {
    this.sideBarService.changePage('/edit');
    localStorage.setItem('task', JSON.stringify(task));
  }
}
