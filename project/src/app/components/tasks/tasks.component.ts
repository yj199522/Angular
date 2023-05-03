import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  TaskList: Task[] = [];
  constructor(private taskService: TaskService) { }
  ngOnInit(): void {
    this.taskService.getTask().subscribe(tasks => this.TaskList = tasks)
  }
  onDelete(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => this.TaskList = this.TaskList.filter(t => t.id !== task.id))
  }
  onToggleRemainder(task: Task){
    task.reminder = !task.reminder
    this.taskService.updateRemainder(task).subscribe();
  }
  addTask(task: Task){
    this.taskService.addTask(task).subscribe(task=> this.TaskList.push(task))
  }
}
