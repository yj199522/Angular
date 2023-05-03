import { Component, EventEmitter, Output } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent {
  text: string = '';
  day: string = '';
  remainder: boolean = false;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  showAddTask: Boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onAddToggle().subscribe(value => this.showAddTask = value)
  }
  onSubmit() {
    if (!this.text || !this.day) {
      alert('Please enter task/day information')
      return
    }
    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.remainder
    }
    this.onAddTask.emit(newTask);
    this.text = ''
    this.day = ''
    this.remainder = false;
  }
}
