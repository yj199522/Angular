import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitlistTaskComponent } from './waitlist-task.component';

describe('WaitlistTaskComponent', () => {
  let component: WaitlistTaskComponent;
  let fixture: ComponentFixture<WaitlistTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitlistTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaitlistTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
