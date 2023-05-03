import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() title: string = 'Click me!';
  @Output() onButtonClick = new EventEmitter();
  onClick() {
    console.log('Button clicked!');
    this.onButtonClick.emit();
  }
}
