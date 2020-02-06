import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab2Side2Component } from './tab2-side2.component';

describe('Tab2Side2Component', () => {
  let component: Tab2Side2Component;
  let fixture: ComponentFixture<Tab2Side2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab2Side2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab2Side2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
