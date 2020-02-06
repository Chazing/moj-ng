import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationsDemoComponent } from './form-validations-demo.component';

describe('FormValidationsDemoComponent', () => {
  let component: FormValidationsDemoComponent;
  let fixture: ComponentFixture<FormValidationsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidationsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidationsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
