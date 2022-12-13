import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminintloginComponent } from './adminintlogin.component';

describe('AdminintloginComponent', () => {
  let component: AdminintloginComponent;
  let fixture: ComponentFixture<AdminintloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminintloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminintloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
