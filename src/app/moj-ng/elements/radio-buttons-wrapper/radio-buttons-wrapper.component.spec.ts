import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonsWrapperComponent } from './radio-buttons-wrapper.component';

describe('RadioButtonsWrapperComponent', () => {
  let component: RadioButtonsWrapperComponent;
  let fixture: ComponentFixture<RadioButtonsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButtonsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
