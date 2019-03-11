import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotieBtnComponent } from './notie-btn.component';

describe('KlarityBtnComponent', () => {
  let component: NotieBtnComponent;
  let fixture: ComponentFixture<NotieBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotieBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotieBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
