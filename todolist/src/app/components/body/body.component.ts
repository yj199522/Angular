import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  constructor(private router: Router) { }

  hasRouter(url:string):boolean{  
    return this.router.url === url;
  }
}
