import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationsDemo2Component } from './form-validations-demo2.component';

describe('FormValidationsDemo2Component', () => {
  let component: FormValidationsDemo2Component;
  let fixture: ComponentFixture<FormValidationsDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidationsDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidationsDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
