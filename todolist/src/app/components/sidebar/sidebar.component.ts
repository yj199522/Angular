import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SideBarService } from 'src/app/service/side-bar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private sideBarService: SideBarService) { 
  }

  changePage(url:string):void{
    this.sideBarService.changePage(url);
  }
}
