import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiobuttonDemoComponent } from './radiobutton-demo.component';

describe('RadiobuttonDemoComponent', () => {
  let component: RadiobuttonDemoComponent;
  let fixture: ComponentFixture<RadiobuttonDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiobuttonDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiobuttonDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
