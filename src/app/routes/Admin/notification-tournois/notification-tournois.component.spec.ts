import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationTournoisComponent } from './notification-tournois.component';

describe('NotificationTournoisComponent', () => {
  let component: NotificationTournoisComponent;
  let fixture: ComponentFixture<NotificationTournoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationTournoisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationTournoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
