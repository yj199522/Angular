import { Component } from '@angular/core';
import { SideBarService } from 'src/app/service/side-bar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private sideBarService: SideBarService) { }

  changePage(url:string):void{
    this.sideBarService.changePage(url);
  }
}
