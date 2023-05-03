import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'Task Scheduler';
  showAddToggle: Boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onAddToggle()
      .subscribe((value) => (this.showAddToggle = value));
  }

  toggleAddTask() {
    this.uiService.onShowAddToggle();
  }

  hasRouter(url:string): boolean{
    return this.router.url === url
  }
}
