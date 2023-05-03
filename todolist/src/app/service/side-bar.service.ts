import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  constructor(private router: Router) { }

  changePage(url:string):void{
    this.router.navigate(['/'+url]);
  }
}
