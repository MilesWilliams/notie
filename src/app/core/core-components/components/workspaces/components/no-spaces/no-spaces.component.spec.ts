import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSpacesComponent } from './no-spaces.component';

describe('NoSpacesComponent', () => {
  let component: NoSpacesComponent;
  let fixture: ComponentFixture<NoSpacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoSpacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
