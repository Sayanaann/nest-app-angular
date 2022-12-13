import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminintnavComponent } from './adminintnav.component';

describe('AdminintnavComponent', () => {
  let component: AdminintnavComponent;
  let fixture: ComponentFixture<AdminintnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminintnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminintnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
