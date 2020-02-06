import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsDemoHomeComponent } from './demo-home.component';

describe('ComponentsDemoHomeComponent', () => {
  let component: ComponentsDemoHomeComponent;
  let fixture: ComponentFixture<ComponentsDemoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsDemoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsDemoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
